"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Qual é o dress code?",
    a: "Não há dress code. Confiamos a 100% no vosso bom gosto!",
  },
  {
    q: "O casamento é ao ar livre ou em interior?",
    a: "A cerimónia e as refeições serão indoor, mas teremos vários momentos ao ar livre, por isso venham preparados para ambos.",
  },
  {
    q: "As crianças são bem-vindas?",
    a: "Claro que sim, as crianças são muito bem-vindas. Por favor indiquem o número de crianças no RSVP.",
  },
  {
    q: "A que horas termina a festa?",
    a: "Planeamos dançar até de madrugada! No máximo podemos ficar na quinta até às 05:00.",
  },
  {
    q: "Existe lista de presentes?",
    a: "Não existe lista de presentes, o nosso maior presente é a vossa presença. Caso desejem, podem enviar-nos um presente por MB Way, Revolut, etc.",
  },
];

export default function Details() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="details" className="bg-[#6B6B3A] py-16 px-8">
      <div className="max-w-3xl mx-auto">
        <span
          className="label"
          style={{
            color: "rgba(237,232,221,0.45)",
            textAlign: "center",
            display: "block",
          }}
        >
          FAQ
        </span>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(2rem,4vw,3rem)",
            color: "#EDE8DD",
            marginBottom: "2.5rem",
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          Detalhes
        </h2>
        {faqs.map(({ q, a }, i) => (
          <div
            key={i}
            style={{ borderBottom: "1px solid rgba(237,232,221,0.15)" }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem 0",
                textAlign: "left",
                color: "rgba(237,232,221,0.75)",
                fontSize: "0.85rem",
                letterSpacing: "0.02em",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
              className="hover:text-[#EDE8DD] transition-colors"
            >
              <span>{q}</span>
              <span
                style={{
                  color: "rgba(237,232,221,0.35)",
                  marginLeft: "1rem",
                  fontSize: "1.1rem",
                  flexShrink: 0,
                }}
              >
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <p
                style={{
                  paddingBottom: "1.25rem",
                  fontSize: "0.82rem",
                  color: "rgba(237,232,221,0.55)",
                  lineHeight: 1.8,
                }}
              >
                {a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
