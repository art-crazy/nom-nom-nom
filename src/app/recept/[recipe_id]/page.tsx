import styles from './RecipePage.module.scss';
import ServingsCalculator from '@/components/ServingsCalculator/ServingsCalculator';
import Image from 'next/image';
import ShareButton from '@/components/ShareButton/ShareButton';
import { SaveRecipeButton } from '@/components/UI/SaveRecipeButton/SaveRecipeButton';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { notFound } from 'next/navigation';
import { generateMetadata } from './metadata';
import { getRecipeById } from '@/services/api';
import {Recipe} from "@/types/recipe";

export { generateMetadata };

interface PageProps {
  params: Promise<{
    recipe_id: string;
  }>;
}

export default async function RecipePage({ params }: PageProps) {
  const { recipe_id } = await params;

  const id = (() => {
    const parts = recipe_id.split('-');
    return parts[parts.length - 1];
  })();

  try {
    const recipe:Recipe = await getRecipeById(id);
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
        <article itemScope itemType="https://schema.org/Recipe" className={styles.topSection}>
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
                    itemProp="image"
                />
              </div>
            )}
          </div>
          <div className={styles.infoBlock}>
            <h1 itemProp="name">{recipe.title}</h1>
            <div className={styles.rating} itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
              {!!recipe.rating &&
                  <meta itemProp="ratingValue" content={recipe.rating.toString()} />
              }
              {!!recipe.reviews &&
                <meta itemProp="reviewCount" content={recipe.reviews.toString()} />
              }
              {!!recipe.rating &&
                <span>{'★'.repeat(Math.round(recipe.rating))}{'☆'.repeat(5 - Math.round(recipe.rating))}</span>
              }
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
        </article>
        <section className={styles.instructions}>
          <h2>Инструкция</h2>
          {recipe.steps.map((step, i) => (
            <div className={styles.step} key={i} itemProp="recipeInstructions">
              <h3 className={styles.stepTitle}>{step.title}</h3>
              {step.image && (
                <div className={styles.stepImage}>
                  <Image
                    className={styles.image}
                    src={step.image}
                    alt={`${step.title}`}
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className={styles.stepText}>{step.text}</div>
            </div>
          ))}
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error loading recipe:', error);
    notFound();
  }
}
