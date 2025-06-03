import styles from './RecipePage.module.scss';
import { recipes } from '@/data/recipes';
import ServingsCalculator from '@/components/ServingsCalculator/ServingsCalculator';
import Image from 'next/image';
import ShareButton from '@/components/ShareButton/ShareButton';
import { SaveRecipeButton } from '@/components/UI/SaveRecipeButton/SaveRecipeButton';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    recipe_id: string;
  }>;
}

export default async function RecipePage({ params }: PageProps) {
  const awaitedParams = await params;
  const recipe_id = awaitedParams.recipe_id;

  const id = (() => {
    const parts = recipe_id.split('-');
    return parts[parts.length - 1];
  })();

  const recipe = recipes[Number(id)];
  if (!recipe) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Breadcrumbs
        title={recipe.title}
        paths={[
          { title: 'Рецепты', url: '/recepty' },
        ]}
      />
      <div className={styles.topSection}>
        <div className={styles.imageColumn}>
          {recipe.imageMain && (
            <div className={styles.mainImage}>
              <Image
                  className={styles.imageMain}
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
            <SaveRecipeButton recipeId={recipe_id} />
            <ShareButton
              url={`/recepty/${recipe_id}`}
              title={recipe.title}
            />
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
    </div>
  );
}
