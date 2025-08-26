"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Shield, Camera, Wifi } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        {text}
      </motion.span>
    )
  }

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Image
          src="/assets/15.JPG"
          alt="MEYDEY - Professional security and technology solutions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="w-full px-6 lg:px-12 xl:px-16 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] tracking-tight mb-8">
              <AnimatedText text="Innovation in" delay={0.3} />
              <br />
              <span className="font-extralight italic">
                <AnimatedText text="Security Solutions" delay={0.6} />
              </span>
            </h1>

            <motion.div
              className="w-24 h-px bg-white/60 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />

            <motion.p
              className="text-lg md:text-xl font-light text-white/90 mb-16 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Mexican company with 8 years of experience in security and technology solutions nationwide.
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="mx-4 sm:mx-6 lg:mx-12 xl:mx-16 mb-6 sm:mb-8 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-[#203c5c]/20 backdrop-blur-md border border-[#1b96a2]/20 rounded-lg shadow-lg">
          <div className="flex flex-row sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 text-white">
            <div className="flex items-center gap-2 sm:gap-3">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#86dce4]" />
              <span className="text-[10px] sm:text-xs font-light tracking-wide uppercase">Security Systems</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-[#86dce4]" />
              <span className="text-[10px] sm:text-xs font-light tracking-wide uppercase">CCTV & Monitoring</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-[#86dce4]" />
              <span className="text-[10px] sm:text-xs font-light tracking-wide uppercase">Networks</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
