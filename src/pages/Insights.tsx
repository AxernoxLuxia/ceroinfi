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
    <div className="text-white">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 sm:px-8 lg:px-12">
        <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-subtle">
          <span className="h-[3px] w-6 rounded-full bg-accent" />
          Ceroinfi Insights
        </p>
        <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.03em] text-balance sm:text-6xl">
          The science of how people{' '}
          <span className="text-accent-safe">actually learn</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
          Evidence-led thinking on learning design, measurement, and building organizations that
          get faster at learning than the world changes around them.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-2.5">
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

      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                className="group flex h-full flex-col rounded-[1.25rem] border border-white/12 bg-surface p-6 shadow-[0_8px_28px_rgba(37,42,52,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
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
          ? 'border-white bg-white text-black'
          : 'border-white/15 bg-surface/50 text-white hover:border-white/40'
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
