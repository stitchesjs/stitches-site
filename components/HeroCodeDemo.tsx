import React from 'react';
import { CodeBlock } from '@components/CodeBlock';
import { Grid } from '@modulz/design-system';

const demoCode1 = `import { styled } from '@stitches/react'

const Button = styled('button', {
  backgroundColor: 'hsl(206,100%,50%)',
  color: 'white',
  fontSize: '17px',
  padding: '10px',

  '&:hover': {
    boxShadow: '0 5px 15px rgba(0, 0, 0, .12)',
    transform: 'translateY(-2px)',
  }
});`;

const demoCode2 = `const Button = styled('button', {
  variants: {
    color: {
      white: {
        backgroundColor: 'transparent',
        color: 'hsl(206,10%,44%)',
        '&:hover': {
          backgroundColor: 'white',
          color: 'hsl(206,10%,5%)',
        },
      },
    }
  }
});`;

const demoCode3 = `const { styled } = createCss({
  theme: {
    colors: {
      __blue500__: 'hsl(206,100%,50%)'
    },
    space: {
      __1__: '10px'
    },
    fontSizes: {
      __1__: '17px'
    }
  }
});
const Button = styled('button', {
  backgroundColor: '__$blue500__',
  fontSize: '__$1__',
  padding: '__$1__',
});`;

const demoCode4 = `const { styled } = createCss({
  utils: {
    __bc__: config => value => ({
      backgroundColor: value
    }),
    __fs__: config => value => ({
      fontSize: value
    }),
    __p__: config => value => ({
      paddingTop: value,
      paddingRight: value,
      paddingBottom: value,
      paddingLeft: value,
    })
  }
});
const Button = styled('button', {
  __bc__: '$blue500',
  __fs__: '$1',
  __p__: '$1',
});`;

export function HeroCodeDemo() {
  return (
    <Grid css={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '$5' }}>
      <CodeBlock
        css={{
          backgroundImage: 'linear-gradient(to right, $cyan100, $violet100)',
          boxShadow: 'none !important',
          backdropFilter: 'blur(72px)',
        }}
        language="jsx"
        value={demoCode1}
      />
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
      <CodeBlock
        css={{
          backgroundImage: 'linear-gradient(to right, $cyan100, $violet100)',
          boxShadow: 'none !important',
          backdropFilter: 'blur(72px)',
        }}
        language="jsx"
        value={demoCode3}
      />
      <CodeBlock
        css={{
          backgroundImage: 'linear-gradient(to right, $violet100, $purple100)',
          boxShadow: 'none !important',
          backdropFilter: 'blur(72px)',
        }}
        language="jsx"
        value={demoCode4}
      />
    </Grid>
  );
}
