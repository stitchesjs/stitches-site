import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Container, Text, Box, Flex, Divider } from '@modulz/design-system';
import { CaretLeftIcon, CaretRightIcon } from '@modulz/radix-icons';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { ScrollArea } from '../components/ScrollArea';
import { docsRoutes, allDocsRoutes } from '../utils/docsRoutes';
import { getPostById } from '../utils/docsPosts';

export default (frontMatter: FrontMatter) => {
  return ({ children }) => {
    const router = useRouter();

    const currentPageId = router.pathname.substr(1);
    const currentPageIndex = allDocsRoutes.findIndex((page) => page.id === currentPageId);
    const previous = allDocsRoutes[currentPageIndex - 1];
    const next = allDocsRoutes[currentPageIndex + 1];

    return (
      <React.Fragment>
        <TitleAndMetaTags title={frontMatter.title} />
        <Flex
          css={{
            display: 'block',
            minHeight: 'auto',

            bp2: {
              display: 'flex',
              minHeight: 'calc(100vh - var(--sizes-7))',
            },
          }}
        >
          <Box
            css={{
              width: '100%',
              maxHeight: 'auto',
              borderBottom: '1px solid',
              borderColor: 'gray300',
              WebkitOverflowScrolling: 'touch' as any,
              overflowX: 'hidden',

              bp2: {
                position: 'sticky',
                top: '7',
                left: 0,
                width: '250px',
                maxHeight: 'calc(100vh - var(--sizes-7))',
                borderRight: '1px solid',
                borderBottom: 0,
                borderColor: 'gray300',
              },
            }}
          >
            <ScrollArea>
              <Box css={{ bp2: { pb: '8' } }}>
                {docsRoutes.map((section) => (
                  <Box key={section.label} css={{ mb: '4' }}>
                    <Text
                      as="h4"
                      size="3"
                      css={{
                        fontWeight: 500,
                        px: '5',
                        py: '2',
                      }}
                    >
                      {section.label}
                    </Text>
                    {section.pages.map((page: FrontMatter) => (
                      <NavItem
                        key={page.id}
                        href={`/${page.id}`}
                        active={router.pathname === `/${page.id}`}
                      >
                        <Text size="2" css={{ color: 'inherit', lineHeight: '1' }}>
                          {page.title}
                        </Text>
                      </NavItem>
                    ))}
                  </Box>
                ))}
              </Box>
            </ScrollArea>
          </Box>

          <Box
            // marginLeft={[0, 200, 250]}
            css={{
              maxWidth: ['100%'],
              flex: 1,
              pt: '8',
              pb: '9',
              // display: [navOpen ? 'none' : 'block', 'block'],
            }}
          >
            <Container size="3">
              <Box css={{ flex: 1, minWidth: '0px' }}>
                <Text as="h1" size="8" css={{ mb: '1', fontWeight: 500 }}>
                  {frontMatter.title}
                </Text>

                <Box css={{ my: '6' }}>{children}</Box>
              </Box>

              {(previous || next) && (
                <Flex
                  aria-label="Pagination navigation"
                  css={{
                    justifyContent: 'space-between',
                  }}
                >
                  {previous && (
                    <NextLink href={`/${previous.id}`} passHref>
                      <Box
                        as="a"
                        aria-label={`Previous page: ${previous.title}`}
                        css={{
                          color: 'blue600',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                      >
                        <CaretLeftIcon />
                        <Text size="3" css={{ color: 'inherit', ml: '1' }}>
                          {previous.title}
                        </Text>
                      </Box>
                    </NextLink>
                  )}
                  {next && (
                    <NextLink href={`/${next.id}`} passHref>
                      <Box
                        as="a"
                        aria-label={`Previous page: ${next.title}`}
                        css={{
                          color: 'blue600',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          ml: 'auto',
                        }}
                      >
                        <Text size="3" css={{ color: 'inherit', mr: '1' }}>
                          {next.title}
                        </Text>
                        <CaretRightIcon />
                      </Box>
                    </NextLink>
                  )}
                </Flex>
              )}

              {Boolean(frontMatter.relatedIds) && (
                <>
                  <Divider size="large" css={{ my: '8', mx: 'auto' }} />
                  <Box>
                    <Text
                      as="h3"
                      size="2"
                      css={{
                        mb: '3',
                        fontWeight: 500,
                        textAlign: 'center',
                        textTransform: 'uppercase',
                      }}
                    >
                      Related
                    </Text>

                    <Flex css={{ my: '4', flexDirection: 'column', gap: '4' }}>
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
                                  fontWeight: '500',
                                  mb: '1',
                                }}
                              >
                                {post.title}
                              </Text>
                              <Text
                                as="p"
                                size="3"
                                css={{
                                  color: 'hiContrast',
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
          </Box>
        </Flex>
      </React.Fragment>
    );
  };
};

type NavItemProps = { children: React.ReactNode; active?: boolean; href: string };

function NavItem({ children, active, href, ...props }: NavItemProps) {
  return (
    <NextLink href={href} passHref>
      <Box
        {...props}
        as="a"
        css={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'hiContrast',
          py: '2',
          px: '5',
          backgroundColor: active ? 'blue300' : 'transparent',
          userSelect: 'none',
          minHeight: '6',
          transition: 'background-color 50ms linear',
          ':hover': {
            backgroundColor: active ? 'blue300' : 'blue200',
          }
        }}
      >
        {children}
      </Box>
    </NextLink>
  );
}
