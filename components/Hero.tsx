import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] flex items-end overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=90"
        alt="Tatiana and Daniel"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/75" />
      <div className="relative z-10 w-full px-10 pb-16 md:px-20 md:pb-24">
        <h1
          style={{
            fontFamily: "var(--font-script)",
            fontWeight: "normal",
            lineHeight: 0.88,
            color: "white",
            transformOrigin: "bottom left",
          }}
          className="rotate-[-15deg] inline-block translate-x-20"
        >
          <span style={{ fontSize: "clamp(4rem,11vw,8rem)", display: "block" }}>
            Tatiana
          </span>
          <span
            style={{
              fontSize: "clamp(1.5rem,4vw,3rem)",
              display: "block",
              color: "rgba(255,255,255,0.6)",
              marginLeft: "0.5rem",
            }}
          >
            e
          </span>
          <span style={{ fontSize: "clamp(4rem,11vw,8rem)", display: "block" }}>
            Daniel
          </span>
        </h1>
        <p
          style={{
            // `transform` rotations don't affect layout flow, so we add extra spacing
            // to prevent the rotated heading from visually overlapping this text.
            marginTop: "2rem",
            fontSize: "0.6rem",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          4 · Junho · 2026 &nbsp;·&nbsp; Pombal, Leiria
        </p>
      </div>
    </section>
  );
}
