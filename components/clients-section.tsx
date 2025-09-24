"use client"
import Image from "next/image"

import { useState, useEffect } from "react"
import { Reveal } from "./reveal"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/translations"

const clients = [
  {
    id: "coca-cola",
    name: "Coca-Cola",
    logo: "/coca-cola-logo.png",
    backgroundImage: "/beverage-factory-production-line.png",
  },
  {
    id: "colima-government",
    name: "Government of Colima",
    logo: "/government-of-colima-logo.png",
    backgroundImage: "/modern-office-building.png",
  },
  {
    id: "tigres",
    name: "Tigres",
    logo: "/tigres-logo.png",
    backgroundImage: "/placeholder-cjfln.png",
  },
  {
    id: "grand-sirenis",
    name: "Grand Sirenis Hotels & Resorts",
    logo: "/grand-sirenis-hotels-logo.png",
    backgroundImage: "/placeholder-yoa2s.png",
  },
  {
    id: "villa-valencia",
    name: "Villa La Valencia Beach Resort & Spa",
    logo: "/villa-la-valencia-logo.png",
    backgroundImage: "/beach-resort-sunset-ocean.png",
  },
  {
    id: "dreams-resorts",
    name: "Dreams Resorts & Spas",
    logo: "/dreams-resorts-logo.png",
    backgroundImage: "/spa-wellness-relaxation.png",
  },
  {
    id: "villa-group",
    name: "The Villa Group Beach Resorts & Spas",
    logo: "/villa-group-resorts-logo.png",
    backgroundImage: "/beachfront-villa-palms.png",
  },
  {
    id: "hotel-mousai",
    name: "Hotel Mousai",
    logo: "/hotel-mousai-luxury-logo.png",
    backgroundImage: "/luxury-hotel-lobby-modern.png",
  },
  {
    id: "hyatt-ziva",
    name: "Hyatt Ziva",
    logo: "/hyatt-ziva-logo.png",
    backgroundImage: "/hotel-infinity-pool-ocean-view.png",
  },
  {
    id: "paradise-village",
    name: "Paradise Village Beach Resort & Spa",
    logo: "/paradise-village-resort-logo.png",
    backgroundImage: "/tropical-paradise-resort.png",
  },
  {
    id: "altozano",
    name: "Altozano",
    logo: "/altozano-logo.png",
    backgroundImage: "/modern-residential-development.png",
  },
  {
    id: "seguros-el-potosi",
    name: "Seguros El Potosí",
    logo: "/seguros-el-potosi-logo.png",
    backgroundImage: "/insurance-office-professional.png",
  },
]

interface ClientsSectionProps {
  locale: Locale
}

export function ClientsSection({ locale }: ClientsSectionProps) {
  const t = getTranslations(locale)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(clients.length / 6))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(clients.length / 6))
    setIsAutoPlaying(false)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(clients.length / 6)) % Math.ceil(clients.length / 6))
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const clientsPerSlide = 6
  const totalSlides = Math.ceil(clients.length / clientsPerSlide)

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden w-full">
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[600px]">
          {/* Mobile header */}
          <div className="items-stretch block lg:hidden">
            <Reveal>
              <div className="bg-[#203c5c] p-8 lg:p-12 w-full h-full flex items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#1b96a2]/20"></div>
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#0067a2]/30"></div>

                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight leading-none mb-6">
                    {t.clientsTitle}
                  </h2>
                  <div className="h-px bg-[#1b96a2] mb-6"></div>
                  <p className="text-sm font-light text-white/80 leading-relaxed">{t.clientsDescription}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex items-center w-full relative">
            <Reveal>
              <div className="w-[100vw] lg:w-[50vw] relative">
                {/* Carousel container */}
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                      const slideClients = clients.slice(
                        slideIndex * clientsPerSlide,
                        (slideIndex + 1) * clientsPerSlide,
                      )

                      return (
                        <div key={slideIndex} className="w-full flex-shrink-0">
                          <div className="grid grid-cols-3 gap-px bg-neutral-200">
                            {slideClients.map((client) => (
                              <div
                                key={client.id}
                                className="bg-white flex items-center justify-center p-6 lg:p-8 relative overflow-hidden aspect-square"
                              >
                                <div className="absolute inset-0 ">
                                  <Image
                                    src={client.backgroundImage || "/placeholder.svg"}
                                    alt=""
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="absolute w-full h-full left-0 top-0 backdrop-blur-sm" />
                                <Image
                                  src={client.logo || "/placeholder.svg"}
                                  alt={client.name}
                                  width={220}
                                  height={180}
                                  className="w-full h-full object-contain relative z-10"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#203c5c] hover:bg-[#1b96a2] text-white p-2 rounded-full transition-colors duration-200 z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#203c5c] hover:bg-[#1b96a2] text-white p-2 rounded-full transition-colors duration-200 z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentIndex ? "bg-[#1b96a2]" : "bg-neutral-300 hover:bg-neutral-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right side - Text with colored background */}
          <div className="hidden lg:flex items-stretch">
            <Reveal>
              <div className="bg-[#203c5c] p-8 lg:p-12 w-full h-full flex items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#1b96a2]/20"></div>
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#0067a2]/30"></div>

                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight leading-none mb-6">
                    {t.clientsTitle}
                  </h2>
                  <div className="h-px bg-[#1b96a2] mb-6"></div>
                  <p className="text-sm font-light text-white/80 leading-relaxed">{t.clientsDescription}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
