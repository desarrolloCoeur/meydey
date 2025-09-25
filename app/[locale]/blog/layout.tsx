import type React from "react"
import type { Metadata } from "next"
import { getTranslations } from "@/lib/translations"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale)

  return {
    title: `${t.blogTitle} | MEYDEY`,
    description: t.blogDescription,
    openGraph: {
      title: `${t.blogTitle} | MEYDEY`,
      description: t.blogDescription,
      type: "website",
    },
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
