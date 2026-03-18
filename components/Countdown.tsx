'use client'
import { useEffect, useState } from 'react'

const WEDDING = new Date('2026-06-04T12:00:00')

function getTimeLeft() {
  const diff = WEDDING.getTime() - Date.now()
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
  return {
    d: Math.floor(diff / 864e5),
    h: Math.floor((diff % 864e5) / 36e5),
    m: Math.floor((diff % 36e5) / 6e4),
    s: Math.floor((diff % 6e4) / 1e3),
  }
}

export default function Countdown() {
  const [t, setT] = useState(getTimeLeft())
  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])
  const units = [
    { label: 'Days', value: t.d },
    { label: 'Hours', value: String(t.h).padStart(2, '0') },
    { label: 'Minutes', value: String(t.m).padStart(2, '0') },
    { label: 'Seconds', value: String(t.s).padStart(2, '0') },
  ]
  return (
    <section className="bg-[#EDE8DD] py-20 px-8 text-center">
      <span className="label">The big day is getting closer</span>
      <h2 style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:300, fontSize:'clamp(1.75rem,3.5vw,2.5rem)', color:'#3A3328', marginBottom:'3rem', lineHeight:1}}>
        Counting down the days&hellip;
      </h2>
      <div className="max-w-2xl mx-auto" style={{border:'1px solid #C8BC9A', padding:'2.5rem 2rem'}}>
        <div className="flex justify-center" style={{borderColor:'#C8BC9A'}}>
          {units.map(({ label, value }, i) => (
            <div key={label} style={{padding:'0 2.5rem', borderRight: i < units.length - 1 ? '1px solid #C8BC9A' : undefined}}>
              <p style={{fontFamily:'var(--font-serif)', fontSize:'clamp(2.5rem,6vw,4rem)', fontWeight:300, color:'#3A3328', fontVariantNumeric:'tabular-nums', lineHeight:1}}>{value}</p>
              <p style={{fontSize:'0.55rem', textTransform:'uppercase', letterSpacing:'0.22em', color:'#8A7A55', marginTop:'0.5rem'}}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
