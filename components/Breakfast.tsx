export default function Breakfast() {
  return (
    <section className="bg-[#EDE8DD] py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="label">4 · Junho · 2026</span>
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
            Pequeno Almoço
          </h2>
          <div className="section-divider" />
          <p
            style={{
              fontSize: "0.85rem",
              color: "#5C5248",
              lineHeight: 1.8,
              maxWidth: "36rem",
              margin: "0 auto",
            }}
          >
            Antes da cerimónia, noiva e noivo preparam-se em locais diferentes
            rodeados das pessoas que mais amam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Noiva */}
          <div
            style={{
              background: "#F5F0E8",
              border: "1px solid #C8BC9A",
              padding: "2rem",
            }}
          >
            <span
              style={{
                fontSize: "0.55rem",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#8A7A55",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              A Noiva
            </span>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "1.6rem",
                color: "#3A3328",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              Salão da Igreja
            </h3>
            <div
              style={{
                width: "30px",
                height: "1px",
                background: "#C8BC9A",
                marginBottom: "1rem",
              }}
            />
            <p
              style={{
                fontSize: "0.8rem",
                color: "#5C5248",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Tatiana e as suas damas reúnem-se no salão da igreja para o
              pequeno almoço, preparação e últimos momentos antes de caminhar
              para o altar.
            </p>
            <a
              href="https://maps.app.goo.gl/7ZozinCs4SX4ksHB7"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                border: "1px solid #8A7A55",
                padding: "0.5rem 1.5rem",
                fontSize: "0.55rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                transition: "all 0.2s",
              }}
              className="text-muted hover:bg-muted hover:text-ivory"
            >
              Ver no Mapa
            </a>
          </div>

          {/* Noivo */}
          <div
            style={{
              background: "#3A3328",
              padding: "2rem",
            }}
          >
            <span
              style={{
                fontSize: "0.55rem",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "rgba(237,232,221,0.5)",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              O Noivo
            </span>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "1.6rem",
                color: "#EDE8DD",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              Casa dos Pais
            </h3>
            <div
              style={{
                width: "30px",
                height: "1px",
                background: "rgba(200,188,154,0.4)",
                marginBottom: "1rem",
              }}
            />
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(237,232,221,0.6)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Daniel e os seus padrinhos reúnem-se em casa dos pais para o
              pequeno almoço, preparação e os últimos momentos antes da
              cerimónia.
            </p>
            <a
              href="https://maps.app.goo.gl/yeUKkb3UMFFQy7uA8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                border: "1px solid rgba(200,188,154,0.5)",
                padding: "0.5rem 1.5rem",
                fontSize: "0.55rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(237,232,221,0.6)",
                transition: "all 0.2s",
              }}
              className="hover:bg-[#EDE8DD]/10"
            >
              Ver no Mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
