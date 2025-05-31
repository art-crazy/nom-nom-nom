import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.section}>
            <b>О нас</b>
            <Link href="/istoriya">Наша история</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/faq">Вопросы и ответы</Link>
        </div>
        <div className={styles.section}>
            <b>Помощь</b>
            <a href="#">Контакты</a>
            <a href="#">Условия</a>
        </div>
        <div className={styles.copyright}>
            © 2025 QuickCook. Все права защищены.
      </div>
    </footer>
  );
}
