// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/app/I18n/request.ts');

const nextConfig = {
  // твоя конфигурация
};

export default withNextIntl(nextConfig);
