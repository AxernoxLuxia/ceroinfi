import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const aboutLines = [
  'From zero to infinite.',
  'Every learner starts somewhere: a single skill, a first team, a new title. Our job is to make sure the climb from that starting point never ends.',
  'Continuous, human development that builds on itself, diagnosed, designed, delivered, and measured at every stage of the employee lifecycle.',
]

const usps = [
  {
    title: 'End-to-end lifecycle partner',
    description:
      'We work across acquisition, onboarding, management, and leadership, so the experience is consistent from hire to leader, not a patchwork of disconnected vendors.',
  },
  {
    title: 'Role-specific design',
    description:
      'Onboarding for a new joiner, a competency lead, an account manager, and a location head are each treated as distinct problems with distinct solutions.',
  },
  {
    title: 'Built on the 4D Method',
    description:
      'Every engagement is diagnosed and measured, not just delivered, so you see the business impact, not just attendance numbers.',
  },
  {
    title: 'Early-tenure & first-time-manager focus',
    description:
      'We specialize in the two most attrition-prone, most overlooked moments in a career: the first 90 days, and the first promotion into management.',
  },
  {
    title: 'Modular, menu-based engagement',
    description:
      'Start with one workshop or one program. There is no requirement to buy a large annual contract to get started.',
  },
  {
    title: 'Founder-led, hands-on customization',
    description:
      'Every framework, template, and toolkit is adapted to your language, roles, and culture, rather than handed over as a generic deck.',
  },
]

function AboutLine({
  line,
  start,
  end,
  progress,
  reducedMotion,
}: {
  line: string
  start: number
  end: number
  progress: MotionValue<number>
  reducedMotion: boolean
}) {
  const lineProgress = useTransform(progress, [start, end], [0, 1])
  // Reveal from a legible muted tone to ink on the light band, sharpening
  // already-readable text rather than gating legibility on scroll.
  const color = useTransform(lineProgress, [0, 1], ['#6B7280', '#252A34'])

  return (
    <motion.p
      style={reducedMotion ? { color: '#252A34' } : { color }}
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

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start'],
  })

  // Right-side brand watermark: parallax drift + a 0 -> ∞ transition on scroll.
  // "0" holds while entering, then crossfades/scales into "∞" as you scroll past.
  const zeroOpacity = useTransform(aboutProgress, [0.08, 0.52], [0.16, 0])
  const zeroScale = useTransform(aboutProgress, [0.08, 0.52], [1, 0.6])
  const infOpacity = useTransform(aboutProgress, [0.34, 0.74], [0, 0.16])
  const infScale = useTransform(aboutProgress, [0.34, 0.74], [0.6, 1])
  const markY = useTransform(aboutProgress, [0, 1], [130, -130])

  const { scrollYProgress: whyProgress } = useScroll({
    target: whyRef,
    offset: ['start end', 'end start'],
  })
  const whyGlowY = useTransform(whyProgress, [0, 1], [200, -200])

  return (
    <div className="overflow-x-clip text-black">
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden px-6 sm:px-8 lg:px-12"
      >
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            y: reducedMotion ? 0 : heroTextY,
          }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.35em] text-body">
            <span className="text-accent-safe">0</span> &rarr;{' '}
            <span className="text-accent-safe">&infin;</span>
            <span className="text-subtle">Learn &middot; Grow &middot; Repeat</span>
          </p>
          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-black sm:text-6xl md:text-7xl">
            People solutions across the employee lifecycle.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-body">
            Talent Acquisition &middot; Onboarding &middot; Manager Development &middot;
            Leadership &middot; Soft Skills. Diagnosed, designed, delivered, and measured with
            you, built around your roles rather than pulled off a shelf.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Start the conversation
            </Link>
            <Link
              to="/method"
              className="rounded-full border border-black/20 px-7 py-3 text-sm font-semibold text-black transition-colors hover:border-black/50"
            >
              See the 4D Method
            </Link>
          </div>
        </motion.div>
      </section>

      <section
        ref={aboutRef}
        className="relative overflow-hidden bg-surface/50 px-6 py-32 sm:px-8 lg:px-12"
      >
        {/* Brand watermark on the right: parallax drift + a 0 -> ∞ transition on scroll. */}
        {reducedMotion ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-[2%] top-1/2 -translate-y-1/2 select-none text-[clamp(14rem,34vw,28rem)] font-black leading-none text-accent-safe/15"
          >
            &infin;
          </span>
        ) : (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-[2%]">
            <motion.div
              aria-hidden="true"
              style={{ y: markY }}
              className="grid place-items-center [&>*]:[grid-area:1/1]"
            >
              <motion.span
                style={{ opacity: zeroOpacity, scale: zeroScale }}
                className="select-none text-[clamp(14rem,34vw,28rem)] font-black leading-none text-accent-safe"
              >
                0
              </motion.span>
              <motion.span
                style={{ opacity: infOpacity, scale: infScale }}
                className="select-none text-[clamp(14rem,34vw,28rem)] font-black leading-none text-accent-safe"
              >
                &infin;
              </motion.span>
            </motion.div>
          </div>
        )}

        <div className="relative mx-auto max-w-4xl">
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
                  reducedMotion={Boolean(reducedMotion)}
                />
              )
            })}
          </div>
        </div>
      </section>

      <section ref={whyRef} className="relative overflow-hidden px-6 pb-28 pt-8 sm:px-8 lg:px-12">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2"
          style={{
            y: reducedMotion ? 0 : whyGlowY,
            background:
              'radial-gradient(closest-side, rgba(0,175,215,.10), transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-5xl">
              There is no shortage of training vendors. Here is what's different.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {usps.map((item, index) => {
              const lead = index === 0
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
                  className={`rounded-[1.25rem] border border-black/12 bg-surface p-7 shadow-[0_8px_28px_rgba(37,42,52,0.06)] ${
                    lead ? 'sm:col-span-2 lg:row-span-2 lg:flex lg:flex-col lg:justify-end' : ''
                  }`}
                >
                  <div
                    className="mb-4 h-1.5 w-10 rounded-full bg-accent"
                  />
                  <h3
                    className={`font-semibold text-black ${
                      lead ? 'text-2xl tracking-[-0.01em]' : 'text-lg'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 leading-6 text-body ${
                      lead ? 'text-base leading-7' : 'text-sm'
                    }`}
                  >
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
