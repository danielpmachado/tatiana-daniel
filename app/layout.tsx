import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const abramo = localFont({
  src: "../public/fonts/abramo/Abramo Script.woff2",
  variable: "--font-script",
  display: "swap",
});

export const viewport = {
  viewportFit: "cover",
  themeColor: "#1a1814",
};

export const metadata: Metadata = {
  title: "Tatiana & Daniel · 4 de Junho de 2026",
  description:
    "Junte-se a nós para celebrar o casamento de Tatiana e Daniel na Quinta dos Castanheiros, Pombal.",
  openGraph: {
    title: "Tatiana & Daniel · 4 de Junho de 2026",
    description:
      "Estão cordialmente convidados para o nosso casamento em Pombal, Leiria.",
    type: "website",
    url: "https://daniel-machado.github.io/tatiana-daniel",
    images: [
      {
        url: "https://daniel-machado.github.io/tatiana-daniel/images/assets/cover.JPG",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt"
      className={`${cormorant.variable} ${jost.variable} ${abramo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
