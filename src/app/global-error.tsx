'use client';

import { useEffect } from 'react';
import styles from './error.module.scss';

export default function GlobalError({
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
    <html>
      <body>
        <div className={styles.container}>
          <h1>500</h1>
          <h2>Критическая ошибка</h2>
          <p>Произошла непредвиденная ошибка в приложении</p>
          <button onClick={reset} className={styles.button}>
            Попробовать снова
          </button>
        </div>
      </body>
    </html>
  );
} 