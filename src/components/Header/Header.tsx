import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>🍴 QuickCook</div>
    <input className={styles.search} placeholder="Поиск рецептов по названию или ингредиенту..." />
    <div className={styles.icons}>
      <span className={styles.heart}>♡</span>
      <span className={styles.avatar}><img src="/avatar.png" alt="аватар" /></span>
    </div>
  </header>
);

export default Header; 