import styles from './RecipeCard.module.scss';

interface RecipeCardProps {
  title: string;
  desc: string;
  tags: string[];
}

const tagTranslations: Record<string, string> = {
  'Fast': 'Быстро',
  'Dinner': 'Ужин',
};

const RecipeCard = ({ title, desc, tags }: RecipeCardProps) => (
  <div className={styles.card}>
    <div className={styles.image}>Изображение рецепта</div>
    <div className={styles.info}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.tags}>
        {tags.map(tag => <span key={tag}>{tagTranslations[tag] || tag}</span>)}
      </div>
    </div>
  </div>
);

export default RecipeCard;
