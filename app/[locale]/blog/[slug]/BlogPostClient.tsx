"use client"
import { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import { getTranslations } from "@/lib/translations"
import { blogPosts } from "./data"
import Image from "next/image"

export default function BlogPostClient({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const resolvedParams = use(params)
  const { locale, slug } = resolvedParams
  const t = getTranslations(locale)
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  const title = t[post.title as keyof typeof t] as string
  const content = t[post.content as keyof typeof t] as string

  return (
    <>
      <Header locale={locale} />

      <main className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section
          className="relative h-[300px] flex items-center justify-center"
          style={{
            backgroundImage: `url('${post.images[0]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl">{title}</h1>
          </div>
        </section>

        {/* Content Header */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center text-sky-600 hover:underline mb-8 font-light"
            >
              ← {t.backToBlog}
            </Link>

            <time className="text-sm text-gray-500 font-light">
              {t.publishedOn}{" "}
              {new Date(post.date).toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 font-light leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            {/* Additional Images */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {post.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${title} - Image ${index + 2}`}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
