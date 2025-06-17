import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { notFound } from 'next/navigation';
import { getRecipeById } from '@/services/api';

interface PageProps {
  params: Promise<{
    recipe_id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { recipe_id } = await params;
  const id = (() => {
    const parts = recipe_id.split('-');
    return parts[parts.length - 1];
  })();

  try {
    const recipe = await getRecipeById(id);
    if (!recipe) {
      notFound();
    }

    const title = `${recipe.title} — простой пошаговый рецепт | Что приготовить`;
    const description = `Как приготовить блюдо: ${recipe.title} — простой и вкусный рецепт с пошаговой инструкцией`;
    const ogTitle = `Рецепт "${recipe.title} — быстро, просто и вкусно"`;
    const ogDescription = `${recipe.title} — Теперь ты знаешь, что приготовить быстро, вкусно и с пошаговой инструкцией`;
    const canonicalUrl = `${siteConfig.url.current}/recept/${recipe_id}`;

    return {
      title,
      description,
      keywords: [
        recipe.title,
        'рецепт',
        'пошаговый рецепт',
        'как приготовить',
        'кулинарный рецепт',
        'простой рецепт',
        'вкусный рецепт',
        'домашний рецепт',
        'рецепт блюда'
      ],
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        type: 'article',
        locale: 'ru_RU',
        siteName: siteConfig.metadata.name,
        url: canonicalUrl,
        images: recipe.imageMain ? [
          {
            url: recipe.imageMain,
            width: 800,
            height: 600,
            alt: recipe.title
          }
        ] : undefined
      },
      alternates: {
        canonical: canonicalUrl
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      }
    };
  } catch (error) {
    notFound();
  }
}
