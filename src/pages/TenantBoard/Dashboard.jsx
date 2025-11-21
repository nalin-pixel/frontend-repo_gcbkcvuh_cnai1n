import LuxLayout from '../../components/LuxLayout'
import { FileText, MapPin, CreditCard, Ticket, Plus } from 'lucide-react'
import { useState } from 'react'

const invoices = [
  { month:'Iul 2025', type:'Chirie', sum:'17.500 €', due:'15.08.2025', status:'Plătită' },
  { month:'Iul 2025', type:'Utilități', sum:'4.200 €', due:'15.08.2025', status:'În curs' },
  { month:'Iun 2025', type:'CAM', sum:'2.100 €', due:'15.07.2025', status:'Restanță 15 zile' },
]

const tickets = [
  { id:'#241', title:'Probleme la poarta de andocare 3', status:'În curs', sla:'12 ore' },
  { id:'#212', title:'Corp de iluminat ars – birou 2', status:'Rezolvat', sla:'—' },
  { id:'#205', title:'Curățenie suplimentară în zona A', status:'Planificat', sla:'24 ore' },
]

export default function TenantDashboard(){
  const [showForm, setShowForm] = useState(false)

  return (
    <LuxLayout>
      <div className="space-y-8">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="uppercase text-[11px] tracking-[0.25em] text-amber-300">Solaris Industrial Park – Răscruci</p>
            <h1 className="text-3xl md:text-5xl font-light text-white mt-1 font-serif-display">SC LogiTrans SRL — Hala B2</h1>
            <p className="text-blue-100/70 mt-1">Suprafață: 1.850 mp • Tip: hală + birouri • Contract valabil până la 30.09.2029</p>
          </div>
          <a target="_blank" rel="noreferrer" href="https://maps.google.com" className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-blue-100/90 inline-flex items-center gap-2"><MapPin className="h-4"/> Vezi pe Google Maps</a>
        </header>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Documents */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-amber-300" />
              <h2 className="text-white text-xl font-serif-display">Contract & Documente</h2>
            </div>
            <div className="space-y-3">
              {['Contract de închiriere (PDF)','Anexe tehnice','Plan hală (DWG/PDF)','Certificat energetic'].map((d,i)=> (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <p className="text-white">{d}</p>
                  <button className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-sm">Descarcă</button>
                </div>
              ))}
            </div>
          </section>

          {/* Invoices */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="text-amber-300" />
              <h2 className="text-white text-xl font-serif-display">Facturi & Plăți</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-blue-100/70">
                    <th className="text-left py-2 pr-6">Luna</th>
                    <th className="text-left py-2 pr-6">Tip</th>
                    <th className="text-left py-2 pr-6">Sumă</th>
                    <th className="text-left py-2 pr-6">Scadență</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv,i)=> (
                    <tr key={i} className="border-t border-white/10 text-blue-100/90">
                      <td className="py-3 pr-6">{inv.month}</td>
                      <td className="py-3 pr-6">{inv.type}</td>
                      <td className="py-3 pr-6">{inv.sum}</td>
                      <td className="py-3 pr-6">{inv.due}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 text-xs rounded-full border ${inv.status==='Plătită'?'bg-emerald-400/15 text-emerald-200 border-emerald-400/30':inv.status==='În curs'?'bg-amber-300/15 text-amber-200 border-amber-300/30':'bg-rose-400/15 text-rose-200 border-rose-400/30'}`}>{inv.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-4 py-2 rounded-lg">Descarcă raport anual (PDF)</button>
              <p className="text-xs text-blue-100/60">Pentru demo, datele sunt fictive.</p>
            </div>
          </section>

          {/* Tickets */}
          <section className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Ticket className="text-amber-300" />
                <h2 className="text-white text-xl font-serif-display">Mentenanță & Tichete</h2>
              </div>
              <button onClick={()=>setShowForm(true)} className="px-4 py-2 rounded-lg bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-900 font-semibold inline-flex items-center gap-2"><Plus className="h-4"/> Deschide tichet</button>
            </div>
            <div className="space-y-3">
              {tickets.map((t,i)=> (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{t.id} — {t.title}</p>
                    <p className="text-blue-100/70 text-sm">SLA estimat: {t.sla}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full border ${t.status==='Rezolvat'?'bg-emerald-400/15 text-emerald-200 border-emerald-400/30':t.status==='În curs'?'bg-amber-300/15 text-amber-200 border-amber-300/30':'bg-white/10 text-blue-100 border-white/20'}`}>{t.status}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Modal ticket */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" onClick={()=>setShowForm(false)}>
            <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 w-full max-w-xl" onClick={e=>e.stopPropagation()}>
              <h3 className="text-white text-2xl font-serif-display mb-4">Tichet nou</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <input placeholder="Titlu" className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white sm:col-span-2"/>
                <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                  <option>Tip</option>
                  <option>Mentenanță</option>
                  <option>Curățenie</option>
                  <option>Securitate</option>
                  <option>Altele</option>
                </select>
                <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                  <option>Prioritate</option>
                  <option>Scăzută</option>
                  <option>Medie</option>
                  <option>Mare</option>
                </select>
                <textarea placeholder="Descriere" className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white sm:col-span-2 h-28"/>
              </div>
              <div className="mt-4 flex justify-end gap-3">
                <button onClick={()=>setShowForm(false)} className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-blue-100/90">Anulează</button>
                <button onClick={()=>setShowForm(false)} className="bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-900 font-semibold rounded-lg px-4 py-2">Trimite tichet</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </LuxLayout>
  )
}
