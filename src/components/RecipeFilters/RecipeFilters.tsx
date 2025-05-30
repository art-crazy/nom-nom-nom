'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './RecipeFilters.module.scss';
import { FilterGroup } from './FilterGroup';
import { dietCategories, cuisineCategories, dishCategories } from '@/data/categories';

interface RecipeFiltersProps {
  currentPath: {
    diet?: string;
    cuisine?: string;
    category?: string;
    subcategory?: string;
  };
}

export function RecipeFilters({ currentPath }: RecipeFiltersProps) {
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState(currentPath);

  useEffect(() => {
    setSelectedFilters(currentPath);
  }, [currentPath]);

  const handleFilterSelect = (type: string, slug: string) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };

      // Очищаем все фильтры после текущего
      if (type === 'diet') {
        delete newFilters.cuisine;
        delete newFilters.category;
        delete newFilters.subcategory;
      } else if (type === 'cuisine') {
        delete newFilters.category;
        delete newFilters.subcategory;
      } else if (type === 'category') {
        delete newFilters.subcategory;
      }

      if (slug) {
        newFilters[type as keyof typeof newFilters] = slug;
      } else {
        delete newFilters[type as keyof typeof newFilters];
      }

      return newFilters;
    });
  };

  const handleApplyFilters = () => {
    // Формируем URL
    const pathParts = [];
    if (selectedFilters.diet) pathParts.push(selectedFilters.diet);
    if (selectedFilters.cuisine) pathParts.push(selectedFilters.cuisine);
    if (selectedFilters.category) pathParts.push(selectedFilters.category);
    if (selectedFilters.subcategory) pathParts.push(selectedFilters.subcategory);

    const url = pathParts.length > 0 ? `/recepty/${pathParts.join('/')}` : '/recepty';
    router.push(url);
  };

  // Получаем доступные подкатегории на основе выбранной категории
  const getAvailableSubcategories = () => {
    if (!selectedFilters.category) return [];

    const category = dishCategories[selectedFilters.category as keyof typeof dishCategories];
    if (!category) return [];

    return Object.entries(category.subcategories).map(([id, data]) => ({
      id,
      name: data.title,
      slug: id
    }));
  };

  const filterGroups = [
    {
      title: 'Диета',
      type: 'diet' as const,
      options: Object.entries(dietCategories).map(([id, data]) => ({
        id,
        name: data.title,
        slug: id
      }))
    },
    {
      title: 'Кухня',
      type: 'cuisine' as const,
      options: Object.entries(cuisineCategories).map(([id, data]) => ({
        id,
        name: data.title,
        slug: id
      }))
    },
    {
      title: 'Категория',
      type: 'category' as const,
      options: Object.entries(dishCategories).map(([id, data]) => ({
        id,
        name: data.title,
        slug: id
      }))
    },
    {
      title: 'Любое блюдо',
      type: 'subcategory' as const,
      options: getAvailableSubcategories(),
      disabled: !selectedFilters.category,
    }
  ];

  const hasChanges = JSON.stringify(selectedFilters) !== JSON.stringify(currentPath);

  return (
    <div className={styles.filters}>
      {filterGroups.map((group, index) => (
        <FilterGroup
          key={group.type}
          title={group.title}
          options={group.options}
          currentPath={selectedFilters}
          type={group.type}
          parentType={index > 0 ? filterGroups[index - 1].type : undefined}
          parentSlug={index > 0 ? selectedFilters[filterGroups[index - 1].type] : undefined}
          onSelect={handleFilterSelect}
          disabled={group.disabled}
        />
      ))}

      <div className={styles.filterActions}>
        {hasChanges && (
          <button
            className={styles.applyButton}
            onClick={handleApplyFilters}
          >
            Применить фильтры
          </button>
        )}
      </div>
    </div>
  );
}
