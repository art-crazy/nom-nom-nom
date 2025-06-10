import { metadata } from './metadata';
export { metadata };

import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { RecipeFilters } from '@/components/RecipeFilters/RecipeFilters';
import { RecipeList } from '@/components/RecipeList/RecipeList';
import { Pagination } from '@/components/Pagination/Pagination';
import { getRecipes } from '@/services/api';
import styles from './page.module.scss';
import {LIMIT} from "@/config/limit.constants";

type SearchParams = Promise<{
  diet?: string;
  cuisine?: string;
  category?: string;
  subcategory?: string;
  search?: string;
  page?: string;
}>;

export default async function RecipesContent({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;

  const currentPath = {
    diet: resolvedParams.diet,
    cuisine: resolvedParams.cuisine,
    category: resolvedParams.category,
    subcategory: resolvedParams.subcategory,
    search: resolvedParams.search
  };

  const apiParams = {
    ...currentPath,
    page: currentPage,
    limit: LIMIT,
  };

  const { items: recipes, total, limit, fallbackTriggered } = await getRecipes(apiParams);
  const totalPages = Math.ceil(total / limit);

  return (
    <div className={styles.container}>
      <Breadcrumbs
        title={currentPath.search ? `Поиск: ${currentPath.search}` : "Рецепты"}
        paths={[]}
      />
      <div className={styles.content}>
        <RecipeFilters currentPath={currentPath} />
        <RecipeList filters={currentPath} recipes={recipes} fallbackTriggered={fallbackTriggered} />
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl="/recepty"
            searchParams={currentPath}
          />
        )}
      </div>
    </div>
  );
}
