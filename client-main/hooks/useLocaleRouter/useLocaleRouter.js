import { useRouter } from 'next/router';
import routesTranslation from '~/constants/routes/routesTranslation.mjs';

const useLocalRouter = () => {
  const { locale, push, query, replace, asPath, ...router } = useRouter();
  const localePush = (link, query) => {
    const translatedPath = routesTranslation[locale]?.[link]?.path || link;
    push({ pathname: translatedPath, query }, undefined, {
      shallow: true,
      query,
    });
  };
  const addQueryParam = (paramKey, paramValue) => {
    console.log(router);
    const params = new URLSearchParams(query);
    params.append(paramKey, paramValue);
    push(
      { pathname: asPath.split('?')[0], query: params.toString() },
      undefined,
      {
        shallow: true,
      }
    );
  };
  const removeQueryParam = (paramKey) => {
    const params = new URLSearchParams(query);
    params.delete(paramKey);
    replace(
      { pathname: asPath.split('?')[0], query: params.toString() },
      undefined,
      {
        shallow: true,
      }
    );
  };
  return { localePush, addQueryParam, removeQueryParam };
};

export default useLocalRouter;
