"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users, Zap, Building2 } from "lucide-react"
import { Reveal } from "./reveal"
import Image from "next/image"
import { getTranslations } from "@/lib/translations"

interface AboutSectionProps {
  locale: string
}

export function AboutSection({ locale }: AboutSectionProps) {
  const t = getTranslations(locale)

  const values = [
    {
      icon: Award,
      title: t.excellence,
      description: t.excellenceDesc,
    },
    {
      icon: Shield,
      title: t.integrity,
      description: t.integrityDesc,
    },
    {
      icon: Users,
      title: t.commitment,
      description: t.commitmentDesc,
    },
    {
      icon: Zap,
      title: t.innovation,
      description: t.innovationDesc,
    },
  ]

  const locations = [
    {
      icon: Building2,
      title: t.headquarters,
      location: "Valentín Gómez Farías 201-C, Mezcales Bahía de Banderas, Nayarit 63735",
      description: t.mainOperationsCenter,
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <Reveal>
          <div>
            <div className="mb-24">
              <div className="grid lg:grid-cols-12 gap-16 items-end">
                <div className="lg:col-span-8">
                  <h2 className="text-6xl lg:text-7xl font-light text-[#203c5c] tracking-tight leading-none mb-6">
                    {t.aboutTitle}
                  </h2>
                </div>
                <div className="lg:col-span-4">
                  <div className="w-full h-px bg-[#1b96a2]"></div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-20 mb-32">
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <h3 className="text-2xl font-medium text-[#203c5c] mb-8 tracking-tight">{t.aboutSubtitle}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">{t.aboutDescription1}</p>
                  <p className="text-base text-gray-600 leading-relaxed">{t.aboutDescription2}</p>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-[#203c5c] tracking-tight">{t.locations}</h4>
                  {locations.map((location, index) => (
                    <motion.div
                      key={location.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-l-2 border-[#1b96a2] pl-6 py-2"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <location.icon size={16} className="text-[#0067a2]" />
                        <h5 className="font-medium text-[#203c5c]">{location.title}</h5>
                      </div>
                      <p className="text-[#0067a2] font-medium text-sm mb-1">{location.location}</p>
                      <p className="text-gray-600 text-sm">{location.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative">
                  <div className="bg-white p-2">
                    <Image
                      src="/assets/meydey.jpg"
                      alt="MEYDEY Security Operations Center"
                      width={900}
                      height={500}
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="grid lg:grid-cols-12 gap-16 items-end mb-16">
                <div className="lg:col-span-6">
                  <h3 className="text-4xl lg:text-5xl font-light text-[#203c5c] tracking-tight leading-tight">
                    {t.ourValues}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <div className="w-full h-px bg-[#1b96a2]"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="w-12 h-12 bg-[#0067a2] flex items-center justify-center">
                      <value.icon size={20} className="text-white" />
                    </div>

                    <div>
                      <h4 className="text-xl font-medium text-[#203c5c] mb-4 tracking-tight">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
