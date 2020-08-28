import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { Footer } from '../components/Footer';
import { Box, darkThemeClass } from '@modulz/design-system';
import { MDXComponents } from '../components/MDXComponents';
import { ThemeToggle } from '../components/ThemeToggle';

import useDarkMode from 'use-dark-mode';

function App({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: null,
  });

  const router = useRouter();

  const isDarkMode =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const isDocs = router.pathname.includes('/docs');

  return (
    <MDXProvider components={MDXComponents}>
      <Head>
        <title>The modern CSS-in-JS library — Stitches</title>
        <link rel="icon" href={isDarkMode ? '/favicon-light.png' : '/favicon-dark.png'} />
        <link rel="stylesheet" href="https://core.modulz.app/fonts/fonts.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
body { margin: 0}

body, button {
	font-family: var(--fonts-untitled);
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

svg {
	vertical-align: middle;
}

pre {
	margin: 0;
	font-family: var(--fonts-mono)
}

::selection {
	background-color: var(--colors-blue600);
	color: white;
}
				`,
          }}
        />
      </Head>

      <Box css={{ bc: 'loContrast', minHeight: '100%' }}>
        <Box css={{ position: 'fixed', top: 0, right: 0, p: '3' }}>
          <ThemeToggle toggleTheme={() => darkMode.toggle()} />
        </Box>
        <Component {...pageProps} />
        {!isDocs && <Footer />}
      </Box>
    </MDXProvider>
  );
}

export default App;
