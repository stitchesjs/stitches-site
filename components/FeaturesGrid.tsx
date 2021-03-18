import {
  Section,
  Container,
  Box,
  Subheading,
  Code,
  Grid,
  Title,
  Flex,
  Subtitle,
  Text,
} from '@modulz/design-system';

export function FeaturesGrid() {
  return (
    <Section size={{ initial: '2', bp1: '3' }}>
      <Container size="2">
        <Text size="8" css={{ fontWeight: 500, ta: 'center', mb: '$2' }}>
          Features
        </Text>
        <Subtitle as="p" css={{ ta: 'center', mb: '$8' }}>
          A fully-featured styling library.
        </Subtitle>

        <Grid
          css={{
            gap: '$6',
            gridTemplateColumns: '1fr',
            when: {
              bp2: {
                gap: '$8',
                gridTemplateColumns: '1fr 1fr',
              },
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
              css={{ lineHeight: '27px', color: '$slate900' }}
            >
              Stitches avoids unnecessary prop interpolations at runtime, making it
              more performant than other styling libraries.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Server-side rendering
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '27px', color: '$slate900' }}
            >
              Stitches supports cross-browser server-side rendering, even for responsive styles and
              variants.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Developer experience
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '27px', color: '$slate900' }}
            >
              With a fully-typed API, token-aware properties, and custom utils, Stitches offers a
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
              css={{ lineHeight: '27px', color: '$slate900' }}
            >
              Stitches only injects the styles which are actually used, so your users don't download
              unnecessary CSS.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Override component tags
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '27px', color: '$slate900' }}
            >
              A polymorphic <Code>as</Code> prop is included in components returned from the <Code>styled</Code> function.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Override component styles
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '27px', color: '$slate900' }}
            >
              Stitches provides a <Code>css</Code> prop, which allows style overrides to be applied
              in the consumption layer.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
}
