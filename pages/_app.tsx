import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { RadixProvider, theme } from '@modulz/radix';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MDXComponents } from '../components/MDXComponents';

const GlobalStyles = createGlobalStyle`
	body, button {
		font-family: ${theme.fonts.normal}
	}

	svg {
		vertical-align: middle;
	}

	pre {
		margin: 0;
		font-family: ${theme.fonts.mono}
	}

	::selection {
		background-color: ${theme.colors.blue600};
		color: ${theme.colors.white};
	}
`;

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDarkMode =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const isDocs = router.pathname.includes('/docs');

  return (
    <RadixProvider>
      <MDXProvider components={MDXComponents}>
        <Head>
          <title>Modulz</title>
          <link rel="icon" href={isDarkMode ? '/favicon-light.png' : '/favicon-dark.png'} />
          <link rel="stylesheet" href="https://core.modulz.app/fonts/fonts.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <GlobalStyles />

        <Header />

        <Component {...pageProps} />

        {!isDocs && <Footer />}
      </MDXProvider>
    </RadixProvider>
  );
}

export default App;
