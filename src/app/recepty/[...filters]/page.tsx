'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { RecipeFilters } from '@/components/RecipeFilters/RecipeFilters';
import styles from './page.module.scss';

export default function RecipesFiltersPage() {
  // Получаем массив фильтров из URL
  const params = useParams();
  const filters = Array.isArray(params.filters) ? params.filters : params.filters ? [params.filters] : [];

  // Преобразуем фильтры в объект для передачи в RecipeFilters
  const [diet, cuisine, category, subcategory] = filters;
  const currentPath = { diet, cuisine, category, subcategory };

  // Формируем пути для хлебных крошек
  const breadcrumbPaths = filters.map((filter, index) => {
    const path = `/recepty/${filters.slice(0, index + 1).join('/')}`;
    return {
      title: filter,
      url: path,
      key: path // Добавляем уникальный ключ
    };
  });

  return (
    <div className={styles.recipesPage}>
      <Breadcrumbs
        title="Рецепты"
        paths={breadcrumbPaths}
      />
      <div className={styles.content}>
        <RecipeFilters currentPath={currentPath} />
        {/* Здесь будет список рецептов по фильтрам */}
      </div>
    </div>
  );
}
