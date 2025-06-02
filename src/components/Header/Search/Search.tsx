import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Search.module.scss';
import SearchIcon from '../../icons/SearchIcon';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/recepty?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/recepty');
    }
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSearch}>
      <input 
        className={styles.search} 
        placeholder="Поиск по рецептам" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchIcon className={styles.searchIcon} />
      <button type="submit" className={styles.searchButton}>Найти</button>
    </form>
  );
};

export default Search; 