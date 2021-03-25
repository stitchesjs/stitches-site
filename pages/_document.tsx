import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString } from '@modulz/design-system';
import { renderSnippet } from '@lib/analytics';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
          <style dangerouslySetInnerHTML={{
            __html: (
              `:root{---letter-spacing:0;--letter-spacing-ratio:1em;--heading:1em;--title:1em;--subtitle:1em}`
              + `:root.js-no-untitled_sans{---letter-spacing:0.015em;--letter-spacing-ratio:0.25em;--heading:-0.5em;--title:-.05em;--subtitle:-1.5em}`
            )
          }} />
          <script dangerouslySetInnerHTML={{
            __html: (
              `document.documentElement.classList.add('js-no-untitled_sans');`
              + `((a=()=>document.fonts.check('1em "Untitled Sans"')?document.documentElement.classList.remove('js-no-untitled_sans'):requestAnimationFrame(a))=>`
              + `a()`
              + `)()`
            )
          }} />
          <link rel="icon" href="/favicon.png" />
          <link rel="stylesheet" href="https://develop.modulz.app/fonts/fonts.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
