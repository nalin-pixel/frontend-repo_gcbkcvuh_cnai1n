import LuxLayout from '../../components/LuxLayout'
import { useMemo, useState } from 'react'
import { Building2, DoorOpen } from 'lucide-react'

const MOCK = Array.from({ length: 14 }).map((_, i) => {
  const rooms = [2,3,4][Math.floor(Math.random()*3)]
  const floor = Math.floor(Math.random()*11)
  const status = ['available','reserved','sold'][Math.floor(Math.random()*3)]
  const area = rooms === 2 ? 62 + i : rooms === 3 ? 79 + i : 102 + i
  const price = rooms === 2 ? 145000 + i*2500 : rooms === 3 ? 257600 + i*3200 : 315000 + i*4500
  const code = `Ap. ${i+1}${String.fromCharCode(65 + (i%6))}`
  return { project:'Avangarde', code, floor, rooms, area, price, status, orientation:['N','S','E','V'][i%4] }
})

export default function AvailabilityWidget(){
  const [filters, setFilters] = useState({ rooms:'all', floor:'all', min:'', max:'' })
  const [active, setActive] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const filtered = useMemo(() => {
    return MOCK.filter(u => {
      if(filters.rooms !== 'all' && u.rooms !== Number(filters.rooms)) return false
      if(filters.floor !== 'all' && u.floor !== Number(filters.floor)) return false
      if(filters.min && u.price < Number(filters.min)) return false
      if(filters.max && u.price > Number(filters.max)) return false
      return true
    })
  }, [filters])

  return (
    <LuxLayout>
      <div className="space-y-6">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="uppercase text-[11px] tracking-[0.25em] text-amber-300">Solaris Maison</p>
            <h1 className="text-3xl md:text-5xl font-light text-white mt-1 font-serif-display">Selecție curatorială de apartamente</h1>
            <p className="text-blue-100/70 mt-1">Filtre fine, ritm calm, accent pe detaliu.</p>
          </div>
          <div className="flex items-center gap-2 text-blue-100/70">
            <Building2 className="text-amber-300"/>
            Avangarde + Atrium
          </div>
        </header>

        {/* Filters */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 grid md:grid-cols-4 gap-3">
          <div>
            <label className="block text-xs text-blue-100/70 mb-1">Număr camere</label>
            <select value={filters.rooms} onChange={e=>setFilters(f=>({...f, rooms:e.target.value}))} className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
              <option value="all">Toate</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-blue-100/70 mb-1">Etaj</label>
            <select value={filters.floor} onChange={e=>setFilters(f=>({...f, floor:e.target.value}))} className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
              <option value="all">Toate</option>
              {Array.from({length:11}).map((_,i)=> <option key={i} value={i}>{i===0?'Parter':i}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-blue-100/70 mb-1">Buget minim (€)</label>
            <input value={filters.min} onChange={e=>setFilters(f=>({...f, min:e.target.value}))} className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white" placeholder="ex. 150000" />
          </div>
          <div>
            <label className="block text-xs text-blue-100/70 mb-1">Buget maxim (€)</label>
            <input value={filters.max} onChange={e=>setFilters(f=>({...f, max:e.target.value}))} className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white" placeholder="ex. 300000" />
          </div>
        </div>

        <p className="text-blue-100/70 text-sm">{filtered.length} apartamente în selecție</p>

        {/* Cards grid with editorial hover */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((u, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden slow-zoom">
                <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpbnRlcmlvcnxlbnwwfDB8fHwxNzYzNzQwNDI3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="interior" className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-serif-display text-lg">{u.code}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full border ${u.status==='available'?'bg-emerald-400/15 text-emerald-200 border-emerald-400/30':u.status==='reserved'?'bg-amber-300/15 text-amber-200 border-amber-300/30':'bg-rose-400/15 text-rose-200 border-rose-400/30'}`}>{u.status==='available'?'Disponibil':u.status==='reserved'?'Rezervat':'Vândut'}</span>
                </div>
                <p className="text-blue-100/80 text-sm mt-1">{u.rooms} camere • {u.area} mp • Etaj {u.floor}</p>
                <p className="gold-text text-lg mt-2">{u.price.toLocaleString('ro-RO')} €</p>
                <div className="mt-3 flex gap-3">
                  <button onClick={()=>{setActive(u);}} className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20">Detalii</button>
                  <button onClick={()=>{setActive(u); setShowForm(true)}} className="bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-900 font-semibold rounded-lg px-3 py-1.5 flex items-center gap-2"><DoorOpen className="h-4"/> Vizionare</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drawer */}
        {active && (
          <aside className="fixed inset-0 z-50 bg-black/50" onClick={()=>setActive(null)}>
            <div className="absolute right-0 top-0 h-full w-full sm:w-[480px] bg-slate-900 border-l border-white/10 p-6 overflow-y-auto" onClick={e=>e.stopPropagation()}>
              <div className="flex items-start justify-between">
                <h3 className="text-white text-2xl font-serif-display">{active.code}</h3>
                <button onClick={()=>setActive(null)} className="text-blue-100/60">Închide</button>
              </div>
              <div className="mt-4 rounded-xl overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop" alt="plan" className="w-full h-48 object-cover"/>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4 text-blue-100/90">
                <p>Orientare: <span className="text-white">{active.orientation}</span></p>
                <p>Etaj: <span className="text-white">{active.floor}</span></p>
                <p>Suprafață: <span className="text-white">{active.area} mp</span></p>
                <p>Preț: <span className="gold-text">{active.price.toLocaleString('ro-RO')} €</span></p>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-amber-300/15 border border-amber-300/30 text-amber-100 text-sm">
                Invitație privată: tur cu consilier dedicat.
              </div>
              <div className="mt-5 flex gap-3">
                <button onClick={()=>setShowForm(true)} className="bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-900 font-semibold rounded-lg px-4 py-2 flex items-center gap-2"><DoorOpen className="h-4"/> Programează vizionare</button>
                <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">Solicită ofertă</button>
              </div>
            </div>
          </aside>
        )}

        {/* Modal form */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" onClick={()=>setShowForm(false)}>
            <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 w-full max-w-lg" onClick={e=>e.stopPropagation()}>
              <h3 className="text-white text-2xl font-serif-display mb-4">Programare vizionare</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <input placeholder="Nume" className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"/>
                <input placeholder="Telefon" className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"/>
                <input placeholder="Email" className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white sm:col-span-2"/>
                <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white sm:col-span-2">
                  <option>Interval preferat</option>
                  <option>Dimineața (9-12)</option>
                  <option>Prânz (12-15)</option>
                  <option>Seara (17-19)</option>
                </select>
                <label className="sm:col-span-2 flex items-center gap-2 text-blue-100/80 text-sm"><input type="checkbox" className="accent-amber-300"/> Prefer contact pe WhatsApp</label>
              </div>
              <div className="mt-4 flex justify-end gap-3">
                <button onClick={()=>setShowForm(false)} className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-blue-100/90">Anulează</button>
                <button onClick={()=>setShowForm(false)} className="bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-900 font-semibold rounded-lg px-4 py-2">Trimite</button>
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="flex items-center gap-3 text-xs text-blue-100/70">
          <span className="px-2 py-1 rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-400/30">Disponibil</span>
          <span className="px-2 py-1 rounded-full bg-amber-300/15 text-amber-200 border border-amber-300/30">Rezervat</span>
          <span className="px-2 py-1 rounded-full bg-rose-400/15 text-rose-200 border border-rose-400/30">Vândut</span>
        </div>
      </div>
    </LuxLayout>
  )
}
