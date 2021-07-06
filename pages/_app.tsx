import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { DesignSystemProvider, darkTheme, global } from '@modulz/design-system';
import { Footer } from '@components/Footer';
import { DocsPage } from '@components/DocsPage';
import { useAnalytics } from '@lib/analytics';

const globalStyles = global({
  // Commenting out while we fix flashing issues
  // '@font-face': [
  //   {
  //     fontFamily: 'Untitled Sans',
  //     fontWeight: '400',
  //     fontDisplay: 'swap',
  //     src:
  //       'url(/fonts/UntitledSansWeb-Regular.woff2) format("woff2"), url(/fonts/UntitledSansWeb-Regular.woff) format("woff")',
  //   },
  //   {
  //     fontFamily: 'Untitled Sans',
  //     fontWeight: '500',
  //     fontDisplay: 'swap',
  //     src:
  //       'url(/fonts/UntitledSansWeb-Medium.woff2) format("woff2"), url(/fonts/UntitledSansWeb-Medium.woff) format("woff")',
  //   },
  //   {
  //     fontFamily: 'Söhne Mono',
  //     fontWeight: 'normal',
  //     fontStyle: 'normal',
  //     fontDisplay: 'swap',
  //     src:
  //       'url(/fonts/soehne-mono-web-buch.woff2) format("woff2"), url(/fonts/soehne-mono-web-buch.woff) format("woff")',
  //   },
  // ],

  html: {
    overflowX: 'hidden',
  },

  body: {
    margin: 0,
    backgroundColor: '$loContrast',
  },

  'body, button': {
    fontFamily: '$untitled',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violet5',
  },
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  const router = useRouter();

  useAnalytics();

  const isDocs = router.pathname.includes('/docs');

  return (
    <DesignSystemProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.toString() }}
        defaultTheme="system"
      >
        {isDocs ? (
          <DocsPage>
            <Component {...pageProps} />
          </DocsPage>
        ) : (
          <Component {...pageProps} />
        )}
        {!isDocs && <Footer />}
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default App;
