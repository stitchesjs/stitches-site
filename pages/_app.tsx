import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { darkTheme, global } from '@modulz/design-system';
import { Footer } from '@components/Footer';
import { DocsPage } from '@components/DocsPage';
import { useAnalytics } from '@lib/analytics';

const globalStyles = global({
  body: {
    margin: 0,
    backgroundColor: '$loContrast',
  },

  'body, button': {
    fontFamily: '$untitled',
  },

  svg: { display: 'inline-block', verticalAlign: 'middle' },

  pre: { margin: 0 },

  '::selection': {
    backgroundColor: '$violet300',
  },
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  const router = useRouter();

  useAnalytics();

  // const [mounted, setMounted] = React.useState(false);

  // React.useEffect(() => {
  //   setMounted(true);
  // }, []);

  // An ugly, terrible and sad hack to scroll the page to the
  // anchor location when present. The reason this stopped working is
  // due to the dark theme hack. :facepalm:
  // React.useEffect(() => {
  //   if (mounted) {
  //     const [_, hashLocation] = router.asPath.split('#');
  //     if (hashLocation) {
  //       const anchor = document.querySelector(`#${hashLocation}`);
  //       if (!anchor) {
  //         return;
  //       }
  //       const scrollMargin = 20;
  //       const distanceToScroll =
  //         window.pageYOffset + anchor.getBoundingClientRect().top - scrollMargin;

  //       window.scrollTo(0, distanceToScroll);
  //     }
  //   }
  // }, [mounted]);

  const isDocs = router.pathname.includes('/docs');

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ dark: darkTheme.className }}
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
  );
}

export default App;
