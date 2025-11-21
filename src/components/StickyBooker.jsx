import { useMemo, useState } from 'react'
import { CalendarDays, Phone, MessageCircle } from 'lucide-react'

const generateSlots = () => {
  const days = Array.from({length: 14}).map((_,i)=>{
    const d = new Date()
    d.setDate(d.getDate()+i)
    return d
  })
  const hours = ["09:30","11:00","13:00","17:30"]
  return days.map(d=>({
    date: d,
    slots: hours.map(h=>({ time: h, available: Math.random() > 0.25 }))
  }))
}

export default function StickyBooker(){
  const [open, setOpen] = useState(false)
  const [data] = useState(generateSlots())
  const [activeDay, setActiveDay] = useState(0)
  const [selected, setSelected] = useState(null)

  const dayLabel = (d) => d.toLocaleDateString('ro-RO', { weekday:'short', day:'2-digit', month:'short' })

  const whatsappHref = useMemo(() => {
    const base = 'https://wa.me/40700000000'
    const text = selected ? `Salut! Aș dori un tur la ${selected.time} pe ${data[activeDay].date.toLocaleDateString('ro-RO')}.` : 'Salut! Aș dori să programez o vizionare.'
    return `${base}?text=${encodeURIComponent(text)}`
  }, [selected, activeDay, data])

  return (
    <div className="fixed bottom-4 inset-x-0 z-40 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-white"><CalendarDays className="text-amber-300"/> <span className="hidden sm:inline">Rezervă un slot de vizionare</span><span className="sm:hidden">Vizionare</span></div>
          <div className="flex items-center gap-2">
            <a className="hidden sm:inline px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm" href="tel:+40700000000"><Phone className="h-4 inline mr-1"/> Sună</a>
            <a className="px-3 py-1.5 rounded-lg bg-emerald-300/20 border border-emerald-300/30 text-emerald-100 text-sm" target="_blank" rel="noreferrer" href={whatsappHref}><MessageCircle className="h-4 inline mr-1"/> WhatsApp</a>
            <button onClick={()=>setOpen(v=>!v)} className="px-3 py-1.5 rounded-lg bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-900 font-semibold text-sm">Alege un slot</button>
          </div>
        </div>
        {open && (
          <div className="px-4 pb-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {data.map((d, i) => (
                <button key={i} onClick={()=>{setActiveDay(i); setSelected(null)}} className={`px-3 py-1.5 rounded-lg border text-sm whitespace-nowrap ${i===activeDay? 'bg-white/15 text-white border-white/20':'bg-white/5 text-blue-100/80 border-white/10'}`}>{dayLabel(d.date)}</button>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {data[activeDay].slots.map((s,idx)=> (
                <button key={idx} disabled={!s.available} onClick={()=>setSelected(s)} className={`px-3 py-2 rounded-lg border text-white text-sm ${!s.available? 'opacity-40 cursor-not-allowed bg-white/5 border-white/10':'bg-white/10 border-white/20 hover:bg-white/15'}`}>{s.time}</button>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs text-blue-100/70">Confirmare în 5 minute • Reminder automat</p>
              <button disabled={!selected} className={`px-4 py-2 rounded-lg text-sm font-semibold ${selected? 'bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-900':'bg-white/10 text-blue-100/70 border border-white/20 cursor-not-allowed'}`}>Confirmă slotul</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
