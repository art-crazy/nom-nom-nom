import styles from './Collections.module.scss';
import { Collection } from '@/types/collections';
import Image from 'next/image';
import Link from 'next/link';
import ScrollableContainer from './ScrollableContainer';
import ShowAllButton from './ShowAllButton';

interface DefaultCollectionProps {
  collection: Collection;
}

export default function DefaultCollection({ collection }: DefaultCollectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{collection.title}</h2>
        <Link href={collection.link} className={styles.sectionLink}>
          Смотреть все
        </Link>
      </div>
      <ScrollableContainer scrollAmount={300}>
        <div className={styles.cardsContainer}>
          {collection.recipes.map((recipe) => (
            <Link href={`/recept/${recipe.name}-${recipe.id}`} key={recipe.id} className={styles.card}>
              {recipe.imageMain && (
                <Image
                  src={recipe.imageMain}
                  alt={recipe.title}
                  width={300}
                  height={200}
                  className={styles.cardImage}
                />
              )}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{recipe.title}</h3>
                <p className={styles.cardDescription}>{recipe.description}</p>
                <div className={styles.cardMeta}>
                  <span>{recipe.cookTime}</span>
                  <span>★ {recipe.rating}</span>
                </div>
              </div>
            </Link>
          ))}
          <ShowAllButton link={collection.link} />
        </div>
      </ScrollableContainer>
    </div>
  );
}
