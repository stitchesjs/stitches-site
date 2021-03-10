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
import { HeroCodeDemo } from '@components/HeroCodeDemo';
import { StitchesLogo } from '@components/StitchesLogo';
import { DemoButton } from '@components/DemoButton';
import { Tweet } from '@components/Tweet';
import { CodeBlock } from '@components/CodeBlock';

const demoCode2 = `const Button = styled('button', {
  backgroundColor: 'purple',
  backgroundColor: 'purple',
  backgroundColor: 'purple',
  backgroundColor: 'purple',

  variants: {
    color: {
      purple: {

      },
      purple: {
        
      },
    },
    size: {
      md: {

      },
      lg: {
        
      }
    }
  }
});`;

export default function Home() {
  return (
    <Box>
      <TitleAndMetaTags title="Stitches" />
      <Flex as="header" css={{ py: '$4', px: '$4', mb: '$7', ai: 'flex-start', jc: 'space-between' }}>
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
        <Flex css={{ gap: '$6' }}>
          <NextLink href="/docs/installation" passHref>
            <Link
              variant="subtle"
            >
              <Text>Docs</Text>
            </Link>
          </NextLink>
          <NextLink href="/docs/installation" passHref>
            <Link
              variant="subtle"
            >
              <Text>Blog</Text>
            </Link>
          </NextLink>
          <NextLink href="/docs/installation" passHref>
            <Link
              variant="subtle"
            >
              <Text>Github</Text>
            </Link>
          </NextLink>
          <NextLink href="/docs/installation" passHref>
            <Link
              variant="subtle"
            >
              <Text>Discord</Text>
            </Link>
          </NextLink>
        </Flex>
      </Flex>
      
      <Section css={{ pt: 0 }}>
        <Container size="3">
          <Title css={{
            mb: '$2',
            when: {
              bp2: {
                ta: 'center',
                mb: '$3',
              }
            }
          }}>
            The modern styling library
          </Title>
          <Subtitle
            as="p"
            css={{
              when: {
                bp2: {
                  mx: 230,
                  ta: 'center'
                }
              }
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
                <Subheading css={{ mb: '$2' }}>
                  Performant
                </Subheading>
                <Text
                  as="p"
                  size="3"
                  variant="gray"
                  css={{ lineHeight: '25px' }}
                >
                  Stitches avoids unnecessary prop interpolations at runtime, making it significantly more performant than other styling libraries. It's lightweight too, <Code>@stitches/react</Code> weighs in at ~8.0kb gzipped.
                </Text>
              </Box>
              <Box>
                <Subheading css={{ mb: '$2' }}>
                  Feature-rich
                </Subheading>
                <Text
                  as="p"
                  size="3"
                  variant="gray"
                  css={{ lineHeight: '25px' }}
                >
                  Prefixing all tokens ensures an accurate TypeScript autocomplete experience. However, token prefixes are optional. They still work, but numeric scale tokens will autocomplete to numeric values.
                </Text>
              </Box>
              <Box>
                <Subheading css={{ mb: '$2' }}>
                  Best-in-class DX
                </Subheading>
                <Text
                  as="p"
                  size="3"
                  variant="gray"
                  css={{ lineHeight: '25px' }}
                >
                  Token types are automatically mapped to CSS Properties for an improved developer experience.
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
          <Subtitle css={{ ta: 'center' }}>
            Sharing some love from the community &lt;3
          </Subtitle>
        </Container>
        <Box css={{ ox: 'auto', py: '$8', px: '$5' }}>
          <Flex css={{ gap: '$4', ai: 'flex-start' }}>
            <Tweet url="https://twitter.com/ChrisHBrown55/status/1364967237128499211" author="Chris" username="chrishbrown55">
              This might be the best implementation of CSS-in-JS yet. It does what CSS-in-JS has
              always failed to do in the past: fix all the problems that CSS had already solved (and
              Sass).
            </Tweet>
            <Tweet url="https://twitter.com/djm_/status/1364869309860831238" author="Darian Moody" username="djm_">
              I've been banging on about Stitches these past few because I've been so happy working with it on the side.
              <br /><br />
              5 years ago everyone was in Sketch.
              <br /><br />
              Now everyone's in Figma.
              <br /><br />
              In another few, in-browser design tools will be exporting code &amp; Stitches is here to support that future.
            </Tweet>
            <Tweet url="https://twitter.com/braposo/status/1300941603490746368" author="Bernardo Raposo" username="braposo">
              This break from the code is actually why stitches is much more than a styling library. It is a common language that both designers and developers understand, they just use different tools to "communicate".
            </Tweet>
            <Tweet url="https://twitter.com/joebell_/status/1364832150655299585" author="Joe Bell" username="joebell_">
              I just moved my site over to Stitches beta and I have absolutely nothing bad to say about it—this is the library I’ve been waiting for.
            </Tweet>
            <Tweet url="https://twitter.com/markdalgleish/status/1364827475595825155" author="Mark Dalgleish" username="markdalgleish">
              Listening to <Text variant="blue" css={{ display: 'inline' }}>@peduarte</Text> talk about <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text>, the penny finally dropped for me. They've designed an API that feels like it belongs in the options panel of a design tool because, of course, they're also building <Text variant="blue" css={{ display: 'inline' }}>@modulz</Text>.
            </Tweet>
            <Tweet url="https://twitter.com/msanromanv/status/1364549916656357380" author="Mike San Román" username="msanromanv">
              Huge congrats to <Text variant="blue" css={{ display: 'inline' }}>@peduarte</Text> and the <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> team.
              <br /><br />
              This definitely feels like a step forward, not only because of the performance benefits, SSR support, etc., but the developer experience is amazing.
              <br /><br />
              I think I haven't been as excited about a styling lib ever.
            </Tweet>
            <Tweet url="https://twitter.com/razvan_pavel/status/1364538366126096389" author="Răzvan Pavel" username="razvan_pavel">
              Something I don't see very often in any tech or product reading: developer &amp; debug experience! It's this focus on using tech as a tool and putting humans first that makes products successful. <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> will probably be around for a while. Congrats!
            </Tweet>
            <Tweet url="https://twitter.com/giuseppegurgone/status/1364506245009448960" author="Giuseppe" username="giuseppegurgone">
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still called them Styleguide, created a couple of CSS in JS libs and watched this space for a long while and <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> seems the most promising library out there
            </Tweet>
            <Tweet url="https://twitter.com/1stfloor/status/1364254660119453698" author="🆅🅸🅽🅲🅴" username="1stfloor">
              The cool thing for me as a Designer was seeing the same systematic approach to using design tokens  / variables and at a level I could understand 😂
              <br /><br />
              I believe the gap between Design and Development is finally narrowing and solutions like Stiches and Modulz speed up this proces.
            </Tweet>
            <Tweet url="https://twitter.com/petecorreia/status/1364215279585288194" author="Pete Correia" username="petecorreia">
              This was a fascinating demo. 
              <br /><br />
              I’ve used just about every styling solution available and I’m very keen to give <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> a try. It combines all of my wishlist of features for styling in a component world, at scale.
              <br /><br />
              I recommend watching the video if you’re curious.
            </Tweet>
            <Tweet url="https://twitter.com/joebell_/status/1363870814312017921" author="Joe Bell 🔔" username="joebell_">
              Stitches pretty much ticks everything off on my CSS-in-JS wish list. I couldn't go back to writing CSS without it.
            </Tweet>

            <Tweet url="https://twitter.com/giuseppegurgone/status/1364506245009448960" author="Giuseppe" username="giuseppegurgone">
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still called them Styleguide, created a couple of CSS in JS libs and watched this space for a long while and <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> seems the most promising library out there
            </Tweet>
            <Tweet url="https://twitter.com/giuseppegurgone/status/1364506245009448960" author="Giuseppe" username="giuseppegurgone">
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still called them Styleguide, created a couple of CSS in JS libs and watched this space for a long while and <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> seems the most promising library out there
            </Tweet>
            <Tweet url="https://twitter.com/giuseppegurgone/status/1364506245009448960" author="Giuseppe" username="giuseppegurgone">
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still called them Styleguide, created a couple of CSS in JS libs and watched this space for a long while and <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> seems the most promising library out there
            </Tweet>
            <Tweet url="https://twitter.com/giuseppegurgone/status/1364506245009448960" author="Giuseppe" username="giuseppegurgone">
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still called them Styleguide, created a couple of CSS in JS libs and watched this space for a long while and <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> seems the most promising library out there
            </Tweet>
            <Tweet url="https://twitter.com/giuseppegurgone/status/1364506245009448960" author="Giuseppe" username="giuseppegurgone">
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still called them Styleguide, created a couple of CSS in JS libs and watched this space for a long while and <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> seems the most promising library out there
            </Tweet>
            <Tweet url="https://twitter.com/giuseppegurgone/status/1364506245009448960" author="Giuseppe" username="giuseppegurgone">
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still called them Styleguide, created a couple of CSS in JS libs and watched this space for a long while and <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> seems the most promising library out there
            </Tweet>
            <Tweet url="https://twitter.com/giuseppegurgone/status/1364506245009448960" author="Giuseppe" username="giuseppegurgone">
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still called them Styleguide, created a couple of CSS in JS libs and watched this space for a long while and <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> seems the most promising library out there
            </Tweet>
            <Tweet url="https://twitter.com/giuseppegurgone/status/1364506245009448960" author="Giuseppe" username="giuseppegurgone">
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still called them Styleguide, created a couple of CSS in JS libs and watched this space for a long while and <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> seems the most promising library out there
            </Tweet>
            <Tweet url="https://twitter.com/giuseppegurgone/status/1364506245009448960" author="Giuseppe" username="giuseppegurgone">
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still called them Styleguide, created a couple of CSS in JS libs and watched this space for a long while and <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> seems the most promising library out there
            </Tweet>
            <Tweet url="https://twitter.com/giuseppegurgone/status/1364506245009448960" author="Giuseppe" username="giuseppegurgone">
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still called them Styleguide, created a couple of CSS in JS libs and watched this space for a long while and <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> seems the most promising library out there
            </Tweet>
            <Tweet url="https://twitter.com/giuseppegurgone/status/1364506245009448960" author="Giuseppe" username="giuseppegurgone">
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still called them Styleguide, created a couple of CSS in JS libs and watched this space for a long while and <Text variant="blue" css={{ display: 'inline' }}>@stitchesjs</Text> seems the most promising library out there
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
              <Text size="4" variant="violet" css={{ mb: '$5', lineHeight: '23px' }}>Variants</Text>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>Design composable component APIs</Text>
              <Paragraph>Variants are a first-class citizen of Stitches. With multiple variants, compound variants, and default variants, you can design composable component APIs which are typed automatically.</Paragraph>
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
              <Paragraph>Define multiple themes with CSS variables, then expose them to any part of your app.</Paragraph>
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
          <Text size="8" css={{ fontWeight: 500, ta: 'center' }}>
            Features
          </Text>
          <Subtitle as="p">
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
                more performant than other styling libraries. Both <Code>@stitches/core</Code> and <Code>@stitches/react</Code> libraries combined
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
          <Subtitle as="p">
            A fully-featured styling library.
          </Subtitle>

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
