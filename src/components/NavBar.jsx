import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, CircleUserRound } from 'lucide-react'
import { useState } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-white/10' : 'text-blue-100/80 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-gradient-to-b from-slate-900/80 to-slate-900/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-300 ring-2 ring-white/20 shadow-[0_0_30px_rgba(234,179,8,0.35)]" />
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-wide">Solaris Studio</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-blue-200/70">Luxury Demos</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/buyer/login" className={linkClasses}>BuyerPortal 90</NavLink>
            <NavLink to="/availability" className={linkClasses}>Availability Widget</NavLink>
            <NavLink to="/tenantboard" className={linkClasses}>TenantBoard Lite</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <CircleUserRound className="text-white/80" />
            <button className="md:hidden text-white/80" onClick={() => setOpen(!open)}>
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-2 space-y-1 bg-slate-900/80">
            <NavLink to="/buyer/login" onClick={() => setOpen(false)} className={linkClasses}>BuyerPortal 90</NavLink>
            <NavLink to="/availability" onClick={() => setOpen(false)} className={linkClasses}>Availability Widget</NavLink>
            <NavLink to="/tenantboard" onClick={() => setOpen(false)} className={linkClasses}>TenantBoard Lite</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
