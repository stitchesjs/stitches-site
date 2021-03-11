import { styled } from '@modulz/design-system';

export const Pre = styled('pre', {
  $$lineHeight: '25px',

  boxShadow: '0 0 0 1px $colors$gray400',
  borderRadius: '$3',
  padding: '$3',
  margin: 0,
  overflow: 'auto',
  fontFamily: '$mono',
  bc: 'transparent',
  color: '$hiContrast',
  fontSize: '$2',
  lineHeight: '$$lineHeight',
  whiteSpace: 'pre',
  position: 'relative',

  '> code': {
    margin: 0,
    display: 'block',
    fontFamily: 'inherit',
  },

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

  '.token.atapply .token:not(.rule):not(.important)': {
    color: 'inherit',
  },

  '.language-shell .token:not(.comment)': {
    color: 'inherit',
  },

  '.language-css .token.function': {
    color: 'inherit',
  },

  '.token.comment': {
    color: '$gray800',
  },

  '.token.deleted:not(.prefix), .token.inserted:not(.prefix)': {
    display: 'block',
    px: '$4',
    mx: '-20px',
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
    $$xOffset: '3px',
    backgroundColor: '$$color',
    color: '$violet900',
    borderRadius: '$1',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$color, -$$xOffset 0 0 0 $$color',

    '&.on': {
      $$color: '$colors$violet400',
      transition: 'all 100ms ease',
      cursor: 'pointer',
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

  // Styles for highlighted lines
  '.highlight-line': {
    '&, *': {
      transition: 'all 300ms ease',
    },

    '&.off': {
      '&, *': {
        // opacity: 0.5,
        color: '$indigo500 !important',
      },
    },
    '&.on': {
      // opacity: 1,
    },
  },

  // Typewriter styles
  '.typewriter': {
    opacity: 0,
  },

  variants: {
    variant: {
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

        '.highlight-line': {
          '&.off': {
            opacity: 0.6,
          },
        },
      },
    },
  },
});
