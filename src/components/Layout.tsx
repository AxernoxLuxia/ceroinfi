import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logoWordmarkMono from '../assets/logos/logo-wordmark-mono.png'
import AnimatedBackground from './AnimatedBackground'

const links = [
  { to: '/', label: 'Home' },
  { to: '/method', label: 'Method' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/insights', label: 'Insights' },
  { to: '/about', label: 'About' },
]

const footerNav = {
  'Company': [
    { to: '/about', label: 'About' },
    { to: '/method', label: 'The 4D Method' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/contact', label: 'Contact' },
  ],
  'Resources': [
    { to: '/insights', label: 'Insights' },
  ],
}

function Brand() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={logoWordmarkMono}
        alt="CeroInfi — Learn, Grow, Repeat"
        className="h-7 w-auto sm:h-8"
      />
    </Link>
  )
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen text-black antialiased">
      <AnimatedBackground />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <Brand />

          <div className="hidden items-center gap-7 text-sm text-white/75 md:flex">
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
              className="rounded-full border border-white/25 px-5 py-1.5 font-semibold text-white transition-colors hover:border-white/60"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
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
          <div className="border-t border-white/10 bg-ink px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-white/75">
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

      <main className="relative z-10 pt-16">
        <Outlet />
      </main>

      <footer className="relative z-10 bg-ink text-white/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 border-b border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
            <div>
              <img
                src={logoWordmarkMono}
                alt="CeroInfi"
                className="h-7 w-auto"
              />
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
                Continuous, compounding, human development for people, managers, and leaders at every altitude.
              </p>
              <p className="mt-6 text-sm font-medium text-accent">
                Learn &infin; Grow &infin; Repeat
              </p>
            </div>

            {Object.entries(footerNav).map(([heading, items]) => (
              <div key={heading}>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                  {heading}
                </p>
                <ul className="mt-4 space-y-3">
                  {items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-white/40 sm:flex-row">
            <span>&copy; {new Date().getFullYear()} CeroInfi. All rights reserved.</span>
            <span>Learn &infin; Grow &infin; Repeat</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
