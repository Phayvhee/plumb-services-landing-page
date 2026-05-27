'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John Davis',
    role: 'Homeowner',
    content:
      'The team arrived within 30 minutes of my emergency call. They fixed the leak quickly and professionally. Highly recommended!',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    name: 'Sarah Martinez',
    role: 'Property Manager',
    content:
      'Excellent service for our commercial building. They handle all our plumbing needs efficiently and professionally.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    content:
      'Fast response time and thorough work. They solved our drainage problem and explained everything clearly.',
    rating: 5,
    avatar: '👨‍🍳',
  },
];

export default function Testimonials() {
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
    hidden: { opacity: 0, y: 30 },
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
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/50 text-secondary text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Customer Reviews
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their plumbing needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="group relative h-full">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl border border-primary/20 group-hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: 'spring',
                          delay: i * 0.1,
                          stiffness: 200,
                        }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-muted-foreground mb-8 flex-grow leading-relaxed">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { number: '5000+', label: 'Happy Customers' },
            { number: '20+', label: 'Years Experience' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Emergency Service' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl border border-primary/20 bg-card/50 hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
