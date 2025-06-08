import { metadata } from './metadata';
export { metadata };

import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { RecipeFilters } from '@/components/RecipeFilters/RecipeFilters';
import { RecipeList } from '@/components/RecipeList/RecipeList';
import styles from './page.module.scss';

type SearchParams = Promise<{
  diet?: string;
  cuisine?: string;
  category?: string;
  subcategory?: string;
  search?: string;
}>;

export default async function RecipesContent({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const resolvedParams = await searchParams;
  const params = {
    diet: resolvedParams.diet,
    cuisine: resolvedParams.cuisine,
    category: resolvedParams.category,
    subcategory: resolvedParams.subcategory,
    search: resolvedParams.search
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs
        title={params.search ? `Поиск: ${params.search}` : "Рецепты"}
        paths={[]}
      />
      <div className={styles.content}>
        <RecipeFilters currentPath={params} />
        <RecipeList filters={params} />
      </div>
    </div>
  );
}
