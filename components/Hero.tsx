import NextLink from 'next/link';
import { Section, Container, Box, Subheading, Code, Grid, Title, Flex, Subtitle, Text } from '@modulz/design-system';
import { DemoButton } from '@components/DemoButton';

export function Hero() {
  return (
    <Section css={{
      pt: '$6',
      position: 'relative',
      '&::before': { 
        content: '""',
        top: -200,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: '$violet100',
        filter: 'blur(125px)',
       },
      }}>
      <Container size="3" css={{ position: 'relative', zIndex: '1' }}>
        <Title
          css={{
            lineHeight: '67px !important',
            // background: 'linear-gradient(to left top, $colors$violet900, $colors$blue900)',
            // WebkitTextFillColor: 'transparent',
            // WebkitBackgroundClip: 'text',
            // backgroundPosition: '100px 200px',
            // animation: `${animatedText} 200ms`,
            mb: '$2',
            when: {
              bp2: {
                ta: 'center',
                mb: '$2',
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

      <Container size="1" css={{ my: '$8', position: 'relative', zIndex: '1' }}>
        <Flex
          css={{
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.08)',
            borderRadius: '$pill',
            fontFamily: '$mono',
            fontSize: '$2',
            lineHeight: 1,
            ai: 'center',
            height: '$7',
            color: '$violet900',
            backgroundColor: 'rgba(0,0,0,.02)',
            px: '$4',
          }}
        >
          npm install{' '}
          <Box as="span" css={{ color: '$hiContrast' }}>
            &nbsp;@stitches/react
          </Box>
        </Flex>
      </Container>

      <Container size="3" css={{ position: 'relative', zIndex: '1' }}>
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
            <Flex css={{
              ai: 'center',
              jc: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '$round',
              backgroundColor: '$violet800',
              color: 'white',
              mb: '$4',
            }}>
              <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.69666 0.040354C8.90859 0.131038 9.03105 0.354856 8.99315 0.582235L8.09019 6.00001H12.4999C12.6893 6.00001 12.8625 6.10701 12.9472 6.2764C13.0318 6.44579 13.0136 6.6485 12.8999 6.8L6.89997 14.8C6.76166 14.9844 6.5152 15.0503 6.30327 14.9596C6.09134 14.869 5.96888 14.6451 6.00678 14.4178L6.90974 8.99999H2.49999C2.31061 8.99999 2.13747 8.89299 2.05278 8.7236C1.96808 8.55421 1.98636 8.3515 2.09999 8.2L8.09996 0.200037C8.23827 0.0156255 8.48473 -0.0503301 8.69666 0.040354ZM3.49999 8H7.49996C7.64694 8 7.78647 8.06466 7.88147 8.17681C7.97647 8.28895 8.01732 8.43722 7.99316 8.58219L7.33026 12.5596L11.4999 7H7.49996C7.35299 7 7.21346 6.93534 7.11846 6.82319C7.02346 6.71105 6.98261 6.56278 7.00677 6.41781L7.66967 2.44042L3.49999 8Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </Flex>
            <Subheading css={{ mb: '$2' }}>Performant</Subheading>
            <Text as="p" size="3" variant="gray" css={{ lineHeight: '25px' }}>
              Stitches avoids unnecessary prop interpolations at runtime, making it more performant than other styling libraries.
            </Text>
          </Box>
          <Box>
          <Flex css={{
              ai: 'center',
              jc: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '$round',
              backgroundColor: '$indigo800',
              color: 'white',
              mb: '$4',
            }}>
              <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9 0.499976C13.9 0.279062 13.7209 0.0999756 13.5 0.0999756C13.2791 0.0999756 13.1 0.279062 13.1 0.499976V1.09998H12.5C12.2791 1.09998 12.1 1.27906 12.1 1.49998C12.1 1.72089 12.2791 1.89998 12.5 1.89998H13.1V2.49998C13.1 2.72089 13.2791 2.89998 13.5 2.89998C13.7209 2.89998 13.9 2.72089 13.9 2.49998V1.89998H14.5C14.7209 1.89998 14.9 1.72089 14.9 1.49998C14.9 1.27906 14.7209 1.09998 14.5 1.09998H13.9V0.499976ZM11.8536 3.14642C12.0488 3.34168 12.0488 3.65826 11.8536 3.85353L10.8536 4.85353C10.6583 5.04879 10.3417 5.04879 10.1465 4.85353C9.9512 4.65827 9.9512 4.34169 10.1465 4.14642L11.1464 3.14643C11.3417 2.95116 11.6583 2.95116 11.8536 3.14642ZM9.85357 5.14642C10.0488 5.34168 10.0488 5.65827 9.85357 5.85353L2.85355 12.8535C2.65829 13.0488 2.34171 13.0488 2.14645 12.8535C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L9.14646 5.14642C9.34172 4.95116 9.65831 4.95116 9.85357 5.14642ZM13.5 5.09998C13.7209 5.09998 13.9 5.27906 13.9 5.49998V6.09998H14.5C14.7209 6.09998 14.9 6.27906 14.9 6.49998C14.9 6.72089 14.7209 6.89998 14.5 6.89998H13.9V7.49998C13.9 7.72089 13.7209 7.89998 13.5 7.89998C13.2791 7.89998 13.1 7.72089 13.1 7.49998V6.89998H12.5C12.2791 6.89998 12.1 6.72089 12.1 6.49998C12.1 6.27906 12.2791 6.09998 12.5 6.09998H13.1V5.49998C13.1 5.27906 13.2791 5.09998 13.5 5.09998ZM8.90002 0.499976C8.90002 0.279062 8.72093 0.0999756 8.50002 0.0999756C8.2791 0.0999756 8.10002 0.279062 8.10002 0.499976V1.09998H7.50002C7.2791 1.09998 7.10002 1.27906 7.10002 1.49998C7.10002 1.72089 7.2791 1.89998 7.50002 1.89998H8.10002V2.49998C8.10002 2.72089 8.2791 2.89998 8.50002 2.89998C8.72093 2.89998 8.90002 2.72089 8.90002 2.49998V1.89998H9.50002C9.72093 1.89998 9.90002 1.72089 9.90002 1.49998C9.90002 1.27906 9.72093 1.09998 9.50002 1.09998H8.90002V0.499976Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </Flex>
            <Subheading css={{ mb: '$2' }}>Feature-rich</Subheading>
            <Text as="p" size="3" variant="gray" css={{ lineHeight: '25px' }}>
              Packed full of useful features like themeing, smart tokens, <Code>css</Code> prop, <Code>as</Code> prop, utils, and a fully-typed API.
            </Text>
          </Box>
          <Box>
          <Flex css={{
              ai: 'center',
              jc: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '$round',
              backgroundColor: '$blue800',
              color: 'white',
              mb: '$4'
            }}>
              <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </Flex>
            <Subheading css={{ mb: '$2' }}>Best-in-class DX</Subheading>
            <Text as="p" size="3" variant="gray" css={{ lineHeight: '25px' }}>
              Stitches has a fully-typed API, to minimize the learning curve, and provide the best possible developer experience.
            </Text>
          </Box>
        </Grid>
      </Container>
      <Box css={{ backgroundColor: '$purple300', width: 700, height: 600, borderRadius: '50%', position: 'absolute', bottom: 0, left: 0, filter: 'blur(200px)', zIndex: '0' }}></Box>
      <Box css={{ backgroundColor: '$teal300', width: 700, height: 600, borderRadius: '50%', position: 'absolute', bottom: 0, right: 0, filter: 'blur(200px)', zIndex: '0' }}></Box>
    </Section>
  );
}
