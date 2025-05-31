'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { RecipeFilters } from '@/components/RecipeFilters/RecipeFilters';
import styles from './page.module.scss';
import { dietCategories, cuisineCategories, dishCategories } from '@/data/categories';

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

export default function RecipesFiltersPage() {
  // Получаем массив фильтров из URL
  const params = useParams();
  const filters = Array.isArray(params.filters) ? params.filters : params.filters ? [params.filters] : [];

  // Преобразуем фильтры в объект для передачи в RecipeFilters
  const [diet, cuisine, category, subcategory] = filters;
  const currentPath = { diet, cuisine, category, subcategory };

  // Формируем пути для хлебных крошек
  const breadcrumbPaths = [
    { title: "Рецепты", url: "/recepty", key: "/recepty" },
    ...filters.map((filter, index) => {
      const path = `/recepty/${filters.slice(0, index + 1).join('/')}`;
      let title = filter;

      // Определяем правильный заголовок в зависимости от уровня фильтра
      if (index === 0 && dietCategories[filter as keyof typeof dietCategories]) {
        title = dietCategories[filter as keyof typeof dietCategories].title;
      } else if (index === 1 && cuisineCategories[filter as keyof typeof cuisineCategories]) {
        title = cuisineCategories[filter as keyof typeof cuisineCategories].title;
      } else if (index === 2 && dishCategories[filter as keyof typeof dishCategories]) {
        title = dishCategories[filter as keyof typeof dishCategories].title;
      }

      return {
        title,
        url: path,
        key: path
      };
    })
  ];

  // Определяем заголовок страницы
  let pageTitle = "Рецепты";
  const lastFilter = filters[filters.length - 1];
  
  if (lastFilter) {
    if (dietCategories[lastFilter as keyof typeof dietCategories]) {
      pageTitle = dietCategories[lastFilter as keyof typeof dietCategories].title;
    } else if (cuisineCategories[lastFilter as keyof typeof cuisineCategories]) {
      pageTitle = cuisineCategories[lastFilter as keyof typeof cuisineCategories].title;
    } else if (dishCategories[lastFilter as keyof typeof dishCategories]) {
      pageTitle = dishCategories[lastFilter as keyof typeof dishCategories].title;
    } else if (category && dishCategories[category as keyof typeof dishCategories]) {
      const categoryData = dishCategories[category as keyof typeof dishCategories] as CategoryWithSubcategories;
      if (categoryData.subcategories && lastFilter in categoryData.subcategories) {
        pageTitle = categoryData.subcategories[lastFilter].title;
      }
    }
  }

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
