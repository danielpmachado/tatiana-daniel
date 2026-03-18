import Image from 'next/image'

export default function SaveTheDate() {
  return (
    <section className="relative min-h-[500px] md:min-h-[560px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=90"
        alt="Quinta dos Castanheiros"
        fill className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#3A3328]/40" />
      <div className="relative z-10 bg-[#EDE8DD]/92 px-12 py-12 text-center max-w-xs w-full mx-4">
        <span className="label">Mark your calendar</span>
        <h2 style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:300, fontSize:'2.25rem', color:'#3A3328', marginBottom:'1.25rem', lineHeight:1}}>
          Save the Date!
        </h2>
        <div className="section-divider" />
        <p style={{fontSize:'0.6rem', textTransform:'uppercase', letterSpacing:'0.2em', color:'#8A7A55', lineHeight:2.2}}>
          Igreja dos Matos da Ranha<br />
          12:00 · Pombal, Leiria<br /><br />
          Quinta dos Castanheiros<br />
          Reception from 14:00<br /><br />
          <strong style={{letterSpacing:'0.3em'}}>4 · June · 2026</strong>
        </p>
        <p style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:'1.1rem', color:'#8A7A55', marginTop:'1.25rem'}}>
          Tatiana &amp; Daniel
        </p>
      </div>
    </section>
  )
}
