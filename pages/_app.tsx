import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Box } from '@modulz/design-system';
import { MDXComponents } from '../components/MDXComponents';

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState(undefined);

  const router = useRouter();

  const isDarkMode =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const isDocs = router.pathname.includes('/docs');

  return (
    <MDXProvider components={MDXComponents}>
      <Head>
        <title>Modulz</title>
        <link rel="icon" href={isDarkMode ? '/favicon-light.png' : '/favicon-dark.png'} />
        <link rel="stylesheet" href="https://core.modulz.app/fonts/fonts.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
body { margin: 0}

body, button {
	font-family: var(--fonts-untitled);
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

      <div className={theme}>
        <Box css={{ bc: 'loContrast', minHeight: '100%' }}>
          <Header theme={theme} toggleTheme={(theme) => setTheme(theme)} />

          <Component {...pageProps} />

          {!isDocs && <Footer />}
        </Box>
      </div>
    </MDXProvider>
  );
}

export default App;
