import React from 'react';
import { Card, Text, Flex, Avatar, Box } from '@modulz/design-system';
import { FrontMatter } from '../types';

export const Tweet = ({ frontMatter }: { frontMatter: FrontMatter }) => {
  return (
    <Card
      as="a"
      variant="interactive"
      target="_blank"
      href="https://twitter.com/ChrisHBrown55/status/1364967237128499211"
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
      <Flex css={{ mb: '$2' }}>
        <Text size="3" css={{ fontWeight: 500, lineHeight: '25px', mr: '$1' }}>Chris</Text>
        <Text variant="gray" size="3" css={{ lineHeight: '25px' }}>@ChrisHBrown55</Text>
      </Flex>
      <Text
        size={{
          initial: '3',
          bp2: '4'
        }}
        css={{
          when: {
            initial: {
              lineHeight:  '23px',
            },
            bp2: {
              lineHeight:  '27px',
            }
          }
        }}
      >
        This might be the best implementation of CSS-in-JS yet. It does what CSS-in-JS has always failed to do in the past: fix all the problems that CSS had already solved (and Sass).
      </Text>
    </Card>
  );
};