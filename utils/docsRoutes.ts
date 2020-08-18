import { getPostById } from './docsPosts';

export const docsRoutes = [
  {
    label: 'Get Started',
    pages: [
      getPostById('docs/motivation'),
      getPostById('docs/installation'),
      getPostById('docs/setup'),
      getPostById('docs/use-it'),
      getPostById('docs/server-side-rendering'),
    ],
  },

  {
    label: 'Customise',
    pages: [
      getPostById('docs/configuration'),
      getPostById('docs/tokens'),
      getPostById('docs/theme'),
      getPostById('docs/utils'),
      getPostById('docs/screens'),
    ],
  },

  {
    label: 'Concept',
    pages: [
      getPostById('docs/base-styles'),
      getPostById('docs/variants'),
      getPostById('docs/token-aware-values'),
      getPostById('docs/responsive'),
      getPostById('docs/composition'),
      getPostById('docs/overrides'),
    ],
  },

  {
    label: 'API',
    pages: [
      getPostById('docs/createstyled'),
      getPostById('docs/styled'),
      getPostById('docs/css'),
      getPostById('docs/createcss'),
      getPostById('docs/getstyles'),
    ],
  },
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
