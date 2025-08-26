"use client";
import Image from "next/image";
import type React from "react";

import { useState } from "react";
import { Reveal } from "./reveal";

const clients = [
  {
    id: "colima-government",
    name: "Government of Colima",
    logo: "/government-of-colima-logo.png",
    backgroundImage: "/modern-office-building.png",
  },
  {
    id: "tigres",
    name: "Tigres",
    logo: "/tigres-logo.png",
    backgroundImage: "/placeholder-cjfln.png",
  },
  {
    id: "grand-sirenis",
    name: "Grand Sirenis Hotels & Resorts",
    logo: "/grand-sirenis-hotels-logo.png",
    backgroundImage: "/placeholder-yoa2s.png",
  },
  {
    id: "villa-valencia",
    name: "Villa La Valencia Beach Resort & Spa",
    logo: "/villa-la-valencia-logo.png",
    backgroundImage: "/beach-resort-sunset-ocean.png",
  },
  {
    id: "dreams-resorts",
    name: "Dreams Resorts & Spas",
    logo: "/dreams-resorts-logo.png",
    backgroundImage: "/spa-wellness-relaxation.png",
  },
  {
    id: "villa-group",
    name: "The Villa Group Beach Resorts & Spas",
    logo: "/villa-group-resorts-logo.png",
    backgroundImage: "/beachfront-villa-palms.png",
  },
  {
    id: "hotel-mousai",
    name: "Hotel Mousai",
    logo: "/hotel-mousai-luxury-logo.png",
    backgroundImage: "/luxury-hotel-lobby-modern.png",
  },
  {
    id: "hyatt-ziva",
    name: "Hyatt Ziva",
    logo: "/hyatt-ziva-logo.png",
    backgroundImage: "/hotel-infinity-pool-ocean-view.png",
  },
  {
    id: "paradise-village",
    name: "Paradise Village Beach Resort & Spa",
    logo: "/paradise-village-resort-logo.png",
    backgroundImage: "/tropical-paradise-resort.png",
  },
  {
    id: "altozano",
    name: "Altozano",
    logo: "/altozano-logo.png",
    backgroundImage: "/modern-residential-development.png",
  },
  {
    id: "seguros-el-potosi",
    name: "Seguros El Potosí",
    logo: "/seguros-el-potosi-logo.png",
    backgroundImage: "/insurance-office-professional.png",
  },
  {
    id: "diario-colima",
    name: "Diario de Colima",
    logo: "/diario-de-colima-logo.png",
    backgroundImage: "/placeholder-jylpq.png",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    logo: "/coca-cola-logo.png",
    backgroundImage: "/beverage-factory-production-line.png",
  },
  {
    id: "riviera-nayarit",
    name: "Riviera Nayarit",
    logo: "/riviera-nayarit-tourism-logo.png",
    backgroundImage: "/mexican-riviera-coastline-tourism.png",
  },
];

export function ClientsSection() {
  const [hoveredClient, setHoveredClient] = useState<
    (typeof clients)[0] | null
  >(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden w-full">
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[600px]">
          {/* top side on mobile */}
          <div className=" items-stretch block lg:hidden">
            <Reveal>
              <div className="bg-[#203c5c] p-8 lg:p-12 w-full h-full flex items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#1b96a2]/20"></div>
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#0067a2]/30"></div>

                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight leading-none mb-6">
                    Our Clients
                  </h2>
                  <div className="h-px bg-[#1b96a2] mb-6"></div>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                    Trusted partnerships across Mexico in hospitality,
                    government, and enterprise sectors. Our comprehensive
                    security and technology solutions have earned the confidence
                    of leading organizations nationwide.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          {/* Left side - Client Grid */}
          <div className="flex items-center w-full">
            <Reveal>
              <div className="grid grid-cols-6 gap-px bg-neutral-200 w-[100vw] lg:w-[50vw]">
                {clients.map((client, index) => {
                  const sizeClasses = [
                    "col-span-2 row-span-2", // Large square
                    "col-span-2 row-span-1", // Wide rectangle
                    "col-span-2 row-span-1", // Wide rectangle
                    "col-span-1 row-span-1", // Small square
                    "col-span-1 row-span-1", // Small square
                    "col-span-2 row-span-1", // Wide rectangle
                    "col-span-3 row-span-1", // Wide rectangle
                    "col-span-3 row-span-2", // Large rectangle
                    "col-span-3 row-span-1", // Medium rectangle
                    "col-span-2 row-span-1", // Wide rectangle
                    "col-span-2 row-span-1", // Wide rectangle
                    "col-span-2 row-span-1", // Wide rectangle
                    "col-span-3 row-span-1", // Medium rectangle
                    "col-span-3 row-span-1", // Medium rectangle
                  ];

                  const sizeClass = sizeClasses[index % sizeClasses.length];

                  return (
                    <div
                      key={client.id}
                      className={`${sizeClass} bg-white flex items-center justify-center p-4 lg:p-6 relative overflow-hidden group cursor-pointer min-h-[100px] hover:bg-[#1b96a2]/5 transition-all duration-300`}
                      onMouseEnter={() => setHoveredClient(client)}
                      onMouseLeave={() => setHoveredClient(null)}
                      onMouseMove={handleMouseMove}
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={client.backgroundImage || "/placeholder.svg"}
                          alt=""
                          fill
                          className="object-cover opacity-10"
                        />
                      </div>

                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        width={80}
                        height={48}
                        className="max-w-full max-h-full object-contain relative z-10 transition-opacity duration-200 group-hover:opacity-80"
                      />
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Right side - Text with colored background */}
          <div className="hidden lg:flex items-stretch">
            <Reveal>
              <div className="bg-[#203c5c] p-8 lg:p-12 w-full h-full flex items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#1b96a2]/20"></div>
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#0067a2]/30"></div>

                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight leading-none mb-6">
                    Our Clients
                  </h2>
                  <div className="h-px bg-[#1b96a2] mb-6"></div>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                    Trusted partnerships across Mexico in hospitality,
                    government, and enterprise sectors. Our comprehensive
                    security and technology solutions have earned the confidence
                    of leading organizations nationwide.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {hoveredClient && (
          <div
            className="fixed pointer-events-none z-50 transition-opacity duration-200"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 40,
            }}
          >
            <div className="bg-white shadow-lg p-4 border-2 border-[#1b96a2]/20">
              <Image
                src={hoveredClient.logo || "/placeholder.svg"}
                alt={hoveredClient.name}
                width={150}
                height={90}
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
