import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

const LINKS = [
    {
        text: 'Наша история',
        url: "/istoriya",
    },
    {
        text: 'Блог',
        url: "/blog",
    },
    {
        text: 'Вопросы и ответы',
        url: "/faq",
    },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.section} aria-label="О нас">
        <b>О нас</b>
          {LINKS.map((link, index) => (
              <Link key={index} href={link.url}>{link.text}</Link>
          ))}
      </nav>
      {/*<nav className={styles.section} aria-label="Помощь">*/}
      {/*  <b>Помощь</b>*/}
      {/*  <a href="#">Контакты</a>*/}
      {/*  <a href="#">Условия</a>*/}
      {/*</nav>*/}
      <div className={styles.copyright}>
        © 2025 «Что приготовить». Все права защищены.
      </div>
    </footer>
  );
}
