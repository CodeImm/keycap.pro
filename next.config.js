const withNextIntl = require('next-intl/plugin')(
  './src/shared/config/next-intl/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);
