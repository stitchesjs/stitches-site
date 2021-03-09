// Inspired by https://github.com/rexxars/react-refractor
import React from 'react';
import refractor from 'refractor/core';
import js from 'refractor/lang/javascript';
import jsx from 'refractor/lang/jsx';
import bash from 'refractor/lang/bash';
import css from 'refractor/lang/css';
import diff from 'refractor/lang/diff';
import hastToHtml from 'hast-util-to-html';
import rangeParser from 'parse-numeric-range';
import highlightLine from '@lib/rehype-highlight-line';
import highlightWord from '@lib/rehype-highlight-word';

refractor.register(js);
refractor.register(jsx);
refractor.register(bash);
refractor.register(css);
refractor.register(diff);

type CodeBlockProps = React.ComponentProps<'pre'> & {
  language: 'js' | 'jsx' | 'bash' | 'css' | 'diff';
  value: string;
  line?: string;
};

export function CodeBlock({ language, value, line, className, ...props }: CodeBlockProps) {
  let result = refractor.highlight(value, language);

  if (line) {
    result = highlightLine(result, rangeParser(line));
  }

  result = highlightWord(result);

  // convert to html
  result = hastToHtml(result);

  const classes = `language-${language} ${className}`;
  return (
    <pre className={classes} {...props}>
      <code className={classes} dangerouslySetInnerHTML={{ __html: result }} />
    </pre>
  );
}
