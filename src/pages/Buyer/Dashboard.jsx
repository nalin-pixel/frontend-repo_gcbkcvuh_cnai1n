import LuxLayout from '../../components/LuxLayout'
import { CheckCircle2, Clock, FileText, ArrowDownToLine, AlertTriangle, MessageCircle, Wrench } from 'lucide-react'
import { useState } from 'react'

const steps = [
  { title: 'Proiectare', date: 'Ianuarie 2024', by: 'Axial Construct Invest', state: 'completed' },
  { title: 'Autorizație de construire', date: 'Martie 2024', by: 'Primăria', state: 'completed' },
  { title: 'Structură', date: 'Aprilie 2025', by: 'Axial Construct Invest', state: 'completed' },
  { title: 'Închideri', date: 'Iulie 2025', by: 'Axial Construct Invest', state: 'active' },
  { title: 'Instalații', date: 'Septembrie 2025', by: 'Axial Construct Invest', state: 'active' },
  { title: 'Finisaje', date: 'Noiembrie 2025', by: 'Axial Construct Invest', state: 'upcoming' },
  { title: 'Recepție', date: 'Iunie 2026', by: 'Axial Construct Invest', state: 'upcoming' },
]

const payments = [
  { tranche: 'Tranșa 1', desc: 'Avans la antecontract', sum: '63.000 €', due: 'Plătit', status: 'paid' },
  { tranche: 'Tranșa 2', desc: 'La finalizarea structurii', sum: '45.000 €', due: 'Plătit', status: 'paid' },
  { tranche: 'Tranșa 3', desc: 'La închiderea clădirii', sum: '36.000 €', due: 'Scadentă în 15 zile', status: 'due' },
  { tranche: 'Tranșa 4', desc: 'La recepție', sum: '36.000 €', due: 'Viitoare', status: 'future' },
]

const docs = [
  { name: 'Antecontract de vânzare-cumpărare', status: 'Semnat' },
  { name: 'Contract de rezervare', status: 'Semnat' },
  { name: 'Autorizație de construire (AC)', status: 'Disponibil' },
  { name: 'Extras CF', status: 'În curs de semnare' },
  { name: 'Proces verbal de recepție', status: 'Disponibil la recepție' },
]

export default function Dashboard() {
  const [tab, setTab] = useState('mesaje')

  return (
    <LuxLayout>
      <div className="space-y-10">
        {/* Header */}
        <section className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="uppercase text-[11px] tracking-[0.25em] text-amber-300">Solaris Avangarde – București 41–45</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-white mt-2">Apartament 3 camere • Etaj 4 • 84,08 mp utili</h1>
            <div className="mt-3 inline-flex items-center gap-2 bg-yellow-300/20 text-yellow-200 px-3 py-1 rounded-full text-xs border border-yellow-200/30">Lucrări în curs</div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm text-blue-100/70">Structură</p>
              <p className="text-2xl font-semibold text-white">100%</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm text-blue-100/70">Instalații</p>
              <p className="text-2xl font-semibold text-white">70%</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm text-blue-100/70">Finisaje</p>
              <p className="text-2xl font-semibold text-white">40%</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="text-amber-300" />
            <h2 className="text-white text-xl font-semibold">Construction Timeline</h2>
          </div>
          <ol className="grid md:grid-cols-7 gap-4">
            {steps.map((s, i) => (
              <li key={i} className={`rounded-xl p-4 border ${s.state==='completed' ? 'bg-emerald-400/10 border-emerald-400/20' : s.state==='active' ? 'bg-amber-300/10 border-amber-300/20' : 'bg-white/5 border-white/10'}`}>
                <div className="flex items-center gap-2 mb-2">
                  {s.state==='completed' ? <CheckCircle2 className="text-emerald-300"/> : s.state==='active' ? <Clock className="text-amber-300"/> : <Clock className="text-blue-200/70"/>}
                  <p className="text-white font-medium">{s.title}</p>
                </div>
                <p className="text-blue-100/70 text-sm">{s.state==='completed' ? 'Finalizat:' : s.state==='active' ? 'În progres:' : 'Estimare:'} {s.date}</p>
                <p className="text-blue-100/50 text-xs mt-1">Actualizat de Axial Construct Invest – 02.04.2025</p>
              </li>
            ))}
          </ol>

          {/* Overall progress bar */}
          <div className="mt-6">
            <p className="text-blue-100/80 mb-2">Progres general proiect: <span className="text-white font-semibold">68%</span></p>
            <div className="h-3 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[68%] bg-gradient-to-r from-emerald-400 to-amber-300" />
            </div>
          </div>
        </section>

        {/* Payments */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <ArrowDownToLine className="text-amber-300" />
            <h2 className="text-white text-xl font-semibold">Plăți & Tranșe</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-blue-100/70">
                  <th className="text-left py-2 pr-6">Tranșă</th>
                  <th className="text-left py-2 pr-6">Descriere</th>
                  <th className="text-left py-2 pr-6">Sumă</th>
                  <th className="text-left py-2 pr-6">Scadență</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p, i) => (
                  <tr key={i} className="border-t border-white/10 text-blue-100/90">
                    <td className="py-3 pr-6">{p.tranche}</td>
                    <td className="py-3 pr-6">{p.desc}</td>
                    <td className="py-3 pr-6">{p.sum}</td>
                    <td className="py-3 pr-6">{p.due}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 text-xs rounded-full border ${p.status==='paid' ? 'bg-emerald-400/15 text-emerald-200 border-emerald-400/30' : p.status==='due' ? 'bg-amber-300/15 text-amber-200 border-amber-300/30' : 'bg-white/10 text-blue-100 border-white/20'}`}>
                        {p.status === 'paid' ? 'Plătit' : p.status === 'due' ? 'Scadentă în 15 zile' : 'Viitoare'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <button className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-4 py-2 rounded-lg">Descarcă situația plăților (PDF)</button>
            <p className="text-xs text-blue-100/60">Aceste date sunt orientative, pentru demo.</p>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
            <AlertTriangle className="text-blue-200/80" />
            <p className="text-blue-100/80 text-sm">Nu există plăți scadente în următoarele 30 de zile.</p>
          </div>
        </section>

        {/* Docs */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="text-amber-300" />
            <h2 className="text-white text-xl font-semibold">Documente</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {docs.map((d, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-medium">{d.name}</p>
                <p className="text-blue-100/70 text-sm mt-1">Status: {d.status}</p>
                <button className="mt-3 text-sm text-amber-300 hover:text-amber-200">Descarcă</button>
              </div>
            ))}
          </div>
        </section>

        {/* Messages & Tickets */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="text-amber-300" />
            <h2 className="text-white text-xl font-semibold">Mesaje & Tichete</h2>
          </div>

          <div className="flex gap-2 mb-4">
            <button onClick={() => setTab('mesaje')} className={`px-4 py-2 rounded-lg border ${tab==='mesaje' ? 'bg-white/15 text-white border-white/20' : 'bg-white/5 text-blue-100/80 border-white/10'}`}>Mesaje generale</button>
            <button onClick={() => setTab('remedieri')} className={`px-4 py-2 rounded-lg border ${tab==='remedieri' ? 'bg-white/15 text-white border-white/20' : 'bg-white/5 text-blue-100/80 border-white/10'}`}>Remedieri & Defecte</button>
          </div>

          {tab==='mesaje' ? (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-medium">Update lucrări finisaje – 12.11.2025</p>
                <p className="text-blue-100/70 text-sm mt-1">Actualizat de Ioana – 12 noiembrie 2025</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-medium">Modificare termen estimat recepție – +30 zile</p>
                <p className="text-blue-100/70 text-sm mt-1">Actualizat de Ioana – 12 noiembrie 2025</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-medium">Întrebare trimisă</p>
                <textarea placeholder="Scrie întrebarea ta" className="mt-2 w-full h-24 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-amber-300/40" />
                <button className="mt-2 bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-900 font-semibold rounded-lg px-4 py-2">Trimite mesaj</button>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-blue-100/70">
                    <th className="text-left py-2 pr-6">Data sesizării</th>
                    <th className="text-left py-2 pr-6">Descriere</th>
                    <th className="text-left py-2 pr-6">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10 text-blue-100/90">
                    <td className="py-3 pr-6">05.09.2025</td>
                    <td className="py-3 pr-6">Ușă dormitor care atinge parchetul</td>
                    <td className="py-3"><span className="px-2 py-1 text-xs rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-400/30">Rezolvat</span></td>
                  </tr>
                  <tr className="border-t border-white/10 text-blue-100/90">
                    <td className="py-3 pr-6">20.10.2025</td>
                    <td className="py-3 pr-6">Presiune scăzută la apă caldă</td>
                    <td className="py-3"><span className="px-2 py-1 text-xs rounded-full bg-amber-300/15 text-amber-200 border border-amber-300/30">În curs</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </LuxLayout>
  )
}
