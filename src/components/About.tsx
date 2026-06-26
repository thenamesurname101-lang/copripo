import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { CheckCircle2, Leaf, Heart, Users } from 'lucide-react';

const pillars = [
  {
    icon: Leaf,
    title: 'Uncompromised Freshness',
    desc: 'Every product leaves our farm at peak quality — chilled, clean, and ready for your table.',
  },
  {
    icon: CheckCircle2,
    title: 'Rigorous Quality Control',
    desc: 'From hatch to harvest, our birds are raised under strict health and nutrition standards.',
  },
  {
    icon: Heart,
    title: 'Locally Rooted',
    desc: 'Proudly Zimbabwean. We invest in local communities and ethical farming practices.',
  },
  {
    icon: Users,
    title: 'Customer First',
    desc: 'Your satisfaction drives every decision we make. Reliable, responsive, and personal.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <img src="/assets/images/image.png" alt="" className="w-[600px] h-[600px] object-contain" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Story */}
          <motion.div variants={itemVariants}>
            <span className="section-label mb-6 inline-flex">
              <img src="/assets/images/image.png" alt="" className="w-4 h-4" />
              Our Story
            </span>

            <h2 className="heading-lg text-white mb-6">
              Farming with{' '}
              <span className="gold-gradient-text">Heart & Pride</span>
            </h2>

            <div className="space-y-5 text-cream/65 body-lg">
              <p>
                CoPriPo — Country Pride Poultry — was born from a simple belief: every Zimbabwean family deserves access to fresh, healthy, and affordable poultry products without compromise.
              </p>
              <p>
                Situated in Karoi, we raise our birds with care, feeding them balanced diets in clean, humane environments. Our commitment to natural rearing methods means every broiler, chick, and egg carries real nutritional value.
              </p>
              <p>
                We are not just a farm — we are a promise. A promise that the produce on your plate is fresh, traceable, and raised with genuine pride.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-gold/40 bg-dark-card overflow-hidden"
                    style={{
                      backgroundImage: `url(https://images.pexels.com/photos/${200 + i * 300}/pexels-photo-${200 + i * 300}.jpeg?auto=compress&w=80)`,
                      backgroundSize: 'cover',
                    }}
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Trusted by hundreds</p>
                <p className="text-cream/50 text-xs">of families across Zimbabwe</p>
              </div>
            </div>
          </motion.div>

          {/* Pillars */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="dark-card p-6 group hover:border-gold/25 transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(245,183,0,0.1)' }}
                >
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-semibold text-white text-base mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {title}
                </h3>
                <p className="text-cream/55 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '100%', label: 'Locally Farmed' },
            { value: 'Daily', label: 'Fresh Delivery' },
            { value: '4+', label: 'Product Lines' },
            { value: 'Zero', label: 'Compromise on Quality' },
          ].map(stat => (
            <motion.div key={stat.label} variants={itemVariants} className="text-center py-8 glass-card">
              <p className="text-4xl font-bold gold-gradient-text mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {stat.value}
              </p>
              <p className="text-cream/50 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
