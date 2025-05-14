import styles from './RecipePage.module.scss';

export default async function RecipePage({ params }: { params: { recipe_id: string } }) {
  const awaitedParams = await params;
  const recipe_id = awaitedParams.recipe_id;

  const [name, id] = (() => {
    const parts = recipe_id.split('-');
    return [parts.slice(0, -1).join('-'), parts[parts.length - 1]];
  })();

  // Моковые данные (можно использовать name и id)
  const recipe = {
    title: name.replace(/-/g, ' '),
    rating: 4.5,
    reviews: 128,
    servings: 4,
    ingredients: [
      '2 стакана овсяных хлопьев',
      '1 стакан тёплой воды',
      '2 ст.л. оливкового масла',
    ],
    steps: [
      {
        title: 'Шаг 1',
        text: 'Смешайте овсяные хлопья и воду в большой миске до однородности.',
      },
      {
        title: 'Шаг 2',
        text: 'Вымешивайте кашу 10 минут до гладкости и эластичности.',
      },
    ],
    comments: [
      {
        user: 'Иван Иванов',
        date: '2025-05-10',
        text: 'Отличный рецепт! Пробовал вчера, получилось идеально.',
        likes: 24,
        replies: 3,
      },
    ],
  };

  return (
    <div className={styles.recipePage}>
      <div className={styles.topSection}>
        <div className={styles.imageColumn}>
          <div className={styles.mainImage}>Главное изображение рецепта</div>
          <div className={styles.imagesRow}>
            <div className={styles.subImage}>Изображение 1</div>
            <div className={styles.subImage}>Изображение 2</div>
            <div className={styles.subImage}>Изображение 3</div>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <h1>{recipe.title} (id: {id})</h1>
          <div className={styles.rating}>
            <span>★★★★☆</span>
            <span className={styles.ratingText}>(4.5/5 — 128 отзывов)</span>
          </div>
          <div className={styles.servingsBlock}>
            <button>-</button>
            <span>{recipe.servings} порции</span>
            <button>+</button>
          </div>
          <div className={styles.ingredientsTitle}>Ингредиенты</div>
          <ul className={styles.ingredientsList}>
            {recipe.ingredients.map((item, i) => (
              <li key={i}><input type="checkbox" /> {item}</li>
            ))}
          </ul>
          <div className={styles.actionBtns}>
            <button className={styles.saveBtn}>♡ Сохранить рецепт</button>
            <button className={styles.shareBtn}>Поделиться</button>
          </div>
        </div>
      </div>
      <div className={styles.instructions}>
        <h2>Инструкция</h2>
        {recipe.steps.map((step, i) => (
          <div className={styles.step} key={i}>
            <div className={styles.stepTitle}>{step.title}</div>
            <div className={styles.stepImage}>Изображение шага {i + 1}</div>
            <div className={styles.stepText}>{step.text}</div>
          </div>
        ))}
      </div>
      <div className={styles.commentsSection}>
        <h2>Комментарии</h2>
        <textarea className={styles.commentInput} placeholder="Напишите ваш комментарий..." />
        <button className={styles.postBtn}>Отправить</button>
        <div className={styles.comment}>
          <div className={styles.commentHeader}>
            <span className={styles.avatar}>👤</span>
            <span className={styles.userName}>Иван Иванов</span>
            <span className={styles.commentDate}>2025-05-10</span>
          </div>
          <div className={styles.commentText}>{recipe.comments[0].text}</div>
          <div className={styles.commentActions}>
            <span>👍 {recipe.comments[0].likes}</span>
            <span>💬 {recipe.comments[0].replies}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
