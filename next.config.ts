const withNextIntl = require('next-intl/plugin')('./src/request.ts');

module.exports = withNextIntl({
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
});
