import React from 'react';
import { Card, Box, Text, Avatar, Flex } from '@modulz/design-system';
import { ExternalLinkIcon } from '@modulz/radix-icons';

type TweetType = {
  url: string;
  avatar: string;
  children: React.ReactNode;
  author: string;
  username: string;
};

export const Tweet = ({ url, children, avatar, author, username }: TweetType) => {
  return (
    <Card
      as="a"
      variant="interactive"
      target="_blank"
      href={url}
      css={{
        width: '80vw',
        backgroundColor: 'transparent',
        maxWidth: 400,
        p: '$4',
        mr: '$3',
        '@media (hover: hover)': {
          '& .icon-toggle': {
            opacity: '0',
          },
          '&:hover': {
            '& .icon-toggle': {
              opacity: '1',
            }
          },
        },
        '&:focus': {
          '& .icon-toggle': {
            opacity: '1',
          }
        },
        when: {
          bp1: {
            mr: '$5',
          }
        },
      }}
    >
      <Flex css={{ jc: 'space-between', mb: '$2' }}>
        <Flex css={{ ai: 'center', fg: 1 }}>
          <Box css={{ mr: '$2' }}>
            <Avatar
              size="3"
              alt="John Smith"
              src={avatar}
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
        <Box css={{ color: '$gray900' }}>
          <Box className="icon-toggle" css={{ transition: 'opacity 50ms linear' }}>
            <ExternalLinkIcon />
          </Box>
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
