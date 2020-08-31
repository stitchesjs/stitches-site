import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type TitleAndMetaTagsProps = {
  url?: string;
  pathname?: string;
  title?: string;
  description?: string;
};

export function TitleAndMetaTags({
  url = 'https://stitches-site.modulz-deploys.com',
  pathname,
  title = 'Stitches',
  description = 'The modern CSS-in-JS libary. By Modulz',
}: TitleAndMetaTagsProps) {
  const router = useRouter();

  const image = `${url}/social/default.png`;
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:site" content="@modulz" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
