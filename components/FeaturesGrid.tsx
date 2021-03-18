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
                gap: '$7',
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
              css={{ lineHeight: '27px', color: '$gray900' }}
            >
              Stitches avoids unnecessary prop interpolations at runtime, making it significantly
              more performant than other styling libraries. Both <Code>@stitches/core</Code> and{' '}
              <Code>@stitches/react</Code> libraries combined weigh in at ~8.0kb gzipped.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Server-Side Rendering
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '27px', color: '$gray900' }}
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
              css={{ lineHeight: '27px', color: '$gray900' }}
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
              css={{ lineHeight: '27px', color: '$gray900' }}
            >
              Stitches only injects the styles which are actually used, so your users don't download
              unnecessary CSS.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Polymorphic <Code>as</Code> prop
            </Text>

            <Text
              as="p"
              size={{ initial: '4', bp2: '4' }}
              css={{ lineHeight: '27px', color: '$gray900' }}
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
              css={{ lineHeight: '27px', color: '$gray900' }}
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
