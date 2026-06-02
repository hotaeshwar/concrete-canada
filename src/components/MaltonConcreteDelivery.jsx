import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function MaltonConcreteDelivery() {
  const specialtyMixes = [
    { type: "32 MPa Air-Entrained", application: "Driveways, patios, residential slabs", feature: "Freeze-thaw and road salt protection" },
    { type: "High-Strength 35–40 MPa", application: "Industrial floors, heavy foundations", feature: "Consistent load-bearing performance" },
    { type: "SCC Mix", application: "Complex forms, tight access", feature: "Self-compacting, clean finish" },
    { type: "Cold-Crete", application: "Late fall and winter pours", feature: "Strength in low temperatures" },
    { type: "Custom PSI", application: "Engineer-specified projects", feature: "Matched to specification" },
  ];

  const areasServed = [
    { name: "Malton Core", location: "Full coverage" },
    { name: "Airport Road Corridor", location: "Daily industrial delivery" },
    { name: "Derry Road Area", location: "Residential and commercial" },
    { name: "Northwest Mississauga", location: "Adjacent coverage" },
    { name: "Brampton East", location: "Border area coverage" },
    { name: "Woodbine/Humberwest", location: "West Etobicoke adjacent" },
  ];

  const faqs = [
    {
      q: "How quickly can you deliver concrete in Malton?",
      a: "Our Etobicoke plant is under 20 minutes from Malton. For residential orders, 24 hours notice is standard. Same-day availability is often possible — call us to confirm."
    },
    {
      q: "What concrete strength is right for a Malton driveway?",
      a: "32 MPa air-entrained. Malton's road salt exposure from airport-adjacent streets makes this more important here than in many other areas — air entrainment protects against both freeze-thaw damage and salt penetration."
    },
    {
      q: "How much concrete do I need for a standard driveway in Malton?",
      a: "A two-car driveway at 6m x 6m x 100mm depth requires approximately 3.6 cubic metres. Call us with your dimensions for a precise volume calculation."
    },
    {
      q: "Do you deliver in Malton during winter?",
      a: "Yes. Cold-Crete is available year-round. We deliver to Malton through Ontario winters and will advise on the right mix and curing approach for your pour date."
    },
    {
      q: "What is the best time to pour concrete in Malton?",
      a: "Late May through early September for ideal conditions. October and April pours are manageable with Cold-Crete. Call us with your date and we advise specifically."
    }
  ];

  const curingTimes = [
    { temp: "Above 20°C", initial: "4–6 hours", full: "28 days", notes: "Ideal summer conditions" },
    { temp: "10–20°C", initial: "6–10 hours", full: "28–35 days", notes: "Spring and fall" },
    { temp: "5–10°C", initial: "10–16 hours", full: "35–45 days", notes: "Cold-Crete recommended" },
    { temp: "Below 5°C", initial: "16+ hours", full: "45+ days", notes: "Cold-Crete required" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Top Rated Ready Mix Concrete in Malton"
        description="Need ready mix concrete in Malton? Wilches Ready Mix delivers plant-batched concrete to Malton and northwest GTA. Residential, commercial & industrial. Call 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-in-malton/"
        keywords="Ready Mix Concrete Malton, Concrete Delivery Malton, Concrete Supplier Malton, Concrete Malton Ontario, Ready Mix Concrete Malton Ontario, Residential Concrete Malton, Commercial Concrete Malton, Industrial Concrete Malton, Concrete Near Me Malton, Concrete Driveway Malton"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Structured Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Wilches Ready Mix Concrete Inc",
          "telephone": "647-891-4740",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "32 Taber Rd",
            "addressLocality": "Etobicoke",
            "addressRegion": "ON",
            "postalCode": "M9W 3A7",
            "addressCountry": "CA"
          },
          "areaServed": "Malton, Mississauga, ON",
          "openingHours": "Mo-Su 06:00-18:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "2363"
          }
        })}
      </script>
      
      <div className="bg-black text-white font-['Barlow',sans-serif] w-full min-h-screen">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 py-20 md:py-32 border-b border-orange-900/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(254,95,0,0.15), transparent 60%)" }} />
          <div className="max-w-5xl mx-auto relative z-10 text-center animate-fade-in">
            <h1 className="font-black uppercase leading-none mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>in Malton</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                Malton sits at the northwest corner of Mississauga, bordered by Brampton to the north and the airport corridor to the east. It is a working community — dense residential, active industrial along Airport Road and Derry Road, and proximity to Pearson International that makes logistics a constant reality of life here.
              </p>
              <p>
                Getting concrete delivered to Malton is straightforward for us. Our Etobicoke plant is under 20 minutes away on a clear run, which means your concrete arrives with its full workability intact and your crew is not waiting on a truck that is stuck somewhere on the 401. At <strong className="text-white font-bold">Wilches Ready Mix Concrete Inc.</strong>, we have been serving Malton and northwest Mississauga since 2004 — over 1,500 GTA projects, every load plant-batched and quality-checked before it leaves.
              </p>
            </div>
          </div>
        </section>

        {/* --- CONTRACTOR PROBLEMS --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black uppercase leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Why Malton Contractors Trust <span style={{ color: "#fe5f00" }}>Plant-Batched Concrete</span>
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg">
              Malton's industrial and residential mix means concrete orders here range from small homeowner pours to large industrial floor applications. Plant-batched ready mix handles both — because the mix design is controlled at the plant, not estimated on a truck.
            </p>
            <p className="text-white/80 text-lg">
              Every batch we deliver to Malton uses certified aggregates, a controlled water-to-cement ratio, and proper air entrainment on all exterior applications. Quality is checked before dispatch.
            </p>
            <p className="text-white/85 text-lg font-medium text-[#fe5f00]">
              Honestly, there is no shortcut that produces a better result — consistent mix design at the source is the only way to guarantee consistent performance at the pour.
            </p>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] border border-orange-900/30 rounded-xl overflow-hidden bg-zinc-900 flex items-center justify-center p-8">
            <img 
              src="/media/logo.png" 
              alt="Wilches Ready Mix Quality Verified" 
              className="w-full h-full object-contain max-w-[300px] drop-shadow-[0_0_20px_rgba(254,95,0,0.3)] transition-transform duration-500 hover:scale-105"
            />
          </div>
        </section>

        {/* --- CONCRETE SERVICES --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                Concrete We <span style={{ color: "#fe5f00" }}>Deliver in Malton</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Our plant batches specialized concrete designs matched precisely to residential properties and airport-corridor commercial zones.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Residential Pours — Driveways, Slabs, Patios
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Malton homeowners come to us for driveway replacements, garage floor pours, front walkways, and backyard patios. These are straightforward jobs that become expensive problems when the wrong mix is used.
                </p>
                <p className="text-white/70 leading-relaxed mt-4">
                  Malton's location near Pearson means elevated road salt exposure from airport-adjacent streets — a factor that makes air entrainment in residential concrete more important here than in many other GTA neighbourhoods. We supply 32 MPa air-entrained as standard for all exterior Malton residential work.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Industrial Floor and Equipment Pad Pours
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Airport Road, Derry Road, and the industrial parks throughout Malton include warehousing, manufacturing, and logistics operations that place heavy demands on concrete. High-strength mixes, consistent PSI across multiple pours, and full batch documentation — we supply industrial-grade ready mix to Malton's industrial sector the same way we supply commercial GTA projects. No difference in standard.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Commercial and Retail Concrete
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Commercial development along Goreway Drive and the retail corridors throughout Malton require concrete that meets engineer specifications and arrives on schedule. We coordinate with site supervisors, supply to the exact PSI required, and deliver in the window the pour needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- MIX TYPES TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Concrete Mix Options <span style={{ color: "#fe5f00" }}>for Malton Projects</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>
          
          <div className="overflow-x-auto border border-orange-900/30 rounded-xl mb-8 shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Mix Type</th>
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Right For</th>
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Key Feature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-900/20 bg-zinc-950/50">
                {specialtyMixes.map((mix, i) => (
                  <tr key={i} className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 md:p-6 font-semibold text-white">{mix.type}</td>
                    <td className="p-4 md:p-6 text-white/70">{mix.application}</td>
                    <td className="p-4 md:p-6 text-white/70">{mix.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- CURING TIMES TABLE --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Concrete Curing Times <span style={{ color: "#fe5f00" }}>in Malton</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            </div>
            
            <div className="max-w-4xl mx-auto border border-orange-900/30 rounded-xl overflow-hidden shadow-lg shadow-orange-900/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-900 border-b border-orange-900/30">
                    <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Temperature</th>
                    <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Initial Set</th>
                    <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Full Cure</th>
                    <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-900/20 bg-zinc-950/50">
                  {curingTimes.map((c, i) => (
                    <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                      <td className="p-4 text-white font-semibold">{c.temp}</td>
                      <td className="p-4 text-white/70">{c.initial}</td>
                      <td className="p-4 text-white/70">{c.full}</td>
                      <td className="p-4 text-white/50">{c.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- REVIEWS --- */}
        <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              What Our <span style={{ color: "#fe5f00" }}>Customers Say</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-orange-900/30 p-8 rounded-xl flex flex-col justify-between">
              <p className="text-white/70 italic text-lg leading-relaxed">
                "Very good, very friendly, very affordable compared to others, quick response, same day delivery!"
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">Gursharan Marwaha</span>
                <span className="text-white/40 text-sm">5-star Google Review</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-orange-900/30 p-8 rounded-xl flex flex-col justify-between">
              <p className="text-white/70 italic text-lg leading-relaxed">
                "I ordered concrete on a Saturday evening. They answered the phone when no one else did. Brought me the concrete on time, fair pricing and the driver was very patient."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">Stephen O'Keeffe</span>
                <span className="text-white/40 text-sm">5-star Google Review</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-orange-900/30 p-8 rounded-xl flex flex-col justify-between">
              <p className="text-white/70 italic text-lg leading-relaxed">
                "This is the second time in a few years that I use their service. Each time they were on time and the drivers were very responsible and zero issue."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">radiomen123</span>
                <span className="text-white/40 text-sm">5-star Google Review</span>
              </div>
            </div>
          </div>
          
          <p className="text-center text-white/60 text-sm mt-10">
            2,363 Google reviews. On time, right mix, no drama — that is the consistent pattern.
          </p>
        </section>

        {/* --- AREAS SERVED --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Areas Near Malton <span style={{ color: "#fe5f00" }}>We Also Serve</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            </div>
            
            <div className="max-w-4xl mx-auto border border-orange-900/30 rounded-xl overflow-hidden mb-8 shadow-lg shadow-orange-900/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-900 border-b border-orange-900/30">
                    <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Area</th>
                    <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-900/20 bg-zinc-950/50">
                  {areasServed.map((area, i) => (
                    <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                      <td className="p-4 text-white font-semibold">{area.name}</td>
                      <td className="p-4 text-white/70">{area.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-white/80 italic text-lg mt-6">
              Call <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a> to confirm delivery to your specific Malton address.
            </p>
          </div>
        </section>

        {/* --- FAQS --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Questions Malton <span style={{ color: "#fe5f00" }}>Customers Ask</span>
            </h2>
            <p className="text-white/80 text-lg">Straight answers from our nearby Etobicoke plant.</p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-zinc-900 border border-orange-900/20 p-6 md:p-8 rounded-xl hover:border-[#fe5f00]/30 transition-colors">
                <h3 className="font-bold text-xl md:text-2xl mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {faq.q}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- BOOK / CTA SECTION --- */}
        <section className="bg-zinc-900 border-t-4 border-[#fe5f00] py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Book Concrete <span style={{ color: "#fe5f00" }}>Delivery in Malton</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Fast dispatch from our Etobicoke plant. Call today for pricing, mix, and delivery scheduling.
            </p>
            
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
              Request Concrete Delivery
            </a>
          </div>
        </section>

        {/* --- INTERNAL LINKS FOOTER --- */}
        <section className="bg-black border-t border-orange-900/10 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-white/40 text-xs uppercase tracking-widest block mb-4">Internal Links</span>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-base">
              <Link to="/ready-mix-concrete-delivery-ajax/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Ajax Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-whitby/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Whitby Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-pickering/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Pickering Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-scarborough/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Scarborough Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-barrie/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Barrie Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-oshawa/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Oshawa Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-oakville/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Oakville Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-king-city/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">King City Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-newmarket/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Newmarket Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-vaughan/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Vaughan Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-stoney-creek/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Stoney Creek Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-brampton/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Brampton Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-mississauga/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Mississauga Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-etobicoke/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Etobicoke Concrete Delivery</Link>
              <Link to="/contact/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Contact Us</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
