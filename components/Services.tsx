'use client';

import { motion } from 'framer-motion';
import { Wrench, Pipette, Droplet, Zap, Wind, Thermometer } from 'lucide-react';

const services = [
  {
    icon: Droplet,
    title: 'Leak Repair',
    description: 'Quick detection and repair of leaks in pipes, fixtures, and appliances.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Pipette,
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning using advanced techniques.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Wrench,
    title: 'Pipe Installation',
    description: 'Expert installation of new piping systems for homes and businesses.',
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: Thermometer,
    title: 'Water Heater Service',
    description: 'Installation, repair, and maintenance of water heater systems.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Emergency Repairs',
    description: 'Available 24/7 for any emergency plumbing situations.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Wind,
    title: 'Plumbing Inspection',
    description: 'Comprehensive inspection to identify potential plumbing issues.',
    color: 'from-teal-500 to-blue-500',
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Complete Plumbing Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From emergency repairs to preventive maintenance, we handle all your plumbing needs with expertise and professionalism.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative group h-full">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  />

                  {/* Card Content */}
                  <div className="relative h-full p-8 rounded-2xl border border-primary/20 group-hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300">
                    {/* Icon Container */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:shadow-lg group-hover:shadow-primary/30`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>

                    {/* Text Content */}
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      className="flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Don&apos;t see what you&apos;re looking for?
          </p>
          <motion.button
            className="px-8 py-4 rounded-lg bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
