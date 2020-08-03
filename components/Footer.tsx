import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, Heading, Text, Link, Flex, Divider, VisuallyHidden } from '@modulz/radix';
import { ModulzLogo } from './ModulzLogo';

export const Footer = () => {
  return (
    <Box pb={8}>
      <Divider size={2} mx="auto" my={8} />
      <Container size={2} sx={{ maxWidth: '1090px' }}>
        <Grid
          sx={{
            gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(4, 1fr)'],
            gap: [6, 3],
            '& ul': { listStyle: 'none', margin: 0, padding: 0 },
          }}
        >
          <Flex sx={{ flexDirection: [null, 'column'], alignItems: ['center', 'start'] }}>
            <NextLink href="/" passHref>
              <Link variant="fade" sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
                <VisuallyHidden>Modulz homepage</VisuallyHidden>
                <ModulzLogo aria-hidden />
              </Link>
            </NextLink>

            <Text
              as="span"
              size={2}
              ml={['auto', 0]}
              mt={[0, 'auto']}
              sx={{ color: 'gray700', lineHeight: '0', userSelect: 'none' }}
            >
              &copy; Modulz, Inc
            </Text>
          </Flex>
          <Box>
            <Heading as="h6" size={0} sx={{ fontWeight: 500 }}>
              Product
            </Heading>
            <ul>
              <li>
                <Text as="p" size={3} mt={2} sx={{ color: 'gray500', lineHeight: '1', userSelect: 'none' }}>
                  Theme
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ color: 'gray500', lineHeight: '1', userSelect: 'none' }}>
                  Editor
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ color: 'gray500', lineHeight: '1', userSelect: 'none' }}>
                  Composer
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <NextLink href="/styleguide" passHref>
                    <Link variant="fade">Style guide</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <Link variant="fade" href="https://radix.modulz.app">
                    Radix
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <Link variant="fade" href="https://modulz.typeform.com/to/fp4gBW">
                    Beta
                  </Link>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Heading as="h6" size={0} sx={{ fontWeight: 500 }}>
              Community
            </Heading>
            <ul>
              <li>
                <Text as="p" size={3} mt={3} sx={{ lineHeight: '1' }}>
                  <Link variant="fade" href="https://twitter.com/modulz">
                    Twitter
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <Link variant="fade" href="https://github.com/modulz">
                    Github
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <Link variant="fade" href="https://spectrum.chat/modulz">
                    Spectrum
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <Link variant="fade" href="https://www.youtube.com/channel/UCEU5U-sfF6fmGvTmelBRePQ">
                    Youtube
                  </Link>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Heading as="h6" size={0} sx={{ fontWeight: 500 }}>
              Company
            </Heading>
            <ul>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link variant="fade">About</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <NextLink href="/blog" passHref>
                    <Link variant="fade">Blog</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
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
