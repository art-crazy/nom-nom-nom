import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.section}>
      <b>О нас</b>
      <a href="#">Наша история</a>
      <a href="#">Блог</a>
      <a href="#">Вакансии</a>
    </div>
    <div className={styles.section}>
      <b>Помощь</b>
      <a href="#">Вопросы и ответы</a>
      <a href="#">Контакты</a>
      <a href="#">Условия</a>
    </div>
    <div className={styles.copyright}>
      © 2025 QuickCook. Все права защищены.
    </div>
  </footer>
);

export default Footer;
