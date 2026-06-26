import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const FEATHER_COUNT = 8;

function FloatingFeather({ index }: { index: number }) {
  const size = 20 + (index % 4) * 10;
  const left = 5 + (index / FEATHER_COUNT) * 90;
  const delay = index * 2.1;
  const duration = 10 + index * 2.5;
  const opacity = 0.12 + (index % 3) * 0.08;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        top: '-60px',
        animation: `featherFall ${duration}s ${delay}s linear infinite`,
        opacity,
        zIndex: 2,
      }}
    >
      <img
        src="/assets/images/image.png"
        alt=""
        style={{ width: size, height: size, filter: 'drop-shadow(0 0 6px rgba(245,183,0,0.6))' }}
      />
    </div>
  );
}

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1437575/pexels-photo-1437575.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-dark/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-transparent to-dark/40" />

      {Array.from({ length: FEATHER_COUNT }).map((_, i) => (
        <FloatingFeather key={i} index={i} />
      ))}

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,183,0,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label mb-6 inline-flex">
              <img src="/assets/images/image.png" alt="" className="w-4 h-4" />
              Zimbabwe's Premier Poultry
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="heading-xl text-white mb-2"
          >
            Country{' '}
            <span className="gold-gradient-text text-shadow-gold">Pride</span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="heading-xl text-white mb-6"
          >
            Poultry
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-3xl font-light text-gold/90 italic mb-5"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Where Freshness Takes Flight!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="body-lg text-cream/60 mb-10 max-w-xl leading-relaxed"
          >
            Delivering healthy poultry, quality products and trusted service with pride across Zimbabwe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap gap-4"
          >
            <button onClick={() => handleScroll('products')} className="btn-primary text-base">
              Explore Products
              <ArrowRight size={18} />
            </button>
            <button onClick={() => handleScroll('contact')} className="btn-secondary text-base">
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Logo badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 80 }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(245,183,0,0.15) 0%, transparent 70%)',
                transform: 'scale(1.5)',
                animation: 'glow-pulse 3s ease-in-out infinite',
              }}
            />
            <div
              className="absolute inset-0 rounded-full border border-gold/20 animate-spin-slow"
              style={{ transform: 'scale(1.18)' }}
            />
            <div
              className="absolute inset-0 rounded-full border border-dashed border-gold/10 animate-spin-slow"
              style={{ transform: 'scale(1.3)', animationDirection: 'reverse' }}
            />

            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center animate-float"
              style={{
                background: 'radial-gradient(circle at 40% 40%, rgba(245,183,0,0.12), rgba(17,17,17,0.8))',
                border: '2px solid rgba(245,183,0,0.35)',
                boxShadow: '0 0 60px rgba(245,183,0,0.25), 0 0 120px rgba(245,183,0,0.1), inset 0 0 40px rgba(245,183,0,0.05)',
              }}
            >
              <img
                src="/assets/images/image.png"
                alt="CoPriPo Logo"
                className="w-40 h-40 md:w-52 md:h-52 object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 20px rgba(245,183,0,0.5))' }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute -bottom-4 -right-4 glass-card px-4 py-2 text-center"
              style={{
                background: 'rgba(245,183,0,0.1)',
                border: '1px solid rgba(245,183,0,0.3)',
              }}
            >
              <p className="text-gold font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Premium Quality
              </p>
              <p className="text-cream/50 text-xs">Trusted in Zimbabwe</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => handleScroll('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/40 hover:text-gold transition-colors duration-300"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
