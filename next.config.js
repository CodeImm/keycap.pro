const withNextIntl = require('next-intl/plugin')(
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

module.exports = withNextIntl(nextConfig);
