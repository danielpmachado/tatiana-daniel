import Image from "next/image";

export default function DressCode() {
  return (
    <section className="bg-sand py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Polaroids */}
        <div className="relative flex justify-center items-center h-72 md:h-80">
          <div
            className="polaroid absolute left-6 top-0 w-44 z-20"
            style={{ transform: "rotate(-4deg)" }}
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#D4C9B0]">
              <Image
                src="/tatiana-daniel/images/assets/capela-1.jpg"
                //src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80"
                alt="Wedding style"
                fill
                //className="object-cover"
                className="object-cover brightness-140 opacity-90"
              />
            </div>
          </div>
          <div
            className="polaroid absolute right-6 bottom-0 w-55 z-10"
            style={{ transform: "rotate(5deg)" }}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#D4C9B0]">
              <Image
                src="/tatiana-daniel/images/assets/capela-6.jpg"
                //src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80"
                alt="Venue style"
                fill
                className="object-cover  opacity-90"
              />
            </div>
          </div>
        </div>
        {/* Text */}
        <div>
          <span className="label">Cerimónia Religiosa</span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(2.5rem,5vw,3.5rem)",
              color: "#3A3328",
              lineHeight: 1,
              marginBottom: "1.25rem",
            }}
          >
            Igreja dos Matos da Ranha
          </h2>
          <div className="section-divider" style={{ margin: "0 0 1.5rem" }} />
          <p
            style={{
              fontSize: "0.85rem",
              lineHeight: 1.8,
              color: "#5C5248",
              marginBottom: "0.75rem",
            }}
          >
            A cerimónia religiosa terá lugar na{" "}
            <em
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              Igreja dos Matos da Ranha
            </em>
            , um espaço íntimo e cheio de história, rodeado pela natureza da
            região de Leiria.
          </p>
          <p
            style={{
              fontSize: "0.85rem",
              lineHeight: 1.8,
              color: "#5C5248",
              marginBottom: "1.5rem",
            }}
          >
            Pedimos que os convidados se encontrem na capela com alguma
            antecedência. Após a cerimónia, seguimos todos juntos para a quinta.
          </p>
          <a
            href="https://maps.app.goo.gl/7ZozinCs4SX4ksHB7"
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
      </div>
    </section>
  );
}
