import { useNavigate } from 'react-router-dom'
import LuxLayout from '../../components/LuxLayout'

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/buyer/dashboard')
  }

  return (
    <LuxLayout>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/20 to-transparent" />
            <img src="https://images.unsplash.com/photo-1607012312132-8158a642c5bf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZXNpZGVuY2VzfGVufDB8MHx8fDE3NjM3NDAwNDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Residences" className="w-full h-[520px] object-cover" />
          </div>
        </div>
        <div>
          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="mb-6">
              <p className="uppercase text-[11px] tracking-[0.25em] text-amber-300">BuyerPortal 90</p>
              <h1 className="text-3xl md:text-4xl font-semibold text-white mt-1">Autentificare</h1>
              <p className="text-blue-100/70 mt-2 text-sm">Ai cumpărat un apartament Solaris? Vei primi datele de acces după semnarea antecontractului.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Email</label>
                <input type="email" required className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="andrei@example.com" />
              </div>
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Parolă</label>
                <input type="password" required className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="••••••••" />
              </div>
              <button className="w-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-900 font-semibold rounded-lg py-2 shadow-lg shadow-amber-200/30 hover:shadow-amber-200/50 transition">Autentificare</button>
            </form>
          </div>
        </div>
      </div>
    </LuxLayout>
  )
}
