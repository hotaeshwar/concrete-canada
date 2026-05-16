import React, { useEffect } from "react";
import SEO from "./Seo";

export default function PickeringConcreteDelivery() {
  const specialtyMixes = [
    { type: "Standard Ready Mix", application: "Driveways, patios, general slabs", feature: "Reliable 25–30 MPa, broadly applicable" },
    { type: "High-Strength Mix", application: "Industrial floors, structural foundations", feature: "35–40+ MPa for heavy load applications" },
    { type: "SCC Mix (Self-Compacting)", application: "Complex formwork, confined access areas", feature: "Flows without vibration, excellent surface finish" },
    { type: "Cold-Crete (Winter Formula)", application: "Cold weather and late-season pours", feature: "Engineered for strength gain in low temperatures" },
    { type: "Custom Strength Mixes", application: "Commercial and industrial builds", feature: "PSI specified to engineer requirements" },
  ];

  const areasServed = [
    { area: "Bay Ridges", location: "South Pickering" },
    { area: "Rougemount", location: "Central Pickering" },
    { area: "Dunbarton", location: "Central Pickering" },
    { area: "Highbush", location: "North Pickering" },
    { area: "Seaton", location: "North Pickering" },
    { area: "Liverpool", location: "Central Pickering" },
    { area: "Woodlands", location: "West Pickering" },
    { area: "Amberlea", location: "East Pickering" },
    { area: "Duffin Heights", location: "Northwest Pickering" },
  ];

  const faqs = [
    {
      q: "How much notice do I need to order ready mix concrete in Pickering?",
      a: "For standard residential orders, 24 to 48 hours is typically enough. Larger commercial or industrial pours benefit from additional lead time for scheduling and logistics coordination. Call us as early as possible to secure your preferred delivery window."
    },
    {
      q: "Do you deliver ready mix concrete in Pickering during winter months?",
      a: "Yes. Our Cold-Crete winter formula is engineered for low-temperature pours in Ontario conditions. We deliver year-round across Pickering and Durham Region, and our team will advise on the correct mix design and curing approach for your cold-weather project."
    },
    {
      q: "What PSI or MPa concrete do I need for a residential driveway in Pickering?",
      a: "For a residential driveway in Ontario, a 32 MPa air-entrained mix is the standard recommendation to handle the local freeze-thaw cycle effectively. We will confirm the right specification for your specific application when you call."
    },
    {
      q: "Do you also serve Ajax and Whitby from Pickering?",
      a: "Yes. We deliver across all of Durham Region including Ajax, Whitby, and Oshawa. Our fleet covers the full GTA corridor and we can confirm delivery to any address in the region."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Ready Mix Concrete Pickering | Concrete Delivery"
        description="Need ready mix concrete in Pickering? Wilches Ready Mix delivers residential, commercial & industrial concrete across Pickering and Durham Region. 20+ years GTA experience. Call 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-pickering/"
        keywords="Concrete delivery Pickering, Concrete supplier Pickering, Ready mix concrete Pickering Ontario, Residential concrete Pickering, Commercial concrete Pickering, Industrial concrete Pickering, Concrete near me Pickering, On-site concrete pouring Pickering"
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
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>Pickering</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                Pickering sits at the western edge of Durham Region, directly east of Toronto, and it is one of the most active construction corridors in the GTA. Residential development continues to push north toward the Seaton community, commercial projects cluster around Kingston Road and the Highway 401 interchange, and contractors working across the city need a concrete supplier who delivers without drama.
              </p>
              <p>
                At <strong className="text-white">Wilches Ready Mix Concrete Inc.</strong>, we have been supplying ready mix concrete in Pickering and across the GTA for over 20 years, and we have built our operation around exactly that kind of reliability.
              </p>
              <p>
                We are a family-owned company based in Etobicoke with over 1,500 completed projects across Toronto and the surrounding region. Every load we deliver is produced at our batching plant under controlled conditions, tested before it leaves, and delivered to your site ready to pour. If you are planning a concrete pour in Pickering — whether it is a residential slab, a commercial foundation, or an industrial floor — here is what working with us actually looks like.
              </p>
            </div>
          </div>
        </section>

        {/* --- WHY QUALITY MATTERS --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Why Ready Mix Concrete Matters for <span style={{ color: "#fe5f00" }}>Pickering Projects</span>
            </h2>
            <div className="w-16 h-1 mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg mb-4">
              Pickering's proximity to Lake Ontario does not protect it from Ontario's freeze-thaw cycle — if anything, the moisture levels in the area make proper air entrainment even more important for exterior concrete applications. A mix that was not designed for local conditions will start showing surface deterioration within a few winters. Scaling, cracking, and spalling are not random failures. They are the result of a mix design that did not account for where and how the concrete would actually perform.
            </p>
            <p className="text-white/80 text-lg">
              Our ready mix concrete in Pickering is produced to Ontario standards, with air entrainment built into all exterior mixes, aggregates that are graded and tested, and water-to-cement ratios that are controlled at the plant, not adjusted on site. Every batch is checked before dispatch. By the time our truck pulls up to your Pickering job site, the concrete in that drum is right.
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
                Concrete Services We Provide in <span style={{ color: "#fe5f00" }}>Pickering</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Whether you need concrete for a residential driveway, a commercial foundation, or a large industrial floor, Wilches Ready Mix has the right mix for your Pickering project. We serve homeowners, contractors, and site managers across the city with consistent quality and on-time delivery, every single pour.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Residential Concrete Pickering", text: "Homeowners in Pickering contact us for driveways, garage floors, front and rear walkways, patios, pool surrounds, and basement slabs. These are not complicated pours, but they are permanent — and a residential concrete job done to the wrong specification will fail well before its time. We supply the right mix for the application and the right volume for the job. We will tell you upfront what strength rating your driveway or slab actually needs for Ontario conditions rather than just quoting whatever is on the standard price sheet. We deliver in the window we agree on, which matters when you have a finishing crew waiting on site." },
                { title: "Commercial Concrete Pickering", text: "Pickering's commercial sector is growing — retail developments along Kingston Road, mixed-use projects near the GO station, and industrial expansion along the 401 corridor all require concrete that meets engineer specifications and arrives on schedule. Our commercial-grade ready mix is supplied to the exact PSI and mix design your project requires, coordinated with your site supervisor and delivered around your pour windows. We understand how concrete delivery fits into the larger rhythm of a commercial construction site. Multiple trades, inspection checkpoints, and sequential scheduling mean that a concrete supplier who does not communicate or misses delivery windows creates problems that ripple across the entire project. We have done enough of this work across the GTA to know how to avoid being that problem." },
                { title: "Industrial Concrete Pickering", text: "The industrial and logistics corridor along Highway 401 in Pickering demands concrete with higher strength ratings and rigorous consistency. Manufacturing facility floors, equipment pads, loading dock aprons, and warehouse slabs all require mixes engineered for continuous load stress and heavy traffic. We supply high-strength ready mix for industrial applications in Pickering with full quality documentation on every pour." },
                { title: "Municipal Projects", text: "We have experience supplying concrete for public infrastructure work throughout Durham Region and the broader GTA. Sidewalk and curb programs, road base applications, and municipal building projects carry specific mix design and documentation requirements that we are equipped to meet and have met many times before." },
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
              Specialty Concrete Mixes Available in <span style={{ color: "#fe5f00" }}>Pickering</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Different projects need different concrete. We offer a complete range of specialty mixes so that contractors and homeowners in Pickering always have the right product for the specific job.
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
            <strong style={{ color: "#fe5f00" }}>Highlight for Pickering contractors:</strong> SCC Mixes are increasingly in demand for Pickering renovation and retrofit projects where access for vibration equipment is tight but surface quality still matters. Cold-Crete is our winter solution — a formula specifically designed to maintain proper strength development when Ontario temperatures drop below the point where standard mixes become unreliable. Contractors who need to pour in November or March know how important that is.
          </p>
        </section>

        {/* --- TWO COLUMNS: AREAS & WHY CHOOSE US --- */}
        <section className="bg-zinc-950 border-t border-orange-900/20">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Areas Served */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Neighbourhoods and Areas We Serve in <span style={{ color: "#fe5f00" }}>Pickering</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              <p className="text-white/80 mb-6">
                Our delivery fleet covers all of Pickering daily, from the lakefront communities in the south to the newer development areas in the north.
              </p>
              
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
                Not seeing your neighbourhood? Call us at <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We serve the entire GTA and Durham Region and will confirm delivery to your address directly.
              </p>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Why Pickering Contractors and Homeowners Choose <span style={{ color: "#fe5f00" }}>Wilches</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              
              <div className="space-y-6">
                <p className="text-white/80 text-lg">
                  There are concrete suppliers in Durham Region and across the GTA. The reason contractors bring us back to their Pickering projects and refer us to other site managers is not complicated — we are consistent, we communicate honestly, and we deliver what we say we will.
                </p>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    <strong className="text-white">Accountability:</strong> We are a family business, which means accountability is not a corporate policy — it is personal. When you call us, you speak to someone who knows your order and takes responsibility for it.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    <strong className="text-white">Experience:</strong> We have been supplying ready mix concrete across Pickering and the GTA for over 20 years. Our team has poured in every kind of Ontario weather and on every scale of project.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    <strong className="text-white">Quality Assurance:</strong> Our quality assurance process runs on every single batch before it leaves our plant. Over 2,363 Google reviews from customers across the GTA reflect what two decades of that standard actually looks like in practice.
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
              Common Questions About <span style={{ color: "#fe5f00" }}>Ready Mix Concrete Pickering</span>
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
              Get a Free Quote for <br /> <span style={{ color: "#fe5f00" }}>Ready Mix Concrete Delivery in Pickering</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Wilches Ready Mix Concrete Inc. is ready for your next Pickering project. Call today for a free estimate and to schedule your concrete delivery.
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
