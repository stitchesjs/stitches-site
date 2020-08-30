import NextLink from 'next/link';
import { Box, Flex, Container, Divider, Grid, Text } from '@modulz/design-system';
import { HeroCodeDemo } from '../components/HeroCodeDemo';
import { StitchesLogo } from '../components/StitchesLogo';

export default function Home() {
  return (
    <Box>
      <Box as="header" css={{ py: 4, px: 4, mb: 6 }}>
        <NextLink href="/" passHref>
          <Box
            as="a"
            css={{
              color: 'hiContrast',
              display: 'inline-flex',
              ':focus': { 
                boxShadow: 'none'
              }
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
      <Container size="3" css={{ textAlign: 'center', mb: '5' }}>
        <Text size="9" css={{ fontWeight: 500, lineHeight: '55px' }}>
          The modern styling library
        </Text>
      </Container>

      <Container size="2" css={{ textAlign: 'center' }}>
        <Text as="h2" size="6" css={{ color: 'gray600', textAlign: 'center', lineHeight: '30px' }}>
          Near-zero runtime, server-side rendering, multi-variant support, and a best-in-class
          developer experience.
        </Text>
      </Container>

      <Box css={{ pt: '8', pb: '9' }}>
        <Container size="3">
          <HeroCodeDemo />
        </Container>
      </Box>

      <Flex css={{ justifyContent: 'center', mb: '9' }}>
        <Divider size="2" css={{ flexShrink: 0, width: '45px' }} />
      </Flex>

      <Container size="2" css={{ textAlign: 'center' }}>
        <Text as="h2" size="7" css={{ mb: '4', fontWeight: 500 }}>
          Features
        </Text>
        <Text as="h3" size="6" css={{ color: 'gray600', mb: '4' }}>
          A fully-featured styling library.
        </Text>
      </Container>

      <Container size="3" css={{ my: 8 }}>
        <Grid
          css={{
            gap: '6',
            gridTemplateColumns: '1fr',
            bp2: {
              gap: '7',
              gridTemplateColumns: '1fr 1fr',
            },
          }}
        >
          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Performant
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              The main motivation and criteria is to make a performant library.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Atomic
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              Each CSS property is a an atomic part of your complete CSS.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Reusability
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              Each CSS property, given the same screen, pseudo and value is considered the same,
              giving high degree of reusability.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Optimal injection
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              AKA Critical Path CSS. You can compose your styles outside of your UI, but no
              injection happens until it is actually used. Only used variants are injected
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Breakpoints
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              Define a set of media queries as breakpoints to easily express CSS active within a
              screen. Any type of @ rule is supported, for example, touch breakpoints or portrait
              orientation
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Utils
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              Create your own CSS properties.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Typed
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              Fully typed API, including variants
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                No Specificity
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              No more specificity issues as an atomic mindset opens up a more efficient and straight
              forward way to solve it. Even extended components (via the styled or as prop) won't
              contain multiple CSS properties.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Token-aware values
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              Apply tokens as CSS values without any extra work
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Token-based theming
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              Create themes overriding the tokens and expose themes to any parts of your app.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Tokens as CSS Variables
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              Tokens are converted to CSS Variables, making dynamic themes performant to apply.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Variant support
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              First class variant support, which get typed automatically
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Polymorphic As prop
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              Included in Components returned from the styled function
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Responsive values
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              CSS values can be defined per screen
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Responsive variants
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              You can apply different variants per breakpoint
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Override usage
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              Similar to sx prop, allows overrides to be defined at the usage level
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Tiny
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              Both the css and the styled libraries together weight less than 3kb gzipped.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Promotes consistent UI
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              A especially good feature when building design systems.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Less generated CSS
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              The total output of the generated CSS gets smaller as your app gets bigger
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '2' }}>
              <Box css={{ mr: '4', color: 'hiContrast' }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L12.0581 2.05806C12.3021 1.81398 12.6979 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13361 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM7.5 8.49998V4.09998C5.06995 4.09998 3.1 6.06992 3.1 8.49998C3.1 10.93 5.06995 12.9 7.5 12.9C8.71502 12.9 9.81503 12.4075 10.6113 11.6112L7.5 8.49998Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Create Higher level APIs
              </Text>
            </Flex>
            <Text as="p" size="4" css={{ lineHeight: '30px', pl: '7', ml: '1', color: 'gray600' }}>
              Can be created to fulfil different needs, for different frameworks. We can decide to
              also open source the low level library and allow the community to also create
              different types of API's as a potential marketing strategy. Same as React and React
              DOM.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
