#!/usr/bin/env node

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { recipes } from '../data/recipes.js';
import { dishCategories, cuisineCategories, dietCategories } from '../data/categories.js';

const baseUrl = 'http://localhost:3000';
const sitemapDir = join(process.cwd(), 'public', 'sitemaps');

// Создаем директорию для sitemap если её нет
try {
    mkdirSync(sitemapDir, { recursive: true });
} catch (error: any) {
    if (error.code !== 'EEXIST') {
        console.error('❌ Ошибка при создании директории sitemap:', error);
    }
}

// Функция для генерации URL основных страниц
function generateMainUrls() {
    return [
        baseUrl,
        `${baseUrl}/blog`,
        `${baseUrl}/faq`,
        `${baseUrl}/istoriya`
    ];
}

// Функция для генерации URL рецептов
function generateRecipeUrls() {
    return Object.values(recipes).map(recipe => 
        `${baseUrl}/recept/${recipe.name}-${recipe.id}`
    );
}

// Функция для генерации URL категорий
function generateCategoryUrls() {
    const urls: string[] = [];
    urls.push(`${baseUrl}/recepty`);
    
    // Основные категории
    Object.keys(dishCategories).forEach(category => {
        urls.push(`${baseUrl}/recepty/${category}`);
    });
    
    return urls;
}

// Функция для генерации URL подкатегорий
function generateSubcategoryUrls() {
    const urls: string[] = [];
    
    Object.entries(dishCategories).forEach(([categoryKey, categoryObj]) => {
        Object.keys(categoryObj.subcategories).forEach(subKey => {
            urls.push(`${baseUrl}/recepty/${categoryKey}/${subKey}`);
        });
    });
    
    return urls;
}

// Функция для генерации URL кухонь
function generateCuisineUrls() {
    const urls: string[] = [];
    
    Object.keys(cuisineCategories).forEach(cuisine => {
        urls.push(`${baseUrl}/recepty/${cuisine}`);
    });
    
    return urls;
}

// Функция для генерации URL диет
function generateDietUrls() {
    const urls: string[] = [];
    
    Object.keys(dietCategories).forEach(diet => {
        urls.push(`${baseUrl}/recepty/${diet}`);
    });
    
    return urls;
}

// Функция для генерации URL комбинаций
function generateCombinationUrls() {
    const urls: string[] = [];
    const dietKeys = Object.keys(dietCategories);
    const cuisineKeys = Object.keys(cuisineCategories);
    
    Object.entries(dishCategories).forEach(([categoryKey, categoryObj]) => {
        Object.keys(categoryObj.subcategories).forEach(subKey => {
            // Комбинации с кухней
            cuisineKeys.forEach(cuisine => {
                urls.push(`${baseUrl}/recepty/${cuisine}/${categoryKey}/${subKey}`);
            });
            
            // Комбинации с диетой
            dietKeys.forEach(diet => {
                urls.push(`${baseUrl}/recepty/${diet}/${categoryKey}/${subKey}`);
            });
            
            // Комбинации диета + кухня
            dietKeys.forEach(diet => {
                cuisineKeys.forEach(cuisine => {
                    urls.push(`${baseUrl}/recepty/${diet}/${cuisine}/${categoryKey}/${subKey}`);
                });
            });
        });
    });
    
    return urls;
}

// Функция для разделения массива URL на чанки
function chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

// Функция для генерации отдельного sitemap файла с поддержкой чанков
function generateSitemapFile(urls: string[], baseFilename: string, priority: string = '0.8') {
    const MAX_URLS_PER_FILE = 15000;
    const chunks = chunkArray(urls, MAX_URLS_PER_FILE);
    const results: { filename: string; count: number }[] = [];

    chunks.forEach((chunk, index) => {
        const filename = chunks.length === 1 ? baseFilename : `${baseFilename.replace('.xml', '')}-${index + 1}.xml`;
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunk.map(url => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

        const filePath = join(sitemapDir, filename);
        writeFileSync(filePath, sitemap, 'utf8');
        results.push({ filename, count: chunk.length });
    });

    return results;
}

// Функция для генерации индексного sitemap
function generateSitemapIndex(sitemaps: { filename: string; count: number }[]) {
    const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(({ filename }) => `  <sitemap>
    <loc>${baseUrl}/sitemaps/${filename}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

    const indexPath = join(process.cwd(), 'public', 'sitemap.xml');
    writeFileSync(indexPath, index, 'utf8');
}

// Функция для генерации всех sitemap
function generateAllSitemaps() {
    try {
        const allSitemaps: { filename: string; count: number }[] = [];

        // Генерируем sitemap для основных страниц
        allSitemaps.push(...generateSitemapFile(generateMainUrls(), 'sitemap-main.xml', '1.0'));

        // Генерируем sitemap для рецептов
        allSitemaps.push(...generateSitemapFile(generateRecipeUrls(), 'sitemap-recipes.xml', '0.9'));

        // Генерируем sitemap для категорий
        allSitemaps.push(...generateSitemapFile(generateCategoryUrls(), 'sitemap-categories.xml', '0.8'));

        // Генерируем sitemap для подкатегорий
        allSitemaps.push(...generateSitemapFile(generateSubcategoryUrls(), 'sitemap-subcategories.xml', '0.7'));

        // Генерируем sitemap для кухонь
        allSitemaps.push(...generateSitemapFile(generateCuisineUrls(), 'sitemap-cuisines.xml', '0.7'));

        // Генерируем sitemap для диет
        allSitemaps.push(...generateSitemapFile(generateDietUrls(), 'sitemap-diets.xml', '0.7'));

        // Генерируем sitemap для комбинаций (будет разбит на части если нужно)
        allSitemaps.push(...generateSitemapFile(generateCombinationUrls(), 'sitemap-combinations.xml', '0.6'));

        generateSitemapIndex(allSitemaps);

        // Выводим статистику
        console.log('\n📊 Статистика сгенерированных sitemap:');
        console.log('----------------------------------------');
        allSitemaps.forEach(({ filename, count }) => {
            console.log(`📑 ${filename}: ${count} URL`);
        });
        console.log('----------------------------------------');
        const totalUrls = allSitemaps.reduce((sum, { count }) => sum + count, 0);
        console.log(`📈 Общее количество URL: ${totalUrls}`);
        console.log('----------------------------------------');
        console.log('✅ Sitemap успешно созданы в директории:', sitemapDir);
        console.log('✅ Главный sitemap создан:', join(process.cwd(), 'public', 'sitemap.xml'));
    } catch (error) {
        console.error('❌ Ошибка при создании sitemap:', error);
    }
}

// Main execution
const command = process.argv[2];

switch (command) {
    case 'create-file':
        generateAllSitemaps();
        break;
    default:
        console.log(`
Available commands:
  create-file   - Create sitemap files with all recipe and category pages
        `);
}
