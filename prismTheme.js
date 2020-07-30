import { css } from 'styled-components';
import { theme } from '@modulz/radix';

export const prismTheme = css`
  code[class*='language-'],
  pre[class*='language-'] {
    background: none;
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes[2]};
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: ${theme.lineHeights[2]};

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding-top: ${theme.space[2]};
    padding-bottom: ${theme.space[2]};
    padding-left: ${theme.space[3]};
    padding-right: ${theme.space[3]};
    margin: 0;
    overflow: auto;
    min-width: 100%;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.gray800};
    background: ${theme.colors.gray100};
    border: 1px solid ${theme.colors.gray300};
    border-radius: ${theme.radii[2]};
  }

  :not(pre) > code[class*='dark'],
  pre[class*='dark'] {
    color: ${theme.colors.white};
    background: ${theme.colors.gray900};
    border: 1px solid ${theme.colors.gray700};
    border-radius: ${theme.radii[2]};
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #999;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
    /* background: hsla(0, 0%, 100%, 0.5); */
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }

  .token.function,
  .token.class-name {
    color: #dd4a68;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  /* Line highlighting via https://github.com/j0lv3r4/mdx-prism */
  .mdx-marker {
    display: block;

    /* Reset padding originally set in "pre[class*='language-']" */
    margin-left: -${theme.space[3]};
    margin-right: -${theme.space[3]};
    padding-left: ${theme.space[3]};
    padding-right: ${theme.space[3]};

    background-color: ${theme.colors.gray200};
    box-shadow: inset 2px 0px 0 0px ${theme.colors.blue600};

    min-width: fit-content;
  }
`;
