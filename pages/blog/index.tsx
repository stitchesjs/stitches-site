import NextLink from 'next/link';
import { Box, Container, Divider, Text, Link, Badge } from '@modulz/design-system';
import { StitchesLogo } from '../../components/StitchesLogo';
import { blogPosts } from '../../utils/blogPosts';
import { parseISO, format } from 'date-fns';
import { authors } from '../../data/authors';
import { TitleAndMetaTags } from '../../components/TitleAndMetaTags';

export default function Home() {
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
              ':focus': {
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
        <Text
          size={{ initial: '8', bp2: '9' }}
          css={{ fontWeight: 500, lineHeight: '35px', bp2: { lineHeight: '55px' } }}
        >
          Blog
        </Text>
      </Container>

      <Container size="2" css={{ textAlign: 'center' }}>
        <Text
          as="h2"
          size={{ initial: '5', bp2: '6' }}
          css={{
            color: '$gray600',
            textAlign: 'center',
            lineHeight: '25px',
            bp2: { lineHeight: '30px' },
          }}
        >
          More about what we're up to.
        </Text>
      </Container>

      <Container size="2" css={{ my: '$8' }}>
        {blogPosts.map((frontMatter, index) => (
          <Box
            key={frontMatter.title}
            css={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box>
              <NextLink href={`/${frontMatter.id}`} passHref>
                <Link css={{ border: 'none' }}>
                  <Text as="h3" size="5" css={{ fontWeight: 500, lineHeight: '35px' }}>
                    {frontMatter.title}
                    {frontMatter.type === 'changelog' && (
                      <Badge css={{ ml: '$2', fontWeight: 400, verticalAlign: 'middle' }}>
                        Changelog
                      </Badge>
                    )}
                  </Text>
                </Link>
              </NextLink>
              <Box>
                <Text as="time" size="3" css={{ lineHeight: '30px', color: '$gray500' }}>
                  <time>{format(parseISO(frontMatter.publishedAt), 'MMMM ‘yy')}</time> by{' '}
                  {authors[frontMatter.by].name}
                </Text>
              </Box>

              <Text as="p" size="4" css={{ lineHeight: '30px', my: '$4' }}>
                {frontMatter.description}
              </Text>

              <Text as="p" size="4" css={{ lineHeight: '30px' }}>
                <NextLink href={`/${frontMatter.id}`} passHref>
                  <Link variant="blue">Read more</Link>
                </NextLink>
              </Text>
            </Box>
            {blogPosts.length - 1 > index && (
              <Divider size="large" css={{ my: '$8', mx: 'auto' }} />
            )}
          </Box>
        ))}
      </Container>
    </Box>
  );
}
