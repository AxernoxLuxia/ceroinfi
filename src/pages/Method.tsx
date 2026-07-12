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
      'Stakeholder interviews, surveys, and a review of your attrition, hiring, and engagement data, to pinpoint root causes rather than symptoms.',
    accent: '#00AFD7',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Custom curriculum, frameworks, and toolkits built around your roles, culture, and language, not pulled from a template.',
    accent: '#00AFD7',
  },
  {
    step: '03',
    title: 'Deliver',
    description:
      'Facilitator-led workshops, 1:1 coaching, cohort mentorship, and manager toolkits, delivered in-person or virtually.',
    accent: '#00AFD7',
  },
  {
    step: '04',
    title: 'Measure',
    description:
      'Pre/post assessments, manager feedback loops, and lifecycle metrics like time-to-productivity, 90-day retention, and eNPS, tied back to business outcomes.',
    accent: '#00AFD7',
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
      className="relative overflow-hidden rounded-[1.75rem] border border-black/12 bg-surface p-8 shadow-[0_10px_40px_rgba(37,42,52,0.08)] backdrop-blur-sm sm:p-10"
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
        <span className="text-sm font-bold tracking-[0.1em] text-accent-safe">
          {card.step}
        </span>
        <div>
          <h3 className="text-2xl font-semibold text-black sm:text-3xl">{card.title}</h3>
          <p className="mt-3 max-w-xl text-base leading-7 text-body">{card.description}</p>
        </div>
      </div>
      <div className="relative mt-6 h-1 w-16 overflow-hidden rounded-full bg-black/10">
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
    <section id="method" className="min-h-screen px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:gap-16">
        <div className="lg:w-[40%]">
          <div className="sticky top-24">
            <h1 className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.03em] text-black text-balance sm:text-5xl lg:text-6xl">
              The CeroInfi 4D Method
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-body">
              A structured, human-centered approach that helps organizations move from insight to
              action with clarity and purpose. Think of it as a menu rather than a fixed package:
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
