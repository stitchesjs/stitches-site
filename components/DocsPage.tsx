import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Text, Box, Flex, Badge, IconButton } from '@modulz/design-system';
import { FrontMatter } from '../types';
import { ScrollArea } from '../components/ScrollArea';
import { StitchesLogo } from '../components/StitchesLogo';
import { docsRoutes } from '../utils/docsRoutes';
import { HamburgerIcon } from '@modulz/radix-icons';

function DocsPage({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
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
          borderColor: '$gray300',
          WebkitOverflowScrolling: 'touch',
          overflowX: 'hidden',

          bp2: {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: '250px',
            borderRight: '1px solid',
            borderBottom: '0',
            borderColor: '$gray300',
          },
        }}
      >
        <ScrollArea>
          <Flex css={{ alignItems: 'center', p: '$4' }}>
            <NextLink href="/" passHref>
              <Box
                as="a"
                css={{
                  color: '$hiContrast',
                  display: 'inline-flex',
                  ':focus': { boxShadow: 'none' },
                }}
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
            <Badge variant="yellow" css={{ ml: '$3' }}>
              Beta
            </Badge>
            <Box css={{ ml: 'auto', mr: '$6', bp2: { display: 'none' } }}>
              <IconButton
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                state={isOpen ? 'active' : undefined}
              >
                <HamburgerIcon />
              </IconButton>
            </Box>
          </Flex>

          <Box
            style={{}}
            css={{
              display: isOpen ? 'block' : 'none',
              bp2: {
                display: 'block',
              },
            }}
          >
            {docsRoutes.map((section) => (
              <Box key={section.label} css={{ mb: '$4' }}>
                <NavHeading>{section.label}</NavHeading>
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
            <NavHeading>Community</NavHeading>
            <NavItem href="https://github.com/modulz/stitches">
              <Text size="2" css={{ color: 'inherit', lineHeight: '1' }}>
                Github
              </Text>
              <Flex css={{ ml: '$1', color: '$gray500' }}>
                <ExternalIcon />
              </Flex>
            </NavItem>
            <NavItem href="https://twitter.com/stitchesjs">
              <Text size="2" css={{ color: 'inherit', lineHeight: '1' }}>
                Twitter
              </Text>
              <Flex css={{ ml: '$1', color: '$gray500' }}>
                <ExternalIcon />
              </Flex>
            </NavItem>
            <Box css={{ height: '$5', bp2: { height: '$8' } }} />
          </Box>
        </ScrollArea>
      </Box>

      <Box
        css={{
          maxWidth: '100%',
          flex: 1,
          pt: '$8',
          pb: '$9',
          bp2: {
            pl: '250px',
          },
        }}
      >
        {children}
      </Box>
    </Flex>
  );
}

export { DocsPage };

function NavHeading({ children }: { children: React.ReactNode }) {
  return (
    <Text
      as="h4"
      size="3"
      css={{
        fontWeight: 500,
        px: '$5',
        py: '$2',
      }}
    >
      {children}
    </Text>
  );
}

type NavItemProps = { children: React.ReactNode; active?: boolean; href: string };

function NavItem({ children, active, href, ...props }: NavItemProps) {
  const isExternal = href.startsWith('http');
  return (
    <Box as={isExternal ? 'span' : NextLink} {...(isExternal ? {} : { href, passHref: true })}>
      <Box
        {...props}
        {...(isExternal ? { href, target: '_blank' } : {})}
        as="a"
        css={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: '$hiContrast',
          py: '$2',
          px: '$5',
          backgroundColor: active ? '$blue300' : 'transparent',
          userSelect: 'none',
          minHeight: '$6',
          transition: 'background-color 50ms linear',
          ':hover': {
            backgroundColor: active ? '$blue300' : '$blue200',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
        fill="currentColor"
      />
    </svg>
  );
}
