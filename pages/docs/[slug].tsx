import React from 'react';
import NextLink from 'next/link';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { Container, Text, Button, Box, Flex, Separator, Link, Badge } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { getAllDocs, getDocBySlug } from '@lib/mdx';
import { components } from '@components/MDXComponents';
import rehypeHighlightCode from '@lib/rehype-highlight-code';

export default function Doc({ data, source, slug }) {
  const content = hydrate(source, { components });

  return (
    <>
      <TitleAndMetaTags title={`${data.title} — Stitches`} />

      <Text as="h1" size="8" css={{ fontWeight: 500, mb: '$2', lineHeight: '40px' }}>
        {data.title}
      </Text>

      <Text as="h2" size="6" css={{ mt: '$2', mb: '$4', color: '$gray900', lineHeight: '30px' }}>
        {data.description}
      </Text>

      <Box>{content}</Box>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getAllDocs();
  return {
    paths: posts.map((file) => ({
      params: { slug: file.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { data, content, slug } = getDocBySlug(context.params.slug) as any;

  const mdxContent = await renderToString(content, {
    components,
    mdxOptions: {
      rehypePlugins: [rehypeHighlightCode],
    },
  });

  return { props: { data, source: mdxContent, slug } };
}
