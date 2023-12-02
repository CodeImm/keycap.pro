// Use type safe message keys with `next-intl`
type Messages = typeof import('./src/locales/ru.json');
declare interface IntlMessages extends Messages {}
