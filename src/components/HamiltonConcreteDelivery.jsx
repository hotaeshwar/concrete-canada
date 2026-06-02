import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function HamiltonConcreteDelivery() {
  const specialtyMixes = [
    { type: "32 MPa Air-Entrained", application: "All exterior residential", feature: "Escarpment temperature variation demands it" },
    { type: "High-Strength 35–40 MPa", application: "Industrial floors, heavy foundations", feature: "Hamilton's industrial applications" },
    { type: "SCC Mix", application: "Complex formwork, decorative finishes", feature: "Downtown Hamilton renovation work" },
    { type: "Cold-Crete", application: "Late fall and winter pours", feature: "Hamilton winters are long and cold" },
    { type: "Custom PSI", application: "Engineer-specified projects", feature: "Industrial and commercial specification" },
  ];

  const areasServed = [
    { name: "Downtown Hamilton", notes: "Core and waterfront" },
    { name: "Westdale", notes: "West Hamilton residential" },
    { name: "Dundas", notes: "West Hamilton valley" },
    { name: "Ancaster", notes: "Mountain area" },
    { name: "Meadowlands", notes: "Upper mountain" },
    { name: "Binbrook", notes: "South Hamilton Township" },
    { name: "Stoney Creek", notes: "East Hamilton" },
    { name: "Winona", notes: "Far east Hamilton" },
    { name: "Waterdown", notes: "North Hamilton" },
    { name: "Hamilton Mountain", notes: "Upper city" },
  ];

  const faqs = [
    {
      q: "How far is your plant from Hamilton?",
      a: "Our Etobicoke plant is approximately 60–70 minutes from downtown Hamilton via the QEW. We batch on a schedule that accounts for travel time — the concrete arrives within its workability window."
    },
    {
      q: "What concrete strength do I need for a Hamilton driveway?",
      a: "32 MPa air-entrained. Hamilton's escarpment location and lake proximity create demanding freeze-thaw conditions. This is the minimum we recommend for any exterior Hamilton residential application."
    },
    {
      q: "How much concrete do I need for a standard driveway?",
      a: "A two-car driveway at 6m x 6m x 100mm depth requires approximately 3.6 cubic metres. Call with your exact dimensions for a precise volume calculation."
    },
    {
      q: "Do you deliver in Hamilton during winter?",
      a: "Yes. Cold-Crete is available year-round. Hamilton winters — particularly on the mountain — are serious, and we will advise on mix, placement temperature, and curing based on your specific pour date and site location."
    },
    {
      q: "What is the best time of year to pour concrete in Hamilton?",
      a: "Late May through early September for ideal conditions. On the mountain, that window is slightly shorter — first frosts arrive earlier at elevation. Call us with your date and we will advise specifically."
    },
    {
      q: "Can you handle Hamilton industrial projects with PSI documentation?",
      a: "Yes. Full batch documentation is standard on our industrial pours. Hamilton's industrial sector has been a regular part of our work for over 20 years."
    }
  ];

  const curingTimes = [
    { temp: "Above 20°C", initial: "4–6 hours", full: "28 days", notes: "Hamilton summer" },
    { temp: "10–20°C", initial: "6–10 hours", full: "28–35 days", notes: "Spring and fall" },
    { temp: "5–10°C", initial: "10–16 hours", full: "35–45 days", notes: "Cold-Crete recommended" },
    { temp: "Below 5°C", initial: "16+ hours", full: "45+ days", notes: "Cold-Crete required, insulated curing" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Top Rated Ready Mix Concrete in Hamilton"
        description="Wilches Ready Mix delivers plant-batched ready mix concrete in Hamilton and surrounding area. Residential, commercial & industrial. 20+ years GTA experience. Call 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-in-hamilton/"
        keywords="Ready Mix Concrete Hamilton, Concrete Delivery Hamilton, Concrete Supplier Hamilton, Concrete Hamilton Ontario, Ready Mix Concrete Hamilton Ontario, Residential Concrete Hamilton, Commercial Concrete Hamilton, Industrial Concrete Hamilton, Concrete Near Me Hamilton"
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
          "areaServed": "Hamilton, ON",
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
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>in Hamilton</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                Hamilton is a city that knows concrete. Steel production, heavy industrial infrastructure, and a construction market that has been transforming — the waterfront, the downtown core, and the mountain developments all running simultaneously. This is not a market where concrete suppliers get away with inconsistency.
              </p>
              <p>
                At <strong className="text-white font-bold">Wilches Ready Mix Concrete Inc.</strong>, we deliver ready mix concrete to Hamilton from our Etobicoke plant. The drive takes us down the QEW — approximately 60 to 70 minutes depending on traffic. We account for that travel time in our batching schedule so the concrete arrives within its full workability window. Over 20 years in this business, over 1,500 GTA and Hamilton area projects, every load plant-batched and quality-checked before dispatch.
              </p>
            </div>
          </div>
        </section>

        {/* --- CONTRACTOR PROBLEMS --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black uppercase leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              What Plant-Batched Concrete <span style={{ color: "#fe5f00" }}>Means for Hamilton Projects</span>
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg">
              Hamilton has local concrete suppliers. We know that, and we are not pretending otherwise.
            </p>
            <p className="text-white/80 text-lg">
              What we offer is plant-batched ready mix produced under controlled conditions — certified aggregates, precise water-to-cement ratio, admixtures matched to the application and season, and quality checks on every batch before it loads. For residential pours where surface quality matters and for industrial applications where PSI documentation is required, that standard is what the job needs.
            </p>
            <p className="text-white/85 text-lg font-medium text-[#fe5f00]">
              For smaller residential pours, local mobile-mix operators are a reasonable option. For anything where consistent mix design and batch documentation matter — commercial foundations, industrial floors, engineer-specified applications — plant-batched is the right call. That is what we provide.
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
                Hamilton Projects <span style={{ color: "#fe5f00" }}>We Handle</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Our plant batches specialized concrete designs matched precisely to residential properties, steep terrain access, and industrial production zones.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Residential Concrete Hamilton
                </h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Hamilton homeowners across Westdale, Dundas, Ancaster, Stoney Creek, and the mountain communities come to us for driveways, garage floors, basement slabs, walkways, and patios. Hamilton's elevation and proximity to Lake Ontario create specific freeze-thaw conditions — the escarpment areas in particular experience significant temperature variation that puts real stress on exterior concrete.
                </p>
                <p className="text-white/70 leading-relaxed">
                  32 MPa air-entrained is our standard for all exterior Hamilton residential applications. It is not upselling — it is what the local climate requires.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Commercial Concrete Hamilton
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Hamilton's downtown transformation — new residential towers, retail, office, and mixed-use developments along King Street and James Street — has generated significant commercial concrete demand. The waterfront development, the Innovation District, and the broader intensification of Hamilton's core all require concrete supplied to engineer specifications with delivery coordinated around busy urban sites.
                </p>
                <p className="text-white/70 leading-relaxed mt-4">
                  We supply commercial-grade ready mix to the exact PSI your project requires. Site coordination with your supervisor, delivery in the pour window, full batch documentation on request.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Industrial Concrete Hamilton
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Hamilton's industrial heritage is still very much alive — steel-related manufacturing, logistics operations, and heavy industry along the harbour and the industrial corridors require the most demanding concrete specifications. High-strength mixes, documented consistency across multiple pours, PSI to engineer specification.
                </p>
                <p className="text-white/70 leading-relaxed mt-4">
                  We supply industrial-grade ready mix to Hamilton's industrial sector with full quality documentation on every pour. This is the work we know — the GTA's industrial corridor is where much of our 20-year track record was built.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Mountain and Escarpment Area Projects
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Hamilton's mountain communities — Ancaster, Meadowlands, Binbrook, and the upper city — have active residential construction and renovation markets. Delivering concrete to escarpment-adjacent sites requires attention to access logistics that not every supplier manages well. We confirm site access conditions when you book and plan accordingly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- MIX TYPES TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Concrete Mixes <span style={{ color: "#fe5f00" }}>for Hamilton Projects</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>
          
          <div className="overflow-x-auto border border-orange-900/30 rounded-xl mb-8 shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Mix Type</th>
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Right For</th>
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Hamilton-Specific Note</th>
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
          
          <p className="text-white/80 leading-relaxed text-center max-w-4xl mx-auto mt-6 text-lg">
            Hamilton's winters are meaningful. The escarpment creates its own microclimate — colder and windier than the lower city, with ice formation that comes earlier and stays later. <strong className="text-[#fe5f00]">Cold-Crete</strong> is relevant here for a longer window than in many GTA locations.
          </p>
        </section>

        {/* --- CURING TIMES TABLE --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Concrete Curing Times <span style={{ color: "#fe5f00" }}>in Hamilton Weather</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            </div>
            
            <div className="max-w-4xl mx-auto border border-orange-900/30 rounded-xl overflow-hidden shadow-lg shadow-orange-900/5 mb-8">
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

            <p className="text-center text-white/70 text-base max-w-3xl mx-auto">
              On the mountain, add extra time to these ranges. Escarpment sites are exposed — wind chill and temperature variation affect curing more than in sheltered lower-city locations.
            </p>
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
            Over 2,363 Google reviews from GTA and Hamilton area customers. On time, right mix, no problems — that is the consistent record.
          </p>
        </section>

        {/* --- CASE STUDY / STORY --- */}
        <section className="bg-zinc-900 border-y border-orange-900/20 px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="font-black uppercase leading-tight mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                A Real <span style={{ color: "#fe5f00" }}>Hamilton Call</span>
              </h2>
              <div className="w-16 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
              <div className="space-y-4 text-white/80 text-lg">
                <p>
                  A contractor running a basement slab pour in Ancaster called us when his local supplier pushed the delivery window by three hours with no notice. His forming crew was on site, the inspection was booked for the following morning.
                </p>
                <p>
                  We confirmed the order, batched to his engineer's specification, and had the truck on site within the afternoon. The pour ran, the inspection passed. His crew did not lose the day.
                </p>
                <p className="text-[#fe5f00] font-semibold">
                  Being willing to make the Hamilton run on short notice is something a lot of GTA suppliers will not do. We do it regularly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- AREAS SERVED --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-b border-orange-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Hamilton Areas <span style={{ color: "#fe5f00" }}>We Deliver To</span>
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
                      <td className="p-4 text-white/70">{area.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-white/80 italic text-lg mt-6">
              Outside these areas? Call <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We confirm delivery across Hamilton and surrounding area directly.
            </p>
          </div>
        </section>

        {/* --- FAQS --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Questions Hamilton <span style={{ color: "#fe5f00" }}>Customers Ask</span>
            </h2>
            <p className="text-white/80 text-lg">Straight answers and transparent timing for the steel city.</p>
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
              Book Concrete <span style={{ color: "#fe5f00" }}>Delivery in Hamilton</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Call today. Mix, volume, delivery window, and pricing confirmed on the same call.
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
              <Link to="/ready-mix-concrete-in-malton/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Malton Concrete Delivery</Link>
              <Link to="/contact/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Contact Us</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
