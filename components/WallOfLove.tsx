import * as React from 'react';
import debounce from 'lodash.debounce';
import { createContext } from '@radix-ui/react-context';
import { useCallbackRef } from '@radix-ui/react-use-callback-ref';
import { composeEventHandlers } from '@radix-ui/primitive';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { Box, Flex, Text, Button } from '@modulz/design-system';
import { ArrowRightIcon, ArrowLeftIcon } from '@modulz/radix-icons';
import { Tweet } from '@components/Tweet';

export function WallOfLove() {
  return (
    <Carousel css={{ position: 'relative', pt: '$7' }}>
      <CarouselSlideList
        css={{
          ox: 'auto',
          oy: 'hidden',
          py: '$1',
          WebkitoverflowScrolling: 'touch',
          cursor: 'grab',

          // hide scrollbar
          MsOverflowStyle: 'none',
          scrollbarWidth: 'none',

          '&::-webkit-scrollbar': {
            display: 'none',
          },

          '&[data-state="dragging"]': {
            cursor: 'grabbing',
            userSelect: 'none',
          },

          '&[data-state="dragging"] *': {
            cursor: 'inherit',
          },
        }}
      >
        <Flex css={{ gap: '$4', ai: 'flex-start', px: '$5', mr: '$5', float: 'left' }}>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1289210045834694656/qe4jALem_x96.jpg"
              url="https://twitter.com/ChrisHBrown55/status/1364967237128499211"
              author="Chris"
              username="chrishbrown55"
            >
              This might be the best implementation of CSS-in-JS yet. It does what CSS-in-JS has
              always failed to do in the past: fix all the problems that CSS had already solved (and
              Sass).
            </Tweet>
          </CarouselSlide>
          {/* <CarouselSlide><Tweet
            avatar="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            url="https://twitter.com/djm_/status/1364869309860831238"
            author="Darian Moody"
            username="djm_"
          >
            I've been banging on about Stitches these past few because I've been so happy working
            with it on the side.
            <br />
            <br />
            5 years ago everyone was in Sketch.
            <br />
            <br />
            Now everyone's in Figma.
            <br />
            <br />
            In another few, in-browser design tools will be exporting code &amp; Stitches is here
            to support that future.
          </Tweet></CarouselSlide> */}
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1139086177326239745/lieJ3qI1_x96.jpg"
              url="https://twitter.com/giuseppegurgone/status/1364506245009448960"
              author="Giuseppe"
              username="giuseppegurgone"
            >
              I have been maintainer of SUIT CSS, worked on design systems at scale when we still
              called them Styleguide, created a couple of CSS in JS libs and watched this space for
              a long while and{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              seems the most promising library out there.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1360289301301518336/s6mIt7H2_x96.jpg"
              url="https://twitter.com/accezr/status/1362011589323481091"
              author="Anna Carolina"
              username="accezr"
            >
              I've been using Stitches + Radix to build a base component library for our Design
              System and I have to say that I'm loving the development experience. Thanks to{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @modulz
              </Text>{' '}
              for making my life easier. The latest updates are 🔥🔥
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1087983327922085888/3Qr4OXoT_x96.jpg"
              url="https://twitter.com/joebell_/status/1364832150655299585"
              author="Joe Bell"
              username="joebell_"
            >
              I just moved my site over to Stitches beta and I have absolutely nothing bad to say
              about it—this is the library I’ve been waiting for.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/754886061872979968/BzaOWhs1_x96.jpg"
              url="https://twitter.com/markdalgleish/status/1364827475595825155"
              author="Mark Dalgleish"
              username="markdalgleish"
            >
              Listening to{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @peduarte
              </Text>{' '}
              talk about{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>
              , the penny finally dropped for me. They've designed an API that feels like it belongs
              in the options panel of a design tool because, of course, they're also building{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @modulz
              </Text>
              .
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1326128472071282690/yYYPj6Jk_x96.jpg"
              url="https://twitter.com/braposo/status/1300941603490746368"
              author="Bernardo Raposo"
              username="braposo"
            >
              This break from the code is actually why stitches is much more than a styling library.
              It is a common language that both designers and developers understand, they just use
              different tools to "communicate".
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1330591116245217281/LPrN9b8r_x96.jpg"
              url="https://twitter.com/msanromanv/status/1364549916656357380"
              author="Mike San Román"
              username="msanromanv"
            >
              This definitely feels like a step forward, not only because of the performance
              benefits, SSR support, etc., but the developer experience is amazing.
              <br />
              <br />I think I haven't been as excited about a styling lib ever.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1259920640208973825/V0Y020YR_x96.jpg"
              url="https://twitter.com/razvan_pavel/status/1364538366126096389"
              author="Răzvan Pavel"
              username="razvan_pavel"
            >
              Something I don't see very often in any tech or product reading: developer &amp; debug
              experience! It's this focus on using tech as a tool and putting humans first that
              makes products successful.{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              will probably be around for a while.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/939471299931443201/sNFkFAfQ_x96.jpg"
              url="https://twitter.com/1stfloor/status/1364254660119453698"
              author="🆅🅸🅽🅲🅴"
              username="1stfloor"
            >
              The cool thing for me as a designer was seeing the systematic approach to using design
              tokens at a level I could understand 😂 I believe the gap between design and
              development is finally narrowing and solutions like Stitches and Modulz speed up this
              process.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1301461093794144257/-2zXnDm5_x96.jpg"
              url="https://twitter.com/petecorreia/status/1364215279585288194"
              author="Pete Correia"
              username="petecorreia"
            >
              I’ve used just about every styling solution available and I’m very keen to give{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              a try. It combines all of my wishlist of features for styling in a component world, at
              scale.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1087983327922085888/3Qr4OXoT_x96.jpg"
              url="https://twitter.com/joebell_/status/1363870814312017921"
              author="Joe Bell 🔔"
              username="joebell_"
            >
              Stitches pretty much ticks everything off on my CSS-in-JS wish list. I couldn't go
              back to writing CSS without it.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1305488039708422144/S08ekcHl_x96.jpg"
              url="https://twitter.com/ggsimm/status/1362359547411726339"
              author="Gianmarco Simone ✨"
              username="ggsimm"
            >
              I'm a{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              convert now. This is just a superior way of writing css-in-js, and I'm excited to see
              where it goes.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/941815513235144705/9QPZ88e0_x96.jpg"
              url="https://twitter.com/kylemh_/status/1358818837651619843"
              author="Kyle Holmberg"
              username="kylemh_"
            >
              I haven’t been excited by tech tooling since Next.js 2 years ago.
              <br />
              <br />
              I’m feeling that way about{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              now.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1315686618854981638/oG4b8GNN_x96.jpg"
              url="https://twitter.com/hennessyevan/status/1355266310897364992"
              author="Evan Hennessy"
              username="hennessyevan"
            >
              Also wanted to say of all the libraries I’ve built design systems with: SC, emotion,
              xstyled, styled-system, theme-ui etc.,{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              has been the most ergonomic and enjoyable. Took a look at the roadmap and it looks
              like it’s getting even better. Kudos to the whole team.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/941815513235144705/9QPZ88e0_x96.jpg"
              url="https://twitter.com/kylemh_/status/1341797160346476545"
              author="Kyle Holmberg"
              username="kylemh_"
            >
              Oh. My. God.
              <br />
              <br />
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              is everything I want in a styling library.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1356833034390167553/HqzUcHyq_x96.jpg"
              url="https://twitter.com/elkevinwolf/status/1333975568967229442"
              author="Kevin Wolf"
              username="elkevinwolf"
            >
              I am really impressed with Stitches by{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @modulz
              </Text>{' '}
              . Creating a design system with strong TypeScript support and ease of extension has
              never been easier. Great job{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @peduarte
              </Text>{' '}
              and team! 🚀
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1225246166238912513/jFmedZP6_x96.jpg"
              url="https://twitter.com/JimmyDCleveland/status/1332719743510343682"
              author="Jimmy Cleveland"
              username="JimmyDCleveland"
            >
              I haven't been much of a fan of js object syntax for css in the past, but I've been
              trying out{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              on a side project and it's quite fun so far.
              <br />
              <br />
              The performance promises and type-hinting make it really appealing right away. Good
              docs as well.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1087570379667853313/EKd7ug9y_x96.jpg"
              url="https://twitter.com/KrComet/status/1317014700593344514"
              author="Hyeseong Kim"
              username="KrComet"
            >
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              is the best. Now I'm pretty sure every CSS in JS libs should have a (static) variants
              API as a 1st-class citizen.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1347379204313260032/JnYGQofT_x96.jpg"
              url="https://twitter.com/raunofreiberg/status/1309087632308277251"
              author="Rauno Freiberg"
              username="raunofreiberg"
            >
              Been using{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              for a week on an actual product and I've never had such a smooth collaboration, shared
              vocabulary, and mutual understanding with our designer. Setting up tokens and being
              very systematic and constrained about the UI we build has never been easier.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1297495901808852992/Rufoc9gi_x96.jpg"
              url="https://twitter.com/callmemarsa/status/1304404818736410624"
              author="Marsa"
              username="callmemarsa"
            >
              Trying out the{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              styling library, so far really nice experience :)
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1350150376717250563/xzc0B5Bh_x96.jpg"
              url="https://twitter.com/areaweb/status/1301216968456929281"
              author="Cristiano Rastelli"
              username="areaweb"
            >
              I must say, really impressed by how neat and well-thought is the API of{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              .
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1257516627966525440/NvXU6VoT_x96.jpg"
              url="https://twitter.com/ditorojuanf/status/1300829785782980609"
              author="Juan Di Toro"
              username="ditorojuanf"
            >
              This is 🔥 from the docs you can already see how helpful this is for designing
              component libraries with great system design definitions.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1254281203127066624/gNTCC-q2_x96.jpg"
              url="https://twitter.com/rswebdesigner/status/1367167906879049730"
              author="றதீஸ் / raðiːs / rathes"
              username="rswebdesigner"
            >
              One of the reasons why I really love{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>
              : This whole skeleton component took me like 5 minutes? Including all variants. In
              other CSS-in-JS solutions, this would take ages 😅
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1088534366047719424/_L_NjYJk_x96.jpg"
              url="https://twitter.com/dylanklohr/status/1369097157396021251"
              author="Dylan Klohr"
              username="dylanklohr"
            >
              The{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @modulz
              </Text>{' '}
              crew IS without a DOUBT the most devoted crew I've seen. NEVER have I seen a team
              respond to a bug report, in a CANARY build, via a discord channel and had the issue
              resolved by a maintainer in &lt; 10 minutes. 🤯{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @jon_neal
              </Text>
              .{' '}
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1351102266628067333/LWHanyS2_x96.jpg"
              url="https://twitter.com/vedovelli74/status/1366752905064251393"
              author="Fabio Vedovelli"
              username="vedovelli74"
            >
              Eu tenho faro para identificar tecnologias que se popularizaram: gravei sobre Laravel
              em 2011, sobre Vue em 2015 e Tailwind em 2020.
              <br />
              <br />
              Algo me diz que{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>
              : estará no mesmo nível de popularidade em breve!
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1347379204313260032/JnYGQofT_x96.jpg"
              url="https://twitter.com/raunofreiberg/status/1300772369146040321"
              author="Rauno Freiberg"
              username="raunofreiberg"
            >
              I think Stitches from{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @modulz
              </Text>{' '}
              is one of the first CSS-in-JS solutions that really clicks for me. Super thrilled to
              try this out!
            </Tweet>
          </CarouselSlide>
        </Flex>
      </CarouselSlideList>

      <Box
        css={{
          position: 'absolute',
          top: '50%',
          left: '15px',
          transform: 'translateY(-50%)',
        }}
      >
        <CarouselPrevious
          as={Button}
          css={{
            width: '$7',
            height: '$7',
            borderRadius: '$round',
            backgroundColor: 'rgba(255,255,255,.97)',
            boxShadow:
              '$colors$shadowLight 0px 5px 25px -5px, $colors$shadowDark 0px 5px 15px -10px',
            willChange: 'transform',
            transition: 'all 100ms ease',
            '&:hover': {
              boxShadow:
                '$colors$shadowLight 0px 10px 35px -5px, $colors$shadowDark 0px 10px 20px -5px',
              transform: 'translateY(-2px)',
            },
            '&:focus': {
              boxShadow:
                '0 0 0 1px $colors$gray700, inset 0 0 0 1px $colors$gray700, $colors$shadowLight 0px 5px 25px -5px, $colors$shadowDark 0px 5px 15px -10px',
            },
            '&:active': {
              transform: 'none',
              transition: 'none',
            },
            '&:disabled': {
              opacity: 0,
            },
            '@media (hover: none) and (pointer: coarse)': {
              display: 'none',  
            }
          }}
        >
          <ArrowLeftIcon />
        </CarouselPrevious>
      </Box>
      <Box
        css={{
          position: 'absolute',
          top: '50%',
          right: '15px',
          transform: 'translateY(-50%)',
        }}
      >
        <CarouselNext
          as={Button}
          css={{
            width: '$7',
            height: '$7',
            borderRadius: '$round',
            backgroundColor: 'rgba(255,255,255,.97)',
            boxShadow:
              '$colors$shadowLight 0px 5px 25px -5px, $colors$shadowDark 0px 5px 15px -10px',
            willChange: 'transform',
            transition: 'all 100ms ease',
            '&:hover': {
              boxShadow:
                '$colors$shadowLight 0px 10px 35px -5px, $colors$shadowDark 0px 10px 20px -5px',
              transform: 'translateY(-2px)',
            },
            '&:focus': {
              boxShadow:
                '0 0 0 1px $colors$gray700, inset 0 0 0 1px $colors$gray700, $colors$shadowLight 0px 5px 25px -5px, $colors$shadowDark 0px 5px 15px -10px',
            },
            '&:active': {
              transform: 'none',
              transition: 'none',
            },
            '&:disabled': {
              opacity: 0,
            },
            '@media (hover: none) and (pointer: coarse)': {
              display: 'none',  
            }
          }}
        >
          <ArrowRightIcon />
        </CarouselNext>
      </Box>
    </Carousel>
  );
}

const [CarouselProvider, useCarouselContext] = createContext<{
  _: any;
  slideListRef: React.RefObject<HTMLElement>;
  onNextClick(): void;
  onPrevClick(): void;
}>('Carousel');

const Carousel = (props) => {
  const ref = React.useRef<React.ElementRef<typeof Box>>(null);
  const { children, ...carouselProps } = props;
  const slideListRef = React.useRef<HTMLElement>(null);
  const [_, force] = React.useState({});

  const getSlideInDirection = useCallbackRef((direction) => {
    const slides = ref.current.querySelectorAll('[data-slide-intersected]');
    return Array.from(slides.values()).find((slide: HTMLElement, index) => {
      const slideBefore = slides.item(index - direction) as HTMLElement;
      return (
        slide.dataset.slideIntersected === 'false' &&
        slideBefore?.dataset.slideIntersected === 'true'
      );
    });
  });

  const handleNextClick = React.useCallback(() => {
    const nextSlide = getSlideInDirection(1);
    if (nextSlide) {
      nextSlide.scrollIntoView({ inline: 'start', block: 'nearest', behavior: 'smooth' });
    }
  }, [getSlideInDirection]);

  const handlePrevClick = React.useCallback(() => {
    const prevSlide = getSlideInDirection(-1);
    if (prevSlide) {
      prevSlide.scrollIntoView({ inline: 'end', block: 'nearest', behavior: 'smooth' });
    }
  }, [getSlideInDirection]);

  React.useLayoutEffect(() => {
    const slidesList = slideListRef.current;
    const handleScrollStartAndEnd = debounce(() => force({}), 100, {
      leading: true,
      trailing: true,
    });
    slidesList.addEventListener('scroll', handleScrollStartAndEnd);
    force({});
    return () => slidesList.removeEventListener('scroll', handleScrollStartAndEnd);
  }, [slideListRef]);

  return (
    <CarouselProvider
      _={_}
      slideListRef={slideListRef}
      onNextClick={handleNextClick}
      onPrevClick={handlePrevClick}
    >
      <Box {...carouselProps} ref={ref}>
        {children}
      </Box>
    </CarouselProvider>
  );
};

const CarouselSlideList = (props) => {
  const context = useCarouselContext('CarouselSlideList');
  const ref = React.useRef<React.ElementRef<typeof Box>>(null);
  const composedRefs = useComposedRefs(ref, context.slideListRef);
  const [dragStart, setDragStart] = React.useState(null);

  const handleMouseMove = useCallbackRef((event) => {
    if (ref.current) {
      const distanceX = event.clientX - dragStart.pointerX;
      ref.current.scrollLeft = dragStart.scrollX - distanceX;
    }
  });

  const handleMouseUp = useCallbackRef(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    setDragStart(null);
  });

  return (
    <Box
      {...props}
      ref={composedRefs}
      data-state={dragStart ? 'dragging' : undefined}
      onMouseDownCapture={composeEventHandlers(props.onMouseDownCapture, (event: MouseEvent) => {
        // Drag only if main mouse button was clicked
        if (event.button === 0) {
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
          setDragStart({
            scrollX: (event.currentTarget as HTMLElement).scrollLeft,
            pointerX: event.clientX,
          });
        }
      })}
      onPointerDown={composeEventHandlers(props.onPointerDown, (event: PointerEvent) => {
        const element = event.target as HTMLElement;
        element.setPointerCapture(event.pointerId);
      })}
      onPointerUp={composeEventHandlers(props.onPointerUp, (event: PointerEvent) => {
        const element = event.target as HTMLElement;
        element.releasePointerCapture(event.pointerId);
      })}
    />
  );
};

const CarouselSlide = (props) => {
  const { as: Comp = Box, ...slideProps } = props;
  const context = useCarouselContext('CarouselSlide');
  const ref = React.useRef<React.ElementRef<typeof Box>>(null);
  const [isIntersected, setIsIntersected] = React.useState(false);
  const isDraggingRef = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsIntersected(entry.isIntersecting), {
      root: context.slideListRef.current,
      threshold: 1.0,
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [context.slideListRef]);

  return (
    <Comp
      {...slideProps}
      ref={ref}
      data-slide-intersected={isIntersected}
      onDragStart={(event) => {
        event.preventDefault();
        isDraggingRef.current = true;
      }}
      onClick={(event) => {
        if (isDraggingRef.current) {
          event.preventDefault();
        }
      }}
    />
  );
};

const CarouselNext = (props) => {
  const { as: Comp = 'button', ...nextProps } = props;
  const context = useCarouselContext('CarouselNext');
  const slideList = (context.slideListRef.current || {}) as HTMLElement;
  const { scrollWidth, scrollLeft, clientWidth } = slideList;
  const remainder = scrollWidth - scrollLeft - clientWidth;
  const disabled = remainder <= 0;
  return (
    <Comp {...nextProps} tabIndex={-1} onClick={() => context.onNextClick()} disabled={disabled} />
  );
};

const CarouselPrevious = (props) => {
  const { as: Comp = 'button', ...prevProps } = props;
  const context = useCarouselContext('CarouselPrevious');
  const slideList = (context.slideListRef.current || {}) as HTMLElement;
  const disabled = slideList?.scrollLeft <= 0;
  return (
    <Comp {...prevProps} tabIndex={-1} onClick={() => context.onPrevClick()} disabled={disabled} />
  );
};
