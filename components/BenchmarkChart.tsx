import { Box, Flex, Text } from '@modulz/design-system';

export function BenchmarkChart({ data }) {
  const maxValue = Math.max(...data.map((r) => r.value));

  return (
    <Box css={{ bc: '$violet2', p: '$6', mb: '$4' }}>
      {data.map((result) => (
        <Flex key={result.name} css={{ alignItems: 'center', gap: '$2' }}>
          <Text size="1" css={{ whiteSpace: 'nowrap', color: '$violet9', ta: 'right', width: 110 }}>
            {result.name}
          </Text>
          <Flex
            css={{
              my: '$2',
              height: '$5',
              flex: '1',
              alignItems: 'center',
              gap: '$2',
            }}
          >
            <Box
              css={{
                height: '100%',
                bc: result.name.includes('0.2.0') ? '$violet9' : '$violet4',
                width: `${(result.value / maxValue) * 100}%`,
              }}
            />
            <Text size="1" css={{ whiteSpace: 'nowrap', color: '$violet9' }}>
              {result.value}ms
            </Text>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
}
