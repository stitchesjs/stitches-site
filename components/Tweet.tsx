import React from 'react';
import { Card, Box, Text, Avatar, Flex } from '@modulz/design-system';

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
        backgroundColor: 'transparent',
        when: {
          bp1: {
            width: '33.3333vw',
          },
        },
        maxWidth: 400,
        p: '$4',
      }}
    >
      <Flex css={{ ai: 'center', mb: '$2' }}>
        <Box css={{ mr: '$2' }}>
          <Avatar
            size="3"
            alt="John Smith"
            src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            fallback="J"
          />
        </Box>
        <Box>
          <Text size="3" css={{ fontWeight: 500, mb: '$1' }}>
            {author}
          </Text>
          <Text variant="gray" size="2" css={{ }}>
            @{username}
          </Text>
        </Box>
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
