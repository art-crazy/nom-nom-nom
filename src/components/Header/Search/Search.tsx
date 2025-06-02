import React from 'react';
import styles from './Search.module.scss';
import SearchIcon from '../../icons/SearchIcon';

const Search: React.FC = () => {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.search} placeholder="Поиск по рецептам" />
      <SearchIcon className={styles.searchIcon} />
      <button className={styles.searchButton}>Найти</button>
    </div>
  );
};

export default Search; 