'use client';

import { useEffect } from 'react';

export default function StagewiseToolbar() {
    useEffect(() => {
        // Инициализация Stagewise toolbar только в development режиме
        if (process.env.NODE_ENV === 'development') {
            import('@stagewise/toolbar').then(({ initToolbar }) => {
                initToolbar();
            }).catch((error) => {
                console.warn('Stagewise toolbar failed to load:', error);
            });
        }
    }, []);

    return null;
} 