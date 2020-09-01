import NextLink from 'next/link';
import { Box, Flex, Container, Divider, Grid, Text, Code } from '@modulz/design-system';
import { HeroCodeDemo } from '../components/HeroCodeDemo';
import { StitchesLogo } from '../components/StitchesLogo';

export default function Home() {
  return (
    <Box>
      <Box as="header" css={{ py: '$4', px: '$4', mb: '$6' }}>
        <NextLink href="/" passHref>
          <Box
            as="a"
            css={{
              color: '$hiContrast',
              display: 'inline-flex',
              ':focus': {
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
      <Container size="3" css={{ textAlign: 'center', mb: '$5' }}>
        <Text size={{ initial: '8', bp2: '9' }} css={{ fontWeight: 500, lineHeight: '55px' }}>
          The modern styling library
        </Text>
      </Container>

      <Container size="2" css={{ textAlign: 'center' }}>
        <Text
          as="h2"
          size={{ initial: '5', bp2: '6' }}
          css={{ color: '$gray600', textAlign: 'center', lineHeight: '30px' }}
        >
          Near-zero runtime, server-side rendering, multi-variant support, and a best-in-class
          developer experience.
        </Text>
      </Container>

      <Box css={{ pt: '$8', pb: '$9' }}>
        <Container size="3">
          <HeroCodeDemo />
        </Container>
      </Box>

      <Flex css={{ justifyContent: 'center', mb: '$9' }}>
        <Divider size="large" css={{ flexShrink: 0, width: '45px' }} />
      </Flex>

      <Container size="2">
        <Box
          css={{
            border: '1px solid $gray300',
            borderRadius: '$2',
            fontFamily: '$mono',
            fontSize: '$2',
            lineHeight: 1,
            color: '$yellow600',
            p: '$3',
          }}
        >
          npm install{' '}
          <Box as="span" css={{ color: '$hiContrast' }}>
            @stitches/react
          </Box>
        </Box>
      </Container>

      <Flex css={{ justifyContent: 'center', my: '$9' }}>
        <Divider size="large" css={{ flexShrink: 0, width: '45px' }} />
      </Flex>

      <Container size="2" css={{ textAlign: 'center' }}>
        <Text as="h2" size={{ initial: '6', bp2: '7' }} css={{ mb: '$4', fontWeight: 500 }}>
          Features
        </Text>
        <Text as="h3" size={{ initial: '5', bp2: '6' }} css={{ color: '$gray600', mb: '$4' }}>
          A fully-featured styling library.
        </Text>
      </Container>

      <Container size={{ initial: '2', bp2: '3' }} css={{ my: '$8' }}>
        <Grid
          css={{
            gap: '$6',
            gridTemplateColumns: '1fr',
            bp2: {
              gap: '$7',
              gridTemplateColumns: '1fr 1fr',
            },
          }}
        >
          <Box>
            <Flex css={{ alignItems: 'center', mb: '$2' }}>
              <Box css={{ mr: '$4', color: '$hiContrast' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 45 45"
                  fill="none"
                >
                  <path
                    d="M20.5 25.5H12.5L24.5 4.5V19.5H32.5L20.5 40.5V25.5Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Performant
              </Text>
            </Flex>
            <Text
              as="p"
              size={{ initial: '3', bp2: '4' }}
              css={{ lineHeight: '30px', pl: '$7', ml: '$1', color: '$gray600' }}
            >
              Stitches avoids unnecessary prop interpolations at runtime, making it significantly
              more performant than other styling libraries.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '$2' }}>
              <Box css={{ mr: '$4', color: '$hiContrast' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M6.5 10.5C6.5 7.18629 9.18629 4.5 12.5 4.5C15.8137 4.5 18.5 7.18629 18.5 10.5V20.1905C18.5 20.3614 18.3614 20.5 18.1905 20.5H6.80952C6.63858 20.5 6.5 20.3614 6.5 20.1905V10.5Z"
                    stroke="currentColor"
                  />
                  <rect x="9.5" y="13.5" width="6" height="4" rx="0.5" stroke="currentColor" />
                  <path
                    d="M9.5 10.5C9.5 7.5 12.5 7.5 12.5 7.5C12.5 7.5 15.5 7.5 15.5 10.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 5C9.5 2.5 12.5 2.5 12.5 2.5C12.5 2.5 15.5 2.5 15.5 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 13C4.5 12.1716 5.17157 11.5 6 11.5H6.5V18.5H6C5.17157 18.5 4.5 17.8284 4.5 17V13Z"
                    stroke="currentColor"
                  />
                  <path
                    d="M18.5 11.5H19C19.8284 11.5 20.5 12.1716 20.5 13V17C20.5 17.8284 19.8284 18.5 19 18.5H18.5V11.5Z"
                    stroke="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Lightweight
              </Text>
            </Flex>
            <Text
              as="p"
              size={{ initial: '3', bp2: '4' }}
              css={{ lineHeight: '30px', pl: '$7', ml: '$1', color: '$gray600' }}
            >
              Both <Code>@stitches/core</Code> and <Code>@stitches/react</Code> libraries combined
              weigh in at ~6.5kb gzipped.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '$2' }}>
              <Box css={{ mr: '$4', color: '$hiContrast' }}>
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
                Server-Side Rendering
              </Text>
            </Flex>
            <Text
              as="p"
              size={{ initial: '3', bp2: '4' }}
              css={{ lineHeight: '30px', pl: '$7', ml: '$1', color: '$gray600' }}
            >
              Stitches supports cross-browser server-side rendering, even for responsive styles and
              variants.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '$2' }}>
              <Box css={{ mr: '$4', color: '$hiContrast' }}>
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
                Variants
              </Text>
            </Flex>
            <Text
              as="p"
              size={{ initial: '3', bp2: '4' }}
              css={{ lineHeight: '30px', pl: '$7', ml: '$1', color: '$gray600' }}
            >
              Variants are a first-class citizen of Stitches, so you can design composable component
              APIs which are typed automatically.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '$2' }}>
              <Box css={{ mr: '$4', color: '$hiContrast' }}>
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
                Theming
              </Text>
            </Flex>
            <Text
              as="p"
              size={{ initial: '3', bp2: '4' }}
              css={{ lineHeight: '30px', pl: '$7', ml: '$1', color: '$gray600' }}
            >
              Define multiple themes with CSS variables, then expose them to any part of your app.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '$2' }}>
              <Box css={{ mr: '$4', color: '$hiContrast' }}>
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
                    d="M7.65354 3.05353L7.65356 3.05351C8.29811 2.40899 9.42858 1.96172 10.5519 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8964 2.10357C13.0231 2.23018 13.1525 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L11.1464 8.14646L8.14643 11.1465L7.49999 11.7929L6.35353 10.6465C6.15827 10.4512 5.84168 10.4512 5.64642 10.6465C5.45116 10.8417 5.45116 11.1583 5.64643 11.3536L7.14644 12.8536C7.3417 13.0488 7.65828 13.0488 7.85354 12.8536L8.40072 12.3064L9.57123 14.2572C9.65045 14.3893 9.78607 14.4774 9.93889 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6535 8.05355L12.3 7.7L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17142 0.988306 7.8019 1.49098 6.94645 2.34641L6.94643 2.34642L6.32321 2.96968L3.07071 2.50504C2.91491 2.48278 2.75773 2.53517 2.64644 2.64646L0.646443 4.64645C0.537571 4.75533 0.48493 4.90829 0.503743 5.0611C0.522555 5.21391 0.610723 5.34954 0.742749 5.42876L2.69363 6.59928L2.14646 7.14645C2.05269 7.24022 2.00001 7.3674 2.00001 7.50001C2.00001 7.63261 2.05269 7.75979 2.14646 7.85356L3.64646 9.35356C3.84172 9.54883 4.1583 9.54883 4.35357 9.35356C4.54883 9.1583 4.54883 8.84172 4.35357 8.64646L3.20712 7.50001L3.85356 6.85356L3.50001 6.50001L3.85357 6.85356L6.85355 3.85356L6.85356 3.85355L7.65354 3.05353ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.4225 5.87041L5.43934 3.85356L3.17677 3.53034L1.80637 4.90074L3.4225 5.87041ZM2.35355 10.3535C2.54881 10.1583 2.54881 9.8417 2.35355 9.64644C2.15829 9.45118 1.84171 9.45118 1.64644 9.64644L0.646443 10.6464C0.451181 10.8417 0.451181 11.1583 0.646443 11.3535C0.841705 11.5488 1.15829 11.5488 1.35355 11.3535L2.35355 10.3535ZM3.85357 11.8536C4.04884 11.6583 4.04884 11.3417 3.85358 11.1465C3.65832 10.9512 3.34174 10.9512 3.14647 11.1465L1.14645 13.1464C0.951183 13.3417 0.951179 13.6583 1.14644 13.8535C1.3417 14.0488 1.65828 14.0488 1.85355 13.8536L3.85357 11.8536ZM5.35355 13.3535C5.54881 13.1583 5.54881 12.8417 5.35355 12.6464C5.15829 12.4512 4.8417 12.4512 4.64644 12.6464L3.64644 13.6464C3.45118 13.8417 3.45118 14.1583 3.64644 14.3535C3.8417 14.5488 4.15829 14.5488 4.35355 14.3535L5.35355 13.3535ZM8.52498 5.45004C8.52498 4.93917 8.93912 4.52504 9.44998 4.52504C9.96084 4.52504 10.375 4.93917 10.375 5.45004C10.375 5.9609 9.96084 6.37504 9.44998 6.37504C8.93912 6.37504 8.52498 5.9609 8.52498 5.45004ZM9.44998 3.67504C8.46968 3.67504 7.67498 4.46973 7.67498 5.45004C7.67498 6.43034 8.46968 7.22504 9.44998 7.22504C10.4303 7.22504 11.225 6.43034 11.225 5.45004C11.225 4.46973 10.4303 3.67504 9.44998 3.67504Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Developer experience
              </Text>
            </Flex>
            <Text
              as="p"
              size={{ initial: '3', bp2: '4' }}
              css={{ lineHeight: '30px', pl: '$7', ml: '$1', color: '$gray600' }}
            >
              With a fully-typed API, token-aware properties, and custom utils, Stitches provides a
              fun and intuitive DX.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '$2' }}>
              <Box css={{ mr: '$4', color: '$hiContrast' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" />
                  <path
                    d="M15.3536 14.6464C15.1583 14.4512 14.8417 14.4512 14.6464 14.6464C14.4512 14.8417 14.4512 15.1583 14.6464 15.3536L15.3536 14.6464ZM20.1464 20.8536C20.3417 21.0488 20.6583 21.0488 20.8536 20.8536C21.0488 20.6583 21.0488 20.3417 20.8536 20.1464L20.1464 20.8536ZM14.6464 15.3536L20.1464 20.8536L20.8536 20.1464L15.3536 14.6464L14.6464 15.3536Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Critical Path CSS
              </Text>
            </Flex>
            <Text
              as="p"
              size={{ initial: '3', bp2: '4' }}
              css={{ lineHeight: '30px', pl: '$7', ml: '$1', color: '$gray600' }}
            >
              Stitches only injects the styles which are actually used, so your users don't download
              unnecessary CSS.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '$2' }}>
              <Box css={{ mr: '$4', color: '$hiContrast' }}>
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
                    d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.05837C10.5539 2.3432 12.5672 4.41828 12.7562 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H12.7373C12.46 10.4862 10.4862 12.46 8 12.7373V14.5C8 14.7761 7.77614 15 7.5 15C7.22386 15 7 14.7761 7 14.5V12.7562C4.41828 12.5672 2.3432 10.5539 2.05837 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H2.03951C2.23348 4.3498 4.3498 2.23348 7 2.03951V0.5C7 0.223858 7.22386 0 7.5 0ZM8 11.78V9.5C8 9.22386 7.77614 9 7.5 9C7.22386 9 7 9.22386 7 9.5V11.803C4.94337 11.6197 3.2918 10.0285 3.01565 8H5.5C5.77614 8 6 7.77614 6 7.5C6 7.22386 5.77614 7 5.5 7H2.99265C3.18211 4.87479 4.87479 3.18211 7 2.99265V5.5C7 5.77614 7.22386 6 7.5 6C7.77614 6 8 5.77614 8 5.5V3.01565C10.0285 3.2918 11.6197 4.94337 11.803 7H9.5C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8H11.78C11.5131 9.96089 9.96089 11.5131 8 11.78Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Specificity
              </Text>
            </Flex>
            <Text
              as="p"
              size={{ initial: '3', bp2: '4' }}
              css={{ lineHeight: '30px', pl: '$7', ml: '$1', color: '$gray600' }}
            >
              No more specificity issues due to the atomic output. Even extended components (via the{' '}
              <Code>as</Code> prop) won't contain duplicate CSS properties.
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '$2' }}>
              <Box css={{ mr: '$4', color: '$hiContrast' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M6.5 8.5L2.5 12.5L6.5 16.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5 8.5L22.5 12.5L18.5 16.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.03184 20.3244C8.93488 20.583 9.06588 20.8712 9.32444 20.9682C9.583 21.0651 9.8712 20.9341 9.96816 20.6756L9.03184 20.3244ZM15.9682 4.67556C16.0651 4.417 15.9341 4.1288 15.6756 4.03184C15.417 3.93488 15.1288 4.06588 15.0318 4.32444L15.9682 4.67556ZM9.96816 20.6756L15.9682 4.67556L15.0318 4.32444L9.03184 20.3244L9.96816 20.6756Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Polymorphic <Code>as</Code> prop
              </Text>
            </Flex>
            <Text
              as="p"
              size={{ initial: '3', bp2: '4' }}
              css={{ lineHeight: '30px', pl: '$7', ml: '$1', color: '$gray600' }}
            >
              Included in Components returned from the styled function
            </Text>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', mb: '$2' }}>
              <Box css={{ mr: '$4', color: '$hiContrast' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M6.5 8.5L2.5 12.5L6.5 16.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5 8.5L22.5 12.5L18.5 16.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.03184 20.3244C8.93488 20.583 9.06588 20.8712 9.32444 20.9682C9.583 21.0651 9.8712 20.9341 9.96816 20.6756L9.03184 20.3244ZM15.9682 4.67556C16.0651 4.417 15.9341 4.1288 15.6756 4.03184C15.417 3.93488 15.1288 4.06588 15.0318 4.32444L15.9682 4.67556ZM9.96816 20.6756L15.9682 4.67556L15.0318 4.32444L9.03184 20.3244L9.96816 20.6756Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Text size="5" as="h4" style={{ lineHeight: 1, fontWeight: 500 }}>
                Easy overrides
              </Text>
            </Flex>
            <Text
              as="p"
              size={{ initial: '3', bp2: '4' }}
              css={{ lineHeight: '30px', pl: '$7', ml: '$1', color: '$gray600' }}
            >
              Stitches provides a <Code>css</Code> prop, which allows style overrides to be applied
              in the consumption layer.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
