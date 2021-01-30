import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import db from '../db.json';
import GlobalStyle from '../src/styles/globalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
        <meta property="og:image" content={db.bg} />
      </Head>
      <ThemeProvider theme={db.theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
