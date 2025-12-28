import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const temples = [
  {
    name: 'Karnak Temple Complex',
    location: 'Luxor',
    description: 'The largest religious building ever constructed, dedicated to the Theban triad of Amun, Mut, and Khonsu.',
    image: 'https://images.unsplash.com/photo-1761143589598-25ebaeb477d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHRlbXBsZSUyMGNvbHVtbnN8ZW58MXx8fHwxNzY2OTI0NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Luxor Temple',
    location: 'Luxor',
    description: 'A magnificent temple illuminated at night, showcasing the grandeur of ancient Egyptian architecture.',
    image: 'https://images.unsplash.com/photo-1664143197909-98b1f258e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXhvciUyMHRlbXBsZSUyMG5pZ2h0fGVufDF8fHx8MTc2NjkyNDU5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Temple of Hatshepsut',
    location: 'Deir el-Bahari',
    description: 'A mortuary temple built into the cliffs, honoring one of Egypt\'s most powerful female pharaohs.',
    image: 'https://images.unsplash.com/photo-1706651785622-5500a55197ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXJhbWlkcyUyMGdpemElMjBlZ3lwdHxlbnwxfHx8fDE3NjY5MjQ1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Abu Simbel',
    location: 'Aswan',
    description: 'Four colossal statues of Ramses II guard this temple, carved directly into the mountainside.',
    image: 'https://images.unsplash.com/photo-1680356217112-dad9300ce49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWxlJTIwcml2ZXIlMjBlZ3lwdHxlbnwxfHx8fDE3NjY5MjQ1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

function TempleCard({ temple, index }: { temple: typeof temples[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group cursor-pointer"
    >
      <div className="relative h-96 rounded-2xl overflow-hidden">
        <motion.img
          src={temple.image}
          alt={temple.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] backdrop-blur-sm mb-3">
              <span className="text-[#FFD700] text-sm">{temple.location}</span>
            </div>
            
            <h3 className="text-3xl text-white mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
              {temple.name}
            </h3>
            
            <p className="text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
              {temple.description}
            </p>
          </motion.div>
        </div>

        {/* Border glow effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#D4AF37] transition-colors duration-300" />
      </div>
    </motion.div>
  );
}

export function TempleGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#1a1200] to-[#0a0a0a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] mb-6">
            Sacred Temples of the Pharaohs
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Step into the divine sanctuaries where gods and kings walked among mortals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {temples.map((temple, index) => (
            <TempleCard key={index} temple={temple} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
