import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

// Individual item observer — triggers each element independently
function useItemInView(threshold = 0.1) {
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

const features = [
  {
    id: "01",
    title: "Consistency",
    desc: "Our ready-mix concrete is expertly mixed off-site, ensuring consistent quality and strength on every single pour.",
    img: "/media/consistency.png",
  },
  {
    id: "02",
    title: "Convenience",
    desc: "Save time and effort with concrete delivered straight to your site, ready to pour — exactly when you need it.",
    img: "/media/convenience.png",
  },
  {
    id: "03",
    title: "Cost-Effective",
    desc: "Reduce material waste and labour costs for greater savings across every phase of your project.",
    img: "/media/profit.png",
  },
  {
    id: "04",
    title: "Quality Assurance",
    desc: "Every batch undergoes thorough testing and checks to ensure it's durable, reliable, and meets spec.",
    img: "/media/quality-assurance.png",
  },
];

// Each card observes itself individually for true one-by-one entry
function FeatureCard({ feature, index }) {
  const [ref, inView] = useItemInView(0.15);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`
        flex flex-col sm:flex-row items-stretch
        border-b border-orange-900/20 last:border-b-0
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
    >
      {/* Number + image block */}
      <div
        className={`
          flex items-center justify-center
          w-full sm:w-48 lg:w-56 flex-shrink-0
          py-8 sm:py-0
          border-b sm:border-b-0
          ${isEven ? "sm:border-r" : "sm:border-l sm:order-last"}
          border-orange-900/20 bg-white/[0.02]
        `}
      >
        <div className="flex flex-col items-center gap-3">
          <span
            className="num-pulse font-black leading-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            }}
          >
            {feature.id}
          </span>
          <img
            src={feature.img}
            alt={feature.title}
            className="w-14 h-14 lg:w-16 lg:h-16 object-contain"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(45%) sepia(90%) saturate(700%) hue-rotate(5deg) brightness(110%)",
            }}
          />
        </div>
      </div>

      {/* Text block */}
      <div className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-12 flex-1">
        <div className="w-6 h-0.5 mb-4 rounded-full" style={{ background: "#fe5f00" }} />
        <h3
          className="text-white font-black uppercase mb-3"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
          }}
        >
          {feature.title}
        </h3>
        <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-lg">
          {feature.desc}
        </p>
      </div>
    </div>
  );
}

// Animated wrapper for any element that should slide in individually
function AnimatedItem({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, inView] = useItemInView(0.1);

  const dirMap = {
    up: inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
    left: inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
    right: inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
    scale: inView ? "opacity-100 scale-100" : "opacity-0 scale-90",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${dirMap[direction]} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

export default function Whychooseus({ setPage }) {
  const handleContactClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (setPage) {
      setPage("contact");
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes orangeGlow {
          0%, 100% { box-shadow: 0 0 8px 2px rgba(254,95,0,0.3), 0 0 24px 6px rgba(254,95,0,0.15); }
          50%       { box-shadow: 0 0 18px 6px rgba(254,95,0,0.55), 0 0 48px 14px rgba(254,95,0,0.25); }
        }
        .btn-glow:hover {
          animation: orangeGlow 1.6s ease-in-out infinite;
          border-color: rgba(254,95,0,0.9) !important;
        }
        @keyframes numPulse {
          0%, 100% { color: rgba(255,255,255,0.2); text-shadow: none; }
          50%       { color: rgba(255,255,255,0.95); text-shadow: 0 0 20px rgba(255,255,255,0.6); }
        }
        .num-pulse {
          animation: numPulse 2s ease-in-out infinite;
        }
      `}</style>

      <section
        className="bg-black font-['Barlow',sans-serif] overflow-x-hidden"
        id="why"
      >
        {/* ── Section header ── */}
        <div className="border-b border-orange-900/20 px-6 py-14 md:px-12 lg:px-20 text-center relative">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(254,95,0,0.06), transparent 70%)",
            }}
          />

          {/* Label */}
          <AnimatedItem delay={0} direction="up">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "#fe5f00", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Why Choose Us
            </p>
          </AnimatedItem>

          {/* Logo */}
          <AnimatedItem delay={100} direction="scale" className="flex justify-center mb-8">
            <img
              src="/media/logo.png"
              alt="Wilches Ready Mix Concrete Inc"
              className="h-24 md:h-28 lg:h-32 object-contain drop-shadow-lg"
            />
          </AnimatedItem>

          {/* Heading */}
          <AnimatedItem delay={180} direction="up">
            <h2
              className="font-black uppercase leading-none text-white"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 6vw, 4.5rem)",
              }}
            >
              Why{" "}
              <span style={{ color: "#fe5f00" }}>Wilches</span>
              {" "}Ready Mix Concrete?
            </h2>
          </AnimatedItem>

          {/* Divider line */}
          <AnimatedItem delay={300} direction="scale" className="flex justify-center mt-5">
            <div
              className="h-0.5 w-12 rounded-full"
              style={{ background: "#fe5f00" }}
            />
          </AnimatedItem>
        </div>

        {/* ── Main grid: left intro + right feature cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5">

          {/* Left panel */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-orange-900/20 px-8 py-14 lg:px-12 lg:py-16 flex flex-col justify-between gap-10">

            <div>
              {/* Label */}
              <AnimatedItem delay={0} direction="left">
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-5"
                  style={{ color: "#fe5f00", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Our Commitment
                </p>
              </AnimatedItem>

              {/* First paragraph */}
              <AnimatedItem delay={120} direction="left">
                <p className="text-white/70 leading-relaxed text-sm md:text-base mb-6">
                  We are proud to offer reliable ready-mix concrete delivery across the{" "}
                  <strong style={{ color: "#fe5f00" }}>Greater Toronto Area</strong>, serving cities
                  including Mississauga, Brampton, Oakville, Milton, Etobicoke, Burlington,
                  Hamilton, Vaughan, Toronto, Scarborough, Richmond Hill, Markham, Ajax, Pickering,
                  Whitby, Newmarket, Aurora, Thornhill, and Stouffville.
                </p>
              </AnimatedItem>

              {/* Second paragraph */}
              <AnimatedItem delay={220} direction="left">
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  Wherever your project is in the GTA, you can count on us for timely, efficient
                  service delivered with{" "}
                  <strong style={{ color: "#fe5f00" }}>precision and professionalism</strong>.
                </p>
              </AnimatedItem>
            </div>

            {/* CTA button */}
            <AnimatedItem delay={340} direction="up">
              <button
                onClick={handleContactClick}
                className="btn-glow inline-flex items-center gap-3 px-7 py-4 border border-orange-500/60 text-white font-bold uppercase tracking-widest text-sm hover:bg-orange-500/10 active:scale-95 transition-all duration-300 cursor-pointer"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "#fe5f00" }}
                />
                Request Concrete Delivery
              </button>
            </AnimatedItem>
          </div>

          {/* Right feature cards — each card self-observes */}
          <div className="lg:col-span-3 flex flex-col">
            {features.map((f, i) => (
              <FeatureCard key={f.id} feature={f} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}