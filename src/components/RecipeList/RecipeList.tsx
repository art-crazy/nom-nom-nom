'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';
import styles from './RecipeList.module.scss';

interface RecipeListProps {
  filters: {
    diet?: string;
    cuisine?: string;
    category?: string;
    subcategory?: string;
    search?: string;
  };
  recipes: Recipe[];
  fallbackTriggered?: boolean;
}

export function RecipeList({ filters, recipes, fallbackTriggered }: RecipeListProps) {
  if (fallbackTriggered) {
    return (
      <section aria-label="Список рецептов" className={styles.noResults}>
        <p>По вашему запросу ничего не найдено</p>
        <div className={styles.allRecipes}>
          <h3>Все рецепты:</h3>
          <ul className={styles.recipeList}>
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <Link
                  href={`/recept/${recipe.name}-${recipe.id}`}
                  className={styles.recipeCard}
                >
                  {recipe.imageMain && (
                    <div className={styles.imageContainer}>
                      <Image
                        src={recipe.imageMain}
                        alt={recipe.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        priority={false}
                      />
                    </div>
                  )}
                  <div className={styles.recipeInfo}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                    <div className={styles.recipeMeta}>
                      <span>Время: {recipe.cookTime}</span>
                      <span>Сложность: {recipe.difficulty}</span>
                      <span>Рейтинг: {recipe.rating}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section aria-label="Список рецептов">
      <ul className={styles.recipeList}>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link
              href={`/recept/${recipe.name}-${recipe.id}`}
              className={styles.recipeCard}
            >
              {recipe.imageMain && (
                <div className={styles.imageContainer}>
                  <Image
                    src={recipe.imageMain}
                    alt={recipe.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority={false}
                  />
                </div>
              )}
              <div className={styles.recipeInfo}>
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
                <div className={styles.recipeMeta}>
                  <span>Время: {recipe.cookTime}</span>
                  <span>Сложность: {recipe.difficulty}</span>
                  <span>Рейтинг: {recipe.rating}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
