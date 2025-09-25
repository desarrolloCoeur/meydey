interface BlogPost {
  slug: string
  title: string
  content: string
  date: string
  images: string[]
}

export const blogPosts: Record<string, BlogPost> = {
  "controles-acceso-fraccionamientos": {
    slug: "controles-acceso-fraccionamientos",
    title: "blog1Title",
    content: "blog1Content",
    date: "2024-01-15",
    images: [
      "/residential-community-entrance-with-access-control.jpg",
      "/biometric-access-control-system-installation.jpg",
      "/cctv-cameras-monitoring-residential-area.jpg",
    ],
  },
  "cctv-monitoreo-inteligente-negocios": {
    slug: "cctv-monitoreo-inteligente-negocios",
    title: "blog2Title",
    content: "blog2Content",
    date: "2024-01-10",
    images: [
      "/business-security-camera-installation.jpg",
      "/video-surveillance-monitoring-center.jpg",
      "/intelligent-cctv-system-with-analytics.jpg",
    ],
  },
  "redes-seguras-empresas": {
    slug: "redes-seguras-empresas",
    title: "blog3Title",
    content: "blog3Content",
    date: "2024-01-05",
    images: [
      "/secure-network-infrastructure-data-center.jpg",
      "/fiber-optic-cable-installation.jpg",
      "/enterprise-network-security-equipment.jpg",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
