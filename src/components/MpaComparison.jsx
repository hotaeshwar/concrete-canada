import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function MpaComparison() {
  const mpaComparison = [
    { factor: "Typical use", mpa25: "Light-duty slabs, garden paths, footings", mpa30: "Driveways, garage floors, structural foundations" },
    { factor: "Freeze-thaw resistance", mpa25: "Moderate (not ideal for raw winter exposure)", mpa30: "Better (higher density protects against water absorption)" },
    { factor: "Cost per cubic yard", mpa25: "Lower", mpa30: "Slightly higher" },
    { factor: "Common in GTA driveways", mpa25: "Less common (due to freeze-thaw damage risk)", mpa30: "Standard choice for long-term durability" },
    { factor: "Load capacity", mpa25: "Adequate for light pedestrian loads", mpa30: "Better for residential and vehicle traffic" },
  ];

  const curingTimes = [
    { temp: "Above 20°C", initial: "4–6 hours", full: "28 days", notes: "Summer ideal" },
    { temp: "10–20°C", initial: "6–10 hours", full: "28–35 days", notes: "Spring and fall" },
    { temp: "5–10°C", initial: "10–16 hours", full: "35–45 days", notes: "Cold-Crete recommended" },
    { temp: "Below 5°C", initial: "16+ hours", full: "45+ days", notes: "Cold-Crete required" },
  ];

  const faqs = [
    {
      q: "Is 30 MPa concrete significantly more expensive than 25 MPa?",
      a: "No. The price difference is usually modest per cubic yard, often small enough that most homeowners choose 30 MPa for driveways once they understand the added freeze-thaw durability it provides."
    },
    {
      q: "Can I use 25 MPa concrete for a driveway?",
      a: "You can, but many GTA contractors recommend 30 MPa or higher for driveways specifically because of Ontario's freeze-thaw cycles and road salt exposure, which are harder on lower-strength mixes."
    },
    {
      q: "What MPa is required for a residential foundation?",
      a: "Most residential foundations are poured at 25–30 MPa, though local building codes and soil conditions can require a structural engineer to specify a different strength."
    },
    {
      q: "Does higher MPa mean the concrete cures faster?",
      a: "Not necessarily. Curing speed is driven mainly by temperature and mix additives, not strength rating. Both 25 MPa and 30 MPa mixes follow similar curing timelines under the same conditions."
    },
    {
      q: "How is MPa strength actually tested?",
      a: "Sample cylinders are taken during the pour, cured under controlled conditions, and tested to failure at 28 days to confirm the mix reached its rated compressive strength."
    },
    {
      q: "Which strength do you recommend for a garage floor?",
      a: "30 MPa is typically recommended for garage floors in the GTA, especially if the space will be used to park vehicles or store heavy equipment."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="25 MPa vs 30 MPa Concrete: Which Do You Need?"
        description="Comparing 25 MPa and 30 MPa concrete for GTA projects, including strength, cost, and which applications each strength suits best."
        canonical="https://wilchesreadymix.com/25mpa-vs-30mpa-concrete/"
        keywords="25 MPa vs 30 MPa concrete, concrete strength comparison, MPa concrete rating, concrete compressive strength Ontario, driveway concrete strength"
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
          "headline": "25 MPa vs 30 MPa Concrete: How to Choose the Right Strength",
          "description": "Comparing 25 MPa and 30 MPa concrete for GTA projects, including strength, cost, and which applications each strength suits best.",
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
          "mainEntityOfPage": "https://wilchesreadymix.com/25mpa-vs-30mpa-concrete/"
        })}
      </script>

      <div className="bg-black text-white font-['Barlow',sans-serif] w-full min-h-screen pt-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 py-20 md:py-28 border-b border-orange-900/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(254,95,0,0.12), transparent 70%)" }} />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            
            {/* Category Tag */}
            <span className="inline-block text-sm uppercase tracking-widest text-[#fe5f00] font-bold mb-4 px-3 py-1 bg-orange-950/40 rounded-full border border-orange-900/30">
              Technical Comparison
            </span>
            
            <h1 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              25 MPa vs 30 MPa Concrete: <span style={{ color: "#fe5f00" }}>How to Choose the Right Strength</span>
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
              "The difference between 25 MPa and 30 MPa concrete looks small on paper, just 5 megapascals of compressive strength, but it changes what a slab or foundation can reliably carry over its lifetime."
            </p>
          </div>
        </section>

        {/* --- INTRO SECTION --- */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              At Wilches Ready Mix, this is one of the most common questions we field from homeowners comparing quotes, since contractors don't always explain why they've specified one strength over the other. This guide breaks down what 25 MPa and 30 MPa concrete actually mean, where each applies, and how to know which one your project needs.
            </p>
          </div>
        </section>

        {/* --- WHAT MPa MEASURES --- */}
        <section className="px-6 py-12 bg-zinc-950 border-y border-orange-900/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-6 tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              What <span className="text-[#fe5f00]">MPa</span> Actually Measures
            </h2>
            <div className="w-12 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                MPa stands for megapascals, a unit of pressure used to express concrete's compressive strength, meaning how much load it can bear before failing. This number is measured by curing a sample cylinder for 28 days and testing it to failure under controlled conditions. A 25 MPa mix is engineered to reliably reach 25 megapascals of compressive strength at that 28-day mark, and the same logic applies to 30 MPa.
              </p>
              <p>
                Higher MPa doesn't just mean "stronger" in a general sense. It reflects a denser mix design, often with a lower water-to-cement ratio, which also tends to improve resistance to abrasion and, in properly air-entrained mixes, freeze-thaw cycling relevant to Ontario winters.
              </p>
            </div>
          </div>
        </section>

        {/* --- WHERE 25 MPa & 30 MPa FIT --- */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Application Breakdown <span className="text-[#fe5f00]">For Both Strengths</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 25 MPa Concrete */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-900/40 rounded-lg flex items-center justify-center mb-6 text-[#fe5f00] font-black text-xl">
                25 MPa
              </div>
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Where 25 MPa Concrete Fits
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem] mb-4">
                25 MPa is a common baseline strength for residential applications that don't carry heavy structural loads. Garden paths, light-duty patios, and some non-load-bearing slabs fall into this category. It's cost-effective and sufficient for its intended use, but it's not always the right choice for driveways, depending on vehicle weight and local frost conditions.
              </p>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Some municipalities and building codes set minimum strength requirements above 25 MPa for exterior residential work exposed to freeze-thaw cycling, which is part of why many GTA driveways are poured at 30 MPa or higher rather than the lower baseline.
              </p>
            </div>

            {/* 30 MPa Concrete */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-900/40 rounded-lg flex items-center justify-center mb-6 text-[#fe5f00] font-black text-xl">
                30 MPa
              </div>
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Where 30 MPa Concrete Fits
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem] mb-4">
                30 MPa has become the practical standard for most residential driveways, garage floors, and standard foundations across Ontario. It offers a meaningful strength buffer over 25 MPa, which matters for surfaces exposed to vehicle weight, road salt, and repeated freezing and thawing throughout the winter.
              </p>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                The added durability of 30 MPa concrete is particularly relevant for driveways, where surface scaling and cracking from freeze-thaw damage are common complaints homeowners bring to us. That's why we supply 30 MPa as a standard choice for projects requiring <Link to="/ready-mix-concrete-in-malton/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete in Malton</Link> and other active construction regions of the GTA.
              </p>
            </div>

          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Comparing 25 MPa and 30 MPa <span className="text-[#fe5f00]">Directly</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            </div>

            <div className="overflow-x-auto border border-orange-900/30 rounded-xl shadow-lg shadow-orange-900/5">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-zinc-900 border-b border-orange-900/30">
                    <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Factor</th>
                    <th className="p-5 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>25 MPa</th>
                    <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>30 MPa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-900/20 bg-zinc-950/40">
                  {mpaComparison.map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-900/35 transition-colors">
                      <td className="p-5 font-semibold text-white text-[0.95rem]">{row.factor}</td>
                      <td className="p-5 text-white/70 text-[0.9rem]">{row.mpa25}</td>
                      <td className="p-5 text-white/80 font-medium text-[0.9rem]">{row.mpa30}</td>
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
              Curing Time <span className="text-[#fe5f00]">for Both Strengths</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/70 text-base max-w-xl mx-auto mb-8">
              Curing time is driven primarily by temperature rather than MPa rating, so both 25 MPa and 30 MPa mixes follow the same general curing schedule.
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
                  A homeowner requiring <Link to="/ready-mix-concrete-in-etobicoke/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete in Etobicoke</Link> originally received a quote for 25 MPa concrete on a new driveway, based purely on the lowest price per yard among three contractors.
                </p>
                <p>
                  After discussing the site's exposure to road salt and full winter conditions, we recommended 30 MPa instead. The price difference came to less than the cost of a single driveway repair, and the homeowner chose the higher strength to avoid the scaling issues we regularly see on lower-strength driveways after a few Ontario winters.
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
                "I ordered concrete on a Saturday evening. They answered the phone when no one else did. Brought me the concrete on time, fair pricing and the driver was very patient."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">Stephen O'Keeffe</span>
                <span className="text-white/40 text-xs">Contractor Client</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
              <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                "This is the second time in a few years that I use their service. Each time they were on time and the drivers were very responsible and zero issue. I will highly recommend their services."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">radiomen123</span>
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
              Order the Right Strength <span style={{ color: "#fe5f00" }}>for Your Project</span>
            </h2>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-left md:text-center">
              <p>
                Choosing between 25 MPa and 30 MPa concrete comes down to what the surface needs to withstand over its lifetime, not just the upfront price per yard. Wilches Ready Mix has helped GTA homeowners and contractors specify the right strength for over 20 years, with more than 1,500 completed projects and a 4.5-star rating across 2,363 Google reviews.
              </p>
              <p>
                For most homeowners comparing quotes, the safest approach is to ask each contractor to specify the MPa rating in writing before comparing price. Two quotes that look identical on the surface can carry very different strength ratings, and that difference is what determines how well the concrete holds up once winter arrives.
              </p>
              <p>
                Call us at 647-891-4740 and our team will help you decide between 25 MPa and 30 MPa before you order.
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
