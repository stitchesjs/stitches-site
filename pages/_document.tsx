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
          <style
            dangerouslySetInnerHTML={{
              __html: `
@font-face {
  font-family: 'Untitled Sans';
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/UntitledSansWeb-Regular.woff2) format('woff2'), url(/fonts/UntitledSansWeb-Regular.woff) format('woff');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 500;
  font-display: swap;
  src: url(/fonts/UntitledSansWeb-Medium.woff2) format('woff2'), url(/fonts/UntitledSansWeb-Medium.woff) format('woff');
}

@font-face {
  font-family: 'Söhne Mono';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url(/fonts/'soehne-mono-web-buch.woff2') format('woff2'), url(/fonts/'soehne-mono-web-buch.woff') format('woff');
}

@font-face {
  font-family: 'Söhne Mono';
  font-weight: normal;
  font-style: italic;
  font-display: swap;
  src: url(/fonts/'soehne-mono-web-buch-kursiv.woff2') format('woff2'), url(/fonts/'soehne-mono-web-buch-kursiv.woff') format('woff');
}

@font-face {
  font-family: 'Söhne Mono';
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src: url(/fonts/'soehne-mono-web-kraftig.woff2') format('woff2'), url(/fonts/'soehne-mono-web-kraftig.woff') format('woff');
}

@font-face {
  font-family: 'Söhne Mono';
  font-weight: 500;
  font-style: italic;
  font-display: swap;
  src: url(/fonts/'soehne-mono-web-kraftig-kursiv.woff2') format('woff2'),
    url(/fonts/'soehne-mono-web-kraftig-kursiv.woff') format('woff');
}
					`,
            }}
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
