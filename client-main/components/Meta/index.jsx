import Head from 'next/head';
import { useRouter } from 'next/router';
import { SITE_NAME } from '~/constants/index.js';
import routesTranslation from '~/constants/routes/routesTranslation.mjs';

const Meta = () => {
  SITE_NAME;
  const router = useRouter();
  const { title, desc } =
    routesTranslation[router.locale]?.[router.pathname] ||
    routesTranslation.tr['/'];
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
      <title>{title}</title>
      <meta name="description" content={desc} />

      <meta name="application-name" content={SITE_NAME} />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/assets/favicons/mstile-144x144.png?v=zXvom8rnqL"
      />
      <meta
        name="msapplication-config"
        content="/browserconfig.xml?v=zXvom8rnqL"
      />

      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Meta;
