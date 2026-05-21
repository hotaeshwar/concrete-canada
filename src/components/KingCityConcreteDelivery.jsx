import React, { useEffect } from "react";
import SEO from "./Seo";

export default function KingCityConcreteDelivery() {
  const specialtyMixes = [
    { type: "Standard Ready Mix", application: "Driveways, patios, general slabs", feature: "Reliable 25–30 MPa, broadly applicable" },
    { type: "High-Strength Mix", application: "Farm floors, industrial pads, foundations", feature: "35–40+ MPa for heavy load applications" },
    { type: "SCC Mix (Self-Compacting)", application: "Complex formwork, estate finishing work", feature: "Flows without vibration, excellent surface finish" },
    { type: "Cold-Crete (Winter Formula)", application: "Cold weather and late-season pours", feature: "Engineered for strength gain in low temperatures" },
    { type: "Custom Strength Mixes", application: "Commercial and agricultural builds", feature: "PSI specified to engineer requirements" },
  ];

  const areasServed = [
    { area: "King City", location: "Central King Township" },
    { area: "Schomberg", location: "Northwest King Township" },
    { area: "Nobleton", location: "Southwest King Township" },
    { area: "Kettleby", location: "East King Township" },
    { area: "Pottageville", location: "Central King Township" },
    { area: "Lloydtown", location: "North King Township" },
    { area: "Adjacent to Vaughan", location: "South King Township" },
    { area: "Adjacent to Newmarket", location: "East King Township" },
  ];

  const faqs = [
    {
      q: "How much notice do I need to book concrete delivery in King City?",
      a: "For residential and farm orders in King City, we recommend at least 48 hours notice given the rural delivery routes. Larger commercial pours benefit from more lead time. Call as early as possible to lock in your window."
    },
    {
      q: "Do you deliver ready mix concrete in King City during winter?",
      a: "Yes. Our Cold-Crete formula is engineered for low-temperature pours. We deliver year-round across King City and King Township and will advise on the right mix for your cold-weather project."
    },
    {
      q: "What concrete strength is needed for a farm floor in King Township?",
      a: "Farm floors and agricultural pads typically require a minimum 32 MPa mix, with higher-strength options for heavy equipment applications. We will confirm the right specification for your specific use when you call."
    },
    {
      q: "Do you serve Schomberg and Nobleton as well?",
      a: "Yes. We cover all of King Township including Schomberg, Nobleton, Kettleby, and surrounding areas. Call to confirm delivery for your address."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Top Rated Ready Mix Concrete Delivery in King City"
        description="Need ready mix concrete delivery in King City? Wilches Ready Mix serves King City and King Township with residential, estate, farm & commercial concrete. 20+ years GTA experience. Call 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-delivery-king-city/"
        keywords="Ready Mix Concrete Delivery in King City, Concrete delivery King City, Concrete supplier King City, Concrete King City Ontario, Ready mix concrete King City Ontario, Concrete delivery King Township, Residential concrete King City, Farm concrete King Township, Agricultural concrete King Township, Commercial concrete King City, Concrete near me King City, Concrete company King City, On-site concrete King City, Concrete pouring King City, Concrete contractor King City, Best concrete supplier King City, Affordable concrete delivery King City"
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
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>Delivery in King City</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                King City and King Township sit north of Toronto in York Region, and the construction work here has its own character. This is a market defined by estate homes, equestrian properties, hobby farms, and high-end residential builds on large lots — alongside commercial development along King Road and Highway 400.
              </p>
              <p>
                Contractors working in King City need a supplier who can handle the logistics of rural and semi-rural delivery without compromising on mix quality. At <strong className="text-white">Wilches Ready Mix Concrete Inc.</strong>, we have been delivering ready mix concrete in King City and across the GTA for over 20 years. Family-owned, Etobicoke-based, over 1,500 completed projects. Every load batched at our plant, quality-checked, and delivered ready to pour — wherever the site is.
              </p>
            </div>
          </div>
        </section>

        {/* --- WHY QUALITY MATTERS --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black uppercase leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Why Concrete Quality <span style={{ color: "#fe5f00" }}>Matters in King City</span> and King Township
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg">
              King Township's mix of rural roads, long driveways, and large-lot properties creates delivery conditions that not every supplier handles well. Beyond logistics, the concrete itself has to be right.
            </p>
            <p className="text-white/80 text-lg">
              Ontario's freeze-thaw cycle affects King City just as much as any GTA neighbourhood — and in some cases more, given the rural exposure. Exterior concrete that skips air entrainment or uses the wrong water-to-cement ratio will start showing surface damage within a few winters. That is a problem on any job, but on a high-end estate property, it is a costly one.
            </p>
            <p className="text-white/80 text-lg">
              Every batch we deliver to King City is produced with certified aggregates, a controlled water-to-cement ratio, and proper air entrainment on all exterior mixes. Quality is checked at our plant before the truck leaves.
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
                Concrete Services We <span style={{ color: "#fe5f00" }}>Deliver in King City</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                From a new estate driveway in King City to a barn floor pour on a King Township farm, we have the right mix and the delivery experience for every type of project in this area.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Residential Concrete King City
                </h3>
                <p className="text-white/70 leading-relaxed">
                  King City homeowners come to us for estate driveways, garage floors, basement slabs, walkways, pool surrounds, and decorative concrete applications. In this market, the visual and structural standards are high — a driveway on a King City estate property needs to look right and perform right for decades. We supply the correct mix for each application in the right volume. We tell you upfront what strength rating your job needs for Ontario conditions. And we show up in the scheduled window, regardless of where the property sits.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Farm and Agricultural Concrete King Township
                </h3>
                <p className="text-white/70 leading-relaxed">
                  King Township has a significant agricultural community — horse farms, hobby farms, and working properties that all have concrete needs specific to that use. Barn floors, equipment pads, farm laneways, feed lot surfaces, and grain storage aprons all require durable, high-strength concrete that holds up under heavy equipment and Ontario weather. We supply agricultural-grade ready mix for King Township farm projects. These pours have different requirements than residential slabs, and we understand what they need.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Commercial Concrete King City
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Commercial development along King Road and the Highway 400 corridor in King Township requires concrete that meets engineer specifications and arrives on schedule. We supply commercial-grade ready mix to the exact PSI your project requires, coordinated directly with your site supervisor.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Municipal Projects
                </h3>
                <p className="text-white/70 leading-relaxed">
                  We have supplied concrete for public infrastructure work throughout York Region and the GTA. Road base, sidewalk programs, and municipal building projects carry specific mix design and documentation requirements that we are equipped to meet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SPECIALTY MIXES TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Specialty Concrete Mixes <span style={{ color: "#fe5f00" }}>Available for King City Delivery</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>
          
          <div className="overflow-x-auto border border-orange-900/30 rounded-xl mb-8 shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Mix Type</th>
                  <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Best Application</th>
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
          <p className="text-center text-white/80 text-lg max-w-3xl mx-auto">
            For King City contractors working on estate and luxury residential projects, <strong style={{ color: "#fe5f00" }}>SCC Mixes</strong> are particularly useful where a high-quality decorative finish is required without vibration marks or surface imperfections. <strong style={{ color: "#fe5f00" }}>Cold-Crete</strong> covers the late-season and winter pours that King Township's agricultural clients often cannot avoid.
          </p>
        </section>

        {/* --- TWO COLUMNS: AREAS & WHY CHOOSE US --- */}
        <section className="bg-zinc-950 border-t border-orange-900/20">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Areas Served */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Areas We <span style={{ color: "#fe5f00" }}>Serve in King City</span> and King Township
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              
              <div className="overflow-hidden border border-orange-900/30 rounded-lg mb-6">
                <table className="w-full text-left">
                  <thead className="bg-zinc-900 border-b border-orange-900/30">
                    <tr>
                      <th className="p-3 md:p-4 text-[#fe5f00] font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Area</th>
                      <th className="p-3 md:p-4 text-[#fe5f00] font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Location</th>
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
                Not on this list? Call <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We deliver across York Region and the GTA and will confirm delivery to your address directly.
              </p>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Why King City Contractors Choose <span style={{ color: "#fe5f00" }}>Wilches Ready Mix</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              
              <div className="space-y-6">
                <p className="text-white/80 text-lg">
                  King City and King Township are not the easiest delivery territory. Long laneways, rural roads, and properties set well back from main roads require a supplier who plans the logistics properly.
                </p>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    We have been supplying ready mix concrete delivery in King City and across the GTA for over 20 years. Our drivers know this region.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    We are a family business — when you call, you speak to someone accountable for your order, not a dispatch centre. We confirm what we can deliver and we do not overbook.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    Every batch is checked before it leaves our plant. Over 2,363 Google reviews from GTA customers reflect what that standard looks like over time.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Common Questions About <span style={{ color: "#fe5f00" }}>Ready Mix Concrete Delivery in King City</span>
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
              Get a Free Quote for <br /> <span style={{ color: "#fe5f00" }}>Concrete Delivery in King City</span>
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
