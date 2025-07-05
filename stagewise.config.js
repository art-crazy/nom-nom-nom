/** @type {import('@stagewise/toolbar').Config} */
const config = {
    // Настройки для Next.js проекта
    framework: 'nextjs',
    
    // Пути к исходному коду
    sourcePaths: [
        './src/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}'
    ],
    
    // Исключения
    exclude: [
        'node_modules/**',
        '.next/**',
        'out/**',
        'dist/**'
    ],
    
    // Настройки для разработки
    dev: {
        port: 3000,
        host: 'localhost'
    },
    
    // Дополнительные настройки
    features: {
        screenshots: true,
        domContext: true,
        liveComments: true
    }
};

module.exports = config; 