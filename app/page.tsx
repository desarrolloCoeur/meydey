"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/en")
  }, [router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Main rotating square */}
          <div className="w-16 h-16 border-2 border-foreground/20 mx-auto relative">
            <div className="absolute inset-0 border-t-2 border-foreground animate-spin"></div>
          </div>

          {/* Secondary geometric elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border border-foreground/30 animate-pulse"></div>
          <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-foreground/20 animate-pulse delay-300"></div>
        </div>

        {/* MEYDEY branding */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-wider text-foreground">MEYDEY</h1>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-foreground/60 animate-pulse"></div>
            <div className="w-2 h-2 bg-foreground/60 animate-pulse delay-150"></div>
            <div className="w-2 h-2 bg-foreground/60 animate-pulse delay-300"></div>
          </div>
          <p className="text-sm text-muted-foreground font-light tracking-wide">Cargando experiencia de seguridad</p>
        </div>
      </div>
    </div>
  )
}
