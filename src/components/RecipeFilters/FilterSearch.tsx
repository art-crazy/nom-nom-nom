'use client';

import React from 'react';
import styles from './FilterSearch.module.scss';

interface FilterSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function FilterSearch({ value, onChange, placeholder = 'Поиск...' }: FilterSearchProps) {
  return (
    <form className={styles.searchContainer} role="search" onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        className={styles.searchInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Поиск по фильтрам"
      />
      {value && (
        <button
          className={styles.clearButton}
          onClick={() => onChange('')}
          type="button"
          aria-label="Очистить поиск"
        >
          ✕
        </button>
      )}
    </form>
  );
} 