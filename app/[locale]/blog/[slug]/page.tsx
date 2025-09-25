import { getTranslations } from "@/lib/translations"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

interface BlogPost {
  slug: string
  title: string
  content: string
  date: string
  images: string[]
}

const blogPosts: Record<string, BlogPost> = {
  "controles-acceso-fraccionamientos": {
    slug: "controles-acceso-fraccionamientos",
    title: "blog1Title",
    content: "blog1Content",
    date: "2024-01-15",
    images: [
      "/assets/blog/blog-1/Chapa electrica.jpg",
      "/assets/blog/blog-1/Compress.jpg",
      "/assets/blog/blog-1/sauce y cedro.jpeg",
    ],
  },
  "cctv-monitoreo-inteligente-negocios": {
    slug: "cctv-monitoreo-inteligente-negocios",
    title: "blog2Title",
    content: "blog2Content",
    date: "2024-01-10",
    images: [
      "/assets/blog/blog-2/Barreras automatizadas.jpg",
      "/assets/blog/blog-2/green.png",
      "/assets/blog/blog-2/sling.jpg",
    ],
  },
  "redes-seguras-empresas": {
    slug: "redes-seguras-empresas",
    title: "blog3Title",
    content: "blog3Content",
    date: "2024-01-05",
    images: [
      "/assets/blog/blog-3/anthena.jpg",
      "/assets/blog/blog-3/fix.jpg",
      "/assets/blog/blog-3/look.jpg",
    ],
  },
}

const locales = ["en", "es"]

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(blogPosts).map((slug) => ({
      locale,
      slug,
    }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  const t = getTranslations(params.locale)
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: "Blog Post Not Found | MEYDEY",
    }
  }

  const title = t[post.title as keyof typeof t] as string

  return {
    title: `${title} | MEYDEY Blog`,
    description: title,
    openGraph: {
      title: `${title} | MEYDEY Blog`,
      description: title,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const t = getTranslations(params.locale)
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  const title = t[post.title as keyof typeof t] as string
  const content = t[post.content as keyof typeof t] as string

  return (
    <>
      <Header locale={params.locale} />

      <main className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section
          className="relative h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: `url('${post.images[0]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-left text-white px-4">
            <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl">
              {title}
            </h1>
          </div>
        </section>

        {/* Content Header */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${params.locale}/blog`}
              className="inline-flex items-center text-sky-600 hover:underline mb-8 font-light"
            >
              ← {t.backToBlog}
            </Link>
            <br />
            <time className="text-sm text-gray-500 font-light">
              {t.publishedOn}{" "}
              {new Date(post.date).toLocaleDateString(
                params.locale === "es" ? "es-ES" : "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
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
                <div
                  key={index}
                  className="aspect-[4/3] overflow-hidden relative"
                >
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
        <Footer locale={params.locale} />
      </main>
    </>
  )
}
