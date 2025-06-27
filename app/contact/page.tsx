"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const offices = [
	{
		name: "Head Office",
		address: [
			"Resolute,",
			"471, Cotta Road,",
			"Rajagiriya,",
			"Colombo, Sri Lanka.",
		],
		mapUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9583120227837!2d79.89937661477385!3d6.900982095012557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259a86d5dbbf1%3A0x3ae0891b8a57c9c8!2sCotta%20Rd%2C%20Sri%20Jayawardenepura%20Kotte!5e0!3m2!1sen!2slk!4v1677735282031!5m2!1sen!2slk",
	},
	{
		name: "Galle Branch",
		address: [
			"33/9B,",
			"Magalle Mawatha Magalle,",
			"Galle, Sri Lanka.",
		],
		mapUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7676380006765!2d80.21914731476882!3d6.025833995627134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173a4d4b7d82d%3A0x91d0b0e5f5c8b80f!2sMagalle%2C%20Galle!5e0!3m2!1sen!2slk!4v1677735382031!5m2!1sen!2slk",
	},
];

export default function Contact() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
			<Navbar />

			<main className="pt-32">
				{/* Offices Section */}
				<section className="py-24">
					<div className="container mx-auto px-4">
						<div className="grid md:grid-cols-2 gap-12">
							{offices.map((office, index) => (
								<motion.div
									key={office.name}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 }}
									viewport={{ once: true }}
									className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
								>
									<div className="relative h-64 w-full">
										<iframe
											src={office.mapUrl}
											className="absolute inset-0 w-full h-full border-0"
											allowFullScreen
											loading="lazy"
											referrerPolicy="no-referrer-when-downgrade"
										/>
									</div>
									<div className="p-8">
										<h2 className="text-2xl font-bold text-[#003366] dark:text-white mb-4">
											{office.name}
										</h2>
										<div className="space-y-1">
											{office.address.map((line, i) => (
												<p
													key={i}
													className="text-gray-600 dark:text-gray-300"
												>
													{line}
												</p>
											))}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Contact Form Section */}
				<section className="py-24 bg-[#f8fafc] dark:bg-gray-800/50">
					<div className="container mx-auto px-4">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="text-center mb-16"
						>
							<h2 className="text-4xl font-bold text-[#003366] dark:text-white mb-4">
								Get in Touch
							</h2>
							<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
								Having questions? We&apos;d love to hear from you. Send us a message
								and we&apos;ll respond as soon as possible.
							</p>
						</motion.div>

						<div className="grid md:grid-cols-2 gap-12 items-stretch">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
								viewport={{ once: true }}
								className="bg-[#003366] dark:bg-gray-800 rounded-2xl overflow-hidden relative h-[1200px] md:h-auto md:aspect-[683/1024]"
							>
								<Image
									src="/img/office.jpg"
									alt="PSL Office"
									fill
									priority
									className="object-contain md:object-cover object-center"
									quality={100}
								/>
								<div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/50 to-black/25 flex items-end md:items-center pb-20 md:pb-0">
									<div className="p-8 md:p-12">
										<h3 className="text-3xl font-bold text-white mb-4">
											Your Global Maritime Partner
										</h3>
										<p className="text-lg text-gray-200">
											With offices strategically located across Sri Lanka, we&apos;re here to serve your maritime needs
										</p>
									</div>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
							>
								<div className="mb-8">
									<h3 className="text-2xl font-bold text-[#003366] dark:text-white mb-4">
										Let&apos;s Start a Conversation
									</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										Prudential Shipping Line has been delivering excellence in maritime services since 1998. Whether you need information about our services, have a specific inquiry, or want to discuss a partnership, our team is here to help.
									</p>
									<div className="flex items-center gap-2 text-[#0066cc] dark:text-[#66a3ff]">
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
										<span className="font-medium">24/7 Support Available</span>
									</div>
								</div>
								<ContactForm />
							</motion.div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
