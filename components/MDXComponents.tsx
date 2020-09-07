import NextLink from 'next/link';
import * as DS from '@modulz/design-system';
import { LinkAngledIcon } from '@modulz/radix-icons';
import { CodeBlock } from './CodeBlock';

const LinkHeading = (props) => (
  <DS.Text {...props} css={{ ...props.css, scrollMarginTop: DS.theme.space.$9 }}>
    <NextLink href={`#${props.id}`} passHref>
      <DS.Box
        as="a"
        css={{
          fontSize: 'inherit',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          svg: { opacity: 0 },
          color: 'inherit',
          ':hover svg': { opacity: 1 },
        }}
      >
        {props.children}{' '}
        <DS.Box as="span" css={{ ml: '$2', color: '$gray500' }}>
          <LinkAngledIcon />
        </DS.Box>
      </DS.Box>
    </NextLink>
  </DS.Text>
);

export const MDXComponents = {
  ...DS,
  h1: (props) => (
    <DS.Text size="6" {...props} css={{ mb: '$8', fontWeight: 500, ...props.css }} as="h1" />
  ),
  h2: (props) => (
    <DS.Text
      size="6"
      {...props}
      css={{ mt: '$2', mb: '$6', color: '$gray600', lineHeight: '30px', ...props.css }}
      as="h2"
    />
  ),
  h3: (props) => (
    <LinkHeading
      size="7"
      {...props}
      css={{ mt: '$7', mb: '$1', lineHeight: '35px', fontWeight: 500, ...props.css }}
      as="h3"
    />
  ),
  h4: (props) => (
    <LinkHeading
      size="6"
      {...props}
      css={{ mt: '$7', mb: '$1', lineHeight: '25px', fontWeight: 500, ...props.css }}
      as="h3"
    />
  ),
  code: (props) => (
    <DS.Box css={{ my: '$5' }}>
      <CodeBlock {...props} />
    </DS.Box>
  ),
  p: (props) => (
    <DS.Text
      size="4"
      {...props}
      css={{ mb: '$3', lineHeight: '30px', letterSpacing: 0, ...props.css }}
      as="p"
    />
  ),
  a: ({ href = '', ...props }) => {
    if (href.startsWith('/')) {
      return (
        <NextLink href={href} passHref>
          <DS.Link
            {...props}
            css={{
              color: 'inherit',
              fontSize: 'inherit',
              ...props.css,
            }}
          />
        </NextLink>
      );
    }
    return (
      <DS.Link
        variant="blue"
        href={href}
        {...props}
        css={{
          fontSize: 'inherit',
          ...props.css,
        }}
        target="_blank"
        rel="noopener"
      />
    );
  },
  hr: (props) => (
    <DS.Divider size="large" {...props} css={{ my: '$6', mx: 'auto', ...props.css }} />
  ),
  inlineCode: (props) => <DS.Code {...props} />,
  ul: (props) => (
    <DS.Box {...props} css={{ color: '$hiContrast', mb: '$3', ...props.css }} as="ul" />
  ),
  ol: (props) => (
    <DS.Box {...props} css={{ color: '$hiContrast', mb: '$3', ...props.css }} as="ol" />
  ),
  li: (props) => (
    <li>
      <DS.Text size="4" {...props} css={{ lineHeight: '30px', letterSpacing: 0, ...props.css }} />
    </li>
  ),
  strong: (props) => (
    <DS.Text {...props} css={{ ...props.css, fontSize: 'inherit', fontWeight: 500 }} />
  ),
  img: ({ ...props }) => (
    <DS.Box css={{ my: '$6' }}>
      <DS.Image
        alt=""
        {...props}
        css={{ maxWidth: '100%', verticalAlign: 'middle', ...props.css }}
      />
    </DS.Box>
  ),
  Image: ({
    children,
    size,
    ...props
  }: {
    children?: React.ReactNode;
    size?: 'normal' | 'wide';
  }) => (
    <DS.Box as="figure" css={{ mx: '0', my: '$6' }}>
      <DS.Box
        css={{
          border: '1px solid $gray300',
          overflow: 'hidden',
          mx: size === 'wide' && '-35px',
          bp2: {
            mx: size === 'wide' && '-90px',
          },
          bp3: {
            mx: size === 'wide' && '-166px',
          },
        }}
      >
        <DS.Image
          {...props}
          css={{
            maxWidth: '100%',
            verticalAlign: 'middle',
          }}
        />
      </DS.Box>
      <DS.Text
        as="figcaption"
        size="3"
        css={{
          lineHeight: '25px',
          letterSpacing: 0,
          color: '$gray600',
          pt: '$4',
          pb: '$2',
        }}
      >
        {children}
      </DS.Text>
    </DS.Box>
  ),
  blockquote: (props) => (
    <DS.Box
      css={{
        mt: '$6',
        mb: '$5',
        pl: '$4',
        borderLeft: `1px solid ${DS.theme.colors.$gray400}`,
        color: 'orange',
        '& p': {
          fontSize: '$3',
          color: '$gray600',
          lineHeight: '25px',
        },
      }}
      {...props}
    />
  ),
};
