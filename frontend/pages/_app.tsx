import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react'; 
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // remove css for server side rendering
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
