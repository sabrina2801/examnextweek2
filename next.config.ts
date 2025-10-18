// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // Другие настройки Next.js, если нужны
};

// Подключаем next-intl (ищет src/i18n/request.ts по умолчанию)
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);