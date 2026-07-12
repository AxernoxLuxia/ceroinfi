import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

interface MethodCard {
  step: string
  title: string
  description: string
}

const cards: MethodCard[] = [
  {
    step: '01',
    title: 'Diagnose',
    description:
      'Stakeholder interviews, surveys, and a review of your attrition, hiring, and engagement data, to pinpoint root causes rather than symptoms.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Custom curriculum, frameworks, and toolkits built around your roles, culture, and language, not pulled from a template.',
  },
  {
    step: '03',
    title: 'Deliver',
    description:
      'Facilitator-led workshops, 1:1 coaching, cohort mentorship, and manager toolkits, delivered in-person or virtually.',
  },
  {
    step: '04',
    title: 'Measure',
    description:
      'Pre/post assessments, manager feedback loops, and lifecycle metrics like time-to-productivity, 90-day retention, and eNPS, tied back to business outcomes.',
  },
]

function MethodCardItem({ card, index }: { card: MethodCard; index: number }) {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const numberY = useTransform(scrollYProgress, [0, 1], [70, -70])
  const numberOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.08, 0])
  const cardY = useTransform(scrollYProgress, [0, 0.4], [60, 0])
  const barWidth = useTransform(scrollYProgress, [0.15, 0.5], ['0%', '100%'])

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      style={reducedMotion ? undefined : { y: cardY }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10"
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none text-[9rem] font-black leading-none text-white"
        style={reducedMotion ? { opacity: 0.04 } : { y: numberY, opacity: numberOpacity }}
      >
        {card.step}
      </motion.span>

      <div className="relative flex items-start gap-5">
        <span className="text-sm font-bold tracking-[0.1em] text-accent">
          {card.step}
        </span>
        <div>
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">{card.title}</h3>
          <p className="mt-3 max-w-xl text-base leading-7 text-white/60">{card.description}</p>
        </div>
      </div>
      <div className="relative mt-6 h-1 w-16 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-accent"
          style={{ width: reducedMotion ? '100%' : barWidth }}
        />
      </div>
    </motion.article>
  )
}

function Method() {
  return (
    <div className="text-black">
      {/* ── Dark section — split layout ── */}
      <section className="bg-ink px-6 py-[clamp(5rem,12vw,9rem)] pt-28 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 lg:flex-row lg:gap-20">
          <div className="lg:w-[40%]">
            <div className="sticky top-28">
              <h1 className="max-w-md text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-white text-balance">
                The CeroInfi 4D Method
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-8 text-white/60 sm:text-xl sm:leading-9">
                A structured, human-centered approach that helps organizations move from insight to
                action with clarity and purpose. Think of it as a menu rather than a fixed package:
                every phase can be engaged as a standalone workshop, a short diagnostic sprint, or a
                multi-month program.
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-6">
            {cards.map((card, index) => (
              <MethodCardItem key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-[clamp(4rem,10vw,7rem)] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-black text-balance">
            See how the method applies to your team.
          </h2>
          <p className="mt-5 text-base leading-7 text-body sm:text-lg sm:leading-8">
            Every engagement starts with a short diagnostic conversation. We recommend a starting
            point based on where your people are today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Start the conversation &rarr;
            </Link>
            <Link
              to="/solutions"
              className="rounded-full border border-black/20 px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:border-black/50"
            >
              View solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Method
