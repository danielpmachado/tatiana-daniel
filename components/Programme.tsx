const events = [
  {
    time: "10:30",
    name: "Pequeno Almoço",
    venue: "*verificar na secção abaixo",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path
          d="M14 28 Q14 36 24 36 Q34 36 34 28 L14 28 Z"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
        />
        <path
          d="M34 22 Q40 22 40 27 Q40 32 34 32"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
        />
        <line
          x1="24"
          y1="14"
          x2="24"
          y2="20"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
        />
        <line
          x1="19"
          y1="15"
          x2="19"
          y2="20"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
        />
        <line
          x1="29"
          y1="15"
          x2="29"
          y2="20"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
  {
    time: "12:00",
    name: "Cerimónia na Igreja",
    venue: "Igreja dos Matos da Ranha",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle
          cx="17"
          cy="26"
          r="8"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
        />
        <circle
          cx="31"
          cy="26"
          r="8"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
        />
        <path
          d="M24 18 L24 10 M21 13 L27 13"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
  {
    time: "14:00",
    name: "Cocktail",
    venue: "Quinta dos Castanheiros",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path
          d="M18 14 L24 28 L30 14 Z"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
          fill="none"
        />
        <line
          x1="24"
          y1="28"
          x2="24"
          y2="36"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
        />
        <line
          x1="20"
          y1="36"
          x2="28"
          y2="36"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
        />
        <path
          d="M20 19 Q24 22 28 19"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  // {
  //   time: "15:30",
  //   name: "Jantar",
  //   venue: "Jantar sentado & brindes",
  //   icon: (
  //     <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
  //       <circle
  //         cx="24"
  //         cy="26"
  //         r="10"
  //         stroke="rgba(237,232,221,.65)"
  //         strokeWidth="1.2"
  //       />
  //       <line
  //         x1="19"
  //         y1="12"
  //         x2="19"
  //         y2="18"
  //         stroke="rgba(237,232,221,.65)"
  //         strokeWidth="1.2"
  //       />
  //       <line
  //         x1="24"
  //         y1="12"
  //         x2="24"
  //         y2="20"
  //         stroke="rgba(237,232,221,.65)"
  //         strokeWidth="1.2"
  //       />
  //       <line
  //         x1="29"
  //         y1="12"
  //         x2="29"
  //         y2="18"
  //         stroke="rgba(237,232,221,.65)"
  //         strokeWidth="1.2"
  //       />
  //     </svg>
  //   ),
  // },
  {
    time: "TBD",
    name: "Festa",
    venue: "Música ao vivo & dança",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle
          cx="24"
          cy="24"
          r="10"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
        />
        <path
          d="M24 16 L24 24 L30 28"
          stroke="rgba(237,232,221,.65)"
          strokeWidth="1.2"
        />
        <circle cx="24" cy="24" r="1.5" fill="rgba(237,232,221,.65)" />
      </svg>
    ),
  },
];

export default function Programme() {
  return (
    <section className="bg-[#6B6B3A] py-16 px-8 text-center">
      <span className="label" style={{ color: "rgba(237,232,221,0.5)" }}>
        Dia do Casamento
      </span>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "clamp(2rem,4vw,3rem)",
          color: "#EDE8DD",
          marginBottom: "3rem",
          lineHeight: 1,
        }}
      >
        O Programa
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {events.map(({ time, name, venue, icon }) => (
          <div key={name} className="flex flex-col items-center gap-3">
            {icon}
            <p
              style={{
                fontSize: "0.6rem",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(237,232,221,0.55)",
              }}
            >
              {time}
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "#EDE8DD",
              }}
            >
              {name}
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                color: "rgba(237,232,221,0.5)",
                lineHeight: 1.6,
              }}
            >
              {venue}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
