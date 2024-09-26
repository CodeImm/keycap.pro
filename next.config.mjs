import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/shared/config/next-intl/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // esmExternals: "loose",
    serverComponentsExternalPackages: [
      'mongoose',
      '@typegoose/typegoose',
      'bcryptjs',
      'crypto'
    ],
  },
  // webpack: (config) => {
  //   config.experiments = {
  //     topLevelAwait: true
  //   };
  //   return config;
  // },
};

export default withNextIntl(nextConfig);
