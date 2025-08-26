import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "MEYDEY — Innovation in Security and Technology Solutions",
  description:
    "Mexican company with 8 years of experience in security and technology solutions. CCTV, access control, fiber optics, and telecommunications.",  
  alternates: {
    canonical: "https://meydey.example/",
  },
  openGraph: {
    siteName: "MEYDEY",
    title: "Innovation in Security and Technology Solutions | MEYDEY",
    description:
      "Mexican company with 8 years of experience in security and technology solutions. CCTV, access control, fiber optics, and telecommunications.",
    type: "website",
    url: "https://meydey.example/",
    images: [
      {
        url: "/meydey-logo.png",
        alt: "MEYDEY — Innovation in Security and Technology Solutions",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovation in Security and Technology Solutions | MEYDEY",
    description:
      "Mexican company with 8 years of experience in security and technology solutions. CCTV, access control, fiber optics, and telecommunications.",
    images: [
      {
        url: "/meydey-logo.png",
        alt: "MEYDEY — Innovation in Security and Technology Solutions",
      },
    ],
    site: "@meydey",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
