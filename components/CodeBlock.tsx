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
import { Pre } from './Pre';

refractor.register(js);
refractor.register(jsx);
refractor.register(bash);
refractor.register(css);
refractor.register(diff);

type PreProps = Omit<React.ComponentProps<typeof Pre>, 'css'>;

type CodeBlockProps = PreProps & {
  language: 'js' | 'jsx' | 'bash' | 'css' | 'diff';
  value: string;
  line?: string;
  css?: any;
  mode?: 'static' | 'typewriter' | 'interactive';
  showLineNumbers?: boolean;
  highlightMap?: any;
};

export function CodeBlock({
  language,
  value,
  line = '0',
  className = '',
  mode,
  css,
  variant,
  showLineNumbers,
  ...props
}: CodeBlockProps) {
  let result = refractor.highlight(value, language);

  result = highlightLine(result, rangeParser(line));

  result = highlightWord(result);

  // convert to html
  result = hastToHtml(result);

  const classes = `language-${language} ${className}`;

  if (mode === 'typewriter') {
    return (
      <CodeTypewriter className={classes} css={css} variant={variant} value={result} {...props} />
    );
  }

  if (mode === 'interactive') {
    return (
      <CodeInteractive
        value={result}
        className={classes}
        css={css}
        variant={variant}
        data-line-numbers={showLineNumbers}
        line={line}
        {...props}
      />
    );
  }

  return (
    <Pre
      className={classes}
      css={css}
      variant={variant}
      data-line-numbers={showLineNumbers}
      {...props}
    >
      <code className={classes} dangerouslySetInnerHTML={{ __html: result }} />
    </Pre>
  );
}

/**
 * recursively get all text nodes as an array for a given element
 */
function getTextNodes(node) {
  let childTextNodes = [];

  if (!node.hasChildNodes()) return;

  const childNodes = node.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    if (childNodes[i].nodeType == Node.TEXT_NODE) {
      childTextNodes.push(childNodes[i]);
    } else if (childNodes[i].nodeType == Node.ELEMENT_NODE) {
      Array.prototype.push.apply(childTextNodes, getTextNodes(childNodes[i]));
    }
  }

  return childTextNodes;
}

/**
 * given a text node, wrap each character in the
 * given tag.
 */
function wrapEachCharacter(textNode, tag, count) {
  const text = textNode.nodeValue;
  const parent = textNode.parentNode;

  const characters = text.split('');
  characters.forEach(function (character, letterIndex) {
    const delay = (count + letterIndex) * 50;
    var element = document.createElement(tag);
    var characterNode = document.createTextNode(character);
    element.appendChild(characterNode);
    element.style.opacity = 0;
    element.style.transition = `all ease 0ms ${delay}ms`;

    parent.insertBefore(element, textNode);

    // skip a couple of frames to trigger transition
    requestAnimationFrame(() => requestAnimationFrame(() => (element.style.opacity = 1)));
  });

  parent.removeChild(textNode);
}

function CodeTypewriter({ value, className, css, variant, ...props }) {
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      var allTextNodes = getTextNodes(wrapper);

      let count = 0;
      allTextNodes.forEach((textNode) => {
        wrapEachCharacter(textNode, 'span', count);
        count = count + textNode.nodeValue.length;
      });
      wrapper.style.opacity = 1;
    }

    return () => (wrapper.innerHTML = value);
  }, []);

  return (
    <Pre className={className} css={css} variant={variant} {...props}>
      <code
        ref={wrapperRef}
        style={{ opacity: 0 }}
        className={className}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </Pre>
  );
}

function CodeInteractive({ value, className, css, variant, line, ...props }) {
  const preRef = React.useRef<HTMLPreElement>(null);
  const codeRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const pre = preRef.current;
    const codeInner = codeRef.current;
    if (!pre || !codeInner) return;

    const PADDING = 15;

    const codeBlockHeight = pre.clientHeight - PADDING * 2;

    const lines = pre.querySelectorAll<HTMLElement>('.highlight-line');

    if (!line) {
      lines.forEach((line) => {
        line.classList.remove('off');
      });

      codeInner.style.transform = `translate3d(0, 0, 0)`;
      return;
    }

    const linesToHighlight = rangeParser(line);

    const firstLineNumber = Math.max(0, linesToHighlight[0] - 1);
    const lastLineNumber = Math.min(lines.length - 1, [...linesToHighlight].reverse()[0] - 1);
    const firstLine = lines[firstLineNumber];
    const lastLine = lines[lastLineNumber];
    const linesHeight = lastLine.offsetTop - firstLine.offsetTop;
    const maxDistance = codeInner.clientHeight - codeBlockHeight;

    const codeFits = linesHeight < codeBlockHeight;
    const lastLineIsBelow = lastLine.offsetTop > codeBlockHeight - PADDING;
    const lastLineIsAbove = !lastLineIsBelow;

    let translateY;
    if (codeFits && lastLineIsAbove) {
      translateY = 0;
    } else if (codeFits && lastLineIsBelow) {
      const dist = firstLine.offsetTop - (codeBlockHeight - linesHeight) / 2;
      translateY = dist > maxDistance ? maxDistance : dist;
    } else {
      translateY = firstLine.offsetTop;
    }

    lines.forEach((line, i) => {
      const lineIndex = i + 1;

      if (linesToHighlight.includes(lineIndex)) {
        line.setAttribute('data-highlighted', 'true');
      } else {
        line.setAttribute('data-highlighted', 'false');
      }
    });

    requestAnimationFrame(
      () => (codeInner.style.transform = `translate3d(0, ${-translateY}px, 0)`)
    );
  }, [line]);

  return (
    <Pre
      ref={preRef}
      className={className}
      css={css}
      variant={variant}
      {...props}
      style={{ overflow: 'hidden', userSelect: 'none' }}
    >
      <code
        ref={codeRef}
        className={className}
        style={{
          willChange: 'transform',
          transition: 'transform 200ms ease-in-out',
        }}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </Pre>
  );
}
