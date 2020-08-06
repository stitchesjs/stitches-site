import NextLink from 'next/link';
import { Box, Text, Heading, Flex, Container, Button, Divider, Subheading, Grid } from '@modulz/radix';
import { HeroCodeDemo } from '../components/HeroCodeDemo';

export default function Home() {
  return (
    <div>
      <Container size={2} sx={{ textAlign: 'center', mt: 6 }}>
        <Heading size={5} sx={{ mb: 4 }}>
          The modern styling library
        </Heading>
      </Container>

      <Container size={1} sx={{ textAlign: 'center' }}>
        <Heading as="h2" size={2} sx={{ color: 'gray700', lineHeight: '4', fontWeight: 400 }}>
          Create tokens, styles, variants and themes for your components. Be more consistent than ever before.
        </Heading>
      </Container>

      <Container sx={{ my: 6 }}>
        <Flex>
          <NextLink href="/docs">
            <Button size={1} variant="blue" sx={{ mr: 2 }}>
              Documentation
            </Button>
          </NextLink>

          <Button as="a" href="https://github.com/modulz/stitches" target="_blank" size={1} sx={{ ml: 2 }}>
            Github
          </Button>
        </Flex>
      </Container>

      <Box sx={{ bg: 'gray200', py: 6, my: 9 }}>
        <Container size={3}>
          <HeroCodeDemo />
        </Container>
      </Box>

      <Container size={1} sx={{ textAlign: 'center' }}>
        <Subheading as="h2" size={1} mb={4} sx={{ color: 'gray700' }}>
          Features
        </Subheading>
        <Heading as="h3" size={4} mb={4}>
          A fully-featured styling library.
        </Heading>
      </Container>

      <Container size={3} mt={8}>
        <Grid sx={{ gap: [6, 7, 8], gridTemplateColumns: ['1fr ', '1fr 1fr', '1fr 1fr 1fr'] }}>
          <Box>
            <Heading size={2} mb={4}>
              Performant
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              The main motivation and criteria is to make a performant library
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Atomic
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Each CSS property is a an atomic part of your complete CSS
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Reusability
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Each CSS property, given the same screen, pseudo and value is considered the same, giving high degree of
              reusability
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Optimal injection
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              AKA Critical Path CSS. You can compose your styles outside of your UI, but no injection happens until it
              is actually used. Only used variants are injected
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Screens
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Define a set of media queries as screens to easily express CSS active within a screen. Any type of @ rule
              is supported, for example, touch screens or portrait orientation
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Utils
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Create your own CSS properties
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Typed
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Fully typed API, including variants
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              No Specificity
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              No more specificity issues as an atomic mindset opens up a more efficient and straight forward way to
              solve it. Even extended components (via the styled or as prop) won't contain multiple CSS properties.
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Token-aware values
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Apply tokens as CSS values without any extra work
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Token-based theming
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Create themes overriding the tokens and expose themes to any parts of your app
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Tokens as CSS Variables
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Tokens are converted to CSS Variables, making dynamic themes performant to apply
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Variant support
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              First class variant support, which get typed automatically
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Polymorphic As prop
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Included in Components returned from the styled function
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Responsive values
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              CSS values can be defined per screen
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Responsive variants
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              You can apply different variants per screens
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Override usage
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Similar to sx prop, allows overrides to be defined at the usage level
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Tiny
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Both the css and the styled libraries together weight less than 3kb gzipped
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Promotes consistent UI
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              A especially good feature when building design systems
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Less generated CSS
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              The total output of the generated CSS gets smaller as your app gets bigger
            </Text>
          </Box>

          <Box>
            <Heading size={2} mb={4}>
              Create Higher level APIs
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Can be created to fulfil different needs, for different frameworks. We can decide to also open source the
              low level library and allow the community to also create different types of API's as a potential marketing
              strategy. Same as React and React DOM.
            </Text>
          </Box>
        </Grid>
      </Container>
    </div>
  );
}
