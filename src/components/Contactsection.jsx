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

/* ── Animated line ── */
function AnimLine({ inView, delay = 0 }) {
  return (
    <div
      className="h-px w-full transition-all duration-700 origin-left"
      style={{
        background: "rgba(254,95,0,0.25)",
        transform: inView ? "scaleX(1)" : "scaleX(0)",
        transitionDelay: `${delay}ms`,
      }}
    />
  );
}

/* ── Custom Dropdown ── */
function Dropdown({ value, onChange, inView, delay }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const options = ["Residential", "Commercial", "Municipality", "Industrial"];

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms`, zIndex: open ? 50 : "auto" }}
    >
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium tracking-wide transition-all duration-300 border focus:outline-none"
        style={{
          background: "rgba(255,255,255,0.04)",
          borderColor: open ? "#fe5f00" : "rgba(254,95,0,0.2)",
          color: value ? "#fff" : "rgba(255,255,255,0.4)",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        <span>{value || "Project Type"}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="#fe5f00" strokeWidth={2} viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Hidden native select for FormSubmit */}
      <select name="project_type" value={value} onChange={() => {}} className="sr-only" aria-hidden="true">
        <option value="">Select</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>

      {open && (
        <div
          className="absolute left-0 right-0 z-50 border border-b-0 overflow-hidden"
          style={{
            background: "#0a0a0a",
            borderColor: "#fe5f00",
            bottom: "100%",
          }}
        >
          {options.map((opt, i) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className="w-full text-left px-5 py-3 text-sm font-medium tracking-wide transition-all duration-200 hover:pl-7 border-b last:border-b-0"
              style={{
                color: value === opt ? "#fe5f00" : "rgba(255,255,255,0.7)",
                borderColor: "rgba(254,95,0,0.1)",
                fontFamily: "'Barlow', sans-serif",
                background: value === opt ? "rgba(254,95,0,0.07)" : "transparent",
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Input Field ── */
function InputField({ name, placeholder, type = "text", inView, delay, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-5 py-4 text-sm font-medium tracking-wide placeholder:text-white/40 text-white bg-transparent border transition-all duration-300 focus:outline-none"
        style={{
          background: "rgba(255,255,255,0.04)",
          borderColor: focused ? "#fe5f00" : "rgba(254,95,0,0.2)",
          fontFamily: "'Barlow', sans-serif",
        }}
      />
    </div>
  );
}

/* ── Main ContactSection ── */
export default function ContactSection() {
  const [heroRef, heroInView] = useInView(0.1);
  const [leftRef, leftInView] = useInView(0.1);
  const [rightRef, rightInView] = useInView(0.1);

  const [projectType, setProjectType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section
        className="bg-black font-['Barlow',sans-serif] overflow-x-hidden"
        id="contact"
      >
        {/* ── HERO HEADING ── */}
        <div
          ref={heroRef}
          className="relative flex flex-col items-center justify-center min-h-[22vh] px-6 py-16 text-center border-b border-orange-900/20"
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(254,95,0,0.07), transparent 70%)",
            }}
          />

          <p
            className={`text-xs font-bold tracking-widest uppercase mb-4 transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ color: "#fe5f00", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Get In Touch
          </p>

          <h2
            className={`font-black uppercase leading-none transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              color: "#fff",
              transitionDelay: "120ms",
            }}
          >
            Contact{" "}
            <span style={{ color: "#fe5f00" }}>Us</span>
          </h2>

          <div
            className={`h-0.5 w-12 mt-5 rounded-full transition-all duration-700 ${heroInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            style={{ background: "#fe5f00", transitionDelay: "280ms", transformOrigin: "left" }}
          />

          <p
            className={`mt-5 text-white/50 text-sm md:text-base max-w-lg transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "380ms" }}
          >
            Fill out the form and our team will get back to you shortly.
          </p>
        </div>

        {/* ── TWO-COLUMN BODY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

          {/* ── LEFT: MAP ── */}
          <div
            ref={leftRef}
            className={`relative border-b lg:border-b-0 lg:border-r border-orange-900/20 transition-all duration-700 ${leftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            {/* Tag */}
            <div className="px-8 pt-10 pb-4 md:px-12 lg:px-16">
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: "#fe5f00", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Find Us
              </p>
              <div className="w-9 h-0.5 mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            </div>

            {/* Map */}
            <div className="px-8 pb-10 md:px-12 lg:px-16 lg:pb-16">
              <div
                className="relative w-full overflow-hidden"
                style={{
                  paddingBottom: "clamp(280px, 50vw, 420px)",
                  border: "1px solid rgba(254,95,0,0.2)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.582534014697!2d-79.57907532373422!3d43.71922404815793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3b48d6dc890d%3A0xd60e3b075554f1a5!2sWilches%20Ready%20Mix%20Concrete%20Inc!5e0!3m2!1sen!2sin!4v1776146693951!5m2!1sen!2sin"
                  title="Wilches Ready Mix Concrete Location"
                  className="absolute inset-0 w-full h-full grayscale"
                  style={{ border: 0, filter: "grayscale(1) invert(0.85) sepia(0.3)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Overlay tint to match dark theme */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "rgba(0,0,0,0.25)", mixBlendMode: "multiply" }}
                />
              </div>

              {/* Address line */}
              <div
                className="mt-5 flex items-start gap-3"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem" }}
              >
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="#fe5f00" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ fontFamily: "'Barlow', sans-serif" }}>
                  Wilches Ready Mix Concrete Inc, Ontario, Toronto, GTA
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <div
            ref={rightRef}
            className={`relative transition-all duration-700 ${rightInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="px-8 pt-10 md:px-12 lg:px-16">
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: "#fe5f00", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Request a Quote
              </p>
              <div className="w-9 h-0.5 mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            </div>

            <div className="px-8 pb-10 md:px-12 lg:px-16 lg:pb-16">
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  style={{ minHeight: 320 }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(254,95,0,0.12)", border: "1px solid #fe5f00" }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="#fe5f00" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p
                    className="font-black uppercase text-white text-2xl"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Message <span style={{ color: "#fe5f00" }}>Sent!</span>
                  </p>
                  <p className="text-white/50 text-sm">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/Wrmm2008@hotmail.com"
                  method="POST"
                  className="flex flex-col gap-4"
                  onSubmit={() => setTimeout(() => setSubmitted(true), 200)}
                >
                  {/* FormSubmit hidden config */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission - Wilches Ready Mix" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://wilchesreadymix.com/thank-you" />

                  <InputField name="name" placeholder="Your Name" inView={rightInView} delay={100} required />
                  <InputField name="email" type="email" placeholder="Your E-mail" inView={rightInView} delay={200} required />
                  <InputField name="phone" type="tel" placeholder="Your Phone" inView={rightInView} delay={300} required />
                  <Dropdown value={projectType} onChange={setProjectType} inView={rightInView} delay={400} />

                  {/* Submit button — split orange/black */}
                  <div
                    className={`mt-2 transition-all duration-700 ${rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: "520ms" }}
                  >
                    <button
                      type="submit"
                      className="w-full relative overflow-hidden group flex items-center justify-center h-14 font-black uppercase tracking-widest text-sm transition-all duration-500"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "0.9rem",
                        letterSpacing: "0.12em",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 28px 6px rgba(254,95,0,0.45), 0 0 60px 10px rgba(254,95,0,0.18)"; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
                    >
                      {/* Left half — orange */}
                      <span
                        className="absolute left-0 top-0 h-full w-1/2 transition-all duration-300 group-hover:w-0"
                        style={{ background: "#fe5f00" }}
                      />
                      {/* Right half — black with orange border */}
                      <span
                        className="absolute right-0 top-0 h-full w-1/2 border border-l-0 transition-all duration-300 group-hover:w-full group-hover:border"
                        style={{
                          background: "#000",
                          borderColor: "#fe5f00",
                        }}
                      />
                      {/* Text */}
                      <span className="relative z-10 flex items-center gap-2" style={{ color: "#fff" }}>
                        Send Message
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── BOTTOM DIVIDER ── */}
        <AnimLine inView={heroInView} delay={500} />
      </section>
    </>
  );
}