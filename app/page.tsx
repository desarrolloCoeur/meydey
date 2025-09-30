"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

function getBrowserLanguage(): string {
  if (typeof window === "undefined") return "en"

  // Get browser language
  const browserLang = navigator.language || navigator.languages?.[0] || "en"
  const langCode = browserLang.split("-")[0].toLowerCase()

  if (langCode === "es") return "es"
  return "en"
}

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const detectedLocale = getBrowserLanguage()
    router.replace(`/${detectedLocale}`)
  }, [router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="text-center relative z-10">
        <div className="mb-12">
          <div className="relative w-[250px] h-[120px] mx-auto mb-8 scale-125">
            <Image src="/meydey-logo.png" alt="MEYDEY" fill className="object-contain" priority />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sky-700 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-sky-700 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 rounded-full bg-sky-700 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
          <p className="text-sm text-muted-foreground font-light tracking-[0.2em] uppercase">
            Cargando experiencia de seguridad
          </p>
        </div>
      </div>
    </div>
  )
}
