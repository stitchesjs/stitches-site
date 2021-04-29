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
          <link
            rel="preload"
            href="/fonts/UntitledSansWeb-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/UntitledSansWeb-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/UntitledSansWeb-Medium.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/UntitledSansWeb-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/soehne-mono-web-buch.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/soehne-mono-web-buch.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
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
