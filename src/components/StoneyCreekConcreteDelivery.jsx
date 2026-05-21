import React, { useEffect } from "react";
import SEO from "./Seo";

export default function StoneyCreekConcreteDelivery() {
  const specialtyMixes = [
    { type: "Standard Ready Mix", application: "Driveways, patios, general slabs", feature: "25–30 MPa, consistent and durable" },
    { type: "High-Strength Mix", application: "Industrial floors, heavy foundations", feature: "35–40+ MPa, engineered for extreme loads" },
    { type: "SCC Mix (Self-Compacting)", application: "Complex forms, tight site access", feature: "Flows effortlessly, no vibration needed" },
    { type: "Cold-Crete (Winter Formula)", application: "Winter and late-season pours", feature: "Ontario cold-weather engineered" },
    { type: "Custom Mixes", application: "Engineer-specified projects", feature: "PSI matched precisely to specification" },
  ];

  const areasServed = [
    { area: "Stoney Creek", notes: "Full coverage, daily delivery" },
    { area: "Winona", notes: "East Stoney Creek area" },
    { area: "Fruitland", notes: "Industrial corridor" },
    { area: "Battlefield", notes: "Historic residential area" },
    { area: "Binbrook", notes: "South Hamilton Township" },
    { area: "Hamilton East", notes: "Adjacent coverage" },
    { area: "Grimsby", notes: "East of Stoney Creek" },
  ];

  const faqs = [
    {
      q: "Is your plant far from Stoney Creek — will the concrete still be workable on arrival?",
      a: "Our Etobicoke plant is approximately 60-70 minutes from Stoney Creek depending on traffic. We account for travel time in our batching schedule — the concrete arrives within workable window, not at the edge of it. For longer hauls we adjust water reducers to maintain slump. This is standard practice and something we manage on every Stoney Creek delivery."
    },
    {
      q: "Can you match the pricing of local mobile-mix operators?",
      a: "Mobile mix pricing varies. For small residential pours under 2 cubic metres, mobile operators are sometimes competitive on price. For anything larger, our plant-batched pricing is typically comparable, and for commercial or industrial work where mix documentation is required, plant-batched is the only appropriate option. Call us with your volume and we will give you a straight number."
    },
    {
      q: "Do you pour in winter in Stoney Creek?",
      a: "Yes. Cold-Crete is available year-round. Stoney Creek's lake-adjacent climate makes winter concrete more variable than inland sites — we will advise specifically on mix, placement, and curing based on your pour date and forecast temperatures."
    },
    {
      q: "What strength do I need for a driveway in Stoney Creek?",
      a: "32 MPa air-entrained. This is the Ontario standard for residential driveways and it matters more in Stoney Creek than in inland GTA locations because of the moisture and temperature exposure near the lake."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Ready Mix Concrete in Stoney Creek | Wilches Ready Mix Concrete Inc"
        description="Wilches Ready Mix delivers plant-batched ready mix concrete in Stoney Creek and Hamilton area. Quality-checked every load. 20+ years GTA experience. Call 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-in-stoney-creek/"
        keywords="Ready Mix Concrete in Stoney Creek, Concrete delivery Stoney Creek, Concrete supplier Stoney Creek, Concrete Hamilton Ontario, Ready mix concrete Winona, Residential concrete Stoney Creek, Commercial concrete Stoney Creek, Industrial concrete Fruitland, Concrete near me Stoney Creek, Concrete Grimsby, Concrete contractor Stoney Creek"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      
      <div className="bg-black text-white font-['Barlow',sans-serif] w-full min-h-screen">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 py-20 md:py-32 border-b border-orange-900/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(254,95,0,0.15), transparent 60%)" }} />
          <div className="max-w-5xl mx-auto relative z-10 text-center animate-fade-in">
            <h1 className="font-black uppercase leading-none mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>in Stoney Creek</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                Stoney Creek sits between Hamilton and the Niagara Peninsula — industrial roots, active residential development along the escarpment, and a construction market that has been growing steadily as the Hamilton corridor expands east.
              </p>
              <p>
                Getting concrete delivered here is not always straightforward. Some GTA suppliers treat anything west of the 403 as out of range. Local mobile-mix operators do small residential jobs well but struggle with larger commercial and industrial volumes. <strong className="text-white">Wilches Ready Mix Concrete Inc.</strong> fills that gap — plant-batched, quality-checked ready mix concrete delivered to Stoney Creek job sites, residential and commercial alike.
              </p>
              <p>
                We have been in the GTA concrete business for over 20 years. Our Etobicoke plant batches to spec, every load is checked before dispatch, and we deliver to Stoney Creek and the Hamilton area on a daily basis.
              </p>
            </div>
          </div>
        </section>

        {/* --- PLANT-BATCHED VS MOBILE MIX --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black uppercase leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Plant-Batched vs Mobile Mix — <span style={{ color: "#fe5f00" }}>What the Difference Means for Your Project</span>
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg">
              Most concrete suppliers in the Stoney Creek area run mobile mixers. The ingredients are loaded dry onto the truck and mixed on site. It works for small residential pours where precision is less critical.
            </p>
            <p className="text-white/80 text-lg">
              Plant-batched ready mix is different. The mix is produced under controlled conditions at a batching facility — certified aggregates, controlled water-to-cement ratio, air entrainment measured and confirmed, and quality-checked before the drum is loaded.
            </p>
            <p className="text-white/85 text-lg font-medium">
              For commercial foundations, industrial slabs, or any application where PSI consistency matters, plant-batched concrete is what engineers specify. We are a plant-batched supplier. If your project requires documented mix design and batch consistency, that is what we provide.
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

        {/* --- SERVICES --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                What We <span style={{ color: "#fe5f00" }}>Deliver in Stoney Creek</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                From a homeowner pouring a backyard patio to a contractor laying an industrial floor in the Stoney Creek industrial park, our mix range covers the full spectrum.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Driveways, Patios and Residential Slabs
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Stoney Creek homeowners come to us for driveways, garage floors, front walkways, back patios, and basement slabs. Ontario's freeze-thaw cycle is hard on residential concrete that was mixed too wet or skipped air entrainment — and Stoney Creek's proximity to Lake Ontario means moisture exposure is higher than most of the GTA. We supply 32 MPa air-entrained mixes as standard for all exterior residential applications. It is what the Ontario Building Code recommends for a reason.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Commercial and Foundations
                </h3>
                <p className="text-white/70 leading-relaxed">
                  New commercial builds along Centennial Parkway, mixed-use developments, and foundation pours across Stoney Creek's growing residential subdivisions all need concrete that meets engineer specifications. We supply to the exact PSI your project requires, coordinate with your site supervisor, and deliver in the window your pour schedule needs.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Industrial Stoney Creek
                </h3>
                <p className="text-white/70 leading-relaxed">
                  The Stoney Creek industrial corridor — manufacturing plants, logistics operations, warehousing along the QEW and Fruitland Road — requires high-strength concrete with consistent performance across multiple pours. We supply industrial-grade ready mix with full batch documentation on every load.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- MIX OPTIONS TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Concrete Mixes Available for <span style={{ color: "#fe5f00" }}>Stoney Creek Delivery</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>
          
          <div className="overflow-x-auto border border-orange-900/30 rounded-xl mb-8 shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Mix Type</th>
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Application</th>
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Strength</th>
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
          <p className="text-center text-white/80 text-lg max-w-3xl mx-auto">
            Stoney Creek's location between the escarpment and the lake creates specific concrete challenges — temperature fluctuations, wind exposure on elevated sites, and moisture. <strong style={{ color: "#fe5f00" }}>Cold-Crete</strong> is worth considering for any pour from October through April in this area, not just when temperatures are visibly cold.
          </p>
        </section>

        {/* --- TWO COLUMNS: AREAS & 20 YEARS --- */}
        <section className="bg-zinc-950 border-t border-orange-900/20">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Areas Served */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Stoney Creek and Hamilton Area — <span style={{ color: "#fe5f00" }}>Where We Deliver</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              
              <div className="overflow-hidden border border-orange-900/30 rounded-lg mb-6">
                <table className="w-full text-left">
                  <thead className="bg-zinc-900 border-b border-orange-900/30">
                    <tr>
                      <th className="p-3 md:p-4 text-[#fe5f00] font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Area</th>
                      <th className="p-3 md:p-4 text-[#fe5f00] font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-900/20">
                    {areasServed.map((area, i) => (
                      <tr key={i} className="hover:bg-zinc-900/30">
                        <td className="p-3 md:p-4 text-white/90 font-semibold">{area.area}</td>
                        <td className="p-3 md:p-4 text-white/60">{area.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-white/80 italic">
                Projects outside this list — call <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We confirm delivery addresses directly and cover the full Hamilton area on request.
              </p>
            </div>

            {/* Twenty Years */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Twenty Years of Trusted Service. <span style={{ color: "#fe5f00" }}>Here Is What That Actually Means.</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              
              <div className="space-y-6">
                <p className="text-white/80 text-lg">
                  When we say 20 years in the GTA concrete business, we mean our team has poured on every type of residential and commercial project. We understand the logistics of Hamilton and Stoney Creek's evolving infrastructure.
                </p>
                <p className="text-white/80 text-lg">
                  We are a family business. When you call, you speak to someone who is directly responsible for your order. We maintain strict accountability, ensuring that your pour proceeds smoothly, on time, and to the absolute highest standards.
                </p>
                <p className="text-white/85 text-lg font-medium text-[#fe5f00]">
                  Over 2,363 Google reviews from customers across the GTA reflect what two decades of that premium customer care looks like.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Honest Answers to <span style={{ color: "#fe5f00" }}>Questions We Get From Stoney Creek Customers</span>
            </h2>
            <p className="text-white/80 text-lg">These are the questions Stoney Creek homeowners and contractors actually ask us — answered straight.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-zinc-900 border border-orange-900/30 p-6 md:p-8 rounded-xl">
                <h3 className="font-bold text-xl md:text-2xl mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {faq.q}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA / QUOTE --- */}
        <section className="bg-zinc-900 border-t-4 border-[#fe5f00] py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-black uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Get a Free Quote for <br /> <span style={{ color: "#fe5f00" }}>Concrete Delivery in Stoney Creek</span>
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-10 text-lg">
              <div className="flex flex-col items-center">
                <span className="text-white/50 text-sm uppercase tracking-widest mb-1">Call Us</span>
                <a href="tel:647-891-4740" className="text-2xl font-bold text-[#fe5f00] hover:text-white transition-colors">647-891-4740</a>
                <a href="tel:+14168352923" className="text-xl font-bold text-white/80 hover:text-[#fe5f00] transition-colors mt-1">+1 416-835-2923</a>
              </div>
              <div className="hidden md:block w-px h-16 bg-orange-900/50" />
              <div className="flex flex-col items-center">
                <span className="text-white/50 text-sm uppercase tracking-widest mb-1">Location</span>
                <span className="text-xl font-bold text-white">32 Taber Rd</span>
                <span className="text-lg text-white/80">Etobicoke, ON M9W 3A7</span>
              </div>
              <div className="hidden md:block w-px h-16 bg-orange-900/50" />
              <div className="flex flex-col items-center">
                <span className="text-white/50 text-sm uppercase tracking-widest mb-1">Hours</span>
                <span className="text-xl font-bold text-white">Open Daily</span>
                <span className="text-lg text-[#fe5f00]">6 am to 6 pm</span>
              </div>
            </div>
            
            <a href="tel:647-891-4740" className="inline-flex items-center gap-3 bg-[#111] text-[#fe5f00] font-black text-2xl tracking-widest py-4 px-10 rounded-full hover:bg-[#222] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(254,95,0,0.2)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              647-891-4740
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
