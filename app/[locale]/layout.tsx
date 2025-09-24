import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const translations = {
    en: {
      title: "MEYDEY — Innovation in Security and Technology Solutions",
      description:
        "Mexican company with 8 years of experience in security and technology solutions. CCTV, access control, fiber optics, and telecommunications.",
      ogTitle: "Innovation in Security and Technology Solutions | MEYDEY",
    },
    es: {
      title: "MEYDEY — Innovación en Soluciones de Seguridad y Tecnología",
      description:
        "Empresa mexicana con 8 años de experiencia en soluciones de seguridad y tecnología. CCTV, control de acceso, fibra óptica y telecomunicaciones.",
      ogTitle: "Innovación en Soluciones de Seguridad y Tecnología | MEYDEY",
    },
  }

  const t = translations[locale as keyof typeof translations] || translations.en

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `https://meydey.example/${locale}`,
      languages: {
        en: "https://meydey.example/en",
        es: "https://meydey.example/es",
      },
    },
    openGraph: {
      siteName: "MEYDEY",
      title: t.ogTitle,
      description: t.description,
      type: "website",
      url: `https://meydey.example/${locale}`,
      images: [
        {
          url: "/meydey-logo.png",
          alt: "MEYDEY — Innovation in Security and Technology Solutions",
          width: 1200,
          height: 630,
        },
      ],
      locale: locale === "es" ? "es_MX" : "en_MX",
    },
    twitter: {
      card: "summary_large_image",
      title: t.ogTitle,
      description: t.description,
      images: [
        {
          url: "/meydey-logo.png",
          alt: "MEYDEY — Innovation in Security and Technology Solutions",
        },
      ],
      site: "@meydey",
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  return (
    <html lang={locale} className={inter.className}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden antialiased">{children}</body>
    </html>
  )
}
