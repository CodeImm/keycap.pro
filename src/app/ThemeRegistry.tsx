import { ReactNode } from 'react';

import { Options } from '@emotion/cache';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@/shared/styles';

export default function ThemeRegistry({ options, children }: { options: Options; children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={options}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
