import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function HighStrengthConcrete() {
  const concreteComparison = [
    { factor: "Compressive strength", standard: "25–30 MPa", high: "35 MPa and above" },
    { factor: "Typical use", standard: "Driveways, patios, residential slabs", high: "Industrial floors, structural elements, bridge decks" },
    { factor: "Water-to-cement ratio", standard: "Higher", high: "Lower" },
    { factor: "Cost per cubic yard", standard: "Lower", high: "Higher" },
    { factor: "Common admixtures", standard: "Minimal", high: "Superplasticizers, fly ash, silica fume" },
  ];

  const curingTimes = [
    { temp: "Above 20°C", initial: "4–6 hours", full: "28 days", notes: "Summer ideal" },
    { temp: "10–20°C", initial: "6–10 hours", full: "28–35 days", notes: "Spring and fall" },
    { temp: "5–10°C", initial: "10–16 hours", full: "35–45 days", notes: "Cold-Crete recommended" },
    { temp: "Below 5°C", initial: "16+ hours", full: "45+ days", notes: "Cold-Crete required" },
  ];

  const faqs = [
    {
      q: "What MPa is considered high strength concrete?",
      a: "Concrete rated at 35 MPa or above is generally considered high strength, though some industrial and structural applications call for mixes well beyond that, depending on the engineer's specification."
    },
    {
      q: "Is high strength concrete necessary for a residential driveway?",
      a: "Usually not. Standard mix at 25–30 MPa is sufficient for most residential driveways. High strength concrete is typically reserved for commercial, industrial, or structural applications with heavier loads."
    },
    {
      q: "Why does high strength concrete cost more?",
      a: "The lower water-to-cement ratio and additional materials like fly ash or silica fume, along with tighter quality control during batching, add cost compared to standard ready mix."
    },
    {
      q: "How long does high strength concrete take to reach full strength?",
      a: "Like standard concrete, full cure is typically around 28 days under normal temperatures, though the timeline can extend in cold weather without a Cold-Crete formula."
    },
    {
      q: "Can high strength concrete be used outdoors in winter?",
      a: "Yes, when combined with Cold-Crete admixtures for cold-weather curing, following the same precautions used for standard mix during Ontario winters."
    },
    {
      q: "Do you provide testing for high strength concrete?",
      a: "Yes. We supply sample cylinders for compressive strength testing on high strength orders, which is often required for municipal and commercial projects."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="What Is High Strength Concrete? GTA Guide & Uses"
        description="Learn what qualifies as high strength concrete, how it's made, and where GTA contractors use it for industrial and structural projects."
        canonical="https://wilchesreadymix.com/high-strength-concrete/"
        keywords="high strength concrete, high strength concrete mix, industrial concrete Ontario, 35 MPa concrete, commercial concrete GTA, high performance concrete"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Blog Article Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "What Is High Strength Concrete and When Does Your Project Need It",
          "description": "Learn what qualifies as high strength concrete, how it's made, and where GTA contractors use it for industrial and structural projects.",
          "author": {
            "@type": "Organization",
            "name": "Wilches Ready Mix Concrete Inc",
            "url": "https://wilchesreadymix.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Wilches Ready Mix Concrete Inc",
            "logo": {
              "@type": "ImageObject",
              "url": "https://wilchesreadymix.com/media/logo.png"
            }
          },
          "datePublished": "2026-07-06",
          "mainEntityOfPage": "https://wilchesreadymix.com/high-strength-concrete/"
        })}
      </script>

      <div className="bg-black text-white font-['Barlow',sans-serif] w-full min-h-screen pt-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 py-20 md:py-28 border-b border-orange-900/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(254,95,0,0.12), transparent 70%)" }} />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            
            {/* Category Tag */}
            <span className="inline-block text-sm uppercase tracking-widest text-[#fe5f00] font-bold mb-4 px-3 py-1 bg-orange-950/40 rounded-full border border-orange-900/30">
              Commercial &amp; Industrial Guide
            </span>
            
            <h1 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              What Is High Strength Concrete <span style={{ color: "#fe5f00" }}>and When Does Your Project Need It</span>
            </h1>
            
            <div className="w-20 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-white/50 mb-8 font-medium">
              <span>Published by Wilches Ready Mix</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>July 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>6 Min Read</span>
            </div>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light italic">
              "High strength concrete refers to mixes engineered to exceed roughly 35 MPa in compressive strength, well above the range used for most residential slabs and driveways."
            </p>
          </div>
        </section>

        {/* --- INTRO SECTION --- */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              At Wilches Ready Mix, high strength concrete comes up most often with commercial and industrial clients, though some residential projects with unusual load requirements need it too. This guide covers what actually makes concrete "high strength," how it's formulated differently from standard mix, and where it makes sense to specify it.
            </p>
          </div>
        </section>

        {/* --- WHAT MAKES IT HIGH STRENGTH --- */}
        <section className="px-6 py-12 bg-zinc-950 border-y border-orange-900/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-6 tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              What Makes Concrete <span className="text-[#fe5f00]">High Strength</span>
            </h2>
            <div className="w-12 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                The defining factor in high strength concrete is a lower water-to-cement ratio combined with a denser aggregate structure. Reducing water content increases compressive strength, but it also makes the mix harder to place, which is why high strength concrete often includes superplasticizer admixtures to maintain workability without adding extra water that would weaken the final product.
              </p>
              <p>
                Many high strength mixes also incorporate supplementary cementing materials like fly ash or silica fume, which fill microscopic gaps between cement particles and improve both strength and long-term durability. This is part of why high strength concrete costs more per cubic yard than standard mix: the materials and quality control required are more involved.
              </p>
            </div>
          </div>
        </section>

        {/* --- WHERE HIGH STRENGTH IS USED --- */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Where High Strength Concrete <span className="text-[#fe5f00]">Is Actually Used</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              High strength concrete isn't a general-purpose product. It's specified for particular applications where the extra compressive strength directly solves a structural or durability problem that standard mix can't. That is why we provide specialized mixes for builders needing <Link to="/ready-mix-concrete-in-brampton/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete in Brampton</Link> and surrounding areas for heavy industrial warehouse zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Industrial Floors */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Industrial Floors
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Warehouses, manufacturing facilities, and distribution centers deal with constant forklift traffic, heavy racking loads, and point loads from machinery. Standard mix can wear down or crack under this kind of repeated stress. High strength concrete resists surface deterioration far better under sustained industrial use.
              </p>
            </div>

            {/* Structural Columns */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Structural Columns &amp; Foundations
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Multi-storey buildings and heavy structural elements rely on high strength concrete to carry the compressive loads transferred down through columns and foundations. The higher the structure, the more critical this strength becomes to the overall design.
              </p>
            </div>

            {/* Parking Structures */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Parking Structures
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Parking garages combine vehicle loads with exposure to weather, de-icing salts, and freeze-thaw cycling, all at once. High strength concrete, often paired with proper air-entrainment, holds up significantly better in this combination of stresses than standard residential-grade mix.
              </p>
            </div>

            {/* Infrastructure */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Bridge &amp; Municipal Infrastructure
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Bridges, retaining walls, and other municipal infrastructure projects typically require documented strength testing well above residential standards, both for safety and for meeting engineering specifications set by the municipality or province.
              </p>
            </div>

          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                High Strength vs <span className="text-[#fe5f00]">Standard Concrete</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            </div>

            <div className="overflow-x-auto border border-orange-900/30 rounded-xl shadow-lg shadow-orange-900/5">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-zinc-900 border-b border-orange-900/30">
                    <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Factor</th>
                    <th className="p-5 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Standard Mix</th>
                    <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>High Strength Mix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-900/20 bg-zinc-950/40">
                  {concreteComparison.map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-900/35 transition-colors">
                      <td className="p-5 font-semibold text-white text-[0.95rem]">{row.factor}</td>
                      <td className="p-5 text-white/70 text-[0.9rem]">{row.standard}</td>
                      <td className="p-5 text-white/80 font-medium text-[0.9rem]">{row.high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- CURING TIME TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Curing Time <span className="text-[#fe5f00]">For High Strength Concrete</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/70 text-base max-w-xl mx-auto">
              High strength mixes still follow the same general temperature-based curing pattern as standard concrete, though reaching full design strength can take slightly longer given the denser mix design.
            </p>
          </div>

          <div className="border border-orange-900/30 rounded-xl overflow-hidden shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Temperature</th>
                  <th className="p-4 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Initial Set</th>
                  <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Full Cure</th>
                  <th className="p-4 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-900/20 bg-zinc-950/50">
                {curingTimes.map((c, i) => (
                  <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-4 text-white font-semibold text-[0.95rem]">{c.temp}</td>
                    <td className="p-4 text-white/75 text-[0.9rem]">{c.initial}</td>
                    <td className="p-4 text-white/75 text-[0.9rem]">{c.full}</td>
                    <td className="p-4 text-white/50 text-[0.85rem]">{c.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- CASE STUDY (REAL EXAMPLE) --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-6 text-center" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              A Real Example <span className="text-[#fe5f00]">From the GTA</span>
            </h2>
            <div className="w-12 h-1 mx-auto mb-10" style={{ background: "#fe5f00" }} />
            
            <div className="relative bg-zinc-900/50 border border-orange-900/30 p-8 rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#fe5f00]" />
              <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                <p>
                  A distribution center requiring <Link to="/ready-mix-concrete-in-hamilton/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete in Hamilton</Link> was originally quoted standard ready mix for a new loading dock floor, based on a bid that only compared cost per yard against competitors.
                </p>
                <p>
                  Once we reviewed the intended forklift traffic and racking loads, we recommended a high strength mix rated for that specific use. The floor has since handled daily heavy equipment traffic without the early surface wear that a standard mix would likely have shown within the first year or two.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              What GTA <span className="text-[#fe5f00]">Customers Say</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
              <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                "I've personally had a great experience with Wilches Ready Mix. They've consistently done an amazing job. It's clear they take pride in their work, and it shows in the quality and reliability of their offerings."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">T.C.</span>
                <span className="text-white/40 text-xs">GTA Business Owner</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
              <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                "Very good, very friendly, very affordable compared to others, quick response, same day delivery!"
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">Gursharan Marwaha</span>
                <span className="text-white/40 text-xs">Contractor Client</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
              <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                "I ordered concrete on a Saturday evening. They answered the phone when no one else did. Brought me the concrete on time, fair pricing and the driver was very patient."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">Stephen O'Keeffe</span>
                <span className="text-white/40 text-xs">5-star Google Review</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQS --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Frequently Asked <span className="text-[#fe5f00]">Questions</span>
              </h2>
              <div className="w-12 h-1 mx-auto mb-6" style={{ background: "#fe5f00" }} />
            </div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-zinc-900 border border-orange-900/20 p-6 md:p-8 rounded-xl">
                  <h3 className="font-bold text-xl mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {faq.q}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-[0.95rem]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="bg-zinc-900 border-t-4 border-[#fe5f00] py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase leading-none mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              Talk to Us About <span style={{ color: "#fe5f00" }}>High Strength Concrete</span>
            </h2>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-left md:text-center">
              <p>
                High strength concrete solves a specific problem: heavy, sustained, or repetitive loads that standard mix isn't built to handle long-term. Wilches Ready Mix has supplied high strength concrete to commercial and industrial clients across the GTA for over 20 years, with more than 1,500 completed projects and a 4.5-star rating across 2,363 Google reviews.
              </p>
              <p>
                Specifying high strength concrete correctly usually starts with the structural engineer's drawings rather than a general assumption about the project type. We work directly with contractors and engineers to confirm the required MPa rating before batching, so the mix delivered matches exactly what the structural design calls for.
              </p>
              <p>
                Call us at 647-891-4740 to discuss whether your project needs high strength concrete before you order.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <span className="text-white/50 text-sm uppercase tracking-widest mb-2 font-semibold">Phone</span>
                <a href="tel:647-891-4740" className="text-2xl font-bold text-[#fe5f00] hover:text-white transition-colors">647-891-4740</a>
                <a href="tel:+14168352923" className="text-xl font-bold text-white/80 hover:text-[#fe5f00] transition-colors mt-1">+1 416-835-2923</a>
              </div>
              <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-orange-900/30 py-6 md:py-0">
                <span className="text-white/50 text-sm uppercase tracking-widest mb-2 font-semibold">Address</span>
                <span className="text-xl font-bold text-white">32 Taber Rd</span>
                <span className="text-lg text-white/85">Etobicoke, ON M9W 3A7</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white/50 text-sm uppercase tracking-widest mb-2 font-semibold">Hours</span>
                <span className="text-xl font-bold text-white">Open Daily</span>
                <span className="text-lg text-[#fe5f00]">6 am to 6 pm</span>
              </div>
            </div>

            <a href="tel:647-891-4740" className="inline-flex items-center gap-3 bg-[#111] text-[#fe5f00] font-black text-2xl tracking-widest py-4 px-10 rounded-full hover:bg-[#222] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(254,95,0,0.2)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call 647-891-4740
            </a>
          </div>
        </section>

        {/* --- INTERNAL LINKS FOOTER --- */}
        <section className="bg-black border-t border-orange-900/10 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-white/40 text-xs uppercase tracking-widest block mb-4">Internal Links</span>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-base font-medium">
              <Link to="/ready-mix-concrete-delivery-ajax/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Ajax Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-whitby/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Whitby Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-pickering/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Pickering Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-scarborough/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Scarborough Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-barrie/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Barrie Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-oshawa/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Oshawa Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-oakville/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Oakville Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-king-city/" className="text-white/60 hover:text-[#fe5f00] transition-colors">King City Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-newmarket/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Newmarket Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-vaughan/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Vaughan Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-stoney-creek/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Stoney Creek Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-brampton/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Brampton Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-mississauga/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Mississauga Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-etobicoke/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Etobicoke Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-malton/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Malton Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-hamilton/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Hamilton Concrete Delivery</Link>
              <Link to="/contact/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Contact Us</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
