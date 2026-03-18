'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Is the wedding outdoor or indoor?',
    a: 'The ceremony takes place at Igreja dos Matos da Ranha. The reception, dinner, and dancing are hosted outdoors at Quinta dos Castanheiros, weather permitting.' },
  { q: 'Are children welcome at the wedding?',
    a: 'We love your little ones! Children are warmly welcome. Please indicate the number of children on your RSVP.' },
  { q: 'Is there a shuttle from the hotel?',
    a: 'Yes — a complimentary shuttle will run between the recommended hotels and the venue. Timings will be confirmed closer to the date.' },
  { q: 'What time does the celebration end?',
    a: 'We plan to dance until the early hours! The last shuttle departs at 03:00.' },
  { q: 'Can I take photos during the ceremony?',
    a: 'We kindly ask guests to remain unplugged during the ceremony. Our photographer will capture every moment.' },
]

export default function Details() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="details" className="bg-[#6B6B3A] py-16 px-8">
      <div className="max-w-3xl mx-auto">
        <span className="label" style={{color:'rgba(237,232,221,0.45)', textAlign:'center', display:'block'}}>FAQ</span>
        <h2 style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:300, fontSize:'clamp(2rem,4vw,3rem)', color:'#EDE8DD', marginBottom:'2.5rem', textAlign:'center', lineHeight:1}}>
          Details
        </h2>
        {faqs.map(({ q, a }, i) => (
          <div key={i} style={{borderBottom:'1px solid rgba(237,232,221,0.15)'}}>
            <button onClick={() => setOpen(open === i ? null : i)}
              style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1rem 0', textAlign:'left', color:'rgba(237,232,221,0.75)', fontSize:'0.85rem', letterSpacing:'0.02em', cursor:'pointer', background:'none', border:'none'}}
              className="hover:text-[#EDE8DD] transition-colors">
              <span>{q}</span>
              <span style={{color:'rgba(237,232,221,0.35)', marginLeft:'1rem', fontSize:'1.1rem', flexShrink:0}}>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <p style={{paddingBottom:'1.25rem', fontSize:'0.82rem', color:'rgba(237,232,221,0.55)', lineHeight:1.8}}>
                {a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
