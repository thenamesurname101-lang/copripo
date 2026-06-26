import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Phone, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

const phoneNumbers = [
  { number: '0712 275 531', dialable: '+2630712275531' },
  { number: '0780 464 580', dialable: '+2630780464580' },
];

const WHATSAPP_NUMBER = '2630712275531';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  const { ref, inView } = useInView();

  const openWhatsApp = () => {
    const msg = encodeURIComponent('Hello CoPriPo! I am interested in your poultry products. Please get in touch.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0d0d 0%, #111111 100%)' }}
    >
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(245,183,0,0.06), transparent 70%)' }}
      />
      <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none">
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
            Get in Touch
          </span>
          <h2 className="heading-lg text-white mb-5">
            We'd Love to{' '}
            <span className="gold-gradient-text">Hear From You</span>
          </h2>
          <p className="body-lg text-cream/55 max-w-xl mx-auto">
            Reach out to place an order, ask a question, or simply say hello. We're always happy to help.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {/* Phone Card */}
          <motion.div variants={itemVariants}>
            <div
              className="h-full p-8 rounded-3xl border border-gold/15 hover:border-gold/30 transition-all duration-300 group"
              style={{ background: 'rgba(245,183,0,0.04)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'rgba(245,183,0,0.12)', border: '1px solid rgba(245,183,0,0.25)' }}
              >
                <Phone size={24} className="text-gold" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Call Us
              </h3>
              <p className="text-cream/50 text-sm mb-6">Our team is available during business hours.</p>

              <div className="space-y-3">
                {phoneNumbers.map(({ number, dialable }) => (
                  <a
                    key={dialable}
                    href={`tel:${dialable}`}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gold/10 group/phone"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(245,183,0,0.08)' }}
                    >
                      <Phone size={14} className="text-gold" />
                    </div>
                    <span className="text-white font-semibold text-lg tracking-wide group-hover/phone:text-gold transition-colors duration-200">
                      {number}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div variants={itemVariants}>
            <div
              className="h-full p-8 rounded-3xl border border-farm-green/20 hover:border-farm-green/40 transition-all duration-300 group cursor-pointer"
              style={{ background: 'rgba(78,125,50,0.04)' }}
              onClick={openWhatsApp}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'rgba(78,125,50,0.15)', border: '1px solid rgba(78,125,50,0.3)' }}
              >
                <MessageCircle size={24} className="text-farm-green" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                WhatsApp Us
              </h3>
              <p className="text-cream/50 text-sm mb-6">
                Chat with us directly for quick responses and order enquiries.
              </p>
              <button
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-semibold text-white transition-all duration-300 group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #1ebe5e)',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <MessageCircle size={18} />
                Open WhatsApp Chat
                <ExternalLink size={14} className="opacity-70" />
              </button>
              <p className="text-center text-cream/30 text-xs mt-4">Tap above to start a conversation</p>
            </div>
          </motion.div>

          {/* Address Card */}
          <motion.div variants={itemVariants}>
            <div
              className="h-full p-8 rounded-3xl border border-white/[0.08] hover:border-gold/20 transition-all duration-300 group"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'rgba(245,183,0,0.08)', border: '1px solid rgba(245,183,0,0.15)' }}
              >
                <MapPin size={24} className="text-gold" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Location
              </h3>
              <p className="text-cream/50 text-sm mb-6">
                Visit us at our farm and see the CoPriPo difference firsthand.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-white font-semibold text-lg">1849 Karoi Chiedza A</p>
                <p className="text-cream/50 text-sm">Karoi, Zimbabwe</p>
              </div>
              <div
                className="w-full h-36 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400&q=60)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.25,
                  }}
                />
                <div className="relative z-10 text-center">
                  <MapPin size={24} className="text-gold mx-auto mb-1" />
                  <p className="text-cream/60 text-xs">Map integration available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(245,183,0,0.08), rgba(245,183,0,0.03))',
            border: '1px solid rgba(245,183,0,0.15)',
          }}
        >
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <img src="/assets/images/image.png" alt="" className="w-48 h-48 object-contain" />
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Order?
          </h3>
          <p className="text-cream/55 mb-8 max-w-lg mx-auto">
            Call or WhatsApp us today. We deliver fresh to your doorstep across Karoi and surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+2630712275531" className="btn-primary">
              <Phone size={17} />
              Call Now
            </a>
            <button onClick={openWhatsApp} className="btn-secondary">
              <MessageCircle size={17} />
              WhatsApp
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
