import React from 'react';
import { Box, Code, Text, Paragraph, Card, Grid, Container } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Header } from '@components/Header';
import { CodeBlock } from '@components/CodeBlock';

const demoCode = `const Button = styled('button', {
  appearance: 'none'
  border: 'none'
  backgroundColor: 'purple',

  '&:hover': {
    backgrounColor: 'darkpurple',
    boxShadow: '0 0 0 1px black'
  },

  variants: {
    size: {
      sm: {
        fontSize: '13px'
        px: '5px',
        py: '5px'
      },
      md: {
        fontSize: '17px',
        py: '10px'
      },
      lg: {
        fontSize: '22px',
        px: '10px'
        py: '15px'
      }
    }
  },

  defaultVariants: {
    size: 'sm'
  }
});`;

const highlightMap = {
  one: '1-10',
  two: '11-29',
  three: '30-32',
};

export default function Test() {
  const [activeHighlight, setActiveHighlight] = React.useState('one');

  return (
    <Box>
      <TitleAndMetaTags title="Test" />

      <Header />

      <Container size="3" css={{ py: '$8' }}>
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
                onMouseDown={() => setActiveHighlight('one')}
                variant={activeHighlight === 'one' ? 'active' : 'ghost'}
                css={{ p: '$3', mb: '$2', cursor: 'default' }}
              >
                <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Base styles</Text>
                <Text variant="gray" css={{ lineHeight: '20px' }}>
                  Apply styles when two or more variants match.
                </Text>
              </Card>
              <Card
                as="button"
                onMouseDown={() => setActiveHighlight('two')}
                variant={activeHighlight === 'two' ? 'active' : 'ghost'}
                css={{ p: '$3', mb: '$2', cursor: 'default' }}
              >
                <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Variants</Text>
                <Text variant="gray" css={{ lineHeight: '20px' }}>
                  Apply styles when two or more variants match.
                </Text>
              </Card>
              <Card
                as="button"
                onMouseDown={() => setActiveHighlight('three')}
                variant={activeHighlight === 'three' ? 'active' : 'ghost'}
                css={{ p: '$3', mb: '$2', cursor: 'default' }}
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
          <Box
            css={{
              position: 'relative',
              alignSelf: 'start',
              mt: 50,
            }}
          >
            <CodeBlock
              language="jsx"
              variant="dark"
              mode="interactive"
              value={demoCode}
              line={highlightMap[activeHighlight]}
              css={{
                height: 600,
              }}
            />
          </Box>
        </Grid>
      </Container>

      <CodeBlock
        language="jsx"
        variant="dark"
        mode="typewriter"
        value={demoCode}
        line={activeHighlight}
        css={{
          height: 600,
          overflow: 'hidden',
          '& code': {
            willChange: 'transform',
            transition: 'transform 200ms ease-in-out',
          },
        }}
      />
    </Box>
  );
}
