import { getDocById } from './docsPosts';

export const docsRoutes = [
  {
    label: 'Overview',
    pages: [
      getDocById('docs/introduction'),
      getDocById('docs/tutorials'),
      getDocById('docs/frequently-asked-questions'),
      getDocById('docs/api'),
    ],
  },

  {
    label: 'Getting Started',
    pages: [
      getDocById('docs/installation'),
      getDocById('docs/styling'),
      getDocById('docs/variants'),
      getDocById('docs/responsive-styles'),
      getDocById('docs/overriding-styles'),
      getDocById('docs/composing-components'),
    ],
  },

  {
    label: 'Configuration',
    pages: [
      getDocById('docs/tokens'),
      getDocById('docs/theming'),
      getDocById('docs/breakpoints'),
      getDocById('docs/utils'),
      getDocById('docs/server-side-rendering'),
    ],
  },
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
