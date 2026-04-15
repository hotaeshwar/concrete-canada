import { useEffect, useRef, useState } from "react";

/* ─── Scroll-reveal hook ─────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── Staggered cards observer ───────────────────────────────── */
/*
  Instead of each card watching itself, we watch the GRID once.
  When the grid enters the viewport, we fire cards one-by-one
  with a sequential delay derived from their index.
*/
function useCardsStagger(count, baseDelay = 180) {
  const gridRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          // Reveal each card sequentially
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              setVisibleCount(i + 1);
            }, i * baseDelay);
          }
        }
      },
      { threshold: 0.08 }
    );
    if (gridRef.current) obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, [count, baseDelay]);

  return [gridRef, visibleCount];
}

/* ─── Data ───────────────────────────────────────────────────── */
const services = [
  {
    id: "01",
    title: "Residential",
    subtitle: "Home Projects",
    img: "/media/residential.jpg",
    desc: "We provide durable concrete solutions for driveways, walkways, and foundations, ensuring long-lasting strength for your home's outdoor spaces.",
    backPoints: ["Driveways & Pathways", "Foundations & Slabs", "Decorative Finishes", "Fast Turnaround"],
  },
  {
    id: "02",
    title: "Commercial",
    subtitle: "Business Solutions",
    img: "/media/Commercial.jpg",
    desc: "Our concrete supports office buildings, retail stores, and parking lots with durable, customizable solutions designed for commercial use.",
    backPoints: ["Office & Retail Builds", "Parking Structures", "Custom Mix Designs", "High-Volume Supply"],
  },
  {
    id: "03",
    title: "Industrial",
    subtitle: "Heavy-Duty Builds",
    img: "/media/industrial.jpg",
    desc: "For industrial projects, we deliver heavy-duty concrete built to handle the demands of manufacturing plants, warehouses, and logistics hubs.",
    backPoints: ["Warehouse Floors", "Manufacturing Plants", "Load-Bearing Slabs", "Logistics Hubs"],
  },
  {
    id: "04",
    title: "Municipal",
    subtitle: "Public Infrastructure",
    img: "/media/muncipal.jpg",
    desc: "We offer reliable concrete for municipal projects like roads, bridges, and public spaces, providing strength and durability for essential infrastructure.",
    backPoints: ["Roads & Highways", "Bridges & Overpasses", "Public Spaces", "Infrastructure Upgrades"],
  },
];

/* ─── Flip Card (desktop/tablet) ────────────────────────────── */
function FlipCard({ service, isVisible, onMobileOpen }) {
  const [flipped, setFlipped] = useState(false);

  const handleContactClick = (e) => {
    e.stopPropagation();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Mobile: tap opens modal ── */}
      <div
        className={`
          block md:hidden
          transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
        style={{ willChange: "transform, opacity" }}
        onClick={() => onMobileOpen(service)}
      >
        <div
          className="relative rounded-2xl overflow-hidden cursor-pointer border border-orange-900/20 group"
          style={{ minHeight: 220 }}
        >
          <img
            src={service.img}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-active:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
          <div className="relative z-10 p-5 flex flex-col justify-end h-full" style={{ minHeight: 220 }}>
            <span
              className="text-xs font-black tracking-widest mb-2 uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "rgba(255,255,255,0.25)" }}
            >
              {service.id}
            </span>
            <h3
              className="text-white font-black uppercase leading-tight mb-1"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.5rem, 5vw, 2rem)" }}
            >
              {service.title}
            </h3>
            <p className="text-white/50 text-xs uppercase tracking-widest">{service.subtitle}</p>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-4 h-0.5 rounded-full" style={{ background: "#fe5f00" }} />
              <span className="text-xs text-white/40 tracking-wider">Tap for details</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Desktop/Tablet: flip card ── */}
      <div
        className={`
          hidden md:block
          transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
        style={{
          perspective: "1200px",
          height: 460,
          filter: "drop-shadow(0 0 18px rgba(254,95,0,0.45)) drop-shadow(0 0 40px rgba(254,95,0,0.22))",
          willChange: "transform, opacity",
        }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.65s cubic-bezier(0.4,0.2,0.2,1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden border border-orange-900/20"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              pointerEvents: flipped ? "none" : "auto",
            }}
          >
            <img
              src={service.img}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-7">
              <span
                className="font-black leading-none mb-3"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(2.8rem, 5vw, 3.5rem)",
                  color: "rgba(255,255,255,0.12)",
                  animation: "numPulseWhite 2.5s ease-in-out infinite",
                }}
              >
                {service.id}
              </span>
              <h3
                className="text-white font-black uppercase leading-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.1rem)" }}
              >
                {service.title}
              </h3>
              <p className="text-white/50 text-xs uppercase tracking-widest mt-1">{service.subtitle}</p>
              <div className="mt-4 w-8 h-0.5 rounded-full" style={{ background: "#fe5f00" }} />
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-between p-7"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "linear-gradient(135deg, #0d0d0d 0%, #111 100%)",
              border: "1px solid rgba(254,95,0,0.35)",
              boxShadow: "0 0 40px 8px rgba(254,95,0,0.18), 0 0 80px 20px rgba(254,95,0,0.08)",
              pointerEvents: flipped ? "auto" : "none",
            }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
              style={{ background: "radial-gradient(circle at top right, rgba(254,95,0,0.12), transparent 70%)" }} />

            <div>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-black text-4xl leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "rgba(254,95,0,0.25)" }}
                >
                  {service.id}
                </span>
                <div>
                  <h3
                    className="text-white font-black uppercase leading-tight"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{service.subtitle}</p>
                </div>
              </div>
              <div className="w-8 h-0.5 rounded-full mb-4" style={{ background: "#fe5f00" }} />
              <p className="text-white/65 text-sm leading-relaxed mb-5">{service.desc}</p>
              <ul className="space-y-2">
                {service.backPoints.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#fe5f00" }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleContactClick}
              className="quote-btn w-full py-3.5 font-black uppercase tracking-widest text-sm border border-orange-500/50 text-white transition-all duration-300 cursor-pointer rounded-lg"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", position: "relative", zIndex: 10 }}
            >
              Get a Quote →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Mobile Modal ───────────────────────────────────────────── */
function MobileModal({ service, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleContactClick = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="w-full rounded-t-3xl p-7 pb-10 relative"
        style={{
          background: "linear-gradient(160deg, #111 0%, #0d0d0d 100%)",
          border: "1px solid rgba(254,95,0,0.3)",
          borderBottom: "none",
          boxShadow: "0 -20px 60px rgba(254,95,0,0.15)",
          animation: "slideUp 0.35s cubic-bezier(0.4,0,0.2,1)",
          maxHeight: "85vh",
          overflowY: "auto",
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="w-10 h-1 rounded-full mx-auto mb-6" style={{ background: "rgba(255,255,255,0.15)" }} />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.55)",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "1.1rem",
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="rounded-xl overflow-hidden mb-6" style={{ height: 180 }}>
          <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span
            className="font-black text-3xl leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "rgba(254,95,0,0.3)" }}
          >
            {service.id}
          </span>
          <div>
            <h3
              className="text-white font-black uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.7rem" }}
            >
              {service.title}
            </h3>
            <p className="text-white/40 text-xs uppercase tracking-widest">{service.subtitle}</p>
          </div>
        </div>

        <div className="w-8 h-0.5 rounded-full mb-4" style={{ background: "#fe5f00" }} />
        <p className="text-white/65 text-sm leading-relaxed mb-5">{service.desc}</p>

        <ul className="space-y-2 mb-7">
          {service.backPoints.map((pt, i) => (
            <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#fe5f00" }} />
              {pt}
            </li>
          ))}
        </ul>

        <button
          onClick={handleContactClick}
          className="quote-btn w-full py-4 font-black uppercase tracking-widest text-sm border border-orange-500/50 text-white transition-all duration-300 cursor-pointer rounded-xl"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Get a Quote →
        </button>
      </div>
    </div>
  );
}

/* ─── Header ─────────────────────────────────────────────────── */
function SectionHeader() {
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref} className="mb-16 lg:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
      <div>
        <p
          className={`text-xs font-bold tracking-widest uppercase mb-5 transition-all duration-700
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ color: "#fe5f00", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          What We Offer
        </p>
        <h2
          className={`font-black uppercase leading-none text-white transition-all duration-700
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            transitionDelay: "100ms",
          }}
        >
          Tailored Concrete{" "}
          <span style={{ color: "#fe5f00" }}>Solutions</span>{" "}
          for Every Project
        </h2>
        <div
          className={`h-0.5 w-12 mt-5 rounded-full transition-all duration-700
            ${inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
          style={{ background: "#fe5f00", transitionDelay: "220ms", transformOrigin: "left" }}
        />
      </div>
      <p
        className={`text-white/55 leading-relaxed text-sm md:text-base transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ transitionDelay: "180ms" }}
      >
        As a family-owned company, we at Wilches Ready Mix Concrete take great pride in offering
        cost-effective concrete products and service to clients across the Greater Toronto Area —
        without compromising on quality.
      </p>
    </div>
  );
}

/* ─── Main Export ────────────────────────────────────────────── */
export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  // One observer on the grid → fires cards one-by-one
  const [gridRef, visibleCount] = useCardsStagger(services.length, 200);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes numPulseWhite {
          0%, 100% { color: rgba(255,255,255,0.12); text-shadow: none; }
          50%       { color: rgba(255,255,255,0.9); text-shadow: 0 0 24px rgba(255,255,255,0.5); }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .quote-btn:hover {
          background: rgba(254,95,0,0.08);
          border-color: rgba(254,95,0,0.9) !important;
          color: #fff;
          animation: quoteGlow 1.5s ease-in-out infinite;
        }
        .quote-btn:active {
          transform: scale(0.97);
        }
        @keyframes quoteGlow {
          0%, 100% { box-shadow: 0 0 8px 2px rgba(254,95,0,0.3), 0 0 24px 6px rgba(254,95,0,0.12); }
          50%       { box-shadow: 0 0 18px 6px rgba(254,95,0,0.55), 0 0 48px 14px rgba(254,95,0,0.22); }
        }
      `}</style>

      <section
        id="services"
        className="bg-black font-['Barlow',sans-serif] overflow-x-hidden px-6 py-20 md:px-12 lg:px-20"
      >
        <SectionHeader />

        {/* Cards grid — watched as a whole; cards reveal one by one */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6"
        >
          {services.map((s, i) => (
            <FlipCard
              key={s.id}
              service={s}
              isVisible={visibleCount > i}   /* ← card i shows when visibleCount passes i */
              onMobileOpen={setActiveModal}
            />
          ))}
        </div>
      </section>

      {activeModal && (
        <MobileModal service={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}