import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://meydey.example"),
  title: {
    default: "MEYDEY — Innovación en Soluciones de Seguridad y Tecnología",
    template: "%s | MEYDEY",
  },
  description:
    "Empresa mexicana con 8 años de experiencia en soluciones de seguridad y tecnología. CCTV, control de acceso, fibra óptica y telecomunicaciones.",
  applicationName: "MEYDEY",
  authors: [{ name: "MEYDEY" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "MEYDEY",
  publisher: "MEYDEY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://meydey.example",
    languages: {
      "es-MX": "https://meydey.example/es",
      "en-US": "https://meydey.example/en",
    },
  },
  openGraph: {
    type: "website",
    siteName: "MEYDEY",
    title: "MEYDEY — Innovación en Soluciones de Seguridad y Tecnología",
    description:
      "Empresa mexicana con 8 años de experiencia en soluciones de seguridad y tecnología. CCTV, control de acceso, fibra óptica y telecomunicaciones.",
    url: "https://meydey.example",
    images: [
      {
        url: "/meydey-logo.png",
        width: 1200,
        height: 630,
        alt: "MEYDEY — Innovación en Soluciones de Seguridad y Tecnología",
      },
    ],
    locale: "es_MX",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@meydey",
    creator: "@meydey",
    title: "MEYDEY — Innovación en Soluciones de Seguridad y Tecnología",
    description:
      "Empresa mexicana con 8 años de experiencia en soluciones de seguridad y tecnología. CCTV, control de acceso, fibra óptica y telecomunicaciones.",
    images: [
      {
        url: "/meydey-logo.png",
        alt: "MEYDEY — Innovación en Soluciones de Seguridad y Tecnología",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  keywords: [
    // Spanish keywords
    "soluciones de seguridad",
    "CCTV México",
    "control de acceso",
    "fibra óptica",
    "telecomunicaciones",
    "seguridad empresarial",
    "videovigilancia",
    "sistemas de seguridad",
    "tecnología México",
    "MEYDEY",
    "seguridad industrial",
    "monitoreo remoto",
    "instalación CCTV",
    "cámaras de seguridad",
    "redes de fibra óptica",
    // English keywords
    "security solutions",
    "CCTV",
    "access control",
    "fiber optics",
    "telecommunications",
    "México",
  ],
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "yandex-verification": "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
