'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavItem.module.scss';
import RecipesIcon from '@/components/icons/RecipesIcon';
import CollectionsIcon from '@/components/icons/CollectionsIcon';

interface NavItemProps {
  type: 'recipes' | 'collections';
  className?: string;
  iconClassName?: string;
}

const NavItem: React.FC<NavItemProps> = ({ type, className, iconClassName }) => {
  const pathname = usePathname();
  
  const config = {
    recipes: {
      href: '/recepty',
      label: 'Все рецепты',
      icon: RecipesIcon,
      activePath: '/recepty'
    },
    collections: {
      href: '/',
      label: 'Подборки',
      icon: CollectionsIcon,
      activePath: '/'
    }
  };

  const { href, label, icon: Icon, activePath } = config[type];
  const isActive = pathname === activePath;

  return (
    <Link
      href={href}
      className={`${styles.navItem} ${isActive ? styles.active : ''} ${className || ''}`}
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon className={`${styles.icon} ${iconClassName || ''}`} aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
};

export default NavItem; 