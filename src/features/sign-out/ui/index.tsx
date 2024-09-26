'use client';

import { useTranslations } from 'next-intl';

import { MenuItem, Typography } from '@mui/material';

import { signOut } from '../actions/signOut';

export const SignOutButton = () => {
  const t = useTranslations('Navigation');

  const handleSignOut = () => {
    signOut();
  };

  return (
    <MenuItem onClick={handleSignOut}>
      <Typography textAlign="center">{t('signOut')}</Typography>
    </MenuItem>
  );
};
