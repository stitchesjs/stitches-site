import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Container, Text, Box, Flex, Divider } from '@modulz/design-system';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { allDocsRoutes } from '../utils/docsRoutes';
import { getPostById } from '../utils/docsPosts';

export default (frontMatter: FrontMatter) => {
  return ({ children }) => {
    const router = useRouter();

    const currentPageId = router.pathname.substr(1);
    const currentPageIndex = allDocsRoutes.findIndex((page) => page.id === currentPageId);
    const previous = allDocsRoutes[currentPageIndex - 1];
    const next = allDocsRoutes[currentPageIndex + 1];

    return (
      <>
        <TitleAndMetaTags title={`${frontMatter.title} — Stitches`} />

        <Container size="3">
          <Box css={{ flex: 1, minWidth: '0px' }}>
            <Text as="h1" size="8" css={{ fontWeight: 500 }}>
              {frontMatter.title}
            </Text>
            <Box>{children}</Box>
          </Box>

          {(previous || next) && (
            <Flex
              aria-label="Pagination navigation"
              css={{
                justifyContent: 'space-between',
                my: '$9',
              }}
            >
              {previous && (
                <Box>
                  <NextLink href={`/${previous.id}`} passHref>
                    <Box
                      as="a"
                      aria-label={`Previous page: ${previous.title}`}
                      css={{
                        color: '$blue600',
                        textDecoration: 'none',
                        alignItems: 'center',
                      }}
                    >
                      <Box css={{ mb: '$2' }}>
                        <Text size="3" css={{ color: '$gray600' }}>
                          Previous
                        </Text>
                      </Box>
                      <Text size="5" css={{ color: 'inherit' }}>
                        {previous.title}
                      </Text>
                    </Box>
                  </NextLink>
                </Box>
              )}
              {next && (
                <Box css={{ ml: 'auto' }}>
                  <NextLink href={`/${next.id}`} passHref>
                    <Box
                      as="a"
                      aria-label={`Previous page: ${next.title}`}
                      css={{
                        color: '$blue600',
                        textDecoration: 'none',
                        textAlign: 'right',
                      }}
                    >
                      <Box css={{ mb: '$2' }}>
                        <Text size="3" css={{ color: '$gray600' }}>
                          Next
                        </Text>
                      </Box>
                      <Text size="5" css={{ color: 'inherit' }}>
                        {next.title}
                      </Text>
                    </Box>
                  </NextLink>
                </Box>
              )}
            </Flex>
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
        </Container>
      </>
    );
  };
};
