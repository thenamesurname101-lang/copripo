import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button onClick={() => handleLinkClick('#home')} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gold/60 group-hover:border-gold transition-colors duration-300">
                <img src="/assets/images/image.png" alt="CoPriPo Logo" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-all duration-300" />
            </div>
            <div className="leading-none">
              <span className="block text-lg font-bold text-gold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                CoPriPo
              </span>
              <span className="block text-[10px] text-cream/50 tracking-widest uppercase">
                Country Pride Poultry
              </span>
            </div>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                    activeSection === link.href.slice(1)
                      ? 'text-gold'
                      : 'text-cream/70 hover:text-cream'
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gold/10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+2630712275531" className="btn-primary text-sm py-2.5 px-5">
              <Phone size={15} />
              Call Us
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-cream/80 hover:text-gold hover:bg-gold/10 transition-all duration-300"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-20 lg:hidden"
            style={{ background: 'rgba(17,17,17,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-2xl font-semibold py-3 px-8 rounded-2xl transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-gold bg-gold/10'
                      : 'text-cream/80 hover:text-gold hover:bg-gold/5'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                href="tel:+2630712275531"
                className="btn-primary mt-6 text-base"
                onClick={() => setMobileOpen(false)}
              >
                <Phone size={16} />
                Call Us Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
