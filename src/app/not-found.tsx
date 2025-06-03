import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, запрашиваемая страница не существует</p>
      <Link href="/" className={styles.button}>
        Вернуться на главную
      </Link>
    </div>
  );
}
