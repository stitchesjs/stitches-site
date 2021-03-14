import React from 'react';
import { Box, Code, Text, Paragraph, Card, Grid, Container } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Header } from '@components/Header';
import { CodeDemo } from '@components/CodeDemo';

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

export default function TestScroll() {
  const [activeHighlight, setActiveHighlight] = React.useState('one');

  React.useEffect(() => {
    const cards = document.querySelectorAll('.card');

    function handleIntersection(entries) {
      entries.map((entry) => {
        console.log(entry);
        if (entry.intersectionRatio > 0) {
          // entry.target.classList.add('fancy');
          setActiveHighlight(entry.target.getAttribute('data-id'));
        } else {
          // setActiveHighlight(entry.target.getAttribute('data-id'));
          // entry.target.classList.remove('fancy');
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection, { rootMargin: '-400px' });

    cards.forEach((image) => observer.observe(image));
  }, []);

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
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh',
              }}
              className="card"
              data-id="one"
            >
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>One</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Design composable component APIs with variants
              </Text>
              <Paragraph css={{ mb: '$6' }}>
                Variants are a first-class citizen of Stitches. With multiple variants, compound
                variants, and default variants, you can design composable component APIs which are
                typed automatically.
              </Paragraph>
              <Card
                as="button"
                // onMouseDown={() => setActiveHighlight('one')}
                variant={activeHighlight === 'one' ? 'active' : 'ghost'}
                css={{ p: '$3', mb: '$2', cursor: 'default' }}
              >
                <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Base styles</Text>
                <Text variant="gray" css={{ lineHeight: '20px' }}>
                  Apply styles when two or more variants match.
                </Text>
              </Card>
            </Box>

            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh',
              }}
              className="card"
              data-id="two"
            >
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>Two</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Design composable component APIs with variants
              </Text>
              <Paragraph css={{ mb: '$6' }}>
                Variants are a first-class citizen of Stitches. With multiple variants, compound
                variants, and default variants, you can design composable component APIs which are
                typed automatically.
              </Paragraph>
              <Card
                as="button"
                // onMouseDown={() => setActiveHighlight('two')}
                variant={activeHighlight === 'two' ? 'active' : 'ghost'}
                css={{ p: '$3', mb: '$2', cursor: 'default' }}
              >
                <Text css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>Variants</Text>
                <Text variant="gray" css={{ lineHeight: '20px' }}>
                  Apply styles when two or more variants match.
                </Text>
              </Card>
            </Box>

            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh',
              }}
              className="card"
              data-id="three"
            >
              <Box css={{ mb: '$5' }}>
                <Code css={{ mb: '$5', fontFamily: '$mono', fontSize: '$4' }}>Three</Code>
              </Box>
              <Text size="8" css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}>
                Design composable component APIs with variants
              </Text>
              <Paragraph css={{ mb: '$6' }}>
                Variants are a first-class citizen of Stitches. With multiple variants, compound
                variants, and default variants, you can design composable component APIs which are
                typed automatically.
              </Paragraph>
              <Card
                as="button"
                // onMouseDown={() => setActiveHighlight('three')}
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
              position: 'sticky',
              alignSelf: 'start',
              top: 100,
              bottom: 100,
              height: 'calc(100vh - 200px)',
            }}
          >
            <CodeDemo
              language="jsx"
              variant="dark"
              value={demoCode}
              line={highlightMap[activeHighlight]}
              css={{ height: '100%' }}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
