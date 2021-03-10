import React from 'react';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { Text, Box } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { getAllDocsFrontmatter, getDocBySlug } from '@lib/mdx';
import { components } from '@components/MDXComponents';
import rehypeHighlightCode from '@lib/rehype-highlight-code';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';

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

      <Text as="h2" size="6" css={{ mt: '$2', mb: '$4', color: '$gray900', lineHeight: '30px' }}>
        {frontmatter.description}
      </Text>

      <Box>{content}</Box>
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
