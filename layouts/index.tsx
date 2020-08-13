import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Container, Heading, Text, Box, Flex, Link, Divider, Subheading, List, ListItem } from '@modulz/radix';
import { CaretLeftIcon, CaretRightIcon } from '@modulz/radix-icons';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { ScrollArea } from '../components/ScrollArea';
import { docsPosts } from '../utils/docsPosts';

function getPostById(posts: FrontMatter[], id: string) {
  const [post] = posts.filter((frontMatter) => frontMatter.id === id);
  return post;
}

export default (frontMatter: FrontMatter) => {
  return ({ children }) => {
    const router = useRouter();

    const previous = getPostById(docsPosts, frontMatter.previousId);
    const next = getPostById(docsPosts, frontMatter.nextId);

    return (
      <React.Fragment>
        <TitleAndMetaTags title={frontMatter.title} />
        <Flex sx={{ display: ['block', 'flex'], minHeight: (theme) => ['auto', `calc(100vh - ${theme.sizes[7]})`] }}>
          <Box
            sx={{
              position: ['static', 'sticky'],
              top: 7,
              left: 0,
              width: ['100%', 200, 250],
              maxHeight: (theme) => ['auto', `calc(100vh - ${theme.sizes[7]})`],
              borderRight: [0, '1px solid'],
              borderBottom: ['1px solid', 0],
              borderColor: ['gray300', 'gray300'],
              WebkitOverflowScrolling: 'touch' as any,
              overflowX: 'hidden',
            }}
          >
            <ScrollArea>
              <List>
                <Text as="h4" size={3} sx={{ fontWeight: '500', mx: 5, my: 2 }} style={{ lineHeight: 1 }}>
                  Get Started
                </Text>
                <NavItem href="/docs/motivation" active={router.pathname === '/docs/motivation'}>
                  Motivation
                </NavItem>
                <NavItem href="/docs/installation" active={router.pathname === '/docs/installation'}>
                  Installation
                </NavItem>
                <NavItem href="/docs/setup" active={router.pathname === '/docs/setup'}>
                  Setup
                </NavItem>
                <NavItem href="/docs/server-side-rendering" active={router.pathname === '/docs/server-side-rendering'}>
                  Server Side Rendering
                </NavItem>
              </List>

              <List>
                <Text as="h4" size={3} sx={{ fontWeight: '500', mx: 5, my: 2 }} style={{ lineHeight: 1 }}>
                  Customise
                </Text>
                <NavItem href="/docs/configuration" active={router.pathname === '/docs/configuration'}>
                  Configuration
                </NavItem>
                <NavItem href="/docs/tokens" active={router.pathname === '/docs/tokens'}>
                  Tokens
                </NavItem>
                <NavItem href="/docs/theme" active={router.pathname === '/docs/theme'}>
                  Theme
                </NavItem>
                <NavItem href="/docs/utils" active={router.pathname === '/docs/utils'}>
                  Utils
                </NavItem>
                <NavItem href="/docs/screens" active={router.pathname === '/docs/screens'}>
                  Screens
                </NavItem>
              </List>

              <List>
                <Text as="h4" size={3} sx={{ fontWeight: '500', mx: 5, my: 2 }} style={{ lineHeight: 1 }}>
                  Concept
                </Text>
                <NavItem href="/docs/base-styles" active={router.pathname === '/docs/base-styles'}>
                  Base Styles
                </NavItem>
                <NavItem href="/docs/variants" active={router.pathname === '/docs/variants'}>
                  Variants
                </NavItem>
                <NavItem href="/docs/token-aware-values" active={router.pathname === '/docs/token-aware-values'}>
                  Token-aware Values
                </NavItem>
                <NavItem href="/docs/responsive" active={router.pathname === '/docs/responsive'}>
                  Responsive
                </NavItem>
              </List>

              <List>
                <Text as="h4" size={3} sx={{ fontWeight: '500', mx: 5, my: 2 }} style={{ lineHeight: 1 }}>
                  API
                </Text>
                <NavItem href="/docs/createstyled" active={router.pathname === '/docs/createstyled'}>
                  createStyled
                </NavItem>
                <NavItem href="/docs/styled" active={router.pathname === '/docs/styled'}>
                  styled
                </NavItem>
                <NavItem href="/docs/css" active={router.pathname === '/docs/css'}>
                  css
                </NavItem>
                <NavItem href="/docs/createcss" active={router.pathname === '/docs/createcss'}>
                  createCss
                </NavItem>
                <NavItem href="/docs/getstyles" active={router.pathname === '/docs/getstyles'}>
                  getStyles
                </NavItem>
              </List>
              <Box sx={{ height: 8 }} />
            </ScrollArea>
          </Box>

          <Box
            pt={8}
            pb={9}
            // marginLeft={[0, 200, 250]}
            sx={{
              maxWidth: ['100%'],
              flex: 1,
              // display: [navOpen ? 'none' : 'block', 'block'],
            }}
          >
            <Container size={2}>
              <Box sx={{ flex: 1, minWidth: '0px' }}>
                <Heading size={3} mb={1} sx={{ fontWeight: 500 }}>
                  {frontMatter.title}
                </Heading>

                <Box my={6}>{children}</Box>
              </Box>

              {(previous || next) && (
                <Flex sx={{ justifyContent: 'space-between' }}>
                  {previous && (
                    <NextLink href={`/${previous.id}`} passHref>
                      <Link sx={{ display: 'inline-flex', alignItems: 'center' }}>
                        <CaretLeftIcon />
                        <Text size={4} sx={{ color: 'inherit', ml: 1 }}>
                          {previous.title}
                        </Text>
                      </Link>
                    </NextLink>
                  )}
                  {next && (
                    <NextLink href={`/${next.id}`} passHref>
                      <Link sx={{ display: 'inline-flex', alignItems: 'center', ml: 'auto' }}>
                        <Text size={4} sx={{ color: 'inherit', mr: 1 }}>
                          {next.title}
                        </Text>
                        <CaretRightIcon />
                      </Link>
                    </NextLink>
                  )}
                </Flex>
              )}

              {/* {(Boolean(frontMatter.previousId) || Boolean(frontMatter.nextId)) && (
              <Flex>
                {docsPosts.map((_frontMatter: FrontMatter) => {
                  return (
                    _frontMatter.id === frontMatter.previousId && (
                      <Box>
                        <Subheading>Previous</Subheading>
                        <Text>{_frontMatter.title}</Text>
                      </Box>
                    )
                  );
                })}
              </Flex>
            )} */}

              {/* {Boolean(frontMatter.relatedIds) && (
              <Container size={2} sx={{ maxWidth: '1090px' }}>
                <Divider size={2} my={8} mx="auto" />
                <Box>
                  <Text
                    as="h3"
                    size={2}
                    mb={3}
                    weight="medium"
                    sx={{
                      textAlign: 'center',
                      color: 'gray700',
                      letterSpacing: '.125em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Related articles
                  </Text>

                  <div>
                    {docsPosts.map((_frontMatter: FrontMatter) => {
                      return frontMatter.relatedIds.includes(_frontMatter.id) ? (
                        <div key={_frontMatter.id} children={_frontMatter} />
                      ) : null;
                    })}
                  </div>
                </Box>
              </Container>
            )} */}
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
      <ListItem
        {...props}
        as={Link}
        variant={active ? 'active' : undefined}
        px={5}
        sx={{
          minHeight: 6,
          backgroundColor: !active ? 'transparent' : undefined,
          ':hover': { textDecoration: 'none' },
        }}
      >
        <Text size={2} sx={{ color: active ? 'white' : undefined }}>
          {children}
        </Text>
      </ListItem>
    </NextLink>
  );
}
