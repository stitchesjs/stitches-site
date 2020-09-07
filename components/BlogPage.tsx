import * as React from 'react';
import NextLink from 'next/link';
import { Box, Container } from '@modulz/design-system';
import { StitchesLogo } from '../components/StitchesLogo';

function BlogPage({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Box as="header" css={{ py: '$4', px: '$4', mb: '$7' }}>
        <NextLink href="/" passHref>
          <Box
            as="a"
            css={{
              color: '$hiContrast',
              display: 'inline-flex',
              ':focus': {
                boxShadow: 'none',
              },
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
        </NextLink>
      </Box>

      <Box css={{ pt: '$6', pb: '$9' }}>
        <Container size="3" css={{ maxWidth: '780px' }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export { BlogPage };
