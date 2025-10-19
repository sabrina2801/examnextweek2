import createNextIntlPlugin from "next-intl/plugin";


const withNextIntl = createNextIntlPlugin('./src/app/I18n/request.ts');

const nextConfig = {
  reactStrictMode: true,
  // другие настройки
};

export default withNextIntl(nextConfig);
