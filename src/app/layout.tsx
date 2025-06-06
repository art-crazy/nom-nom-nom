import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import Layout from "@/components/hoc/Layout";
import { siteConfig } from "@/config/site";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: siteConfig.metadata.title.default,
    description: siteConfig.metadata.description.default,
    keywords: "рецепты, кулинарные рецепты, рецепты с фото, пошаговые рецепты, рецепты на каждый день, быстрые рецепты, простые рецепты, рецепты для начинающих, рецепты супов, рецепты салатов, рецепты горячего, рецепты выпечки, рецепты десертов, диетические рецепты, вегетарианские рецепты, кухни мира, рецепты завтрака, рецепты обеда, рецепты ужина, калорийность блюд, БЖУ, советы по приготовлению, шеф-повар, кулинария",
    openGraph: {
        title: "QuickCook - Рецепты блюд с пошаговыми фото | Кулинарные рецепты на каждый день",
        description: "🍳 Большая коллекция проверенных рецептов с пошаговыми фото и видео. Готовьте вкусные блюда на каждый день: супы, салаты, горячее, выпечка, десерты. Рецепты для завтрака, обеда и ужина. Диетические и вегетарианские блюда. Кухни народов мира. Советы от шеф-поваров. Калорийность и БЖУ. Быстрые и простые рецепты для всей семьи.",
        type: "website",
        locale: "ru_RU",
        siteName: "QuickCook",
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
    icons: {
        icon: [
            { url: "/favicon.ico", type: "image/x-icon" },
            { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
            { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={inter.variable}>
        <body className="antialiased">
        <Layout>{children}</Layout>
        </body>
        </html>
    );
}
