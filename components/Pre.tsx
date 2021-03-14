import { styled } from '@modulz/design-system';

export const Pre = styled('pre', {
  $$lineHeight: '21px',

  borderRadius: '$3',
  padding: '$3',
  margin: 0,
  overflow: 'auto',
  fontFamily: '$mono',
  fontSize: '$2',
  lineHeight: '$$lineHeight',
  whiteSpace: 'pre',
  position: 'relative',

  '> code': {
    margin: 0,
    display: 'block',
    fontFamily: 'inherit',
  },

  '.token.atapply .token:not(.rule):not(.important)': {
    color: 'inherit',
  },

  '.language-shell .token:not(.comment)': {
    color: 'inherit',
  },

  '.language-css .token.function': {
    color: 'inherit',
  },

  '.token.deleted:not(.prefix), .token.inserted:not(.prefix)': {
    display: 'block',
    px: '$4',
    mx: '-20px',
  },

  '.token.deleted.prefix, .token.inserted.prefix': {
    userSelect: 'none',
  },

  // Styles for highlighted word
  '.highlight-word': {
    $$color: 'transparent',
    $$xOffset: '3px',
    backgroundColor: '$$color',
    borderRadius: '$1',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$color, -$$xOffset 0 0 0 $$color',

    '&.on': {
      $$color: 'transparent',
      transition: 'all 100ms ease',
      cursor: 'pointer',
    },
  },

  '.token.deleted .highlight-word': {
    $$color: 'transparent',
  },

  '.token.inserted .highlight-word': {
    $$color: 'transparent',
  },

  // Line numbers
  '&[data-line-numbers=true]': {
    '.highlight-line': {
      position: 'relative',
      paddingLeft: '$4',

      '&::before': {
        content: 'attr(data-line)',
        position: 'absolute',
        left: -5,
        top: 0,
      },
    },
  },

  // Styles for highlighted lines
  '.highlight-line': {
    '&, *': {
      transition: 'all 300ms ease',
    },
  },

  // Typewriter styles
  '.typewriter': {
    opacity: 0,
  },

  variants: {
    variant: {
      light: {
        boxShadow: '0 0 0 1px $colors$gray400',
        bc: 'transparent',
        color: '$hiContrast',

        '.token.script': {
          color: '$white',
        },

        '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function': {
          color: '$blue900',
        },

        '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important': {
          color: '$blue900',
        },

        '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
          color: '$cyan900',
        },

        '.token.punctuation, .token.module, .token.property': {
          color: '$blue900',
        },

        '.token.comment': {
          color: '$gray800',
        },

        '.token.deleted:not(.prefix)': {
          color: '$red900',
        },

        '.token.inserted:not(.prefix)': {
          color: '$green900',
        },

        '.token.deleted.prefix, .token.inserted.prefix': {
          userSelect: 'none',
        },

        // Styles for highlighted word
        '.highlight-word': {
          $$color: '$colors$violet200',
          color: '$violet900',

          '&.on': {
            $$color: '$colors$violet400',
          },
        },

        '.token.deleted .highlight-word': {
          $$color: '$colors$red100',
          color: '$red900',

          '&.on': {
            $$color: '$colors$red300',
          },
        },

        '.token.inserted .highlight-word': {
          $$color: '$colors$green100',
          color: '$green900',

          '&.on': {
            $$color: '$colors$green300',
          },
        },

        // Line numbers
        '&[data-line-numbers=true]': {
          '.highlight-line': {
            '&::before': {
              color: '$indigo300',
            },
          },
        },

        // Styles for highlighted lines
        '.highlight-line': {
          '&[data-highlighted=false]': {
            '&, *': {
              color: '$indigo600',
            },
          },
        },
      },
      dark: {
        backgroundColor: '$blue1000',
        boxShadow: 'none',
        color: '$loContrast',

        '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function': {
          color: '$orange700',
        },

        '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important': {
          color: '$orange700',
        },

        '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
          color: '$pink500',
        },

        '.token.punctuation, .token.module, .token.property': {
          color: '$violet600',
        },

        '.token.deleted:not(.prefix)': {
          color: '$red700',
        },

        '.token.inserted:not(.prefix)': {
          color: '$green700',
        },

        '.highlight-word': {
          $$color: '$colors$indigo1000',
          color: '$indigo200',

          '&.on': {
            $$color: '$colors$indigo900',
          },
        },

        '.token.deleted .highlight-word': {
          $$color: '$colors$red1000',
          color: '$red200',

          '&.on': {
            $$color: '$colors$red900',
          },
        },

        '.token.inserted .highlight-word': {
          $$color: '$colors$green900',
          color: '$green200',

          '&.on': {
            $$color: '$colors$green900',
          },
        },

        // Line numbers
        '&[data-line-numbers=true]': {
          '.highlight-line': {
            '&::before': {
              color: '$quartz900',
            },
          },
        },

        // Highlight line
        '.highlight-line': {
          '&[data-highlighted=false]': {
            '&, *': {
              color: '$quartz900',
            },
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: 'light',
  },
});
