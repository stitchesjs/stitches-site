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
          <link rel="preconnect" href="https://develop.modulz.app" crossOrigin="anonymous" />
          <link rel="preload" href="https://develop.modulz.app/fonts/fonts.css" as="style" />
          <link rel="stylesheet" href="https://develop.modulz.app/fonts/fonts.css" media="all" />
          <noscript>
            <link rel="stylesheet" href="https://develop.modulz.app/fonts/fonts.css" />
          </noscript>
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
