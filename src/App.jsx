import { Link } from 'react-router-dom'
import LuxLayout from './components/LuxLayout'
import { Crown, ArrowRight, Building2, UserRound, PanelsTopLeft } from 'lucide-react'
import KineticHeadline from './components/KineticHeadline'
import ParallaxImage from './components/ParallaxImage'
import ProofWall from './components/ProofWall'
import TransparencyCenter from './components/TransparencyCenter'
import StickyBooker from './components/StickyBooker'

export default function App() {
  return (
    <LuxLayout>
      {/* Cinematic hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/70 to-slate-900/30 p-0">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-200 text-xs">
              <Crown className="h-3.5"/> Solaris Editorial Suite
            </div>
            <div className="mt-4">
              <KineticHeadline
                title="Un aer de revistă de bijuterii,"
                highlight="calm, rafinat, fără grabă."
                subtitle="Trei experiențe interactive – imagini ample, ritm lent, accente de aur și micro‑interacțiuni discrete."
              />
            </div>

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

          <ParallaxImage
            src="https://images.unsplash.com/photo-1714188662137-813203f9d8c5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHb2xkJTIwZWRpdG9yaWFsfGVufDB8MHx8fDE3NjM3NDA0MjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
            alt="Gold editorial"
            className="h-[380px] sm:h-[460px] lg:h-full rounded-none"
          />
        </div>
      </section>

      {/* Proof wall */}
      <ProofWall />

      {/* Cards entry */}
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

      {/* Transparency center */}
      <TransparencyCenter />

      {/* Sticky booking bar */}
      <StickyBooker />
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
