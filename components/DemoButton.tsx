import { styled } from '@modulz/design-system';

export const StyledButton = styled('button', {
  appearance: 'none',
  border: '0',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  fontFamily: '$untitled',
  borderRadius: '9999px',
  lineHeight: 1,
  fontWeight: 500,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',

  outline: 'none',

  variants: {
    color: {
      gray: {
        backgroundColor: '$slate400',
        color: '$hiContrast',
        '&:hover': {
          backgroundColor: '$slate500',
        },
      },

      violet: {
        backgroundColor: '$violet800',
        color: 'white',
        '&:hover': {
          backgroundColor: '$violet900',
        },
      },
    },

    outlined: {
      true: {
        $$shadowColor: 'transparent',
        boxShadow: '0 0 0 1px $$shadowColor',
        backgroundColor: 'transparent',
      },
    },

    size: {
      small: {
        fontSize: '$2',
        height: '$5',
        px: '$2',
      },
      large: {
        fontSize: '$3',
        height: '$6',
        px: '$3',
      },
    },
  },

  compoundVariants: [
    {
      color: 'gray',
      outlined: true,
      css: {
        $$shadowColor: '$colors$slate500',
      },
    },
    {
      color: 'violet',
      outlined: true,
      css: {
        $$shadowColor: '$colors$violet900',
        color: '$violet900',
        '&:hover': {
          color: 'white',
        },
      },
    },
  ],

  defaultVariants: {
    color: 'gray',
    size: 'large',
  },
});

export const DemoButton = (props) => <StyledButton children="Button" {...props} />;
