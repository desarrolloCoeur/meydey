"use client"
import Image from "next/image"
import { Reveal } from "./reveal"
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

          {/* Infinite scrolling logo stripe */}
          <div className="flex items-center w-full relative">
            <Reveal>
              <div className="w-[100vw] lg:w-[50vw] relative">
                <div className="overflow-hidden bg-white py-12">
                  <div className="flex animate-scroll-rtl">
                    {/* First set of logos */}
                    {clients.map((client) => (
                      <div
                        key={`first-${client.id}`}
                        className="flex-shrink-0 w-40 h-24 mx-8 flex items-center justify-center hover:scale-105 transition-all duration-300"
                      >
                        <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          width={140}
                          height={70}
                          className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {clients.map((client) => (
                      <div
                        key={`second-${client.id}`}
                        className="flex-shrink-0 w-40 h-24 mx-8 flex items-center justify-center hover:scale-105 transition-all duration-300"
                      >
                        <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          width={140}
                          height={70}
                          className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    ))}
                  </div>
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

      <style jsx>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll-rtl {
          animation: scroll-rtl 60s linear infinite;
          width: 200%;
        }
      `}</style>
    </section>
  )
}
