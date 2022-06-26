import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Badge, Box, Container, Text, Link, Button } from '@modulz/design-system';
import { StitchesLogo } from '../components/StitchesLogo';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { format } from 'date-fns';

function collectBenchesPerTestCase(entries) {
  const map = new Map();
  for (const entry of entries) {
    const { commit, date, tool, benches } = entry;
    for (const bench of benches) {
      const result = { commit, date, tool, bench };
      const arr = map.get(bench.name);
      if (arr === undefined) {
        map.set(bench.name, [result]);
      } else {
        arr.push(result);
      }
    }
  }
  return map;
}

const fontFamily = 'Untitled Sans, -apple-system, BlinkMacSystemFont, system-ui, sans-serif';

export default function BenchmarkPage({ data, ...props }) {
  if (!data) {
    return null;
  }

  const dataSets = Object.keys(data.entries).map((name) => ({
    name,
    dataSet: collectBenchesPerTestCase(data.entries[name]),
  }));

  React.useEffect(() => {
    // Global Chart.js overrides
    (window as any).Chart.defaults.global.defaultFontFamily = fontFamily;
    (window as any).Chart.defaults.global.animation.duration = 0;
  }, []);

  return (
    <Box>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
      </Head>
      <TitleAndMetaTags title="Stitches Benchmarks" />
      <Box as="header" css={{ py: '$4', px: '$4', mb: '$7' }}>
        <NextLink href="/" passHref>
          <Box
            as="a"
            css={{
              color: '$hiContrast',
              display: 'inline-flex',
              ':focus': {
                boxShadow: 'none',
              },
            }}
          >
            <span
              style={{
                position: 'absolute',
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: 0,
              }}
            >
              Stitches homepage
            </span>
            <StitchesLogo />
          </Box>
        </NextLink>
      </Box>
      <Container size="3" css={{ textAlign: 'center', mb: '$4' }}>
        <Text
          as="h1"
          size={{ initial: '8', bp2: '9' }}
          css={{
            fontWeight: 500,
            lineHeight: '35px',
            mb: '$5',
            bp2: { lineHeight: '55px' },
          }}
        >
          Stitches Benchmarks
        </Text>

        <Text as="div" css={{ mb: '$3' }}>
          Updated: {format(data.lastUpdate, 'dd/MM/yy')} at {format(data.lastUpdate, 'HH:mm')}{' '}
          <Badge>{format(data.lastUpdate, 'O')}</Badge>
        </Text>

        {dataSets.map(({ name, dataSet }) => (
          <Bench key={name} name={name} dataSet={dataSet} />
        ))}

        <Text as="div" css={{ mb: '$5' }}>
          Repository: <Link href={data.repoUrl}>{data.repoUrl}</Link>
        </Text>

        <Button
          as="a"
          href={`data:,${JSON.stringify(data, null, 2)}`}
          download="benchmark_data.json"
          css={{ mb: '$7' }}
        >
          Download data
        </Button>
      </Container>
    </Box>
  );
}

function Bench(props: any) {
  return (
    <>
      {[...props.dataSet.entries()].map(([name, data], i) => (
        <Chart key={i} name={name} dataSet={data} />
      ))}
    </>
  );
}

function Chart({ dataSet, name }: any) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const data = {
      labels: dataSet.map((d) => d.commit.id.slice(0, 7)),
      datasets: [
        {
          label: name,
          data: dataSet.map((d) => d.bench.value),

          borderColor: 'hsl(252,80%,70%)',
          backgroundColor: 'hsla(252,80%,70%, 0.2)',
          pointBackgroundColor: 'hsl(252,80%,70%)',
          pointBorderColor: 'white',
          pointRadius: 5,
          pointHoverRadius: 5,
          pointHitRadius: 3,
        },
      ],
    };
    const options = {
      global: {
        defaultFontFamily: fontFamily,
      },
      hover: {
        animationDuration: 0,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: 'hsla(252,80%,70%, 0.4)',
              zeroLineColor: 'hsla(252,80%,70%, 0.4)',
            },
            scaleLabel: {
              display: true,
              labelString: 'commit',
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: 'hsla(252,80%,70%, 0.4)',
              zeroLineColor: 'hsla(252,80%,70%, 0.4)',
            },
            scaleLabel: {
              display: true,
              labelString: dataSet.length > 0 ? dataSet[0].bench.unit : '',
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      tooltips: {
        displayColors: false,
        xPadding: 15,
        yPadding: 15,
        titleFontFamily: fontFamily,
        bodyFontFamily: fontFamily,
        footerFontFamily: fontFamily,
        titleSpacing: 5,
        titleMarginBottom: 10,
        bodySpacing: 5,
        bodyMarginBottom: 0,
        cornerRadius: 5,
        callbacks: {
          afterTitle: (items) => {
            const { index } = items[0];
            return dataSet[index].commit.message;
          },
          label: (item) => {
            let label = item.value;
            const { range, unit } = dataSet[item.index].bench;
            label += ' ' + unit;
            if (range) {
              label += ' (' + range + ')';
            }
            return label;
          },
          afterLabel: (item) => {
            const { extra } = dataSet[item.index].bench;
            return extra ? extra : '';
          },
        },
      },
      onClick: (_mouseEvent, activeElems) => {
        if (activeElems.length === 0) {
          return;
        }
        const index = activeElems[0]._index;
        const url = dataSet[index].commit.url;
        window.open(url, '_blank');
      },
    };

    new (window as any).Chart(canvasRef.current, {
      type: 'line',
      data,
      options,
    });
  }, [dataSet]);

  return (
    <Box
      css={{
        py: '$7',
        '.benchmark-chart': {
          mb: '$7',
        },
      }}
    >
      <canvas ref={canvasRef}></canvas>
    </Box>
  );
}

const RAW_GITHUB_URL = 'https://raw.githubusercontent.com';

function getErrorText(res) {
  try {
    return res.text();
  } catch (err) {
    return res.statusText;
  }
}

export async function getError(msg, res) {
  const errorText = await getErrorText(res);
  const error = new Error(`${msg} (${res.status}): ${errorText}`) as any;

  error.url = res.url;
  error.status = res.status;
  error.headers = res.headers.raw();

  return error;
}

async function getRawFileFromGitHub(path) {
  const res = await fetch(RAW_GITHUB_URL + path);

  if (res.ok) return res.text();
  throw await getError('GitHub raw download error', res);
}

export async function getStaticProps(context) {
  // raw.githubusercontent.com/jonathantneal/stitches/gh-pages/dev/bench/data.js
  const rawData = await getRawFileFromGitHub(`/jonathantneal/stitches/gh-pages/dev/bench/data.js`);
  const data = rawData.replace('window.BENCHMARK_DATA = ', '');
  return {
    props: {
      data: JSON.parse(data),
    },
  };
}
