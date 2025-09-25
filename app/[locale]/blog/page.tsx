import { getTranslations } from "@/lib/translations"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/header"
import Image from "next/image"
import { Footer } from "@/components/footer"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
}

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

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = getTranslations(locale)

  const blogPosts: BlogPost[] = [
    {
      slug: "controles-acceso-fraccionamientos",
      title: t.blog1Title,
      excerpt: t.blog1Excerpt,
      date: "2024-01-15",
      image: "/assets/blog/blog-1/Chapa electrica.jpg",
    },
    {
      slug: "cctv-monitoreo-inteligente-negocios",
      title: t.blog2Title,
      excerpt: t.blog2Excerpt,
      date: "2024-01-10",
      image: "/assets/blog/blog-2/Barreras automatizadas.jpg",
    },
    {
      slug: "redes-seguras-empresas",
      title: t.blog3Title,
      excerpt: t.blog3Excerpt,
      date: "2024-01-05",
      image: "/assets/blog/blog-3/anthena.jpg",
    },
  ]

  return (
    <>
      <Header locale={locale} />

      <main className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section
          className="relative h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: "url('/assets/16.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-light mb-6">{t.blogTitle}</h1>
            <p className="text-xl font-light max-w-2xl mx-auto text-sky-200">{t.blogDescription}</p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/${locale}/blog/${post.slug}`}>
                    <div className="space-y-6 ">
                      {/* Image */}
                      <div className="aspect-[3/2] overflow-hidden relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <time className="text-sm text-gray-500 font-light">
                          {new Date(post.date).toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>

                        <h2 className="text-2xl font-light text-gray-900 group-hover:text-sky-600 transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 font-light leading-relaxed">{post.excerpt}</p>

                        <div className="pt-2">
                          <span className="text-sky-600 font-light group-hover:underline">{t.readMore} →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Footer locale={locale} />
      </main>
    </>
  )
}
