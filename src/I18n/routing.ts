// src/i18n/request.ts
import { defineRouting } from 'next-intl/routing';
import { getRequestConfig } from 'next-intl/server';


export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || defineRouting.defaultLocale;
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});