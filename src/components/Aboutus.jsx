import { useEffect, useRef, useState } from "react";

/* ── Intersection Observer hook ── */
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

/* ── Counter hook ── */
function useCounter(target, duration, active) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

/* ── Stat card ── */
function StatCard({ value, suffix, label, displayFn, active, delay }) {
  const raw = useCounter(value, 2200, active);
  return (
    <div
      className={`flex flex-col items-center justify-center py-12 px-6 text-center transition-all duration-700
        ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: active ? `${delay}ms` : "0ms" }}
    >
      <span
        className="font-black leading-none tracking-tight"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(3.5rem, 8vw, 6rem)",
          color: "#fe5f00",
        }}
      >
        {displayFn ? displayFn(raw, value) : raw}{suffix}
      </span>
      <span className="mt-3 text-white font-medium tracking-wide text-sm md:text-base">
        {label}
      </span>
    </div>
  );
}

/* ── Block Inner Content ── */
function BlockInner({ tag, titleWhite, titleOrange, paragraphs }) {
  return (
    <>
      <p
        className="text-xs font-bold tracking-widest uppercase mb-3"
        style={{ color: "#fe5f00", fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {tag}
      </p>
      <div className="w-9 h-0.5 mb-5 rounded-full" style={{ background: "#fe5f00" }} />
      <h2
        className="font-black uppercase leading-none mb-6 text-white"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        }}
      >
        {titleWhite}
        <span style={{ color: "#fe5f00" }}>{titleOrange}</span>
      </h2>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className={`text-white/70 leading-relaxed text-sm md:text-base ${
            i < paragraphs.length - 1 ? "mb-4" : ""
          }`}
        >
          {p}
        </p>
      ))}
    </>
  );
}

/* ── Sequential ladder: both blocks share one observer,
       block 0 appears immediately, block 1 appears after a delay ── */
function LadderSection({ blocks }) {
  const [ref, inView] = useInView(0.1);

  /* block 0 → visible as soon as section enters view
     block 1 → visible 500ms after block 0             */
  const [show0, setShow0] = useState(false);
  const [show1, setShow1] = useState(false);

  useEffect(() => {
    if (!inView) return;
    // Block 0 appears immediately
    setShow0(true);
    // Block 1 appears 500ms later
    const t = setTimeout(() => setShow1(true), 500);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <div ref={ref}>
      {blocks.map((block, i) => {
        const visible = i === 0 ? show0 : show1;
        const isRight = block.side === "right";

        const slideClass = visible
          ? "opacity-100 translate-x-0"
          : isRight
          ? "opacity-0 translate-x-16"
          : "opacity-0 -translate-x-16";

        return (
          <div key={i} className="relative grid grid-cols-1 md:grid-cols-2">

            {/* Vertical spine */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: "rgba(254,95,0,0.2)" }}
            />

            {/* Dot on spine */}
            <div
              className="hidden md:block absolute left-1/2 top-1/2 w-3 h-3 rounded-full border-2 z-10 -translate-x-1/2 -translate-y-1/2 transition-colors duration-500"
              style={{
                borderColor: "#fe5f00",
                background: visible ? "#fe5f00" : "#000",
                transitionDelay: "300ms",
              }}
            />

            {/* Left cell */}
            <div
              className={`
                ${isRight ? "hidden md:block" : ""}
                ${!isRight ? "border-b md:border-b-0 md:border-r border-orange-900/20" : ""}
                ${!isRight ? `transition-all duration-700 ${slideClass}` : ""}
              `}
            >
              {!isRight && (
                <div className="px-8 py-12 md:px-12 lg:px-16 lg:py-16">
                  <BlockInner {...block} />
                </div>
              )}
            </div>

            {/* Right cell */}
            <div
              className={`
                ${!isRight ? "hidden md:block" : ""}
                ${isRight ? "border-b md:border-b-0 md:border-l border-orange-900/20" : ""}
                ${isRight ? `transition-all duration-700 ${slideClass}` : ""}
              `}
            >
              {isRight && (
                <div className="px-8 py-12 md:px-12 lg:px-16 lg:py-16">
                  <BlockInner {...block} />
                </div>
              )}
            </div>

          </div>
        );
      })}
    </div>
  );
}

/* ── Hero word reveal ── */
function HeroWord({ word, orange, delay, visible }) {
  return (
    <span
      className={`inline-block transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        color: orange ? "#fe5f00" : "#fff",
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 900,
        fontSize: "clamp(3rem, 9vw, 7rem)",
        lineHeight: 0.95,
        textTransform: "uppercase",
        marginRight: "0.3em",
      }}
    >
      {word}
    </span>
  );
}

/* ── Main component ── */
export default function AboutUs() {
  const [heroRef, heroInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.2);

  const blocks = [
    {
      tag: "Our Specialties",
      titleWhite: "What We ",
      titleOrange: "Do",
      paragraphs: [
        <>
          Welcome to{" "}
          <strong style={{ color: "#fe5f00" }}>Wilches Ready Mix Concrete Inc</strong>, a
          leading Concrete Paving Contractor. If you're looking for a reliable, trustworthy,
          and efficient contractor to tackle your projects, then you've come to the right place.
        </>,
        <>
          With a diverse portfolio of contracting work, we have the experience to manage a large
          variety of different projects. Contact us for any{" "}
          <strong style={{ color: "#fe5f00" }}>
            concrete, masonry, kitchen and bathroom remodeling
          </strong>
          , and window refurbishing.
        </>,
      ],
      side: "left",
    },
    {
      tag: "Our History",
      titleWhite: "Our ",
      titleOrange: "Story",
      paragraphs: [
        <>
          With over{" "}
          <strong style={{ color: "#fe5f00" }}>20 years of experience</strong>, Wilches Ready
          Mix Concrete Inc has been recognized as a top Concrete Paving Contractor in Ontario.
          We've provided clients with a wide range of contracting services for all their
          remodeling and repairing needs.
        </>,
        <>
          Whether you're looking to renovate your existing space or add a whole new extension,{" "}
          <strong style={{ color: "#fe5f00" }}>
            we are happy to help you achieve the results you seek
          </strong>
          . Contact us today to receive a free estimate.
        </>,
      ],
      side: "right",
    },
  ];

  const stats = [
    { value: 20, suffix: "+", label: "Years of Excellence", delay: 0 },
    {
      value: 1500,
      suffix: "+",
      label: "Projects Completed Across Toronto",
      delay: 150,
      displayFn: (raw, max) =>
        raw >= max ? "1.5K" : raw >= 1000 ? (raw / 1000).toFixed(1) + "K" : raw,
    },
    { value: 1, suffix: "", label: "Total Plants in GTA", delay: 300 },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section
        className="bg-black font-['Barlow',sans-serif] overflow-x-hidden pt-24"
        id="about"
      >
        {/* ── HERO ── */}
        <div
          ref={heroRef}
          className="relative flex flex-col items-center justify-center min-h-[28vh] px-6 py-20 text-center border-b border-orange-900/20"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(254,95,0,0.07), transparent 70%)",
            }}
          />

          <p
            className={`text-xs font-bold tracking-widest uppercase mb-4 transition-all duration-700
              ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              color: "#fe5f00",
              fontFamily: "'Barlow Condensed', sans-serif",
              transitionDelay: "0ms",
            }}
          >
            Who We Are
          </p>

          <div className="flex flex-wrap justify-center">
            <HeroWord word="About" delay={120} visible={heroInView} />
            <HeroWord word="Us" orange delay={240} visible={heroInView} />
          </div>

          <div
            className={`h-0.5 w-12 mt-5 rounded-full transition-all duration-700
              ${heroInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            style={{
              background: "#fe5f00",
              transitionDelay: "360ms",
              transformOrigin: "left",
            }}
          />
        </div>

        {/* ── LADDER: What We Do → then Our Story ── */}
        <LadderSection blocks={blocks} />

        {/* ── STATS ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 border-t border-orange-900/20"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-b sm:border-b-0 sm:border-r border-orange-900/20 last:border-r-0 relative overflow-hidden group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(254,95,0,0.06), transparent 70%)",
                }}
              />
              <StatCard
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                displayFn={s.displayFn}
                active={statsInView}
                delay={s.delay}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}