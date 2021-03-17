import { styled } from '@modulz/design-system';

export const HomepageButton = styled('button', {
  appearance: 'none',
  border: '0',
  outline: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  backgroundColor: 'transparent',
  fontFamily: '$untitled',
  borderRadius: '9999px',
  lineHeight: 1,
  fontWeight: 500,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',
  transition: 'background-color 125ms ease',
  fontSize: '$3',
  height: '$6',
  px: '$3',

  variants: {
    color: {
      gray: {
        color: '$slate900',
        '&:hover': {
          backgroundColor: '$slate300',
        },
        '&:focus': {
          boxShadow: '0 0 0 1px $colors$slate700, inset 0 0 0 1px $colors$slate700',
        },
      },

      violet: {
        backgroundColor: '$violet300',
        color: '$violet900',
        '&:hover': {
          backgroundColor: '$violet400',
        },
        '&:focus': {
          boxShadow: '0 0 0 1px $colors$violet700, inset 0 0 0 1px $colors$violet700',
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
  },
});
