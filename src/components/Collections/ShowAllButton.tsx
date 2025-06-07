import React from 'react';
import Link from 'next/link';
import styles from './ShowAllButton.module.scss';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';

interface ShowAllButtonProps {
  link: string;
}

const ShowAllButton: React.FC<ShowAllButtonProps> = ({ link }) => {
  return (
    <Link href={link} className={styles.showAllCard} aria-label="Показать все рецепты в подборке">
      <div className={styles.showAllArrow}>
        <ArrowRightIcon className={styles.arrowIcon} aria-hidden="true" />
      </div>
      <span className={styles.showAllText}>Показать всё</span>
    </Link>
  );
};

export default ShowAllButton;
