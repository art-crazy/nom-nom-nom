'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';
import Search from './Search/Search';
import MobileNav from './MobileNav/MobileNav';
import NavItem from '@/components/Navigation/NavItem';

const Header = () => {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} onClick={handleLogoClick}>
          🍴 QuickCook
        </Link>
        <div className={styles.headerRight}>
          <Search />
          <div className={styles.desktopNav}>
            <NavItem type="recipes" className={styles.desktopNavItem} />
            <NavItem type="collections" className={styles.desktopNavItem} />
          </div>
        </div>
      </header>
      <MobileNav />
    </>
  );
};

export default Header;
