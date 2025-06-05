import React from 'react';
import Link from 'next/link';
import styles from './ShowAllButton.module.scss';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';

interface ShowAllButtonProps {
  link: string;
}

const ShowAllButton: React.FC<ShowAllButtonProps> = ({ link }) => {
  return (
    <Link href={link} className={styles.showAllCard}>
      <div className={styles.showAllArrow}>
        <ArrowRightIcon className={styles.arrowIcon} />
      </div>
      <div className={styles.showAllText}>Показать всё</div>
    </Link>
  );
};

export default ShowAllButton;
