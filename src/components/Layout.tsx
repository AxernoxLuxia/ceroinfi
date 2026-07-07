import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/method', label: 'Method' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/insights', label: 'Insights' },
  { to: '/about', label: 'About' },
]

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5 text-sm font-bold tracking-[0.1em]">
      <span className="uppercase text-white">Ceroinfi</span>
      <span className="flex items-center gap-1 text-xs">
        <span className="text-[#2DD4BF]">0</span>
        <span className="text-white/40">&rarr;</span>
        <span className="text-[#7C5CFF] text-sm">&infin;</span>
      </span>
    </Link>
  )
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Brand />

          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `transition-colors duration-200 hover:text-white ${isActive ? 'text-white' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-full border border-white/20 px-4 py-1.5 font-semibold text-white transition-colors hover:border-white/50"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-5 bg-white transition-transform ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-white transition-transform ${menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`}
            />
          </button>
        </nav>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-black px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-white/80">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => (isActive ? 'text-white' : '')}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-white/40 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-[#2DD4BF]">0</span>
            <span>&rarr;</span>
            <span className="text-[#7C5CFF]">&infin;</span>
            <span className="ml-2">CeroInfi &middot; From zero to infinite.</span>
          </div>
          <div className="flex gap-6">
            <Link to="/insights" className="hover:text-white">
              Insights
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
