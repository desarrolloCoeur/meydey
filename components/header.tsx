"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "CLIENTS", href: "#clients" },
    { name: "CONTACT", href: "#contact" },
  ];

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId.replace("#", ""));
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const targetPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    smoothScrollTo(href);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky top container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[#0079be] via-[#0067a2] to-[#203c5c] transition-opacity duration-500 ease-in-out ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-0 shadow-lg transition-opacity duration-500 ease-in-out ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="block w-[130px] md:w-[160px] h-[40px] md:h-[50px] relative transition-transform duration-300"
            >
              <Image
                src="/meydey-logo.png"
                alt="header logo"
                fill
                className="invert grayscale-100 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-light tracking-wider transition-all duration-300 relative group text-white hover:text-[#acf5fc] uppercase cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#acf5fc] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full transition-all duration-300 hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                } text-white`}
              />
              <X
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                } text-white`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto z-40"
            : "opacity-0 pointer-events-none z-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-md shadow-2xl transform transition-all duration-500 ease-in-out md:hidden z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-6 px-8">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex flex-col space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-lg font-light tracking-wider text-gray-800 hover:text-[#0067a2] transition-all duration-300 uppercase transform relative group cursor-pointer ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 1 + 50}ms` : "0ms",
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0067a2] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div
            className={`mt-12 pt-8 border-t border-gray-200 transform transition-all duration-300 ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? "700ms" : "0ms" }}
          >
            <p className="text-xs font-light tracking-widest text-gray-500 mb-2 uppercase">
              MEYDEY
            </p>
            <p className="text-sm font-light tracking-tight text-gray-700">
              Innovation in Security Solutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
