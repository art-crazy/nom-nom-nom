import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import styles from './page.module.scss';

export default function RecipesPage() {
  return (
    <div className={styles.recipesPage}>
      <Breadcrumbs
        title="Рецепты"
        paths={[]}
      />
    </div>
  );
}
