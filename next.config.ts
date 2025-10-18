// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // ваши опции (если есть)
};

// Подключаем next-intl
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);