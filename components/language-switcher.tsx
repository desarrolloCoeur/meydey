"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  currentLocale: string
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = () => {
    const newLocale = currentLocale === "en" ? "es" : "en"
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <Button variant="ghost" size="sm" onClick={switchLanguage} className="flex items-center gap-2 text-sm font-medium">
      <Globe className="h-4 w-4" />
      {currentLocale === "en" ? "Español" : "English"}
    </Button>
  )
}
