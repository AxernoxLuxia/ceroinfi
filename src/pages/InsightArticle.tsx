import { Link, Navigate, useParams } from 'react-router-dom'
import { POSTS } from '../data/posts'

function InsightArticle() {
  const { slug } = useParams<{ slug: string }>()
  const post = POSTS.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/insights" replace />
  }

  return (
    <div className="text-black">
      {/* ── Header — dark ── */}
      <section className="bg-ink px-6 pb-[clamp(3rem,6vw,5rem)] pt-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/insights"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white"
          >
            &larr; All insights
          </Link>

          <span
            className="block text-xs font-bold uppercase tracking-[0.16em]"
            style={{ color: '#00AFD7' }}
          >
            {post.category}
          </span>
          <h1 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em] text-white text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-white/45">{post.readtime} &middot; Ceroinfi Insights</p>
        </div>
      </section>

      {/* ── Article body — light ── */}
      <section className="px-6 py-[clamp(3rem,8vw,5rem)] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div
            className="article-content"
            style={{ '--acc': post.accent } as React.CSSProperties}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="mt-16 flex items-center gap-3 border-t border-black/10 pt-8 text-xs uppercase tracking-[0.2em] text-subtle">
            <span>
              <span className="text-accent-safe">0</span> &rarr;{' '}
              <span className="text-accent-safe">&infin;</span>
            </span>
            Ceroinfi &middot; Learn &infin; Grow &infin; Repeat
          </div>
        </div>
      </section>
    </div>
  )
}

export default InsightArticle
