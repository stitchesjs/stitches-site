import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Card,
  Title,
  Flex,
  Heading,
  Subtitle,
  Container,
  Link,
  Subheading,
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
import { TwitterLogoIcon, GitHubLogoIcon } from '@modulz/radix-icons';

const demoCode1 = `const Button = styled('button', {
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

const code1Highlights = {
  one: '4-21',
  two: '23-29',
  three: '31-34',
};

const demoCode2 = `const { theme } = createCss({
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
});

const darkTheme = theme('dark-theme', {
  colors: {
    gray100: 'hsl(0 0% 9.6%)',
    gray200: 'hsl(0 0% 11.6%)',
    gray300: 'hsl(0 0% 13.9%)',
    gray400: 'hsl(0 0% 16.6%)',

    slate100: 'hsl(200 6% 9.6%)',
    slate200: 'hsl(201 6% 11.6%)',
    slate300: 'hsl(201 6% 13.9%)',
    slate400: 'hsl(202 6% 16.6%)',

    panel: '$slate200',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',
  },
});`;

const code2Highlights = {
  one: '1-23',
  two: '20',
  three: '25-42',
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
  const [code1ActiveHighlight, setCode1ActiveHighlight] = React.useState('one');
  const [code2ActiveHighlight, setCode2ActiveHighlight] = React.useState('one');
  const [code3ActiveHighlight, setCode3ActiveHighlight] = React.useState('one');

  return (
    <Box>
      <TitleAndMetaTags title="Stitches" />

      <Header />
      <Hero />

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section>
        <Container size="3">
          <Grid
            css={{
              gap: '$9',
              ai: 'center',
              when: {
                initial: { gridTemplateColumns: 'repeat(1, 1fr)' },
                bp2: { gridTemplateColumns: 'repeat(2, 1fr)' },
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
              <Paragraph css={{ mb: '$6' }}>
                Variants are a first-class citizen of Stitches. With multiple variants, compound
                variants, and default variants, you can design composable component APIs which are
                typed automatically.
              </Paragraph>
              <Box css={{ mx: '-$3' }}>
                <Card
                  as="button"
                  onMouseDown={() => setCode1ActiveHighlight('one')}
                  variant={code1ActiveHighlight === 'one' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Variants</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setCode1ActiveHighlight('two')}
                  variant={code1ActiveHighlight === 'two' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
                    Compound Variants
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setCode1ActiveHighlight('three')}
                  variant={code1ActiveHighlight === 'three' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
                    Default Variants
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
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
                line={code1Highlights[code1ActiveHighlight]}
                css={{
                  maxHeight: 700,
                }}
                value={demoCode1}
              />
            </Box>

            <Box>
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>Theming</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Define multiple themes with CSS variables
              </Text>
              <Paragraph css={{ mb: '$6' }}>
                Define multiple themes with CSS variables, then expose them to any part of your app.
              </Paragraph>
              <Box css={{ mx: '-$3' }}>
                <Card
                  as="button"
                  onMouseDown={() => setCode2ActiveHighlight('one')}
                  variant={code2ActiveHighlight === 'one' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Tokens</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setCode2ActiveHighlight('two')}
                  variant={code2ActiveHighlight === 'two' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Token aliases</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setCode2ActiveHighlight('three')}
                  variant={code2ActiveHighlight === 'three' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Themes</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
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
                line={code2Highlights[code2ActiveHighlight]}
                css={{
                  maxHeight: 700,
                }}
                value={demoCode2}
              />
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section>
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

      <Section>
        <Container size="3">
          <Grid
            css={{
              gap: '$9',
              ai: 'center',
              when: {
                initial: { gridTemplateColumns: 'repeat(1, 1fr)' },
                bp2: { gridTemplateColumns: 'repeat(2, 1fr)' },
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
              <Paragraph css={{ mb: '$6' }}>
                Define multiple themes with CSS variables, then expose them to any part of your app.
              </Paragraph>
              <Box css={{ mx: '-$3' }}>
                <Card
                  as="button"
                  onMouseDown={() => setCode3ActiveHighlight('one')}
                  variant={code3ActiveHighlight === 'one' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
                    Smart token mapping
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card as="a" variant="ghost" href="#" css={{ p: '$3', mb: '$2' }}>
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
                    Specific token mapping
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
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
              <Paragraph css={{ mb: '$6' }}>
                Define multiple themes with CSS variables, then expose them to any part of your app.
              </Paragraph>
              <Box css={{ mx: '-$3' }}>
                <Card as="a" variant="ghost" href="#" css={{ p: '$3', mb: '$2' }}>
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Token Aliases</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card as="a" variant="ghost" href="#" css={{ p: '$3', mb: '$2' }}>
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Themes</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeDemo
                language="jsx"
                css={{
                  backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                }}
                value={demoCode1}
                line="2-13"
              />
            </Box>
          </Grid>
        </Container>

        <Container size="3">
          <Grid
            css={{
              gap: '$9',
              ai: 'center',
              when: {
                initial: { gridTemplateColumns: 'repeat(1, 1fr)' },
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
        </Container>
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <FeaturesGrid />
      <Community />
    </Box>
  );
}
