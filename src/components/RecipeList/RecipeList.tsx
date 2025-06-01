'use client';

import React from 'react';
import { recipes, Recipe } from '@/data/recipes';
import styles from './RecipeList.module.scss';

interface RecipeListProps {
  filters: {
    diet?: string;
    cuisine?: string;
    category?: string;
    subcategory?: string;
  };
}

export function RecipeList({ filters }: RecipeListProps) {
  const recipesData = recipes;

  // Функция для проверки наличия категории в любом из списков категорий рецепта
  const hasCategory = (recipe: Recipe, categoryKey: string): boolean => {
    // Проверяем все возможные списки категорий
    const categoryLists = [
      recipe.dishCategoriesList,
      recipe.dishCategoriesSubList,
      recipe.cuisineCategoriesList,
      recipe.dietCategoriesList
    ];

    // Проверяем наличие категории в каждом списке
    return categoryLists.some(list => {
      if (!list) return false;

      // Проверяем наличие категории по ключу
      if (list[categoryKey]) return true;

      // Проверяем наличие категории по id
      return Object.values(list).some(category => category.id === categoryKey);
    });
  };

  const getFilteredRecipes = () => {
    // Если нет фильтров, возвращаем все рецепты
    if (!Object.values(filters).some(Boolean)) {
      return Object.values(recipesData).filter(recipe => typeof recipe === 'object' && 'id' in recipe) as Recipe[];
    }

    return Object.values(recipesData).filter(recipe => {
      if (typeof recipe !== 'object' || !('id' in recipe)) return false;
      const recipeData = recipe as Recipe;

      // Проверяем все возможные фильтры
      const activeFilters = Object.entries(filters).filter(([_, value]) => value);

      // Если есть активные фильтры, проверяем каждый
      return activeFilters.every(([_, categoryKey]) => {
        if (!categoryKey) return true;
        return hasCategory(recipeData, categoryKey);
      });
    }) as Recipe[];
  };

  const filteredRecipes = getFilteredRecipes();

  if (filteredRecipes.length === 0) {
    return (
      <div className={styles.noResults}>
        <p>По вашему запросу ничего не найдено</p>
      </div>
    );
  }

  return (
    <div className={styles.recipeList}>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className={styles.recipeCard}>
          {recipe.imageMain && (
            <div className={styles.imageContainer}>
              <img src={recipe.imageMain} alt={recipe.title} />
            </div>
          )}
          <div className={styles.recipeInfo}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className={styles.recipeMeta}>
              <span>Время: {recipe.cookTime}</span>
              <span>Сложность: {recipe.difficulty}</span>
              <span>Рейтинг: {recipe.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
