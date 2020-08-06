import * as Radix from '@modulz/radix';
import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { styled } from '../css';
import { theme } from '../prismTheme';

const { Box, Grid, theme: radixTheme } = Radix;

const demoCode = `const Button = styled('button', {
  appearance: 'none',
  border: '1px solid black',
  backgroundColor: 'black',
  color: 'white',
  padding: '12px',
  borderRadius: '4px',
  ':hover': {
    backgroundColor: 'white',
    color: 'black',
  },
}, {
  variant: {
    blue: {
      borderColor: 'royalblue',
      backgroundColor: 'royalblue',
      ':hover': {
        color: 'royalblue',
      },
    },
    red: {
      borderColor: 'tomato',
      backgroundColor: 'tomato',
      ':hover': {
        color: 'tomato',
      },
    },
  },
});

render(
  <div style={{ display: 'grid', gap: '20px' }}>
    <Button>Default button</Button>
    <Button variant="blue">Blue component</Button>
    <Button variant="red">Red component</Button>
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
  <Box
    sx={{
      p: 3,
      boxShadow: `0 0 0 1px ${radixTheme.colors.gray400}`,
      borderRadius: 3,
    }}
  >
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
      <Grid sx={{ gap: 4, gridTemplateColumns: '1fr 1fr' }}>
        <Box
          sx={{
            p: 2,
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

        <StyledLivePreview />
      </Grid>
    </LiveProvider>
  );
}
