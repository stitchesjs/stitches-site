import React from 'react';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { Text, Box, Subheading, Link, Skeleton, styled } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { getAllDocsFrontmatter, getDocBySlug } from '@lib/mdx';
import { components } from '@components/MDXComponents';
import rehypeHighlightCode from '@lib/rehype-highlight-code';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import { RemoveScroll } from 'react-remove-scroll';
import { ScrollArea } from '@components/ScrollArea';

import type { DocFrontmatter } from 'types/doc';
import type { MdxRemote } from 'next-mdx-remote/types';

type Doc = {
  frontmatter: DocFrontmatter;
  source: MdxRemote.Source;
};

export default function Doc({ frontmatter, source }: Doc) {
  const content = hydrate(source, { components });

  return (
    <>
      <TitleAndMetaTags title={`${frontmatter.title} — Stitches`} />

      <Text as="h1" size="8" css={{ fontWeight: 500, mb: '$2', lineHeight: '40px' }}>
        {frontmatter.title}
      </Text>

      <Text as="h2" size="6" css={{ mt: '$2', mb: '$4', color: '$slate900', lineHeight: '30px' }}>
        {frontmatter.description}
      </Text>

      <Box>{content}</Box>

      <Box
        as="aside"
        // Components that hide the scrollbar (like Dialog) add padding to
        // account for the scrollbar gap to avoid layout jank. This does not
        // work for position: fixed elements. Since we use react-remove-scroll
        // under the hood for those primitives, we can add this helper class
        // provided by that lib to deal with that for the QuickNav.
        // https://github.com/radix-ui/website/issues/64
        // https://github.com/theKashey/react-remove-scroll#positionfixed-elements
        className={RemoveScroll.classNames.zeroRight}
        css={{
          display: 'none',
          '@bp3': {
            display: 'block',
            width: '250px',
            flexShrink: 0,
            zIndex: 1,
            position: 'fixed',
            right: '$2',
            top: '$5',
            order: 1,
            height: 'calc(100vh - (var(--space-8) + var(--space-5)))',
          },
        }}
      >
        <QuickNav content={content} />
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllDocsFrontmatter();
  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, content } = getDocBySlug(context.params.slug);

  const mdxContent = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [remarkAutolinkHeadings, remarkSlug],
      rehypePlugins: [rehypeHighlightCode],
    },
  });

  return { props: { frontmatter, source: mdxContent } };
}

const QuickNavUl = styled('ul', {
  listStyleType: 'none',
  p: 0,
  m: 0,
});

const QuickNavLink = styled(Link, {
  color: '$slate900',
  display: 'inline-flex',
  my: '$1',

  '[data-level="3"] ~ [data-level="4"] &': {
    marginLeft: '$5',
  },
});

const QuickNavText = styled(Text, {
  color: 'inherit',
  lineHeight: '20px',
});

function QuickNav({ content }) {
  const [headings, setHeadings] = React.useState<HTMLHeadingElement[]>([]);

  React.useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-heading]')
    );

    setHeadings(headingElements);
  }, [content]);

  // Function to determine the Heading Level based on `nodeName` (H2, H3, etc)
  const getLevel = (nodeName) => {
    return Number(nodeName.replace('H', ''));
  };

  return (
    <ScrollArea>
      <Box as="nav" aria-labelledby="site-quick-nav-heading" css={{ padding: '$5' }}>
        <Subheading css={{ mb: '$3' }} id="site-quick-nav-heading">
          Quick nav
        </Subheading>
        <QuickNavUl>
          {/* {headings.length === 0 && (
            <Box as="li">
              <QuickNavLink variant="subtle">
                <QuickNavText size="2">
                  <Skeleton variant="text" />
                </QuickNavText>
              </QuickNavLink>
            </Box>
          )} */}

          {headings.map(({ id, nodeName, innerText }) => {
            return (
              <Box as="li" key={id} data-level={getLevel(nodeName)}>
                <QuickNavLink variant="subtle" href={`#${id}`}>
                  <QuickNavText size="2">{innerText}</QuickNavText>
                </QuickNavLink>
              </Box>
            );
          })}
        </QuickNavUl>
      </Box>
    </ScrollArea>
  );
}
