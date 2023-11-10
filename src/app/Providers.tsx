'use client';

import { ReactNode } from 'react';

import ThemeRegistry from './ThemeRegistry';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeRegistry options={{ key: 'mui', prepend: true }}>
      {children}
    </ThemeRegistry>
  );
}
