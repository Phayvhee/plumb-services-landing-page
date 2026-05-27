'use client';

import { motion } from 'framer-motion';
import { Phone, Clock, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-primary/10 via-secondary/10 to-accent/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          className="rounded-3xl border border-primary/30 bg-card/50 backdrop-blur-md p-12 md:p-20 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Inner Gradient Background */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Fix Your
                <br />
                <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Plumbing Issues?
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Don&apos;t let plumbing problems disrupt your day. Contact us now for immediate assistance or to schedule an appointment.
              </p>

              {/* Contact Info */}
              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-semibold text-lg">(555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Available</p>
                    <p className="font-semibold text-lg">24/7 Emergency Service</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-lg">Service Area: Metropolitan Area</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-card/80 backdrop-blur-md p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-6">Get Your Quote</h3>

                <form className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                  >
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 }}
                  >
                    <select className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary outline-none transition-colors">
                      <option>Select Service Type</option>
                      <option>Emergency Repair</option>
                      <option>Drain Cleaning</option>
                      <option>Water Heater</option>
                      <option>Inspection</option>
                    </select>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full mt-6 px-6 py-3 rounded-lg bg-linear-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    Get Free Quote
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
