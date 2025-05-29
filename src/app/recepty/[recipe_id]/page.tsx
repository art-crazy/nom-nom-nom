import styles from './RecipePage.module.scss';
import { recipes } from '@/data/recipes';
import ServingsCalculator from '@/components/ServingsCalculator/ServingsCalculator';
import Image from 'next/image';
import ShareModal from '@/components/ShareModal/ShareModal';
import { useState } from 'react';

export default function RecipePage({ params }: { params: { recipe_id: string } }) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const recipe = recipes.find(r => r.id === params.recipe_id);

  if (!recipe) {
    return <div>Рецепт не найден</div>;
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className={styles.recipePage}>
      <div className={styles.topSection}>
        <div className={styles.imageColumn}>
          {recipe.imageMain && (
            <div className={styles.mainImage}>
              <Image
                src={recipe.imageMain}
                alt={recipe.title}
                width={800}
                height={600}
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
        <div className={styles.infoBlock}>
          <h1>{recipe.title}</h1>
          <div className={styles.rating}>
            <span>{'★'.repeat(Math.round(recipe.rating))}{'☆'.repeat(5 - Math.round(recipe.rating))}</span>
            <span className={styles.ratingText}>({recipe.rating}/5 — {recipe.reviews} отзывов)</span>
          </div>
          <ServingsCalculator recipe={recipe} />
          <div className={styles.actionBtns}>
            <button className={styles.saveBtn}>
              <span>Сохранить</span>
            </button>
            <button 
              className={styles.shareBtn}
              onClick={() => setIsShareModalOpen(true)}
            >
              <span>Поделиться</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.instructions}>
        <h2>Инструкция</h2>
        {recipe.steps.map((step, i) => (
          <div className={styles.step} key={i}>
            <div className={styles.stepTitle}>{step.title}</div>
            {step.image && (
              <div className={styles.stepImage}>
                <Image
                  className={styles.image}
                  src={step.image}
                  alt={`Шаг ${i + 1}: ${step.title}`}
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            <div className={styles.stepText}>{step.text}</div>
          </div>
        ))}
      </div>
      {/*<div className={styles.commentsSection}>*/}
      {/*  <h2>Комментарии</h2>*/}
      {/*  <textarea className={styles.commentInput} placeholder="Напишите ваш комментарий..." />*/}
      {/*  <button className={styles.postBtn}>Отправить</button>*/}
      {/*  {recipe.comments && recipe.comments.length > 0 && (*/}
      {/*    <div className={styles.comment}>*/}
      {/*      <div className={styles.commentHeader}>*/}
      {/*        <span className={styles.avatar}>👤</span>*/}
      {/*        <span className={styles.userName}>{recipe.comments[0].user}</span>*/}
      {/*        <span className={styles.commentDate}>{recipe.comments[0].date}</span>*/}
      {/*      </div>*/}
      {/*      <div className={styles.commentText}>{recipe.comments[0].text}</div>*/}
      {/*      <div className={styles.commentActions}>*/}
      {/*        <span>👍 {recipe.comments[0].likes}</span>*/}
      {/*        <span>💬 {recipe.comments[0].replies}</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</div>*/}

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        url={shareUrl}
        title={recipe.title}
      />
    </div>
  );
}
