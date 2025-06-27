"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";

export default function Network() {
  const partners = [
    {
      name: "KANOO SHIPPING",
      logo: "/img/Kanoo-Logo.png",
      description: "Through these, it provides a complete range of port agency services including Offshore support craft Crew movements Sea, Air and Marine logistics. Kanoo also partners with vessel supply and marine engineering companies to ensure the smooth operation of all types of vessel regardless of size through their full servicing facilities dapibus leo."
    },
    {
      name: "S5 AGENCY WORLD",
      logo: "/img/S5.png",
      description: "We are proud to be the local partner for the S5 Agency World network. Whilst S5 is the fastest growing international port agency network in the world, growth in this highly competitive market can only come from one thing. A powerful reputation gained through an ability to tailor-make its process to suit the changing needs of the client. Knowing that different sectors have different needs allows S5 to offer innovative solutions, irrespective of carrier type including Tankers, Dry & Break Bulk, Cruise, Naval and specialised vessels. Its world-wide port offices, integrated operational and financial hub and totally transparent systems gives S5 a distinct advantage over its competitors. Whilst S5 fully complies with international regulations and local laws, it does so in a way that allows it to combine social, environmental and economic values to achieve the highest possible ethical standards. Their one goal is to produce a positive, sustainable impact on their clients, their partners and the wider community."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      <main className="pt-32">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#003366] dark:text-white text-center mb-16"
          >
            Our Global Network
          </motion.h1>

          <div className="space-y-24 mb-24">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-32 md:h-48">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#003366] dark:text-white mb-6">
                      {partner.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

    <VideoSection />
    
      <Footer />
    </div>
  );
}
