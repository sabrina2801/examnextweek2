// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    // ВАЖНОЕ ДОБАВЛЕНИЕ ДЛЯ ТЕКУЩИХ ВЕРСИЙ NEXT.JS С TURBOPACK
    // Это предоставляет next-intl пространство для правильного разрешения алиасов
    turbopack: {}, 
    // ... ваши другие опции (если есть)
};

// Подключаем next-intl
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);