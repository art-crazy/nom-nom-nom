import styles from './Collections.module.scss';
import { Collection } from '@/types/collections';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedCollectionProps {
  collection: Collection;
}

export default function FeaturedCollection({ collection }: FeaturedCollectionProps) {
  return (
    <div className={styles.featuredSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{collection.title}</h2>
        <Link href={collection.link} className={styles.sectionLink}>
          Смотреть все
        </Link>
      </div>
      <div className={styles.featuredCardsContainer}>
        {collection.recipes.map((recipe) => (
          <Link href={`/recipes/${recipe.id}`} key={recipe.id} className={styles.featuredCard}>
            {recipe.imageMain && (
              <Image
                src={recipe.imageMain}
                alt={recipe.title}
                fill
                className={styles.featuredCardImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            )}
            <div className={styles.featuredCardContent}>
              <h3 className={styles.featuredCardTitle}>{recipe.title}</h3>
              <p className={styles.featuredCardDescription}>{recipe.description}</p>
              <div className={styles.featuredCardMeta}>
                <span>{recipe.cookTime}</span>
                <span>★ {recipe.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 