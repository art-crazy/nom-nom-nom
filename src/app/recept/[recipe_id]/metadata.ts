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

    const hasVideo = !!recipe.videoUrl;
    const videoSuffix = hasVideo ? ' с видео' : '';
    
    const title = `${recipe.title} — простой пошаговый рецепт${videoSuffix} | Что приготовить`;
    const description = `Как приготовить блюдо: ${recipe.title} — простой и вкусный рецепт с пошаговой инструкцией${hasVideo ? ' и видео' : ''}`;
    const ogTitle = `Рецепт "${recipe.title} — быстро, просто и вкусно"${videoSuffix}`;
    const ogDescription = `${recipe.title} — Теперь ты знаешь, что приготовить быстро, вкусно и с пошаговой инструкцией${hasVideo ? ' и видео' : ''}`;
    const canonicalUrl = `${siteConfig.url.current}/recept/${recipe_id}`;

    const keywords = [
      recipe.title,
      'рецепт',
      'пошаговый рецепт',
      'как приготовить',
      'кулинарный рецепт',
      'простой рецепт',
      'вкусный рецепт',
      'домашний рецепт',
      'рецепт блюда'
    ];

    if (hasVideo) {
      keywords.push('видео рецепт', 'кулинарное видео', 'рецепт с видео');
    }

    const openGraph: any = {
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
    };

    // Добавляем видео метаданные если есть видео
    if (hasVideo) {
      openGraph.videos = [
        {
          url: recipe.videoUrl,
          width: 800,
          height: 450,
          type: 'video/mp4'
        }
      ];
    }

    return {
      title,
      description,
      keywords,
      openGraph,
      alternates: {
        canonical: canonicalUrl
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': hasVideo ? -1 : 0,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      }
    };
  } catch {
    notFound();
  }
}
