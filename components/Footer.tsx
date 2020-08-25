import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, Text, Flex, Divider } from '@modulz/design-system';
import { ModulzLogo } from './ModulzLogo';

const Link = (props) => <Box as="a" {...props} />;

export const Footer = () => {
  return (
    <Box css={{ pb: '8' }}>
      <Divider css={{ mb: '8', width: '100%' }} />
      <Container size="2" css={{ maxWidth: '1090px' }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '6',
            '& ul': { listStyle: 'none', margin: '0', padding: '0' },
            bp2: {
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '3',
            },
          }}
        >
          <Flex
            css={{
              alignItems: 'center',
              bp2: {
                flexDirection: 'column',
                alignItems: 'start',
              },
            }}
          >
            <NextLink href="/" passHref>
              <Link css={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
                <span
                  style={{
                    position: 'absolute',
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    whiteSpace: 'nowrap',
                    border: 0,
                  }}
                >
                  Modulz homepage
                </span>
                <ModulzLogo aria-hidden />
              </Link>
            </NextLink>

            <Text
              as="span"
              size="2"
              css={{
                color: 'gray700',
                lineHeight: '0',
                userSelect: 'none',
                ml: 'auto',
                bp2: {
                  ml: '0',
                  mt: 'auto',
                },
              }}
            >
              &copy; Modulz, Inc
            </Text>
          </Flex>
          <Box>
            <Text as="h6" size="1" css={{ fontWeight: 500 }}>
              Product
            </Text>
            <ul>
              <li>
                <Text
                  as="p"
                  size="3"
                  css={{ color: 'gray500', mt: '2', lineHeight: '1', userSelect: 'none' }}
                >
                  Theme
                </Text>
              </li>
              <li>
                <Text
                  as="p"
                  size="3"
                  css={{ color: 'gray500', mt: '2', lineHeight: '1', userSelect: 'none' }}
                >
                  Editor
                </Text>
              </li>
              <li>
                <Text
                  as="p"
                  size="3"
                  css={{ color: 'gray500', mt: '2', lineHeight: '1', userSelect: 'none' }}
                >
                  Composer
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '2', lineHeight: '1' }}>
                  <NextLink href="/styleguide" passHref>
                    <Link variant="fade">Style guide</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '2', lineHeight: '1' }}>
                  <Link variant="fade" href="https://radix.modulz.app">
                    Radix
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '2', lineHeight: '1' }}>
                  <Link variant="fade" href="https://modulz.typeform.com/to/fp4gBW">
                    Beta
                  </Link>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Text as="h6" size="1" css={{ fontWeight: 500 }}>
              Community
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '3', lineHeight: '1' }}>
                  <Link variant="fade" href="https://twitter.com/modulz">
                    Twitter
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '2', lineHeight: '1' }}>
                  <Link variant="fade" href="https://github.com/modulz">
                    Github
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '2', lineHeight: '1' }}>
                  <Link variant="fade" href="https://spectrum.chat/modulz">
                    Spectrum
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '2', lineHeight: '1' }}>
                  <Link
                    variant="fade"
                    href="https://www.youtube.com/channel/UCEU5U-sfF6fmGvTmelBRePQ"
                  >
                    Youtube
                  </Link>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Text as="h6" size="0" css={{ fontWeight: 500 }}>
              Company
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '2', lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link variant="fade">About</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '2', lineHeight: '1' }}>
                  <NextLink href="/blog" passHref>
                    <Link variant="fade">Blog</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '2', lineHeight: '1' }}>
                  <NextLink href="/careers" passHref>
                    <Link variant="fade">Careers</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
