import type { Metadata, Viewport } from "next";
import { Ysabeau, Ysabeau_Office } from "next/font/google";
import { Providers } from "@/components/Providers";
import { site } from "@/lib/site";
import "./globals.css";

const ysabeau = Ysabeau({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-ysabeau",
  display: "swap",
});

const ysabeauOffice = Ysabeau_Office({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-ysabeau-office",
  display: "swap",
});

const title = "Dra. Gabriela Miranda | Emagrecimento e Performance em Uberlândia";
const description =
  "Médica em Uberlândia com foco em emagrecimento, obesidade, saúde metabólica e performance. Consulta presencial com bioimpedância na Concept Clinic e teleconsulta. CRM MG 73587.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe9",
};

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: site.name,
  description,
  telephone: `+${site.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.street}, ${site.district}`,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.zip,
    addressCountry: "BR",
  },
  sameAs: [site.instagram, site.doctoralia],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${ysabeau.variable} ${ysabeauOffice.variable}`}>
      <body>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </body>
    </html>
  );
}
