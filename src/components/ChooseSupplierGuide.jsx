import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function ChooseSupplierGuide() {
  const supplierComparison = [
    { factor: "Years in business", value: "Indicates consistency and industry reputation" },
    { factor: "Google reviews", value: "Reflects real customer experience with delivery and quality" },
    { factor: "Mix transparency", value: "Confirms you're getting the specified strength and consistency" },
    { factor: "Delivery reliability", value: "Protects your schedule given concrete's limited working window" },
    { factor: "Mix variety", value: "Ensures the right formula for your specific application" },
  ];

  const curingTimes = [
    { temp: "Above 20°C", initial: "4–6 hours", full: "28 days", notes: "Summer ideal" },
    { temp: "10–20°C", initial: "6–10 hours", full: "28–35 days", notes: "Spring and fall" },
    { temp: "5–10°C", initial: "10–16 hours", full: "35–45 days", notes: "Cold-Crete recommended" },
    { temp: "Below 5°C", initial: "16+ hours", full: "45+ days", notes: "Cold-Crete required" },
  ];

  const faqs = [
    {
      q: "What's the most important factor when choosing a concrete supplier?",
      a: "Reliability around delivery timing and mix consistency matters more than price alone, since concrete has a limited working window and problems aren't visible until it's already poured."
    },
    {
      q: "Should I choose a supplier based on the lowest quote?",
      a: "Not by itself. A lower price can reflect a weaker mix design or less reliable delivery, both of which cost more to fix later than the initial savings on price per yard."
    },
    {
      q: "How do I know if a supplier's mix matches what I ordered?",
      a: "Ask about MPa rating and request a slump test on delivery. A transparent supplier will confirm both without hesitation."
    },
    {
      q: "Does a concrete supplier's experience in my specific city matter?",
      a: "Yes. Local experience with soil conditions and municipal requirements in your area helps a supplier recommend the right mix and anticipate site-specific issues."
    },
    {
      q: "What should I ask about same-day delivery?",
      a: "Confirm realistic delivery windows and how the supplier communicates if a delay occurs, since concrete's limited working time makes timing communication critical."
    },
    {
      q: "Do reputable suppliers offer cold-weather concrete?",
      a: "Yes. A supplier equipped for GTA winters should offer a Cold-Crete or similar cold-weather formula rather than pouring standard mix in freezing conditions."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="How to Choose a Concrete Supplier: What Actually Matters"
        description="A practical guide to choosing a concrete supplier in the GTA, covering reliability, mix quality, delivery, and what to ask before you order."
        canonical="https://wilchesreadymix.com/choose-concrete-supplier/"
        keywords="how to choose a concrete supplier, concrete supplier GTA, reliable concrete delivery Ontario, concrete company near me, best concrete supplier Toronto"
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
          "headline": "How to Choose a Concrete Supplier: What Actually Matters",
          "description": "A practical guide to choosing a concrete supplier in the GTA, covering reliability, mix quality, delivery, and what to ask before you order.",
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
          "mainEntityOfPage": "https://wilchesreadymix.com/choose-concrete-supplier/"
        })}
      </script>

      <div className="bg-black text-white font-['Barlow',sans-serif] w-full min-h-screen pt-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 py-20 md:py-28 border-b border-orange-900/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(254,95,0,0.12), transparent 70%)" }} />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            
            {/* Category Tag */}
            <span className="inline-block text-sm uppercase tracking-widest text-[#fe5f00] font-bold mb-4 px-3 py-1 bg-orange-950/40 rounded-full border border-orange-900/30">
              Industry Insights &amp; Purchasing
            </span>
            
            <h1 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              How to Choose a Concrete Supplier: <span style={{ color: "#fe5f00" }}>What Actually Matters</span>
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
              "Choosing a concrete supplier based on price alone is one of the most common mistakes homeowners and contractors make across the GTA. The cheapest quote often looks identical to a mid-range one on paper, but the difference shows up later..."
            </p>
          </div>
        </section>

        {/* --- INTRO SECTION --- */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              At Wilches Ready Mix, we've supplied concrete across the GTA for over 20 years, and we've heard plenty of stories from customers who switched to us after a bad experience elsewhere. This guide covers what to actually look for when choosing a concrete supplier, beyond just comparing price per yard.
            </p>
          </div>
        </section>

        {/* --- WHY SUPPLIER CHOICE MATTERS --- */}
        <section className="px-6 py-12 bg-zinc-950 border-y border-orange-900/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-6 tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Why Supplier Choice Matters <span className="text-[#fe5f00]">More Than It Seems</span>
            </h2>
            <div className="w-12 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                Concrete is a perishable product with a limited working window once it leaves the plant. A supplier's reliability around timing, mix consistency, and communication directly affects whether your project goes smoothly or turns into a scramble to manage a delayed or substandard delivery.
              </p>
              <p>
                Unlike many other building materials, you can't easily inspect concrete before it's poured and set. By the time a problem becomes visible, whether it's a weak mix or a batch that sat too long in transit, it's already in the ground. This is why supplier reputation and process matter more here than in almost any other trade.
              </p>
            </div>
          </div>
        </section>

        {/* --- WHAT TO LOOK FOR --- */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Key Criteria <span className="text-[#fe5f00]">For Selection</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A few factors consistently separate reliable suppliers from ones that create problems down the line. None of these show up clearly on a basic price quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Track Record */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Track Record &amp; Reviews
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                A supplier's history says more than their marketing does. Look at how long they've operated, how many projects they've completed, and what real customers say in reviews, particularly around reliability and communication rather than just price.
              </p>
            </div>

            {/* Mix Transparency */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Mix Transparency
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                A reliable supplier should be able to explain exactly what mix you're getting, including MPa rating, slump specification, and any admixtures used. If a supplier can't answer basic questions about the mix design, that's a warning sign about their quality control overall.
              </p>
            </div>

            {/* Delivery Reliability */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Delivery Reliability
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Concrete has a working window, often just a couple of hours, before it becomes unusable. A supplier with a reputation for on-time delivery and clear communication about delays protects your project timeline in a way that a slightly lower price per yard can't make up for.
              </p>
            </div>

            {/* Variety of Mix Options */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Range of Mix Options &amp; Local Experience
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem] mb-4">
                Projects vary, and a supplier that only offers one standard mix can't properly serve a driveway, an industrial floor, and a winter foundation pour with the same product. Look for suppliers who offer standard, high-strength, self-compacting, and cold-weather formulas as needed.
              </p>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                A supplier familiar with GTA soil conditions, municipal requirements, and seasonal weather patterns is better positioned to recommend the right mix for your specific site.
              </p>
            </div>

          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Comparing Suppliers <span className="text-[#fe5f00]">at a Glance</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            </div>

            <div className="overflow-x-auto border border-orange-900/30 rounded-xl shadow-lg shadow-orange-900/5">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-zinc-900 border-b border-orange-900/30">
                    <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Factor</th>
                    <th className="p-5 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-900/20 bg-zinc-950/40">
                  {supplierComparison.map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-900/35 transition-colors">
                      <td className="p-5 font-semibold text-white text-[0.95rem]">{row.factor}</td>
                      <td className="p-5 text-white/70 text-[0.9rem]">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- QUESTIONS TO ASK --- */}
        <section className="px-6 py-16 max-w-4xl mx-auto">
          <h2 className="font-black uppercase text-3xl md:text-4xl mb-6 text-center" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Questions Worth Asking <span className="text-[#fe5f00]">Before You Order</span>
          </h2>
          <div className="w-12 h-1 mx-auto mb-8" style={{ background: "#fe5f00" }} />
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Before committing to a supplier, it's worth confirming a few specifics directly rather than assuming they match a standard expectation. Ask what MPa rating comes standard for your application, whether same-day or next-day delivery is realistic for your timeline, and how they handle a batch that fails a slump test on arrival.
            </p>
            <p>
              It's also worth asking whether the supplier offers cold-weather or specialty mixes if your pour falls outside peak summer season, since not every supplier stocks Cold-Crete or self-compacting formulas as standard options. This is a common requirement we handle for projects needing <Link to="/ready-mix-concrete-delivery-oshawa/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete Delivery in Oshawa</Link> and northern GTA zones during early spring and late fall projects.
            </p>
          </div>
        </section>

        {/* --- CURING TIME TABLE --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Curing Time Your Supplier <span className="text-[#fe5f00]">Should Explain</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
              <p className="text-white/70 text-base max-w-xl mx-auto mb-8">
                A supplier who understands their product should be able to walk you through expected curing timelines based on the season you're pouring in, not just hand over a generic number.
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
                A homeowner requiring <Link to="/ready-mix-concrete-delivery-ajax/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete Delivery in Ajax</Link> came to us after a previous supplier delivered a load nearly two hours late, well past the concrete's usable window, forcing a rushed and uneven pour.
              </p>
              <p>
                When they called us for a repour, we confirmed delivery timing upfront and kept the driver in direct contact throughout the morning, which let the crew plan finishing work around a confirmed arrival rather than guessing.
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
                  "I ordered concrete on a Saturday evening. They answered the phone when no one else did. Brought me the concrete on time, fair pricing and the driver was very patient."
                </p>
                <div className="mt-6 border-t border-orange-900/20 pt-4">
                  <span className="text-[#fe5f00] font-bold block">Stephen O'Keeffe</span>
                  <span className="text-white/40 text-xs">GTA Homeowner</span>
                </div>
              </div>

              <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
                <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                  "I've personally had a great experience with Wilches Ready Mix. They've consistently done an amazing job. It's clear they take pride in their work, and it shows in the quality and reliability of their offerings."
                </p>
                <div className="mt-6 border-t border-orange-900/20 pt-4">
                  <span className="text-[#fe5f00] font-bold block">T.C.</span>
                  <span className="text-white/40 text-xs">Contractor Client</span>
                </div>
              </div>

              <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
                <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                  "Perfect concrete on time and exactly what I ordered. No cracks and perfect customer service."
                </p>
                <div className="mt-6 border-t border-orange-900/20 pt-4">
                  <span className="text-[#fe5f00] font-bold block">Tristan Braga</span>
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
              Choose a Supplier That <span style={{ color: "#fe5f00" }}>Delivers on Time, Every Time</span>
            </h2>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-left md:text-center">
              <p>
                Choosing the right concrete supplier protects your project from problems that are difficult and expensive to fix after the fact. Wilches Ready Mix has served the GTA for over 20 years, completing more than 1,500 projects with a 4.5-star rating across 2,363 Google reviews.
              </p>
              <p>
                Call us at 647-891-4740 and see why homeowners and contractors across the GTA choose us for reliable, on-time concrete delivery.
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
