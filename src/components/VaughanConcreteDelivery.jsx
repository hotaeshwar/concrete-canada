import React, { useEffect } from "react";
import SEO from "./Seo";

export default function VaughanConcreteDelivery() {
  const specialtyMixes = [
    { type: "Standard Ready Mix", application: "Driveways, patios, general residential", feature: "25–30 MPa, consistent and cost-effective" },
    { type: "High-Strength Mix", application: "Industrial floors, commercial foundations", feature: "35–40+ MPa, engineered for load stress" },
    { type: "SCC Mix (Self-Compacting)", application: "Estate finishes, complex formwork", feature: "Self-compacting, no vibration marks" },
    { type: "Cold-Crete (Winter Formula)", application: "Late fall and winter pours", feature: "Strength development in low temperatures" },
    { type: "Custom Mixes", application: "Engineer-specified commercial/industrial", feature: "PSI matched to project requirements" },
  ];

  const areasServed = [
    { area: "Woodbridge", location: "Southwest Vaughan" },
    { area: "Maple", location: "North Vaughan" },
    { area: "Kleinburg", location: "Northwest Vaughan" },
    { area: "Concord", location: "Southeast Vaughan" },
    { area: "Vaughan Metropolitan Centre", location: "Central Vaughan" },
    { area: "Vellore Village", location: "West Vaughan" },
    { area: "Patterson", location: "East Vaughan" },
    { area: "Carrville", location: "Central Vaughan" },
  ];

  const faqs = [
    {
      q: "How soon can you deliver ready mix concrete in Vaughan?",
      a: "For residential orders, 24 hours notice is usually enough. Commercial and industrial pours benefit from more lead time, especially if multiple trucks are needed. Call us to confirm your specific window."
    },
    {
      q: "Do you deliver in Vaughan during winter?",
      a: "Yes. Cold-Crete is available year-round. We deliver through Ontario winters and will advise on the right mix and curing approach based on your pour date and expected temperatures."
    },
    {
      q: "What concrete strength do I need for a driveway in Vaughan?",
      a: "32 MPa air-entrained is the standard for Ontario residential driveways. For decorative or exposed aggregate applications in Vaughan's luxury market, we can advise on the right mix for both performance and finish."
    },
    {
      q: "Can you handle large commercial pours near VMC?",
      a: "Yes. We have supplied commercial-grade concrete for large GTA projects and can coordinate multi-truck deliveries for high-volume commercial pours in Vaughan."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Best Ready Mix Concrete Supplier Vaughan in 2026"
        description="Wilches Ready Mix delivers plant-batched, quality-checked concrete across Vaughan. Residential, commercial & industrial. Family-owned, 20+ years GTA experience. Call 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-vaughan/"
        keywords="Ready mix concrete Woodbridge, Concrete delivery Vaughan, Concrete supplier Vaughan, Concrete Vaughan Ontario, Ready mix concrete Vaughan Ontario, Residential concrete Vaughan, Commercial concrete Vaughan, Industrial concrete Vaughan, Concrete near me Vaughan, Concrete Kleinburg, Concrete Woodbridge Ontario, Concrete VMC Vaughan, Estate concrete Vaughan, Concrete contractor Vaughan"
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
              Top Rated Ready Mix <span style={{ color: "#fe5f00" }}>Concrete Vaughan</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                Vaughan has changed dramatically over the past two decades. What used to be mostly farmland along Highway 400 is now one of the densest construction corridors in Canada — Vaughan Metropolitan Centre, Concord, Woodbridge, Maple, and Kleinburg all running simultaneously with residential, commercial, and infrastructure projects.
              </p>
              <p>
                With that much activity comes a lot of concrete demand. And with a lot of demand comes a lot of suppliers making a lot of promises. At <strong className="text-white">Wilches Ready Mix Concrete Inc.</strong>, we have been supplying ready mix concrete in Vaughan since before most of that development started — over 20 years from our Etobicoke plant, 1,500+ completed projects, and a track record built on actually showing up and doing the job right.
              </p>
            </div>
          </div>
        </section>

        {/* --- THE VAUGHAN MARKET --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black uppercase leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              The Vaughan Market Is Competitive. <span style={{ color: "#fe5f00" }}>Here Is Where We Stand.</span>
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg">
              We are not going to pretend there are no other concrete suppliers in Vaughan. Maple Ready-Mix operates out of Woodbridge. There are volumetric trucks working the area. Other GTA plants deliver here regularly.
            </p>
            <p className="text-white/80 text-lg">
              What we offer is plant-batched concrete that is quality-checked before it leaves, delivered by a team that has been doing this long enough to handle the logistics of Vaughan's increasingly complex job sites — from tight residential lots in Kleinburg to large commercial pours near VMC.
            </p>
            <p className="text-white/85 text-lg font-medium">
              If you want the cheapest truck available, we might not be it. If you want concrete that is right and a supplier you can actually rely on, call us. 2,363 Google reviews from customers across the GTA reflect what two decades of that accountability looks like.
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
                Concrete We <span style={{ color: "#fe5f00" }}>Supply in Vaughan</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Vaughan has one of the most diverse construction markets in the GTA — residential, commercial, industrial, and luxury estate all running simultaneously. We cover all of it.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Residential Concrete Vaughan
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Vaughan's residential market runs the full spectrum — new subdivision builds in Maple and Kleinburg, estate renovations in Woodbridge, infill projects in Concord. Each has different concrete needs, and we supply to all of them. Driveways, garage floors, basement slabs, walkways, patios, pool surrounds — we supply the right mix for the application and deliver in the window that works for your contractor. If your finishing crew is on site at 7am, the truck is there before 7am.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Commercial Concrete Vaughan
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Vaughan Metropolitan Centre alone has generated years of commercial concrete demand — office towers, retail podiums, mixed-use developments. Add the ongoing commercial growth along Highway 400, Jane Street, and Rutherford Road and the commercial market here is substantial. We supply commercial-grade ready mix to the exact engineer specification, coordinated with site supervisors who are managing multiple trades on tight timelines. We understand that on a VMC-scale site, a concrete supplier who misses windows or delivers the wrong mix does not get a second call.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Industrial Concrete Vaughan
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Vaughan's industrial parks — along Highway 27, in the Steeles corridor, and throughout the Woodbridge industrial area — require high-strength concrete with consistent PSI and full documentation. Equipment pads, warehouse slabs, mezzanine supports, loading dock aprons. We supply industrial-grade ready mix to Vaughan's industrial sector with quality assurance records on every pour.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  High-End Residential and Estate Work
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Kleinburg and parts of Woodbridge have a significant luxury residential market. Decorative concrete, exposed aggregate driveways, pool surrounds, and high-finish patios on large estate properties require a supplier who understands both the structural and visual requirements. We supply the mixes for this work and coordinate delivery to fit the scheduling constraints of estate renovation projects, which rarely run on a standard contractor timeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- MIX OPTIONS TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Mix Options for <span style={{ color: "#fe5f00" }}>Vaughan Projects</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>
          
          <div className="overflow-x-auto border border-orange-900/30 rounded-xl mb-8 shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Mix Type</th>
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Right For</th>
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>What It Delivers</th>
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
            Vaughan's construction season runs long — contractors here push into November and sometimes beyond. <strong style={{ color: "#fe5f00" }}>Cold-Crete</strong> is what makes that possible. Standard mixes hit a performance wall in cold temperatures. Cold-Crete does not. For aesthetic luxury builds in Woodbridge and Kleinburg, our <strong style={{ color: "#fe5f00" }}>SCC Mix</strong> flows effortlessly to provide a flawless finish without aggregate segregation.
          </p>
        </section>

        {/* --- TWO COLUMNS: AREAS & 20 YEARS --- */}
        <section className="bg-zinc-950 border-t border-orange-900/20">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Areas Served */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Where We <span style={{ color: "#fe5f00" }}>Deliver in Vaughan</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              
              <div className="overflow-hidden border border-orange-900/30 rounded-lg mb-6">
                <table className="w-full text-left">
                  <thead className="bg-zinc-900 border-b border-orange-900/30">
                    <tr>
                      <th className="p-3 md:p-4 text-[#fe5f00] font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Area</th>
                      <th className="p-3 md:p-4 text-[#fe5f00] font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Part of Vaughan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-900/20">
                    {areasServed.map((area, i) => (
                      <tr key={i} className="hover:bg-zinc-900/30">
                        <td className="p-3 md:p-4 text-white/90">{area.area}</td>
                        <td className="p-3 md:p-4 text-white/60">{area.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-white/80 italic">
                Not listed? Call <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We deliver across all of York Region and confirm addresses directly.
              </p>
            </div>

            {/* Twenty Years */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Twenty Years in This Market. <span style={{ color: "#fe5f00" }}>Here Is What That Actually Means.</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              
              <div className="space-y-6">
                <p className="text-white/80 text-lg">
                  When we say 20 years in the GTA concrete business, we mean our team has poured on every type of Vaughan project that has come and gone in that time — the pre-VMC subdivision era, the Highway 400 commercial boom, the Kleinburg luxury residential wave, the VMC tower years.
                </p>
                <p className="text-white/80 text-lg">
                  We know the roads, the traffic patterns, the access restrictions on specific developments, and the site managers who run the major projects. That knowledge is not something a new supplier can replicate.
                </p>
                <p className="text-white/80 text-lg font-medium text-[#fe5f00]">
                  We are a family business. When you call, you speak to someone who is directly responsible for your order. 
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              What Vaughan <span style={{ color: "#fe5f00" }}>Customers Ask Us</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-zinc-900 border border-orange-900/30 p-6 md:p-8 rounded-xl">
                <h3 className="font-bold text-xl md:text-2xl mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {faq.q}
                </h3>
                <p className="text-white/70 text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA / QUOTE --- */}
        <section className="bg-zinc-900 border-t-4 border-[#fe5f00] py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-black uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Get a Free Quote for <br /> <span style={{ color: "#fe5f00" }}>Concrete Delivery in Vaughan</span>
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
            
            <a href="tel:6478914740" className="inline-flex items-center gap-3 bg-[#111] text-[#fe5f00] font-black text-2xl tracking-widest py-4 px-10 rounded-full hover:bg-[#222] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(254,95,0,0.2)]">
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
