import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Container, Text, Box, Flex, Divider, IconButton, Badge } from '@modulz/design-system';
import { CaretLeftIcon, CaretRightIcon } from '@modulz/radix-icons';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { ScrollArea } from '../components/ScrollArea';
import { StitchesLogo } from '../components/StitchesLogo';
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
            flexDirection: 'column',
            bp2: {
              flexDirection: 'row',
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
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                width: '250px',
                borderRight: '1px solid',
                borderBottom: 0,
                borderColor: 'gray300',
              },
            }}
          >
            <ScrollArea>
              <Box css={{ bp2: { pb: '8' } }}>
                <Flex css={{ alignItems: 'center', p: '4' }}>
                  <NextLink href="/" passHref>
                    <Box
                      as="a"
                      css={{ color: 'hiContrast', display: 'inline-flex', ':focus': { boxShadow: 'none' } }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          width: 1,
                          height: 1,
                          padding: 0,
                          margin: -1,
                          overflow: 'hidden',
                          clip: 'rect(0, 0, 0, 0)',
                          whiteSpace: 'nowrap',
                          border: 0,
                        }}
                      >
                        Stitches homepage
                      </span>
                      <StitchesLogo />
                    </Box>
                  </NextLink>
                  <Badge variant="yellow" css={{ ml: '3' }}>Beta</Badge>
                </Flex>
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
                <Text
                  as="h4"
                  size="3"
                  css={{
                    fontWeight: 500,
                    px: '5',
                    py: '2',
                  }}
                >
                  Community
                </Text>
                <Box
                  as="a"
                  href="https://github.com/modulz/stitches"
                  target="_blank"
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'hiContrast',
                    py: '2',
                    px: '5',
                    userSelect: 'none',
                    minHeight: '6',
                    transition: 'background-color 50ms linear',
                    ':hover': {
                      backgroundColor:'blue200',
                    }
                  }}>
                  <Text size="2" css={{ color: 'inherit', lineHeight: '1' }}>
                    Github
                  </Text>
                  <Flex css={{ ml: 1, color: 'gray500' }}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor"/>
                    </svg>
                  </Flex>
                </Box>
                <Box
                  as="a"
                  href="https://twitter.com/stitchesjs"
                  target="_blank"
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'hiContrast',
                    py: '2',
                    px: '5',
                    userSelect: 'none',
                    minHeight: '6',
                    transition: 'background-color 50ms linear',
                    ':hover': {
                      backgroundColor:'blue200',
                    }
                  }}>
                  <Text size="2" css={{ color: 'inherit', lineHeight: '1' }}>
                    Twitter
                  </Text>
                  <Flex css={{ ml: 1, color: 'gray500' }}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor"/>
                    </svg>
                  </Flex>
                </Box>
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
              bp2: {
                pl: '250px'
              }
              // display: [navOpen ? 'none' : 'block', 'block'],
            }}
          >
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
                    my: '9',
                  }}
                >
                  {previous && (
                    <Box>
                      <NextLink href={`/${previous.id}`} passHref>
                        <Box
                          as="a"
                          aria-label={`Previous page: ${previous.title}`}
                          css={{
                            color: 'blue600',
                            textDecoration: 'none',
                            alignItems: 'center',
                          }}
                        >
                          <Box css={{ mb: '2' }}>
                            <Text size="3" css={{ color: 'gray600' }}>
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
                    <Box>
                      <NextLink href={`/${next.id}`} passHref>
                        <Box
                          as="a"
                          aria-label={`Previous page: ${next.title}`}
                          css={{
                            color: 'blue600',
                            textDecoration: 'none',
                            ml: 'auto',
                            textAlign: 'right'
                          }}
                        >
                          <Box css={{ mb: '2' }}>
                            <Text size="3" css={{ color: 'gray600' }}>
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
