import Image from "next/image";

export default function WithLove() {
  return (
    <footer className="bg-[#3A3328] py-20 px-8 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="polaroid w-40" style={{ transform: "rotate(3deg)" }}>
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#6B6B3A]">
          <Image
            src="/tatiana-daniel/images/assets/sea.jpg"
            alt="Tatiana and Daniel"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="text-center">
        <span className="label" style={{ color: "rgba(237,232,221,0.35)" }}>
          Com Amor
        </span>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(2.5rem,6vw,4rem)",
            color: "#EDE8DD",
            lineHeight: 1,
            marginBottom: "0.75rem",
          }}
        >
          Tatiana e Daniel
        </h2>
        <p
          style={{
            fontSize: "0.6rem",
            textTransform: "uppercase",
            letterSpacing: "0.28em",
            color: "rgba(237,232,221,0.4)",
          }}
        >
          4 · Junho · 2026 · Pombal, Leiria
        </p>
      </div>
      <div
        className="polaroid w-40 mt-6 md:mt-0"
        style={{ transform: "rotate(-2deg)" }}
      >
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#6B6B3A]">
          <Image
            src="/tatiana-daniel/images/assets/sea-2.jpg"
            //src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80"
            alt="Tatiana and Daniel"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </footer>
  );
}
