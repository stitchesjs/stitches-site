import NextLink from 'next/link';
import {
  Box,
  Card,
  Title,
  Flex,
  Heading,
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
import { HeroCodeDemo } from '@components/HeroCodeDemo';
import { StitchesLogo } from '@components/StitchesLogo';
import { DemoButton } from '@components/DemoButton';
import { Tweet } from '@components/Tweet';
import { CodeBlock } from '@components/CodeBlock';

const demoCode2 = `const { styled } = createCss({
  utils: {
    __bc__: config => value => ({
      backgroundColor: value
    }),
    __fs__: config => value => ({
      fontSize: value
    }),
    __p__: config => value => ({
      paddingTop: value,
      paddingRight: value,
      paddingBottom: value,
      paddingLeft: value,
    })
  }
});
const Button = styled('button', {
  __bc__: '$blue500',
  __fs__: '$1',
  __p__: '$1',
});`;

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
      </Box>

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

        <Flex css={{ jc: 'center', gap: '$3', my: '$6' }}>
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

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Container size="2">
        <Box
          css={{
            border: '1px solid $gray300',
            borderRadius: '$2',
            fontFamily: '$mono',
            fontSize: '$2',
            lineHeight: 1,
            color: '$violet900',
            p: '$3',
          }}
        >
          npm install{' '}
          <Box as="span" css={{ color: '$hiContrast' }}>
            @stitches/react
          </Box>
        </Box>

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
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Performant
            </Text>
            <Text as="p" size="3" css={{ lineHeight: '23px', color: '$gray900' }}>
              Stitches avoids unnecessary prop interpolations at runtime.
            </Text>
          </Box>
          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Feature-rich
            </Text>
            <Text as="p" size="3" css={{ lineHeight: '23px', color: '$gray900' }}>
              Stitches avoids unnecessary prop interpolations at runtime.
            </Text>
          </Box>
          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Developer experience
            </Text>
            <Text as="p" size="3" css={{ lineHeight: '23px', color: '$gray900' }}>
              Stitches avoids unnecessary prop interpolations at runtime.
            </Text>
          </Box>
        </Grid>
      </Container>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section>
        <Container size="3">
          <Heading css={{ ta: 'center' }}>Testimonials</Heading>
          <Subtitle css={{ ta: 'center' }}>A fully-featured styling library.</Subtitle>
        </Container>
        <Box css={{ ox: 'auto', py: '$8', px: '$5' }}>
          <Flex css={{ gap: '$4' }}>
            <Tweet url="https://twitter.com/peduarte" author="Pedro Duarte" username="peduarte">
              This might be the best implementation of CSS-in-JS yet. It does what CSS-in-JS has
              always failed to do in the past: fix all the problems that CSS had already solved (and
              Sass).
            </Tweet>
            <Tweet url="https://twitter.com/peduarte" author="Colm Tuite" username="colmtuite">
              This might be the best implementation of CSS-in-JS yet. It does what CSS-in-JS has
              always failed to do in the past: fix all the problems that CSS had already solved (and
              Sass).
            </Tweet>
            <Tweet url="https://twitter.com/peduarte" author="Pedro Duarte" username="peduarte">
              This might be the best implementation of CSS-in-JS yet. It does what CSS-in-JS has
              always failed to do in the past: fix all the problems that CSS had already solved (and
              Sass).
            </Tweet>
            <Tweet url="https://twitter.com/peduarte" author="Pedro Duarte" username="peduarte">
              This might be the best implementation of CSS-in-JS yet. It does what CSS-in-JS has
              always failed to do in the past: fix all the problems that CSS had already solved (and
              Sass).
            </Tweet>
            <Tweet url="https://twitter.com/peduarte" author="Pedro Duarte" username="peduarte">
              This might be the best implementation of CSS-in-JS yet. It does what CSS-in-JS has
              always failed to do in the past: fix all the problems that CSS had already solved (and
              Sass).
            </Tweet>
            <Tweet url="https://twitter.com/peduarte" author="Pedro Duarte" username="peduarte">
              This might be the best implementation of CSS-in-JS yet. It does what CSS-in-JS has
              always failed to do in the past: fix all the problems that CSS had already solved (and
              Sass).
            </Tweet>
            <Tweet url="https://twitter.com/peduarte" author="Pedro Duarte" username="peduarte">
              This might be the best implementation of CSS-in-JS yet. It does what CSS-in-JS has
              always failed to do in the past: fix all the problems that CSS had already solved (and
              Sass).
            </Tweet>
          </Flex>
        </Box>
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section>
        <Container size="3">
          <Grid css={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '$7' }}>
            <Box>
              <Heading>Variants</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
            </Box>
            <Box>
              <CodeBlock
                css={{
                  backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                  boxShadow: 'none !important',
                  backdropFilter: 'blur(72px)',
                }}
                language="jsx"
                value={demoCode2}
                line="2-13"
              />
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container size="3">
          <Grid css={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '$7' }}>
            <Box>
              <Heading>Theming</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
            </Box>
            <Box>
              <CodeBlock
                css={{
                  backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                  boxShadow: 'none !important',
                  backdropFilter: 'blur(72px)',
                }}
                language="jsx"
                value={demoCode2}
                line="2-13"
              />
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container size="3">
          <Grid css={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '$7' }}>
            <Box>
              <Heading>Smart tokens</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
            </Box>
            <Box>
              <CodeBlock
                css={{
                  backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                  boxShadow: 'none !important',
                  backdropFilter: 'blur(72px)',
                }}
                language="jsx"
                value={demoCode2}
                line="2-13"
              />
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container size="3">
          <Grid css={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '$7' }}>
            <Box>
              <Heading>Utils</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
            </Box>
            <Box>
              <CodeBlock
                css={{
                  backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                  boxShadow: 'none !important',
                  backdropFilter: 'blur(72px)',
                }}
                language="jsx"
                value={demoCode2}
                line="2-13"
              />
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container size="3">
          <Grid css={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '$7' }}>
            <Box>
              <Heading>Conditions</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
              <Box>
                <CodeBlock
                  css={{
                    backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
                    boxShadow: 'none !important',
                    backdropFilter: 'blur(72px)',
                  }}
                  language="jsx"
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
                    boxShadow: 'none !important',
                    backdropFilter: 'blur(72px)',
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
          <Heading>Features</Heading>
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
                css={{ lineHeight: '27px', color: '$gray900' }}
              >
                Both <Code>@stitches/core</Code> and <Code>@stitches/react</Code> libraries combined
                weigh in at ~8.0kb gzipped.
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
                Variants
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '27px', color: '$gray900' }}
              >
                Variants are a first-class citizen of Stitches, so you can design composable
                component APIs which are typed automatically.
              </Text>
            </Box>

            <Box>
              <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                Theming
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '27px', color: '$gray900' }}
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
                Specificity
              </Text>

              <Text
                as="p"
                size={{ initial: '4', bp2: '4' }}
                css={{ lineHeight: '27px', color: '$gray900' }}
              >
                No more specificity issues due to the atomic output. Even extended components (via
                the <Code>as</Code> prop) won't contain duplicate CSS properties.
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
          <Heading>Community</Heading>
          <Subtitle as="p">A fully-featured styling library.</Subtitle>

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
