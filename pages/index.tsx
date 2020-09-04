import NextLink from 'next/link';
import { Box, Flex, Container, Divider, Grid, Text, Code } from '@modulz/design-system';
import { HeroCodeDemo } from '../components/HeroCodeDemo';
import { StitchesLogo } from '../components/StitchesLogo';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';

export default function Home() {
  return (
    <Box>
      <TitleAndMetaTags title="Stitches" />
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
      <Container size="3" css={{ textAlign: 'center', mb: '$4' }}>
        <Text
          size={{ initial: '8', bp2: '9' }}
          css={{ fontWeight: 500, lineHeight: '35px', bp2: { lineHeight: '55px' } }}
        >
          The modern styling library
        </Text>
      </Container>

      <Container size="2" css={{ textAlign: 'center' }}>
        <Text
          as="h2"
          size={{ initial: '5', bp2: '6' }}
          css={{
            color: '$gray600',
            textAlign: 'center',
            lineHeight: '25px',
            bp2: { lineHeight: '30px' },
          }}
        >
          Near-zero runtime, server-side rendering, multi-variant support, and a best-in-class
          developer experience.
        </Text>
      </Container>

      <Box css={{ pt: '$8', pb: '$9' }}>
        <Container size="3">
          <HeroCodeDemo />
        </Container>
      </Box>

      <Flex css={{ justifyContent: 'center', mb: '$9' }}>
        <Divider size="large" css={{ flexShrink: 0, width: '45px' }} />
      </Flex>

      <Container size="2">
        <Box
          css={{
            border: '1px solid $gray300',
            borderRadius: '$2',
            fontFamily: '$mono',
            fontSize: '$2',
            lineHeight: 1,
            color: '$yellow600',
            p: '$3',
          }}
        >
          npm install{' '}
          <Box as="span" css={{ color: '$hiContrast' }}>
            @stitches/react
          </Box>
        </Box>
      </Container>

      <Flex css={{ justifyContent: 'center', my: '$9' }}>
        <Divider size="large" css={{ flexShrink: 0, width: '45px' }} />
      </Flex>

      <Container size="2" css={{ textAlign: 'center' }}>
        <Text as="h2" size={{ initial: '6', bp2: '7' }} css={{ mb: '$4', fontWeight: 500 }}>
          Features
        </Text>
        <Text as="h3" size={{ initial: '5', bp2: '6' }} css={{ color: '$gray600', mb: '$4' }}>
          A fully-featured styling library.
        </Text>
      </Container>

      <Container size={{ initial: '2', bp2: '3' }} css={{ my: '$8' }}>
        <Grid
          css={{
            gap: '$6',
            gridTemplateColumns: '1fr',
            bp2: {
              gap: '$7',
              gridTemplateColumns: '1fr 1fr',
            },
          }}
        >
          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Performant
            </Text>
            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray600' }}
            >
              Stitches avoids unnecessary prop interpolations at runtime, making it significantly
              more performant than other styling libraries.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Lightweight
            </Text>
            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray600' }}
            >
              Both <Code>@stitches/core</Code> and <Code>@stitches/react</Code> libraries combined
              weigh in at ~6.5kb gzipped.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Server-Side Rendering
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray600' }}
            >
              Stitches supports cross-browser server-side rendering, even for responsive styles and
              variants.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Variants
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray600' }}
            >
              Variants are a first-class citizen of Stitches, so you can design composable component
              APIs which are typed automatically.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Theming
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray600' }}
            >
              Define multiple themes with CSS variables, then expose them to any part of your app.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Developer experience
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray600' }}
            >
              With a fully-typed API, token-aware properties, and custom utils, Stitches provides a
              fun and intuitive DX.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Critical Path CSS
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray600' }}
            >
              Stitches only injects the styles which are actually used, so your users don't download
              unnecessary CSS.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Specificity
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray600' }}
            >
              No more specificity issues due to the atomic output. Even extended components (via the{' '}
              <Code>as</Code> prop) won't contain duplicate CSS properties.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Polymorphic <Code>as</Code> prop
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray600' }}
            >
              Included in Components returned from the styled function
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Easy overrides
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '30px', color: '$gray600' }}
            >
              Stitches provides a <Code>css</Code> prop, which allows style overrides to be applied
              in the consumption layer.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
