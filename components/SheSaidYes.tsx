import Image from "next/image";

export default function SheSaidYes() {
  return (
    <section className="bg-[#EDE8DD] py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Polaroids */}
        <div className="relative flex justify-center items-center h-72 md:h-80">
          <div
            className="polaroid absolute left-4 top-0 w-50 z-10"
            style={{ transform: "rotate(-6deg)" }}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#D4C9B0]">
              <Image
                src="/tatiana-daniel/images/assets/yes-1.jpg"
                //src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80"
                alt="The couple"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div
            className="polaroid absolute right-4 bottom-0 w-50 z-20"
            style={{ transform: "rotate(4deg)" }}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#D4C9B0]">
              <Image
                src="/tatiana-daniel/images/assets/yes-5.jpg"
                //src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80"
                alt="The proposal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {/* Text */}
        <div>
          <span className="label">A Nossa História</span>
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
            Ela Disse Sim!
          </h2>
          <div className="section-divider" style={{ margin: "0 0 1.5rem" }} />
          <p
            style={{
              fontSize: "0.85rem",
              lineHeight: 1.8,
              color: "#5C5248",
              marginBottom: "1rem",
            }}
          >
            Após 7 anos de namoro, o Daniel decidiu pedir a mão da Tatiana. Não
            havia dúvidas que a resposta seria sim.
          </p>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#5C5248" }}>
            Agora estamos a preparar o nosso dia especial para todos vós.
            Queremos que seja um dia mágico para todos nós. Estamos muito
            empolgados com o dia e com a vossa presença.
          </p>
        </div>
      </div>
    </section>
  );
}
