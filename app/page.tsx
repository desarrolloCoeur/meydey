"use client";
import Header from "../components/header"
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { ClientsSection } from "@/components/clients-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="services">
          <FeaturedProducts />
        </div>
        <div id="clients">
          <ClientsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
