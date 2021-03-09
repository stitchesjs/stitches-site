import NextLink from 'next/link';
import { Box, Container, Separator, Text, Flex, Link, Badge } from '@modulz/design-system';
import { StitchesLogo } from '@components/StitchesLogo';
import { parseISO, format } from 'date-fns';
import { authors } from '../../data/authors';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { getAllBlogPostsFrontmatter } from '@lib/mdx';

export default function Blog({ frontmatters }) {
  return (
    <Box>
      <TitleAndMetaTags title="Blog — Stitches" description="More about what we're up to." />
      <Box as="header" css={{ py: '$4', px: '$4', mb: '$7' }}>
        <NextLink href="/" passHref>
          <Box
            as="a"
            css={{
              color: '$hiContrast',
              display: 'inline-flex',
              '&:focus': {
                boxShadow: 'none',
              },
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
      </Box>
      <Container size="3" css={{ textAlign: 'center', mb: '$4' }}>
        <Text as="h1" size={{ initial: '6', bp2: '7' }} css={{ mb: '$4', fontWeight: 500 }}>
          Blog
        </Text>
        <Text as="h2" size={{ initial: '4', bp2: '6' }} css={{ color: '$gray900', mb: '$4' }}>
          More about what we're up to.
        </Text>
      </Container>

      <Container size="2" css={{ my: '$8' }}>
        {frontmatters.map((frontmatter) => (
          <Box
            key={frontmatter.title}
            css={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box css={{ mb: '$7' }}>
              <NextLink href={`/blog/${frontmatter.slug}`} passHref>
                <Link>
                  <Text
                    as="h3"
                    size="6"
                    css={{ display: 'inline', fontWeight: 500, lineHeight: '30px' }}
                  >
                    {frontmatter.title}
                  </Text>
                </Link>
              </NextLink>
              <Flex css={{ mt: '$2', alignItems: 'center' }}>
                <Text as="time" size="2" css={{ color: '$gray900' }}>
                  {format(parseISO(frontmatter.publishedAt), 'MMMM yyyy')}
                </Text>
                <Text size="2" css={{ color: '$gray900' }}>
                  &nbsp;by {authors[frontmatter.by].name}
                </Text>
                {frontmatter.type === 'changelog' && <Badge css={{ ml: '$2' }}>Changelog</Badge>}
              </Flex>
              <Text as="p" size="4" css={{ lineHeight: '25px', mt: '$2', color: '$gray900' }}>
                {frontmatter.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export function getStaticProps() {
  const frontmatters = getAllBlogPostsFrontmatter();
  const sortedFrontmatters = frontmatters.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return { props: { frontmatters: sortedFrontmatters } };
}
