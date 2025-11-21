import { useEffect, useRef } from 'react'

export default function KineticHeadline({ title, highlight, subtitle }){
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if(!el) return
    const words = el.querySelectorAll('[data-word]')
    words.forEach((w, i) => {
      w.style.animationDelay = `${i * 80}ms`
    })
  }, [])

  const split = (text) => text.split(' ').map((w,i)=> (
    <span key={i} data-word className="fade-in-up inline-block mr-2">{w}</span>
  ))

  return (
    <div className="space-y-3" ref={ref}>
      <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white font-serif-display leading-[1.1]">
        {split(title)}
        <span className="block gold-text gold-shimmer">{highlight}</span>
      </h1>
      {subtitle && (
        <p className="text-blue-100/80 text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  )}
