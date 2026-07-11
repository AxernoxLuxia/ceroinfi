import { Link } from 'react-router-dom'
import logoMark from '../assets/logos/logo-mark.png'

function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center text-white">
      <img src={logoMark} alt="" aria-hidden="true" className="mb-6 h-12 w-auto opacity-90" />
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-subtle">404</p>
      <h1 className="mt-4 text-3xl font-black tracking-[-0.02em] sm:text-5xl">
        This route hasn't started its climb yet.
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-body">
        The page you're looking for doesn't exist. Let's get you back to solid ground.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
      >
        Back to home
      </Link>
    </div>
  )
}

export default NotFound
