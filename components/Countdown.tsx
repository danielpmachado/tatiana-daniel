"use client";
import { useEffect, useState } from "react";

const WEDDING = new Date("2026-06-04T12:00:00");

function getTimeLeft() {
  const diff = WEDDING.getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / 864e5),
    h: Math.floor((diff % 864e5) / 36e5),
    m: Math.floor((diff % 36e5) / 6e4),
    s: Math.floor((diff % 6e4) / 1e3),
  };
}

export default function Countdown() {
  const [t, setT] = useState(getTimeLeft());
  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);
  const units = [
    { label: "Dias", value: t.d },
    { label: "Horas", value: String(t.h).padStart(2, "0") },
    { label: "Minutos", value: String(t.m).padStart(2, "0") },
    { label: "Segundos", value: String(t.s).padStart(2, "0") },
  ];
  return (
    <section className="bg-[#EDE8DD] py-16 px-4 md:py-20 md:px-8 text-center">
      <span className="label">O grande dia está a chegar</span>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 300,
          // Keep title readable but slightly smaller on mobile
          fontSize: "clamp(1.5rem,4.5vw,2.5rem)",
          color: "#3A3328",
          marginBottom: "3rem",
          lineHeight: 1,
        }}
      >
        Em contagem decrescente&hellip;
      </h2>
      <div
        className="max-w-2xl mx-auto"
        style={{
          border: "1px solid #C8BC9A",
          // Responsive padding so the 4 counters can fit on mobile
          padding: "clamp(1.5rem,4vw,2.5rem) clamp(1rem,3vw,2rem)",
        }}
      >
        <div className="flex justify-center" style={{ borderColor: "#C8BC9A" }}>
          {units.map(({ label, value }, i) => (
            <div
              key={label}
              style={{
                // Responsive horizontal padding so each unit stays inside the row on mobile
                padding: "0 clamp(0.5rem, 2.2vw, 2rem)",
                borderRight:
                  i < units.length - 1 ? "1px solid #C8BC9A" : undefined,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  // Smaller min value to avoid overflowing on phones
                  fontSize: "clamp(1.6rem, 7vw, 3rem)",
                  fontWeight: 300,
                  color: "#3A3328",
                  fontVariantNumeric: "tabular-nums",
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p
                style={{
                  fontSize: "clamp(0.45rem, 1.7vw, 0.55rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "#8A7A55",
                  marginTop: "0.5rem",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
