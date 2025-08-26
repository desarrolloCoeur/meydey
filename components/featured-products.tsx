"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ServiceCard, Service } from "./service-card"
import { ServiceModal } from "./service-modal"
import { Reveal } from "./reveal"

const featuredServices: Service[] = [
  {
    id: "1",
    name: "CCTV Systems",
    description: "Closed-circuit cameras, video analysis, thermal and biometric solutions",
    image: "/assets/13.JPG",
    badge: "Popular",
    features: ["HD Cameras", "Night Vision", "Remote Monitoring", "Cloud Storage"],
    details: [
      "Professional CCTV installation and maintenance",
      "Advanced video analytics and motion detection",
      "Thermal imaging for enhanced security",
      "Biometric access integration",
      "24/7 remote monitoring capabilities",
    ],
  },
  {
    id: "2",
    name: "Access Control",
    description: "Pedestrian and vehicular access control systems",
    image: "/assets/control.JPG",
    badge: "Advanced",
    features: ["Biometric Scanners", "Card Readers", "Vehicle Gates", "Mobile Access"],
    details: [
      "Biometric fingerprint and facial recognition",
      "RFID and proximity card systems",
      "Automated vehicle access gates",
      "Mobile app integration for remote access",
      "Visitor management systems",
    ],
  },
  {
    id: "3",
    name: "Fiber Optics & Networks",
    description: "Fiber optic installation, wired and wireless networks, structured cabling",
    image: "/fiber-optic-installation.png",
    badge: "Essential",
    features: ["Fiber Installation", "Network Design", "Wireless Setup", "Cable Management"],
    details: [
      "High-speed fiber optic cable installation",
      "Enterprise network design and implementation",
      "Wireless network optimization",
      "Structured cabling systems",
      "Telecommunications tower installation",
    ],
  },
]

export function FeaturedProducts() {
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
                  <h2 className="text-5xl lg:text-7xl font-light text-[#203c5c] mb-6 tracking-tight">Services</h2>
                  <div className="w-16 h-px bg-[#1b96a2] mb-8"></div>
                  <p className="text-lg font-light text-neutral-600 leading-relaxed max-w-2xl">
                    Comprehensive security and technology solutions designed to protect and connect your business.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-12 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="col-span-12 md:col-span-6 lg:col-span-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <Reveal delay={index * 0.1}>
                  <ServiceCard service={service} onServiceDetails={handleServiceDetails} />
                </Reveal>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {selectedService && (
        <ServiceModal service={selectedService} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </section>
  )
}
