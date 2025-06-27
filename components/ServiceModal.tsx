"use client";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    sectors?: string[];
    services?: string[];
    achievement?: string;
    availability?: string;
  };
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl z-50 p-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#003366] dark:text-white mb-6">
                  {service.title}
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {service.sectors && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-[#003366] dark:text-white mb-4">
                        Sectors We Serve
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {service.sectors.map((sector) => (
                          <div
                            key={sector}
                            className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center"
                          >
                            <span className="text-[#0066cc] dark:text-[#66a3ff] font-medium">
                              {sector}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.services && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-[#003366] dark:text-white mb-4">
                        Our Services Include
                      </h3>
                      <ul className="space-y-2">
                        {service.services.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <svg
                              className="w-5 h-5 text-[#0066cc]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.achievement && (
                    <div className="mt-8 bg-[#003366]/5 dark:bg-[#66a3ff]/5 p-4 rounded-lg">
                      <p className="text-[#003366] dark:text-[#66a3ff] font-semibold">
                        Achievement: {service.achievement}
                      </p>
                    </div>
                  )}

                  {service.availability && (
                    <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#0066cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <strong>Availability:</strong> {service.availability}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="border-t border-gray-100 dark:border-gray-700 p-4 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-[#003366] text-white rounded-lg hover:bg-[#004488] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
