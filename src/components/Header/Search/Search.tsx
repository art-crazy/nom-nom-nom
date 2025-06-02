'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Search.module.scss';
import SearchIcon from '@/components/icons/SearchIcon';

const Search = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/recepty?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/recepty');
    }
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.search}
        placeholder="Поиск по рецептам"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchIcon className={styles.searchIcon} />
      <button type="submit" className={styles.searchButton}>
        Найти
      </button>
    </form>
  );
};

export default Search; 