'use client';

import { useTranslations } from 'next-intl';

import { Box, Button } from '@mui/material';

import { Link } from '@/shared/navigation';
import { paths } from '@/shared/routing';

export function AuthNavigation() {
  const t = useTranslations('Navigation');

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button component={Link} variant="contained" href={paths.login}>
        {t('logIn')}
      </Button>
      <Button component={Link} variant="contained" href={paths.signup}>
        {t('signUp')}
      </Button>
    </Box>
  );
}
