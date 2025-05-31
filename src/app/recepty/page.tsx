'use client';

import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { RecipeFilters } from '@/components/RecipeFilters/RecipeFilters';
import styles from './page.module.scss';

export default function RecipesPage() {
  return (
    <div className={styles.container}>
        <Breadcrumbs
          title="Рецепты"
          paths={[]}
        />
        <div className={styles.content}>
          <RecipeFilters currentPath={{}} />
          {/* Здесь будет список всех рецептов */}
        </div>
    </div>
  );
}
