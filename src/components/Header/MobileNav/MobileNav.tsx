import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './MobileNav.module.scss';
import RecipesIcon from '@/components/icons/RecipesIcon';
import CollectionsIcon from '@/components/icons/CollectionsIcon';

const MobileNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.mobileNav}>
      <Link
        href="/recepty"
        className={`${styles.navItem} ${pathname === '/recepty' ? styles.active : ''}`}
      >
        <RecipesIcon className={styles.icon} />
        <span>Все рецепты</span>
      </Link>
      <Link
        href="/"
        className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}
      >
        <CollectionsIcon className={styles.icon} />
        <span>Подборки</span>
      </Link>
    </nav>
  );
};

export default MobileNav;
