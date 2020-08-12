import NextLink from 'next/link';
import * as Radix from '@modulz/radix';
import { LinkAngledIcon } from '@modulz/radix-icons';
import { CodeBlock } from './CodeBlock';

const LinkHeading = (props) => (
  <Radix.Heading {...props} sx={{ ...props.sx, scrollMarginTop: Radix.theme.space[9] }}>
    <NextLink href={`#${props.id}`} passHref>
      <Radix.Link
        variant="ghost"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          svg: { opacity: 0 },
          ':hover svg': { opacity: 1 },
        }}
      >
        {props.children}{' '}
        <Radix.Box as="span" sx={{ ml: 2, color: 'gray500' }}>
          <LinkAngledIcon />
        </Radix.Box>
      </Radix.Link>
    </NextLink>
  </Radix.Heading>
);

export const MDXComponents = {
  ...Radix,
  h1: (props) => <Radix.Heading size={5} mb={8} sx={{ fontWeight: 500 }} {...props} as="h1" />,
  h2: (props) => <LinkHeading size={2} mt={6} mb={2} sx={{ fontWeight: 500 }} {...props} as="h2" />,
  h3: (props) => (
    <Radix.Heading mt={6} mb={1} sx={{ fontWeight: 500, fontSize: 5, lineHeight: '30px' }} {...props} as="h3" />
  ),
  code: (props) => (
    <Radix.Box my={5}>
      <CodeBlock {...props} />
    </Radix.Box>
  ),
  h4: (props) => <Radix.Heading size={0} mt={3} mb={1} {...props} as="h4" />,
  p: (props) => (
    <Radix.Text size={4} mb={3} {...props} sx={{ lineHeight: '30px', letterSpacing: 0, ...props.sx }} as="p" />
  ),
  a: ({ href = '', ...props }) => {
    if (href.startsWith('/')) {
      return (
        <NextLink href={href} passHref>
          <Radix.Link {...props} variant="underline" />
        </NextLink>
      );
    }
    return <Radix.Link href={href} {...props} variant="underline" target="_blank" rel="noopener" />;
  },
  hr: (props) => <Radix.Divider size={2} my={6} mx="auto" {...props} />,
  inlineCode: (props) => (
    <Radix.Code
      variant="fade"
      {...props}
      sx={{ fontSize: 'max(12px,83%)', pb: '.33em', position: 'relative', top: '-.02em', ...props.sx }}
    />
  ),
  ul: (props) => <Radix.Box mb={3} {...props} as="ul" />,
  ol: (props) => <Radix.Box mb={3} {...props} as="ol" />,
  li: (props) => (
    <li>
      <Radix.Text size={4} {...props} sx={{ lineHeight: '30px', letterSpacing: 0, ...props.sx }} />
    </li>
  ),
  table: (props) => (
    <Radix.Box sx={{ overflow: 'auto' }}>
      <Radix.Table mt={0} mb={3} {...props} sx={{ minWidth: 600, ...props.sx }} />
    </Radix.Box>
  ),
  thead: Radix.Thead,
  tbody: Radix.Tbody,
  tfoot: Radix.Tfoot,
  tr: Radix.Tr,
  td: Radix.Td,
  th: Radix.Th,
  strong: (props) => <Radix.Text {...props} sx={{ ...props.sx, fontSize: 'inherit', fontWeight: 500 }} />,
  img: ({ ...props }) => (
    <Radix.Box mx={[-5, -5, -7]} my={6}>
      <Radix.Image alt="" {...props} sx={{ maxWidth: '100%', verticalAlign: 'middle', ...props.sx }} />
    </Radix.Box>
  ),
  Image: ({ ...props }) => (
    <Radix.Image alt="" {...props} sx={{ maxWidth: '100%', verticalAlign: 'middle', ...props.sx }} />
  ),
  blockquote: (props) => (
    <Radix.Box
      my={7}
      pl={4}
      sx={{ borderLeft: (theme) => `1px solid ${theme.colors.gray300}`, color: 'gray300' }}
      {...props}
    />
  ),
};
