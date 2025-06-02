'use client';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Search from './Search/Search';
import MobileNav from './MobileNav/MobileNav';

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
        <Link href="/" className={styles.logo} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          🍴 QuickCook
        </Link>
        <Search />
      </header>
      <MobileNav />
    </>
  );
};

export default Header;
