'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { RecipeFilters } from '@/components/RecipeFilters/RecipeFilters';
import { RecipeList } from '@/components/RecipeList/RecipeList';
import styles from './page.module.scss';

function RecipesContent() {
  const searchParams = useSearchParams();
  const params = {
    diet: searchParams.get('diet') || undefined,
    cuisine: searchParams.get('cuisine') || undefined,
    category: searchParams.get('category') || undefined,
    subcategory: searchParams.get('subcategory') || undefined,
    search: searchParams.get('search') || undefined
  };

  return (
    <>
      <Breadcrumbs
        title={params.search ? `Поиск: ${params.search}` : "Рецепты"}
        paths={[]}
      />
      <div className={styles.content}>
        <RecipeFilters currentPath={params} />
        <RecipeList filters={params} />
      </div>
    </>
  );
}

export default function RecipesPage() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <RecipesContent />
      </Suspense>
    </div>
  );
}
