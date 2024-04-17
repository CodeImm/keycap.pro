import { ReactNode } from 'react';

import { getServerSession } from 'next-auth';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

import Box from '@mui/material/Box';

import auth from '@/shared/config/next-auth/auth';
import { locales } from '@/shared/config/next-intl/config';
import { Header } from '@/widgets/header';

import Providers from '../Providers';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const session = await getServerSession(auth);

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <Providers params={{ locale }}>
      <html lang={locale}>
        <body className={inter.className}>
          <Header session={session} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              p: 3,
            }}
          >
            {children}
          </Box>
        </body>
      </html>
    </Providers>
  );
}
