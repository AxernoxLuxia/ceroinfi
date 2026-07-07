import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface MethodCard {
  step: string
  title: string
  description: string
  accent: string
}

const cards: MethodCard[] = [
  {
    step: '01',
    title: 'Diagnose',
    description:
      'Stakeholder interviews, surveys, and data review — attrition, hiring, engagement — to pinpoint root causes rather than symptoms.',
    accent: '#2DD4BF',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Custom curriculum, frameworks, and toolkits built around your roles, culture, and language. Never an off-the-shelf deck.',
    accent: '#7C5CFF',
  },
  {
    step: '03',
    title: 'Deliver',
    description:
      'Facilitator-led workshops, 1:1 coaching, cohort mentorship, and manager toolkits, delivered in-person or virtually.',
    accent: '#A3E635',
  },
  {
    step: '04',
    title: 'Measure',
    description:
      'Pre/post assessments, manager feedback loops, and lifecycle metrics — time-to-productivity, 90-day retention, eNPS — tied back to business outcomes.',
    accent: '#F59E0B',
  },
]

function MethodCardItem({ card, index }: { card: MethodCard; index: number }) {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // The oversized step number sails through the card as it crosses the viewport
  const numberY = useTransform(scrollYProgress, [0, 1], [70, -70])
  const numberOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0])
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
      className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_60px_rgba(255,255,255,0.03)] backdrop-blur-sm sm:p-10"
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none text-[9rem] font-black leading-none"
        style={{
          color: card.accent,
          ...(reducedMotion ? { opacity: 0.08 } : { y: numberY, opacity: numberOpacity }),
        }}
      >
        {card.step}
      </motion.span>

      <div className="relative flex items-start gap-5">
        <span className="text-sm font-bold tracking-[0.1em]" style={{ color: card.accent }}>
          {card.step}
        </span>
        <div>
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">{card.title}</h3>
          <p className="mt-3 max-w-xl text-base leading-7 text-white/70">{card.description}</p>
        </div>
      </div>
      <div className="relative mt-6 h-1 w-16 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: card.accent,
            width: reducedMotion ? '100%' : barWidth,
          }}
        />
      </div>
    </motion.article>
  )
}

function Method() {
  return (
    <section id="method" className="min-h-screen bg-black px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:gap-16">
        <div className="lg:w-[40%]">
          <div className="sticky top-24">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-white/55">
              How We Can Help
            </p>
            <h2 className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              The CeroInfi 4D Method
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">
              A structured, human-centered approach that helps organizations move from insight to
              action with clarity and purpose. This document is a menu, not a fixed package —
              every phase can be engaged as a standalone workshop, a short diagnostic sprint, or a
              multi-month program.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-5">
          {cards.map((card, index) => (
            <MethodCardItem key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Method
