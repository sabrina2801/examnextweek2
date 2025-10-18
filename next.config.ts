// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// 💡 УКАЗЫВАЕМ ТОЧНЫЙ ПУТЬ
const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.ts');

const nextConfig: NextConfig = {
    // Не забудьте про turbopack, как было рекомендовано ранее!
    // Это, вероятно, все еще необходимо для работы с Next.js 15.5.5 и Turbopack.
    turbopack: {}, 
};

export default withNextIntl(nextConfig);