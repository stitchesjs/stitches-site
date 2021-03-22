import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString } from '@modulz/design-system';
import { renderSnippet } from '@lib/analytics';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* TO FIX */}
          <style dangerouslySetInnerHTML={{ __html: getCssString() }} />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
          <link rel="icon" href="/favicon.png" />
          <link rel="stylesheet" href="https://develop.modulz.app/fonts/fonts.css" />
          {/* Pre-fetch the monospace font so it doesn't flash in the Inspect panel */}
          <link
            rel="prefetch"
            href="/fonts/soehne-mono-web-buch.woff2"
            as="font"
            type="font/woff2"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
