const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');
const withOptimizedImages = require('next-optimized-images');
const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withPlugins(
  [
    withMdxEnhanced({
      layoutPath: 'layouts',
      defaultLayout: true,
      rehypePlugins: [require('mdx-prism')],
      extendFrontMatter: {
        process: (mdxContent, frontMatter) => {
          return {
            id: makeIdFromPath(frontMatter.__resourcePath),
          };
        },
      },
    })({
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    }),
    withOptimizedImages,
    withVideos,
  ],
  {
    // Next.js config
  }
);

/**
 *
 * @param {string} resourcePath
 *
 * Make an ID from a path
 *
 * Currently, `resourcePath` is formatted like this:
 * 	- "blog/name-of-file.mdx"
 * 	- "blog/name-of-folder/index.mdx"
 *
 * This function will make the following IDs:
 * 	- "name-of-file"
 * 	- "name-of-folder"
 *
 */
function makeIdFromPath(resourcePath) {
  const parts = resourcePath.split('/');
  const articleType = parts[0];
  let lastPart = parts[parts.length - 1];

  if (lastPart.includes('index')) {
    lastPart = parts[parts.length - 2];
  }

  return `${articleType}/${lastPart.replace('.mdx', '')}`;
}
