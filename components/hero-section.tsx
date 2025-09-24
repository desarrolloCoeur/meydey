"use client"
import Image from "next/image"
import { Shield, Camera, Wifi } from "lucide-react"
import { getTranslations } from "@/lib/translations"

interface HeroSectionProps {
  locale: string
}

export function HeroSection({ locale }: HeroSectionProps) {
  const t = getTranslations(locale)

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/15.JPG"
          alt="MEYDEY - Professional security and technology solutions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full px-6 lg:px-12 xl:px-16 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] tracking-tight mb-8 animate-fade-in-up">
              {t.heroTitle1}
              <br />
              <span className="font-extralight italic">{t.heroTitle2}</span>
            </h1>

            <div className="w-24 h-px bg-white/60 mx-auto mb-8" />

            <p className="text-lg md:text-xl font-light text-white/90 mb-16 leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay">
              {t.heroDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center animate-fade-in-up-delay-2">
        <div className="mx-4 sm:mx-6 lg:mx-12 xl:mx-16 mb-6 sm:mb-8 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-[#203c5c]/20 backdrop-blur-md border border-[#1b96a2]/20 rounded-lg shadow-lg">
          <div className="flex flex-row sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 text-white">
            <div className="flex items-center gap-2 sm:gap-3">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#86dce4]" />
              <span className="text-[10px] sm:text-xs font-light tracking-wide uppercase">{t.securitySystems}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-[#86dce4]" />
              <span className="text-[10px] sm:text-xs font-light tracking-wide uppercase">{t.cctvMonitoring}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-[#86dce4]" />
              <span className="text-[10px] sm:text-xs font-light tracking-wide uppercase">{t.networks}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
