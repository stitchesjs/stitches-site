import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import * as Radix from '@modulz/radix';
import { prismTheme } from '../prismTheme';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const GlobalStyles = createGlobalStyle`
  ${prismTheme};

	::selection {
		background-color: ${Radix.theme.colors.blue600};
		color: ${Radix.theme.colors.white};
	}
`;

function App({ Component, pageProps }: AppProps) {
  const isDarkMode =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <Radix.RadixProvider>
      <MDXProvider
        components={{
          ...Radix,

          h1: (props) => <Radix.Heading size={5} mb={8} sx={{ fontWeight: 500 }} {...props} as="h1" />,
          h2: (props) => <Radix.Heading size={2} mt={6} mb={2} sx={{ fontWeight: 500 }} {...props} as="h2" />,
          h3: (props) => (
            <Radix.Heading mt={6} mb={1} sx={{ fontWeight: 500, fontSize: 4, lineHeight: '27px' }} {...props} as="h3" />
          ),
          h4: (props) => <Radix.Heading size={0} mt={3} mb={1} {...props} as="h4" />,
          p: (props) => (
            <Radix.Text size={4} mb={3} {...props} sx={{ lineHeight: '27px', letterSpacing: 0, ...props.sx }} as="p" />
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
          inlineCode: (props) => <Radix.Code variant="fade" {...props} />,
          ul: (props) => <Radix.Box mb={3} {...props} as="ul" />,
          ol: (props) => <Radix.Box mb={3} {...props} as="ol" />,
          li: (props) => (
            <li>
              <Radix.Text size={4} {...props} sx={{ lineHeight: '27px', letterSpacing: 0, ...props.sx }} />
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
          ProductImage: ({ children, ...props }) => (
            <Radix.Box as="figure" mx={0} my={6}>
              <Radix.Box
                mx={[-5, -5, -9]}
                sx={{
                  border: (theme) => `1px solid ${theme.colors.gray300}`,
                  borderRadius: [0, 2, 2],
                  overflow: 'hidden',
                }}
              >
                <Radix.Image
                  {...props}
                  sx={{
                    maxWidth: '100%',
                    verticalAlign: 'middle',
                  }}
                  alt={children}
                />
              </Radix.Box>
              <Radix.Text
                as="figcaption"
                size={3}
                pt={4}
                pb={2}
                sx={{ lineHeight: 2, letterSpacing: 0, color: 'gray700' }}
              >
                {children}
              </Radix.Text>
            </Radix.Box>
          ),
          blockquote: (props) => (
            <Radix.Box
              my={5}
              pl={6}
              sx={{ borderLeft: (theme) => `2px solid ${theme.colors.gray300}`, color: 'gray300' }}
              {...props}
            />
          ),
          Video: ({ small, id, poster, children, ...props }) => (
            <Radix.Box as="figure" mx={0} my={6}>
              <Radix.Box
                mx={!small && [-5, -5, -9]}
                {...props}
                sx={{
                  border: (theme) => `1px solid ${theme.colors.gray300}`,
                  borderRadius: [0, 2, 2],
                  overflow: 'hidden',
                  ...props.sx,
                }}
              >
                <VideoPlayer id={id} poster={poster} />
              </Radix.Box>
              <Radix.Text
                as="figcaption"
                size={3}
                pt={4}
                pb={2}
                sx={{ lineHeight: 2, letterSpacing: 0, color: 'gray700' }}
              >
                {children}
              </Radix.Text>
            </Radix.Box>
          ),
          ProductVideo: ({ small, large, src, children = '', muted = true, autoPlay = true, controls, ...props }) => (
            <Radix.Box as="figure" mx={0} my={6}>
              <Radix.Box
                mx={!small && [-5, -5, large ? -220 : -9]}
                {...props}
                sx={{
                  boxShadow: (theme) => `0 0 0 1px ${theme.colors.gray300}`,
                  borderRadius: [0, 2, 2],
                  overflow: 'hidden',

                  ...props.sx,
                }}
              >
                <video
                  src={src}
                  autoPlay={autoPlay}
                  playsInline
                  muted={muted}
                  controls={controls}
                  loop
                  style={{ width: '100%', display: 'block' }}
                ></video>
              </Radix.Box>
              <Radix.Text
                as="figcaption"
                size={3}
                pt={4}
                pb={2}
                sx={{ lineHeight: 2, letterSpacing: 0, color: 'gray700' }}
              >
                {children}
              </Radix.Text>
            </Radix.Box>
          ),
          VideoPlayer: (props) => <VideoPlayer {...props} />,
          Icon: (props) => (
            <Radix.Box
              as="span"
              {...props}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                bg: 'gray100',
                size: 5,
                mx: '3px',
                border: (theme) => `1px solid ${theme.colors.gray200}`,
                ...props.sx,
              }}
            />
          ),
          Demo: (props) => (
            <Radix.Box sx={{ display: ['none', 'block'] }}>
              <Radix.Divider size={2} my={6} mx="auto" {...props} />
              <Radix.Heading mt={6} mb={1} sx={{ fontWeight: 500, fontSize: 4, lineHeight: '27px' }} {...props} as="h3">
                One last thing
              </Radix.Heading>

              <Radix.Text size={4} mb={3} {...props} sx={{ lineHeight: '27px', letterSpacing: 0, ...props.sx }} as="p">
                Here's a live playground. The example used here is from{' '}
                <Radix.Link href="https://radix.modulz.app" variant="underline" target="_blank" rel="noopener">
                  Radix
                </Radix.Link>
                , our very own design system.
              </Radix.Text>

              <Radix.Box
                my={6}
                mx={[-5, -5, -9]}
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: (theme) => `0 0 0 1px ${theme.colors.gray300}`,
                }}
              >
                <Radix.AspectRatio ratio="16:9">
                  <iframe
                    src={`/demo/${props.component}`}
                    style={{ display: 'block', width: '100%', height: '100%', border: 0 }}
                  ></iframe>
                </Radix.AspectRatio>
              </Radix.Box>
            </Radix.Box>
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

        <Footer />
      </MDXProvider>
    </Radix.RadixProvider>
  );
}

export default App;
