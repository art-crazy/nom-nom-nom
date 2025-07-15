import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { RecipeFilters } from '@/components/RecipeFilters/RecipeFilters';
import { RecipeList } from '@/components/RecipeList/RecipeList';
import { Pagination } from '@/components/Pagination/Pagination';
import { getRecipes } from '@/services/api';
import styles from '../page.module.scss';
import {dishCategories} from "@/data/categories/dishCategories";
import {dietCategories} from "@/data/categories/dietCategories";
import {cuisineCategories} from "@/data/categories/cuisineCategories";
import { LIMIT } from '@/config/limit.constants';
import { generateMetadata } from './metadata';

export { generateMetadata };

const RECIPES_PATH = { title: "Рецепты", url: "/recepty", key: "/recepty" };

type CategoryWithSubcategories = {
  id: string;
  title: string;
  subcategories: {
    [key: string]: {
      id: string;
      title: string;
    };
  };
};

type CategoryMap = {
  [key: string]: {
    id: string;
    title: string;
  };
};

const categoryMaps: Record<string, CategoryMap> = {
  diet: dietCategories,
  cuisine: cuisineCategories,
  dish: dishCategories
};

const getCategoryTitle = (filter: string): string | undefined => {
  for (const categories of Object.values(categoryMaps)) {
    const title = categories[filter]?.title;
    if (title) return title;
  }
  return undefined;
};

const getSubcategoryTitle = (category: string, subcategory: string): string | undefined => {
  const categoryData = dishCategories[category as keyof typeof dishCategories] as CategoryWithSubcategories;
  return categoryData?.subcategories?.[subcategory]?.title;
};

type Props = {
  params: Promise<{
    filters: string[];
  }>;
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
};

export default async function FilteredRecipesContent({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const filters = resolvedParams.filters;

  // Определяем типы всех фильтров
  const currentPath = {
    diet: filters.find(filter => filter in dietCategories),
    cuisine: filters.find(filter => filter in cuisineCategories),
    category: filters.find(filter => filter in dishCategories),
    subcategory: filters.find((filter, index) => {
      const prevFilter = filters[index - 1];
      return prevFilter && prevFilter in dishCategories &&
             filter in dishCategories[prevFilter as keyof typeof dishCategories].subcategories;
    }),
    search: resolvedSearchParams.search
  };

  // Формируем параметры для API
  const apiParams = {
    diet_categories: currentPath.diet,
    cuisine_categories: currentPath.cuisine,
    dish_categories: currentPath.category,
    subcategories: currentPath.subcategory,
    search: currentPath.search,
    page: currentPage,
    limit: LIMIT
  };

  const { items: recipes, total, limit, fallbackTriggered } = await getRecipes(apiParams);
  const totalPages = Math.ceil(total / limit);

  // Формируем пути для хлебных крошек
  const breadcrumbPaths = [
    RECIPES_PATH,
    ...filters.map((filter, index) => {
      const path = `/recepty/${filters.slice(0, index + 1).join('/')}`;
      let title: string | undefined;

      if (index === filters.length - 1 && currentPath.category && currentPath.subcategory) {
        // Если это последний элемент и у нас есть категория и подкатегория
        title = getSubcategoryTitle(currentPath.category, filter);
      } else {
        title = getCategoryTitle(filter);
      }

      return title ? { title, url: path, key: path } : null;
    }).filter((path): path is { title: string; url: string; key: string } => path !== null)
  ];

  // Определяем заголовок страницы
  const lastFilter = filters[filters.length - 1];
  const pageTitle = getCategoryTitle(lastFilter) ||
    (currentPath.category && currentPath.subcategory ? getSubcategoryTitle(currentPath.category, currentPath.subcategory) : undefined) ||
    "";

  // Убираем последний элемент из хлебных крошек, так как он будет в заголовке
  const finalBreadcrumbPaths = breadcrumbPaths.slice(0, -1);

  return (
    <div className={styles.container}>
      <Breadcrumbs
        title={pageTitle}
        paths={finalBreadcrumbPaths}
      />
      <div className={styles.content}>
        <RecipeFilters currentPath={currentPath} />
        <RecipeList filters={currentPath} recipes={recipes} fallbackTriggered={fallbackTriggered} />
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl={`/recepty/${filters.join('/')}`}
            searchParams={{ search: currentPath.search }}
          />
        )}
      </div>
    </div>
  );
}
