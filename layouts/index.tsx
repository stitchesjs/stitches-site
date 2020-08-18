import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
  Container,
  Heading,
  Text,
  Box,
  Flex,
  Link,
  List,
  ListItem,
  Divider,
  CardLink,
  AspectRatio,
  Grid,
} from '@modulz/radix';
import { CaretLeftIcon, CaretRightIcon } from '@modulz/radix-icons';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { ScrollArea } from '../components/ScrollArea';
import { docsRoutes, allDocsRoutes } from '../utils/docsRoutes';
import { docsPosts, getPostById } from '../utils/docsPosts';

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
          sx={{
            display: ['block', 'flex'],
            minHeight: (theme) => ['auto', `calc(100vh - ${theme.sizes[7]})`],
          }}
        >
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
              {docsRoutes.map((section) => (
                <List key={section.label}>
                  <Text
                    as="h4"
                    size={3}
                    sx={{ fontWeight: '500', mx: 5, my: 2 }}
                    style={{ lineHeight: 1 }}
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
                </List>
              ))}

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
                <Flex aria-label="Pagination navigation" sx={{ justifyContent: 'space-between' }}>
                  {previous && (
                    <NextLink href={`/${previous.id}`} passHref>
                      <Link
                        aria-label={`Previous page: ${previous.title}`}
                        sx={{ display: 'inline-flex', alignItems: 'center' }}
                      >
                        <CaretLeftIcon />
                        <Text size={4} sx={{ color: 'inherit', ml: 1 }}>
                          {previous.title}
                        </Text>
                      </Link>
                    </NextLink>
                  )}
                  {next && (
                    <NextLink href={`/${next.id}`} passHref>
                      <Link
                        aria-label={`Previous page: ${next.title}`}
                        sx={{ display: 'inline-flex', alignItems: 'center', ml: 'auto' }}
                      >
                        <Text size={4} sx={{ color: 'inherit', mr: 1 }}>
                          {next.title}
                        </Text>
                        <CaretRightIcon />
                      </Link>
                    </NextLink>
                  )}
                </Flex>
              )}

              {Boolean(frontMatter.relatedIds) && (
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
                      Related
                    </Text>

                    <Grid sx={{ my: 4, gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 5 }}>
                      {frontMatter.relatedIds.map((relatedPostId) => {
                        const post = getPostById(relatedPostId);
                        return (
                          <CardLink key={post.id} href={`/${post.id}`} sx={{ padding: 0 }}>
                            <Box sx={{ p: 4 }}>
                              <Text
                                as="h6"
                                size={4}
                                sx={{ lineHeight: 1, fontWeight: '500', mb: 2 }}
                              >
                                {post.title}
                              </Text>
                              <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: 2 }}>
                                {post.description}
                              </Text>
                            </Box>
                          </CardLink>
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
