import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-black border-t border-[#D4AF37]/20 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#D4AF37] mb-4">
              Ancient Egypt Tours
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Experience the wonders of ancient Egypt with expert guides and unforgettable journeys through history.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#FFD700] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Tours', 'Destinations', 'About Us', 'Book Now', 'Gallery'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#FFD700] mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <span>Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span>info@egypttours.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span>+20 123 456 7890</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#FFD700] mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to receive exclusive offers and travel tips.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-black rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all">
                Join
              </button>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8"
        >
          {[Facebook, Instagram, Twitter].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.1, y: -3 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center hover:border-[#D4AF37] transition-colors"
            >
              <Icon className="w-5 h-5 text-[#D4AF37]" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-[#D4AF37]/20"
        >
          <p className="text-gray-500">
            © 2025 Ancient Egypt Tours. All rights reserved. Journey into the past, explore the eternal.
          </p>
        </motion.div>
      </div>

      {/* Decorative bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-[#D4AF37] blur-[100px] opacity-10" />
    </footer>
  );
}
