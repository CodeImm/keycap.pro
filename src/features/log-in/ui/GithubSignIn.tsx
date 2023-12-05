'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

import Button from '@mui/material/Button';

import { paths } from '@/shared/routing';

export const GithubSignIn = () => {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <Button
      variant="contained"
      onClick={() =>
        signIn('github', {
          callbackUrl: callbackUrl ?? paths.exercises,
        })
      }
    >
      Sign in with Github
    </Button>
  );
};
