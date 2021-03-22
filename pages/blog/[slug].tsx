import React from 'react';
import NextLink from 'next/link';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { Container, Text, Button, Box, Flex, Separator, Link, Badge } from '@modulz/design-system';
import { ArrowLeftIcon } from '@modulz/radix-icons';
import { parseISO, format } from 'date-fns';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { getAllBlogPostsFrontmatter, getBlogPostBySlug } from '@lib/mdx';
import { authors } from '@data/authors';
import { Header } from '@components/Header';
import { components } from '@components/MDXComponents';
import rehypeHighlightCode from '@lib/rehype-highlight-code';
import remarkSlug from 'remark-slug';

import type { BlogFrontmatter } from 'types/blog';
import type { MdxRemote } from 'next-mdx-remote/types';

type BlogPost = {
  frontmatter: BlogFrontmatter;
  source: MdxRemote.Source;
  relatedPosts?: BlogFrontmatter[];
};

export default function BlogPost({ frontmatter, source, relatedPosts }: BlogPost) {
  const content = hydrate(source, { components });

  const twitterShare = `
		https://twitter.com/intent/tweet?
		text="${frontmatter.title}" by @${
    authors[frontmatter.by].twitter
  } on the @stitchesjs blog.&url=https://stitches.dev/blog/${frontmatter.slug}
		`;

  return (
    <>
      <TitleAndMetaTags title={`${frontmatter.title} — Stitches`} poster={frontmatter.poster} />

      <Header />

      <Container size="3" css={{ maxWidth: '715px' }}>
        <NextLink href="/blog" passHref>
          <Button
            as="a"
            size="2"
            variant="ghost"
            css={{ color: '$slate900', ml: '-40px', mb: '$4' }}
          >
            <Box css={{ mr: '$2' }}>
              <ArrowLeftIcon />
            </Box>
            Blog
          </Button>
        </NextLink>

        <Text as="h1" size="8" css={{ fontWeight: 500, mb: '$2', lineHeight: '40px' }}>
          {frontmatter.title}
        </Text>

        <Text as="h2" size="6" css={{ mt: '$2', mb: '$4', color: '$slate900', lineHeight: '30px' }}>
          {frontmatter.description}
        </Text>

        <Flex css={{ mt: '$4', mb: '$7', alignItems: 'center' }}>
          {/* <Avatar src={authors[data.by].avatar} mr={2} /> */}
          <Text as="p" size="3" css={{ color: '$slate900', lineHeight: 0, whiteSpace: 'nowrap' }}>
            <Link
              href={`https://twitter.com/${authors[frontmatter.by].twitter}`}
              rel="noopener noreferrer"
              variant="subtle"
            >
              {authors[frontmatter.by].name}
            </Link>
          </Text>
          <Separator orientation="vertical" css={{ mx: '$2' }} />
          <Text
            as="time"
            size="3"
            css={{ color: '$slate900', lineHeight: 0, whiteSpace: 'nowrap' }}
          >
            {format(parseISO(frontmatter.publishedAt), 'MMMM yyyy')}
          </Text>
          <Flex css={{ alignItems: 'center', display: 'none', '@bp2': { display: 'flex' } }}>
            <Separator orientation="vertical" css={{ mx: '$2' }} />
            <Text size="3" css={{ color: '$slate900', lineHeight: 0 }}>
              {frontmatter.readingTime.text}
            </Text>
            {frontmatter.type === 'changelog' && (
              <>
                <Separator orientation="vertical" css={{ mx: '$2' }} />
                <Badge>Changelog</Badge>
              </>
            )}
          </Flex>
        </Flex>

        {content}

        <Separator size="2" css={{ my: '$8', mx: 'auto' }} />
        <Box css={{ textAlign: 'center' }}>
          <Text as="p" size="4" css={{ lineHeight: 2 }}>
            Share this post on{' '}
            <Link href={twitterShare} target="_blank" title="Share this post on Twitter">
              Twitter
            </Link>
            .
          </Text>
        </Box>

        {relatedPosts && (
          <Box>
            <Separator size="2" css={{ my: '$8', mx: 'auto' }} />
            <Text
              as="h3"
              size="2"
              css={{
                mb: '$3',
                fontWeight: 500,
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              Related
            </Text>

            <Flex css={{ my: '$4', flexDirection: 'column', gap: '$4' }}>
              {relatedPosts.map((frontmatter) => {
                return (
                  <Box
                    as="a"
                    key={frontmatter.slug}
                    href={`/blog/${frontmatter.slug}`}
                    css={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <Box>
                      <Text
                        as="h6"
                        size="4"
                        css={{
                          fontWeight: 500,
                          mb: '$1',
                        }}
                      >
                        {frontmatter.title}
                      </Text>
                      <Text
                        as="p"
                        size="3"
                        css={{
                          color: '$hiContrast',
                        }}
                      >
                        {frontmatter.description}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Flex>
          </Box>
        )}
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllBlogPostsFrontmatter();
  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, content } = getBlogPostBySlug(context.params.slug);

  const mdxContent = await renderToString(content, {
    components,
    mdxOptions: {
      rehypePlugins: [rehypeHighlightCode, remarkSlug],
    },
  });

  const relatedPosts = frontmatter.relatedIds
    ? frontmatter.relatedIds.map((id) => {
        const { frontmatter } = getBlogPostBySlug(id);
        return frontmatter;
      })
    : null;

  return {
    props: {
      frontmatter,
      source: mdxContent,
      relatedPosts,
    },
  };
}
