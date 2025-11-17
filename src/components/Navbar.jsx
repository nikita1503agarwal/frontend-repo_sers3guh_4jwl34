import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/wavelab', label: 'WaveLab' },
  { to: '/branding', label: 'Branding' },
  { to: '/signage', label: 'Digital Signage' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-white text-xl">
            Brand Waves
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-white ${isActive ? 'text-white' : 'text-white/70'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="#contact"
              className="ml-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-blue-600/90 hover:bg-blue-500 transition-colors"
            >
              Talk to the Founder
            </Link>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-black/50 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-base py-2 ${isActive ? 'text-white' : 'text-white/80'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full px-4 py-2 text-center text-sm font-semibold text-white bg-blue-600/90 hover:bg-blue-500 transition-colors"
            >
              Talk to the Founder
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
