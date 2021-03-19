import React from 'react';
import { Box, Code, Text, Paragraph, Card, Grid, Container } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Header } from '@components/Header';
import { CodeDemo } from '@components/CodeDemo';
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

      <Grid
        css={{
          gap: '$9',
          ai: 'center',
          p: '$9',
          when: {
            initial: { gridTemplateColumns: 'repeat(1, 1fr)' },
            bp2: { gridTemplateColumns: 'repeat(4, 1fr)' },
          },
        }}
      >
        <CodeBlock language="jsx" value={demoCode} />
        <CodeBlock variant="indigo" language="jsx" value={demoCode} />
        <CodeBlock variant="yellow" language="jsx" value={demoCode} />
        <CodeBlock variant="pink" language="jsx" value={demoCode} />
      </Grid>
    </Box>
  );
}
