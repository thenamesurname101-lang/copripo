import { Phone, MapPin, ArrowUp, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const WHATSAPP_NUMBER = '2630712275531';

export default function Footer() {
  const handleLink = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#0a0a0a', borderTop: '1px solid rgba(245,183,0,0.1)' }}
    >
      <div className="absolute bottom-0 left-0 opacity-[0.04] pointer-events-none">
        <img src="/assets/images/image.png" alt="" className="w-96 h-96 object-contain" />
      </div>

      <div className="max-w-7xl mx-auto section-padding pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={scrollToTop} className="flex items-center gap-3 mb-5 group">
              <div
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/50 group-hover:border-gold transition-colors duration-300"
                style={{ boxShadow: '0 0 20px rgba(245,183,0,0.2)' }}
              >
                <img src="/assets/images/image.png" alt="CoPriPo Logo" className="w-full h-full object-cover" />
              </div>
              <div className="leading-none text-left">
                <span className="block text-xl font-bold text-gold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  CoPriPo
                </span>
                <span className="block text-xs text-cream/40 tracking-wider uppercase">Country Pride Poultry</span>
              </div>
            </button>

            <p className="text-cream/50 text-sm leading-relaxed max-w-sm mb-6">
              Delivering healthy poultry, quality products and trusted service with pride across Zimbabwe.
            </p>
            <p className="text-gold font-semibold italic text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
              "Where Freshness Takes Flight!"
            </p>

            <div className="flex items-center gap-3 mt-5">
              <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
              <img src="/assets/images/image.png" alt="" className="w-5 h-5 opacity-40" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-semibold mb-5 text-sm tracking-widest uppercase"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLink(link.href)}
                    className="text-cream/50 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold mb-5 text-sm tracking-widest uppercase"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+2630712275531" className="block text-cream/60 hover:text-gold text-sm transition-colors duration-200">
                    0712 275 531
                  </a>
                  <a href="tel:+2630780464580" className="block text-cream/60 hover:text-gold text-sm transition-colors duration-200">
                    0780 464 580
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream/60 text-sm">1849 Karoi Chiedza A</p>
                  <p className="text-cream/40 text-xs">Karoi, Zimbabwe</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello CoPriPo! I am interested in your products.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #25D366, #1ebe5e)', fontFamily: 'Poppins, sans-serif' }}
              >
                <MessageCircle size={14} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-cream/30 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} CoPriPo — Country Pride Poultry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-cream/20 text-xs">Zimbabwe</p>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gold border border-gold/20 hover:bg-gold/10 hover:border-gold/40 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
