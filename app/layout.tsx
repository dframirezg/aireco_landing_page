import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aireco-sas.com"),
  title: "AIRECO S.A.S. | Ingeniería de aire acondicionado y ventilación",
  description: "Diseño, suministro, instalación y mantenimiento de sistemas de aire acondicionado y ventilación mecánica en Colombia.",
  keywords: ["aire acondicionado Colombia", "ventilación mecánica", "mantenimiento HVAC", "ingeniería de climatización", "AIRECO"],
  openGraph: { title: "AIRECO S.A.S. | Ingeniería para que el aire trabaje mejor", description: "Más de 15 años diseñando, instalando y manteniendo sistemas HVAC en Colombia.", type: "website", locale: "es_CO", images: [{ url: "/og.png", width: 1732, height: 912, alt: "AIRECO S.A.S. — Ingeniería para que el aire trabaje mejor" }] },
  twitter: { card: "summary_large_image", title: "AIRECO S.A.S.", description: "Ingeniería para que el aire trabaje mejor.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "ProfessionalService", name: "AIRECO S.A.S.", url: "https://www.aireco-sas.com/", email: "info@aireco-sas.com", telephone: "+57 316 741 1461",
  address: { "@type": "PostalAddress", streetAddress: "Carrera 44 # 20C-96", addressLocality: "Bogotá", addressCountry: "CO" }, areaServed: { "@type": "Country", name: "Colombia" },
  description: "Servicios de ingeniería, instalación y mantenimiento de aire acondicionado y ventilación mecánica.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
