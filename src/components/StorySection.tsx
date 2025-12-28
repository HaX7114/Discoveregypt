import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Pyramid, Sparkles, Sun } from 'lucide-react';

const stories = [
  {
    icon: Pyramid,
    title: 'The Great Pyramids of Giza',
    description:
      'Built over 4,500 years ago, the Great Pyramid of Khufu stands as the last remaining wonder of the ancient world. These architectural marvels were constructed with over 2.3 million limestone blocks, each weighing an average of 2.5 tons.',
    image: 'https://images.unsplash.com/photo-1706651785622-5500a55197ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXJhbWlkcyUyMGdpemElMjBlZ3lwdHxlbnwxfHx8fDE3NjY5MjQ1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Sun,
    title: 'The Sphinx: Guardian of Secrets',
    description:
      'With the body of a lion and the head of a pharaoh, the Great Sphinx has watched over the Giza plateau for millennia. This enigmatic monument, carved from a single piece of limestone, continues to mystify archaeologists and visitors alike.',
    image: 'https://images.unsplash.com/photo-1582729704907-f07a96126069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGhpbnglMjBlZ3lwdCUyMGRlc2VydHxlbnwxfHx8fDE3NjY5MjQ1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Sparkles,
    title: 'Valley of the Kings',
    description:
      'Hidden in the rugged hills of Luxor lies the final resting place of pharaohs including Tutankhamun, Ramses II, and Seti I. These elaborate tombs are adorned with intricate hieroglyphics and paintings that have preserved their vibrant colors for over 3,000 years.',
    image: 'https://images.unsplash.com/photo-1728242410422-a5893353cac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGhpZXJvZ2x5cGhpY3N8ZW58MXx8fHwxNzY2ODM5ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

function StoryCard({ story, index }: { story: typeof stories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = story.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="absolute top-6 left-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/50"
          >
            <Icon className="w-7 h-7 text-black" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#D4AF37] mb-4">
            {story.title}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {story.description}
          </p>

          <motion.div
            className="mt-6 flex items-center gap-2 text-[#D4AF37]"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <span>Explore More</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>

        {/* Golden shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>
      </div>
    </motion.div>
  );
}

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFD700] rounded-full blur-[120px]" />
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
            Ancient Stories Carved in Stone
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the legends and mysteries that have captivated humanity for thousands of years
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <StoryCard key={index} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
