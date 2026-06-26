import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Zap, Shield, DollarSign, Clock, Award, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fresh Products',
    desc: 'Harvested and delivered at peak freshness. Our cold chain ensures your products arrive in pristine condition.',
    color: '#F5B700',
  },
  {
    icon: Shield,
    title: 'Healthy Birds',
    desc: 'Raised under strict biosecurity and veterinary supervision. Every bird meets rigorous health standards.',
    color: '#4E7D32',
  },
  {
    icon: DollarSign,
    title: 'Affordable Prices',
    desc: "Premium quality doesn't have to mean premium prices. We make healthy poultry accessible to everyone.",
    color: '#FFC72C',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    desc: 'Consistent supply you can count on. We maintain stock levels to ensure your orders are fulfilled on time.',
    color: '#F5B700',
  },
  {
    icon: Award,
    title: 'Experienced Team',
    desc: 'Years of hands-on poultry farming expertise. Our team brings knowledge, passion, and professionalism.',
    color: '#4E7D32',
  },
  {
    icon: Sparkles,
    title: 'Quality Guaranteed',
    desc: "Every product carries our quality guarantee. If you're not satisfied, we make it right. No questions asked.",
    color: '#FFC72C',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section id="why-us" className="py-28 relative overflow-hidden" style={{ background: '#0d0d0d' }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,183,0,0.04) 0%, transparent 70%)' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <img src="/assets/images/image.png" alt="" className="w-[700px] h-[700px] object-contain" />
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
            Why CoPriPo
          </span>
          <h2 className="heading-lg text-white mb-5">
            The CoPriPo{' '}
            <span className="gold-gradient-text">Difference</span>
          </h2>
          <p className="body-lg text-cream/55 max-w-2xl mx-auto">
            Six reasons thousands of Zimbabwean families and businesses choose Country Pride Poultry season after season.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group relative p-8 rounded-3xl border border-white/5 hover:border-gold/20 transition-all duration-500 cursor-default overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${color}08, transparent 60%)` }}
              />

              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}15`, border: `1px solid ${color}25` }}
              >
                <Icon size={26} style={{ color }} />
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `0 0 20px ${color}30` }}
                />
              </div>

              <div
                className="absolute top-6 right-6 text-5xl font-black opacity-[0.04] pointer-events-none select-none"
                style={{ fontFamily: 'Poppins, sans-serif', color }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 className="text-white text-lg font-bold mb-3 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {title}
              </h3>
              <p className="text-cream/55 text-sm leading-relaxed relative">{desc}</p>

              <div
                className="absolute bottom-0 left-8 right-8 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
