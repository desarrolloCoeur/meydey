"use client"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: "CCTV Systems", href: "#" },
      { name: "Access Control", href: "#" },
      { name: "Perimeter Security", href: "#" },
      { name: "Fiber Optic Installation", href: "#" },
      { name: "Network Solutions", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Our Values", href: "#" },
      { name: "Projects", href: "#" },
      { name: "Careers", href: "#" },
      { name: "News", href: "#" },
    ],
    Support: [
      { name: "Contact", href: "#" },
      { name: "Technical Support", href: "#" },
      { name: "Maintenance", href: "#" },
      { name: "Consultation", href: "#" },
      { name: "Documentation", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ]

  return (
    <footer className="bg-[#203c5c] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1b96a2]/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0067a2]/5 rounded-full translate-y-32 -translate-x-32"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-32 bg-[#1b96a2]/10 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-2 bg-[#0067a2]/10"></div>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <Image
                  src="/meydey-logo.png"
                  alt="MEYDEY"
                  width={140}
                  height={48}
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>

              <div className="space-y-8">
                <p className="text-white/80 text-base leading-relaxed font-light max-w-md">
                  Mexican company with 8 years of experience, dedicated to solving security and technology needs. We
                  develop comprehensive solutions with quality and innovation.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin size={18} className="mr-3 text-[#1b96a2] mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm text-white/70 font-light">Headquarters: Colima, Colima</p>
                      <p className="text-sm text-white/70 font-light">Branch: Bahía de Banderas, Nayarit</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="mr-3 text-[#1b96a2] flex-shrink-0" />
                    <p className="text-sm text-white/70 font-light">Nationwide Service Coverage</p>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-[#1b96a2] hover:bg-[#1b96a2]/10 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={18} />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xs uppercase tracking-wider text-white font-medium mb-6 pb-2 border-b border-[#1b96a2]/30">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm text-white/70 hover:text-[#1b96a2] transition-colors duration-200 font-light"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <p className="text-xs text-white/50 font-light">&copy; {currentYear} MEYDEY. All rights reserved.</p>
            <div className="flex space-x-8">
              <a href="#" className="text-xs text-white/50 hover:text-[#1b96a2] transition-colors font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-white/50 hover:text-[#1b96a2] transition-colors font-light">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-white/50 hover:text-[#1b96a2] transition-colors font-light">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
