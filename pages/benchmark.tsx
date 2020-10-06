import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Container, Text, theme } from '@modulz/design-system';
import { StitchesLogo } from '../components/StitchesLogo';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';

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

export default function BenchmarkPage(props) {
  React.useEffect(() => {
    // const toolColors = {
    //   cargo: '#dea584',
    //   go: '#00add8',
    //   benchmarkjs: 'hsl(16,60%,74%)',
    //   pytest: '#3572a5',
    //   googlecpp: '#f34b7d',
    //   catch2: '#f34b7d',
    //   _: '#333333',
    // };

    function init() {
      const data = props.data;
      // Prepare data points for charts
      return Object.keys(data.entries).map((name) => ({
        name,
        dataSet: collectBenchesPerTestCase(data.entries[name]),
      }));
    }

    function renderAllChars(dataSets) {
      function renderGraph(parent, name, dataset) {
        const canvas = document.createElement('canvas');
        canvas.className = 'benchmark-chart';
        parent.appendChild(canvas);

        // const color = toolColors[dataset.length > 0 ? dataset[0].tool : '_'];
        const data = {
          labels: dataset.map((d) => d.commit.id.slice(0, 7)),
          datasets: [
            {
              label: name,
              data: dataset.map((d) => d.bench.value),
              // borderColor: color,
              // backgroundColor: color + '60', // Add alpha for #rrggbbaa
              borderColor: 'hsl(252,80%,70%)',
              backgroundColor: 'hsl(272,100%,96%)',
            },
          ],
        };
        const options = {
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'commit',
                },
              },
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: dataset.length > 0 ? dataset[0].bench.unit : '',
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          tooltips: {
            callbacks: {
              afterTitle: (items) => {
                const { index } = items[0];
                const data = dataset[index];
                return (
                  '\n' +
                  data.commit.message +
                  '\n\n' +
                  data.commit.timestamp +
                  ' committed by @' +
                  data.commit.committer.username +
                  '\n'
                );
              },
              label: (item) => {
                let label = item.value;
                const { range, unit } = dataset[item.index].bench;
                label += ' ' + unit;
                if (range) {
                  label += ' (' + range + ')';
                }
                return label;
              },
              afterLabel: (item) => {
                const { extra } = dataset[item.index].bench;
                return extra ? '\n' + extra : '';
              },
            },
          },
          onClick: (_mouseEvent, activeElems) => {
            if (activeElems.length === 0) {
              return;
            }
            // XXX: Undocumented. How can we know the index?
            const index = activeElems[0]._index;
            const url = dataset[index].commit.url;
            window.open(url, '_blank');
          },
        };

        (window as any).Chart.defaults.global.defaultFontFamily =
          'Untitled Sans, -apple-system, BlinkMacSystemFont, system-ui, sans-serif';

        new (window as any).Chart(canvas, {
          type: 'line',
          data,
          options,
        });
      }

      function renderBenchSet(name, benchSet, main) {
        const setElem = document.createElement('div');
        setElem.className = 'benchmark-set';
        main.appendChild(setElem);

        const graphsElem = document.createElement('div');
        graphsElem.className = 'benchmark-graphs';
        setElem.appendChild(graphsElem);

        for (const [benchName, benches] of benchSet.entries()) {
          renderGraph(graphsElem, benchName, benches);
        }
      }

      const main = document.getElementById('benchmark-main');
      for (const { name, dataSet } of dataSets) {
        renderBenchSet(name, dataSet, main);
      }
    }
    renderAllChars(init()); // Start
  }, []);
  return (
    <Box>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.2/dist/Chart.min.js"></script>
      </Head>
      <TitleAndMetaTags title="Stitches" />
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
          size={{ initial: '8', bp2: '9' }}
          css={{ fontWeight: 500, lineHeight: '35px', bp2: { lineHeight: '55px' } }}
        >
          Stitches Benchmarks
        </Text>

        <Box
          css={{
            py: '$7',
            '.benchmark-chart': {
              mb: '$7',
            },
          }}
        >
          <main id="benchmark-main"></main>
        </Box>
      </Container>
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
