'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

import Button from '@mui/material/Button';

import { paths } from '@/shared/routing';

export const GoogleSignIn = () => {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <Button
      variant="contained"
      onClick={() =>
        signIn('google', {
          callbackUrl: callbackUrl ?? paths.exercises,
        })
      }
    >
      Sign in with Google
    </Button>
  );
};
