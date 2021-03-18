import React from 'react';
import {
  Box,
  Card,
  Flex,
  Subtitle,
  Container,
  Section,
  Separator,
  Grid,
  Text,
  Code,
  Paragraph,
} from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Header } from '@components/Header';
import { WallOfLove } from '@components/WallOfLove';
import { CodeDemo } from '@components/CodeDemo';
import { Hero } from '@components/Hero';
import { FeaturesGrid } from '@components/FeaturesGrid';
import { Community } from '@components/Community';

const variantsCode = `const Button = styled('button', {
  // base styles

  variants: {
    color: {
      gray: {
        backgroundColor: 'gainsboro',
      },
      blue: {
        backgroundColor: 'dodgerblue',
      },
    },
    size: {
      md: {
        height: '25px',
      },
      lg: {
        height: '35px',
      }
    }
  },

  compoundVariants: [{
    color: 'blue',
    size: 'lg',
    css: {
      backgroundColor: 'purple',
    }
  },

  defaultVariants: {
    color: 'gray',
    size: 'md',
  }
});`;

const variantsCodeHighlights = {
  one: '4-21',
  two: '23-29',
  three: '31-34',
};

const themingCode = `const { theme } = createCss({
  theme: {
    fonts: {},
    space: {},
    sizes: {},
    fontSizes: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    radii: {},
    zIndices: {},
    colors: {
      gray100: 'hsl(206 14% 96%)',
      gray200: 'hsl(206 12% 90%)',
      gray300: 'hsl(206 6% 56%)',
      gray400: 'hsl(206 6% 44%)',
      violet100: 'hsl(252 87% 96%)',
      violet200: 'hsl(252 83% 87%)',
      violet300: 'hsl(252 62% 54%)',
      violet400: 'hsl(250 55% 48%)',

      // token aliases
      background: '$gray100',
      line: '$gray200',
      text: '$gray400',
      accent: '$violet300',
    }
  }
});

const darkTheme = theme({
  colors: {
    gray100: 'hsl(201 6% 12%)',
    gray200: 'hsl(203 6% 25%)',
    gray300: 'hsl(206 6% 44%)',
    gray400: 'hsl(205 5% 53%)',
    violet100: 'hsl(250 34% 16%)',
    violet200: 'hsl(251 43% 31%)',
    violet300: 'hsl(252 58% 50%)',
    violet400: 'hsl(250 100% 76%)',

    // token aliases
    background: '$gray100',
    line: '$gray200',
    text: '$gray400',
    accent: '$violet300',
  },
});`;

const themingCodeHighlights = {
  one: '3-20',
  two: '23-26',
  three: '31-48',
};

const utilsCode = `export const { styled, css } = createCss({
  utils: {
    pt: (config) => (value) => ({
      paddingTop: value,
    }),
    pr: (config) => (value) => ({
      paddingRight: value,
    }),
    pb: (config) => (value) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value) => ({
      paddingLeft: value,
    }),

    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (config) => (value) => ({
      width: value,
      height: value,
    }),

    linearGradient: (config) => (value) => ({

    }),
  },
});`;

const utilsCodeHighlights = {
  one: '1-14',
  two: '16-27',
  three: '29-31',
};

const demoCode3 = `const { theme } = createCss({
  theme: {
    fonts: {},
    space: {},
    sizes: {},
    fontSizes: {},
    radii: {},
    zIndices: {},
    colors: {
      gray100: 'hsl(0 0% 98.8%)',
      gray200: 'hsl(0 0% 96.0%)',
      gray300: 'hsl(0 0% 93.7%)',
      gray400: 'hsl(0 0% 92.0%)',

      slate100: 'hsl(206 20% 98.8%)',
      slate200: 'hsl(206 14% 96.0%)',
      slate300: 'hsl(206 13% 93.7%)',
      slate400: 'hsl(206 12% 92.0%)',

      panel: '$slate200',
    }
  }
});`;

const code3Highlights = {
  one: '1-23',
  two: '20',
};

const demoCode4 = `const { theme } = createCss({
  theme: {
    fonts: {},
    space: {},
    sizes: {},
    fontSizes: {},
    radii: {},
    zIndices: {},
  }
});`;

export default function Home() {
  const [variantsCodeActiveHighlight, setVariantsCodeActiveHighlight] = React.useState('one');
  const [themingCodeActiveHighlight, setThemingCodeActiveHighlight] = React.useState('one');
  const [utilsCodeActiveHighlight, setUtilsCodeActiveHighlight] = React.useState('one');
  const [code3ActiveHighlight, setCode3ActiveHighlight] = React.useState('one');

  return (
    <Box>
      <TitleAndMetaTags title="Stitches — CSS-in-JS with near-zero runtime" />
      <Box
        css={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          position: 'absolute',
          zIndex: '-1',
          background:
            'radial-gradient(circle at top left, $violet200, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 80% 20%, $cyan200, rgba(255, 255, 255, 0) 15%)',
          when: {
            bp2: {
              background:
                'radial-gradient(circle at 15% 50%, $violet200, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $cyan200, rgba(255, 255, 255, 0) 25%)',
            },
          },
        }}
      />
      <Header />
      <Hero />

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section size={{ initial: '2', bp1: '3' }}>
        <Container size="3">
          <Text size="8" css={{ fontWeight: 500, ta: 'center', mb: '$8' }}>
            Stats at a glance
          </Text>
          <Grid
            css={{
              gap: '$9',
              ai: 'center',
              when: {
                initial: {
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '$7',
                },
                bp2: {
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '$9',
                },
              },
            }}
          >
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Bundle size (Core)
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                3.8kb
              </Text>
            </Box>
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Bundle size (React)
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                4.1kb
              </Text>
            </Box>
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Runtime interpolations
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                Zero
              </Text>
            </Box>
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Variants
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                ∞
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section size={{ initial: '2', bp1: '3' }}>
        <Container size="3">
          <Grid
            css={{
              gap: '$6',
              ai: 'center',
              when: {
                initial: { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
                bp2: { gridTemplateColumns: 'repeat(2, 1fr)', gap: '$9', },
              },
            }}
          >
            <Box>
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>Variants</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Design composable component APIs with variants
              </Text>
              <Paragraph css={{ when: { bp2: { mb: '$6' }} }}>
                Variants are a first-class citizen of Stitches. With multiple variants, compound
                variants, and default variants, you can design composable component APIs which are
                typed automatically.
              </Paragraph>
              <Box
                css={{
                  display: 'none',
                  when: {
                    bp2: {
                      display: 'block',
                      mx: '-$3',
                    },
                  },
                }}
              >
                <Card
                  as="button"
                  onMouseDown={() => setVariantsCodeActiveHighlight('one')}
                  variant={variantsCodeActiveHighlight === 'one' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>Variants</Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Define multiple component variants.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setVariantsCodeActiveHighlight('two')}
                  variant={variantsCodeActiveHighlight === 'two' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Compound Variants
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Apply styles only when multiple variants match.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setVariantsCodeActiveHighlight('three')}
                  variant={variantsCodeActiveHighlight === 'three' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Default Variants
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Set a value as the default for each variant.
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeDemo
                language="jsx"
                variant="dark"
                mode="interactive"
                line={variantsCodeHighlights[variantsCodeActiveHighlight]}
                css={{
                  maxHeight: 700,
                }}
                value={variantsCode}
              />
            </Box>

            <Box>
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>Theming</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Dark mode is effortless with built-in theming.
              </Text>
              <Paragraph css={{ when: { bp2: { mb: '$6' }} }}>
                Stitches has built-in solutions for tokens and theming, which use CSS variables
                under-the-hood. You can define multiple themes, then expose them to any part of your
                app.
              </Paragraph>
              <Box
                css={{
                  display: 'none',
                  when: {
                    bp2: {
                      display: 'block',
                      mx: '-$3',
                    },
                  },
                }}
              >
                <Card
                  as="button"
                  onMouseDown={() => setThemingCodeActiveHighlight('one')}
                  variant={themingCodeActiveHighlight === 'one' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>Tokens</Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Define tokens with our built-in solution.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setThemingCodeActiveHighlight('two')}
                  variant={themingCodeActiveHighlight === 'two' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>Token aliases</Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Reference pre-existing tokens to define semantic aliases.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setThemingCodeActiveHighlight('three')}
                  variant={themingCodeActiveHighlight === 'three' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>Themes</Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Override tokens to define multiple themes.
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeDemo
                language="jsx"
                variant="dark"
                mode="interactive"
                line={themingCodeHighlights[themingCodeActiveHighlight]}
                css={{
                  maxHeight: 700,
                }}
                value={themingCode}
              />
            </Box>
          </Grid>
        </Container>
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section size={{ initial: '2', bp1: '3' }}>
        <Container size="3">
          <Text size="8" css={{ fontWeight: 500, ta: 'center', mb: '$2', lineHeight: '40px' }}>
            Testimonials
          </Text>
          <Subtitle css={{ ta: 'center' }}>Sharing some love from the community &lt;3</Subtitle>
        </Container>
        <WallOfLove />
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section size={{ initial: '2', bp1: '3' }}>
        <Container size="3">
          <Grid
            css={{
              gap: '$6',
              ai: 'center',
              when: {
                initial: { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
                bp2: { gridTemplateColumns: 'repeat(2, 1fr)', gap: '$9', },
              },
            }}
          >
            <Box>
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>Smart tokens</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Define multiple themes with CSS variables
              </Text>
              <Paragraph css={{ when: { bp2: { mb: '$6' }} }}>
                Define multiple themes with CSS variables, then expose them to any part of your app.
              </Paragraph>
              <Box
                css={{
                  display: 'none',
                  when: {
                    bp2: {
                      display: 'block',
                      mx: '-$3',
                    },
                  },
                }}
              >
                <Card
                  as="button"
                  onMouseDown={() => setCode3ActiveHighlight('one')}
                  variant={code3ActiveHighlight === 'one' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Smart token mapping
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card as="a" variant="ghost" href="#" css={{ p: '$3', mb: '$2' }}>
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Specific token mapping
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeDemo
                language="jsx"
                variant="dark"
                mode="interactive"
                line={code3Highlights[code3ActiveHighlight]}
                css={{
                  maxHeight: 700,
                }}
                value={demoCode3}
              />
            </Box>

            <Box>
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>Utils</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Define custom properties using utils
              </Text>
              <Paragraph css={{ when: { bp2: { mb: '$6' }} }}>
                Invent your own CSS properties with our custom utils feature. Speed up your coding
                by shortening repetitive styling tasks.
              </Paragraph>
              <Box
                css={{
                  display: 'none',
                  when: {
                    bp2: {
                      display: 'block',
                      mx: '-$3',
                    },
                  },
                }}
              >
                <Card
                  as="button"
                  onMouseDown={() => setUtilsCodeActiveHighlight('one')}
                  variant={utilsCodeActiveHighlight === 'one' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Property shorthands
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Define tokens with our built-in solution.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setUtilsCodeActiveHighlight('two')}
                  variant={utilsCodeActiveHighlight === 'two' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Property bundles
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Reference pre-existing tokens to define semantic aliases.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setUtilsCodeActiveHighlight('three')}
                  variant={utilsCodeActiveHighlight === 'three' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Simplify syntax
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Override tokens to define multiple themes.
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeDemo
                language="jsx"
                variant="dark"
                mode="interactive"
                line={utilsCodeHighlights[utilsCodeActiveHighlight]}
                css={{
                  maxHeight: 700,
                }}
                value={utilsCode}
              />
            </Box>
          </Grid>
        </Container>

        {/* <Container size="3">
          <Grid
            css={{
              gap: '$9',
              ai: 'center',
              when: {
                initial: { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
                bp2: { gridTemplateColumns: 'repeat(3, 1fr)' },
              },
            }}
          >
            <Box>
              <Heading>Conditions</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
              <Box>
                <CodeDemo
                  language="jsx"
                  variant="light"
                  css={{
                    maxHeight: 700,
                  }}
                  value={demoCode4}
                />
              </Box>
            </Box>
            <Box>
              <Heading>Override styles</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
              <Box>
                <CodeDemo
                  language="jsx"
                  variant="light"
                  css={{
                    maxHeight: 700,
                  }}
                  value={demoCode4}
                />
              </Box>
            </Box>
            <Box>
              <Heading>Override styles</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
              <Box>
                <CodeDemo
                  language="jsx"
                  variant="light"
                  css={{
                    maxHeight: 700,
                  }}
                  value={demoCode4}
                />
              </Box>
            </Box>
          </Grid>
        </Container> */}
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <FeaturesGrid />

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Community />
    </Box>
  );
}
