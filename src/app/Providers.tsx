'use client';

import { ReactNode, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ThemeRegistry from './ThemeRegistry';

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default function Providers({ children }: Props) {
  const [queryClient] = useState(new QueryClient());

  return (
    <ThemeRegistry options={{ key: 'mui', prepend: true }}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeRegistry>
  );
}
