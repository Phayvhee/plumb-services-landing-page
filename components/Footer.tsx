'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-background border-t border-primary/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <div>
                <p className="font-bold text-lg">PlumbPro</p>
                <p className="text-xs text-muted-foreground">Excellence in Service</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Your trusted partner for all plumbing needs, available 24/7 for emergency service.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Emergency Repair',
                'Leak Detection',
                'Drain Cleaning',
                'Water Heater',
                'Inspections',
                'Installation',
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Careers', 'Contact', 'Privacy', 'Terms'].map(
                (item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <motion.a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>(555) 123-4567</span>
              </motion.a>

              <motion.a
                href="mailto:info@plumbpro.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <span>info@plumbpro.com</span>
              </motion.a>

              <motion.div
                className="flex items-start gap-3 text-muted-foreground text-sm"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span>123 Main Street, Your City, State 12345</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-primary/10 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} PlumbPro. All rights reserved. Made with ❤️ for our community.
          </p>
          <div className="flex items-center gap-6">
            <motion.a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
              whileHover={{ underline: true }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
              whileHover={{ underline: true }}
            >
              Terms & Conditions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
