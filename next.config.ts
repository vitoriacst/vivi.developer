import type { NextConfig } from "next";
const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
}


const nextConfig: NextConfig = {
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt'
  }
};

export default nextConfig;
