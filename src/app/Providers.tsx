import { ReactNode } from 'react';

// import { Session } from 'next-auth';
// import { SessionProvider } from 'next-auth/react';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import ThemeRegistry from './ThemeRegistry';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function Providers({ children, params: { locale } }: Props) {
  // Receive messages provided in `i18n.ts`
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeRegistry options={{ key: 'mui', prepend: true }}>{children}</ThemeRegistry>
    </NextIntlClientProvider>
  );
}
