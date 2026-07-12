import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const guide = [
  {
    title: 'Survey the terrain',
    description:
      'We assess skills, gaps and aspirations before pointing anywhere, so the route fits your people rather than a catalogue.',
  },
  {
    title: 'Chart the route',
    description:
      'Clear milestones and sprint goals for each track, so everyone knows the next step and why it matters.',
  },
  {
    title: 'Walk beside you',
    description:
      'Coaching, practice and reinforcement in the flow of work. We stay until the new behaviour becomes the norm.',
  },
]

const loop = [
  {
    band: 'LEARN',
    steps: [
      { step: '01', title: 'Discover', agile: 'Agile: Plan', description: 'Survey skills, gaps, aspirations and culture. Turn what we find into a clear backlog of growth priorities.' },
      { step: '02', title: 'Design', agile: 'Agile: Design', description: 'Co-design the learning path. Define sprint goals and what success looks like for each track.' },
    ],
  },
  {
    band: 'GROW',
    steps: [
      { step: '03', title: 'Build', agile: 'Agile: Develop', description: 'Deliver in short sprints: workshops, coaching, practice and on-the-job application.' },
      { step: '04', title: 'Validate', agile: 'Agile: Test', description: 'Measure behaviour change, not attendance. Feedback loops, assessments and 360s.' },
      { step: '05', title: 'Apply', agile: 'Agile: Deploy', description: 'Release skills into daily work. Managers reinforce, leaders model, behaviour embeds.' },
    ],
  },
  {
    band: 'REPEAT',
    steps: [
      { step: '06', title: 'Reflect', agile: 'Agile: Retrospect', description: 'Gather at the summit and look back honestly: what worked, what didn\'t, what\'s next.' },
    ],
  },
]

const tracks = [
  {
    name: 'Base Camp',
    subtitle: 'People Development',
    description: 'For every individual contributor.',
    items: ['Core & role-craft skills', 'Self-leadership & mindset', 'Collaboration & communication'],
  },
  {
    name: 'The Ascent',
    subtitle: 'Manager Development',
    description: 'For those who lead others.',
    items: ['Coaching & feedback', 'Performance & delegation', 'Building healthy teams'],
  },
  {
    name: 'The Summit',
    subtitle: 'Leadership Development',
    description: 'For senior & executive leaders.',
    items: ['Vision & strategy', 'Culture & change', 'Executive presence'],
  },
]

const outcomes = [
  { title: 'Engaged people', description: 'who own their own growth.' },
  { title: 'Confident managers', description: 'who coach instead of control.' },
  { title: 'Aligned leaders', description: 'who set direction and model it.' },
  { title: 'Measurable change', description: 'behaviour, not just attendance.' },
]

function About() {
  return (
    <div className="text-black">
      {/* ── Vision hero ── */}
      <section className="mx-auto max-w-4xl px-6 pb-[clamp(4rem,8vw,6rem)] pt-28 text-center sm:px-8 lg:px-10">
        <h1 className="text-[clamp(2.75rem,6vw,5.5rem)] font-black leading-[1] tracking-[-0.03em] text-balance">
          Learn &middot; <span className="text-accent-safe">Grow</span> &middot; Repeat
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-body sm:text-xl sm:leading-9">
          We see a world where growth never falls to zero, and never stops short of infinite.
          Every learner starts somewhere: a single skill, a first team, a new title. Our job is to
          make sure the climb from that starting point never ends. Development that is continuous and human,
          and it builds on itself at every altitude.
        </p>
      </section>

      {/* ── Tour guide — light, varied layout ── */}
      <section className="mx-auto max-w-7xl px-6 pb-[clamp(5rem,12vw,9rem)] sm:px-8 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-balance">
            We don't just hand you a map. We walk the trail with you.
          </h2>
          <p className="mt-5 text-base leading-7 text-body sm:text-lg sm:leading-8">
            Most development ends when the workshop does. CeroInfi works differently. Like a
            guide who knows the terrain, we stay beside your people, managers and leaders across
            the whole climb.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-12">
          {guide.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="text-[clamp(2.5rem,5vw,3.5rem)] font-black text-ink/15">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-body">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Sprint loop — dark section ── */}
      <section className="bg-ink px-6 py-[clamp(5rem,12vw,9rem)] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white text-balance">
              We travel in sprints, and the loop never closes.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Growth isn't a straight line or a one-off course. Like the Agile software lifecycle,
              it's an iterative loop of small cycles that keep repeating, each one building on the
              last.
            </p>
          </div>

          <div className="flex flex-col gap-14">
            {loop.map((band) => (
              <div key={band.band}>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  {band.band}
                </p>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {band.steps.map((step) => (
                    <div
                      key={step.step}
                      className="rounded-xl border border-white/10 p-7"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs font-bold text-white/40">{step.step}</span>
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/35">
                        {step.agile}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/60">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three tracks — light section ── */}
      <section className="mx-auto max-w-7xl px-6 py-[clamp(5rem,12vw,9rem)] sm:px-8 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-balance">
            The same sprint cycle, tuned to every altitude.
          </h2>
          <p className="mt-5 text-base leading-7 text-body sm:text-lg sm:leading-8">
            People, managers and leaders climb different slopes, but they follow the same Learn
            &infin; Grow &infin; Repeat loop.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-black/8 bg-surface p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-safe">
                {track.name}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-black">{track.subtitle}</h3>
              <p className="mt-2 text-sm text-subtle">{track.description}</p>
              <ul className="mt-6 space-y-3">
                {track.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Outcomes — dark accent band ── */}
      <section className="bg-ink px-6 py-[clamp(4rem,10vw,7rem)] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="mx-auto max-w-3xl text-center text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-snug tracking-[-0.01em] text-white text-balance">
            <span className="text-accent">Three</span> development tracks,{' '}
            <span className="text-accent">six</span> sprint stops, and{' '}
            <span className="text-accent">one</span> loop that never closes.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className="text-center">
                <h4 className="text-base font-semibold text-white">{outcome.title}</h4>
                <p className="mt-1 text-sm text-white/50">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-3xl px-6 py-[clamp(5rem,12vw,9rem)] text-center sm:px-8 lg:px-10">
        <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.02em]">
          Ready to start the climb?
        </h2>
        <p className="mt-5 text-base leading-7 text-body sm:text-lg sm:leading-8">
          Let's map your first sprint together. We will find where your people, managers and leaders
          stand today, and chart the route to what's next.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Begin the climb &rarr;
        </Link>
      </section>
    </div>
  )
}

export default About
