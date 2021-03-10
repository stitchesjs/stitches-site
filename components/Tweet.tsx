import React from 'react';
import { Card, Text, Flex } from '@modulz/design-system';

type TweetType = {
  url: string;
  children: React.ReactNode;
  author: string;
  username: string;
};

export const Tweet = ({ url, children, author, username }: TweetType) => {
  return (
    <Card
      as="a"
      variant="interactive"
      target="_blank"
      href={url}
      css={{
        width: '40vw',
        when: {
          bp1: {
            width: '33.3333vw',
          },
        },
        maxWidth: 400,
        p: '$4',
      }}
    >
      <Flex css={{ mb: '$1' }}>
        <Text size="3" css={{ fontWeight: 500, lineHeight: '25px', mr: '$1' }}>
          {author}
        </Text>
        <Text variant="gray" size="3" css={{ lineHeight: '25px' }}>
          @{username}
        </Text>
      </Flex>
      <Text
        size="3"
        css={{
          lineHeight: '23px',
        }}
      >
        {children}
      </Text>
    </Card>
  );
};
