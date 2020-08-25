import NextLink from 'next/link';
import * as DS from '@modulz/design-system';
import { LinkAngledIcon } from '@modulz/radix-icons';
import { CodeBlock } from './CodeBlock';

const LinkHeading = (props) => (
  <DS.Text {...props} css={{ ...props.css, scrollMarginTop: DS.theme.space[9] }}>
    <NextLink href={`#${props.id}`} passHref>
      <DS.Box
        as="a"
        css={{
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          svg: { opacity: 0 },
          ':hover svg': { opacity: 1 },
        }}
      >
        {props.children}{' '}
        <DS.Box as="span" css={{ ml: 2, color: 'gray500' }}>
          <LinkAngledIcon />
        </DS.Box>
      </DS.Box>
    </NextLink>
  </DS.Text>
);

export const MDXComponents = {
  ...DS,
  h1: (props) => (
    <DS.Text size={5} {...props} css={{ mb: '8', fontWeight: 500, ...props.css }} as="h1" />
  ),
  h2: (props) => (
    <LinkHeading
      size={2}
      {...props}
      css={{ mt: '6', mb: '2', fontWeight: 500, ...props.css }}
      as="h2"
    />
  ),
  h3: (props) => (
    <DS.Text
      css={{ mt: '6', mb: '1', fontWeight: 500, fontSize: 5, lineHeight: '30px' }}
      {...props}
      as="h3"
    />
  ),
  code: (props) => (
    <DS.Box css={{ my: '5' }}>
      <CodeBlock {...props} />
    </DS.Box>
  ),
  h4: (props) => <DS.Text size={0} {...props} css={{ mt: '3', mb: '1', ...props.css }} as="h4" />,
  p: (props) => (
    <DS.Text
      size={4}
      {...props}
      css={{ mb: '3', lineHeight: '30px', letterSpacing: 0, ...props.css }}
      as="p"
    />
  ),
  a: ({ href = '', ...props }) => {
    if (href.startsWith('/')) {
      return (
        <NextLink href={href} passHref>
          <DS.Box as="a" {...props} />
        </NextLink>
      );
    }
    return <DS.Box as="a" href={href} {...props} target="_blank" rel="noopener" />;
  },
  hr: (props) => <DS.Divider size={2} {...props} css={{ my: '6', mx: 'auto', ...props.css }} />,
  inlineCode: (props) => <DS.Code {...props} />,
  ul: (props) => <DS.Box {...props} css={{ mb: '3', ...props.css }} as="ul" />,
  ol: (props) => <DS.Box {...props} css={{ mb: '3', ...props.css }} as="ol" />,
  li: (props) => (
    <li>
      <DS.Text size={4} {...props} css={{ lineHeight: '30px', letterSpacing: 0, ...props.css }} />
    </li>
  ),
  table: (props) => (
    <DS.Box css={{ overflow: 'auto' }}>
      <DS.Table {...props} css={{ mt: '0', mb: '3', minWidth: 600, ...props.css }} />
    </DS.Box>
  ),
  thead: DS.Thead,
  tbody: DS.Tbody,
  tfoot: DS.Tfoot,
  tr: DS.Tr,
  td: DS.Td,
  th: DS.Th,
  strong: (props) => (
    <DS.Text {...props} css={{ ...props.css, fontSize: 'inherit', fontWeight: 500 }} />
  ),
  img: ({ ...props }) => (
    <DS.Box css={{ my: '6' }}>
      <DS.Image
        alt=""
        {...props}
        css={{ maxWidth: '100%', verticalAlign: 'middle', ...props.css }}
      />
    </DS.Box>
  ),
  Image: ({ ...props }) => (
    <DS.Image alt="" {...props} css={{ maxWidth: '100%', verticalAlign: 'middle', ...props.css }} />
  ),
  blockquote: (props) => (
    <DS.Box
      css={{
        my: '7',
        pl: '4',
        borderLeft: `1px solid ${DS.theme.colors.gray300}`,
        color: 'gray300',
      }}
      {...props}
    />
  ),
};
