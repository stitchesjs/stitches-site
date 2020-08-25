import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Container, Text, Box, Flex, Divider, Grid } from '@modulz/design-system';
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
              borderRight: 0,
              borderBottom: '1px solid',
              borderColor: 'gray300',
              WebkitOverflowScrolling: 'touch' as any,
              overflowX: 'hidden',

              bp2: {
                position: 'sticky',
                top: 7,
                left: 0,
                width: '200px',
                maxHeight: 'calc(100vh - var(--sizes-7))',
                borderRight: '1px solid',
                borderBottom: '0',
                borderColor: 'gray300',
              },
            }}
          >
            <ScrollArea>
              {docsRoutes.map((section) => (
                <Box key={section.label}>
                  <Text
                    as="h4"
                    size="3"
                    css={{ fontWeight: '500', mx: '5', my: '2', lineHeight: 1 }}
                  >
                    {section.label}
                  </Text>
                  {section.pages.map((page: FrontMatter) => (
                    <NavItem
                      key={page.id}
                      href={`/${page.id}`}
                      active={router.pathname === `/${page.id}`}
                    >
                      {page.title}
                    </NavItem>
                  ))}
                </Box>
              ))}

              <Box css={{ height: 8 }} />
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
            <Container size="2">
              <Box css={{ flex: 1, minWidth: '0px' }}>
                <Text size="8" mb={1} css={{ fontWeight: 500 }}>
                  {frontMatter.title}
                </Text>

                <Box my={6}>{children}</Box>
              </Box>

              {(previous || next) && (
                <Flex aria-label="Pagination navigation" css={{ justifyContent: 'space-between' }}>
                  {previous && (
                    <NextLink href={`/${previous.id}`} passHref>
                      <Box
                        as="a"
                        aria-label={`Previous page: ${previous.title}`}
                        css={{ display: 'inline-flex', alignItems: 'center' }}
                      >
                        <CaretLeftIcon />
                        <Text size="4" css={{ color: 'inherit', ml: '1' }}>
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
                        css={{ display: 'inline-flex', alignItems: 'center', ml: 'auto' }}
                      >
                        <Text size="4" css={{ color: 'inherit', mr: '1' }}>
                          {next.title}
                        </Text>
                        <CaretRightIcon />
                      </Box>
                    </NextLink>
                  )}
                </Flex>
              )}

              {Boolean(frontMatter.relatedIds) && (
                <Container size="2" css={{ maxWidth: '1090px' }}>
                  <Divider size="2" css={{ my: '8', mx: 'auto' }} />
                  <Box>
                    <Text
                      as="h3"
                      size="2"
                      css={{
                        mb: '3',
                        weight: 500,
                        textAlign: 'center',
                        color: 'gray700',
                        letterSpacing: '.125em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Related
                    </Text>

                    <Grid
                      css={{ my: '4', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '5' }}
                    >
                      {frontMatter.relatedIds.map((relatedPostId) => {
                        const post = getPostById(relatedPostId);
                        return (
                          <Box key={post.id} href={`/${post.id}`} css={{ padding: '0' }}>
                            <Box css={{ p: '4' }}>
                              <Text
                                as="h6"
                                size="4"
                                css={{ lineHeight: 1, fontWeight: '500', mb: '2' }}
                              >
                                {post.title}
                              </Text>
                              <Text as="p" size="3" css={{ color: 'gray700', lineHeight: 2 }}>
                                {post.description}
                              </Text>
                            </Box>
                          </Box>
                        );
                      })}
                    </Grid>
                  </Box>
                </Container>
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
          textDecoration: 'none',
          display: 'block',
          color: active ? 'loContrast' : 'hiContrast',
          py: '1',
          px: '5',
          backgroundColor: active ? 'blue500' : 'transparent',
          ':hover': { textDecoration: 'none' },
        }}
      >
        <Text size="2" css={{ color: 'inherit' }}>
          {children}
        </Text>
      </Box>
    </NextLink>
  );
}
