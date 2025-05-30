'use client';

import React, { useState } from 'react';
import styles from './FilterGroup.module.scss';

interface FilterGroupProps {
  title: string;
  options: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  currentPath: {
    diet?: string;
    cuisine?: string;
    category?: string;
    subcategory?: string;
  };
  type: 'diet' | 'cuisine' | 'category' | 'subcategory';
  parentType?: 'diet' | 'cuisine' | 'category';
  parentSlug?: string;
  onSelect: (type: string, slug: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function FilterGroup({
  title,
  options,
  currentPath,
  type,
  onSelect,
  disabled,
  placeholder
}: FilterGroupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(option => {
    const typeMap = {
      diet: currentPath.diet,
      cuisine: currentPath.cuisine,
      category: currentPath.category,
      subcategory: currentPath.subcategory
    };
    return typeMap[type] === option.slug;
  });

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(type, '');
  };

  const handleClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={styles.filterSection}>
      <div
        className={`${styles.filterHeader} ${isOpen ? styles.active : ''} ${disabled ? styles.disabled : ''}`}
        onClick={handleClick}
      >
        <div className={styles.filterTitle}>
          {title}
          {selectedOption ? (
            <span className={styles.selectedTag}>
              {selectedOption.name}
              <button
                className={styles.clearButton}
                onClick={handleClear}
                type="button"
              >
                ✕
              </button>
            </span>
          ) : placeholder && (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
        </div>
        <span className={styles.arrow}>▼</span>
      </div>

      {isOpen && !disabled && (
        <div className={styles.dropdown}>
          <div className={styles.optionsList}>
            {options.map(option => (
              <div
                key={option.id}
                className={`${styles.option} ${selectedOption?.id === option.id ? styles.selected : ''}`}
                onClick={() => onSelect(type, option.slug)}
              >
                {option.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
