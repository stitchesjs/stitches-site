import { createStyled } from '@stitches/styled';

const { styled, css } = createStyled({
  tokens: {
    colors: {
      red500: 'tomato',
    },
  },
  screens: {
    small: (rule) => rule,
    medium: (rule) => `@media (min-width: 600px) { ${rule} }`,
    large: (rule) => `@media (min-width: 1000px) { ${rule} }`,
    xlarge: (rule) => `@media (min-width: 1080px) { ${rule} }`,
  },
});

export { css, styled };
