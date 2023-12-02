import { useLocale, useTranslations } from 'next-intl';

import MenuItem from '@mui/material/MenuItem';

import { locales } from '@/shared/config/next-intl/config';

import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <MenuItem key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </MenuItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
