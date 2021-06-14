import React from 'react';
import {
  Box,
  Card,
  Flex,
  Heading,
  Container,
  Section,
  Separator,
  Grid,
  Link,
  Paragraph,
  Text,
  Code,
  theme,
} from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Header } from '@components/Header';
import { WallOfLove } from '@components/WallOfLove';
import { CodeDemo } from '@components/CodeDemo';
import { Hero } from '@components/Hero';
import { FeaturesGrid } from '@components/FeaturesGrid';
import { Community } from '@components/Community';
import { StarFilledIcon } from '@modulz/radix-icons';

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
  }],

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

const tokensCode = `const Button = styled("button", {
  color: '$violet400',
  paddingLeft: '$4',
  paddingRight: '$4',
  height: '$6',
  fontSize: '$3',
  border: '1px solid $pink500',

  height: '$space$6',
  paddingLeft: '$sizes$4',
  paddingRight: '$sizes$4',
});`;

const tokensCodeHighlights = {
  one: '2-7',
  two: '9-11',
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
      backgroundImage: \`linear-gradient(\${value})\`,
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
  const [tokensActiveHighlight, setTokensCodeActiveHighlight] = React.useState('one');

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
            'radial-gradient(circle at top left, $violet4, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 80% 20%, $cyan4, rgba(255, 255, 255, 0) 15%)',
          '@bp2': {
            background:
              'radial-gradient(circle at 15% 50%, $violet4, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $cyan4, rgba(255, 255, 255, 0) 25%)',
          },
        }}
      />
      <Header />
      <Hero />

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section size={{ '@initial': '2', '@bp1': '3' }}>
        <Container size="3">
          <Heading as="h3" size="3" css={{ fontWeight: 500, ta: 'center', mb: '$8' }}>
            Stats at a glance
          </Heading>
          <Grid
            css={{
              ai: 'center',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '$7',
              '@bp2': {
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '$9',
              },
            }}
          >
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Bundle size (Core)
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                6.1kb
              </Text>
            </Box>
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Bundle size (React)
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                6.3kb
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

      <Section size={{ '@initial': '2', '@bp1': '3' }}>
        <Container size="3">
          <Grid
            css={{
              gap: '$6',
              ai: 'center',
              gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
              '@bp2': { gridTemplateColumns: 'repeat(2, 1fr)', gap: '$9' },
            }}
          >
            <Box>
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>Variants</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Design composable component APIs with variants
              </Text>
              <Text size="4" css={{ lineHeight: '27px', '@bp2': { mb: '$6' } }}>
                Variants are a first-class citizen of Stitches. With multiple variants, compound
                variants, and default variants, you can design composable component APIs which are
                typed automatically.
              </Text>
              <Box
                css={{
                  display: 'none',
                  '@bp2': {
                    display: 'block',
                    mx: '-$3',
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
                variant="violet"
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
                <Code
                  css={{
                    mb: '$5',
                    fontFamily: '$mono',
                    fontSize: '$4',
                    backgroundColor: '$cyan4',
                    color: '$cyan11',
                  }}
                >
                  Theming
                </Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Dark mode is effortless with built-in theming.
              </Text>
              <Text size="4" css={{ lineHeight: '27px', '@bp2': { mb: '$6' } }}>
                Stitches has built-in solutions for tokens and theming, which use CSS variables
                under-the-hood. You can define multiple themes, then expose them to any part of your
                app.
              </Text>
              <Box
                css={{
                  display: 'none',
                  '@bp2': {
                    display: 'block',
                    mx: '-$3',
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
                variant="cyan"
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

      <Section size={{ '@initial': '2', '@bp1': '3' }} css={{ position: 'relative' }}>
        <Box
          css={{
            position: 'absolute',
            transform: 'rotateZ(30deg)',
            zIndex: '-1',
            left: '15%',
            color: '$gold6',
          }}
        >
          <StarFilledIcon />
        </Box>
        <Box
          css={{
            position: 'absolute',
            transform: 'rotateZ(-30deg)',
            zIndex: '-1',
            left: '30%',
            top: 100,
            display: 'none',
            '@bp2': {
              display: 'block',
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M12.5 5.99997C11 2.49997 8 2.28568 6.5 2.49997C3.7 2.89997 2.5 5.99997 2.5 7.99997C2.5 9.33323 3 11.5 6.5 15.9999L12.5 22.5L18.5 15.9999L18.5005 15.9993C21.7001 11.9998 22.5 10.9999 22.5 7.99988C22.5 6 21.7737 3.04532 18.5 2.50013C16.7719 2.21233 13.5 2.50002 12.5 5.99997Z"
              fill={theme.colors.red6}
            />
          </svg>
        </Box>
        <Box
          css={{
            position: 'absolute',
            transform: 'rotateZ(30deg)',
            zIndex: '-1',
            left: '65%',
            top: 20,
            color: '$gold6',
          }}
        >
          <StarFilledIcon />
        </Box>
        <Box
          css={{
            position: 'absolute',
            transform: 'rotateZ(30deg)',
            zIndex: '-1',
            right: '10%',
            top: 125,
            display: 'none',
            color: '$yellow6',
            '@bp2': {
              display: 'block',
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M6.5 4.5V8.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 6.5H8.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 16.5V20.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 18.5H10.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M11.5 13L16.5 3.5L21.5 13L16.5 21.5L11.5 13Z" fill="currentColor" />
          </svg>
        </Box>
        <Box
          css={{
            position: 'absolute',
            transform: 'rotateZ(30deg)',
            zIndex: '-1',
            left: '25%',
            bottom: 10,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M12.5 5.99997C11 2.49997 8 2.28568 6.5 2.49997C3.7 2.89997 2.5 5.99997 2.5 7.99997C2.5 9.33323 3 11.5 6.5 15.9999L12.5 22.5L18.5 15.9999L18.5005 15.9993C21.7001 11.9998 22.5 10.9999 22.5 7.99988C22.5 6 21.7737 3.04532 18.5 2.50013C16.7719 2.21233 13.5 2.50002 12.5 5.99997Z"
              fill={theme.colors.red6}
            />
          </svg>
        </Box>
        <Box
          css={{
            position: 'absolute',
            transform: 'rotateZ(30deg)',
            zIndex: '-1',
            right: '35%',
            bottom: 30,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M12.5 5.99997C11 2.49997 8 2.28568 6.5 2.49997C3.7 2.89997 2.5 5.99997 2.5 7.99997C2.5 9.33323 3 11.5 6.5 15.9999L12.5 22.5L18.5 15.9999L18.5005 15.9993C21.7001 11.9998 22.5 10.9999 22.5 7.99988C22.5 6 21.7737 3.04532 18.5 2.50013C16.7719 2.21233 13.5 2.50002 12.5 5.99997Z"
              fill={theme.colors.red6}
            />
          </svg>
        </Box>
        <Container size="3">
          <Text size="8" css={{ fontWeight: 500, ta: 'center', mb: '$2', lineHeight: '40px' }}>
            Testimonials
          </Text>
          <Paragraph size="2" css={{ ta: 'center' }}>
            Sharing some love from the community &lt;3
          </Paragraph>
        </Container>
        <WallOfLove />
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section size={{ '@initial': '2', '@bp1': '3' }}>
        <Container size="3">
          <Grid
            css={{
              gap: '$6',
              ai: 'center',
              gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
              '@bp2': { gridTemplateColumns: 'repeat(2, 1fr)', gap: '$9' },
            }}
          >
            <Box>
              <Box css={{ mb: '$5' }}>
                <Code
                  css={{
                    mb: '$5',
                    fontFamily: '$mono',
                    fontSize: '$4',
                    backgroundColor: '$yellow4',
                    color: '$yellow11',
                  }}
                >
                  Smart tokens
                </Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Save time with smart, typed token mapping
              </Text>
              <Text size="4" css={{ lineHeight: '27px', '@bp2': { mb: '$6' } }}>
                Tokens automatically map to the most appropriate scale—with a simple syntax—for a
                smooth developer experience. You can customise the default mapping with our{' '}
                <Code>themeMap</Code> object, or override the default on a case-by-case basis.
              </Text>
              <Box
                css={{
                  display: 'none',
                  '@bp2': {
                    display: 'block',
                    mx: '-$3',
                  },
                }}
              >
                <Card
                  as="button"
                  onMouseDown={() => setTokensCodeActiveHighlight('one')}
                  variant={tokensActiveHighlight === 'one' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Smart token mapping
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Tokens automatically map to the most appropriate scale.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setTokensCodeActiveHighlight('two')}
                  variant={tokensActiveHighlight === 'two' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Specific token mapping
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Override the default and map to any scale.
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeDemo
                language="jsx"
                variant="yellow"
                mode="interactive"
                line={tokensCodeHighlights[tokensActiveHighlight]}
                css={{
                  maxHeight: 700,
                }}
                value={tokensCode}
              />
            </Box>

            <Box>
              <Box css={{ mb: '$5' }}>
                <Code
                  css={{
                    mb: '$5',
                    fontFamily: '$mono',
                    fontSize: '$4',
                    backgroundColor: '$blue4',
                    color: '$blue11',
                  }}
                >
                  Utils
                </Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Turbocharge your coding speed with custom CSS properties
              </Text>
              <Text size="4" css={{ lineHeight: '27px', '@bp2': { mb: '$6' } }}>
                Invent your own custom CSS properties with our utils feature. Speed up your workflow
                by abbreviating CSS properties, grouping multiple CSS properties together, or
                simplifying a tricky syntax.
              </Text>
              <Box
                css={{
                  display: 'none',
                  '@bp2': {
                    display: 'block',
                    mx: '-$3',
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
                    Abbreviate CSS properties.
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
                    Apply multiple CSS properties simultaneously.
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
                    Simplify a tricky CSS syntax.
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeDemo
                language="jsx"
                variant="blue"
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
                '@initial': { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
                '@bp2': { gridTemplateColumns: 'repeat(3, 1fr)' },
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
