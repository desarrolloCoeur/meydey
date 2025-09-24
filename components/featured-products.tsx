"use client"

import { useState } from "react"
import { ServiceCard, type Service } from "./service-card"
import { ServiceModal } from "./service-modal"
import { Reveal } from "./reveal"
import { getTranslations, type Locale } from "@/lib/translations"

interface FeaturedProductsProps {
  locale: Locale
}

export function FeaturedProducts({ locale }: FeaturedProductsProps) {
  const t = getTranslations(locale)

  const featuredServices: Service[] = [
    {
      id: "1",
      name: t.cctvSystems,
      description: t.cctvDescription,
      image: "/assets/13.JPG",
      badge: "Popular",
      features: [t.hdCameras, t.nightVision, t.remoteMonitoring, t.cloudStorage],
      details: t.cctvDetails,
    },
    {
      id: "2",
      name: t.accessControl,
      description: t.accessControlDescription,
      image: "/assets/control.JPG",
      badge: "Advanced",
      features: [t.biometricScanners, t.cardReaders, t.vehicleGates, t.mobileAccess],
      details: t.accessControlDetails,
    },
    {
      id: "3",
      name: t.fiberOptics,
      description: t.fiberOpticsDescription,
      image: "/fiber-optic-installation.png",
      badge: "Essential",
      features: [t.fiberInstallation, t.networkDesign, t.wirelessSetup, t.cableManagement],
      details: t.fiberOpticsDetails,
    },
  ]

  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleServiceDetails = (service: Service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <section className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden" id="featured-services">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#203c5c]/4 rounded-full"></div>
        <div className="absolute top-1/3 left-0 w-2 h-32 bg-[#1b96a2]/15"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-2 bg-[#0067a2]/10"></div>
        <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-[#1b96a2]/8 rotate-12"></div>
      </div>

      <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="mb-20">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-8">
                  <h2 className="text-5xl lg:text-7xl font-light text-[#203c5c] mb-6 tracking-tight">
                    {t.servicesTitle}
                  </h2>
                  <div className="w-16 h-px bg-[#1b96a2] mb-8"></div>
                  <p className="text-lg font-light text-neutral-600 leading-relaxed max-w-2xl">
                    {t.servicesDescription}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-12 gap-6">
            {featuredServices.map((service, index) => (
              <div
                key={service.id}
                className="col-span-12 md:col-span-6 lg:col-span-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Reveal delay={index * 0.1}>
                  <ServiceCard service={service} onServiceDetails={handleServiceDetails} locale={locale} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedService && (
        <ServiceModal service={selectedService} isOpen={isModalOpen} onClose={closeModal} locale={locale} />
      )}
    </section>
  )
}
