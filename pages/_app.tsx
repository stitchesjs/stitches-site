import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useDarkMode from 'use-dark-mode';
import { MDXProvider } from '@mdx-js/react';
import { Box, darkThemeClass } from '@modulz/design-system';
import { Footer } from '../components/Footer';
import { MDXComponents } from '../components/MDXComponents';
import { ThemeToggle } from '../components/ThemeToggle';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { DocsPage } from '../components/DocsPage';

function App({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default',
  });

  const router = useRouter();

  const isDocs = router.pathname.includes('/docs');

  return (
    <MDXProvider components={MDXComponents}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://core.modulz.app/fonts/fonts.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
body {
	margin: 0;
	background-color: var(--colors-loContrast);
}

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

      <TitleAndMetaTags title="Stitches" />

      <Box
        css={{
          position: 'absolute',
          top: '5',
          right: '3',
          zIndex: '2',
          bp2: {
            position: 'fixed',
            top: '3',
            right: '3',
          },
        }}
      >
        <ThemeToggle toggleTheme={() => darkMode.toggle()} />
      </Box>

      {isDocs ? (
        <DocsPage>
          <Component {...pageProps} />
        </DocsPage>
      ) : (
        <Component {...pageProps} />
      )}
      {!isDocs && <Footer />}
    </MDXProvider>
  );
}

export default App;
