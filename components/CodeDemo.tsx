// Inspired by https://github.com/rexxars/react-refractor
import React from 'react';
import rangeParser from 'parse-numeric-range';
import { CodeBlock } from './CodeBlock';

type CodeDemoProps = React.ComponentProps<typeof CodeBlock>;

export function CodeDemo({ css, line, ...props }: CodeDemoProps) {
  const wrapperRef = React.useRef<HTMLPreElement>(null);

  React.useEffect(() => {
    const pre = wrapperRef.current;
    if (!pre) return;

    const PADDING = 15;
    const codeInner = pre.querySelector('code');
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
    <CodeBlock
      ref={wrapperRef}
      {...props}
      css={{
        overflow: 'hidden',
        userSelect: 'none',
        ...css,
        code: {
          willChange: 'transform',
          transition: 'transform 200ms ease-in-out',
          ...css.code,
        },
      }}
    />
  );
}