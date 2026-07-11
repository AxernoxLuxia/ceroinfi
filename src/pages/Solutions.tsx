import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface SolutionItem {
  title: string
  description: string
  delivers: string[]
  accent: string
  colSpan: 'default' | 'wide' | 'tall'
}

const solutions: SolutionItem[] = [
  {
    title: 'Talent Acquisition',
    description:
      'Helping recruiters attract, assess, and close the right talent, faster — sharper positioning, consistent evaluation, and a hiring experience candidates don’t drop out of.',
    delivers: [
      'EVP and employer branding sprint',
      'Bias-aware structured interview certification',
      'Candidate experience audit and playbook',
    ],
    accent: '#00AFD7',
    colSpan: 'wide',
  },
  {
    title: 'Hiring Managers',
    description:
      'Equipping managers to hire well, and to keep who they hire, with structure that starts before the requisition opens and doesn’t end at the offer.',
    delivers: [
      'Structured interviewing certification',
      'Manager accountability framework, offer to Day 90',
      'Retention-risk indicator training',
    ],
    accent: '#00AFD7',
    colSpan: 'default',
  },
  {
    title: 'Onboarding',
    description:
      'Onboarding is not one program — it’s a different experience for the new joiner, the trainer, the account manager, and the location head. We design each as a parallel journey.',
    delivers: [
      'Phased 30-60-90 day onboarding roadmap',
      'Role-specific journeys: joiner, competency lead, account manager, location head',
    ],
    accent: '#00AFD7',
    colSpan: 'default',
  },
  {
    title: 'Manager Mentorship',
    description:
      'The hardest promotion in any career is the first one into people management. Our four-phase program pairs structured learning with real mentorship.',
    delivers: [
      'Pre-Transition, Foundation, Application, Mastery phases',
      '1:1 mentor pairing plus monthly peer cohort circles',
      'Capstone project and manager scorecard',
    ],
    accent: '#00AFD7',
    colSpan: 'tall',
  },
  {
    title: 'Leadership 1:1s',
    description:
      'The 1:1 is the single highest-leverage habit a leader has — most just aren’t taught how to run one.',
    delivers: [
      '1:1 toolkit, templates, and coaching-question bank',
      'Quarterly leadership coaching cohort',
    ],
    accent: '#00AFD7',
    colSpan: 'default',
  },
  {
    title: 'Soft Skills',
    description:
      'Short, focused sessions that fix specific, everyday friction points — communication, conflict, presentation, and cross-functional collaboration.',
    delivers: [
      'Standalone session plans, 2–3 hours each',
      'Pre-session diagnostic and post-session action commitment',
    ],
    accent: '#00AFD7',
    colSpan: 'default',
  },
  {
    title: 'First Year Plan',
    description:
      'A structured 30/60/90/180/365-day map for the single highest-attrition-risk year of employment, matched to where research shows early attrition risk actually peaks.',
    delivers: [
      'Milestone plan tied to Day 45–90 and Day 180 risk windows',
      'Role-specific content plugs into the same skeleton',
    ],
    accent: '#00AFD7',
    colSpan: 'wide',
  },
]

function Solutions() {
  const reducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const glowY = useTransform(scrollYProgress, [0, 1], [300, -300])
  const headingY = useTransform(scrollYProgress, [0, 0.3], [60, 0])

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10%] top-1/3 h-[700px] w-[700px]"
        style={{
          y: reducedMotion ? 0 : glowY,
          background: 'radial-gradient(closest-side, rgba(0,175,215,.08), transparent 70%)',
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-2/3 h-[700px] w-[700px]"
        style={{
          y: reducedMotion ? 0 : glowY,
          background: 'radial-gradient(closest-side, rgba(0,175,215,.08), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-10 max-w-2xl"
          style={reducedMotion ? undefined : { y: headingY }}
        >
          <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance sm:text-5xl">
            Core solutions designed to support people through every stage of growth.
          </h1>
          <p className="mt-4 text-base leading-7 text-body">
            This is a menu, not a fixed package. Every section can be engaged as a standalone
            workshop, a short diagnostic sprint, or a multi-month program.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[minmax(240px,auto)]">
          {solutions.map((item, index) => {
            const spanClass =
              item.colSpan === 'wide'
                ? 'md:col-span-2'
                : item.colSpan === 'tall'
                  ? 'md:row-span-2'
                  : ''

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-white/12 bg-surface p-7 shadow-[0_8px_28px_rgba(37,42,52,0.06)] transition-colors duration-300 hover:border-white/25 ${spanClass}`}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: item.accent }}
                />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-body">{item.description}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {item.delivers.map((line) => (
                    <li key={line} className="flex gap-2.5 text-sm leading-6 text-subtle">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: item.accent }}
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Solutions
