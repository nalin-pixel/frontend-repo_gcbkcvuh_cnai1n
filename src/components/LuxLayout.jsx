import NavBar from './NavBar'

export default function LuxLayout({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,left_rgba(8,47,73,0.6),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(15,23,42,0.9),rgba(2,6,23,1))] relative">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
           style={{
             backgroundImage:
               'linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)',
             backgroundSize: '32px 32px, 32px 32px'
           }} />

      <NavBar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      <footer className="relative z-10 border-t border-white/10 py-6 text-center text-blue-100/60">
        Crafted as a premium demo experience — Solaris Studio
      </footer>
    </div>
  )
}
