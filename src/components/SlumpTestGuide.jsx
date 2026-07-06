import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function SlumpTestGuide() {
  const slumpResults = [
    { range: "Under 50mm", consistency: "Stiff, dry", use: "Slip-form paving, specialized applications" },
    { range: "75–100mm", consistency: "Standard workability", use: "Driveways, slabs, foundations" },
    { range: "100–150mm", consistency: "High workability", use: "Pumped concrete, congested reinforcement" },
    { range: "Over 150mm", consistency: "Flowable", use: "Self compacting concrete" },
  ];

  const curingTimes = [
    { temp: "Above 20°C", initial: "4–6 hours", full: "28 days", notes: "Summer ideal" },
    { temp: "10–20°C", initial: "6–10 hours", full: "28–35 days", notes: "Spring and fall" },
    { temp: "5–10°C", initial: "10–16 hours", full: "35–45 days", notes: "Cold-Crete recommended" },
    { temp: "Below 5°C", initial: "16+ hours", full: "45+ days", notes: "Cold-Crete required" },
  ];

  const faqs = [
    {
      q: "What is a good slump test result for a driveway?",
      a: "Most residential driveways use concrete with a slump in the 75–100mm range, which balances workability for finishing with the strength specified in the mix design."
    },
    {
      q: "What does it mean if the slump test result is too high?",
      a: "A higher-than-specified slump usually indicates too much water was added to the mix, which can reduce the concrete's final compressive strength and shouldn't be poured without review."
    },
    {
      q: "Is the slump test the same as a strength test?",
      a: "No. The slump test measures workability and consistency, not compressive strength directly. Strength is confirmed separately through cylinder testing after the concrete cures."
    },
    {
      q: "Who performs the slump test on a delivery?",
      a: "Our drivers perform slump checks on site as part of standard delivery procedure, and contractors or inspectors can also request an independent test if needed."
    },
    {
      q: "Can a failed slump test delay my pour?",
      a: "Yes, if a load doesn't meet specification, it should be rejected and replaced rather than poured, which may cause a short delay but protects the long-term integrity of the structure."
    },
    {
      q: "Does self compacting concrete use a slump test?",
      a: "No, SCC is tested with a slump flow test instead, which measures how far the concrete spreads horizontally rather than how far it drops vertically."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Concrete Slump Test: What It Is and Why It Matters"
        description="Understand the concrete slump test, how it's performed, and why it's the most important quality check on a GTA job site."
        canonical="https://wilchesreadymix.com/concrete-slump-test/"
        keywords="concrete slump test, slump test procedure, concrete consistency test, slump cone test, concrete quality control Ontario"
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
          "headline": "Concrete Slump Test: What It Measures and Why It Matters on Site",
          "description": "Understand the concrete slump test, how it's performed, and why it's the most important quality check on a GTA job site.",
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
          "mainEntityOfPage": "https://wilchesreadymix.com/concrete-slump-test/"
        })}
      </script>

      <div className="bg-black text-white font-['Barlow',sans-serif] w-full min-h-screen pt-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 py-20 md:py-28 border-b border-orange-900/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(254,95,0,0.12), transparent 70%)" }} />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            
            {/* Category Tag */}
            <span className="inline-block text-sm uppercase tracking-widest text-[#fe5f00] font-bold mb-4 px-3 py-1 bg-orange-950/40 rounded-full border border-orange-900/30">
              Quality Control &amp; Testing
            </span>
            
            <h1 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Concrete Slump Test: <span style={{ color: "#fe5f00" }}>What It Measures and Why It Matters on Site</span>
            </h1>
            
            <div className="w-20 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-white/50 mb-8 font-medium">
              <span>Published by Wilches Ready Mix</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>July 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>5 Min Read</span>
            </div>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light italic">
              "The concrete slump test is the quickest way to check whether a batch of concrete has the right consistency before it goes into the ground. It takes only a few minutes on site, but it tells the crew whether pouring should proceed at all."
            </p>
          </div>
        </section>

        {/* --- INTRO SECTION --- */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              At Wilches Ready Mix, our drivers perform slump checks as a standard part of every delivery, and contractors sometimes ask why this simple test carries so much weight. This guide explains what a slump test actually measures, how it's performed, and what the results mean for the strength and workability of your pour.
            </p>
          </div>
        </section>

        {/* --- WHAT IT MEASURES --- */}
        <section className="px-6 py-12 bg-zinc-950 border-y border-orange-900/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-6 tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              What the Slump Test <span className="text-[#fe5f00]">Actually Measures</span>
            </h2>
            <div className="w-12 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                A slump test measures the consistency, or workability, of fresh concrete before it sets. It doesn't test compressive strength directly, but consistency is closely tied to the water-to-cement ratio, which is one of the biggest factors influencing final strength. A batch that's too wet will slump more than specified, signaling a weaker mix than what was ordered.
              </p>
              <p>
                The test uses a standardized cone, filled with concrete in layers and rodded to remove air pockets, then lifted straight up. The concrete slumps downward under its own weight, and the distance it drops from the height of the cone is the slump measurement, typically recorded in millimetres or inches.
              </p>
            </div>
          </div>
        </section>

        {/* --- HOW PERFORMED & RESULTS --- */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Procedure &amp; <span className="text-[#fe5f00]">Interpretations</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* How Performed */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                How the Slump Test Is Performed
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem] mb-4">
                The process follows a consistent procedure so results can be compared reliably from batch to batch and site to site. Any deviation from the standard method, such as uneven rodding or a tilted cone, can produce misleading results.
              </p>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                The cone is placed on a flat, non-absorbent surface and filled with concrete in three layers, each rodded 25 times to remove trapped air. Once filled and struck level at the top, the cone is lifted vertically in one smooth motion. The concrete then settles, and the difference between the cone's original height and the top of the slumped concrete is measured and recorded as the slump value.
              </p>
            </div>

            {/* What Results Indicate */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                What Different Slump Results Indicate
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem] mb-4">
                Slump values are typically specified as part of the mix order, since the right consistency depends on the application. A slab that needs to be pumped a long distance requires a different slump than a foundation wall poured directly from the chute. This is a common variable we manage when coordinating our logistics for <Link to="/ready-mix-concrete-delivery-barrie/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete Delivery in Barrie</Link> and northern GTA regions.
              </p>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Low slump (under 50mm) indicates a stiff, dry mix hard to place by hand but ideal for slip-form paving. Medium slump (75-100mm) covers standard driveways, slabs, and foundation walls. High slump (over 150mm) is a fluid mix for SCC or congested reinforcement cages, but on standard orders can signal excess water that weakens final concrete strength.
              </p>
            </div>

          </div>
        </section>

        {/* --- RESULTS TABLE --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Slump Test Results <span className="text-[#fe5f00]">at a Glance</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            </div>

            <div className="overflow-x-auto border border-orange-900/30 rounded-xl shadow-lg shadow-orange-900/5">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-zinc-900 border-b border-orange-900/30">
                    <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Slump Range</th>
                    <th className="p-5 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Consistency</th>
                    <th className="p-5 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Common Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-900/20 bg-zinc-950/40">
                  {slumpResults.map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-900/35 transition-colors">
                      <td className="p-5 font-semibold text-white text-[0.95rem]">{row.range}</td>
                      <td className="p-5 text-white/80 text-[0.9rem] font-medium">{row.consistency}</td>
                      <td className="p-5 text-white/70 text-[0.9rem]">{row.use}</td>
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
              Curing Time <span className="text-[#fe5f00]">by Temperature</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/70 text-base max-w-xl mx-auto mb-8">
              Once the slump test confirms the mix is within specification, curing time is governed primarily by outdoor temperature at the time of the pour.
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
                  On a residential foundation pour requiring <Link to="/ready-mix-concrete-scarborough/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete in Scarborough</Link>, our driver's slump test came back higher than the specification called for, which pointed to excess water in that particular load.
                </p>
                <p>
                  Rather than pour a batch that wouldn't meet the required strength, the load was rejected on site and replaced, avoiding a foundation that could have developed strength issues years down the line. This kind of check is routine, but it only works if it happens before the concrete goes into the ground.
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
                "Perfect concrete on time and exactly what I ordered. No cracks and perfect customer service."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">Tristan Braga</span>
                <span className="text-white/40 text-xs">GTA Homeowner</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
              <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                "This is the second time in a few years that I use their service. Each time they were on time and the drivers were very responsible and zero issue. I will highly recommend their services."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">radiomen123</span>
                <span className="text-white/40 text-xs">Contractor Client</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
              <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                "I've personally had a great experience with Wilches Ready Mix. They've consistently done an amazing job. It's clear they take pride in their work, and it shows in the quality and reliability of their offerings."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">T.C.</span>
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
              Get Concrete That Meets <span style={{ color: "#fe5f00" }}>Specification</span>
            </h2>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-left md:text-center">
              <p>
                The slump test is a small step that protects a much bigger investment. Wilches Ready Mix performs consistency checks on every delivery across the GTA, backed by over 20 years of experience, more than 1,500 completed projects, and a 4.5-star rating across 2,363 Google reviews.
              </p>
              <p>
                Call us at 647-891-4740 to talk through the right slump and mix specification for your next pour.
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
