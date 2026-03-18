import Image from 'next/image'

const swatches = [
  { label: 'Marfim', hex: '#EDE8DD', bordered: true },
  { label: 'Areia', hex: '#D4C9B0' },
  { label: 'Azeitona', hex: '#6B6B3A' },
  { label: 'Taupe', hex: '#8A7A55' },
  { label: 'Espresso', hex: '#3A3328' },
]

export default function DressCode() {
  return (
    <section className="bg-[#EDE8DD] py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Polaroids */}
        <div className="relative flex justify-center items-center h-72 md:h-80">
          <div className="polaroid absolute left-6 top-0 w-44 z-10" style={{transform:'rotate(-4deg)'}}>
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#D4C9B0]">
              <Image src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80" alt="Wedding style" fill className="object-cover" />
            </div>
          </div>
          <div className="polaroid absolute right-6 bottom-0 w-44 z-20" style={{transform:'rotate(5deg)'}}>
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#D4C9B0]">
              <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80" alt="Venue style" fill className="object-cover" />
            </div>
          </div>
        </div>
        {/* Text */}
        <div>
          <span className="label">Dress Code</span>
          <h2 style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:300, fontSize:'clamp(2.5rem,5vw,3.5rem)', color:'#3A3328', lineHeight:1, marginBottom:'1.25rem'}}>
            Elegante Formal
          </h2>
          <div className="section-divider" style={{margin:'0 0 1.5rem'}} />
          <p style={{fontSize:'0.85rem', lineHeight:1.8, color:'#5C5248', marginBottom:'0.75rem'}}>
            O tema do casamento é <em style={{fontFamily:'var(--font-serif)', fontStyle:'italic'}}>natural</em>. Gostaríamos que os convidados optassem por trajes elegantes de verão — vestidos fluidos, fatos de linho e tons neutros suaves.
          </p>
          <p style={{fontSize:'0.85rem', lineHeight:1.8, color:'#5C5248', marginBottom:'1.5rem'}}>
            Por favor evitem branco e marfim, por respeito à noiva. A nossa paleta de cores assenta em tons neutros quentes e botânicos suaves.
          </p>
          <div style={{display:'flex', gap:'1.25rem', alignItems:'flex-end'}}>
            {swatches.map(({ label, hex, bordered }) => (
              <div key={label} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'0.4rem'}}>
                <div style={{width:'2rem', height:'2rem', borderRadius:'50%', background:hex, border: bordered ? '1px solid #C8BC9A' : undefined}} />
                <span style={{fontSize:'0.5rem', textTransform:'uppercase', letterSpacing:'0.15em', color:'#8A7A55'}}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
