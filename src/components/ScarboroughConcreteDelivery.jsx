import React, { useEffect } from "react";
import SEO from "./Seo";

export default function ScarboroughConcreteDelivery() {
  const specialtyMixes = [
    { type: "Standard Ready Mix", application: "Driveways, patios, general slabs", feature: "Consistent 25–30 MPa, broadly applicable" },
    { type: "High-Strength Mix", application: "Industrial floors, structural foundations", feature: "35–40+ MPa for heavy load applications" },
    { type: "SCC Mix", application: "Complex formwork, tight access sites", feature: "Self-compacting, no vibration needed" },
    { type: "Cold-Crete", application: "Winter and late-season pours", feature: "Engineered for low-temperature strength gain" },
    { type: "Custom Strength Mixes", application: "Commercial and industrial builds", feature: "PSI specified to engineer requirements" },
  ];

  const areasServed = [
    { area: "Agincourt", location: "North Scarborough" },
    { area: "Malvern", location: "Northeast Scarborough" },
    { area: "Rouge Hill & Port Union", location: "East Scarborough" },
    { area: "West Hill", location: "East Scarborough" },
    { area: "Woburn", location: "Central Scarborough" },
    { area: "Birchcliffe-Cliffside", location: "South Scarborough" },
    { area: "Guildwood", location: "Southwest Scarborough" },
    { area: "Morningside", location: "Central-East Scarborough" },
    { area: "Scarborough Village", location: "South Scarborough" },
  ];

  const faqs = [
    {
      q: "How much notice do I need to place an order in Scarborough?",
      a: "For standard residential orders, 24 to 48 hours is usually enough. Larger commercial or industrial pours benefit from more lead time. Call us as early as possible to secure your preferred delivery window."
    },
    {
      q: "Do you deliver in winter across Scarborough?",
      a: "Yes. Our Cold-Crete winter formula is specifically designed for low-temperature pours. We deliver year-round, and our team will recommend the right mix and curing approach for your cold-weather project."
    },
    {
      q: "What strength do I need for a driveway in Scarborough?",
      a: "For a residential driveway in Ontario, a 32 MPa air-entrained mix is the standard recommendation to handle freeze-thaw conditions. We will confirm the right specification for your application when you call."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Ready Mix Concrete Scarborough | Wilches Ready Mix Concrete Inc"
        description="Wilches Ready Mix has delivered quality concrete across Scarborough for 20+ years. Residential, commercial & industrial. 1,500+ GTA projects. Call 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-scarborough/"
        keywords="Concrete supplier Scarborough | Concrete Scarborough Ontario | Concrete delivery Scarborough | Ready mix concrete Scarborough Ontario | Residential concrete Scarborough | Commercial concrete Scarborough | Industrial concrete Scarborough"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      
      <div className="bg-black text-white font-['Barlow',sans-serif] w-full min-h-screen">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 py-20 md:py-32 border-b border-orange-900/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(254,95,0,0.15), transparent 60%)" }} />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h1 className="font-black uppercase leading-none mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>Scarborough</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                If you are looking for ready mix concrete in Scarborough, you already know that the wrong supplier can stall an entire project. Concrete that arrives late, or arrives with the wrong mix, costs time and money that nobody has to spare. At <strong className="text-white">Wilches Ready Mix Concrete Inc.</strong>, we have been serving Scarborough contractors and homeowners for over 20 years — and in that time, showing up on schedule with the right product has been the foundation of everything we do.
              </p>
              <p>
                We are a family-owned company based in Etobicoke with over 1,500 completed projects across the Greater Toronto Area. Every batch is produced at our plant under controlled conditions, quality-tested before it leaves, and delivered to your site ready to pour. No shortcuts, no guesswork — just consistent concrete that holds up in Ontario's climate, season after season.
              </p>
            </div>
          </div>
        </section>

        {/* --- WHY QUALITY MATTERS --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Why Ready Mix Concrete Is the Right Call for <span style={{ color: "#fe5f00" }}>Scarborough Projects</span>
            </h2>
            <div className="w-16 h-1 mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg mb-4">
              Ontario's freeze-thaw cycle is one of the most demanding conditions concrete can face. A slab that looks perfect in the fall can start scaling and cracking by spring if the mix design was not right. That is not a delivery problem — it is a product problem, and it is completely avoidable.
            </p>
            <p className="text-white/80 text-lg">
              Our ready mix concrete in Scarborough is designed specifically for Ontario conditions. The water-to-cement ratio is tightly controlled, the aggregate is graded and tested, and air entrainment is built into the mixes that need it. Every batch is checked before dispatch. When our truck pulls up to your site, you are getting a product that was made correctly, not just made quickly.
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
                Concrete Services We <span style={{ color: "#fe5f00" }}>Provide in Scarborough</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Residential Concrete Scarborough", text: "Homeowners come to us for driveways, garage floors, front walkways, backyard patios, and basement slabs. These are significant investments, and the margin for error is low. A driveway that cracks within two winters is not just an eyesore — it is an expensive redo. We supply the right mix and the right volume for each residential application. We will tell you what strength rating your job actually needs rather than defaulting to whatever is cheapest. If you have a contractor and a finishing crew waiting on site, we arrive in the window we committed to." },
                { title: "Commercial Concrete Scarborough", text: "Commercial projects involve more moving parts — structural specifications, inspection checkpoints, multiple trades on site, and tight pour windows. Our commercial-grade mix is supplied to the exact specifications your engineer or project manager provides, and we schedule deliveries around your timeline, not ours. We have done enough GTA commercial work to understand how a concrete delivery fits into a larger project schedule. We communicate clearly, adjust when site conditions change, and deliver when it counts." },
                { title: "Industrial Concrete Scarborough", text: "Industrial floors, equipment pads, logistics facilities, and manufacturing builds require higher PSI ratings and absolute batch-to-batch consistency. We supply high-strength mixes for industrial applications across Scarborough, with full quality documentation on every pour." },
                { title: "Municipal Projects", text: "We have supplied concrete for public infrastructure work throughout the GTA — sidewalk programs, road base applications, and municipal building projects. Public-sector contracts have specific documentation and mix design requirements, and we have the experience to meet them." },
              ].map((svc, idx) => (
                <div key={idx} className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                  <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>{svc.title}</h3>
                  <p className="text-white/70 leading-relaxed">{svc.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SPECIALTY MIXES TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Specialty Mixes <span style={{ color: "#fe5f00" }}>Available in Scarborough</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Not every job takes a standard mix. We offer a full range to match whatever your project actually requires.
            </p>
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
            <strong style={{ color: "#fe5f00" }}>Highlight for Scarborough contractors:</strong> Our <strong className="text-white">Cold-Crete</strong> formula is worth highlighting specifically for Scarborough contractors who push into late fall and early spring. Standard mixes become unreliable below certain temperatures. Cold-Crete maintains proper strength development in Ontario winter conditions, which means your schedule does not have to stop when the temperature drops.
          </p>
        </section>

        {/* --- TWO COLUMNS: AREAS & WHY CHOOSE US --- */}
        <section className="bg-zinc-950 border-t border-orange-900/20">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Areas Served */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Scarborough Neighbourhoods <span style={{ color: "#fe5f00" }}>We Serve</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              <p className="text-white/80 mb-6">
                Our delivery fleet runs throughout Scarborough daily, covering the full borough from west to east and north to south.
              </p>
              
              <div className="overflow-hidden border border-orange-900/30 rounded-lg mb-6">
                <table className="w-full text-left">
                  <thead className="bg-zinc-900 border-b border-orange-900/30">
                    <tr>
                      <th className="p-3 md:p-4 text-[#fe5f00] font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Neighbourhood</th>
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
                Not on this list? Call us at <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We deliver across the entire GTA and will confirm your address directly.
              </p>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                What Sets Wilches Apart From Other Concrete Suppliers in <span style={{ color: "#fe5f00" }}>Scarborough</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              
              <div className="space-y-6">
                <p className="text-white/80 text-lg">
                  There are other suppliers in the GTA, and some of them are good. What brings contractors back to us is simple: we do what we say we will do.
                </p>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    <strong className="text-white">Experience:</strong> We have been supplying ready mix concrete in Scarborough and across the GTA for over 20 years. Our team has worked in every kind of Ontario weather, on every kind of project, and in every part of this city.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    <strong className="text-white">Personal Touch:</strong> We are not a call centre — when you phone us, you speak to someone who knows your order and knows the route to your site. We are honest about lead times. If a day does not work, we say so rather than confirm and then fail to show.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    <strong className="text-white">Quality Assurance:</strong> Our quality assurance runs on every single batch. We do not send out concrete that has not been checked. 2,363 Google reviews from GTA customers reflect that standard over time.
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
              Common Questions About <span style={{ color: "#fe5f00" }}>Ready Mix Concrete Scarborough</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-zinc-900 border border-orange-900/30 p-6 md:p-8 rounded-xl">
                <h3 className="font-bold text-xl md:text-2xl mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{faq.q}</h3>
                <p className="text-white/70 text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA / QUOTE --- */}
        <section className="bg-zinc-900 border-t-4 border-[#fe5f00] py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Request Ready Mix Concrete Delivery in <span style={{ color: "#fe5f00" }}>Scarborough</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Wilches Ready Mix Concrete Inc. is ready for your next Scarborough project. Call today for a free estimate.
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
