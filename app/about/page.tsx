"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        {/* <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          <Image
            src="/img/about-hero.jpg"
            alt="Shipping Port"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                About Us
              </motion.h1>
            </div>
          </div>
        </section> */}

        {/* Who We Are Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#003366] dark:text-white mb-6">
                  Who we are
                </h2>
                <div className="prose prose-lg dark:prose-invert">
                  <p className="text-gray-600 dark:text-gray-300">
                    Engaged in global industry and commerce, Prudential Shipping understands the imperative need of seamless transactions and so provides a variety of services from Vessel Agency to all Husbandry services.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    The company's dynamism is revealed in its capability to serve ships calling Colombo and other ports of Sri Lanka, as well as the Maldives, providing agency services to the Shipping industry.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Located in the heart of the busy Central Business District of Colombo, Prudential Shipping, is housed in a state-of-the-art office complex, complete with all facilities needed, to meet the challenges of Shipping, Logistics and Commerce.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-[#003366] dark:text-white mb-4">
                    Global Network Affiliations
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#0066cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kanoo Shipping Agencies Network
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#0066cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      S5 Agency World Ltd Network
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#0066cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Regional Agency Network (Middle East)
                    </li>
                  </ul>
                </div>

                <div className="bg-[#003366] dark:bg-gray-800 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-semibold mb-4">
                    Our Strength
                  </h3>
                  <p className="text-gray-200">
                    The sound equity and financial prowess only serves to further reflect the steadfastness of the company.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-24 bg-[#003366] dark:bg-gray-900/90 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
              >
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To be the leading provider in the services industry by being resolute in creating extraordinary & exceptional value
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
              >
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To be the most sought after service provider & build a brand based on strong ethics & values
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#003366] dark:text-white mb-4">OUR VALUES</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Empowerment",
                  icon: "⚡",
                },
                {
                  title: "Expansion",
                  icon: "🌱",
                },
                {
                  title: "Ethics",
                  icon: "⚖️",
                },
                {
                  title: "Efficiency",
                  icon: "⚙️",
                },
                {
                  title: "Expertise",
                  icon: "🎯",
                },
                {
                  title: "Engagement",
                  icon: "🤝",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center group hover:bg-[#003366] hover:dark:bg-gray-700 transition-colors duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#003366] dark:text-white group-hover:text-white">
                    {value.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Policy Section */}
        <section className="py-24 bg-gradient-to-br from-[#003366] to-[#004488] dark:from-gray-900 dark:to-gray-800 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-8">Quality Policy</h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                As one of Sri Lanka's leading shipping agency and logistic solution facilitator, we dedicate ourselves to deliver the expectations of all our stakeholders at all times. We will make commitments we fully understand and believe we can meet.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                We will strive continuously to improve quality, employing skilled people and encouraging them to challenge themselves.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                We will spare no effort to provide incomparable value in our quest.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pledge & Philosophy Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold text-[#003366] dark:text-white mb-6">Pledge</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  We as team Prudential must continue to surprise, must continue to renew ourselves, must continue to beat all odds and expectations. We must not be satisfied until we really do form that perfect union, the ideal. And while the perfect union or ideal may never be in sight, we just keep working at it and trying. We can then be satisfied that we have tried.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold text-[#003366] dark:text-white mb-6">Our Philosophy</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Be RESOLUTE In your approach<br/>
                  <span className="text-[#0066cc] dark:text-[#66a3ff] font-semibold">Admirably Purposeful, Determined and Unwavering</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="py-24 bg-[#f8fafc] dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#003366] dark:text-white mb-4">Our Goals</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {[
                  "To assist and improve employee's integral development",
                  "To improve employee productivity",
                  "To improve the level of performance and standard of services we offer",
                  "To increase our market share",
                  "To optimize profits for all stakeholders"
                ].map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
                  >
                    <div className="w-12 h-12 bg-[#003366] dark:bg-[#0066cc] text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">{goal}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Associate Companies Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#003366] dark:text-white mb-4">Associate Companies</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Our associate companies in the related service industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {[
                {
                  logo: "/img/HV.png",
                  content: "All of us at Prudential Shipping are very proud of our country and we want to share its beauty and diversity with as many people as possible. Which is why we created Helanka Vacations to offer specialised and custom-made tours around the country. Helanka handle everything from accommodation reservations through car hire, guide services and even entry to places of interest to ensure the client only has to sit back and enjoy the experience. Whatever type of holiday is required, Helanka has the skill and knowledge to deliver. Helanka offers services not only to the holidaymaker, but also to the business traveller for all requirements."
                },
                {
                  logo: "/img/PTL.png",
                  content: "Premium Trading & Logistics supplies trading and logistical support for Prudential Shipping and its clients including planning, co-ordination and tracking that allows goods to be delivered on time and hassle free. These specialised services include: freight forwarding, customs clearance, BOI documentation and acting as Indenting Agents for a few selected clients in the petroleum and marine industry."
                }
              ].map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-32 mb-8">
                    <Image
                      src={company.logo}
                      alt="Company Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {company.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-16 bg-[#f8fafc] dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "25+", label: "Years Experience" },
                { number: "1000+", label: "Ships Served" },
                { number: "50+", label: "Team Members" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-[#003366] dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
        <VideoSection />
      <Footer />
    </div>
  );
}
