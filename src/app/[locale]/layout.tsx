import { ReactNode } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

import Box from '@mui/material/Box';

import { validateRequest } from '@/shared/config/lucia-auth/validateRequest';
import { locales } from '@/shared/config/next-intl/config';
import { Header } from '@/widgets/header';

import Providers from '../Providers';
import SessionProvider from '../SessionProvider';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  const sessionData = await validateRequest();

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Receive messages provided in `i18n.ts`
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <SessionProvider value={sessionData}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers params={{ locale }}>
              <Header user={sessionData.user} />
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
            </Providers>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
