import { theme as DSTheme } from '@modulz/design-system';
const { colors } = DSTheme;

export const theme = {
  plain: {
    color: 'var(--colors-hiContrast)',
    backgroundColor: colors.gray100,
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'hsl(330, 75%, 45%)',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: colors.gray600,
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: 'hsl(180, 55%, 35%)',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: 'hsl(195, 90%, 35%)',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: 'hsl(330, 75%, 45%)',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: 'hsl(180, 50%, 35%)',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: colors.blue700,
      },
    },
  ],
};
