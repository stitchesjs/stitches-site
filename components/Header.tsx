import NextLink from 'next/link';
import { Box, Title, Flex, Heading, Subtitle, Link, Text } from '@modulz/design-system';
import { ThemeToggle } from '@components/ThemeToggle';
import { StitchesLogo } from '@components/StitchesLogo';

export function Header() {
  return (
    <Flex
      as="header"
      css={{
        py: '$4',
        px: '$4',
        mb: '$7',
        ai: 'center',
        jc: 'space-between',
      }}
    >
      <NextLink href="/" passHref>
        <Box
          as="a"
          css={{
            color: '$hiContrast',
            display: 'inline-flex',
            '&:focus': {
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
      <Flex css={{ gap: '$6', ai: 'center' }}>
        <NextLink href="/docs/installation" passHref>
          <Link variant="subtle">
            <Text>Docs</Text>
          </Link>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Link variant="subtle">
            <Text>Blog</Text>
          </Link>
        </NextLink>
        <NextLink href="/docs/installation" passHref>
          <Link variant="subtle">
            <Text>Github</Text>
          </Link>
        </NextLink>
        <NextLink href="/docs/installation" passHref>
          <Link variant="subtle">
            <Text>Discord</Text>
          </Link>
        </NextLink>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
}
