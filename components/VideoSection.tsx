"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#003366] dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience Our Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Watch how we deliver excellence in maritime logistics
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          {!isPlaying ? (
            <div 
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full cursor-pointer group"
            >
              <Image
                src="/img/Co-video-thumbnail.jpg"
                alt="Video Thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-10 h-10 text-[#003366] ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/cOcXFxAyKb8?autoplay=1"
              title="PSL Corporate Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
