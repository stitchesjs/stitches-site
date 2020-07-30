import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { RadixProvider, theme } from '@modulz/radix';
import { prismTheme } from '../prismTheme';

const GlobalStyles = createGlobalStyle`
  ${prismTheme};

	::selection {
		background-color: ${theme.colors.blue600};
		color: ${theme.colors.white};
	}
`;

function App({ Component, pageProps }: AppProps) {
  const isDarkMode =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <RadixProvider>
      <Head>
        <title>Modulz</title>
        <link rel="icon" href={isDarkMode ? '/favicon-light.png' : '/favicon-dark.png'} />

        <link rel="stylesheet" href="https://core.modulz.app/fonts/fonts.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </RadixProvider>
  );
}

export default App;
