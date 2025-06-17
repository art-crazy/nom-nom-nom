import { metadata } from './metadata';
export { metadata };

import styles from './Home.module.scss';
import { recipes } from '@/data';
import { Collection, COLLECTION_TYPES } from '@/types/collections';
import DefaultCollection from '@/components/Collections/DefaultCollection';
import FeaturedCollection from '@/components/Collections/FeaturedCollection';

export default function Home() {
  // Создаем подборки рецептов
  const collections: Collection[] = [
    {
      title: 'Летние супы без заморочек: 6 рецептов на каждый день',
      link: '/recepty',
      type: COLLECTION_TYPES.DEFAULT,
      recipes: [364, 365, 366, 367, 368, 369].map(id => recipes[id])
    },
    {
      title: '6 быстрых блюд на даче: готовим на мангале и плите',
      link: '/recepty',
      type: COLLECTION_TYPES.DEFAULT,
      recipes: [370, 371, 372, 373, 374, 375].map(id => recipes[id])
    },
    {
      title: 'Подборка категорий',
      link: '/recepty',
      type: COLLECTION_TYPES.FEATURED,
      recipes: [
        {
          id: 12345678,
          name: 'chinese-cuisine',
          title: 'Китайская кухня',
          description: 'Традиционные рецепты китайской кухни',
          link: '/recepty/chinese'
        },
        {
          id: 23456789,
          name: 'soups',
          title: 'Супы',
          description: 'Разнообразные рецепты супов',
          link: '/recepty/soups'
        },
        {
          id: 34567890,
          name: 'vegetarian',
          title: 'Вегетарианские блюда',
          description: 'Блюда без мяса',
          link: '/recepty/vegetarian'
        },
        {
          id: 45678901,
          name: 'fast-cooking',
          title: 'Быстрые рецепты',
          description: 'Блюда, которые можно приготовить быстро',
          link: '/recepty/fast-slow-cooking'
        },
        {
          id: 56789012,
          name: 'baking-desserts',
          title: 'Выпечка и десерты',
          description: 'Сладкие блюда и выпечка',
          link: '/recepty/baking-desserts'
        },
        {
          id: 67890123,
          name: 'low-calorie',
          title: 'Низкокалорийные блюда',
          description: 'Блюда для поддержания формы',
          link: '/recepty/low-calorie'
        },
        {
          id: 78901234,
          name: 'kids-menu',
          title: 'Детское меню',
          description: 'Блюда для детей',
          link: '/recepty/kids-menu'
        },
        {
          id: 89012345,
          name: 'main-dishes',
          title: 'Основные блюда',
          description: 'Основные блюда для любого случая',
          link: '/recepty/main-dishes'
        }
      ]
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
