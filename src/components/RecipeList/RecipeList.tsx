'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { recipes, Recipe } from '@/data/recipes';
import styles from './RecipeList.module.scss';

interface RecipeListProps {
  filters: {
    diet?: string;
    cuisine?: string;
    category?: string;
    subcategory?: string;
    search?: string;
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
    let filteredRecipes = Object.values(recipesData).filter(recipe => 
      typeof recipe === 'object' && 'id' in recipe
    ) as Recipe[];

    // Применяем поиск по названию, если есть поисковый запрос
    if (filters.search) {
      const searchQuery = filters.search.toLowerCase();
      filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchQuery)
      );
    }

    // Если нет других фильтров, возвращаем отфильтрованные по поиску рецепты
    if (!Object.entries(filters).some(([key, value]) => key !== 'search' && value)) {
      return filteredRecipes;
    }

    // Применяем остальные фильтры
    return filteredRecipes.filter(recipe => {
      const activeFilters = Object.entries(filters)
        .filter(([key, value]) => key !== 'search' && value);
      
      return activeFilters.every(([, categoryKey]) => {
        if (!categoryKey) return true;
        return hasCategory(recipe, categoryKey);
      });
    });
  };

  const filteredRecipes = getFilteredRecipes();

  if (filteredRecipes.length === 0) {
    return (
      <div className={styles.noResults}>
        <p>По вашему запросу ничего не найдено</p>
        {filters.search && (
          <div className={styles.allRecipes}>
            <h3>Все рецепты:</h3>
            <div className={styles.recipeList}>
              {Object.values(recipesData)
                .filter(recipe => typeof recipe === 'object' && 'id' in recipe)
                .map((recipe) => (
                  <Link 
                    key={recipe.id} 
                    href={`/recepty/recept/${recipe.name}-${recipe.id}`}
                    className={styles.recipeCard}
                  >
                    {recipe.imageMain && (
                      <div className={styles.imageContainer}>
                        <Image
                          src={recipe.imageMain}
                          alt={recipe.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                          priority={false}
                        />
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
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.recipeList}>
      {filteredRecipes.map((recipe) => (
        <Link 
          key={recipe.id} 
          href={`/recepty/recept/${recipe.name}-${recipe.id}`}
          className={styles.recipeCard}
        >
          {recipe.imageMain && (
            <div className={styles.imageContainer}>
              <Image
                src={recipe.imageMain}
                alt={recipe.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority={false}
              />
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
        </Link>
      ))}
    </div>
  );
}
