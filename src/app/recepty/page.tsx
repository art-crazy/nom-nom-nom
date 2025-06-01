'use client';

import React from 'react';
import { RecipeFilters } from '@/components/RecipeFilters/RecipeFilters';
import { RecipeList } from '@/components/RecipeList/RecipeList';
import styles from './page.module.scss';

interface RecipesPageProps {
  searchParams: {
    diet?: string;
    cuisine?: string;
    category?: string;
    subcategory?: string;
  };
}

export default function RecipesPage({ searchParams }: RecipesPageProps) {
  return (
    <div className={styles.container}>
      <RecipeFilters currentPath={searchParams} />
      <RecipeList filters={searchParams} />
    </div>
  );
}
