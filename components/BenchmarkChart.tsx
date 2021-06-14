import { Box, Flex, Text } from '@modulz/design-system';

const getBarColor = (name) => {
  switch (name) {
    case 'Stitches':
      return '$violet9';
    case 'Stitches 0.2.0':
      return '$violet9';
    case 'Stitches 0.1.9':
      return '$violet4';
    case 'styled-components':
      return '$amber9';
    case 'Emotion':
      return '$plum9';
    default:
      return 'gray';
  }
};

export function BenchmarkChart({ data }) {
  const maxValue = Math.max(...data.map((r) => r.value));

  return (
    <Flex css={{ gap: '$2', mt: '$4' }}>
      <Box css={{ flex: '0 1 auto' }}>
        {data.map((result) => (
          <Text
            key={result.name}
            size="1"
            css={{
              my: '$1',
              lineHeight: '$sizes$5',
              whiteSpace: 'nowrap',
              ta: 'right',
              fontWeight:
                result.name === 'Stitches' || result.name === 'Stitches 0.2.0' ? '500' : '400',
            }}
          >
            {result.name}
          </Text>
        ))}
      </Box>
      <Box css={{ flex: '1 1 100%' }}>
        {data.map((result) => (
          <Flex
            key={result.name}
            css={{ alignItems: 'center', gap: '$2', my: '$1', paddingRight: '57px' }}
          >
            <Box
              css={{
                height: '$5',
                bc: getBarColor(result.name),
                width: `${(result.value / maxValue) * 100}%`,
                position: 'relative',
              }}
            >
              <Text
                size="1"
                css={{
                  lineHeight: '$sizes$5',
                  whiteSpace: 'nowrap',
                  position: 'absolute',
                  right: '-$1',
                  transform: 'translateX(100%)',
                }}
              >
                {result.value}ms
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
