import { getPostById } from './docsPosts';

export const docsRoutes = [
  {
    label: 'Overview',
    pages: [
      getPostById('docs/motivation'),
      getPostById('docs/releases'),
      getPostById('docs/tutorials'),
      getPostById('docs/frequently-asked-questions'),
      getPostById('docs/contributing'),
      getPostById('docs/api'),
    ],
  },

  {
    label: 'Getting Started',
    pages: [
      getPostById('docs/installation'),
      getPostById('docs/use-it'),
      getPostById('docs/variants'),
      getPostById('docs/responsive-styles'),
      getPostById('docs/overriding-styles'),
      getPostById('docs/composing-components'),
    ],
  },

  {
    label: 'Customise',
    pages: [
      getPostById('docs/configuration'),
      getPostById('docs/tokens'),
      getPostById('docs/theming'),
      getPostById('docs/server-side-rendering'),
    ],
  },
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
