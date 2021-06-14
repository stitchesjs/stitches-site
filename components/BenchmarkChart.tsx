import { Box, Flex, Text } from '@modulz/design-system';

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
                result.name === 'Stitches' || result.name === 'Stitches 0.2.0'
                  ? '500'
                  : '400',
            }}
          >
            {result.name}
          </Text>
        ))}
      </Box>
      <Box css={{ flex: '1 1 100%' }}>
        {data.map((result) => (
          <Flex key={result.name} css={{ alignItems: 'center', gap: '$2', my: '$1' }}>
            <Flex
              css={{
                height: '$5',
                flex: '1',
                alignItems: 'center',
                gap: '$2',
              }}
            >
              <Box
                css={{
                  height: '100%',
                  bc:
                    result.name === 'Stitches' || result.name === 'Stitches 0.2.0'
                      ? '$violet9'
                      : '$violet9',
                  width: `${(result.value / maxValue) * 100}%`,
                }}
              />
              <Text size="1" css={{ whiteSpace: 'nowrap' }}>
                {result.value}ms
              </Text>
            </Flex>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
