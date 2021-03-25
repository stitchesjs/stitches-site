import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { darkTheme, global } from '@modulz/design-system';
import { Footer } from '@components/Footer';
import { DocsPage } from '@components/DocsPage';
import { useAnalytics } from '@lib/analytics';

const globalStyles = global({
  ':root': {
    '--letter-spacing': '0',
    '--h4': '1em',
    '--heading': '1em',
    '--title': '1em',
    '--subtitle': '1em',

    '&.no-untitled_sans': {
      '--letter-spacing': '0.015em',
      '--h4': '0.25em',
      '--heading': '-0.5em',
      '--title': '-.05em',
      '--subtitle': '-1.5em'
    }
  },

  html: {
    overflowX: 'hidden',
  },

  body: {
    margin: 0,
    backgroundColor: '$loContrast',
  },

  'body, button': {
    fontFamily: '$untitled',
    letterSpacing: '0.015em'
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violet300',
  },
});

if (typeof document === 'object') {
  const a = () => document.fonts.check('1em "Untitled Sans"') ? document.documentElement.classList.remove('no-untitled_sans') : requestAnimationFrame(a)
  a()
}

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  const router = useRouter();

  useAnalytics();

  React.useEffect(() => {
    const [_, hashLocation] = router.asPath.split('#');
    if (hashLocation) {
      const anchor = document.querySelector(`#${hashLocation}`);
      if (!anchor) {
        return;
      }
      const distanceToScroll = window.pageYOffset + anchor.getBoundingClientRect().top;

      window.scrollTo(0, distanceToScroll);
    }
  }, []);

  const isDocs = router.pathname.includes('/docs');

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ dark: darkTheme.className }}
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
  );
}

export default App;
