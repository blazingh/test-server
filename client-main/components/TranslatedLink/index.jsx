import Link from 'next/link';
import { useRouter } from 'next/router';
import routesTranslation from '~/constants/routes/routesTranslation.mjs';
//
//works just like a Link component put adds translation to the given path
//params:
//    href: used to translate the given link to the currrent locale
//    query: object of query names and values will be added to the link paramaters
//
//example <translatedLink href="/klinikler" query={{name: value}}/>
//         will output <link href="/en/clinics/?name=value"/>
//
const TranslatedLink = ({ href, children, query }) => {
  const { locale } = useRouter();
  const translatedPath = routesTranslation[locale]?.[href]?.path || href;
  const as = translatedPath ? `/${locale}${translatedPath}` : undefined;

  return (
    <Link
      href={{ pathname: href, query: query }}
      as={{ pathname: as, query: query }}
    >
      {children}
    </Link>
  );
};

export default TranslatedLink;
