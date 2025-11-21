import { Star, Newspaper } from 'lucide-react'

const reviews = [
  { name:'Andrei P.', text:'Liniște, aer curat, comunitate civilizată. Proces de achiziție foarte clar.', rating:4.8 },
  { name:'Ioana R.', text:'După mutare, comunicarea e bună, parc privat excelent pentru copii.', rating:4.7 },
  { name:'Mihai C.', text:'Calitate de construcție peste medie; fără surprize la recepție.', rating:4.6 },
]

const press = ['Smart City • 2019', 'Korter • Profil proiect', 'Cluj • Dezvoltare']

export default function ProofWall(){
  return (
    <section className="mt-8 grid lg:grid-cols-3 gap-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-center gap-2 text-amber-200"><Star className="h-4"/> 4,7/5 pe Google</div>
        <div className="mt-3 grid gap-3">
          {reviews.map((r,i)=> (
            <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white text-sm">“{r.text}”</p>
              <p className="text-blue-100/70 text-xs mt-1">{r.name} • verificat</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:col-span-2">
        <div className="flex items-center gap-2 text-blue-100/80"><Newspaper className="h-4"/> Mențiuni & presă</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {press.map((p,i)=> (
            <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-100/80 text-sm">{p}</span>
          ))}
        </div>
        <div className="mt-4 h-24 rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.15),transparent_60%)] border border-white/10" />
      </div>
    </section>
  )
}
