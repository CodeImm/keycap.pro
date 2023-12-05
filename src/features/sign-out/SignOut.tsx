'use client';

import { signOut } from 'next-auth/react';

interface Callback {
  onClick(): void;
}

type Props = { children({ onClick }: Callback): JSX.Element };

export const SignOut = ({ children }: Props) => {
  return (
    <>
      {children({
        onClick: () => signOut(),
      })}
    </>
  );
};
