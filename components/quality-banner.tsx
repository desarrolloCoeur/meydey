import Image from "next/image"
import { getTranslations, type Locale } from "@/lib/translations"

interface QualityBannerProps {
  locale: Locale
}

export default function QualityBanner({ locale }: QualityBannerProps) {
  const t = getTranslations(locale)

  return (
    <div className="w-full relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/13.JPG"
          alt="Servicios de calidad en tecnología"
          fill
          className="object-cover grayscale-[10%]"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 py-[120px]">
        <div className="grid grid-cols-12 h-full items-center">
          {/* Left column - sky accent */}
          <div className="hidden md:block md:col-span-1">
            <div className="h-32 w-[2px] bg-sky-600"></div>
          </div>

          {/* Middle column - content */}
          <div className="col-span-12 md:col-span-11 space-y-8">
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white uppercase">
              <span className="text-sky-600">{t.qualityBannerTitle}</span>
            </h2>

            <p className="text-xl text-gray-200 max-w-2xl font-light">{t.qualityBannerDescription}</p>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div>
                <h3 className="text-lg font-light text-sky-400 mb-2">{t.qualityBannerCondos}</h3>
                <p className="text-sm text-gray-300 font-light">{t.qualityBannerCondosDesc}</p>
              </div>
              <div>
                <h3 className="text-lg font-light text-sky-400 mb-2">{t.qualityBannerHotels}</h3>
                <p className="text-sm text-gray-300 font-light">{t.qualityBannerHotelsDesc}</p>
              </div>
              <div>
                <h3 className="text-lg font-light text-sky-400 mb-2">{t.qualityBannerConstruction}</h3>
                <p className="text-sm text-gray-300 font-light">{t.qualityBannerConstructionDesc}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 px-6">
          <div className="grid grid-cols-12">
            <div className="col-span-3 col-start-9 h-[1px] bg-white/20"></div>
            <div className="col-span-1 col-start-12"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
