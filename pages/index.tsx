import Head from 'next/head';
import { Box, Text, Heading, Flex, Container, Button, Divider, Subheading, Grid } from '@modulz/radix';
import { styled } from '../css';

const buttonStyles = {
  appearance: 'none',
  border: '1px solid black',
  backgroundColor: 'black',
  color: 'white',
  padding: '12px',
  borderRadius: '4px',
  ':hover': {
    backgroundColor: 'white',
    color: 'black',
  },
};

const buttonVariants = {
  variant: {
    blue: {
      borderColor: 'royalblue',
      backgroundColor: 'royalblue',
      ':hover': {
        color: 'royalblue',
      },
    },
    red: {
      borderColor: 'tomato',
      backgroundColor: 'tomato',
      ':hover': {
        color: 'tomato',
      },
    },
  },
};

const InteropButton = styled('button', buttonStyles as any, buttonVariants);

export default function Home() {
  return (
    <div>
      <Container size={3} sx={{ py: 4, mb: 6 }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Box sx={{ width: 5 }}>
            <svg viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
              <path
                d="M72.976 92.492c2.475 1.768 5.586 2.05 8.485.849 1.132-.424 2.122-1.132 2.97-1.98a8.635 8.635 0 002.546-6.364c0-4.95-4.03-8.98-8.98-8.98-3.677 0-6.93 2.12-8.344 5.515-.849 1.98-.92 4.03-.354 5.869-11.88 4.808-25.526 2.05-34.648-7.071-8.485-8.485-11.597-20.93-7.99-32.456.495-1.627-.425-3.253-1.98-3.819-1.627-.495-3.253.425-3.819 1.98-4.172 13.647-.565 28.426 9.546 38.538 11.172 11.172 28.143 14.283 42.568 7.92zM88.957 64.774a18.599 18.599 0 01-.566 2.12c-.495 1.627.424 3.254 2.05 3.749 1.061.353 2.263 0 2.97-.707.354-.354.637-.778.708-1.273.282-.849.495-1.627.707-2.546 2.97-13.01-.849-26.304-10.253-35.709-10.678-10.677-26.375-14.071-40.447-8.768-2.616-2.192-6.01-2.758-9.192-1.414-3.394 1.414-5.586 4.596-5.516 8.344 0 4.95 4.03 8.98 8.98 8.98 2.405 0 4.738-.92 6.364-2.546.849-.848 1.556-1.838 1.98-2.97.708-1.697.849-3.393.566-5.09 11.526-3.89 24.325-.99 33.022 7.707 7.92 7.92 11.102 19.162 8.627 30.123z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Heading as="span" size={1} style={{ lineHeight: 1, letterSpacing: '-0.05em' }}>
            interop
          </Heading>
        </Flex>
      </Container>

      <Container size={2} sx={{ textAlign: 'center' }}>
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
          <Button size={1} variant="blue" sx={{ mr: 2 }}>
            Documentation
          </Button>
          <Button size={1} sx={{ ml: 2 }}>
            Github
          </Button>
        </Flex>
      </Container>

      <Box sx={{ bg: 'gray900', py: 6, my: 9 }}>
        <Container size={3}>
          <Grid sx={{ gap: 4, gridTemplateColumns: '1fr 1fr' }}>
            <Box sx={{ flex: '1 0 50%' }}>
              <pre className="dark language-jsx">
                {`const Button = styled('button', ${JSON.stringify(buttonStyles, null, 2)}, ${JSON.stringify(
                  buttonVariants,
                  null,
                  2
                )}))`}
              </pre>
            </Box>
            <Flex
              sx={{
                flex: '1 0 50%',

                bg: 'white',
                p: 6,
                borderRadius: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Grid sx={{ gap: 2 }}>
                <InteropButton>Default button</InteropButton>
                <InteropButton variant="blue">Blue component</InteropButton>
                <InteropButton variant="red">Red component</InteropButton>
              </Grid>
            </Flex>
          </Grid>
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

      <Container size={3} px={[null, 5, 9]}>
        <Grid sx={{ gap: [5, 8], gridTemplateColumns: ['1fr ', '1fr 1fr'] }}>
          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Performant
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              The main motivation and criteria is to make a performant library
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Atomic
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Each CSS property is a an atomic part of your complete CSS
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Reusability
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Each CSS property, given the same screen, pseudo and value is considered the same, giving high degree of
              reusability
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Optimal injection
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              AKA Critical Path CSS. You can compose your styles outside of your UI, but no injection happens until it
              is actually used. Only used variants are injected
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Screens
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Define a set of media queries as screens to easily express CSS active within a screen. Any type of @ rule
              is supported, for example, touch screens or portrait orientation
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Utils
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Create your own CSS properties
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Typed
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Fully typed API, including variants
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              No Specificity
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              No more specificity issues as an atomic mindset opens up a more efficient and straight forward way to
              solve it. Even extended components (via the styled or as prop) won't contain multiple CSS properties.
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Token-aware values
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Apply tokens as CSS values without any extra work
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Token-based theming
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Create themes overriding the tokens and expose themes to any parts of your app
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Tokens as CSS Variables
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Tokens are converted to CSS Variables, making dynamic themes performant to apply
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Variant support
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              First class variant support, which get typed automatically
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Polymorphic As prop
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Included in Components returned from the styled function
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Responsive values
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              CSS values can be defined per screen
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Responsive variants
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              You can apply different variants per screens
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Override usage
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Similar to sx prop, allows overrides to be defined at the usage level
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Tiny
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Both the css and the styled libraries together weight less than 3kb gzipped
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Promotes consistent UI
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              A especially good feature when building design systems
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
            <Heading size={2} mb={4}>
              Less generated CSS
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              The total output of the generated CSS gets smaller as your app gets bigger
            </Text>
          </Box>

          <Box px={[8, 6, 8]} pt={6}>
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
