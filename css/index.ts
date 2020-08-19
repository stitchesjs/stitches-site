import { createStyled } from '@stitches/styled';

const { styled, css } = createStyled({
  tokens: {
    colors: {
      background: 'lightgray',
      foreground: 'black',
      primary: 'royalblue',
      secondary: 'tomato',
    },
    space: {
      '0': '0',
      '1': '5px',
      '2': '10px',
    },
  },
  utils: {
    bg: (config) => (value) => ({ backgroundColor: value }),
    size: (config) => (value) => ({
      width: value,
      height: value,
    }),
    marginX: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  screens: {
    small: (rule) => rule,
    medium: (rule) => `@media (min-width: 600px) { ${rule} }`,
    large: (rule) => `@media (min-width: 1000px) { ${rule} }`,
    xlarge: (rule) => `@media (min-width: 1080px) { ${rule} }`,
  },
});

export { css, styled };
