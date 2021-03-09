import React from 'react';
import NextLink from 'next/link';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { Container, Text, Button, Box, Flex, Separator, Link, Badge } from '@modulz/design-system';
import { ArrowLeftIcon } from '@modulz/radix-icons';
import { parseISO, format } from 'date-fns';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { authors } from '../../data/authors';
import { getAllBlogPosts, getBlogPostBySlug } from '@lib/mdx';
import { components } from '@components/MDXComponents';
import rehypeHighlightCode from '@lib/rehype-highlight-code';

export default function BlogPost({ data, source, slug, relatedPosts }) {
  const content = hydrate(source, { components });

  const twitterShare = `
		https://twitter.com/intent/tweet?
		text="${data.title}" by @${
    authors[data.by].twitter
  } on the @stitchesjs blog.&url=https://stitches.dev/blog/${slug}
		`;

  return (
    <>
      <TitleAndMetaTags title={`${data.title} — Stitches`} poster={data.poster} />

      <Container size="3" css={{ mb: '$5' }}>
        <NextLink href="/blog" passHref>
          <Button as="a" size="2" variant="ghost" css={{ color: '$gray900', ml: '-40px' }}>
            <Box css={{ mr: '$2' }}>
              <ArrowLeftIcon />
            </Box>
            Blog
          </Button>
        </NextLink>
      </Container>

      <Text as="h1" size="8" css={{ fontWeight: 500, mb: '$2', lineHeight: '40px' }}>
        {data.title}
      </Text>

      <Text as="h2" size="6" css={{ mt: '$2', mb: '$4', color: '$gray900', lineHeight: '30px' }}>
        {data.description}
      </Text>

      <Flex css={{ mt: '$4', mb: '$7', alignItems: 'center' }}>
        {/* <Avatar src={authors[data.by].avatar} mr={2} /> */}
        <Text as="p" size="3" css={{ color: '$gray900', lineHeight: 0, whiteSpace: 'nowrap' }}>
          <Link
            href={`https://twitter.com/${authors[data.by].twitter}`}
            rel="noopener noreferrer"
            variant="subtle"
          >
            {authors[data.by].name}
          </Link>
        </Text>
        <Separator orientation="vertical" css={{ mx: '$2' }} />
        <Text as="time" size="3" css={{ color: '$gray900', lineHeight: 0, whiteSpace: 'nowrap' }}>
          {format(parseISO(data.publishedAt), 'MMMM yyyy')}
        </Text>
        <Flex css={{ alignItems: 'center', display: 'none', when: { bp2: { display: 'flex' } } }}>
          <Separator orientation="vertical" css={{ mx: '$2' }} />
          <Text size="3" css={{ color: '$gray900', lineHeight: 0 }}>
            {data.readingTime.text}
          </Text>
          {data.type === 'changelog' && (
            <>
              <Separator orientation="vertical" css={{ mx: '$2' }} />
              <Badge>Changelog</Badge>
            </>
          )}
        </Flex>
      </Flex>

      <Box>{content}</Box>

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
            {relatedPosts.map((post) => {
              return (
                <Box
                  as="a"
                  key={post.data.id}
                  href={`/blog/${post.slug}`}
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
                      {post.data.title}
                    </Text>
                    <Text
                      as="p"
                      size="3"
                      css={{
                        color: '$hiContrast',
                      }}
                    >
                      {post.data.description}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Flex>
        </Box>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const posts = getAllBlogPosts();
  return {
    paths: posts.map((file) => ({
      params: { slug: file.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { data, content, slug } = getBlogPostBySlug(context.params.slug) as any;

  const mdxContent = await renderToString(content, {
    components,
    mdxOptions: {
      rehypePlugins: [rehypeHighlightCode],
    },
  });

  const relatedPosts = data.relatedIds ? data.relatedIds.map((id) => getBlogPostBySlug(id)) : null;
  return { props: { data, source: mdxContent, slug, relatedPosts } };
}
