import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function TypesOfConcreteMix() {
  const mixComparison = [
    { type: "Standard Ready Mix", usage: "Driveways, patios, general slabs", feature: "25–30 MPa strength range" },
    { type: "High-Strength Mix", usage: "Industrial floors, heavy foundations", feature: "35–40+ MPa strength range" },
    { type: "SCC Mix (Self-Compacting)", usage: "Complex formwork, tight access", feature: "Self-consolidating without vibration" },
    { type: "Cold-Crete", usage: "Winter and late-season pours", feature: "Low temperature engineered" },
    { type: "Custom PSI", usage: "Engineer-specified projects", feature: "Batched to exact engineer specifications" },
  ];

  const curingTimes = [
    { temp: "Above 20°C", initial: "4–6 hours", full: "28 days", notes: "Summer ideal" },
    { temp: "10–20°C", initial: "6–10 hours", full: "28–35 days", notes: "Spring and fall" },
    { temp: "5–10°C", initial: "10–16 hours", full: "35–45 days", notes: "Cold-Crete recommended" },
    { temp: "Below 5°C", initial: "16+ hours", full: "45+ days", notes: "Cold-Crete required" },
  ];

  const faqs = [
    {
      q: "What is the most common type of concrete mix for driveways?",
      a: "Standard ready mix, typically in the 25–30 MPa range, is the most common choice for residential driveways across the GTA. Among all the types of concrete mix available, it offers enough strength for vehicle traffic while keeping costs reasonable."
    },
    {
      q: "Can I use standard mix for a commercial floor?",
      a: "It depends on the load. Light commercial use may be fine with standard mix, but anything involving heavy equipment, forklifts, or continuous vehicle traffic should use a high-strength mix rated for that specific load."
    },
    {
      q: "Is Cold-Crete more expensive than standard mix?",
      a: "Yes, slightly, because it includes additional accelerating admixtures to manage low-temperature curing. However, the added cost is generally far less than the cost of repairing freeze-damaged concrete."
    },
    {
      q: "How do I know which MPa rating I need?",
      a: "For most residential work, 25–30 MPa is standard. For anything structural, industrial, or municipal, your project should follow the MPa or PSI specification provided by a structural engineer."
    },
    {
      q: "What makes self-compacting concrete different from regular concrete?",
      a: "SCC is formulated to flow into formwork without vibration, thanks to specialized admixtures. It's typically used where reinforcement is dense or access is difficult, not for open, simple pours."
    },
    {
      q: "Do you deliver different mix types the same day?",
      a: "In most cases, yes. Call our team directly to confirm availability for your specific mix type and delivery area in the GTA."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Types of Concrete Mix: A Complete Guide for GTA Projects"
        description="Learn the different types of concrete mix, their strengths, and which one fits your project. Expert guidance from Wilches Ready Mix, Ontario."
        canonical="https://wilchesreadymix.com/types-of-concrete-mix/"
        keywords="types of concrete mix, concrete mix ratio, high strength concrete, self compacting concrete, Cold-Crete Ontario, concrete MPa rating, ready mix concrete GTA"
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
          "headline": "Types of Concrete Mix: Which One Is Right for Your Project?",
          "description": "Learn the different types of concrete mix, their strengths, and which one fits your project. Expert guidance from Wilches Ready Mix, Ontario.",
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
          "mainEntityOfPage": "https://wilchesreadymix.com/types-of-concrete-mix/"
        })}
      </script>

      <div className="bg-black text-white font-['Barlow',sans-serif] w-full min-h-screen pt-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 py-20 md:py-28 border-b border-orange-900/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(254,95,0,0.12), transparent 70%)" }} />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            
            {/* Category Tag */}
            <span className="inline-block text-sm uppercase tracking-widest text-[#fe5f00] font-bold mb-4 px-3 py-1 bg-orange-950/40 rounded-full border border-orange-900/30">
              Concrete Education
            </span>
            
            <h1 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Types of Concrete Mix: <span style={{ color: "#fe5f00" }}>Which One Is Right for Your Project?</span>
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
              "Not every concrete pour needs the same recipe. A backyard patio, a warehouse floor, and a winter foundation each call for a different blend of cement, aggregate, water, and additives."
            </p>
          </div>
        </section>

        {/* --- INTRO SECTION --- */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              At Wilches Ready Mix, we've supplied concrete across the Greater Toronto Area for over 20 years. The question we hear most often from homeowners and contractors is "Which mix do I actually need?" This guide breaks down the main types of concrete mix used across Ontario, what each one is built for, and how to avoid the costly mistake of ordering the wrong one.
            </p>
          </div>
        </section>

        {/* --- WHY IT MATTERS --- */}
        <section className="px-6 py-12 bg-zinc-950 border-y border-orange-900/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-6 tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Why Understanding <span className="text-[#fe5f00]">Types of Concrete Mix</span> Actually Matters
            </h2>
            <div className="w-12 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                Concrete is a formula, not a single fixed product. The ratio of cement to water, the size and type of aggregate, and any admixtures added all change how the concrete performs once it sets. A mix designed for a driveway will behave very differently under a commercial loading dock than one engineered specifically for that purpose.
              </p>
              <p>
                Ordering based on price alone, without checking the mix design, is one of the most common reasons GTA homeowners end up with cracked slabs or crumbling driveways within a few years. The right mix, matched to the right application, is what determines whether your concrete lasts three years or thirty.
              </p>
            </div>
          </div>
        </section>

        {/* --- BREAKDOWN OF MIX TYPES --- */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              The Core Concrete Mixes <span className="text-[#fe5f00]">Explained</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Standard Ready Mix */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-900/40 rounded-lg flex items-center justify-center mb-6 text-[#fe5f00] font-black text-xl">
                01
              </div>
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Standard Ready Mix
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem] mb-4">
                Standard ready mix is the workhorse of residential concrete work. It typically falls in the 25–30 MPa strength range and is formulated for general-purpose use, including driveways, sidewalks, patios, and garage slabs. Most homeowners in Ajax, Pickering, or Whitby who call us for a driveway pour end up here, since it balances cost, strength, and workability for typical residential loads.
              </p>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                This mix is easy for crews to place and finish, which keeps labour costs down without sacrificing durability for everyday residential use. It's not designed for heavy vehicle traffic or industrial loads, though.
              </p>
            </div>

            {/* High-Strength Mix */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-900/40 rounded-lg flex items-center justify-center mb-6 text-[#fe5f00] font-black text-xl">
                02
              </div>
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                High-Strength Mix
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem] mb-4">
                When a project needs to carry serious weight, such as industrial floors, heavy equipment foundations, or multi-storey structural elements, high-strength mix is the answer. These mixes typically start at 35 MPa and can be engineered well beyond that, depending on the structural engineer's specifications.
              </p>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                High-strength concrete uses a lower water-to-cement ratio and often incorporates supplementary materials like fly ash or silica fume to boost compressive strength. It costs more per cubic yard than standard mix, but for commercial and industrial clients requiring <Link to="/ready-mix-concrete-in-brampton/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete in Brampton</Link> or structural <Link to="/ready-mix-concrete-in-hamilton/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete in Hamilton</Link> for pouring warehouse floors, the extra durability pays for itself by avoiding early-stage cracking and structural failure.
              </p>
            </div>

            {/* Self-Compacting Concrete (SCC) */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-900/40 rounded-lg flex items-center justify-center mb-6 text-[#fe5f00] font-black text-xl">
                03
              </div>
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Self-Compacting Concrete (SCC)
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Self-compacting concrete is a specialty mix designed to flow into place under its own weight, without the need for mechanical vibration. This makes it ideal for projects with dense rebar cages, complex formwork, or tight access points where a vibrator simply can't reach every corner.
              </p>
              <p className="text-white/70 leading-relaxed text-[0.95rem] mt-4">
                SCC is more expensive than standard mixes because of the specialized admixtures required to achieve that flow characteristic, but it saves labour time and produces a smoother, more consistent finish. Contractors working on architectural concrete or congested reinforcement often specify SCC for exactly this reason.
              </p>
            </div>

            {/* Cold-Crete (Winter Formula) */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-900/40 rounded-lg flex items-center justify-center mb-6 text-[#fe5f00] font-black text-xl">
                04
              </div>
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Cold-Crete (Winter Formula)
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Ontario winters don't stop construction, but they do change what's in the mix truck. Cold-Crete is a winter-engineered formula that includes accelerating admixtures and adjusted water content to help concrete set and gain strength even in low temperatures, when standard mixes would set too slowly or risk freeze damage before curing.
              </p>
              <p className="text-white/70 leading-relaxed text-[0.95rem] mt-4">
                Without a cold-weather mix, concrete poured below 5°C can suffer irreversible damage if it freezes before reaching sufficient strength. Cold-Crete is what allows GTA contractors to keep pouring foundations and slabs through late fall and winter.
              </p>
            </div>

            {/* Custom PSI Mixes */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300 md:col-span-2 max-w-2xl mx-auto w-full">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-900/40 rounded-lg flex items-center justify-center mb-6 text-[#fe5f00] font-black text-xl">
                05
              </div>
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Custom PSI Mixes
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Some projects, particularly municipal, industrial, or architecturally specific builds, require a mix engineered to an exact PSI (pounds per square inch) or MPa specification set by a structural engineer. Custom PSI mixes are batched to match that spec precisely, rather than falling into a standard category. This is common on municipal infrastructure work, bridge components, or any project where the building code or engineer's stamp requires documented compressive strength testing.
              </p>
            </div>

          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Comparing the Main Mix Types <span className="text-[#fe5f00]">at a Glance</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
              <p className="text-white/70 text-base max-w-xl mx-auto">
                Use the table below to match your project to the right ready-mix option before you call for a quote.
              </p>
            </div>

            <div className="overflow-x-auto border border-orange-900/30 rounded-xl shadow-lg shadow-orange-900/5">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-zinc-900 border-b border-orange-900/30">
                    <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Mix Type</th>
                    <th className="p-5 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Right For</th>
                    <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Key Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-900/20 bg-zinc-950/40">
                  {mixComparison.map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-900/35 transition-colors">
                      <td className="p-5 font-semibold text-white text-[0.95rem]">{row.type}</td>
                      <td className="p-5 text-white/70 text-[0.9rem]">{row.usage}</td>
                      <td className="p-5 text-white/80 font-medium text-[0.9rem]">{row.feature}</td>
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
              How Curing Time <span className="text-[#fe5f00]">Changes by Mix and Temperature</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/70 text-base max-w-xl mx-auto mb-8">
              Mix type isn't the only variable that affects how your concrete performs. Outdoor temperature at the time of the pour has just as much influence on curing speed and final strength.
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
                  A contractor working on a project requiring <Link to="/ready-mix-concrete-in-brampton/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete in Brampton</Link> for a warehouse extension originally ordered standard ready mix for the loading dock apron, based on a quote that only compared price per yard.
                </p>
                <p>
                  Once our team reviewed the intended use, including daily forklift and truck traffic, we recommended switching to a high-strength mix rated for the actual load. The price difference was modest, but it avoided what would likely have been early surface deterioration under repeated heavy loading.
                </p>
                <p className="italic text-white/60">
                  This is a common pattern: the mix that looks cheapest upfront often isn't the mix that's actually specified for the job.
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
                "This is the second time in a few years that I use their service. Each time they were on time and the drivers were very responsible and zero issue. I will highly recommend their services."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">radiomen123</span>
                <span className="text-white/40 text-xs">5-star Google Review</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
              <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                "I've personally had a great experience with Wilches Ready Mix. They've consistently done an amazing job. It's clear they take pride in their work, and it shows in the quality and reliability of their offerings."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">T.C.</span>
                <span className="text-white/40 text-xs">GTA Contractor</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
              <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                "Perfect concrete on time and exactly what I ordered. No cracks and perfect customer service."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">Tristan Braga</span>
                <span className="text-white/40 text-xs">GTA Homeowner</span>
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
              Get the Right Mix <span style={{ color: "#fe5f00" }}>for Your Project</span>
            </h2>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-left md:text-center">
              <p>
                There are several types of concrete mix available, but the right choice always comes down to what your project actually needs. Choosing the wrong concrete mix is one of the most expensive mistakes a project can make, not because of the concrete itself, but because of what it costs to fix later.
              </p>
              <p>
                Wilches Ready Mix has been helping homeowners, contractors, and municipal clients across the GTA choose the right mix for over 20 years, with more than 1,500 projects completed and a 4.5-star reputation across 2,363 Google reviews.
              </p>
              <p>
                If you're not sure which mix fits your project, call us at 647-891-4740 and our team will walk you through the right option before you order.
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
