"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Service = {
  id: string
  name: string
  description: string
  image: string
  badge: "Popular" | "Advanced" | "Essential"
  features?: string[]
  details?: string[]
}

interface ServiceModalProps {
  service: Service | null
  isOpen: boolean
  onClose: () => void
}

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null

  const badgeVariants: Record<Service["badge"], string> = {
    Popular: "bg-green-100 text-green-800",
    Advanced: "bg-blue-100 text-blue-800",
    Essential: "bg-amber-100 text-amber-800",
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20" />

              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="absolute top-4 left-4">
                <Badge className={badgeVariants[service.badge]}>{service.badge}</Badge>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">{service.name}</h2>

              <p className="text-neutral-600 mb-6">{service.description}</p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-900">Service Details</h3>
                <ul className="space-y-2">
                  {service.details?.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Button className="w-full bg-neutral-900 hover:bg-neutral-800">Request Quote</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
