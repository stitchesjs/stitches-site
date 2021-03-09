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
        </Head>
        <body>
          <script src="/noflash.js" />
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
