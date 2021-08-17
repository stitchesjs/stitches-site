const visit = import('unist-util-visit');
const { toHtml } = import('hast-util-to-html');
const unified = import('unified');
const parse = import('rehype-parse');

const CALLOUT = /__(.*?)__/g;

module.exports = (code) => {
  const html = toHtml(code);
  const result = html.replace(CALLOUT, (_, text) => `<span class="highlight-word">${text}</span>`);
  const hast = unified().use(parse, { emitParseErrors: true, fragment: true }).parse(result);
  return hast.children;
};
