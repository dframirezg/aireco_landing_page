import type { Metadata } from "next";
import "./globals.css";

// The landing has no request-specific data. This lets the GitHub Pages build
// pre-render it as a static document while preserving the normal local/Sites flow.
export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://aireco-sas.com"),
  title: "AIRECO S.A.S. | Ingeniería de aire acondicionado y ventilación",
  description: "Diseño, suministro, instalación y mantenimiento de sistemas de aire acondicionado y ventilación mecánica en Colombia.",
  keywords: ["aire acondicionado Colombia", "ventilación mecánica", "mantenimiento HVAC", "ingeniería de climatización", "AIRECO"],
  openGraph: { title: "AIRECO S.A.S. | Ingeniería para que el aire trabaje mejor", description: "Más de 15 años diseñando, instalando y manteniendo sistemas HVAC en Colombia.", type: "website", locale: "es_CO", images: [{ url: "/og.png", width: 1731, height: 909, alt: "AIRECO S.A.S. — Ingeniería para que el aire trabaje mejor" }] },
  twitter: { card: "summary_large_image", title: "AIRECO S.A.S.", description: "Ingeniería para que el aire trabaje mejor.", images: ["/og.png"] },
  icons: { icon: "/brand/aireco-isotipo-original.svg", shortcut: "/brand/aireco-isotipo-original.svg" },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "ProfessionalService", name: "AIRECO S.A.S.", url: "https://www.aireco-sas.com/", email: "info@aireco-sas.com", telephone: "+57 316 741 1461",
  address: { "@type": "PostalAddress", streetAddress: "Carrera 44 # 20C-96", addressLocality: "Bogotá", addressCountry: "CO" }, areaServed: { "@type": "Country", name: "Colombia" },
  description: "Servicios de ingeniería, instalación y mantenimiento de aire acondicionado y ventilación mecánica.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
