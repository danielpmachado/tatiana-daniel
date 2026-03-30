"use client";
import Image from "next/image";
import { useState } from "react";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    breakfast: "",
    dietary: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/xjgpwyjn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Algo correu mal. Tenta novamente.");
      }
    } catch {
      setError("Algo correu mal. Tenta novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#EDE8DD] px-10 py-16 md:px-14 flex flex-col justify-center h-[580px]">
        <span className="label">Confirma a tua presença</span>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(2.5rem,5vw,3.5rem)",
            color: "#3A3328",
            lineHeight: 1,
            marginBottom: "0.5rem",
          }}
        >
          RSVP
        </h2>
        <p
          style={{
            fontSize: "0.6rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#8A7A55",
            marginBottom: "2rem",
          }}
        >
          Confirma até 30 de Abril de 2026
        </p>
        {submitted ? (
          <div>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "1.75rem",
                color: "#3A3328",
                marginBottom: "0.75rem",
              }}
            >
              Obrigado!
            </p>
            <p
              style={{ fontSize: "0.85rem", color: "#5C5248", lineHeight: 1.8 }}
            >
              Recebemos a vossa resposta e mal podemos esperar para celebrar
              convosco.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {[
              { name: "name", type: "text", placeholder: "Nome completo" },
              {
                name: "email",
                type: "email",
                placeholder: "Endereço de email",
              },
            ].map((f) => (
              <input
                key={f.name}
                name={f.name}
                type={f.type}
                placeholder={f.placeholder}
                required
                value={form[f.name as keyof typeof form]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  background: "transparent",
                  borderBottom: "1px solid #C8BC9A",
                  paddingBottom: "0.5rem",
                  fontSize: "0.85rem",
                  color: "#3A3328",
                  outline: "none",
                  fontFamily: "var(--font-sans)",
                }}
                className="placeholder:text-[#8A7A55]/60 focus:border-[#6B6B3A] transition-colors"
              />
            ))}
            <div
              className="flex flex-col gap-2 md:flex-row md:gap-6"
              style={{ padding: "0.25rem 0" }}
            >
              {["Podem contar comigo!", "Infelizmente não posso ir"].map(
                (opt) => (
                  <label
                    key={opt}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.75rem",
                      color: "#5C5248",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value={opt}
                      checked={form.attending === opt}
                      onChange={handleChange}
                      required
                      className="rsvp-radio"
                    />
                    {opt}
                  </label>
                )
              )}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateRows:
                  form.attending === "Podem contar comigo!" ? "1fr" : "0fr",
                transition: "grid-template-rows 0.3s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    paddingTop: "0.25rem",
                  }}
                >
                  <label
                    htmlFor="guests"
                    style={{
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "#8A7A55",
                    }}
                  >
                    Quantas pessoas vêm? (incluindo crianças)
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0",
                      width: "fit-content",
                      border: "1px solid #C8BC9A",
                      background: "#E5DFD3",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setForm((p) => ({
                          ...p,
                          guests: String(Math.max(1, Number(p.guests) - 1)),
                        }))
                      }
                      style={{
                        width: "2rem",
                        height: "2rem",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: "#6B6B3A",
                        fontSize: "1rem",
                        lineHeight: 1,
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        width: "2rem",
                        textAlign: "center",
                        fontSize: "0.85rem",
                        color: "#3A3328",
                        fontFamily: "var(--font-sans)",
                        userSelect: "none",
                      }}
                    >
                      {form.guests}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setForm((p) => ({
                          ...p,
                          guests: String(Math.min(20, Number(p.guests) + 1)),
                        }))
                      }
                      style={{
                        width: "2rem",
                        height: "2rem",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: "#6B6B3A",
                        fontSize: "1rem",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    paddingTop: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "#8A7A55",
                    }}
                  >
                    Pequeno Almoço às 10h30
                  </span>
                  <div style={{ display: "flex", gap: "1.5rem" }}>
                    {["Óbvio, quero ir!", "É muito cedo para mim"].map(
                      (opt) => (
                        <label
                          key={opt}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontSize: "0.75rem",
                            color: "#5C5248",
                            cursor: "pointer",
                          }}
                        >
                          <input
                            type="radio"
                            name="breakfast"
                            value={opt}
                            checked={form.breakfast === opt}
                            onChange={handleChange}
                            required={form.attending === "Podem contar comigo!"}
                            className="rsvp-radio"
                          />
                          {opt}
                        </label>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <input
              name="dietary"
              type="text"
              placeholder="Restrições alimentares (se houver)"
              value={form.dietary}
              onChange={handleChange}
              style={{
                width: "100%",
                background: "transparent",
                borderBottom: "1px solid #C8BC9A",
                paddingBottom: "0.5rem",
                fontSize: "0.85rem",
                color: "#3A3328",
                outline: "none",
                fontFamily: "var(--font-sans)",
              }}
              className="placeholder:text-[#8A7A55]/60 focus:border-[#6B6B3A] transition-colors"
            />
            {error && (
              <p style={{ fontSize: "0.75rem", color: "#9B2335" }}>{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: "0.5rem",
                alignSelf: "flex-start",
                background: "#6B6B3A",
                color: "#EDE8DD",
                padding: "0.75rem 2rem",
                fontSize: "0.6rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
                transition: "background 0.2s",
              }}
              className="hover:bg-[#3A3328]"
            >
              {loading ? "A enviar..." : "Confirmar Presença"}
            </button>
          </form>
        )}
      </div>
      <div className="relative w-full min-h-[320px] aspect-[4/3] md:aspect-auto md:min-h-[500px]">
        <Image
          // src="/tatiana-daniel/images/assets/Quinta-dos-Morgatoes-11-scaled.jpg"
          src="/tatiana-daniel/images/assets/quinta-dos-castanheiros-48.jpg"
          //src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=900&q=80"
          alt="Rings"
          fill
          className="object-cover grayscale"
        />
      </div>
    </section>
  );
}
