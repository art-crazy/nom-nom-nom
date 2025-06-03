'use client';

import { useEffect } from 'react';
import styles from './not-found.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Логирование ошибки в консоль
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h1>500</h1>
      <h2>Что-то пошло не так</h2>
      <p>Произошла ошибка при загрузке страницы</p>
      <button onClick={reset} className={styles.button}>
        Попробовать снова
      </button>
    </div>
  );
} 