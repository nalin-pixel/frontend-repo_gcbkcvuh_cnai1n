import { CheckCircle2, AlertCircle } from 'lucide-react'

const checklist = [
  { label:'Autorizație de construire (AC)', status:'ok' },
  { label:'PUZ / PUD', status:'ok' },
  { label:'Intabulare teren', status:'ok' },
  { label:'Racord utilități (apă, gaz, curent)', status:'pending' },
]

const updates = [
  { date:'12.11.2025', title:'Racord apă – documente depuse', type:'info' },
  { date:'02.10.2025', title:'Fotografii lucrări – gard perimetral', type:'photo' },
]

export default function TransparencyCenter(){
  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-xl font-serif-display">Centru de transparență</h2>
        <p className="text-xs text-blue-100/70">Ultima actualizare: 12.11.2025</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mt-4">
        <div>
          <p className="text-blue-100/80 mb-2">Checklist legal</p>
          <div className="space-y-2">
            {checklist.map((c,i)=> (
              <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <p className="text-white text-sm">{c.label}</p>
                {c.status==='ok' ? (
                  <span className="inline-flex items-center gap-1 text-emerald-200 text-xs"><CheckCircle2 className="h-4"/> OK</span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-amber-200 text-xs"><AlertCircle className="h-4"/> În curs</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-blue-100/80 mb-2">Jurnal de șantier</p>
          <div className="space-y-2">
            {updates.map((u,i)=> (
              <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white text-sm">{u.title}</p>
                <p className="text-blue-100/60 text-xs mt-1">{u.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
