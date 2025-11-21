import { Link } from 'react-router-dom'
import LuxLayout from './components/LuxLayout'
import { Crown, ArrowRight, Building2, UserRound, PanelsTopLeft } from 'lucide-react'

export default function App() {
  return (
    <LuxLayout>
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/70 to-slate-900/30 p-8 md:p-12">
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-400/20 to-yellow-200/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-400/10 to-cyan-300/10 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-200 text-xs">
              <Crown className="h-3.5"/> Solaris Editorial Suite
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-light tracking-tight text-white font-serif-display leading-[1.1]">
              Un aer de revistă de bijuterii,
              <span className="block gold-text">calm, rafinat, fără grabă.</span>
            </h1>
            <p className="mt-5 text-blue-100/80 text-lg max-w-xl">
              Trei experiențe interactive prezentate în stil editorial — imagini ample, ritm lent, accente de aur și micro-interacțiuni discrete.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <Link to="/buyer/login" className="group flex items-center justify-between gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition">
                <div className="flex items-center gap-3 text-white"><UserRound className="text-amber-300"/> BuyerPortal 90</div>
                <ArrowRight className="text-blue-100/70 group-hover:translate-x-0.5 transition"/>
              </Link>
              <Link to="/availability" className="group flex items-center justify-between gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition">
                <div className="flex items-center gap-3 text-white"><Building2 className="text-amber-300"/> Disponibilitate</div>
                <ArrowRight className="text-blue-100/70 group-hover:translate-x-0.5 transition"/>
              </Link>
              <Link to="/tenantboard" className="group flex items-center justify-between gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition">
                <div className="flex items-center gap-3 text-white"><PanelsTopLeft className="text-amber-300"/> TenantBoard</div>
                <ArrowRight className="text-blue-100/70 group-hover:translate-x-0.5 transition"/>
              </Link>
            </div>

            <p className="mt-3 text-[12px] uppercase tracking-[0.25em] text-blue-200/60">B2C • Funnel de vânzări • B2B</p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl slow-zoom">
              <img src="https://images.unsplash.com/photo-1714188662137-813203f9d8c5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHb2xkJTIwZWRpdG9yaWFsfGVufDB8MHx8fDE3NjM3NDA0MjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Gold editorial" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/10 border border-white/20 backdrop-blur-xl text-white rounded-2xl p-4 flex items-center gap-3 shadow-xl">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-300" />
              <div className="leading-tight">
                <p className="font-serif-display text-lg">Edition No. 90</p>
                <p className="text-xs text-blue-100/80">Solaris — Maison Digitale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid lg:grid-cols-3 gap-6">
        <Card
          title="BuyerPortal 90"
          subtitle="Status șantier, plăți, documente, tichete"
          cta="Deschide demo"
          to="/buyer/login"
        />
        <Card
          title="Live Availability"
          subtitle="Filtrare, status, CTA de vizionare"
          cta="Vezi widget"
          to="/availability"
        />
        <Card
          title="TenantBoard Lite"
          subtitle="Contracte, facturi, mentenanță"
          cta="Deschide demo"
          to="/tenantboard"
        />
      </section>
    </LuxLayout>
  )
}

function Card({ title, subtitle, cta, to }){
  return (
    <Link to={to} className="group block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white text-xl font-serif-display">{title}</h3>
          <p className="text-blue-100/80 text-sm mt-1">{subtitle}</p>
        </div>
        <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-300 group-hover:scale-105 transition" />
      </div>
      <div className="mt-4 inline-flex items-center gap-2 text-amber-300">
        {cta} <ArrowRight className="h-4"/>
      </div>
    </Link>
  )
}
