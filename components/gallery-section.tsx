"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/translations"
import Image from "next/image"

interface GalleryItem {
  id: string
  image: string
}

interface GallerySectionProps {
  locale: Locale
}

export function GallerySection({ locale }: GallerySectionProps) {
  const t = getTranslations(locale)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      image: "/assets/Pass.jpg",
    },
    {
      id: "2",
      image: "/assets/security-cam.jpg",
    },
    {
      id: "3",
      image: "/assets/Servers.jpg",
    },
    {
      id: "4",
      image: "/assets/Tops.jpg",
    },
    {
      id: "5",
      image: "/assets/Elect.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-black leading-tight mb-6">{t.galleryLabel}</h2>
              <div className="w-16 h-px bg-black mb-8"></div>
            </div>
            <div className="lg:pt-4">
              <h3 className="text-xl font-normal text-black mb-4">{t.galleryTitle}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{t.galleryDescription}</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[16/9] bg-gray-100 max-w-4xl mx-auto">
            <Image
              src={galleryItems[currentIndex].image || "/placeholder.svg"}
              alt={`Gallery image ${currentIndex + 1}`}
              fill
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 flex items-center justify-center text-black hover:bg-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 flex items-center justify-center text-black hover:bg-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-8 h-px transition-colors ${
                  index === currentIndex ? "bg-black" : "bg-gray-300 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
