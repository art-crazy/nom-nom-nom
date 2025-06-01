import styles from './Home.module.scss';
import { recipes } from '@/data/recipes';
import { Collection, COLLECTION_TYPES } from '@/types/collections';
import DefaultCollection from '@/components/Collections/DefaultCollection';
import FeaturedCollection from '@/components/Collections/FeaturedCollection';

export default function Home() {
  // Получаем первый рецепт для премьеры
  const premiereRecipe = recipes[1];

  // Создаем подборки рецептов
  const collections: Collection[] = [
    {
      title: 'Популярные рецепты',
      link: '/recipes/popular',
      type: COLLECTION_TYPES.FEATURED,
      recipes: Array(11).fill(null).map((_, index) => ({
        ...premiereRecipe,
        id: premiereRecipe.id + index // Используем числовой id
      }))
    },
    {
      title: 'Новые рецепты',
      link: '/recipes/new',
      type: COLLECTION_TYPES.DEFAULT,
      recipes: Array(11).fill(null).map((_, index) => ({
        ...premiereRecipe,
        id: premiereRecipe.id + index + 100 // Добавляем смещение для уникальности
      }))
    },
    {
      title: 'Рецепты на завтрак',
      link: '/recipes/breakfast',
      type: COLLECTION_TYPES.DEFAULT,
      recipes: Array(11).fill(null).map((_, index) => ({
        ...premiereRecipe,
        id: premiereRecipe.id + index + 200 // Добавляем смещение для уникальности
      }))
    },
    {
      title: 'Рецепты на обед',
      link: '/recipes/lunch',
      type: COLLECTION_TYPES.DEFAULT,
      recipes: Array(11).fill(null).map((_, index) => ({
        ...premiereRecipe,
        id: premiereRecipe.id + index + 300 // Добавляем смещение для уникальности
      }))
    }
  ];

  return (
    <div className={styles.home}>
      <div className={styles.main}>
        {collections.map((collection) => (
          collection.type === COLLECTION_TYPES.FEATURED ? (
            <FeaturedCollection key={collection.title} collection={collection} />
          ) : (
            <DefaultCollection key={collection.title} collection={collection} />
          )
        ))}
      </div>
    </div>
  );
}
