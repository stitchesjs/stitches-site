import { Box, Button, ButtonProps, Subheading, theme as radixTheme } from '@modulz/radix';
import React, { useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { useClipboard } from '../utils/useClipboard';
import { styled } from '../css';

const { colors } = radixTheme;

const theme: any = {
  plain: {
    color: colors.gray800,
    backgroundColor: colors.gray100,
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'hsl(330, 75%, 45%)',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: colors.gray600,
      },
    },
    {
      types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'],
      style: {
        color: 'hsl(180, 55%, 35%)',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: 'hsl(195, 90%, 35%)',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: 'hsl(330, 75%, 45%)',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: 'hsl(180, 50%, 35%)',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: colors.blue700,
      },
    },
  ],
};

export const liveEditorStyle: React.CSSProperties = {
  fontSize: radixTheme.fontSizes[2],
  fontFamily: radixTheme.fonts.mono,
  fontWeight: 400,
  lineHeight: 1.5,
};

const StyledLivePreview = ({ live, ...props }: { live?: boolean }) => (
  <Box
    sx={{
      p: 3,
      boxShadow: `0 0 0 1px ${colors.gray300}`,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      borderBottomLeftRadius: live ? 0 : 3,
      borderBottomRightRadius: live ? 0 : 3,
    }}
  >
    <LivePreview {...props} />
  </Box>
);

const CodeContainer = ({ live, children }: { live?: boolean; children: React.ReactNode }) => (
  <Box
    sx={{
      px: 2,
      pt: 4,
      pb: 3,
      borderTopLeftRadius: live ? 0 : 2,
      borderTopRightRadius: live ? 0 : 2,
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2,
      bg: 'gray100',
      boxShadow: `0 0 0 1px ${colors.gray300}`,
    }}
    children={children}
  />
);

const CopyButton = (props: ButtonProps) => (
  <Button
    variant="ghost"
    sx={{
      position: 'absolute',
      textTransform: 'uppercase',
      top: 2,
      zIndex: 1,
      right: 2,
    }}
    {...props}
  />
);

export function CodeBlock({ className, live, manual, render, children, ...props }) {
  const [editorCode, setEditorCode] = useState(children.trim());

  const language = className && className.replace(/language-/, '');
  const { hasCopied, onCopy } = useClipboard(editorCode);

  const liveProviderProps = {
    theme,
    language,
    code: editorCode,
    scope: {
      styled,
    },
    noInline: manual,
    ...props,
  };

  const onChange = (newCode) => setEditorCode(newCode.trim());

  if (language === 'jsx' && live === true) {
    return (
      <LiveProvider {...liveProviderProps}>
        <StyledLivePreview live={live} />
        <Box sx={{ position: 'relative', zIndex: '1' }}>
          <CodeContainer live={live}>
            <LiveEditor onChange={onChange} style={liveEditorStyle} />
          </CodeContainer>
          <CopyButton onClick={onCopy}>{hasCopied ? 'copied' : 'copy'}</CopyButton>
          <Subheading
            as="span"
            sx={{
              position: 'absolute',
              width: '100%',
              top: 2,
              zIndex: '0',
              textAlign: 'center',
              pointerEvents: 'none',
              color: 'gray500',
            }}
          >
            Editable Example
          </Subheading>
        </Box>
        <LiveError
          style={{
            fontFamily: radixTheme.fonts.normal,
            fontSize: radixTheme.fontSizes[3],
            padding: radixTheme.space[2],
            overflowX: 'auto',
            color: 'white',
            backgroundColor: colors.red600,
          }}
        />
      </LiveProvider>
    );
  }

  if (render) {
    return (
      <LiveProvider {...liveProviderProps}>
        <StyledLivePreview />
      </LiveProvider>
    );
  }

  return (
    <LiveProvider disabled {...liveProviderProps}>
      <CodeContainer live={live}>
        <LiveEditor style={liveEditorStyle} />
      </CodeContainer>
    </LiveProvider>
  );
}

CodeBlock.defaultProps = {
  mountStylesheet: false,
};
