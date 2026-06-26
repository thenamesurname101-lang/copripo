import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'broilers',
    emoji: '🐔',
    title: 'Broilers',
    subtitle: 'Premium Table Birds',
    desc: 'Our broilers are raised in spacious, clean housing with carefully balanced nutrition. Harvested at peak weight for maximum tenderness and flavour.',
    tag: 'Best Seller',
    image: 'https://images.pexels.com/photos/6294304/pexels-photo-6294304.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    id: 'chicks',
    emoji: '🐣',
    title: 'Day-old Chicks',
    subtitle: 'Healthy Starter Flocks',
    desc: 'Vaccinated, sexed, and ready to thrive. Our day-old chicks come from high-quality parent stock, giving your flock the best possible start.',
    tag: 'Popular',
    image: 'https://images.pexels.com/photos/5726777/pexels-photo-5726777.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    id: 'eggs',
    emoji: '🥚',
    title: 'Fresh Eggs',
    subtitle: 'Farm to Table Daily',
    desc: 'Collected fresh every morning. Our eggs are packed with natural goodness — firm yolks, rich colour, and exceptional taste from hens raised humanely.',
    tag: 'Daily Fresh',
    image: 'https://images.pexels.com/photos/1556715/pexels-photo-1556715.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    id: 'layers',
    emoji: '🐓',
    title: 'Layers',
    subtitle: 'High-Performance Hens',
    desc: 'Our layer hens are selected for exceptional egg production and longevity. Healthy, productive, and raised to the highest welfare standards.',
    tag: 'Available',
    image: 'https://images.pexels.com/photos/7224946/pexels-photo-7224946.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Products() {
  const { ref, inView } = useInView();

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="products"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #111111 0%, #141414 50%, #111111 100%)' }}
    >
      <div className="absolute bottom-0 left-0 opacity-[0.025] pointer-events-none">
        <img src="/assets/images/image.png" alt="" className="w-[500px] h-[500px] object-contain" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6 inline-flex">
            <img src="/assets/images/image.png" alt="" className="w-4 h-4" />
            Our Products
          </span>
          <h2 className="heading-lg text-white mb-5">
            Quality Poultry,{' '}
            <span className="gold-gradient-text">Every Time</span>
          </h2>
          <p className="body-lg text-cream/55 max-w-2xl mx-auto">
            From premium broilers to fresh eggs — everything we raise reflects our commitment to excellence and your family's wellbeing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map(product => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group relative dark-card overflow-hidden cursor-pointer hover:border-gold/30 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(245,183,0,0.9)', color: '#111111', fontFamily: 'Poppins, sans-serif' }}
                  >
                    {product.tag}
                  </span>
                </div>
                <div
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'rgba(17,17,17,0.8)', backdropFilter: 'blur(8px)' }}
                >
                  {product.emoji}
                </div>
              </div>

              <div className="p-6">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">
                  {product.subtitle}
                </p>
                <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {product.title}
                </h3>
                <p className="text-cream/55 text-sm leading-relaxed mb-5">{product.desc}</p>

                <button
                  onClick={handleContact}
                  className="flex items-center gap-2 text-gold text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  Enquire Now
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(245,183,0,0.2), 0 20px 60px rgba(245,183,0,0.08)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
