import React from 'react';
import { Box, Code, Text, Paragraph, Card, Grid, Container } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Header } from '@components/Header';
import { CodeBlock } from '@components/CodeBlock';
import rangeParser from 'parse-numeric-range';

const demoCode = `const Button = styled('button', {
  backgroundColor: 'purple',
  color: 'white',

  variants: {
    size: {
      md: {},
      lg: {}
    }
  },

  defaultVariants: {
    size: 'sm'
  }
});`;

export default function Test() {
  const [highlightedLine, setHighlightedLine] = React.useState('0-99');
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    const wrapper = wrapperRef.current;

    const lines = wrapper.querySelectorAll('.highlight-line');
    const linesToHighlight = rangeParser(highlightedLine);

    lines.forEach((line, i) => {
      const lineIndex = i + 1;
      if (linesToHighlight.includes(lineIndex)) {
        line.classList.remove('off');
        line.classList.add('on');
      } else {
        line.classList.add('off');
        line.classList.remove('on');
      }
    });
  }, [highlightedLine]);

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
            <Box css={{ mx: '-$3' }} onMouseLeave={() => setHighlightedLine('0-99')}>
              <Card
                onMouseEnter={() => setHighlightedLine('1-3,15')}
                variant="ghost"
                css={{ p: '$3', mb: '$2', cursor: 'default' }}
              >
                <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Base styles</Text>
                <Text variant="gray" css={{ lineHeight: '20px' }}>
                  Apply styles when two or more variants match.
                </Text>
              </Card>
              <Card
                onMouseEnter={() => setHighlightedLine('5-10')}
                variant="ghost"
                css={{ p: '$3', mb: '$2', cursor: 'default' }}
              >
                <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Variants</Text>
                <Text variant="gray" css={{ lineHeight: '20px' }}>
                  Apply styles when two or more variants match.
                </Text>
              </Card>
              <Card
                onMouseEnter={() => setHighlightedLine('12-14')}
                variant="ghost"
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
            ref={wrapperRef}
            css={{
              position: 'relative',
              alignSelf: 'start',
              mt: 50,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            <CodeBlock language="jsx" variant="dark" value={demoCode} line="0" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
