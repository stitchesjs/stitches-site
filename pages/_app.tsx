import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import * as Radix from '@modulz/radix';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CodeBlock } from '../components/CodeBlock';

const GlobalStyles = createGlobalStyle`
	body, button {
		font-family: ${Radix.theme.fonts.normal}
	}

	svg {
		vertical-align: middle;
	}

	pre {
		margin: 0;
		font-family: ${Radix.theme.fonts.mono}
	}

	::selection {
		background-color: ${Radix.theme.colors.blue600};
		color: ${Radix.theme.colors.white};
	}
`;

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDarkMode =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const isDocs = router.pathname.includes('/docs');

  return (
    <Radix.RadixProvider>
      <MDXProvider
        components={{
          ...Radix,

          h1: (props) => <Radix.Heading size={5} mb={8} sx={{ fontWeight: 500 }} {...props} as="h1" />,
          h2: (props) => <Radix.Heading size={2} mt={6} mb={2} sx={{ fontWeight: 500 }} {...props} as="h2" />,
          h3: (props) => (
            <Radix.Heading mt={6} mb={1} sx={{ fontWeight: 500, fontSize: 5, lineHeight: '30px' }} {...props} as="h3" />
          ),
          code: (props) => (
            <Radix.Box my={5}>
              <CodeBlock {...props} />
            </Radix.Box>
          ),
          h4: (props) => <Radix.Heading size={0} mt={3} mb={1} {...props} as="h4" />,
          p: (props) => (
            <Radix.Text size={4} mb={3} {...props} sx={{ lineHeight: '30px', letterSpacing: 0, ...props.sx }} as="p" />
          ),
          a: ({ href = '', ...props }) => {
            if (href.startsWith('/')) {
              return (
                <NextLink href={href} passHref>
                  <Radix.Link {...props} variant="underline" />
                </NextLink>
              );
            }
            return <Radix.Link href={href} {...props} variant="underline" target="_blank" rel="noopener" />;
          },
          hr: (props) => <Radix.Divider size={2} my={6} mx="auto" {...props} />,
          inlineCode: (props) => (
            <Radix.Code
              variant="fade"
              {...props}
              sx={{ fontSize: 'max(12px,83%)', pb: '.33em', position: 'relative', top: '-.02em', ...props.sx }}
            />
          ),
          ul: (props) => <Radix.Box mb={3} {...props} as="ul" />,
          ol: (props) => <Radix.Box mb={3} {...props} as="ol" />,
          li: (props) => (
            <li>
              <Radix.Text size={4} {...props} sx={{ lineHeight: '30px', letterSpacing: 0, ...props.sx }} />
            </li>
          ),
          table: (props) => (
            <Radix.Box sx={{ overflow: 'auto' }}>
              <Radix.Table mt={0} mb={3} {...props} sx={{ minWidth: 600, ...props.sx }} />
            </Radix.Box>
          ),
          thead: Radix.Thead,
          tbody: Radix.Tbody,
          tfoot: Radix.Tfoot,
          tr: Radix.Tr,
          td: Radix.Td,
          th: Radix.Th,
          strong: (props) => <Radix.Text {...props} sx={{ ...props.sx, fontSize: 'inherit', fontWeight: 500 }} />,
          img: ({ ...props }) => (
            <Radix.Box mx={[-5, -5, -7]} my={6}>
              <Radix.Image alt="" {...props} sx={{ maxWidth: '100%', verticalAlign: 'middle', ...props.sx }} />
            </Radix.Box>
          ),
          Image: ({ ...props }) => (
            <Radix.Image alt="" {...props} sx={{ maxWidth: '100%', verticalAlign: 'middle', ...props.sx }} />
          ),
          blockquote: (props) => (
            <Radix.Box
              my={7}
              pl={4}
              sx={{ borderLeft: (theme) => `1px solid ${theme.colors.gray300}`, color: 'gray300' }}
              {...props}
            />
          ),
        }}
      >
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
    </Radix.RadixProvider>
  );
}

export default App;
