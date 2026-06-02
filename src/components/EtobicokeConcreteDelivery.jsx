import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function EtobicokeConcreteDelivery() {
  const specialtyMixes = [
    { type: "32 MPa Air-Entrained", application: "Driveways, patios, walkways", feature: "Ontario freeze-thaw standard" },
    { type: "High-Strength 35–40 MPa", application: "Industrial floors, foundations", feature: "Heavy load applications" },
    { type: "SCC Mix", application: "Decorative finishes, tight access", feature: "Clean surface, no vibration marks" },
    { type: "Cold-Crete", application: "Late fall and winter pours", feature: "Strength in low temperatures" },
    { type: "Custom PSI", application: "Engineer-specified projects", feature: "Matched to structural requirements" },
  ];

  const neighbourhoods = [
    { name: "Humber Valley", location: "Central Etobicoke" },
    { name: "Princess-Rosethorn", location: "Central Etobicoke" },
    { name: "Markland Wood", location: "West Etobicoke" },
    { name: "Long Branch", location: "South Etobicoke" },
    { name: "Mimico", location: "Southeast Etobicoke" },
    { name: "Alderwood", location: "South Etobicoke" },
    { name: "Rexdale", location: "North Etobicoke" },
    { name: "Thistletown", location: "Northwest Etobicoke" },
    { name: "Sunnylea", location: "East Etobicoke" },
    { name: "New Toronto", location: "South Etobicoke" },
  ];

  const faqs = [
    {
      q: "How quickly can you deliver concrete in Etobicoke?",
      a: "Being plant-based in Etobicoke means we can often accommodate same-day orders for residential jobs. For scheduled pours, 24 hours notice is standard. Call us and we will confirm availability on the spot."
    },
    {
      q: "What strength do I need for a driveway in Etobicoke?",
      a: "32 MPa air-entrained — Ontario standard for residential driveways in freeze-thaw conditions. We have seen enough Etobicoke driveways fail at lower strengths to know this is not an area to cut costs."
    },
    {
      q: "How much concrete do I need for a standard driveway?",
      a: "A two-car driveway at 6m x 6m x 100mm depth requires approximately 3.6 cubic metres. Call us with your exact dimensions for a precise calculation."
    },
    {
      q: "Do you pour concrete in Etobicoke in winter?",
      a: "Yes. Cold-Crete is available year-round. Our Etobicoke location means fast dispatch even for urgent winter orders."
    },
    {
      q: "What is the best season to pour concrete in Etobicoke?",
      a: "Late May through early September is ideal. April and October are manageable with Cold-Crete. Call us with your date — we will advise on the right mix for the conditions."
    }
  ];

  const curingTimes = [
    { temp: "Above 20°C", initial: "4–6 hours", full: "28 days", notes: "Summer ideal" },
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
        title="Best Ready Mix Concrete in Etobicoke in 2026"
        description="Wilches Ready Mix is based in Etobicoke — delivering plant-batched concrete across Etobicoke and the GTA since 2004. Residential, commercial & industrial. Call 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-in-etobicoke/"
        keywords="Ready Mix Concrete Etobicoke, Concrete Delivery Etobicoke, Concrete Supplier Etobicoke, Concrete Etobicoke Ontario, Ready Mix Concrete Etobicoke Ontario, Residential Concrete Etobicoke, Commercial Concrete Etobicoke, Industrial Concrete Etobicoke, Concrete Near Me Etobicoke, Concrete Driveway Etobicoke, Concrete Foundation Etobicoke, Local Concrete Supplier Etobicoke"
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
          "areaServed": "Etobicoke, ON",
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
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>in Etobicoke</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                Most concrete suppliers serve Etobicoke. We are based here. Our plant is at 32 Taber Road — which means when you order ready mix concrete in Etobicoke, the truck is coming from your neighbourhood, not from a plant an hour away racing against the workability clock.
              </p>
              <p>
                At <strong className="text-white font-bold">Wilches Ready Mix Concrete Inc.</strong>, we have been supplying Etobicoke homeowners, contractors, and industrial clients since 2004. Over 1,500 completed projects across the GTA. Every load plant-batched, quality-checked, and delivered on the time we commit to. Being local is not just a marketing line for us — it is a logistics advantage that every Etobicoke customer benefits from.
              </p>
            </div>
          </div>
        </section>

        {/* --- THE ADVANTAGE --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black uppercase leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              The Advantage of a <span style={{ color: "#fe5f00" }}>Local Etobicoke Concrete Supplier</span>
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg">
              Concrete has a workability window. Once it leaves the plant, the clock is running — and the longer the haul, the tighter that window gets. Admixtures can extend it, but every adjustment to workability is a compromise to the original mix design.
            </p>
            <p className="text-white/80 text-lg">
              When you order from our Etobicoke plant, the travel time is short. The concrete arrives with full workability, the mix design is intact, and your crew has the time they need to place and finish properly. For residential pours where surface quality matters and for commercial pours where placement timing is critical, that proximity is a real advantage.
            </p>
            <p className="text-white/85 text-lg font-medium text-[#fe5f00]">
              Honestly, it is one of the reasons Etobicoke contractors keep calling us back — they know the truck is close.
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

        {/* --- PROJECTS --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                Concrete Projects We <span style={{ color: "#fe5f00" }}>Handle in Etobicoke</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                We support residential, commercial, and heavy industrial concrete applications across all of Etobicoke from our central batch plant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Residential Driveway and Patio Pours
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Etobicoke's established residential neighbourhoods — Humber Valley, Princess-Rosethorn, Markland Wood, Long Branch, and Mimico — generate a steady volume of driveway replacements, garage floor pours, backyard patio installations, and walkway rebuilds.
                </p>
                <p className="text-white/70 leading-relaxed mt-4">
                  These are permanent investments. A driveway in Etobicoke's older neighbourhoods, installed with the wrong mix or insufficient air entrainment, will start showing surface deterioration within a few Ontario winters. We supply 32 MPa air-entrained as standard for all exterior residential applications — it is what the job requires, not just what fills the truck.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  New Construction and Foundation Work
                </h3>
                <p className="text-white/70 leading-relaxed">
                  New builds and infill projects across Etobicoke require foundation pours and basement slabs that meet engineer specifications and coordinate with forming crews and inspection schedules. We supply to the exact PSI your project requires, confirm delivery timing with your site supervisor, and show up when the window opens.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Commercial Concrete Etobicoke
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Retail and commercial developments along Bloor Street, Dundas Street, and the Queensway corridor require commercial-grade concrete delivered on a site schedule. We supply to engineer specification, coordinate with project managers running multiple trades, and deliver in the window the pour requires.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Industrial Concrete Etobicoke
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Etobicoke's industrial areas — along Dixon Road, Evans Avenue, and the Highway 427 corridor — include manufacturing facilities, logistics operations, and warehouse developments that require high-strength concrete with documented consistency. Equipment pads, industrial floors, loading areas — full batch documentation on every pour.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300 md:col-span-2">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Decorative and Exposed Aggregate
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Etobicoke's luxury residential market — Humber Valley Village, Princess-Rosethorn, Sunnylea — has strong demand for decorative concrete finishes. Exposed aggregate driveways, stamped patios, pool surrounds. Our SCC mixes deliver the surface quality these projects require.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- MIX TYPES TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Concrete Mixes Available <span style={{ color: "#fe5f00" }}>in Etobicoke</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
              Every Etobicoke project has specific requirements. Here is what we supply and when each mix is the right call.
            </p>
          </div>
          
          <div className="overflow-x-auto border border-orange-900/30 rounded-xl mb-8 shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Mix Type</th>
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Right For</th>
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Why It Matters</th>
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
                Concrete Curing Times for <span style={{ color: "#fe5f00" }}>Etobicoke Projects</span>
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
              What Etobicoke <span style={{ color: "#fe5f00" }}>Customers Say</span>
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
                "Perfect concrete on time and exactly what I ordered. No cracks and perfect customer service."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">Tristan Braga</span>
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
          </div>
          
          <p className="text-center text-white/60 text-sm mt-10">
            2,363 Google reviews. The consistent theme — on time, right mix, no issues.
          </p>
        </section>

        {/* --- CASE STUDY / EXAMPLE --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-5xl mx-auto border border-orange-900/30 rounded-2xl bg-zinc-900/40 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-orange-900/5 to-transparent" />
            <h2 className="font-black uppercase leading-tight mb-4 text-3xl md:text-4xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              A Real <span style={{ color: "#fe5f00" }}>Etobicoke Job</span>
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-white/80 text-lg">
              <p>
                A contractor in Mimico called us at 7am for a garage floor pour — the forms were set, the crew was on site, and his original supplier had cancelled. We confirmed the order, batched to spec, and had the truck on site by 9am. The pour ran the same morning.
              </p>
              <p className="font-semibold text-white">
                That is not unusual for us. Being based in Etobicoke means we can respond to same-day calls faster than any supplier coming from outside the city.
              </p>
            </div>
          </div>
        </section>

        {/* --- NEIGHBOURHOODS --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Etobicoke Neighbourhoods <span style={{ color: "#fe5f00" }}>We Serve</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              We cover every address inside Etobicoke. Here are the core areas we deliver to daily.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto border border-orange-900/30 rounded-xl overflow-hidden mb-8 shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Neighbourhood</th>
                  <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-900/20 bg-zinc-950/50">
                {neighbourhoods.map((n, i) => (
                  <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-4 text-white font-semibold">{n.name}</td>
                    <td className="p-4 text-white/70">{n.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-white/80 italic text-lg mt-6">
            Not listed? Call <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We are based in Etobicoke — we cover every address here.
          </p>
        </section>

        {/* --- FAQS --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Questions Etobicoke <span style={{ color: "#fe5f00" }}>Customers Ask</span>
              </h2>
              <p className="text-white/80 text-lg">Straight answers from your local Etobicoke concrete plant.</p>
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
          </div>
        </section>

        {/* --- BOOK / CTA SECTION --- */}
        <section className="bg-zinc-900 border-t-4 border-[#fe5f00] py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Book Concrete <span style={{ color: "#fe5f00" }}>Delivery in Etobicoke</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              We are your local plant. Call today for pricing, mix confirmation, and delivery scheduling — all on the same call.
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
              <Link to="/contact/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Contact Us</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
