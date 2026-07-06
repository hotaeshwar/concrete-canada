import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function MixRatioGuide() {
  const ratioComparison = [
    { ratio: "1:2:4 (General Purpose)", strength: "20–25 MPa", use: "Pathways, light-duty slabs, garden walks" },
    { ratio: "1:1.5:3 (Standard Structural)", strength: "25–30 MPa", use: "Driveways, standard foundations, garage slabs" },
    { ratio: "1:1:2 (High Strength)", strength: "35+ MPa", use: "Industrial floors, structural columns, heavy equipment pads" },
    { ratio: "Engineer-specified", strength: "Custom PSI/MPa", use: "Municipal and specialty infrastructure projects" },
  ];

  const curingTimes = [
    { temp: "Above 20°C", initial: "4–6 hours", full: "28 days", notes: "Summer ideal" },
    { temp: "10–20°C", initial: "6–10 hours", full: "28–35 days", notes: "Spring and fall" },
    { temp: "5–10°C", initial: "10–16 hours", full: "35–45 days", notes: "Cold-Crete recommended" },
    { temp: "Below 5°C", initial: "16+ hours", full: "45+ days", notes: "Cold-Crete required" },
  ];

  const faqs = [
    {
      q: "What is the best concrete mix ratio for a driveway?",
      a: "A 1:1.5:3 ratio, producing roughly 25–30 MPa, is standard for residential driveways across the GTA. It provides enough strength for regular vehicle traffic while remaining cost-effective."
    },
    {
      q: "Can I calculate my own concrete mix ratio at home?",
      a: "You can for very small jobs, but hand-mixed ratios are inconsistent because aggregate and water measurements vary. For anything beyond minor repairs, batched ready mix delivers more reliable, predictable strength."
    },
    {
      q: "Does a higher cement ratio always mean stronger concrete?",
      a: "Generally yes, up to a point, but too much cement relative to aggregate can increase shrinkage cracking. A properly engineered ratio balances strength with dimensional stability."
    },
    {
      q: "What mix ratio is used for a concrete foundation?",
      a: "Most residential foundations use a 1:1.5:3 ratio, around 25–30 MPa, unless a structural engineer specifies a higher strength for the site conditions."
    },
    {
      q: "How does the water-to-cement ratio affect strength?",
      a: "Lower water-to-cement ratios generally produce stronger concrete, but they're harder to place without proper equipment. Ready mix plants control this precisely, which is difficult to replicate on a job site."
    },
    {
      q: "Do you provide custom mix ratios for specific projects?",
      a: "Yes. We batch to engineer-specified ratios for municipal, commercial, and industrial clients when the project calls for a documented strength rating."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Concrete Mix Ratio Guide: Getting the Right Blend"
        description="Understand concrete mix ratios, from residential slabs to industrial floors, and why the right ratio determines strength and durability."
        canonical="https://wilchesreadymix.com/concrete-mix-ratio/"
        keywords="concrete mix ratio, cement sand aggregate ratio, concrete mix design, 1:2:4 concrete ratio, water cement ratio, concrete batching Ontario"
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
          "headline": "Concrete Mix Ratio: What It Means and Why It Determines Your Results",
          "description": "Understand concrete mix ratios, from residential slabs to industrial floors, and why the right ratio determines strength and durability.",
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
          "mainEntityOfPage": "https://wilchesreadymix.com/concrete-mix-ratio/"
        })}
      </script>

      <div className="bg-black text-white font-['Barlow',sans-serif] w-full min-h-screen pt-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 py-20 md:py-28 border-b border-orange-900/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(254,95,0,0.12), transparent 70%)" }} />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            
            {/* Category Tag */}
            <span className="inline-block text-sm uppercase tracking-widest text-[#fe5f00] font-bold mb-4 px-3 py-1 bg-orange-950/40 rounded-full border border-orange-900/30">
              Technical Guidelines
            </span>
            
            <h1 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Concrete Mix Ratio: <span style={{ color: "#fe5f00" }}>What It Means and Why It Determines Your Results</span>
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
              "Every batch of concrete comes down to a ratio: cement, sand, aggregate, and water, combined in specific proportions. Change that ratio even slightly, and you change how strong the concrete becomes..."
            </p>
          </div>
        </section>

        {/* --- INTRO SECTION --- */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              At Wilches Ready Mix, we get calls every week from homeowners who found a mix ratio online and want to know if it applies to their project. The short answer is that ratios are a starting point, not a universal formula. This guide explains how concrete mix ratios work, what the common ratios actually mean, and why batching to a proper specification matters more than following a generic recipe. We supply precisely calibrated mixes across the GTA, including <Link to="/ready-mix-concrete-in-newmarket/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete in Newmarket</Link> and surrounding areas, ensuring your project has the correct aggregate-to-cement balance.
            </p>
          </div>
        </section>

        {/* --- WHAT A RATIO REPRESENTS --- */}
        <section className="px-6 py-12 bg-zinc-950 border-y border-orange-900/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-6 tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              What a Concrete Mix Ratio <span className="text-[#fe5f00]">Actually Represents</span>
            </h2>
            <div className="w-12 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                A mix ratio is usually expressed as three numbers, such as 1:2:3, representing the proportion of cement to sand to coarse aggregate by volume or weight. A 1:2:3 ratio means one part cement, two parts sand, and three parts aggregate, mixed with enough water to achieve a workable consistency without weakening the final product.
              </p>
              <p>
                The water-to-cement ratio is just as important as the cement-to-aggregate ratio, even though it gets less attention outside the industry. Too much water makes concrete easier to pour but significantly weaker once cured. Too little water makes it hard to place and finish properly. This is why ready mix batching is done by trained operators rather than guesswork on site.
              </p>
            </div>
          </div>
        </section>

        {/* --- COMMON RATIOS --- */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Common Ratios <span className="text-[#fe5f00]">And Their Applications</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Different ratios exist because different projects need different balances of strength, workability, and cost. A ratio built for a garden path would be inadequate for a load-bearing foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1:2:4 Ratio */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <span className="text-[#fe5f00] font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>1:2:4</span>
              <h3 className="font-bold text-xl uppercase mt-2 mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                General Purpose
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.9rem]">
                This is one of the most commonly used ratios for residential work, producing concrete in the 20–25 MPa range. It suits pathways, non-structural slabs, and light-duty applications where high compressive strength isn't the primary concern.
              </p>
            </div>

            {/* 1:1.5:3 Ratio */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <span className="text-[#fe5f00] font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>1:1.5:3</span>
              <h3 className="font-bold text-xl uppercase mt-2 mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Standard Structural
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.9rem]">
                This ratio produces concrete closer to 25–30 MPa, matching what most driveways, garage floors, and standard foundations require. It's the ratio behind our Standard Ready Mix product, balancing strength and cost for typical residential and light commercial use.
              </p>
            </div>

            {/* 1:1:2 Ratio */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <span className="text-[#fe5f00] font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>1:1:2</span>
              <h3 className="font-bold text-xl uppercase mt-2 mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                High Strength
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.9rem]">
                A denser ratio with less aggregate relative to cement produces higher compressive strength, often 35 MPa and above. This is used for industrial floors, structural columns, and heavy loading bays that require reliable structural integrity.
              </p>
            </div>

          </div>
        </section>

        {/* --- DIY VS READY MIX --- */}
        <section className="px-6 py-12 bg-zinc-950 border-y border-orange-900/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-6 tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Why DIY Ratio Calculations <span className="text-[#fe5f00]">Often Go Wrong</span>
            </h2>
            <div className="w-12 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                Homeowners sometimes try to mix their own concrete on site using ratios found online, particularly for small jobs like fence posts or garden edging. The problem isn't the ratio itself, but the inconsistency of hand-mixing: aggregate size varies, water is added by eye rather than measurement, and the result is concrete with unpredictable strength from one batch to the next.
              </p>
              <p>
                Ready mix concrete solves this by batching to a controlled ratio at the plant, using calibrated equipment and consistent aggregate sources. For any project larger than a small repair, this consistency is the difference between concrete that performs as expected and concrete that develops problems within a few seasons.
              </p>
            </div>
          </div>
        </section>

        {/* --- RATIO AND MPA TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Mix Ratio and MPa <span className="text-[#fe5f00]">Comparison</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/70 text-base max-w-xl mx-auto">
              Match a common mix ratio to its approximate strength rating and typical use before you order.
            </p>
          </div>

          <div className="overflow-x-auto border border-orange-900/30 rounded-xl shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Ratio (Cement:Sand:Aggregate)</th>
                  <th className="p-5 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Approx. Strength</th>
                  <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Typical Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-900/20 bg-zinc-950/40">
                {ratioComparison.map((row, i) => (
                  <tr key={i} className="hover:bg-zinc-900/35 transition-colors">
                    <td className="p-5 font-semibold text-white text-[0.95rem]">{row.ratio}</td>
                    <td className="p-5 text-white/70 text-[0.9rem]">{row.strength}</td>
                    <td className="p-5 text-white/80 font-medium text-[0.9rem]">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- CURING TIME TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto border-t border-orange-900/10">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Curing Time <span className="text-[#fe5f00]">by Temperature</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/70 text-base max-w-xl mx-auto">
              Regardless of the ratio used, curing time changes with outdoor temperature. This schedule shows why timing your pour is critical.
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
                  A homeowner requiring <Link to="/ready-mix-concrete-delivery-whitby/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete in Whitby</Link> originally called us after a contractor quoted a hand-mixed ratio for a new garage slab.
                </p>
                <p>
                  Once we reviewed the load requirements, including a car lift the homeowner planned to install, we recommended a properly batched 1:1.5:3 ready mix instead. The finished slab now carries the additional equipment weight without the risk of the uneven strength that hand-mixing would have introduced.
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
                "Very good, very friendly, very affordable compared to others, quick response, same day delivery!"
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">Gursharan Marwaha</span>
                <span className="text-white/40 text-xs">GTA Client</span>
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

            <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
              <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                "This is the second time in a few years that I use their service. Each time they were on time and the drivers were very responsible and zero issue. I will highly recommend their services."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">radiomen123</span>
                <span className="text-white/40 text-xs">GTA Contractor</span>
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
              Get the Right Mix Ratio <span style={{ color: "#fe5f00" }}>for Your Project</span>
            </h2>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-left md:text-center">
              <p>
                Getting the concrete mix ratio right is one of those details that doesn't show up until years later, when a slab starts cracking or a foundation settles unevenly. Choosing the wrong concrete mix is one of the most expensive mistakes a project can make, not because of the concrete itself, but because of what it costs to fix later.
              </p>
              <p>
                Wilches Ready Mix has batched concrete to precise ratios across the GTA for over 20 years, with more than 1,500 completed projects and a 4.5-star rating across 2,363 Google reviews.
              </p>
              <p>
                If you're not sure which mix ratio fits your project, call us at 647-891-4740 and our team will help you match the ratio to the job before you order.
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
