import Link from 'next/link';
import styles from './ShowAllButton.module.scss';

interface ShowAllButtonProps {
  link: string;
}

export default function ShowAllButton({ link }: ShowAllButtonProps) {
  return (
    <Link href={link} className={styles.showAllCard}>
      <div className={styles.showAllContent}>
        <span className={styles.showAllArrow}>→</span>
        <span className={styles.showAllText}>Показать всё</span>
      </div>
    </Link>
  );
} 