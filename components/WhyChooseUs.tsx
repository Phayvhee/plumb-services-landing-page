'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle,
    title: '20+ Years Experience',
    description: 'Trusted by thousands of homeowners and businesses across the region.',
  },
  {
    icon: Award,
    title: 'Licensed & Certified',
    description: 'All our technicians are fully licensed, insured, and continuously trained.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced professionals who treat your home with respect and care.',
  },
  {
    icon: Zap,
    title: '30-Min Response',
    description: 'Emergency service with average 30-minute response time, 24/7/365.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Why Choose Us
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Trusted Plumbing Partner
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over two decades of experience in the plumbing industry, we&apos;ve built our reputation on reliability, expertise, and customer satisfaction. When you call us, you&apos;re not just getting a plumber—you&apos;re getting a trusted partner committed to solving your plumbing challenges.
            </p>

            <motion.button
              className="px-8 py-4 rounded-lg bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  className="group flex gap-6 p-6 rounded-xl border border-primary/20 hover:border-primary/50 bg-card/50 hover:bg-card/80 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 10 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring' }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
