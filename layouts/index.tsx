import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Container, Heading, Text, Box, Flex, Link, Divider, Subheading } from '@modulz/radix';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { docsPosts } from '../utils/docsPosts';

export default (frontMatter: FrontMatter) => {
  return ({ children }) => {
    const router = useRouter();

    const twitterShare = `
		https://twitter.com/intent/tweet?
		text="${frontMatter.title}"
		.&url=https://modulz.app${router.route}
		`;

    return (
      <React.Fragment>
        <TitleAndMetaTags title={frontMatter.title} />
        <Container size={3} mt={6}>
          <Flex>
            <Box sx={{ mr: 4, width: '275px', flex: '0 0 auto' }}>
              <Subheading as="h3" sx={{ lineHeight: 4 }}>
                Documentation
              </Subheading>

              <Box>
                <NextLink href="/docs/motivation" passHref>
                  <Link sx={{ ':hover': { textDecoration: 'none' } }}>
                    <Text
                      size={3}
                      sx={{ lineHeight: 3, color: router.pathname === '/docs/motivation' ? 'gray900' : 'gray700' }}
                    >
                      Motivation
                    </Text>
                  </Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/getting-started" passHref>
                  <Link sx={{ ':hover': { textDecoration: 'none' } }}>
                    <Text
                      size={3}
                      sx={{ lineHeight: 3, color: router.pathname === '/docs/getting-started' ? 'gray900' : 'gray700' }}
                    >
                      Getting Started
                    </Text>
                  </Link>
                </NextLink>
              </Box>

              {/* <Box>
                <NextLink href="/docs/getting-started" passHref>
                  <Link sx={{ ':hover':{textDecoration: 'none'} }}><Text size={3} sx={{lineHeight:, color: 'gray700'3}}>Components</Text></Link>
                </NextLink>
              </Box> */}

              <Box>
                <NextLink href="/docs/tokens" passHref>
                  <Link sx={{ ':hover': { textDecoration: 'none' } }}>
                    <Text
                      size={3}
                      sx={{ lineHeight: 3, color: router.pathname === '/docs/tokens' ? 'gray900' : 'gray700' }}
                    >
                      Tokens
                    </Text>
                  </Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/theme" passHref>
                  <Link sx={{ ':hover': { textDecoration: 'none' } }}>
                    <Text
                      size={3}
                      sx={{ lineHeight: 3, color: router.pathname === '/docs/theme' ? 'gray900' : 'gray700' }}
                    >
                      Theme
                    </Text>
                  </Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/responsive" passHref>
                  <Link sx={{ ':hover': { textDecoration: 'none' } }}>
                    <Text
                      size={3}
                      sx={{ lineHeight: 3, color: router.pathname === '/docs/responsive' ? 'gray900' : 'gray700' }}
                    >
                      Responsive
                    </Text>
                  </Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/server-side-rendering" passHref>
                  <Link sx={{ ':hover': { textDecoration: 'none' } }}>
                    <Text
                      size={3}
                      sx={{
                        lineHeight: 3,
                        color: router.pathname === '/docs/server-side-rendering' ? 'gray900' : 'gray700',
                      }}
                    >
                      Server Side Rendering
                    </Text>
                  </Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/faq" passHref>
                  <Link sx={{ ':hover': { textDecoration: 'none' } }}>
                    <Text
                      size={3}
                      sx={{ lineHeight: 3, color: router.pathname === '/docs/faqs' ? 'gray900' : 'gray700' }}
                    >
                      FAQ
                    </Text>
                  </Link>
                </NextLink>
              </Box>

              <Subheading as="h3" sx={{ lineHeight: 4 }}>
                API
              </Subheading>

              <Box>
                <NextLink href="/docs/api" passHref>
                  <Link sx={{ ':hover': { textDecoration: 'none' } }}>
                    <Text
                      size={3}
                      sx={{ lineHeight: 3, color: router.pathname === '/docs/api' ? 'gray900' : 'gray700' }}
                    >
                      createStyled
                    </Text>
                  </Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/api" passHref>
                  <Link sx={{ ':hover': { textDecoration: 'none' } }}>
                    <Text
                      size={3}
                      sx={{ lineHeight: 3, color: router.pathname === '/docs/api' ? 'gray900' : 'gray700' }}
                    >
                      css
                    </Text>
                  </Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/api" passHref>
                  <Link sx={{ ':hover': { textDecoration: 'none' } }}>
                    <Text
                      size={3}
                      sx={{ lineHeight: 3, color: router.pathname === '/docs/api' ? 'gray900' : 'gray700' }}
                    >
                      createCss
                    </Text>
                  </Link>
                </NextLink>
              </Box>
            </Box>

            <Box sx={{ flex: 1, minWidth: '0px' }}>
              <Heading size={3} mb={1} sx={{ fontWeight: 500 }}>
                {frontMatter.title}
              </Heading>

              <Box my={6}>{children}</Box>

              <Divider size={2} my={8} mx="auto" />

              <Box sx={{ textAlign: 'center' }}>
                <Text as="p" size={3} sx={{ lineHeight: 2 }}>
                  Share this post on{' '}
                  <Link href={twitterShare} target="_blank" title="Share this post on Twitter">
                    Twitter
                  </Link>
                </Text>
              </Box>
            </Box>

            {Boolean(frontMatter.relatedIds) && (
              <Container size={2} sx={{ maxWidth: '1090px' }}>
                <Divider size={2} my={8} mx="auto" />
                <Box>
                  <Text
                    as="h3"
                    size={2}
                    mb={3}
                    weight="medium"
                    sx={{
                      textAlign: 'center',
                      color: 'gray700',
                      letterSpacing: '.125em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Related articles
                  </Text>

                  <div>
                    {docsPosts.map((_frontMatter: FrontMatter) => {
                      return frontMatter.relatedIds.includes(_frontMatter.id) ? (
                        <div key={_frontMatter.id} children={_frontMatter} />
                      ) : null;
                    })}
                  </div>
                </Box>
              </Container>
            )}
          </Flex>
        </Container>
      </React.Fragment>
    );
  };
};
