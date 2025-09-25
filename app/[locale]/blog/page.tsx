"use client"
import Header from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { ClientsSection } from "@/components/clients-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import Banner from "@/components/banner-1"
import { GallerySection } from "@/components/gallery-section"
import QualityBanner from "@/components/quality-banner"
import { use } from "react"
import type { Locale } from "@/lib/translations"

type Props = {
  params: Promise<{ locale: string }>
}

export default function HomePage({ params }: Props) {
  const resolvedParams = params instanceof Promise ? use(params) : params
  const { locale: rawLocale } = resolvedParams

  const locale: Locale = rawLocale === "es" || rawLocale === "en" ? rawLocale : "en"

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen">
        <HeroSection locale={locale} />
        <div id="about">
          <AboutSection locale={locale} />
        </div>
        <Banner locale={locale} />
        <div id="services">
          <FeaturedProducts locale={locale} />
        </div>
        <QualityBanner locale={locale} />
        <div id="gallery">
          <GallerySection locale={locale} />
        </div>
        <div id="clients">
          <ClientsSection locale={locale} />
        </div>
        <div id="contact">
          <ContactSection locale={locale} />
        </div>
        <Footer locale={locale} />
      </main>
    </>
  )
}
