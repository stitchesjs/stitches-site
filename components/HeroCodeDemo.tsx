import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { Box, styled } from '@modulz/design-system';
import { theme } from '../prismTheme';

const demoCode = `const Button = styled('button', {
  backgroundColor: 'royalblue',
  borderRadius: '9999px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, .3)',
  color: 'white',
  fontSize: '17px',
  fontWeight: '500',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '16px',
  paddingRight: '16px',
  textDecoration: 'none',
  appearance: 'none',

  ':hover': {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: '0 10px 25px rgba(0, 0, 0, .3)',
    transform: 'translateY(-2px)',
  },

  variants: {
    variant: {
      white: {
        backgroundColor: 'white',
        color: 'black',
        ':hover': {
          color: 'royalblue',
        },
      },
    }
}
});

render(
  <div style={{ display: 'flex', justifyContent: 'center', gap: '35px' }}>
    <Button as="a" href="/docs/installation">Documentation</Button>
    <Button as="a" href="https://github.com/modulz/stitches" variant="white">Github</Button>
  </div>
);`;

export const liveEditorStyle: React.CSSProperties = {
  fontSize: 'var(--fontSizes-2)',
  fontFamily: 'var(--fonts-mono)',
  fontWeight: 400,
  lineHeight: 1.5,
  backgroundColor: 'transparent',
};

const StyledLivePreview = (props) => (
  <Box css={{ pb: '9' }}>
    <LivePreview {...props} />
  </Box>
);

export function HeroCodeDemo() {
  const liveProviderProps = {
    theme: theme as any,
    code: demoCode,
    scope: {
      styled,
    },
    noInline: true,
  };

  return (
    <LiveProvider {...liveProviderProps}>
      <StyledLivePreview />
      <Box
        css={{
          p: '1',
          borderRadius: '2',
          // bc: 'gray100',
          boxShadow: '0 0 0 1px gray300',
          textarea: { outline: '0' },
          ':focus-within': {
            boxShadow: '0 0 0 3px blue500',
          },
        }}
      >
        <LiveEditor style={liveEditorStyle} />
        <LiveError
          style={{
            fontFamily: 'var(--fonts-normal)',
            fontSize: 'var(--fontSizes-3)',
            padding: 'var(--space-2)',
            overflowX: 'auto',
            color: 'white',
            backgroundColor: 'var(--colors-red600)',
          }}
        />
      </Box>
    </LiveProvider>
  );
}
