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
import type { StitchesVariants } from '@stitches/react';

refractor.register(js);
refractor.register(jsx);
refractor.register(bash);
refractor.register(css);
refractor.register(diff);

// type PreVariants = StitchesVariants<typeof Pre>;
type PreProps = Omit<React.ComponentProps<typeof Pre>, 'css'>;

type CodeBlockProps = PreProps & {
  language: 'js' | 'jsx' | 'bash' | 'css' | 'diff';
  value: string;
  line?: string;
  css?: any;
  mode?: 'static' | 'typewriter';
  showLineNumbers?: boolean;
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
    return <CodeTypewriter className={classes} css={css} variant={variant} value={result} />;
  }

  return (
    <Pre
      className={classes}
      data-line-numbers={showLineNumbers}
      css={css}
      variant={variant}
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
  var childTextNodes = [];

  if (!node.hasChildNodes()) {
    return;
  }

  var childNodes = node.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
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
  var text = textNode.nodeValue;
  var parent = textNode.parentNode;

  var characters = text.split('');
  characters.forEach(function (character, letterIndex) {
    var randomness = Math.floor(Math.random() * (120 - 80 + 1)) + 80;
    const delay = (count + letterIndex) * 50;
    var element = document.createElement(tag);
    var characterNode = document.createTextNode(character);
    element.appendChild(characterNode);

    element.style.opacity = 0;
    element.style.transition = `all ease 0ms ${delay}ms`;

    parent.insertBefore(element, textNode);

    // skip a couple of frames, dont know why :D
    requestAnimationFrame(() => requestAnimationFrame(() => (element.style.opacity = 1)));
  });

  parent.removeChild(textNode);
}

function CodeTypewriter({ value, className, css, variant }) {
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
    <Pre className={className} css={css} variant={variant}>
      <code
        ref={wrapperRef}
        style={{ opacity: 0 }}
        className={className}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </Pre>
  );
}
