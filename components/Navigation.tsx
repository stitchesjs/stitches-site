import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Container, Text, Box, Flex, Divider, IconButton } from '@modulz/design-system';
import { ScrollArea } from '../components/ScrollArea';
import { StitchesLogo } from '../components/StitchesLogo';
import { ThemeToggle } from '../components/ThemeToggle';
import { docsRoutes, allDocsRoutes } from '../utils/docsRoutes';
import { getPostById } from '../utils/docsPosts';
import {FrontMatter} from '../types'

export const Navigation = ({ toggleTheme }: any) => {
    const router = useRouter();

    const currentPageId = router.pathname.substr(1);
    const currentPageIndex = allDocsRoutes.findIndex((page) => page.id === currentPageId);
    const previous = allDocsRoutes[currentPageIndex - 1];
    const next = allDocsRoutes[currentPageIndex + 1];

    return (
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
            <Flex css={{ alignItems: 'center', justifyContent: 'space-between', p: '4' }}>
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
              <Box css={{ ml: '4', bp2: { ml: '4' } }}>
                {/* <ThemeToggle  toggleTheme={}/> */}
              </Box>
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
          </Box>
        </ScrollArea>
      </Box>
    )
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