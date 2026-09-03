import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NodoTech — Desarrollo web a medida en Ecuador",
  description:
    "Diseñamos y programamos sitios web a medida: desde una landing page hasta plataformas con acceso de usuarios y pagos en línea. Atención 100% online desde Ecuador.",
  keywords: [
    "diseño web Ecuador",
    "desarrollo web Cuenca",
    "landing page",
    "página web para negocios",
    "tienda en línea Ecuador",
  ],
  openGraph: {
    title: "NodoTech — Desarrollo web a medida en Ecuador",
    description:
      "Desde una landing page hasta plataformas con usuarios y pagos en línea. Atención 100% online.",
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
