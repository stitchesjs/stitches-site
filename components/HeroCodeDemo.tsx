import * as Radix from '@modulz/radix';
import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { styled } from '../css';
import { theme } from '../prismTheme';

const { Box, theme: radixTheme } = Radix;

const demoCode = `const Button = styled('button', {
  backgroundColor: 'royalblue',
  borderRadius: '9999px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, .3)',
  color: 'white',
  fontSize: '17px',
  fontWeight: '500',
  paddingTop: '12px',
  paddingBottom: '12px',
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
}, {
  variant: {
    white: {
      backgroundColor: 'white',
      color: 'black',
      ':hover': {
        color: 'royalblue',
      },
    },
  },
});

render(
  <div style={{ display: 'flex', justifyContent: 'center', gap: '35px' }}>
    <Button as="a" href="/docs">Documentation</Button>
    <Button as="a" href="https://github.com/modulz/stitches" variant="white">Github</Button>
  </div>
);`;

export const liveEditorStyle: React.CSSProperties = {
  fontSize: radixTheme.fontSizes[2],
  fontFamily: radixTheme.fonts.mono,
  fontWeight: 400,
  lineHeight: 1.5,
  backgroundColor: 'transparent',
};

const StyledLivePreview = (props) => (
  <Box sx={{ pb: 9 }}>
    <LivePreview {...props} />
  </Box>
);

export function HeroCodeDemo() {
  const liveProviderProps = {
    theme: theme as any,
    code: demoCode,
    scope: {
      ...Radix,
      styled,
    },
    noInline: true,
  };

  return (
    <LiveProvider {...liveProviderProps}>
      <StyledLivePreview />
      <Box
        sx={{
          p: 1,
          borderRadius: 2,
          bg: 'gray100',
          boxShadow: `0 0 0 1px ${radixTheme.colors.gray300}`,
          textarea: { outline: 0 },
          ':focus-within': {
            boxShadow: `0 0 0 3px ${radixTheme.colors.blue500}`,
          },
        }}
      >
        <LiveEditor style={liveEditorStyle} />
        <LiveError
          style={{
            fontFamily: radixTheme.fonts.normal,
            fontSize: radixTheme.fontSizes[3],
            padding: radixTheme.space[2],
            overflowX: 'auto',
            color: 'white',
            backgroundColor: radixTheme.colors.red600,
          }}
        />
      </Box>
    </LiveProvider>
  );
}
