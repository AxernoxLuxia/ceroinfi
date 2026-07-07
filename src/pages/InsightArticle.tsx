import { Link, Navigate, useParams } from 'react-router-dom'
import { POSTS } from '../data/posts'

function InsightArticle() {
  const { slug } = useParams<{ slug: string }>()
  const post = POSTS.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/insights" replace />
  }

  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-28 sm:px-8">
        <Link
          to="/insights"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
        >
          &larr; All insights
        </Link>

        <span
          className="text-xs font-bold uppercase tracking-[0.16em]"
          style={{ color: post.accent }}
        >
          {post.category}
        </span>
        <h1 className="mt-4 text-3xl font-black leading-[1.1] tracking-[-0.02em] sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-white/45">{post.readtime} &middot; Ceroinfi Insights</p>

        <div
          className="article-content mt-10"
          style={{ '--acc': post.accent } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-16 flex items-center gap-3 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.2em] text-white/40">
          <span>
            <span className="text-[#2DD4BF]">0</span> &rarr;{' '}
            <span className="text-[#7C5CFF]">&infin;</span>
          </span>
          Ceroinfi &middot; From zero to infinite.
        </div>
      </div>
    </div>
  )
}

export default InsightArticle
