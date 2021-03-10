import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { Box, darkTheme, global } from '@modulz/design-system';
import { Footer } from '@components/Footer';
import { ThemeToggle } from '@components/ThemeToggle';
import { DocsPage } from '@components/DocsPage';
import { BlogPage } from '@components/BlogPage';
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
    backgroundColor: '$violet800',
    color: 'white',
  },

  // Prism
  'pre[class*="language-"]': {
    boxShadow: '0 0 0 1px $colors$gray400',
    borderRadius: '$3',

    '[data-preview] + &': {
      marginTop: 1,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
  },

  'code[class*="language-"]': {
    $$lineHeight: '23px',
    fontFamily: '$mono',
    bc: 'transparent',
    color: '$hiContrast',
    fontSize: '$2',
    lineHeight: '$$lineHeight',
    whiteSpace: 'pre',
    position: 'relative',
    display: 'block',
    p: '$3',
    margin: 0,
    overflow: 'auto',
  },

  'pre code:before': {
    content: `''`,
  },

  '.token.script': {
    color: '$white',
  },

  '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function': {
    color: '$blue900',
  },

  '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important': {
    color: '$blue900',
  },

  '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
    color: '$violet900',
  },

  '.token.punctuation, .token.module, .token.property': {
    color: '$blue800',
  },

  '.token.atapply .token:not(.rule):not(.important)': {
    color: 'inherit',
  },

  '.language-shell .token:not(.comment)': {
    color: 'inherit',
  },

  '.language-css .token.function': {
    color: 'inherit',
  },

  '.token.comment': {
    color: '$gray800',
  },

  '.token.deleted:not(.prefix)': {
    color: '$red900',
    display: 'block',
    px: '$4',
    mx: '-20px',
  },

  '.token.deleted.prefix': {
    userSelect: 'none',
  },

  '.token.inserted:not(.prefix)': {
    color: '$green900',
    display: 'block',
    px: '$4',
    mx: '-20px',
  },

  '.token.inserted.prefix': {
    userSelect: 'none',
  },

  // Styles for highlighted word
  '.highlight-word': {
    $$color: '$colors$violet200',
    $$xOffset: '3px',
    backgroundColor: '$$color',
    color: '$violet900',
    borderRadius: '$1',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$color, -$$xOffset 0 0 0 $$color',

    '&.on': {
      $$color: '$colors$violet400',
      transition: 'all 100ms ease',
      cursor: 'pointer',
    },
  },

  '.deleted .highlight-word': {
    $$color: '$colors$red100',
    color: '$red900',

    '&.on': {
      $$color: '$colors$red300' as any,
    },
  },

  '.inserted .highlight-word': {
    $$color: '$colors$green100',
    color: '$green900',

    '&.on': {
      $$color: '$colors$green300' as any,
    },
  },

  // Styles for highlighted lines
  '.highlight-line.off': {
    opacity: 0.4,
  },

  '.highlight-line.on': {},
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  const router = useRouter();

  // const darkMode = useDarkMode(undefined, {
  //   classNameDark: darkTheme,
  //   classNameLight: 'theme-default',
  // });

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
  const isBlog = router.pathname.includes('/blog/');

  // Dark theme hack to prevent flash
  // prevents ssr flash for mismatched dark mode
  // https://brianlovin.com/overthought/adding-dark-mode-with-next-js
  // if (!mounted) {
  //   return (
  //     <div style={{ visibility: 'hidden' }}>
  //       <Component {...pageProps} />
  //     </div>
  //   );
  // }

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ dark: darkTheme.className }}
    >
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://develop.modulz.app/fonts/fonts.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {isDocs ? (
        <DocsPage>
          <Component {...pageProps} />
        </DocsPage>
      ) : isBlog ? (
        <BlogPage>
          <Component {...pageProps} />
        </BlogPage>
      ) : (
        <Component {...pageProps} />
      )}
      {!isDocs && <Footer />}
    </ThemeProvider>
  );
}

export default App;
