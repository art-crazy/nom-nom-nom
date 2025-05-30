'use client';

import React, { useRef, useEffect } from 'react';
import styles from './FilterGroup.module.scss';

interface FilterGroupProps {
  title: string;
  options: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  currentPath: {
    [key: string]: string | undefined;
  };
  type: string;
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
  const [isOpen, setIsOpen] = React.useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClick = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    } else if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (slug: string) => {
    onSelect(type, slug);
    setIsOpen(false);
  };

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    onSelect(type, '');
  };

  const selectedOption = options.find(option => option.slug === currentPath[type]);

  return (
    <div 
      ref={filterRef}
      className={styles.filterSection}
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={`${type}-options`}
    >
      <div 
        className={`${styles.filterHeader} ${disabled ? styles.disabled : ''}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="button"
        aria-label={`${title} filter`}
      >
        <div className={styles.filterTitle}>
          {title}
          {selectedOption && (
            <span className={styles.selectedTags}>
              {selectedOption.name}
              <button
                className={styles.clearButton}
                onClick={handleClear}
                aria-label="Clear selection"
              >
                ×
              </button>
            </span>
          )}
          {!selectedOption && placeholder && (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
        </div>
      </div>

      {isOpen && (
        <div 
          className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}
          role="listbox"
          id={`${type}-options`}
        >
          <ul className={styles.optionsList}>
            {options.map(option => (
              <li
                key={option.id}
                className={`${styles.option} ${option.slug === currentPath[type] ? styles.selected : ''}`}
                onClick={() => handleOptionClick(option.slug)}
                role="option"
                aria-selected={option.slug === currentPath[type]}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
