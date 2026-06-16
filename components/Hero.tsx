'use client';

import { motion } from 'framer-motion';
import { Droplet, Zap, Shield } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Video Background with Overlays */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/plumbing-hero.jpg)',
          }}
        />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/plumbing-hero.jpg"
          aria-hidden="true"
        >
          <source src="/videos/plumbing-hero.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        {/* Additional subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="px-4 py-2 rounded-full bg-primary/30 border border-primary/50 text-primary text-sm font-semibold backdrop-blur">
                24/7 Emergency Service Available
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Professional Plumbing<br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                You Can Trust
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Fast, reliable, and affordable plumbing services. Our licensed professionals handle everything from emergency repairs to installations with guaranteed satisfaction.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 text-sm text-white">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>100% Guaranteed</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.button
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Free Quote
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-lg border-2 border-primary text-white font-bold text-lg hover:bg-primary/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Call: (555) 123-4567
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Cards */}
          <motion.div
            className="relative hidden md:block h-full min-h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Card 1 */}
            <motion.div
              className="absolute top-0 right-0 w-72 h-64 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/30">
                  <Droplet className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Leak Detection</h3>
              </div>
              <p className="text-gray-200">
                Advanced detection to find and fix leaks before they cause damage.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="absolute top-72 -left-12 w-72 h-64 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/30">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white">Fast Response</h3>
              </div>
              <p className="text-gray-200">
                Average 30-minute response time. Your emergency is our priority.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="absolute bottom-12 right-12 w-72 h-64 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl"
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/30">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white">Warranty</h3>
              </div>
              <p className="text-gray-200">
                All work backed by comprehensive warranty for your peace of mind.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
