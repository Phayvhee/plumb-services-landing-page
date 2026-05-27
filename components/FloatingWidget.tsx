'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);

  const channels = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      link: 'https://wa.me/1234567890',
      description: 'Chat with us on WhatsApp',
    },
    {
      id: 'phone',
      name: 'Call Us',
      icon: Phone,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      link: 'tel:+1234567890',
      description: 'Call our team directly',
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      link: 'mailto:info@plumbing.com',
      description: 'Send us an email',
    },
  ];

  return (
    <>
      {/* Floating Widget Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-24 right-0 flex flex-col gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <motion.a
                    key={channel.id}
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    initial={{ opacity: 0, scale: 0, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0, x: 20 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Tooltip */}
                      <motion.div
                        className="bg-card border border-border rounded-lg px-4 py-2 whitespace-nowrap shadow-lg"
                        initial={{ opacity: 0, x: 10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-sm font-semibold text-foreground">
                          {channel.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {channel.description}
                        </p>
                      </motion.div>

                      {/* Button */}
                      <motion.button
                        className={`w-14 h-14 rounded-full ${channel.color} ${channel.hoverColor} text-white flex items-center justify-center shadow-lg transition-all duration-300 shrink-0`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.button>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 rounded-full bg-linear-to-br from-green-500 to-emerald-600 text-white shadow-2xl flex items-center justify-center overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulsing Background */}
          <motion.div
            className="absolute inset-0 bg-green-400 rounded-full opacity-75"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Icon Container */}
          <motion.div
            className="relative z-10"
            animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <MessageCircle className="w-7 h-7" />
            )}
          </motion.div>

          {/* Notification Badge */}
          <motion.div
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
            }}
          >
            3
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
