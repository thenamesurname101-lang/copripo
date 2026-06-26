import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  ArrowUp,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  Tag,
  Truck,
  Boxes,
  Headphones,
  Star,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Egg,
  Drumstick,
  Wheat,
  Bird,
} from "lucide-react";

import heroFarm from "@/assets/hero-farm.jpg";
import logo from "@/assets/logo.png.asset.json";
import productBroiler from "@/assets/product-broiler.jpg";
import productDressed from "@/assets/product-dressed.jpg";
import productEggs from "@/assets/product-eggs.jpg";
import productChicks from "@/assets/product-chicks.jpg";
import productFeed from "@/assets/product-feed.jpg";
import productBulk from "@/assets/product-bulk.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

/* =========================================================
   Country Pride Poultry — Single-page advertising site
   ========================================================= */

const PHONES = ["0712275531", "0780464580"] as const;
const PRIMARY_WHATSAPP = "263712275531"; // intl format for wa.me
const ADDRESS = "1849 Karoi Chiedza A";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Special Offers", href: "#offers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS = [
  {
    id: "broiler",
    name: "Broiler Chickens",
    desc: "Plump, farm-raised broilers grown on premium feed for tender, flavourful meat.",
    img: productBroiler,
    icon: Bird,
  },
  {
    id: "dressed",
    name: "Dressed Chickens",
    desc: "Cleaned, packaged and ready to cook — hygienically prepared for your kitchen.",
    img: productDressed,
    icon: Drumstick,
  },
  {
    id: "eggs",
    name: "Fresh Eggs",
    desc: "Daily-collected farm eggs with rich golden yolks and strong, healthy shells.",
    img: productEggs,
    icon: Egg,
  },
  {
    id: "chicks",
    name: "Day-Old Chicks",
    desc: "Vaccinated, vigorous day-old chicks from trusted parent stock — strong starters.",
    img: productChicks,
    icon: Bird,
  },
  {
    id: "feed",
    name: "Poultry Feed",
    desc: "Balanced starter, grower and layer feed to keep your flock thriving.",
    img: productFeed,
    icon: Wheat,
  },
  {
    id: "bulk",
    name: "Bulk Orders",
    desc: "Wholesale supply for restaurants, retailers and events — reliable, on time.",
    img: productBulk,
    icon: Boxes,
  },
];

const WHY_US = [
  { icon: Sparkles, title: "Fresh Daily", desc: "Harvested the same day for unbeatable taste." },
  { icon: ShieldCheck, title: "Hygienic Handling", desc: "Strict farm-to-pack hygiene standards." },
  { icon: Tag, title: "Affordable Prices", desc: "Honest pricing with no hidden surprises." },
  { icon: Truck, title: "Reliable Service", desc: "Order on time, receive on time. Always." },
  { icon: Boxes, title: "Bulk Supply", desc: "Stocked for caterers, retailers and events." },
  { icon: Headphones, title: "Fast Support", desc: "Friendly WhatsApp support, every day." },
];

const OFFERS = [
  {
    badge: "Limited Time",
    title: "Family Pack",
    desc: "Buy 5 dressed chickens, get 1 FREE — perfect for the whole family.",
    accent: "from-[oklch(0.42_0.11_148)] to-[oklch(0.55_0.14_148)]",
  },
  {
    badge: "Weekend Special",
    title: "Egg Tray Deal",
    desc: "Two trays of fresh farm eggs at a 15% discount — every weekend.",
    accent: "from-[oklch(0.82_0.16_86)] to-[oklch(0.72_0.18_75)]",
  },
  {
    badge: "Starter Bundle",
    title: "100 Chicks + Feed",
    desc: "100 day-old chicks with starter feed bag — your flock, sorted.",
    accent: "from-[oklch(0.36_0.09_148)] to-[oklch(0.48_0.12_148)]",
  },
];

const GALLERY = [
  { src: gallery1, alt: "Modern poultry house with healthy chickens" },
  { src: gallery2, alt: "Farmer holding a day-old chick" },
  { src: gallery3, alt: "Basket of fresh brown eggs" },
  { src: gallery4, alt: "Free-range chickens in green pasture" },
  { src: gallery5, alt: "Fresh dressed chicken ready for cooking" },
  { src: gallery6, alt: "Farm worker inspecting chickens" },
];

const TESTIMONIALS = [
  {
    name: "Rudo M.",
    role: "Restaurant Owner, Karoi",
    quote:
      "CoPriPo's dressed chickens are always fresh and consistent. My customers can taste the difference.",
    initial: "R",
  },
  {
    name: "Tendai K.",
    role: "Smallholder Farmer",
    quote:
      "Their day-old chicks have the lowest mortality I've ever had. Healthy birds, every batch.",
    initial: "T",
  },
  {
    name: "Patience N.",
    role: "Household Customer",
    quote:
      "Fast WhatsApp orders and delivery on the same day. The eggs are golden — truly farm-fresh.",
    initial: "P",
  },
];

/* ---------- Helpers ---------- */
function waLink(message: string) {
  return `https://wa.me/${PRIMARY_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/** Reveal-on-scroll observer */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Country Pride Poultry — Where Freshness Takes Flight" },
      {
        name: "description",
        content:
          "Fresh broilers, dressed chickens, farm eggs, day-old chicks and quality feed from Country Pride Poultry in Karoi. Book your order via WhatsApp today.",
      },
      { property: "og:title", content: "Country Pride Poultry — Where Freshness Takes Flight" },
      {
        property: "og:description",
        content:
          "Trusted poultry supplier in Karoi. Fresh daily, hygienic handling, fair prices.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Offers />
        <BookingSection />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}

/* =========================================================
   Header
   ========================================================= */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo.url}
            alt="Country Pride Poultry logo"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full shadow-[var(--shadow-soft)] transition-transform group-hover:scale-105"
          />
          <div className="leading-tight">
            <div
              className={`font-display text-lg font-semibold transition-colors ${
                scrolled ? "text-primary" : "text-white drop-shadow"
              }`}
            >
              Country Pride
            </div>
            <div
              className={`text-[10px] uppercase tracking-[0.18em] transition-colors ${
                scrolled ? "text-muted-foreground" : "text-white/85"
              }`}
            >
              Poultry · CoPriPo
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-secondary"
              }`}
            >
              {item.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-secondary transition-transform duration-300 hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={waLink("Hello CoPriPo, I'd like to place an order.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-full p-2 transition-colors ${
            scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100 border-b border-border" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/85 hover:bg-muted hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waLink("Hello CoPriPo, I'd like to place an order.")}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </nav>
      </div>
    </header>
  );
}

/* =========================================================
   Hero
   ========================================================= */
function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroFarm}
        alt="Free-range chickens roaming a green pasture at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />

      <div className="container-px mx-auto flex max-w-7xl flex-col justify-center pt-32 pb-24 min-h-[100svh]">
        <div className="max-w-3xl">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm animate-fade"
            style={{ animationDelay: "0.05s" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            Farm-fresh poultry · Karoi
          </span>

          <h1
            className="mt-6 text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Country Pride <br />
            <span className="text-gradient-gold">Poultry</span>
          </h1>

          <p
            className="mt-6 max-w-xl font-display text-xl italic text-white/95 sm:text-2xl animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            "Where Freshness Takes Flight!"
          </p>

          <p
            className="mt-5 max-w-xl text-base text-white/85 sm:text-lg animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Trusted supplier of broilers, dressed chickens, farm eggs, day-old chicks
            and quality poultry feed — delivered with care, every single day.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] sm:text-base"
            >
              Book an Order
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink("Hello CoPriPo, I'd like to enquire about your products.")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:text-base"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          <div
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-white/85 animate-fade"
            style={{ animationDelay: "0.75s" }}
          >
            {[
              { k: "100%", v: "Farm Fresh" },
              { k: "6+", v: "Product Lines" },
              { k: "24/7", v: "WhatsApp Orders" },
            ].map((s) => (
              <div key={s.v} className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-secondary">{s.k}</span>
                <span className="text-sm">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* curved bottom divider */}
      <svg
        className="absolute bottom-0 left-0 w-full text-background"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 80 L1440 80 L1440 30 Q720 90 0 30 Z" fill="currentColor" />
      </svg>
    </section>
  );
}

/* =========================================================
   About
   ========================================================= */
function About() {
  return (
    <section id="about" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="reveal">
          <SectionEyebrow>About CoPriPo</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Poultry raised with <span className="text-primary">care</span>,
            delivered with <span className="text-gradient-gold">pride</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Country Pride Poultry (CoPriPo) is a family-rooted poultry supplier serving Karoi
            and beyond. We're committed to quality, hygiene, fair pricing, and customer
            satisfaction in every order — from a single bird to bulk wholesale.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Every product leaves our farm the same day it's prepared, packed under strict
            hygiene, and handed off with a smile. That's the CoPriPo promise.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { k: "Daily", v: "Fresh Output" },
              { k: "Karoi", v: "Local Farm" },
              { k: "Trusted", v: "By Locals" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]"
              >
                <div className="font-display text-xl font-semibold text-primary">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-elevated)]">
            <img
              src={gallery4}
              alt="Healthy free-range chickens at Country Pride Poultry farm"
              width={900}
              height={700}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-3xl bg-secondary/90 p-5 shadow-[var(--shadow-gold)] sm:flex sm:flex-col sm:justify-center">
            <div className="font-display text-3xl font-semibold text-secondary-foreground">
              Fresh
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-secondary-foreground/80">
              Every Day
            </div>
          </div>
          <div className="absolute -top-6 -right-6 hidden h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] sm:flex">
            <Bird className="h-12 w-12" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
      {children}
    </span>
  );
}

/* =========================================================
   Products
   ========================================================= */
function Products() {
  return (
    <section id="products" className="bg-cream py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionEyebrow>Our Products</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Fresh from our farm to your <span className="text-primary">table</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six quality product lines, all handled hygienically and ready when you are.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.id}
              className="reveal hover-lift group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  <p.icon className="h-3.5 w-3.5" />
                  CoPriPo
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <a
                  href={waLink(`Hi CoPriPo, I'd like to order: ${p.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-[var(--primary-glow)]"
                >
                  Order Now
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Why Choose Us
   ========================================================= */
function WhyChooseUs() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <div className="reveal mx-auto max-w-2xl text-center">
        <SectionEyebrow>Why Choose Us</SectionEyebrow>
        <h2 className="mt-3 text-4xl sm:text-5xl">
          Six reasons families & businesses pick <span className="text-primary">CoPriPo</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_US.map((w, i) => (
          <div
            key={w.title}
            className="reveal hover-lift group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <w.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-xl">{w.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   Special Offers
   ========================================================= */
function Offers() {
  return (
    <section
      id="offers"
      className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px, 64px 64px",
        }}
        aria-hidden
      />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
            <Star className="h-3.5 w-3.5" />
            Special Offers
          </span>
          <h2 className="mt-3 text-4xl text-white sm:text-5xl">
            Deals worth <span className="text-gradient-gold">flocking</span> to
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Hand-picked promos updated regularly. Tap to book yours on WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {OFFERS.map((o, i) => (
            <div
              key={o.title}
              className={`reveal hover-lift relative overflow-hidden rounded-3xl bg-gradient-to-br ${o.accent} p-8 shadow-[var(--shadow-elevated)]`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                {o.badge}
              </span>
              <h3 className="mt-4 text-3xl text-white">{o.title}</h3>
              <p className="mt-3 text-sm text-white/90">{o.desc}</p>
              <a
                href={waLink(`Hi CoPriPo, I'd like to book the offer: ${o.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5"
              >
                Book Offer
                <ChevronRight className="h-4 w-4" />
              </a>
              <div
                className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Booking Form
   ========================================================= */
function BookingSection() {
  return (
    <section id="book" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
        <div className="reveal lg:col-span-2">
          <SectionEyebrow>Book an Order</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Reserve your <span className="text-primary">fresh</span> order
          </h2>
          <p className="mt-5 text-muted-foreground">
            Fill in the form — we'll open WhatsApp with your details pre-filled so we can
            confirm in seconds. No accounts, no hassle.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Same-day fresh stock from our farm",
              "Choose collection or delivery date",
              "Instant WhatsApp confirmation",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal lg:col-span-3">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    date: "",
    fulfillment: "Collection",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = useCallback(
    <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
      setForm((f) => ({ ...f, [key]: value }));
      setErrors((e) => ({ ...e, [key]: "" }));
    },
    [],
  );

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    else if (form.name.trim().length > 80) e.name = "Name is too long.";
    if (!/^[0-9+\s()-]{7,20}$/.test(form.phone.trim()))
      e.phone = "Please enter a valid phone number.";
    if (!form.product) e.product = "Select a product.";
    if (!form.quantity.trim() || Number(form.quantity) <= 0)
      e.quantity = "Enter a valid quantity.";
    if (!form.date) e.date = "Pick a preferred date.";
    if (form.notes.length > 500) e.notes = "Notes must be under 500 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    const msg =
      `*New Order — Country Pride Poultry*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Product:* ${form.product}%0A` +
      `*Quantity:* ${form.quantity}%0A` +
      `*${form.fulfillment} Date:* ${form.date}%0A` +
      (form.notes ? `*Notes:* ${form.notes}%0A` : "") +
      `%0AThank you!`;
    toast.success("Order ready! Opening WhatsApp to confirm…");
    window.open(`https://wa.me/${PRIMARY_WHATSAPP}?text=${msg}`, "_blank", "noopener");
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" id="name" error={errors.name}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputCls(errors.name)}
            placeholder="e.g. Tendai Moyo"
            required
          />
        </Field>
        <Field label="Phone Number" id="phone" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            maxLength={20}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls(errors.phone)}
            placeholder="0712 000 000"
            required
          />
        </Field>
        <Field label="Product" id="product" error={errors.product}>
          <select
            id="product"
            value={form.product}
            onChange={(e) => update("product", e.target.value)}
            className={inputCls(errors.product)}
            required
          >
            <option value="">Choose a product…</option>
            {PRODUCTS.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Quantity" id="quantity" error={errors.quantity}>
          <input
            id="quantity"
            type="number"
            inputMode="numeric"
            min={1}
            max={100000}
            value={form.quantity}
            onChange={(e) => update("quantity", e.target.value)}
            className={inputCls(errors.quantity)}
            placeholder="e.g. 10"
            required
          />
        </Field>
        <Field label="Preferred Date" id="date" error={errors.date}>
          <input
            id="date"
            type="date"
            min={today}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className={inputCls(errors.date)}
            required
          />
        </Field>
        <Field label="Collection or Delivery" id="fulfillment">
          <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted p-1">
            {(["Collection", "Delivery"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => update("fulfillment", opt)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  form.fulfillment === opt
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Additional Notes" id="notes" error={errors.notes} optional>
            <textarea
              id="notes"
              rows={4}
              maxLength={500}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              className={inputCls(errors.notes) + " resize-none"}
              placeholder="Any extra info — cuts, packaging, delivery address…"
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-glow)] hover:shadow-[var(--shadow-elevated)] sm:w-auto"
      >
        <MessageCircle className="h-5 w-5" />
        Submit & Confirm on WhatsApp
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function inputCls(error?: string) {
  return [
    "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all",
    "placeholder:text-muted-foreground/70",
    "focus:border-primary focus:ring-4 focus:ring-primary/15",
    error ? "border-destructive/70 ring-2 ring-destructive/20" : "border-border",
  ].join(" ");
}

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center justify-between text-sm font-medium text-foreground"
      >
        <span>{label}</span>
        {optional && (
          <span className="text-xs font-normal text-muted-foreground">Optional</span>
        )}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}

/* =========================================================
   Gallery + Lightbox
   ========================================================= */
function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? 0 : (i - 1 + GALLERY.length) % GALLERY.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionEyebrow>Gallery</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Inside <span className="text-primary">CoPriPo</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A glimpse of our farm, our products and the care behind every order.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setActive(i)}
              className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] focus:outline-none focus:ring-4 focus:ring-primary/40"
              style={{ transitionDelay: `${i * 50}ms` }}
              aria-label={`Open image: ${g.alt}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                width={900}
                height={700}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-3 left-3 right-3 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {g.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fade"
          onClick={() => setActive(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={GALLERY[active].src}
            alt={GALLERY[active].alt}
            className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-[var(--shadow-elevated)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

/* =========================================================
   Testimonials
   ========================================================= */
function Testimonials() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <div className="reveal mx-auto max-w-2xl text-center">
        <SectionEyebrow>Testimonials</SectionEyebrow>
        <h2 className="mt-3 text-4xl sm:text-5xl">
          Loved by <span className="text-primary">families & businesses</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-7 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={t.name}
            className="reveal hover-lift relative rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex gap-1 text-secondary">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-base leading-relaxed text-foreground/85">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full font-display text-lg font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-green)" }}
                aria-hidden
              >
                {t.initial}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="truncate text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   Contact
   ========================================================= */
function Contact() {
  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
              Get in Touch
            </span>
            <h2 className="mt-3 text-4xl text-white sm:text-5xl">
              Let's get your <span className="text-gradient-gold">order</span> moving
            </h2>
            <p className="mt-5 max-w-md text-primary-foreground/85">
              Reach us by phone, WhatsApp, or drop by the farm. We answer fast — usually
              within minutes during business hours.
            </p>

            <div className="mt-10 space-y-5">
              {PHONES.map((p) => (
                <a
                  key={p}
                  href={`tel:${p}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-primary-foreground/70">
                      Click to call
                    </div>
                    <div className="truncate font-display text-xl text-white">{p}</div>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/70">
                    Address
                  </div>
                  <div className="truncate font-display text-lg text-white">{ADDRESS}</div>
                </div>
              </div>
            </div>

            <a
              href={waLink("Hello CoPriPo, I'd like to place an order.")}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-whatsapp-foreground shadow-[var(--shadow-elevated)] transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="reveal overflow-hidden rounded-3xl border border-white/15 shadow-[var(--shadow-elevated)]">
            <iframe
              title="Country Pride Poultry location — Karoi"
              src="https://www.google.com/maps?q=Karoi%2C%20Zimbabwe&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[420px] w-full border-0 grayscale-[0.2]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Footer
   ========================================================= */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[oklch(0.22_0.04_145)] py-14 text-primary-foreground/80">
      <div className="container-px mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="CoPriPo logo" width={44} height={44} className="h-11 w-11 rounded-full" />
            <div>
              <div className="font-display text-lg font-semibold text-white">
                Country Pride Poultry
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-secondary">
                Where Freshness Takes Flight
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm">
            Karoi-based suppliers of fresh poultry, eggs, day-old chicks and quality feed.
            Trusted by households, retailers and restaurants.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-secondary">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {PHONES.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href={`tel:${p}`} className="hover:text-secondary">
                  {p}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <span>{ADDRESS}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-secondary" />
              <span>hello@copripo.co.zw</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-primary-foreground/60">
        © {year} Country Pride Poultry (CoPriPo). All rights reserved.
      </div>
    </footer>
  );
}

/* =========================================================
   Floating WhatsApp + Back to Top
   ========================================================= */
function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hello CoPriPo, I'd like to chat about an order.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-elevated)] animate-pulse-ring transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-glow)]"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
