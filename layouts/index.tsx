import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Container, Heading, Text, Box, Flex, Avatar, Link, Divider, TextProps, Subheading } from '@modulz/radix';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { docsPosts } from '../utils/docsPosts';

export default (frontMatter: FrontMatter) => {
  return ({ children }) => {
    const router = useRouter();

    const articleType = router.pathname.includes('/blog/') ? 'BLOG' : 'LEARN';

    const twitterShare = `
		https://twitter.com/intent/tweet?
		text="${frontMatter.title}" ${articleType === 'BLOG' ? 'blog' : 'learning blog'}
		.&url=https://modulz.app${router.route}
		`;

    return (
      <React.Fragment>
        <TitleAndMetaTags title={frontMatter.title} />
        <Container size={3} mt={6}>
          <Flex>
            <Box sx={{ mr: 4, width: '275px' }}>
              <Subheading as="h3" sx={{ lineHeight: 4 }}>
                Documentation
              </Subheading>

              <Box>
                <NextLink href="/docs/getting-started" passHref>
                  <Link>Motivation</Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/getting-started" passHref>
                  <Link>Getting Started</Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/getting-started" passHref>
                  <Link>Components</Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/getting-started" passHref>
                  <Link>Theme</Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/getting-started" passHref>
                  <Link>Media Queries</Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/getting-started" passHref>
                  <Link>Server Side Rendering</Link>
                </NextLink>
              </Box>

              <Box>
                <NextLink href="/docs/getting-started" passHref>
                  <Link>FAQs</Link>
                </NextLink>
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Heading size={3} mb={1} sx={{ fontWeight: 500 }}>
                {frontMatter.title}
              </Heading>

              <Box my={6}>{children}</Box>

              <Divider size={2} my={8} mx="auto" />

              <Box sx={{ textAlign: 'center' }}>
                <Text as="p" size={3} sx={{ lineHeight: 2 }}>
                  Share this post on{' '}
                  <Link href={twitterShare} target="_blank" title="Share this post on Twitter">
                    Twitter
                  </Link>
                </Text>
              </Box>
            </Box>

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
            )}
          </Flex>
        </Container>
      </React.Fragment>
    );
  };
};

function Separator({ sx }: TextProps) {
  return (
    <Text mx={2} sx={{ color: 'gray700', lineHeight: 0, ...sx }} aria-hidden>
      &#xB7;
    </Text>
  );
}
