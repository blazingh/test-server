const process = require('process');

// const routesTranslation = import('./constants/routes/routesTranslation.mjs');

//the first locale will be the default one
const locales = ['tr', 'en'];

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  images: {
    domains: [process.env.IMAGE_DOMAIN, 'api.distedavim.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: locales,
    defaultLocale: locales[0],
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    WEB_API_URL: process.env.WEB_API_URL,
    LUMEN: process.env.LUMEN,
    LUUMEN: process.env.LUUMEN,
    SERVICE_TEST1: process.env.SERVICE_TEST1,
  },
  env: {
    WEB_API_URL: process.env.WEB_API_URL,
    LUMEN: process.env.SERVICETESTTWO,
    LUUMEN: process.env.LUUMEN,
    SERVICE_TEST1: process.env.SERVICE_TEST1,
  },
  // async rewrites() {
  //   let localeRoutes = [];
  //   await routesTranslation.then((res) => {
  //     locales.map((lang) => {
  //       if (lang !== locales[0]) {
  //         for (const route in res.default[lang]) {
  //           if (
  //             Object.prototype.hasOwnProperty.call(res.default[lang], route)
  //           ) {
  //             localeRoutes.push({
  //               source: `/${lang}${res.default[lang][route].path}`,
  //               destination: route,
  //               locale: false,
  //             });
  //             localeRoutes.push({
  //               source: `/${locales[0]}${res.default[lang][route].path}`,
  //               destination: route,
  //               locale: false,
  //             });
  //           }
  //         }
  //       }
  //     });
  //   });
  //   return localeRoutes;
  // },
};

module.exports = nextConfig;
