import { metadata } from './metadata';
export { metadata };

import React, { Suspense } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { RecipeFilters } from '@/components/RecipeFilters/RecipeFilters';
import { RecipeList } from '@/components/RecipeList/RecipeList';
import styles from './page.module.scss';

type SearchParams = {
  diet?: string;
  cuisine?: string;
  category?: string;
  subcategory?: string;
  search?: string;
};

function RecipesContent({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const params = {
    diet: searchParams.diet,
    cuisine: searchParams.cuisine,
    category: searchParams.category,
    subcategory: searchParams.subcategory,
    search: searchParams.search
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

export default function RecipesPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <RecipesContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
