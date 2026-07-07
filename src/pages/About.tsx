import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const guide = [
  {
    title: 'Survey the terrain',
    description:
      'We assess skills, gaps and aspirations before pointing anywhere — the route fits your people, not a catalogue.',
    accent: '#2DD4BF',
  },
  {
    title: 'Chart the route',
    description:
      'Clear milestones and sprint goals for each track, so everyone knows the next step and why it matters.',
    accent: '#7C5CFF',
  },
  {
    title: 'Walk beside you',
    description:
      'Coaching, practice and reinforcement in the flow of work — we stay until new behaviour becomes the norm.',
    accent: '#A3E635',
  },
]

const loop = [
  {
    band: 'LEARN',
    accent: '#2DD4BF',
    steps: [
      { step: '01', title: 'Discover', agile: 'Agile: Plan', description: 'Survey skills, gaps, aspirations and culture. Turn what we find into a clear backlog of growth priorities.' },
      { step: '02', title: 'Design', agile: 'Agile: Design', description: 'Co-design the learning journey. Define sprint goals and what success looks like for each track.' },
    ],
  },
  {
    band: 'GROW',
    accent: '#7C5CFF',
    steps: [
      { step: '03', title: 'Build', agile: 'Agile: Develop', description: 'Deliver in short sprints — workshops, coaching, practice and on-the-job application.' },
      { step: '04', title: 'Validate', agile: 'Agile: Test', description: 'Measure behaviour change, not attendance. Feedback loops, assessments and 360s.' },
      { step: '05', title: 'Apply', agile: 'Agile: Deploy', description: 'Release skills into daily work. Managers reinforce, leaders model, behaviour embeds.' },
    ],
  },
  {
    band: 'REPEAT',
    accent: '#F59E0B',
    steps: [
      { step: '06', title: 'Reflect', agile: 'Agile: Retrospect', description: 'Gather at the summit and look back honestly — what worked, what didn’t, what’s next.' },
    ],
  },
]

const tracks = [
  {
    name: 'Base Camp',
    subtitle: 'People Development',
    description: 'For every individual contributor.',
    items: ['Core & role-craft skills', 'Self-leadership & mindset', 'Collaboration & communication'],
    accent: '#2DD4BF',
  },
  {
    name: 'The Ascent',
    subtitle: 'Manager Development',
    description: 'For those who lead others.',
    items: ['Coaching & feedback', 'Performance & delegation', 'Building healthy teams'],
    accent: '#7C5CFF',
  },
  {
    name: 'The Summit',
    subtitle: 'Leadership Development',
    description: 'For senior & executive leaders.',
    items: ['Vision & strategy', 'Culture & change', 'Executive presence'],
    accent: '#F59E0B',
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
    <div className="bg-black text-white">
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center sm:px-8 lg:px-12">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-white/55">
          Our Vision
        </p>
        <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-6xl">
          From{' '}
          <span className="text-[#2DD4BF]">Cero</span> to{' '}
          <span className="bg-gradient-to-r from-[#38BDF8] to-[#7C5CFF] bg-clip-text text-transparent">
            Infinite
          </span>
          .
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
          We see a world where growth never falls to zero — and never stops short of infinite.
          Every learner starts somewhere: a single skill, a first team, a new title. Our job is to
          make sure the journey from that starting point never ends — continuous, compounding,
          human development at every altitude.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-white/55">
            Meet Your Tour Guide
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
            We don't hand you a map. We walk the trail with you.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60">
            Most development ends when the workshop does. CeroInfi works differently — like a
            guide who knows the terrain, we stay beside your people, managers and leaders across
            the whole climb.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {guide.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="mb-4 h-1.5 w-10 rounded-full" style={{ background: item.accent }} />
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.02] px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-white/55">
              How The Journey Works
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              We travel in sprints — and the loop never closes.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/60">
              Growth isn't a straight line or a one-off course. Like the Agile software lifecycle,
              it's an iterative loop — small cycles that keep repeating, each one building on the
              last.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {loop.map((band) => (
              <div key={band.band}>
                <p
                  className="mb-4 text-xs font-bold uppercase tracking-[0.3em]"
                  style={{ color: band.accent }}
                >
                  {band.band}
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {band.steps.map((step) => (
                    <div
                      key={step.step}
                      className="rounded-[1.1rem] border border-white/10 bg-black p-6"
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

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-white/55">
            Three Expeditions, One Loop
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
            The same sprint cycle, tuned to every altitude.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60">
            People, managers and leaders climb different slopes, but they follow the same Learn
            &infin; Grow &infin; Repeat loop.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {tracks.map((track, index) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: track.accent }}
              >
                {track.name}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{track.subtitle}</h3>
              <p className="mt-2 text-sm text-white/50">{track.description}</p>
              <ul className="mt-5 space-y-2">
                {track.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-white/60">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: track.accent }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.02] px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <div>
              <p className="text-5xl font-black text-[#2DD4BF]">3</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/50">
                Development Tracks
              </p>
            </div>
            <div>
              <p className="text-5xl font-black text-[#7C5CFF]">6</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/50">Sprint Stops</p>
            </div>
            <div>
              <p className="text-5xl font-black text-[#F59E0B]">&infin;</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/50">
                Growth Mindset
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className="text-center sm:text-left">
                <h4 className="text-base font-semibold text-white">{outcome.title}</h4>
                <p className="mt-1 text-sm text-white/50">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-28 text-center sm:px-8 lg:px-12">
        <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Ready to start the climb?
        </h2>
        <p className="mt-4 text-base leading-7 text-white/60">
          Let's map your first sprint together — discover where your people, managers and leaders
          stand today, and chart the route to what's next.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
        >
          Begin the journey &rarr;
        </Link>
      </section>
    </div>
  )
}

export default About
