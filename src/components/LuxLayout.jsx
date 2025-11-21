import NavBar from './NavBar'

export default function LuxLayout({ children }) {
  return (
    <div className="min-h-screen relative bg-[radial-gradient(ellipse_at_top_left,rgba(2,6,23,1),rgba(2,6,23,0.9)_40%,rgba(8,47,73,0.7)_75%)]">
      {/* ambient gold glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-400/10 to-transparent blur-2xl" />

      {/* subtle grid and grain for editorial texture */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
           style={{
             backgroundImage:
               'linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)',
             backgroundSize: '42px 42px, 42px 42px'
           }} />
      <div className="grain" />
      <div className="vignette" />

      <NavBar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      <footer className="relative z-10 border-t border-white/10 py-6 text-center text-blue-100/60">
        Crafted in an editorial spirit — Solaris Studio
      </footer>
    </div>
  )
}
