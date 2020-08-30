import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, Text, Flex, Divider } from '@modulz/design-system';
import { StitchesLogo } from '../components/StitchesLogo';

const Link = (props) => (
  <Box as="a" {...props} css={{ color: 'gray600', textDecoration: 'none', ...props.css }} />
);

export const Footer = () => {
  return (
    <Box as="footer" css={{ pb: '9' }}>
      <Flex css={{ justifyContent: 'center', my:'9' }}>
        <Divider size="large" />
      </Flex>
      <Container size="4">
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
              <Link css={{ color: 'hiContrast', ':focus': { boxShadow: 'none' } }}>
                <Box
                  as="a"
                  css={{
                    color: 'hiContrast',
                    display: 'inline-flex',
                    ':focus': { 
                      boxShadow: 'none'
                    }
                  }}
                >
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
                    Stitches homepage
                  </span>
                  <StitchesLogo />
                </Box>
              </Link>
            </NextLink>
          </Flex>
          <Box>
            <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
              Overview
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '3', lineHeight: '20px' }}>
                  <NextLink href="/docs/introduction" passHref>
                    <Link>Introduction</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '3', lineHeight: '20px' }}>
                  <NextLink href="/docs/releases" passHref>
                    <Link>Releases</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '3', lineHeight: '20px' }}>
                  <NextLink href="/docs/tutorials" passHref>
                    <Link>Tutorials</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '3', lineHeight: '20px' }}>
                  <NextLink href="/docs/frequently-asked-questions" passHref>
                    <Link>Frequently-asked questions</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '3', lineHeight: '20px' }}>
                  <NextLink href="/docs/contributing" passHref>
                    <Link>Contributing</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
              Docs
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '3', lineHeight: '20px' }}>
                  <NextLink href="/docs/installation" passHref>
                    <Link>Installation</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '3', lineHeight: '20px' }}>
                  <NextLink href="/docs/tokens" passHref>
                    <Link>Configuration</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '3', lineHeight: '20px' }}>
                  <NextLink href="/docs/api" passHref>
                    <Link>API</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
              Community
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '3', lineHeight: '20px' }}>
                  <Link href="https://twitter.com/stitchesjs">Twitter</Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '3', lineHeight: '20px' }}>
                  <Link href="https://github.com/modulz/stitches">Github</Link>
                </Text>
              </li>
            </ul>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
