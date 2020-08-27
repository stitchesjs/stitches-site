import { getPostById } from './docsPosts';

export const docsRoutes = [
  {
    label: 'Overview',
    pages: [
      getPostById('docs/motivation'),
      getPostById('docs/motivation'),
      getPostById('docs/motivation'),
      getPostById('docs/motivation'),
      getPostById('docs/motivation'),
      getPostById('docs/motivation'),
      getPostById('docs/motivation'),
      // getPostById('docs/learn'),
      // getPostById('docs/releases'),
      // getPostById('docs/tutorials'),
      // getPostById('docs/frequently-asked-questions'),
      // getPostById('docs/contributing'),
    ],
  },

  {
    label: 'Getting Started',
    pages: [
      getPostById('docs/installation'),
      // getPostById('docs/learn'),
      // getPostById('docs/releases'),
      // getPostById('docs/setup'),
      getPostById('docs/server-side-rendering'),
    ],
  },

  {
    label: 'Customise',
    pages: [
      getPostById('docs/configuration'),
      getPostById('docs/tokens'),
      getPostById('docs/theme'),
      getPostById('docs/breakpoints'),
      getPostById('docs/utils'),
    ],
  },

  {
    label: 'Usage',
    pages: [
      getPostById('docs/use-it'),
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
