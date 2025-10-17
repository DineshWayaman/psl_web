"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Counter from "@/components/Counter";
import VideoSection from "@/components/VideoSection";
import ServiceModal from "@/components/ServiceModal";

export default function Home() {
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

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#003366] dark:text-white"
              >
                Excellence in Maritime <br />
                <span className="text-[#0066cc] dark:text-[#66a3ff]">Shipping Services</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
              >
                Prudential Shipping Line delivers professional and comprehensive
                shipping solutions across the globe. Experience excellence in
                maritime services.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4 flex-wrap"
              >
                <a
                  href="/contact"
                  className="bg-[#003366] text-white px-8 py-4 rounded-lg hover:bg-[#004488] dark:bg-[#0066cc] dark:hover:bg-[#0052a3] transition-colors font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="/services"
                  className="border-2 border-[#003366] text-[#003366] dark:border-[#66a3ff] dark:text-[#66a3ff] px-8 py-4 rounded-lg hover:bg-[#003366] hover:text-white dark:hover:bg-[#66a3ff] dark:hover:text-gray-900 transition-colors font-semibold"
                >
                  Our Services
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative h-[500px]"
            >
              <Image
                src="/img/main.png"
                alt="Container Ship"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white/50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold mb-3 text-[#003366] dark:text-[#66a3ff]"
                >
                  Navigating you into <br />
                  Smoother Waters Since 1998
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <p className="text-gray-600 dark:text-gray-300">
                    Prudential Shipping is a resourceful company committed to delivering professional shipping services that are timely and cost-effective. We emerge through a business philosophy keen on establishing mutually beneficial business relationships for prosperity and growth in tandem.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    At Prudential Shipping it is not just a business transaction we enter into with our clients but a partnership built on Trust, Reliability and Professionalism. Our reason for being has been the ability to provide superior, cost-effective, efficient and timely services; an experience one may liken to sailing into smoother waters.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center bg-white dark:bg-gray-900 p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="text-7xl md:text-8xl font-bold text-[#003366] dark:text-white mb-4">
                  <Counter />
                </div>
                <div className="text-lg md:text-xl text-[#003366] dark:text-gray-200 font-semibold tracking-wide">
                  YEARS OF EXCELLENCE
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">
                  ESTABLISHED IN 1998
                </div>
                <div className="mt-8">
                  <Image
                    src="/img/iso_logo.png"
                    alt="ISO TC Logo"
                    width={200}
                    height={100}
                    className="mx-auto"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-[#f8fafc] dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#003366] dark:text-white mb-4">
                Our Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive shipping solutions tailored to your needs
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
                  className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] block hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <div className="flex items-center text-white/90">
                      <span>Learn more</span>
                      <svg
                        className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-2"
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <VideoSection />
        <Footer />
      </main>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService || { title: "", description: "" }}
      />
    </div>
  );
}
