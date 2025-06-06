import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: siteConfig.metadata.title.default,
    description: siteConfig.metadata.description.default,
    keywords: "рецепты, кулинарные рецепты, рецепты с фото, пошаговые рецепты, рецепты на каждый день, быстрые рецепты, простые рецепты, рецепты для начинающих, рецепты супов, рецепты салатов, рецепты горячего, рецепты выпечки, рецепты десертов, диетические рецепты, вегетарианские рецепты, кухни мира, рецепты завтрака, рецепты обеда, рецепты ужина, калорийность блюд, БЖУ, советы по приготовлению, шеф-повар, кулинария",
    openGraph: {
        title: siteConfig.metadata.title.og.default,
        description: siteConfig.metadata.description.og.default,
        type: "website",
        locale: "ru_RU",
        siteName: siteConfig.metadata.name,
        url: siteConfig.url.production,
    },
    alternates: {
        canonical: siteConfig.url.production,
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
    },
}; 