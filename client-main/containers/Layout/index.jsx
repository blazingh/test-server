import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import NavBar from '~/components/layout/NavBar';
import UserFooter from '~/components/layout/UserFooter';
import Meta from '~/components/Meta';
import routes, { authRoutes, nonAuthRoutes } from '~/constants/routes/routes';
import { AuthContext } from '~/contexts/Auth';
import useLocalRouter from '~/hooks/useLocaleRouter/useLocaleRouter';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const { localePush } = useLocalRouter();

  const [{ user }] = useContext(AuthContext);

  useEffect(() => {
    const parentRoute = '/' + (pathname.split('/')[1] || '');
    if (authRoutes.includes(parentRoute) && !user) {
      localePush(routes.account, { redirect: pathname });
    }
    if (nonAuthRoutes.includes(parentRoute) && user) {
      localePush(routes.profile);
    }
  }, [pathname, user]);

  return (
    <>
      <Meta />
      <NavBar />
      <main className=" w-full max-w-2xl mx-auto px-2 mb-24">{children}</main>
      <UserFooter />
    </>
  );
};

export default Layout;
