'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { RecipeFilters } from '@/components/RecipeFilters/RecipeFilters';
import styles from './page.module.scss';
import { dietCategories, cuisineCategories, dishCategories } from '@/data/categories';

const RECIPES_PATH = { title: "Рецепты", url: "/recepty", key: "/recepty" };

// Определяем тип для категории с подкатегориями
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

const getCategoryTitle = (filter: string): string | undefined => {
  if (dietCategories[filter as keyof typeof dietCategories]) {
    return dietCategories[filter as keyof typeof dietCategories].title;
  }
  if (cuisineCategories[filter as keyof typeof cuisineCategories]) {
    return cuisineCategories[filter as keyof typeof cuisineCategories].title;
  }
  if (dishCategories[filter as keyof typeof dishCategories]) {
    return dishCategories[filter as keyof typeof dishCategories].title;
  }
  return undefined;
};

const getSubcategoryTitle = (category: string, subcategory: string): string | undefined => {
  const categoryData = dishCategories[category as keyof typeof dishCategories] as CategoryWithSubcategories;
  return categoryData?.subcategories?.[subcategory]?.title;
};

export default function RecipesFiltersPage() {
  // Получаем массив фильтров из URL
  const params = useParams();
  const filters = Array.isArray(params.filters) ? params.filters : params.filters ? [params.filters] : [];

  // Преобразуем фильтры в объект для передачи в RecipeFilters
  const [diet, cuisine, category, subcategory] = filters;
  const currentPath = { diet, cuisine, category, subcategory };

  // Формируем пути для хлебных крошек
  const breadcrumbPaths = [
    RECIPES_PATH,
    ...filters.map((filter, index) => {
      const path = `/recepty/${filters.slice(0, index + 1).join('/')}`;
      let title: string | undefined;

      if (index === filters.length - 1 && category && subcategory) {
        // Если это последний элемент и у нас есть категория и подкатегория
        title = getSubcategoryTitle(category, filter);
      } else {
        title = getCategoryTitle(filter);
      }

      return title ? { title, url: path, key: path } : null;
    }).filter((path): path is { title: string; url: string; key: string } => path !== null)
  ];

  // Определяем заголовок страницы
  const lastFilter = filters[filters.length - 1];
  const pageTitle = getCategoryTitle(lastFilter) || 
    (category && subcategory ? getSubcategoryTitle(category, subcategory) : undefined) || 
    "";

  // Убираем последний элемент из хлебных крошек, так как он будет в заголовке
  const finalBreadcrumbPaths = breadcrumbPaths.slice(0, -1);

  return (
    <div className={styles.recipesPage}>
      <Breadcrumbs
        title={pageTitle}
        paths={finalBreadcrumbPaths}
      />
      <div className={styles.content}>
        <RecipeFilters currentPath={currentPath} />
        {/* Здесь будет список рецептов по фильтрам */}
      </div>
    </div>
  );
}
