"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  service: {
    id: string
    name: string
    description: string
    image: string
    badge: "Popular" | "Advanced" | "Essential"
    features: string[]
  }
  onServiceDetails: (service: unknown) => void
}

export function ServiceCard({ service, onServiceDetails }: ServiceCardProps) {
  const badgeVariants = {
    Popular: "bg-green-100 text-green-800 hover:bg-green-200",
    Advanced: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    Essential: "bg-amber-100 text-amber-800 hover:bg-amber-200",
  }

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <motion.div
            className="aspect-[4/3] relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </motion.div>

          <div className="absolute top-4 left-4">
            <Badge className={badgeVariants[service.badge]}>{service.badge}</Badge>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
            {service.name}
          </h3>

          <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{service.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {service.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                {feature}
              </span>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onServiceDetails(service)}
            className="w-full group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
