import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/1437575/pexels-photo-1437575.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    alt: 'Poultry farm overview',
  },
  {
    src: 'https://images.pexels.com/photos/6294304/pexels-photo-6294304.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    alt: 'Premium broilers ready for market',
  },
  {
    src: 'https://images.pexels.com/photos/1556715/pexels-photo-1556715.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    alt: 'Fresh eggs collection',
  },
  {
    src: 'https://images.pexels.com/photos/5726777/pexels-photo-5726777.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    alt: 'Day-old chicks',
  },
  {
    src: 'https://images.pexels.com/photos/7224946/pexels-photo-7224946.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    alt: 'Layer hens in housing',
  },
  {
    src: 'https://images.pexels.com/photos/325045/pexels-photo-325045.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    alt: 'Farm facility',
  },
  {
    src: 'https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    alt: 'Healthy birds on pasture',
  },
  {
    src: 'https://images.pexels.com/photos/1300342/pexels-photo-1300342.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    alt: 'Fresh produce ready for delivery',
  },
];

export default function Gallery() {
  const { ref, inView } = useInView();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-28 bg-dark relative overflow-hidden">
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
            Gallery
          </span>
          <h2 className="heading-lg text-white mb-5">
            Life at{' '}
            <span className="gold-gradient-text">CoPriPo</span>
          </h2>
          <p className="body-lg text-cream/55 max-w-xl mx-auto">
            A glimpse into our farm — where care, pride, and quality come to life every single day.
          </p>
        </motion.div>

        <div className="masonry-grid">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="masonry-item group relative cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(245,183,0,0.9)' }}
                >
                  <ZoomIn size={20} style={{ color: '#111111' }} />
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-gold/0 group-hover:border-gold/40 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src.replace('w=800', 'w=1200')}
                alt={galleryImages[lightboxIndex].alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />

              <p className="text-center text-cream/60 text-sm mt-4">
                {galleryImages[lightboxIndex].alt}
              </p>

              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-dark-card border border-white/10 flex items-center justify-center text-cream/70 hover:text-white hover:border-gold/40 transition-all duration-200"
              >
                <X size={18} />
              </button>

              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-card/90 border border-white/10 flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold/40 transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-card/90 border border-white/10 flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold/40 transition-all duration-200"
              >
                <ChevronRight size={20} />
              </button>

              <div className="flex justify-center gap-1.5 mt-4">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="h-1.5 rounded-full transition-all duration-200"
                    style={{
                      background: i === lightboxIndex ? '#F5B700' : 'rgba(255,255,255,0.2)',
                      width: i === lightboxIndex ? '24px' : '6px',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
