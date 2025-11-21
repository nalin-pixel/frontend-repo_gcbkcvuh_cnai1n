import { useRef, useEffect, useState } from 'react'

export default function ParallaxImage({ src, alt, className="", strength=12, overlay=true }){
  const ref = useRef(null)
  const [y, setY] = useState(0)

  useEffect(() => {
    const el = ref.current
    if(!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      const clamped = Math.max(0, Math.min(1, progress))
      setY((clamped - 0.5) * strength)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [strength])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} style={{ transform:`translateY(${y}px) scale(1.05)`, transition:'transform 120ms linear' }} className="w-full h-full object-cover" />
      {overlay && <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />}
    </div>
  )
}
