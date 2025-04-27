import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <ToastContainer />
    </>
  );
}

export default appWithTranslation(App);
