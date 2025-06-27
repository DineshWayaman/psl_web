import Image from "next/image";

export default function Footer() {
  return (
        <footer className="bg-[#002347] dark:bg-gray-900 text-white pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="space-y-4">
                <a href="/">
                  <Image
                    src="/logo.png"
                    alt="PSL Logo"
                    width={160}
                    height={50}
                    className="object-contain"
                  />
                </a>
                <p className="text-gray-300 text-sm">
                  Your trusted partner in maritime logistics since 1998, delivering excellence in global shipping solutions.
                </p>
                <div className="flex gap-4">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      ),
                      href: "https://www.facebook.com/PrudentialShipping/",
                      name: "Facebook"
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                        </svg>
                      ),
                      href: "https://lk.linkedin.com/company/prudential-shipping",
                      name: "LinkedIn"
                    }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0066cc] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  {[
                    { title: "About", href: "/about" },
                    { title: "Services", href: "/services" },
                    { title: "Network", href: "/network" },
                    { title: "Contact", href: "/contact" }
                  ].map((item) => (
                    <li key={item.title}>
                      <a href={item.href} className="text-gray-300 hover:text-white transition-colors">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                <ul className="space-y-3">
                  {[
                    { name: "Port Agency", href: "/services" },
                    { name: "STS Operations", href: "/services" },
                    { name: "Offshore Logistics", href: "/services" },
                    { name: "Ship Chartering", href: "/services" },
                    { name: "Maritime Security", href: "/services" }
                  ].map((service) => (
                    <li key={service.name}>
                      <a href={service.href} className="text-gray-300 hover:text-white transition-colors">
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    <span>
                      Resolute,<br />
                      471, Cotta Road,<br />
                      Rajagiriya,<br />
                      Colombo, Sri Lanka.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+94 11 4721237</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>info@pslship.com</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 mt-8 border-t border-white/10 text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Prudential Shipping Line. All rights reserved.
              </p>
              <div className="mt-4 sm:mt-0">
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors px-3">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors px-3">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
  );
}
