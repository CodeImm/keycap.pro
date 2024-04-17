import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/shared/config/next-intl/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      'mongoose',
      '@typegoose/typegoose',
      'bcryptjs',
    ],
  },
};

export default withNextIntl(nextConfig);
