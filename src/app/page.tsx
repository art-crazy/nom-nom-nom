import styles from './Home.module.scss';
import { recipes } from '@/data/recipes';
import { Collection } from '@/types/collections';
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
      type: 'featured',
      recipes: [premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe]
    },
    {
      title: 'Новые рецепты',
      link: '/recipes/new',
      type: 'default',
      recipes: [premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe]
    },
    {
      title: 'Рецепты на завтрак',
      link: '/recipes/breakfast',
      type: 'default',
      recipes: [premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe]
    },
    {
      title: 'Рецепты на обед',
      link: '/recipes/lunch',
      type: 'default',
      recipes: [premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe, premiereRecipe]
    }
  ];

  return (
    <div className={styles.home}>
      <div className={styles.main}>
        {collections.map((collection, index) => (
          collection.type === 'featured' ? (
            <FeaturedCollection key={index} collection={collection} />
          ) : (
            <DefaultCollection key={index} collection={collection} />
          )
        ))}
      </div>
    </div>
  );
}
