import React from 'react';
import NextLink from 'next/link';
import { Box, Text, Link, Flex, Heading, VisuallyHidden } from '@modulz/radix';

export const Header = () => {
  return (
    <Flex
      sx={{
        px: 4,
        height: 7,
        alignItems: 'center',
        borderBottom: '1px solid',
        borderColor: 'gray300',
        position: 'sticky',
        top: 0,
        zIndex: 2,
        backdropFilter: 'saturate(165%) blur(20px)',
        backgroundColor: 'rgba(255,255,255,.8)',
      }}
    >
      <NextLink href="/" passHref>
        <Link sx={{ color: 'inherit', display: 'inline-flex', ':focus': { boxShadow: 'none' } }}>
          <VisuallyHidden>Stitches homepage</VisuallyHidden>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <g clipPath="url(#clip0)">
              <rect
                x="10.6066"
                y="18.3848"
                width="11"
                height="29"
                rx="5.5"
                transform="rotate(-45 10.6066 18.3848)"
                stroke="black"
                strokeWidth="2"
              />
              <rect
                x="10.6066"
                y="31.1127"
                width="29"
                height="11"
                rx="5.5"
                transform="rotate(-45 10.6066 31.1127)"
                fill="white"
                stroke="black"
                strokeWidth="2"
              />
              <path
                d="M16.9707 29.6985H22.6276M19.7991 32.5269V26.8701"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.9204 24.7487H27.5773M24.7488 27.5771V21.9203"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.8701 19.799H32.527M29.6985 22.6274V16.9705"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="35"
                  height="35"
                  fill="white"
                  transform="translate(0 24.7487) rotate(-45)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </NextLink>

      <Flex ml="auto" sx={{ flexDirection: ['row', 'row'], alignItems: ['center', 'center'] }}>
        <Text size={3} sx={{ color: 'gray700' }} ml={[2, 6]}>
          <NextLink href="/docs" passHref>
            <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Docs</Link>
          </NextLink>
        </Text>
        <Text size={3} sx={{ color: 'gray700' }} ml={[4, 7]}>
          <NextLink href="/learn" passHref>
            <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Learn</Link>
          </NextLink>
        </Text>
        <Text size={3} sx={{ color: 'gray700' }} ml={[4, 7]}>
          <NextLink href="/releases" passHref>
            <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Releases</Link>
          </NextLink>
        </Text>
      </Flex>
    </Flex>
  );
};
