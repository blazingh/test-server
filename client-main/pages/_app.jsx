import Layout from '~/containers/Layout';
import UserAuthContext from '~/contexts/Auth';
import '~/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserAuthContext>
  );
}

export default MyApp;
