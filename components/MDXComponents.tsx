import React from 'react';
import NextLink from 'next/link';
import NextRouter from 'next/router';
import rangeParser from 'parse-numeric-range';
import * as DS from '@modulz/design-system';
import { Link2Icon, ChevronDownIcon } from '@modulz/radix-icons';
import { Preview } from './Preview';
import { DemoButton } from './DemoButton';
import { Pre } from './Pre';

const OffsetBox = DS.styled('div', {
  variants: {
    size: {
      wide: {
        '@bp2': {
          mx: '-50px',
        },
      },
      hero: {
        mx: '-35px',
        '@bp2': {
          mx: '-90px',
        },
        '@bp3': {
          mx: '-166px',
        },
      },
    },
  },
});

const LinkHeading = (props) => (
  <DS.Text {...props}>
    <DS.Box
      as="a"
      href={`#${props.id}`}
      css={{
        fontSize: 'inherit',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        color: 'inherit',
        svg: { opacity: 0 },
        '&:hover svg': { opacity: 1 },
      }}
    >
      <span>{props.children}</span>
      <DS.Box as="span" css={{ ml: '$2', color: '$slate500' }}>
        <Link2Icon />
      </DS.Box>
    </DS.Box>
  </DS.Text>
);

export const components = {
  ...DS,
  DemoButton,
  Preview: (props) => <Preview {...props} css={{ mt: '$5' }} />,
  RegisterLink: ({ id, index, href }) => {
    const isExternal = href.startsWith('http');

    React.useEffect(() => {
      const codeBlock = document.getElementById(id);
      if (!codeBlock) return;

      const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
      const target = allHighlightWords[index - 1];
      if (!target) return;

      const addClass = () => target.classList.add('on');
      const removeClass = () => target.classList.remove('on');
      const addClick = () => (isExternal ? window.location.replace(href) : NextRouter.push(href));

      target.addEventListener('mouseenter', addClass);
      target.addEventListener('mouseleave', removeClass);
      target.addEventListener('click', addClick);

      return () => {
        target.removeEventListener('mouseenter', addClass);
        target.removeEventListener('mouseleave', removeClass);
        target.removeEventListener('click', addClick);
      };
    }, []);

    return null;
  },
  h: ({ id, index, ...props }) => {
    const triggerRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
      const trigger = triggerRef.current;

      const codeBlock = document.getElementById(id);
      if (!codeBlock) return;

      const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
      const targetIndex = rangeParser(index).map((i) => i - 1);
      // exit if the `index` passed is bigger than the total number of highlighted words
      if (Math.max(...targetIndex) >= allHighlightWords.length) return;

      const addClass = () => targetIndex.forEach((i) => allHighlightWords[i].classList.add('on'));
      const removeClass = () =>
        targetIndex.forEach((i) => allHighlightWords[i].classList.remove('on'));

      trigger.addEventListener('mouseenter', addClass);
      trigger.addEventListener('mouseleave', removeClass);

      return () => {
        trigger.removeEventListener('mouseenter', addClass);
        trigger.removeEventListener('mouseleave', removeClass);
      };
    }, []);

    return <DS.Code css={{ cursor: 'default' }} ref={triggerRef} {...props} />;
  },
  h1: (props) => (
    <DS.Text size="6" {...props} css={{ mb: '$8', fontWeight: 500, ...props.css }} as="h1" />
  ),
  h2: (props) => (
    <DS.Text
      size="6"
      {...props}
      css={{ mt: '$2', mb: '$6', color: '$slate900', lineHeight: '30px', ...props.css }}
      as="h2"
    />
  ),
  h3: (props) => (
    <LinkHeading
      size="7"
      {...props}
      css={{
        mt: '$7',
        mb: '$1',

        fontWeight: 500,
        ...props.css,
      }}
      as="h3"
    />
  ),
  h4: (props) => (
    <LinkHeading
      size="6"
      {...props}
      css={{
        mt: '$7',
        mb: '$1',
        fontSize: '19px',
        lineHeight: '23px',
        fontWeight: 500,
        ...props.css,
      }}
      as="h3"
    />
  ),
  pre: ({ children }) => <>{children}</>,
  code: ({ className, children, id, showLineNumbers = false, collapsed = false }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
    const collapsedStyles = {
      height: '100px',
      position: 'relative',
      '&::after': {
        content: `''`,
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to bottom, transparent 30%, $$background)',
      },
    };
    return (
      <Pre
        as="pre"
        css={{
          my: '$5',
          ...(isCollapsed ? (collapsedStyles as any) : {}),
          '[data-preview] + &': {
            marginTop: 1,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        }}
        className={className}
        id={id}
        data-line-numbers={showLineNumbers}
      >
        {isCollapsed && (
          <DS.Box
            css={{
              position: 'absolute',
              left: 0,
              zIndex: 1,
              bottom: '$2',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <DS.Button onClick={() => setIsCollapsed(false)}>
              <ChevronDownIcon /> Show code
            </DS.Button>
          </DS.Box>
        )}

        <code className={className} children={children} />
      </Pre>
    );
  },
  p: (props) => (
    <DS.Text
      size="4"
      {...props}
      css={{ mb: '$3', lineHeight: '27px', letterSpacing: 0, ...props.css }}
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
    if (href.startsWith('#')) {
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
  hr: (props) => <DS.Separator size="2" {...props} css={{ my: '$6', mx: 'auto', ...props.css }} />,
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
    <DS.Text
      {...props}
      css={{ ...props.css, display: 'inline', fontSize: 'inherit', fontWeight: 500 }}
    />
  ),
  img: ({ ...props }) => (
    <DS.Box css={{ my: '$6' }}>
      <DS.Box
        as="img"
        {...props}
        css={{ maxWidth: '100%', verticalAlign: 'middle', ...props.css }}
      />
    </DS.Box>
  ),
  Image: ({ children, size, ...props }) => (
    <DS.Box as="figure" css={{ mx: '0', my: '$6' }}>
      <OffsetBox size={size}>
        <DS.Image
          {...props}
          css={{
            maxWidth: '100%',
            verticalAlign: 'middle',
          }}
        />
      </OffsetBox>
      <DS.Text
        as="figcaption"
        size="3"
        css={{
          lineHeight: '23px',
          color: '$slate900',
          mt: '$2',
        }}
      >
        {children}
      </DS.Text>
    </DS.Box>
  ),
  Video: ({
    small,
    large,
    src,
    children = '',
    muted = true,
    autoPlay = true,
    controls,
    size,
    ...props
  }) => (
    <DS.Box as="figure" css={{ mx: '0', my: '$6' }}>
      <OffsetBox size={size}>
        <video
          src={src}
          autoPlay={autoPlay}
          playsInline
          muted={muted}
          controls={controls}
          loop
          style={{ width: '100%', display: 'block' }}
        ></video>
      </OffsetBox>
      <DS.Text
        as="figcaption"
        size="3"
        css={{
          lineHeight: '23px',
          color: '$slate900',
          mt: '$2',
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
        borderLeft: `1px solid ${DS.theme.colors.gray400}`,
        color: 'orange',
        '& p': {
          fontSize: '$3',
          color: '$slate900',
          lineHeight: '25px',
        },
      }}
      {...props}
    />
  ),
};
