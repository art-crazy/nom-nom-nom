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
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <button
          className={styles.clearButton}
          onClick={() => onChange('')}
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  );
} 