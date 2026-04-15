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

/* ─── Data ───────────────────────────────────────────────────── */
const additionalServices = [
  {
    id: "05",
    title: "SCC Mixes",
    subtitle: "Self-Compacting Concrete",
    img: "/media/residential.jpg",
    desc: "Our SCC mixes have excellent flowing properties that are ideal for placing concrete where consolidation of concrete is impossible using vibration.",
    tag: "Specialty Mix",
    modalTitle: "SCC Mixes",
    modalSubtitle: "Self-Compacting Concrete",
    modalIntro:
      "Our SCC mixes have excellent flowing properties, making them ideal for placing concrete in situations where consolidation using vibration is impossible. In scenarios such as confined spaces, structures with tightly placed rebars, and reinforced caisson structures, SCC is an excellent choice. SCC can also be used to create beautiful and complex structural components that are exposed and require a superior finish, such as architectural walls, curves, and more.",
    modalPoints: [
      "No vibration needed for consolidation.",
      "Ideal for the tightest rebar reinforcement conditions.",
      "Excellent choice for achieving an architectural finish.",
      "Sustainable solution due to superior compressive strength and high-early strength properties, reducing the overuse of conventional concrete.",
    ],
  },
  {
    id: "06",
    title: "Cold-Crete",
    subtitle: "Winter-Ready Formula",
    img: "/media/worker.jpg",
    desc: "Thanks to ColdCrete concrete, contractors can place concrete in temperatures as low as -7°C (19°F) without compromising quality.",
    tag: "Year-Round",
    modalTitle: "Cold-Crete",
    modalSubtitle: "Winter-Ready Formula",
    modalIntro:
      "Thanks to ColdCrete concrete from Metrocon Ready Mix Corp., contractors can continue placing concrete in colder weather, down to -7°C (19°F), without compromising its quality. If concrete freezes before it sets, it loses its setting properties and may not set at all. To prevent this, Metrocon uses specialized chemicals that ensure the concrete sets before freezing. All our products meet the performance requirements specified by CSA.",
    modalPoints: [
      "Cold Weather Placement: Allows concrete placement in sub-zero temperatures without compromising quality.",
      "Cost Efficiency: Reduces overall project costs by enabling concrete placement during the winter season.",
      "High-Early Strength: Allows contractors to strip formwork early, reducing labor costs.",
      "Excellent Workability: Maintains workability in cold weather without segregation or bleeding issues.",
      "Customizable Mixes: Offers different levels of ColdCrete mixes to suit contractors' requirements.",
    ],
  },
  {
    id: "07",
    title: "Strength Mixes",
    subtitle: "High-Performance Builds",
    img: "/media/engineer.jpg",
    desc: "Provides high-strength mixes that open up vast possibilities in the structural design realm as well as sustainability of our planet.",
    tag: "High-Strength",
    modalTitle: "High Strength Mixes",
    modalSubtitle: "High-Performance Builds",
    modalIntro:
      "Metrocon Ready Mix Corp. provides high-strength mixes that open up vast possibilities in structural design and contribute to the sustainability of our planet.",
    modalPoints: [
      "Lower Volume Requirement: Reduces the overall carbon footprint.",
      "Resource Efficiency: Less use of resources and longer service life due to the high strength and rigidity of the concrete mixes.",
      "Cost Efficiency: Lowers overall construction and maintenance costs, thereby further reducing resource usage throughout the structure's service life.",
      "Foundation Optimization: The use of high-strength mixes reduces foundation sizes by minimizing the dead loads of superstructures.",
      "Sustainability: Concrete is produced in local plants using locally available materials, reducing the overall carbon footprint.",
      "Enhanced Workability: Maintains the same workability and excellent pumping properties as conventional concrete, with high early strength for faster project completion.",
    ],
  },
];

/* ─── Detail Modal ───────────────────────────────────────────── */
function DetailModal({ service, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    // Trigger entrance animation after mount
    const t = setTimeout(() => setVisible(true), 10);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 350);
  };

  const handleContactClick = () => {
    handleClose();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center px-0 sm:px-4 transition-all duration-350`}
      style={{
        background: visible ? "rgba(0,0,0,0.82)" : "rgba(0,0,0,0)",
        backdropFilter: visible ? "blur(8px)" : "blur(0px)",
        transition: "background 0.35s ease, backdrop-filter 0.35s ease",
      }}
      onClick={handleClose}
    >
      <div
        className="relative w-full sm:max-w-2xl rounded-t-3xl sm:rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #141414 0%, #0c0c0c 100%)",
          border: "1px solid rgba(254,95,0,0.35)",
          boxShadow: "0 -24px 80px rgba(254,95,0,0.18), 0 0 120px rgba(254,95,0,0.08)",
          maxHeight: "92vh",
          transform: visible ? "translateY(0) scale(1)" : "translateY(60px) scale(0.97)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.4s cubic-bezier(0.34,1.1,0.64,1), opacity 0.35s ease",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Scrollable inner */}
        <div className="overflow-y-auto" style={{ maxHeight: "92vh" }}>

          {/* Image hero */}
          <div className="relative w-full overflow-hidden" style={{ height: "clamp(160px, 35vw, 260px)" }}>
            <img
              src={service.img}
              alt={service.modalTitle}
              className="w-full h-full object-cover"
              style={{
                transform: visible ? "scale(1.0)" : "scale(1.08)",
                transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.85) 100%)"
            }} />

            {/* Tag badge over image */}
            <div className="absolute top-4 left-5">
              <span
                className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  background: "rgba(254,95,0,0.2)",
                  border: "1px solid rgba(254,95,0,0.55)",
                  color: "#fe5f00",
                  backdropFilter: "blur(6px)",
                }}
              >
                {service.tag}
              </span>
            </div>

            {/* ID number over image */}
            <div
              className="absolute bottom-4 right-5 font-black leading-none"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                color: "rgba(254,95,0,0.22)",
              }}
            >
              {service.id}
            </div>

            {/* Title overlaid on image bottom */}
            <div className="absolute bottom-4 left-5">
              <h2
                className="text-white font-black uppercase leading-tight"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
                }}
              >
                {service.modalTitle}
              </h2>
              <p className="text-white/45 text-xs uppercase tracking-widest mt-0.5">
                {service.modalSubtitle}
              </p>
            </div>
          </div>

          {/* Body content */}
          <div className="p-6 sm:p-8">
            {/* Orange divider */}
            <div className="w-10 h-0.5 rounded-full mb-5" style={{ background: "#fe5f00" }} />

            {/* Intro paragraph */}
            <p
              className="text-white/70 leading-relaxed mb-6 text-sm sm:text-base"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              {service.modalIntro}
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-8">
              {service.modalPoints.map((pt, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/70 text-sm sm:text-base"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-12px)",
                    transition: `opacity 0.4s ease ${0.15 + i * 0.07}s, transform 0.4s ease ${0.15 + i * 0.07}s`,
                  }}
                >
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "#fe5f00" }}
                  />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleContactClick}
                className="quote-btn flex-1 py-3.5 sm:py-4 font-black uppercase tracking-widest text-sm sm:text-base text-white rounded-xl cursor-pointer transition-all duration-300"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  background: "rgba(254,95,0,0.1)",
                  border: "1px solid rgba(254,95,0,0.55)",
                }}
              >
                Get a Quote →
              </button>
              <button
                onClick={handleClose}
                className="cancel-modal-btn py-3.5 sm:py-4 px-6 font-black uppercase tracking-widest text-sm sm:text-base rounded-xl cursor-pointer transition-all duration-300"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>

        {/* Animated ✕ close button — top right corner */}
        <button
          onClick={handleClose}
          className="close-x-btn absolute top-4 right-4 z-20 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer"
          style={{
            width: 36,
            height: 36,
            background: "rgba(0,0,0,0.55)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(6px)",
          }}
          aria-label="Close modal"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="close-x-icon"
            style={{ transition: "transform 0.35s cubic-bezier(0.34,1.3,0.64,1)" }}
          >
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Decorative orange corner glow */}
        <div
          className="absolute bottom-0 right-0 pointer-events-none"
          style={{
            width: 200,
            height: 200,
            background: "radial-gradient(circle at bottom right, rgba(254,95,0,0.1), transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Service Card ───────────────────────────────────────────── */
function ServiceCard({ service, delay, onLearnMore }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  const handleContactClick = (e) => {
    e.stopPropagation();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={ref}
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer group
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
      `}
      style={{
        transitionDelay: inView ? `${delay}ms` : "0ms",
        minHeight: 420,
        border: hovered
          ? "1px solid rgba(254,95,0,0.6)"
          : "1px solid rgba(254,95,0,0.15)",
        filter: hovered
          ? "drop-shadow(0 0 22px rgba(254,95,0,0.55)) drop-shadow(0 0 48px rgba(254,95,0,0.25))"
          : "drop-shadow(0 0 10px rgba(254,95,0,0.2)) drop-shadow(0 0 28px rgba(254,95,0,0.08))",
        transition:
          "opacity 0.7s ease-out, transform 0.7s ease-out, filter 0.4s ease, border-color 0.4s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <img
        src={service.img}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.07)" : "scale(1.0)",
          transition: "transform 0.65s cubic-bezier(0.4,0.2,0.2,1)",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: hovered
            ? "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.15) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.08) 100%)",
          transition: "background 0.4s ease",
        }}
      />

      {/* Orange corner glow on hover */}
      <div
        className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none"
        style={{
          background: "radial-gradient(circle at bottom left, rgba(254,95,0,0.18), transparent 70%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Tag badge */}
      <div className="absolute top-5 left-5 z-10">
        <span
          className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            background: "rgba(254,95,0,0.18)",
            border: "1px solid rgba(254,95,0,0.5)",
            color: "#fe5f00",
            backdropFilter: "blur(6px)",
          }}
        >
          {service.tag}
        </span>
      </div>

      {/* ID number */}
      <div
        className="absolute top-4 right-5 z-10 font-black"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          color: hovered ? "rgba(254,95,0,0.25)" : "rgba(255,255,255,0.1)",
          transition: "color 0.4s ease",
          lineHeight: 1,
        }}
      >
        {service.id}
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-7">
        <div className="w-8 h-0.5 rounded-full mb-3" style={{ background: "#fe5f00" }} />
        <h3
          className="text-white font-black uppercase leading-tight mb-1"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
          }}
        >
          {service.title}
        </h3>
        <p className="text-white/45 text-xs uppercase tracking-widest mb-3">
          {service.subtitle}
        </p>

        {/* Description — slides up on hover */}
        <div
          style={{
            maxHeight: hovered ? "120px" : "0px",
            opacity: hovered ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease",
          }}
        >
          <p className="text-white/65 text-sm leading-relaxed mb-4">{service.desc}</p>
        </div>

        {/* Buttons row — appears on hover */}
        <div
          className="flex flex-col sm:flex-row gap-2"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            transitionDelay: hovered ? "0.1s" : "0s",
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onLearnMore(service); }}
            className="learn-more-btn flex-1 px-4 py-2.5 rounded-xl font-black uppercase tracking-widest text-sm text-white cursor-pointer transition-all duration-300"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              background: "rgba(254,95,0,0.12)",
              border: "1px solid rgba(254,95,0,0.7)",
            }}
          >
            Learn More ↗
          </button>
          <button
            onClick={handleContactClick}
            className="contact-btn flex-1 px-4 py-2.5 rounded-xl font-black uppercase tracking-widest text-sm cursor-pointer transition-all duration-300"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Contact Us →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Section Header ─────────────────────────────────────────── */
function Header() {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className="mb-14 lg:mb-18 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end"
    >
      <div>
        <p
          className={`text-xs font-bold tracking-widest uppercase mb-5 transition-all duration-700
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ color: "#fe5f00", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Expert Services
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
          Explore Our{" "}
          <span style={{ color: "#fe5f00" }}>Specialty</span>{" "}
          Concrete Mixes
        </h2>
        <div
          className={`h-0.5 w-12 mt-5 rounded-full transition-all duration-700
            ${inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
          style={{
            background: "#fe5f00",
            transitionDelay: "220ms",
            transformOrigin: "left",
          }}
        />
      </div>
      <p
        className={`text-white/55 leading-relaxed text-sm md:text-base transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ transitionDelay: "180ms" }}
      >
        From innovative concrete solutions to specialized mixes like SCC and ColdCrete,
        we provide reliable, high-quality concrete for any project. Whether residential,
        commercial, or industrial, we ensure lasting strength and efficiency year-round.
      </p>
    </div>
  );
}

/* ─── Main Export ────────────────────────────────────────────── */
export default function AdditionalServices() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .learn-more-btn:hover {
          background: rgba(254,95,0,0.22) !important;
          border-color: #fe5f00 !important;
          animation: learnGlow 1.5s ease-in-out infinite;
        }
        .learn-more-btn:active { transform: scale(0.97); }

        .contact-btn:hover {
          background: rgba(255,255,255,0.1) !important;
          border-color: rgba(255,255,255,0.35) !important;
          color: #fff !important;
        }
        .contact-btn:active { transform: scale(0.97); }

        .quote-btn:hover {
          background: rgba(254,95,0,0.22) !important;
          border-color: #fe5f00 !important;
          animation: learnGlow 1.5s ease-in-out infinite;
        }
        .quote-btn:active { transform: scale(0.97); }

        .cancel-modal-btn:hover {
          background: rgba(255,255,255,0.09) !important;
          border-color: rgba(255,255,255,0.28) !important;
          color: rgba(255,255,255,0.85) !important;
        }
        .cancel-modal-btn:active { transform: scale(0.97); }

        .close-x-btn:hover {
          background: rgba(254,95,0,0.18) !important;
          border-color: rgba(254,95,0,0.6) !important;
          color: #fe5f00 !important;
        }
        .close-x-btn:hover .close-x-icon {
          transform: rotate(90deg) !important;
        }
        .close-x-btn:active { transform: scale(0.9); }

        @keyframes learnGlow {
          0%, 100% { box-shadow: 0 0 8px 2px rgba(254,95,0,0.35), 0 0 24px 6px rgba(254,95,0,0.15); }
          50%       { box-shadow: 0 0 20px 6px rgba(254,95,0,0.6), 0 0 50px 14px rgba(254,95,0,0.25); }
        }
      `}</style>

      <section
        id="additional-services"
        className="bg-black font-['Barlow',sans-serif] overflow-x-hidden px-6 py-20 md:px-12 lg:px-20"
      >
        <Header />

        {/* Ladder / zigzag layout */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {additionalServices.map((s, i) => (
            <div
              key={s.id}
              className={`flex w-full ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className="w-full sm:w-4/5 lg:w-3/5 xl:w-1/2">
                <ServiceCard service={s} delay={i * 140} onLearnMore={setActiveModal} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {activeModal && (
        <DetailModal service={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}