"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" }, // Changed from "#services" to "/services"
    { title: "Network", href: "/network" },
    { title: "Life at PSL", href: "https://mendisone.com/life-at-mendisone/", isExternal: true },
    { title: "Media", href: "https://mendisone.com/media/", isExternal: true },
    { title: "Careers", href: "https://mendisone.com/careers/", isExternal: true },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="PSL Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={`font-medium transition-colors ${
                  item.title === "Contact"
                    ? "bg-[#003366] text-white px-6 py-2 rounded-lg hover:bg-[#004488] dark:bg-[#0066cc] dark:hover:bg-[#0052a3]"
                    : "text-gray-700 hover:text-[#003366] dark:text-gray-300 dark:hover:text-[#66a3ff] relative group py-2"
                }`}
              >
                {item.title}
                {item.title !== "Contact" && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#003366] dark:bg-[#66a3ff] transform scale-x-0 transition-transform group-hover:scale-x-100" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className={`font-medium transition-colors ${
                      item.title === "Contact"
                        ? "bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-[#004488] dark:bg-[#0066cc] dark:hover:bg-[#0052a3] text-center"
                        : "text-gray-700 hover:text-[#003366] dark:text-gray-300 dark:hover:text-[#66a3ff] px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
