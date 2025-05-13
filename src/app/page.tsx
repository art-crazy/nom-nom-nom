import styles from './Home.module.scss';
import RecipeCard from '../components/RecipeCard/RecipeCard';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <h1 className={styles.h1}>Найдите, что приготовить за минуты.</h1>
        <p className={styles.subtitle}>Ищите или изучайте ниже</p>
        <div className={styles.iconWrap}>
          <span className={styles.bigIcon}>🍲</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.tags}>
          <div>
            <button className={styles.active}>🔥 Время гриля</button>
            <button>Завтрак</button>
            <button>Обед</button>
            <button>Ужин</button>
            <button>Перекус</button>
            <button>Ещё</button>
          </div>
          <div>
            <button className={styles.active}>🍝 Паста сегодня</button>
            <button>Мясо</button>
            <button>Курица</button>
            <button>Рыба</button>
            <button>Яйца</button>
            <button>Ещё</button>
          </div>
          <div>
            <button>Просто</button>
            <button>Быстро (20 мин)</button>
            <button>Средне</button>
            <button>Многоэтапно</button>
          </div>
        </div>
        <div className={styles.filters}>
          <select>
            <option>Выберите диету/цели</option>
          </select>
          <select>
            <option>Выберите кухню</option>
          </select>
        </div>
        <div className={styles.cardsSection}>
          <div>
            <RecipeCard
              title="Бастрая паста карбонара"
              desc="Классическая итальянская паста с яйцами и панчеттой"
              tags={['Fast', 'Dinner']}
            />
          </div>
          <div>
            <h2 className={styles.h2}>Быстро и просто</h2>
            <RecipeCard
              title="Овощи на сковороде за 15 минут"
              desc="Быстрый овощной стир фрай"
              tags={[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
