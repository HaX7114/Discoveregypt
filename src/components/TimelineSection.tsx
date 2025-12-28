import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Calendar, Crown, Scroll, Star } from 'lucide-react';

const timeline = [
  {
    year: '3100 BCE',
    title: 'Unification of Egypt',
    description: 'King Narmer unites Upper and Lower Egypt, beginning the dynastic period that would last for 3,000 years.',
    icon: Crown,
  },
  {
    year: '2580 BCE',
    title: 'The Great Pyramid',
    description: 'Pharaoh Khufu completes the Great Pyramid of Giza, the tallest man-made structure for the next 3,800 years.',
    icon: Star,
  },
  {
    year: '1279 BCE',
    title: 'Reign of Ramses II',
    description: 'The great warrior pharaoh Ramses II begins his 66-year reign, building more monuments than any other pharaoh.',
    icon: Crown,
  },
  {
    year: '1323 BCE',
    title: 'Tutankhamun\'s Tomb',
    description: 'The young pharaoh is laid to rest with magnificent treasures that would remain undisturbed for over 3,000 years.',
    icon: Scroll,
  },
  {
    year: '51 BCE',
    title: 'Cleopatra\'s Rule',
    description: 'The last pharaoh of Egypt begins her legendary reign, marking the end of the ancient Egyptian civilization.',
    icon: Crown,
  },
];

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = item.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative"
    >
      <div className="flex items-center gap-8 md:gap-12">
        {/* Left side (even items) */}
        {isEven && (
          <>
            <div className="flex-1 text-right pr-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                className="inline-block"
              >
                <h3 className="text-2xl md:text-3xl text-[#FFD700] mb-2">{item.title}</h3>
                <p className="text-[#D4AF37] text-lg mb-3">{item.year}</p>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            </div>

            {/* Center dot */}
            <div className="relative flex-shrink-0">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/50 relative z-10"
              >
                <Icon className="w-8 h-8 text-black" />
              </motion.div>
              
              {/* Connecting line */}
              {index < timeline.length - 1 && (
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-[#D4AF37] to-transparent" />
              )}
            </div>

            <div className="flex-1" />
          </>
        )}

        {/* Right side (odd items) */}
        {!isEven && (
          <>
            <div className="flex-1" />

            {/* Center dot */}
            <div className="relative flex-shrink-0">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/50 relative z-10"
              >
                <Icon className="w-8 h-8 text-black" />
              </motion.div>
              
              {/* Connecting line */}
              {index < timeline.length - 1 && (
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-[#D4AF37] to-transparent" />
              )}
            </div>

            <div className="flex-1 pl-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl text-[#FFD700] mb-2">{item.title}</h3>
                <p className="text-[#D4AF37] text-lg mb-3">{item.year}</p>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] mb-6">
            <Calendar className="w-5 h-5 text-[#FFD700]" />
            <span className="text-[#D4AF37]">Journey Through Time</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] mb-6">
            5,000 Years of History
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From the first pharaohs to the last, explore the key moments that shaped one of history's greatest civilizations
          </p>
        </motion.div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
