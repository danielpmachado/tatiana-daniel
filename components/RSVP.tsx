'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function RSVP() {
  const [form, setForm] = useState({ name: '', email: '', attending: '', dietary: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="rsvp" className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#EDE8DD] px-10 py-16 md:px-14 flex flex-col justify-center">
        <span className="label">Confirme Presença</span>
        <h2 style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:300, fontSize:'clamp(2.5rem,5vw,3.5rem)', color:'#3A3328', lineHeight:1, marginBottom:'0.5rem'}}>
          RSVP
        </h2>
        <p style={{fontSize:'0.6rem', textTransform:'uppercase', letterSpacing:'0.2em', color:'#8A7A55', marginBottom:'2rem'}}>
          Confirme até · 30 de Abril de 2026
        </p>
        {submitted ? (
          <div>
            <p style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:'1.75rem', color:'#3A3328', marginBottom:'0.75rem'}}>Obrigado!</p>
            <p style={{fontSize:'0.85rem', color:'#5C5248', lineHeight:1.8}}>Recebemos a vossa resposta e mal podemos esperar para celebrar convosco.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {[
              { name: 'name', type: 'text', placeholder: 'Nome completo' },
              { name: 'email', type: 'email', placeholder: 'Endereço de email' },
            ].map(f => (
              <input key={f.name} name={f.name} type={f.type} placeholder={f.placeholder}
                value={form[f.name as keyof typeof form]}
                onChange={handleChange}
                style={{width:'100%', background:'transparent', borderBottom:'1px solid #C8BC9A', paddingBottom:'0.5rem', fontSize:'0.85rem', color:'#3A3328', outline:'none', fontFamily:'var(--font-sans)'}}
                className="placeholder:text-[#8A7A55]/60 focus:border-[#6B6B3A] transition-colors" />
            ))}
            <div style={{display:'flex', gap:'1.5rem', padding:'0.25rem 0'}}>
              {['Aceita com alegria', 'Lamenta não poder comparecer'].map(opt => (
                <label key={opt} style={{display:'flex', alignItems:'center', gap:'0.5rem', fontSize:'0.75rem', color:'#5C5248', cursor:'pointer'}}>
                  <input type="radio" name="attending" value={opt} checked={form.attending === opt} onChange={handleChange}
                    style={{accentColor:'#6B6B3A'}} />
                  {opt}
                </label>
              ))}
            </div>
            <input name="dietary" type="text" placeholder="Restrições alimentares (se houver)"
              value={form.dietary} onChange={handleChange}
              style={{width:'100%', background:'transparent', borderBottom:'1px solid #C8BC9A', paddingBottom:'0.5rem', fontSize:'0.85rem', color:'#3A3328', outline:'none', fontFamily:'var(--font-sans)'}}
              className="placeholder:text-[#8A7A55]/60 focus:border-[#6B6B3A] transition-colors" />
            <button type="submit"
              style={{marginTop:'0.5rem', alignSelf:'flex-start', background:'#6B6B3A', color:'#EDE8DD', padding:'0.75rem 2rem', fontSize:'0.6rem', textTransform:'uppercase', letterSpacing:'0.2em', border:'none', cursor:'pointer', transition:'background 0.2s'}}
              className="hover:bg-[#3A3328]">
              Confirmar Presença
            </button>
          </form>
        )}
      </div>
      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px]">
        <Image src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=900&q=80" alt="Rings" fill className="object-cover" />
      </div>
    </section>
  )
}
