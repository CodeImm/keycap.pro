import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await (locale === 'ru'
      ? // When using Turbopack, this will enable HMR for `ru`
        import('../../../locales/ru.json')
      : import(`../../../locales/${locale}.json`))
  ).default,
}));
