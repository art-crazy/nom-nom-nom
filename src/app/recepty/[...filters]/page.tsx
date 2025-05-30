'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { RecipeFilters } from '@/components/RecipeFilters/RecipeFilters';
import styles from './page.module.scss';

export default function RecipesFiltersPage() {
  // Получаем массив фильтров из URL
  const params = useParams();
  const filters = Array.isArray(params.filters) ? params.filters : params.filters ? [params.filters] : [];

  // Преобразуем фильтры в объект для передачи в RecipeFilters
  const [diet, cuisine, category, subcategory] = filters;
  const currentPath = { diet, cuisine, category, subcategory };

  return (
    <div className={styles.recipesPage}>111111111
      <div className={styles.container}>
        <div className={styles.content}>
          <RecipeFilters currentPath={currentPath} />
          {/* Здесь будет список рецептов по фильтрам */}
        </div>
      </div>
    </div>
  );
}
