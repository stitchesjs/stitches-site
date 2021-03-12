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
import { DemoButton } from '@components/DemoButton';
import { WallOfLove } from '@components/WallOfLove';
import { CodeBlock } from '@components/CodeBlock';
import { TwitterLogoIcon, GitHubLogoIcon } from '@modulz/radix-icons';

const demoCode2 = `const Button = styled('button', {
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
      bcakgroundColor: 'purple',
    }
  },

  defaultVariants: {
    color: 'gray',
    size: 'md',
  }
});`;

export default function Home() {
  return (
    <Box>
      <TitleAndMetaTags title="Stitches" />

      <Header />

      <Section css={{ pt: 0 }}>
        <Container size="3">
          <Title
            css={{
              mb: '$2',
              when: {
                bp2: {
                  ta: 'center',
                  mb: '$3',
                },
              },
            }}
          >
            The modern styling library
          </Title>
          <Subtitle
            as="p"
            css={{
              when: {
                bp2: {
                  mx: 230,
                  ta: 'center',
                },
              },
            }}
          >
            Near-zero runtime, server-side rendering, multi-variant support, and a best-in-class
            developer experience.
          </Subtitle>

          <Flex css={{ jc: 'center', gap: '$3', my: '$8' }}>
            <NextLink href="/docs" passHref>
              <DemoButton as="a" color="violet" size="large" css={{ mr: '$1' }}>
                Documentation
              </DemoButton>
            </NextLink>

            <DemoButton
              as="a"
              href="https://github.com/modulz/stitches"
              appearance="ghost"
              size="large"
              css={{ ml: '$1' }}
            >
              GitHub
            </DemoButton>
          </Flex>
        </Container>

        <Container size="1" css={{ my: '$8' }}>
          <Flex
            css={{
              boxShadow: 'inset 0 0 0 1px $colors$gray400',
              borderRadius: '$pill',
              fontFamily: '$mono',
              fontSize: '$2',
              lineHeight: 1,
              ai: 'center',
              height: '$7',
              color: '$violet900',
              backgroundColor: '$gray100',
              px: '$4',
            }}
          >
            npm install{' '}
            <Box as="span" css={{ color: '$hiContrast' }}>
              &nbsp;@stitches/react
            </Box>
          </Flex>
        </Container>

        <Container size="3">
          <Grid
            css={{
              gap: '$7',
              gridTemplateColumns: '1fr',
              when: {
                bp2: {
                  gap: '$7',
                  gridTemplateColumns: '1fr 1fr 1fr',
                },
              },
            }}
          >
            <Box>
              <Subheading css={{ mb: '$2' }}>Performant</Subheading>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '25px' }}>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries. It's lightweight too,{' '}
                <Code>@stitches/react</Code> weighs in at ~8.0kb gzipped.
              </Text>
            </Box>
            <Box>
              <Subheading css={{ mb: '$2' }}>Feature-rich</Subheading>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '25px' }}>
                Prefixing all tokens ensures an accurate TypeScript autocomplete experience.
                However, token prefixes are optional. They still work, but numeric scale tokens will
                autocomplete to numeric values.
              </Text>
            </Box>
            <Box>
              <Subheading css={{ mb: '$2' }}>Best-in-class DX</Subheading>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '25px' }}>
                Token types are automatically mapped to CSS Properties for an improved developer
                experience.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

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
                <Card as="button" variant="active" css={{ p: '$3', mb: '$2', width: '100%' }}>
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Variants</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card as="button" variant="ghost" css={{ p: '$3', mb: '$2', width: '100%' }}>
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
                    Compound Variants
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
                <Card as="button" variant="ghost" css={{ p: '$3', mb: '$2', width: '100%' }}>
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
              <CodeBlock
                language="jsx"
                variant="dark"
                css={{
                  backgroundImage: 'linear-gradient(to right, $blue1000, $blue1000)',
                }}
                value={demoCode2}
                line="2-13"
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
                <Card as="a" variant="ghost" href="#" css={{ p: '$3', mb: '$2' }}>
                  <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Tokens</Text>
                  <Text variant="gray" css={{ lineHeight: '20px' }}>
                    Apply styles when two or more variants match.
                  </Text>
                </Card>
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
              <CodeBlock
                language="jsx"
                css={{
                  backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                }}
                value={demoCode2}
                line="2-13"
              />
            </Box>

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
              <CodeBlock
                language="jsx"
                css={{
                  backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                }}
                value={demoCode2}
                line="2-13"
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
              <CodeBlock
                language="jsx"
                css={{
                  backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                }}
                value={demoCode2}
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
                bp2: { gridTemplateColumns: 'repeat(2, 1fr)' },
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
                <CodeBlock
                  language="jsx"
                  css={{
                    backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                  }}
                  value={demoCode2}
                  line="2-13"
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
                <CodeBlock
                  css={{
                    backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                  }}
                  language="jsx"
                  value={demoCode2}
                  line="2-13"
                />
              </Box>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section>
        <Container size="2">
          <Text size="8" css={{ fontWeight: 500, ta: 'center' }}>
            Features
          </Text>
          <Subtitle as="p">A fully-featured styling library.</Subtitle>

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
                Stitches supports cross-browser server-side rendering, even for responsive styles
                and variants.
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
                With a fully-typed API, token-aware properties, and custom utils, Stitches provides
                a fun and intuitive DX.
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
                Stitches only injects the styles which are actually used, so your users don't
                download unnecessary CSS.
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
                Stitches provides a <Code>css</Code> prop, which allows style overrides to be
                applied in the consumption layer.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container size="2">
          <Text size="8" css={{ fontWeight: 500, ta: 'center' }}>
            Community
          </Text>
          <Subtitle as="p" css={{ ta: 'center' }}>A fully-featured styling library.</Subtitle>

          <Grid
            css={{
              gap: '$7',
              gridTemplateColumns: '1fr',
              when: {
                bp2: {
                  gap: '$7',
                  gridTemplateColumns: '1fr 1fr 1fr',
                },
              },
              mx: '-$4',
            }}
          >
            <Box>
              <Card
                variant="ghost"
                as="a"
                href="https://twitter.com/stitchesjs"
                target="_blank"
                css={{
                  p: '$4',
                }}
              >
                <Box css={{ mb: '$5' }}>
                  <TwitterLogoIcon />
                </Box>
                <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Twitter
                </Text>
                <Text as="p" size="3" css={{ lineHeight: '23px', color: '$gray900' }}>
                  Stitches avoids unnecessary prop interpolations at runtime.
                </Text>
              </Card>
            </Box>
            <Box>
              <Card
                variant="ghost"
                as="a"
                href="https://twitter.com/stitchesjs"
                target="_blank"
                css={{
                  p: '$4',
                }}
              >
                <Box css={{ mb: '$5' }}>
                  <TwitterLogoIcon />
                </Box>
                <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Discord
                </Text>
                <Text as="p" size="3" css={{ lineHeight: '23px', color: '$gray900' }}>
                  Stitches avoids unnecessary prop interpolations at runtime.
                </Text>
              </Card>
            </Box>
            <Box>
              <Card
                variant="ghost"
                as="a"
                href="https://twitter.com/stitchesjs"
                target="_blank"
                css={{
                  p: '$4',
                }}
              >
                <Box css={{ mb: '$5' }}>
                  <GitHubLogoIcon />
                </Box>
                <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Github
                </Text>
                <Text as="p" size="3" css={{ lineHeight: '23px', color: '$gray900' }}>
                  Stitches avoids unnecessary prop interpolations at runtime.
                </Text>
              </Card>
            </Box>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
