import { useEffect, useRef, useState } from "react";

/* ── Intersection Observer hook ── */
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

/* ── Staggered fade-up wrapper ── */
function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ── Horizontal slide wrapper ── */
function SlideIn({ children, from = "left", delay = 0, className = "" }) {
  const [ref, inView] = useInView(0.1);
  const hidden =
    from === "left" ? "-translate-x-12" : "translate-x-12";
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-x-0" : `opacity-0 ${hidden}`
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ── Scale-in for cards ── */
function ScaleIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView(0.08);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ── Placeholder card (no real images yet) ── */
function PlaceholderCard({ index, delay }) {
  const patterns = [
    "M0 40 L40 0 L80 40 L40 80Z",
    "M10 10 L70 10 L70 70 L10 70Z",
    "M40 5 L75 30 L75 70 L40 75 L5 70 L5 30Z",
    "M40 0 L80 40 L40 80 L0 40Z",
    "M20 20 L60 20 L60 60 L20 60Z",
    "M5 40 L40 5 L75 40 L40 75Z",
  ];
  const shapeIndex = index % patterns.length;

  return (
    <ScaleIn delay={delay} className="group">
      <div className="relative overflow-hidden border border-orange-900/20 bg-neutral-950 aspect-[4/3]">
        {/* Decorative SVG background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <svg
            viewBox="0 0 80 80"
            className="w-3/4 h-3/4"
            fill="none"
            stroke="#fe5f00"
            strokeWidth="1"
          >
            <path d={patterns[shapeIndex]} />
            <circle cx="40" cy="40" r="20" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Corner accent */}
        <div
          className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2"
          style={{ borderColor: "#fe5f00" }}
        />
        <div
          className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2"
          style={{ borderColor: "#fe5f00" }}
        />

        {/* Number label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-black opacity-5 select-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(5rem, 12vw, 8rem)",
              color: "#fe5f00",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
          <div className="text-center px-4">
            <p
              className="text-white font-bold uppercase tracking-wider text-sm"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Coming Soon
            </p>
            <div
              className="mx-auto mt-2 h-0.5 w-8 rounded-full"
              style={{ background: "#fe5f00" }}
            />
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="border border-t-0 border-orange-900/20 px-4 py-3 bg-black">
        <p
          className="text-white/40 text-xs tracking-widest uppercase"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Project {String(index + 1).padStart(2, "0")}
        </p>
        <div
          className="mt-1 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
          style={{ background: "#fe5f00" }}
        />
      </div>
    </ScaleIn>
  );
}

/* ── Ticker/marquee strip ── */
function MarqueeBanner() {
  const items = [
    "Concrete Paving",
    "Masonry Work",
    "Kitchen Remodeling",
    "Bathroom Remodeling",
    "Window Refurbishing",
    "Ready Mix Concrete",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-orange-900/20 py-3 bg-black">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-xs font-bold tracking-widest uppercase flex items-center gap-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: i % 2 === 0 ? "#fe5f00" : "rgba(255,255,255,0.3)",
            }}
          >
            {item}
            <span
              className="inline-block w-1 h-1 rounded-full"
              style={{ background: "#fe5f00", opacity: 0.4 }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function ProjectGallery() {
  /* Page-load hero reveal */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const placeholderCount = 9;

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Keyframes + glow button styles */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 22s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }

        /* ── Glow CTA button ── */
        .cta-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 2px solid #fe5f00;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .16em;
          font-size: 14px;
          padding: 14px 38px;
          background: transparent;
          cursor: pointer;
          text-decoration: none;
          overflow: hidden;
          transition: color .35s, box-shadow .35s;
          z-index: 0;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #fe5f00;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform .42s cubic-bezier(.4,0,.2,1);
          z-index: -1;
        }
        .cta-btn:hover::before { transform: scaleX(1); }
        .cta-btn:hover {
          color: #000;
          box-shadow: 0 0 30px 8px rgba(254,95,0,.45), 0 0 70px 16px rgba(254,95,0,.18);
        }
        .cta-btn:active { transform: scale(.97); }

        /* particles */
        .cta-btn .particles { position:absolute;inset:0;pointer-events:none;overflow:hidden; }
        .cta-btn .particle {
          position:absolute; bottom:-8px;
          width:4px; height:4px; border-radius:50%;
          background:#fe5f00; opacity:0;
        }
        @keyframes rise1 { 0%{opacity:.9;transform:translateY(0) scale(1)} 100%{opacity:0;transform:translateY(-52px) translateX(-12px) scale(.3)} }
        @keyframes rise2 { 0%{opacity:.8;transform:translateY(0) scale(1)} 100%{opacity:0;transform:translateY(-44px) translateX(10px)  scale(.2)} }
        @keyframes rise3 { 0%{opacity:.7;transform:translateY(0) scale(1)} 100%{opacity:0;transform:translateY(-60px) translateX(4px)   scale(.4)} }
        @keyframes rise4 { 0%{opacity:.9;transform:translateY(0) scale(1)} 100%{opacity:0;transform:translateY(-38px) translateX(-6px)  scale(.25)} }
        @keyframes rise5 { 0%{opacity:.6;transform:translateY(0) scale(1)} 100%{opacity:0;transform:translateY(-56px) translateX(14px)  scale(.35)} }
        @keyframes rise6 { 0%{opacity:.8;transform:translateY(0) scale(1)} 100%{opacity:0;transform:translateY(-48px) translateX(-16px) scale(.2)} }
        .cta-btn:hover .p1 { animation: rise1 .9s  ease-out .00s infinite; left:10%; }
        .cta-btn:hover .p2 { animation: rise2 .8s  ease-out .15s infinite; left:26%; }
        .cta-btn:hover .p3 { animation: rise3 1.0s ease-out .05s infinite; left:44%; }
        .cta-btn:hover .p4 { animation: rise4 .85s ease-out .20s infinite; left:60%; }
        .cta-btn:hover .p5 { animation: rise5 .95s ease-out .10s infinite; left:76%; }
        .cta-btn:hover .p6 { animation: rise6 .8s  ease-out .25s infinite; left:88%; }

        /* arrow nudge */
        .cta-btn .btn-arrow { display:inline-block; transition:transform .35s; }
        .cta-btn:hover .btn-arrow { transform: translateX(5px); }

        /* expanding rings — concrete ripple */
        .cta-btn .ring {
          position:absolute; inset:-8px;
          border:1px solid rgba(254,95,0,.25);
          pointer-events:none;
          transition: inset .35s ease, opacity .35s ease;
          opacity:0;
        }
        .cta-btn:hover .ring { inset:-16px; opacity:1; }
        .cta-btn .ring2 {
          position:absolute; inset:-18px;
          border:1px solid rgba(254,95,0,.10);
          pointer-events:none;
          transition: inset .5s ease, opacity .5s ease;
          opacity:0;
        }
        .cta-btn:hover .ring2 { inset:-28px; opacity:1; }
      `}</style>

      <section
        className="bg-black font-['Barlow',sans-serif] overflow-x-hidden"
        id="gallery"
      >
        {/* ── HERO HEADER ── */}
        <div className="relative border-b border-orange-900/20 px-6 py-16 md:py-24 text-center overflow-hidden">
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(254,95,0,0.07), transparent 70%)",
            }}
          />

          {/* Tag */}
          <p
            className={`text-xs font-bold tracking-widest uppercase mb-4 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              color: "#fe5f00",
              fontFamily: "'Barlow Condensed', sans-serif",
              transitionDelay: "0ms",
            }}
          >
            Our Work
          </p>

          {/* Heading */}
          <h1
            className={`font-black uppercase leading-none transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              transitionDelay: "120ms",
            }}
          >
            <span className="text-white">Project </span>
            <span style={{ color: "#fe5f00" }}>Gallery</span>
          </h1>

          {/* Divider line */}
          <div
            className={`mx-auto mt-5 h-0.5 rounded-full transition-all duration-700 ${
              mounted ? "opacity-100 w-12" : "opacity-0 w-0"
            }`}
            style={{
              background: "#fe5f00",
              transitionDelay: "240ms",
            }}
          />

          {/* Coming soon message */}
          <p
            className={`mt-6 text-white/50 text-sm md:text-base leading-relaxed transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "360ms" }}
          >
            <span
              className="inline-block border border-orange-900/30 rounded px-4 py-2 text-white/60 text-sm tracking-wide"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              We are adding our gallery shortly — keep visiting
            </span>
          </p>
        </div>

        {/* ── MARQUEE STRIP ── */}
        <MarqueeBanner />

        {/* ── INTRO ROW ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-orange-900/20">
          <SlideIn
            from="left"
            delay={0}
            className="px-8 py-12 md:px-12 md:py-16 border-b md:border-b-0 md:border-r border-orange-900/20"
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#fe5f00", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Coming Soon
            </p>
            <div className="w-9 h-0.5 mb-5 rounded-full" style={{ background: "#fe5f00" }} />
            <h2
              className="font-black uppercase leading-none mb-4 text-white"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              }}
            >
              Our <span style={{ color: "#fe5f00" }}>Projects</span> Are On Their Way
            </h2>
            <p className="text-white/60 leading-relaxed text-sm md:text-base">
              We're curating a showcase of our finest concrete, masonry, and remodeling
              work — from residential driveways to large-scale commercial paving.
              Check back soon to see the craftsmanship firsthand.
            </p>
          </SlideIn>

          <SlideIn
            from="right"
            delay={200}
            className="px-8 py-12 md:px-12 md:py-16 flex flex-col justify-center"
          >
            <div className="space-y-5">
              {[
                ["Concrete & Paving", "Driveways, walkways, patios & commercial slabs"],
                ["Masonry", "Brickwork, stonework & retaining walls"],
                ["Remodeling", "Kitchen, bathroom & full interior renovations"],
              ].map(([title, desc], i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div
                    className="w-2 h-2 mt-1.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-150"
                    style={{ background: "#fe5f00" }}
                  />
                  <div>
                    <p
                      className="text-white font-bold text-sm uppercase tracking-wide"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {title}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>

        {/* ── PLACEHOLDER GRID ── */}
        <div className="px-6 md:px-10 lg:px-16 py-14 md:py-20">
          <FadeUp delay={0} className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-1"
                style={{ color: "#fe5f00", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Portfolio
              </p>
              <h3
                className="text-white font-black uppercase leading-none"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
                }}
              >
                Photos Loading{" "}
                <span style={{ color: "#fe5f00" }}>Soon</span>
              </h3>
            </div>
            <span
              className="inline-flex items-center gap-2 border border-orange-900/30 rounded px-4 py-2 text-xs tracking-widest uppercase text-white/40 self-start sm:self-auto"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#fe5f00" }}
              />
              We are adding our gallery shortly — keep visiting
            </span>
          </FadeUp>

          {/* Responsive grid: 1 col → 2 col → 3 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-orange-900/10">
            {Array.from({ length: placeholderCount }).map((_, i) => (
              <div key={i} className="bg-black">
                <PlaceholderCard index={i} delay={Math.min(i * 80, 400)} />
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM CTA STRIP ── */}
        <FadeUp delay={0}>
          <div className="border-t border-orange-900/20 px-6 md:px-12 py-14 md:py-20 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(254,95,0,0.06), transparent 70%)",
              }}
            />
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#fe5f00", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Get In Touch
            </p>
            <h3
              className="font-black uppercase leading-none text-white mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              Ready to start your{" "}
              <span style={{ color: "#fe5f00" }}>project?</span>
            </h3>
            <p className="text-white/50 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
              While our gallery is being prepared, we're ready to take on your next
              concrete or remodeling project. Contact us for a free estimate.
            </p>
            {/* ── Glow CTA → scrolls to <div id="contact"><ContactSection /></div> ── */}
            <a href="#contact" className="cta-btn">
              <span className="ring" />
              <span className="ring2" />
              <span className="particles">
                <span className="particle p1" />
                <span className="particle p2" />
                <span className="particle p3" />
                <span className="particle p4" />
                <span className="particle p5" />
                <span className="particle p6" />
              </span>
              <svg
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"
                style={{ flexShrink: 0, position: "relative", zIndex: 1 }}
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3 C16 7 16 17 12 21" />
                <path d="M12 3 C8 7 8 17 12 21" />
                <line x1="3" y1="12" x2="21" y2="12" />
              </svg>
              <span style={{ position: "relative", zIndex: 1 }}>
                Request a Free Estimate
              </span>
              <span className="btn-arrow" style={{ position: "relative", zIndex: 1 }}>
                →
              </span>
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}