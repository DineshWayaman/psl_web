"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceModal from "@/components/ServiceModal";

export default function Services() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    sectors?: string[];
  } | null>(null);

 const services = [
    {
      title: "PORT AGENT",
      image: "/services/PORT-AGENTS.jpg",
      description: "At Prudential Shipping, we offer comprehensive Port Agent services tailored to meet the diverse needs of vessel owners across various sectors. Whether you require cargo-related agency services or owner's protection and husbandry services, we ensure seamless operations from arrival to departure. Our robust client communications network, operating 24/7, ensures prompt response and enables you to capitalize on emerging opportunities, saving both time and costs. With longstanding relationships with regulatory bodies, port authorities, and customs officials, we facilitate efficient clearances and compliance. Our strength lies in the breadth and depth of our service portfolio, empowering us to transform your vessel servicing experience and consistently surpass your expectations.",
      sectors: [
        "Container",
        "Break Bulk",
        "RO-RO",
        "Tanker",
        "Passenger/Yacht",
        "Naval Vessels"
      ]
    },
    {
      title: "STS OPERATIONS",
      image: "/services/STS-OPERATIONS.jpg",
      description: "At Prudential Shipping, we excel in ship-to-ship (STS) transfer operations in Sri Lankan waters, backed by extensive expertise and a proven track record in global STS operations. Our strong reputation with local authorities ensures smooth and timely coordination, facilitating cost-saving solutions for our clients. Available 24/7, we prioritize operational efficiency and safety, supported by our comprehensive understanding of the marine environment and strategic STS locations. Equipped with state-of-the-art STS gear including fenders, fiber ropes, flexible hoses, and other essential accessories, we guarantee secure and efficient cargo and fuel transfers at sea.",
    },
    {
      title: "OFFSHORE LOGISTICS",
      image: "/services/OFFSHORE.jpg",
      description: "Energy. The power to keep the world moving and where downtime can be devastating. Sri Lanka will soon become an oil producing nation with the upcoming development in the Oil & Gas Industry. Prudential Shipping is geared to deliver a totally integrated and cost-effective service to both gas & oil exploration and production facilities to minimize downtime.",
      services: [
        "Global sea & air freight",
        "Import & export compliance",
        "Customs clearance",
        "Secure warehousing & transport",
        "Crew, technicians and Executive transfers",
        "Visa facilitation",
        "Accommodation",
        "Transport via land, sea & air",
        "Provisions and stores supply",
        "Onboard waste removal",
        "Bunkering, Rigs and offshore craft maintenance"
      ]
    },
    {
      title: "SHIP CHARTERING & BROKERING",
      image: "/services/SHIP-CHARTERING-BROKERING.jpg",
      description: "Prudential Shipping specializes in ship chartering and brokering, offering resourceful and professional services that are both timely and cost-effective. Our business philosophy is centered on establishing mutually beneficial relationships that drive prosperity and growth. At Prudential Shipping, we believe in forming partnerships built on trust, reliability, and professionalism. Our mission is to provide superior, efficient, and timely services, ensuring a smooth and seamless experience for our clients.",
    },
    {
      title: "NVOCC AGENTS",
      image: "/services/NVOCC-AGENTS.jpg",
      description: "Prudential Shipping is a resourceful company committed to delivering professional shipping services that are timely and cost-effective. We emerge through a business philosophy keen on establishing mutually beneficial business relationships for prosperity and growth in tandem. We also specialize as NVOCC (Non-Vessel Operating Common Carrier) Agents. Our excellence in this sector has been recognized with a Gold Award in the national NLA Awards for the Ocean Carriers NVOCC Sector.",
      achievement: "Gold Award in National NLA Awards - Ocean Carriers NVOCC Sector"
    },
    {
      title: "MARITIME SECURITY",
      image: "/services/MARITIME.jpg",
      description: "Maritime security is a growing issue in this region and it's important that preventative measures are implemented to safeguard the vessel, crew, and goods in transit. We offer efficient services for security teams whether they are armed or unarmed.",
      services: [
        "Embarkation and disembarkation",
        "Airport/seaport entry visa arrangements for all nationalities",
        "Customs clearance and transfer of professional equipment",
        "Transport and hotel accommodation",
        "Transfer/storage of weapons (subject to approval)"
      ],
      availability: "24/7, 365 days a year"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      <main className="pt-32">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold text-[#003366] dark:text-white mb-6">
                Our Services
              </h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                Discover our comprehensive range of maritime services designed to meet all your shipping needs with excellence and reliability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedService(service)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#003366] dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {service.description}
                  </p>
                  <button className="mt-4 text-[#0066cc] dark:text-[#66a3ff] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService || { title: "", description: "" }}
      />
      <Footer />
    </div>
  );
}
