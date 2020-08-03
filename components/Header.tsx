import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Text, Link, Flex, Heading, VisuallyHidden } from '@modulz/radix';

export const Header = () => {
  return (
    <Container size={3}>
      <Flex py={4} sx={{ alignItems: 'flex-start' }}>
        <NextLink href="/" passHref>
          <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
            <VisuallyHidden>Interop homepage</VisuallyHidden>
            <Flex sx={{ display: 'span', alignItems: 'center' }}>
              <Box sx={{ display: 'span', width: 5 }}>
                <svg viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                  <path
                    d="M72.976 92.492c2.475 1.768 5.586 2.05 8.485.849 1.132-.424 2.122-1.132 2.97-1.98a8.635 8.635 0 002.546-6.364c0-4.95-4.03-8.98-8.98-8.98-3.677 0-6.93 2.12-8.344 5.515-.849 1.98-.92 4.03-.354 5.869-11.88 4.808-25.526 2.05-34.648-7.071-8.485-8.485-11.597-20.93-7.99-32.456.495-1.627-.425-3.253-1.98-3.819-1.627-.495-3.253.425-3.819 1.98-4.172 13.647-.565 28.426 9.546 38.538 11.172 11.172 28.143 14.283 42.568 7.92zM88.957 64.774a18.599 18.599 0 01-.566 2.12c-.495 1.627.424 3.254 2.05 3.749 1.061.353 2.263 0 2.97-.707.354-.354.637-.778.708-1.273.282-.849.495-1.627.707-2.546 2.97-13.01-.849-26.304-10.253-35.709-10.678-10.677-26.375-14.071-40.447-8.768-2.616-2.192-6.01-2.758-9.192-1.414-3.394 1.414-5.586 4.596-5.516 8.344 0 4.95 4.03 8.98 8.98 8.98 2.405 0 4.738-.92 6.364-2.546.849-.848 1.556-1.838 1.98-2.97.708-1.697.849-3.393.566-5.09 11.526-3.89 24.325-.99 33.022 7.707 7.92 7.92 11.102 19.162 8.627 30.123z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Heading as="span" size={1} style={{ lineHeight: 1, letterSpacing: '-0.05em' }}>
                interop
              </Heading>
            </Flex>
          </Link>
        </NextLink>

        <Flex ml="auto" sx={{ flexDirection: ['row', 'row'], alignItems: ['center', 'center'] }}>
          <Text size={3} sx={{ color: 'gray700' }} ml={[2, 6]}>
            <NextLink href="/docs" passHref>
              <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Docs</Link>
            </NextLink>
          </Text>
          <Text size={3} sx={{ color: 'gray700' }} ml={[4, 7]}>
            <NextLink href="/learn" passHref>
              <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Learn</Link>
            </NextLink>
          </Text>
          <Text size={3} sx={{ color: 'gray700' }} ml={[4, 7]}>
            <NextLink href="/releases" passHref>
              <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Releases</Link>
            </NextLink>
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};
