import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import heroArt from '../assets/hero.png'

const aboutLines = [
  'From zero to infinite.',
  'Every learner starts somewhere — a single skill, a first team, a new title. Our job is to make sure the journey from that starting point never ends.',
  'Continuous, compounding, human development — diagnosed, designed, delivered, and measured at every stage of the employee lifecycle.',
]

const usps = [
  {
    title: 'End-to-end lifecycle partner',
    description:
      'We work across acquisition, onboarding, management, and leadership, so the experience is consistent from hire to leader, not a patchwork of disconnected vendors.',
    accent: '#2DD4BF',
  },
  {
    title: 'Role-specific design',
    description:
      'Onboarding for a new joiner, a competency lead, an account manager, and a location head are each treated as distinct problems with distinct solutions.',
    accent: '#7C5CFF',
  },
  {
    title: 'Built on the 4D Method',
    description:
      'Every engagement is diagnosed and measured, not just delivered, so you see the business impact, not just attendance numbers.',
    accent: '#A3E635',
  },
  {
    title: 'Early-tenure & first-time-manager focus',
    description:
      'We specialize in the two most attrition-prone, most overlooked moments in a career: the first 90 days, and the first promotion into management.',
    accent: '#F59E0B',
  },
  {
    title: 'Modular, menu-based engagement',
    description:
      'Start with one workshop or one program. There is no requirement to buy a large annual contract to get started.',
    accent: '#38BDF8',
  },
  {
    title: 'Founder-led, hands-on customization',
    description:
      'Every framework, template, and toolkit is adapted to your language, roles, and culture, rather than handed over as a generic deck.',
    accent: '#F472B6',
  },
]

function AboutLine({
  line,
  start,
  end,
  progress,
}: {
  line: string
  start: number
  end: number
  progress: MotionValue<number>
}) {
  const lineProgress = useTransform(progress, [start, end], [0, 1])
  const color = useTransform(lineProgress, [0, 1], ['#4b5563', '#ffffff'])

  return (
    <motion.p
      style={{ color }}
      className="text-2xl font-semibold leading-snug tracking-[-0.02em] sm:text-3xl"
    >
      {line}
    </motion.p>
  )
}

function Home() {
  const reducedMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const whyRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Headline recedes as the hero scrolls away
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.9])
  const heroOpacity = useTransform(heroProgress, [0, 0.7, 1], [1, 0.35, 0])
  const heroTextY = useTransform(heroProgress, [0, 1], [0, 120])

  // Hero art: sinks, tilts, and grows with scroll — background drifts the other way
  const heroArtY = useTransform(heroProgress, [0, 1], [0, 280])
  const heroArtRotate = useTransform(heroProgress, [0, 1], [0, 20])
  const heroArtScale = useTransform(heroProgress, [0, 1], [1, 1.25])
  const heroArtOpacity = useTransform(heroProgress, [0, 0.8, 1], [0.8, 0.5, 0])
  const bgY = useTransform(heroProgress, [0, 1], [0, -180])

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start'],
  })

  // Vision text and the ∞ watermark drift at different speeds
  const visionY = useTransform(aboutProgress, [0, 1], [70, -70])
  const markY = useTransform(aboutProgress, [0, 1], [-160, 160])
  const markRotate = useTransform(aboutProgress, [0, 1], [-8, 8])
  const markOpacity = useTransform(aboutProgress, [0, 0.5, 1], [0, 0.07, 0])

  const { scrollYProgress: whyProgress } = useScroll({
    target: whyRef,
    offset: ['start end', 'end start'],
  })
  const whyHeadingY = useTransform(whyProgress, [0, 1], [90, -60])
  const whyGlowY = useTransform(whyProgress, [0, 1], [200, -200])

  return (
    <div className="overflow-x-clip bg-black text-white">
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden px-6 sm:px-8 lg:px-12"
      >
        <motion.div
          className="absolute inset-[-20%]"
          style={{
            y: reducedMotion ? 0 : bgY,
            background:
              'radial-gradient(1100px 620px at 82% 8%, rgba(124,92,255,.20), transparent 60%), radial-gradient(900px 560px at 6% 20%, rgba(45,212,191,.14), transparent 60%), #000000',
          }}
        />

        <motion.div
          className="pointer-events-none absolute right-[-8%] top-1/2 w-[42vw] max-w-xl -translate-y-1/2 sm:right-[2%]"
          style={
            reducedMotion
              ? { opacity: 0.8 }
              : { y: heroArtY, rotate: heroArtRotate, scale: heroArtScale, opacity: heroArtOpacity }
          }
        >
          <motion.img
            src={heroArt}
            alt=""
            aria-hidden="true"
            className="w-full"
            animate={reducedMotion ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            y: reducedMotion ? 0 : heroTextY,
          }}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.35em] text-white/70">
            <span className="text-[#2DD4BF]">0</span> &rarr;{' '}
            <span className="text-[#7C5CFF]">&infin;</span>
            <span className="text-white/40">Learn &middot; Grow &middot; Repeat</span>
          </p>
          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
            People solutions across the employee lifecycle.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            Talent Acquisition &middot; Onboarding &middot; Manager Development &middot;
            Leadership &middot; Soft Skills — diagnosed, designed, delivered, and measured with
            you, not handed to you off the shelf.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              Start the conversation
            </Link>
            <Link
              to="/method"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              See the 4D Method
            </Link>
          </div>
        </motion.div>
      </section>

      <section
        ref={aboutRef}
        className="relative mx-auto flex max-w-4xl flex-col justify-center gap-10 px-6 py-32 sm:px-8 lg:px-12"
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute right-[-4rem] top-1/2 -translate-y-1/2 select-none text-[24rem] font-black leading-none text-white"
          style={
            reducedMotion
              ? { opacity: 0.05 }
              : { y: markY, rotate: markRotate, opacity: markOpacity }
          }
        >
          &infin;
        </motion.span>

        <motion.div
          className="relative"
          style={reducedMotion ? undefined : { y: visionY }}
        >
          <p className="mb-10 text-sm font-medium uppercase tracking-[0.35em] text-white/55">
            Our Vision
          </p>
          <div className="space-y-7">
            {aboutLines.map((line, index) => {
              const start = index / aboutLines.length
              const end = (index + 1) / aboutLines.length
              return (
                <AboutLine
                  key={line}
                  line={line}
                  start={start}
                  end={end}
                  progress={aboutProgress}
                />
              )
            })}
          </div>
        </motion.div>
      </section>

      <section ref={whyRef} className="relative overflow-hidden px-6 pb-28 sm:px-8 lg:px-12">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2"
          style={{
            y: reducedMotion ? 0 : whyGlowY,
            background:
              'radial-gradient(closest-side, rgba(124,92,255,.10), transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            className="mb-12 max-w-2xl"
            style={reducedMotion ? undefined : { y: whyHeadingY }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-white/55">
              Why CeroInfi
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              There is no shortage of training vendors. Here is what's different.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {usps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-7"
              >
                <div
                  className="mb-4 h-1.5 w-10 rounded-full"
                  style={{ background: item.accent }}
                />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
