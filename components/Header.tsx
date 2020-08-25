import React from 'react';
import NextLink from 'next/link';
import { StitchesLogo } from '../components/StitchesLogo';
import { SwitchIcon } from '@modulz/radix-icons';
import { Text, Flex, Box, IconButton, darkThemeClass } from '@modulz/design-system';

export const Header = ({ theme, toggleTheme }) => {
  return (
    <Flex
      css={{
        px: '4',
        height: '7',
        alignItems: 'center',
        borderBottom: '1px solid',
        borderColor: 'gray300',
        position: 'sticky',
        top: 0,
        zIndex: 2,
        backdropFilter: 'saturate(165%) blur(20px)',
      }}
    >
      <NextLink href="/" passHref>
        <Box
          as="a"
          css={{ color: 'hiContrast', display: 'inline-flex', ':focus': { boxShadow: 'none' } }}
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

      <Flex css={{ flexDirection: 'row', alignItems: 'center', ml: 'auto' }}>
        <Text size="3" css={{ ml: '2', bp2: { ml: '6' } }}>
          <NextLink href="/docs" passHref>
            <Box
              as="a"
              css={{ textDecoration: 'none', color: 'inherit', ':focus': { boxShadow: 'none' } }}
            >
              Docs
            </Box>
          </NextLink>
        </Text>
        <Text size="3" css={{ ml: '4', bp2: { ml: '4' } }}>
          <NextLink href="/learn" passHref>
            <Box
              as="a"
              css={{ textDecoration: 'none', color: 'inherit', ':focus': { boxShadow: 'none' } }}
            >
              Learn
            </Box>
          </NextLink>
        </Text>
        <Text size="3" css={{ ml: '4', bp2: { ml: '4' } }}>
          <NextLink href="/releases" passHref>
            <Box
              as="a"
              css={{ textDecoration: 'none', color: 'inherit', ':focus': { boxShadow: 'none' } }}
            >
              Releases
            </Box>
          </NextLink>
        </Text>
      </Flex>
      <Box css={{ ml: '4', bp2: { ml: '4' } }}>
        <IconButton onClick={() => toggleTheme(theme ? undefined : darkThemeClass)}>
          <SwitchIcon />
        </IconButton>
      </Box>
    </Flex>
  );
};
