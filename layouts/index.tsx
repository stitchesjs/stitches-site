import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Container, Text, Button, Box, Flex, Divider, Link, Badge } from '@modulz/design-system';
import { ArrowLeftIcon } from '@modulz/radix-icons';
import { parseISO, format } from 'date-fns';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { getPostById } from '../utils/allPosts';
import { authors } from '../data/authors';

export default (frontMatter: FrontMatter) => {
  const isBlog = frontMatter.id.includes('blog/');

  return ({ children }) => {
    const router = useRouter();

    const twitterShare = isBlog
      ? `
		https://twitter.com/intent/tweet?
		text="${frontMatter.title}" by @${
          authors[frontMatter.by].twitter
        } on the @stitchesjs blog.&url=https://modulz.app${router.route}
		`
      : undefined;

    return (
      <>
        <TitleAndMetaTags title={`${frontMatter.title} — Stitches`} poster={frontMatter.poster} />

        {isBlog && (
          <Container size="3" css={{ mb: '$5' }}>
            <NextLink href="/blog" passHref>
              <Button size="large" as="a" variant="ghost" css={{ color: '$gray600', ml: '-40px' }}>
                <Box css={{ mr: '$2' }}>
                  <ArrowLeftIcon />
                </Box>
                Blog
              </Button>
            </NextLink>
          </Container>
        )}

        <Text as="h1" size="8" css={{ fontWeight: 500, mb: '$2', lineHeight: '40px' }}>
          {frontMatter.title}
        </Text>

        <Text as="h2" size="6" css={{ mt: '$2', mb: '$4', color: '$gray600', lineHeight: '30px' }}>
          {frontMatter.description}
        </Text>

        {isBlog && (
          <Flex css={{ mt: '$4', mb: '$7', alignItems: 'center' }}>
            {/* <Avatar src={authors[frontMatter.by].avatar} mr={2} /> */}
            <Text as="p" size="3" css={{ color: '$gray600', lineHeight: 0, whiteSpace: 'nowrap' }}>
              <Link
                href={`https://twitter.com/${authors[frontMatter.by].twitter}`}
                rel="noopener noreferrer"
                variant="subtle"
              >
                {authors[frontMatter.by].name}
              </Link>
            </Text>
            <Divider orientation="vertical" css={{ mx: '$2' }} />
            <Text
              as="time"
              size="3"
              css={{ color: '$gray600', lineHeight: 0, whiteSpace: 'nowrap' }}
            >
              {format(parseISO(frontMatter.publishedAt), 'MMMM yyyy')}
            </Text>
            <Flex css={{ alignItems: 'center', display: 'none', bp2: { display: 'flex' } }}>
              <Divider orientation="vertical" css={{ mx: '$2' }} />
              <Text size="3" css={{ color: '$gray600', lineHeight: 0 }}>
                {frontMatter.readingTime.text}
              </Text>
              {frontMatter.type === 'changelog' && (
                <>
                  <Divider orientation="vertical" css={{ mx: '$2' }} />
                  <Badge>Changelog</Badge>
                </>
              )}
            </Flex>
          </Flex>
        )}

        <Box>{children}</Box>

        {isBlog && (
          <>
            <Divider size="large" css={{ my: '$8', mx: 'auto' }} />
            <Box css={{ textAlign: 'center' }}>
              <Text as="p" size="4" css={{ lineHeight: 2 }}>
                Share this post on{' '}
                <Link href={twitterShare} target="_blank" title="Share this post on Twitter">
                  Twitter
                </Link>
                .
              </Text>
            </Box>
          </>
        )}

        {Boolean(frontMatter.relatedIds) && (
          <>
            <Divider size="large" css={{ my: '$8', mx: 'auto' }} />
            <Box>
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
                {frontMatter.relatedIds.map((relatedPostId) => {
                  const post = getPostById(relatedPostId);
                  return (
                    <Box
                      as="a"
                      key={post.id}
                      href={`/${post.id}`}
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
                          {post.title}
                        </Text>
                        <Text
                          as="p"
                          size="3"
                          css={{
                            color: '$hiContrast',
                          }}
                        >
                          {post.description}
                        </Text>
                      </Box>
                    </Box>
                  );
                })}
              </Flex>
            </Box>
          </>
        )}
      </>
    );
  };
};
