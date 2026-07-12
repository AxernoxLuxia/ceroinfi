import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CATEGORIES, POSTS } from '../data/posts'

function Insights() {
  const [active, setActive] = useState<string>('All')

  const filtered = useMemo(
    () => (active === 'All' ? POSTS : POSTS.filter((p) => p.category === active)),
    [active],
  )

  return (
    <div className="text-black">
      {/* ── Header — dark ── */}
      <section className="bg-ink px-6 pb-[clamp(4rem,8vw,6rem)] pt-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-white text-balance">
            The science of how people{' '}
            <span className="text-accent">actually learn</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl sm:leading-9">
            Evidence-led thinking on learning design, measurement, and building organizations that
            get faster at learning than the world changes around them.
          </p>
        </div>
      </section>

      {/* ── Filters + grid — light ── */}
      <section className="mx-auto max-w-7xl px-6 py-[clamp(3rem,6vw,5rem)] sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <FilterChip label="All" active={active === 'All'} onClick={() => setActive('All')} />
          {CATEGORIES.map(([name, color]) => (
            <FilterChip
              key={name}
              label={name}
              color={color}
              active={active === name}
              onClick={() => setActive(name)}
            />
          ))}
          <span className="ml-auto text-sm text-subtle">
            {filtered.length} essay{filtered.length === 1 ? '' : 's'}
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-[clamp(5rem,12vw,9rem)] sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
            >
              <Link
                to={`/insights/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-black/8 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black/20"
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: post.accent }}
                >
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-snug tracking-[-0.01em]">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-body">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-subtle">{post.readtime}</span>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: post.accent }}
                  >
                    Read
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

function FilterChip({
  label,
  color,
  active,
  onClick,
}: {
  label: string
  color?: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 ${
        active
          ? 'border-ink bg-ink text-white'
          : 'border-black/12 bg-surface/50 text-black hover:border-black/30'
      }`}
    >
      {color ? (
        <span className="h-2 w-2 rounded-sm" style={{ background: active ? '#F7F9FB' : color }} />
      ) : null}
      {label}
    </button>
  )
}

export default Insights
