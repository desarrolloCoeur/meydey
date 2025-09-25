import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/translations"

interface BannerProps {
  locale: Locale
}

const Banner = ({ locale }: BannerProps) => {
  const t = getTranslations(locale)

  return (
    <div className="w-full relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/banner.jpg"
          alt="Seguridad tecnológica"
          fill
          className="object-cover grayscale-[10%]"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 py-[180px]">
        <div className="grid grid-cols-12 h-full items-center">                    

          {/* Middle column - content */}
          <div className="col-span-12 md:col-span-12 space-y-8">
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white uppercase">
              <span className="text-sky-600">{t.bannerTitle1}</span> &{" "}
              <span className="text-sky-600">{t.bannerTitle2}</span>
            </h2>

            <p className="text-xl text-gray-200 max-w-2xl font-light">{t.bannerDescription}</p>

            <div className="pt-6">
              <a
                href="https://wa.me/+523221086381?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios."
                className="inline-flex items-center group border border-white px-6 py-3 hover:bg-sky-600 hover:border-sky-600 transition-colors duration-300"
              >
                <span className="mr-4 text-sm font-normal text-white">{t.bannerContact}</span>
                <ArrowRight className="h-4 w-4 text-white transition-all group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom grid line */}
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

export default Banner
