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
  fontSize: '$3',
  height: '$6',
  px: '$3',
  transition: 'none',

  '&:hover': {
    transition: 'background-color 125ms ease',
  },

  variants: {
    color: {
      gray: {
        color: '$slate11',
        '&:hover': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: '0 0 0 1px $colors$slate9, inset 0 0 0 1px $colors$slate9',
        },
      },

      violet: {
        backgroundColor: '$violet5',
        color: '$violet11',
        '&:hover': {
          backgroundColor: '$violet6',
        },
        '&:focus': {
          boxShadow: '0 0 0 1px $colors$violet9, inset 0 0 0 1px $colors$violet9',
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
  },
});
