import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function SupplierQuestions() {
  const preOrderChecklist = [
    { question: "What MPa rating am I getting?", details: "Confirms strength matches your project's requirements" },
    { question: "What's the delivery window?", details: "Protects against concrete exceeding its usable time" },
    { question: "Does this mix suit my site conditions?", details: "Matches mix to soil, load, and weather exposure" },
    { question: "What slump will the load arrive at?", details: "Confirms workability and water-to-cement ratio" },
    { question: "Do you offer cold-weather mixes?", details: "Prevents freeze damage on late-season pours" },
  ];

  const curingTimes = [
    { temp: "Above 20°C", initial: "4–6 hours", full: "28 days", notes: "Summer ideal" },
    { temp: "10–20°C", initial: "6–10 hours", full: "28–35 days", notes: "Spring and fall" },
    { temp: "5–10°C", initial: "10–16 hours", full: "35–45 days", notes: "Cold-Crete recommended" },
    { temp: "Below 5°C", initial: "16+ hours", full: "45+ days", notes: "Cold-Crete required" },
  ];

  const faqs = [
    {
      q: "What is the single most important question to ask a concrete supplier?",
      a: "Confirming the MPa rating in writing matters most, since it's the clearest way to verify the mix matches what your project actually requires."
    },
    {
      q: "What's the biggest mistake contractors make when ordering concrete?",
      a: "Choosing a supplier based on price alone, without confirming mix specification, delivery reliability, or the supplier's experience with similar projects."
    },
    {
      q: "Should I confirm delivery timing in writing?",
      a: "Yes, especially for larger pours where crew scheduling depends on a confirmed arrival window rather than a rough estimate."
    },
    {
      q: "Is it normal to ask for a slump test on delivery?",
      a: "Yes, this is standard practice and any reliable supplier should perform or allow a slump check without hesitation."
    },
    {
      q: "What happens if I order the wrong mix strength?",
      a: "Depending on the application, an under-strength mix can lead to cracking, failed inspections, or a foundation that doesn't meet code, often requiring costly repairs or a full repour."
    },
    {
      q: "How early should I ask these questions before a pour?",
      a: "Ideally when you first request a quote, so any mismatch in mix specification or delivery capability is caught well before the scheduled pour date."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Questions to Ask a Concrete Supplier: GTA Contractor Guide"
        description="Key questions to ask a concrete supplier and common contractor mistakes to avoid, so your GTA project starts with the right mix."
        canonical="https://wilchesreadymix.com/concrete-supplier-questions/"
        keywords="questions to ask a concrete supplier, concrete contractor mistakes, concrete ordering checklist, concrete supplier questions Ontario, avoid concrete mistakes GTA"
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
          "headline": "Questions to Ask a Concrete Supplier (and Mistakes to Avoid)",
          "description": "Key questions to ask a concrete supplier and common contractor mistakes to avoid, so your GTA project starts with the right mix.",
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
          "mainEntityOfPage": "https://wilchesreadymix.com/concrete-supplier-questions/"
        })}
      </script>

      <div className="bg-black text-white font-['Barlow',sans-serif] w-full min-h-screen pt-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 py-20 md:py-28 border-b border-orange-900/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(254,95,0,0.12), transparent 70%)" }} />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            
            {/* Category Tag */}
            <span className="inline-block text-sm uppercase tracking-widest text-[#fe5f00] font-bold mb-4 px-3 py-1 bg-orange-950/40 rounded-full border border-orange-900/30">
              Contractor Guide &amp; Checklist
            </span>
            
            <h1 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Questions to Ask a Concrete Supplier <span style={{ color: "#fe5f00" }}>(and Mistakes to Avoid)</span>
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
              "Most concrete problems trace back to a conversation that never happened before the pour. A missed question about mix strength, delivery timing, or weather conditions can turn into a cracked driveway or a failed foundation inspection months later."
            </p>
          </div>
        </section>

        {/* --- INTRO SECTION --- */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              At Wilches Ready Mix, we'd rather answer detailed questions upfront than deal with a problem after the concrete has cured. This guide covers the questions worth asking any concrete supplier before you order, along with the contractor mistakes we see most often across the GTA.
            </p>
          </div>
        </section>

        {/* --- WHY QUESTIONS MATTER --- */}
        <section className="px-6 py-12 bg-zinc-950 border-y border-orange-900/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-6 tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Why Asking the Right Questions <span className="text-[#fe5f00]">Matters</span>
            </h2>
            <div className="w-12 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                Concrete is one of the few building materials where mistakes aren't visible until it's too late to fix cheaply. Once a batch is poured and set, correcting a wrong mix strength, poor slump control, or an unplanned freeze means removal and repouring, not a simple patch.
              </p>
              <p>
                Asking the right questions before ordering shifts the burden of catching problems from after the pour to before it, which is the only point where a mistake actually costs little to fix.
              </p>
            </div>
          </div>
        </section>

        {/* --- QUESTIONS TO ASK SECTION --- */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Questions to Ask <span className="text-[#fe5f00]">Before You Order</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* MPa Rating */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-[#fe5f00]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                1. What MPa Rating Am I Getting?
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Every mix should have a clear compressive strength rating attached to it. If a supplier can't tell you the MPa rating of what's in the truck, there's no way to confirm it matches what your project actually needs.
              </p>
            </div>

            {/* Delivery Window */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-[#fe5f00]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                2. What's the Expected Delivery Window?
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Concrete has a limited usable window after batching, often just a couple of hours. Ask for a specific delivery window, not a vague estimate, and ask how the supplier communicates if a delay happens.
              </p>
            </div>

            {/* Site Conditions */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-[#fe5f00]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                3. Will This Mix Handle My Site's Conditions?
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Freeze-thaw exposure, vehicle loads, and soil conditions all affect which mix is appropriate. A supplier familiar with GTA conditions should be able to explain why a specific mix suits your project, not just quote a price.
              </p>
            </div>

            {/* Slump */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-[#fe5f00]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                4. What Slump Will the Load Arrive At?
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Slump affects workability and, indirectly, strength. Confirm what slump range to expect, and ask what happens if a delivered load doesn't meet that specification on arrival.
              </p>
            </div>

          </div>

          <div className="mt-8 bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl max-w-3xl mx-auto hover:border-[#fe5f00]/40 transition-all">
            <h3 className="font-bold text-2xl uppercase mb-3 text-[#fe5f00] text-center md:text-left" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              5. Do You Offer Cold-Weather or Specialty Mixes?
            </h3>
            <p className="text-white/70 leading-relaxed text-[0.95rem]">
              If your pour falls outside peak summer season, ask directly whether a Cold-Crete or similar formula is available, since not every supplier stocks specialty mixes as standard.
            </p>
          </div>
        </section>

        {/* --- COMMON CONTRACTOR MISTAKES --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Common Contractor <span className="text-[#fe5f00]">Mistakes to Avoid</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
              <p className="text-white/75 text-base max-w-xl mx-auto">
                Even experienced contractors run into avoidable problems when a detail gets missed under time pressure.
              </p>
            </div>

            <div className="space-y-8">
              
              {/* Price alone */}
              <div className="flex gap-4 items-start">
                <span className="text-2xl font-black text-[#fe5f00] bg-orange-950/40 border border-orange-900/30 px-3 py-1 rounded-lg">01</span>
                <div>
                  <h4 className="text-xl font-bold uppercase text-white mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Ordering by Price Alone</h4>
                  <p className="text-white/70 text-[0.95rem]">Choosing the lowest quote without confirming mix specification is one of the most common and costly mistakes. A cheaper mix that doesn't match the required MPa rating can lead to cracking or failed inspections that cost far more than the initial savings.</p>
                </div>
              </div>

              {/* Weather planning */}
              <div className="flex gap-4 items-start">
                <span className="text-2xl font-black text-[#fe5f00] bg-orange-950/40 border border-orange-900/30 px-3 py-1 rounded-lg">02</span>
                <div>
                  <h4 className="text-xl font-bold uppercase text-white mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Not Planning for Weather</h4>
                  <p className="text-white/70 text-[0.95rem]">Scheduling a pour without checking the forecast for the days following, not just pour day itself, is a frequent oversight. A late-season pour without a cold-weather mix can suffer freeze damage before reaching sufficient strength.</p>
                </div>
              </div>

              {/* Rushing Site Prep */}
              <div className="flex gap-4 items-start">
                <span className="text-2xl font-black text-[#fe5f00] bg-orange-950/40 border border-orange-900/30 px-3 py-1 rounded-lg">03</span>
                <div>
                  <h4 className="text-xl font-bold uppercase text-white mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Rushing Site Prep to Meet Delivery</h4>
                  <p className="text-white/70 text-[0.95rem]">Concrete's limited working window creates pressure to have the site ready the moment the truck arrives. Rushing formwork or reinforcement placement to meet that window is a common source of structural issues that show up long after the pour.</p>
                </div>
              </div>

              {/* Slump check */}
              <div className="flex gap-4 items-start">
                <span className="text-2xl font-black text-[#fe5f00] bg-orange-950/40 border border-orange-900/30 px-3 py-1 rounded-lg">04</span>
                <div>
                  <h4 className="text-xl font-bold uppercase text-white mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Skipping the Slump Check</h4>
                  <p className="text-white/70 text-[0.95rem]">Some crews accept a delivery without confirming slump on site, assuming the batch matches the order. A quick check on arrival catches problems before the concrete goes into the ground, when correcting them is still simple.</p>
                </div>
              </div>

              {/* Commodity assuming */}
              <div className="flex gap-4 items-start">
                <span className="text-2xl font-black text-[#fe5f00] bg-orange-950/40 border border-orange-900/30 px-3 py-1 rounded-lg">05</span>
                <div>
                  <h4 className="text-xl font-bold uppercase text-white mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Assuming All Suppliers Are Interchangeable</h4>
                  <p className="text-white/70 text-[0.95rem]">Treating concrete as a commodity where any supplier will do overlooks real differences in mix consistency, delivery reliability, and local experience, all of which affect the outcome of the pour.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- PRE-ORDER CHECKLIST TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Pre-Order Question <span className="text-[#fe5f00]">Checklist</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>

          <div className="overflow-x-auto border border-orange-900/30 rounded-xl shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Question</th>
                  <th className="p-5 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-900/20 bg-zinc-950/40">
                {preOrderChecklist.map((c, i) => (
                  <tr key={i} className="hover:bg-zinc-900/35 transition-colors">
                    <td className="p-5 font-semibold text-white text-[0.95rem]">{c.question}</td>
                    <td className="p-5 text-white/70 text-[0.9rem]">{c.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- CURING TIME TABLE --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Curing Time <span className="text-[#fe5f00]">Worth Confirming Upfront</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
              <p className="text-white/70 text-base max-w-xl mx-auto mb-8">
                A supplier should be able to walk you through expected curing based on the season, not just hand over a generic timeline.
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
          </div>
        </section>

        {/* --- CASE STUDY (REAL EXAMPLE) --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              A Real Example <span className="text-[#fe5f00]">From the GTA</span>
            </h2>
            <div className="w-12 h-1 mx-auto" style={{ background: "#fe5f00" }} />
          </div>
          
          <div className="relative bg-zinc-900/50 border border-orange-900/30 p-8 rounded-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#fe5f00]" />
            <div className="space-y-4 text-lg text-white/80 leading-relaxed">
              <p>
                A contractor requiring <Link to="/ready-mix-concrete-in-mississauga/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete in Mississauga</Link> had previously ordered concrete without confirming the MPa rating in writing, and received a lower-strength mix than the project required after a supplier substitution.
              </p>
              <p>
                On a later project, the same contractor asked us to confirm MPa rating and slump specification before delivery, which caught a mismatch in the initial order before the truck even left the plant.
              </p>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-5xl mx-auto">
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
                  <span className="text-white/40 text-xs">GTA Builder</span>
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
                  "I ordered concrete on a Saturday evening. They answered the phone when no one else did. Brought me the concrete on time, fair pricing and the driver was very patient."
                </p>
                <div className="mt-6 border-t border-orange-900/20 pt-4">
                  <span className="text-[#fe5f00] font-bold block">Stephen O'Keeffe</span>
                  <span className="text-white/40 text-xs">5-star Google Review</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQS --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
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
        </section>

        {/* --- CTA SECTION --- */}
        <section className="bg-zinc-900 border-t-4 border-[#fe5f00] py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase leading-none mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              Order With <span style={{ color: "#fe5f00" }}>Confidence</span>
            </h2>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-left md:text-center">
              <p>
                Asking the right questions upfront is the cheapest insurance policy on any concrete project. Wilches Ready Mix has answered these questions for GTA homeowners and contractors for over 20 years, backed by more than 1,500 completed projects and a 4.5-star rating across 2,363 Google reviews.
              </p>
              <p>
                Call us at 647-891-4740 and ask us anything before you order. We'd rather answer questions now than fix problems later.
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
