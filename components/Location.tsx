import Image from "next/image";

export default function Location() {
  return (
    <section
      id="location"
      className="relative min-h-[500px] md:min-h-[560px] flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/tatiana-daniel/images/assets/Salao-Mayor-10-scaled.jpg"
        //src="/tatiana-daniel/images/assets/Salao-Mayor-11.jpg"
        //src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=90"
        alt="Quinta dos Castanheiros"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#3A3328]/30" />
      <div className="relative z-10 bg-[#EDE8DD]/92 px-10 py-12 text-center max-w-sm w-full mx-4">
        <span className="label">Festa</span>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "1.75rem",
            color: "#3A3328",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          Quinta dos Castanheiros
        </h2>
        <div className="section-divider" />
        <p
          style={{
            fontSize: "0.75rem",
            lineHeight: 1.9,
            color: "#5C5248",
            marginBottom: "1.25rem",
          }}
        >
          Situada na Boa Vista, Leiria, a Quinta dos Castanheiros destaca-se
          pelo seu entorno natural, rodeada por soutos e campos verdejantes.
        </p>
        <p
          style={{
            fontSize: "0.6rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#8A7A55",
            marginBottom: "1.5rem",
            lineHeight: 2,
          }}
        >
          Boa Vista · Leiria · Portugal
        </p>
        <a
          href="https://maps.app.goo.gl/8dKZyFYnGWNd6h1Q7"
          // href="https://maps.google.com/?q=Pombal+Leiria+Portugal"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            border: "1px solid #8A7A55",
            padding: "0.6rem 1.75rem",
            fontSize: "0.6rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            transition: "all 0.2s",
          }}
          className="text-muted hover:bg-muted hover:text-ivory"
        >
          Ver no Mapa
        </a>
      </div>
    </section>
  );
}
