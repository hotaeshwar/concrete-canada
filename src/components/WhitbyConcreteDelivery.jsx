import React, { useEffect } from "react";
import SEO from "./Seo";

export default function WhitbyConcreteDelivery() {
  const specialtyMixes = [
    { type: "Standard Ready Mix", application: "Driveways, patios, general slabs", feature: "Reliable 25–30 MPa, broad applicability" },
    { type: "High-Strength Mix", application: "Industrial floors, structural foundations", feature: "35–40+ MPa for heavy load capacity" },
    { type: "SCC Mix (Self-Compacting)", application: "Complex formwork, confined access", feature: "Flows without vibration, excellent finish" },
    { type: "Cold-Crete (Winter Formula)", application: "Cold weather and late-season pours", feature: "Maintains strength gain in low temperatures" },
    { type: "Custom Strength Mixes", application: "Commercial and industrial builds", feature: "PSI specified to engineer requirements" },
  ];

  const areasServed = [
    { area: "Downtown Whitby", location: "Central Whitby" },
    { area: "Brooklin", location: "North Whitby" },
    { area: "Lynde Creek", location: "West Whitby" },
    { area: "Rolling Acres", location: "East Whitby" },
    { area: "Pringle Creek", location: "Central Whitby" },
    { area: "Blue Grass Meadows", location: "East Whitby" },
    { area: "Port Whitby", location: "South Whitby" },
    { area: "Adjacent to Ajax & Oshawa", location: "Durham Region" },
  ];

  const faqs = [
    {
      q: "How far in advance do I need to order ready mix concrete in Whitby?",
      a: "For standard residential orders, 24 to 48 hours notice is typically sufficient. Larger commercial or industrial pours benefit from more lead time for scheduling and coordination. Contact us as early as possible to lock in your preferred delivery window."
    },
    {
      q: "Do you deliver ready mix concrete in Whitby during winter?",
      a: "Yes. Our Cold-Crete winter formula is engineered for low-temperature pours in Ontario conditions. We deliver year-round across Whitby and Durham Region, and our team will advise on the correct mix and curing approach for your cold-weather project."
    },
    {
      q: "What concrete strength do I need for a driveway in Whitby?",
      a: "For a residential driveway in Ontario, a 32 MPa air-entrained mix is the standard recommendation to handle the local freeze-thaw cycle. We will confirm the right specification for your specific application when you call."
    },
    {
      q: "Do you serve areas near Whitby such as Ajax and Oshawa?",
      a: "Yes. We deliver across Durham Region including Ajax, Oshawa, Pickering, and surrounding communities. Call us to confirm delivery for your specific address."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Ready Mix Concrete Whitby | Concrete Delivery"
        description="Need ready mix concrete in Whitby? Wilches Ready Mix delivers residential, commercial & industrial concrete across Whitby and Durham Region. 20+ years GTA experience. Call 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-delivery-whitby/"
        keywords="Concrete Whitby, Concrete near me Whitby, Ready mix concrete Whitby, Concrete Delivery Whitby"
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
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>Whitby</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                Whitby is one of the fastest-growing communities in Durham Region, and construction here has not slowed down. New subdivisions are going up along the 412 corridor, commercial development continues near Thickson Road, and contractors across the town need a concrete supplier who understands the pace of work in this market. 
              </p>
              <p>
                At <strong className="text-white">Wilches Ready Mix Concrete Inc.</strong>, we have been delivering ready mix concrete in Whitby and across the GTA for over 20 years, and we understand exactly what it takes to keep a job site moving.
              </p>
              <p>
                We are a family-owned concrete company based in Etobicoke. With over 1,500 completed projects across Toronto and the surrounding region, our reputation is built on one thing: concrete that arrives on time, at the right specification, ready to pour. If you are planning a pour in Whitby — whether it is a residential driveway, a commercial foundation, or a large industrial slab — here is what we can do for your project.
              </p>
            </div>
          </div>
        </section>

        {/* --- WHY QUALITY MATTERS --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Why Ready Mix Concrete Is the Right Choice for <span style={{ color: "#fe5f00" }}>Whitby Projects</span>
            </h2>
            <div className="w-16 h-1 mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg mb-4">
              Durham Region experiences the same brutal Ontario freeze-thaw cycles as the rest of the province, and Whitby is no exception. Concrete that is not mixed to the right specification for local conditions will fail faster — surface scaling, cracking, and spalling within a few winters. That is an expensive problem, and it is entirely preventable with the right mix design from the start.
            </p>
            <p className="text-white/80 text-lg">
              Our ready mix concrete in Whitby is produced at our batching plant under controlled conditions. Every batch uses certified aggregates, properly proportioned cement, and admixtures selected for the application and the season. Air entrainment is included in all exterior mixes to protect against freeze-thaw damage. Quality checks run on every load before it leaves our plant. By the time our truck arrives at your Whitby site, the work of getting the mix right is already done.
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
                Concrete Services We <span style={{ color: "#fe5f00" }}>Deliver in Whitby</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Residential Concrete Whitby", text: "Whitby homeowners come to us for driveways, garage floors, front and rear walkways, exposed aggregate patios, and basement floor slabs. These projects are straightforward in scope but they matter — a residential concrete job done right will last for decades, and one done wrong will need to be replaced within a few years. We supply residential customers with the correct mix for their application, delivered in the volume they need. We show up in the scheduled window, which matters when a homeowner has a contractor and a finishing crew on site waiting for the truck." },
                { title: "Commercial Concrete Whitby", text: "Commercial development in Whitby is active — retail, office, and mixed-use projects require concrete that meets engineer specifications and arrives on a pour schedule coordinated with other trades. Our commercial-grade ready mix is supplied to the exact PSI and mix design your project requires, and we work with your site supervisor to schedule deliveries around your pour windows. We know how to communicate on a busy site." },
                { title: "Industrial Concrete Whitby", text: "Industrial projects in the Whitby and Ajax corridor demand higher-strength concrete, tighter consistency across multiple pours, and documentation to back it up. We supply high-strength ready mix for industrial applications in Whitby, including manufacturing facilities, equipment pads, warehouse floors, and logistics infrastructure, with quality assurance records on every pour." },
                { title: "Municipal Projects", text: "We have supplied concrete for public-sector infrastructure work throughout Durham Region and the GTA. Road base, sidewalk and curb programs, and municipal building projects have specific mix design and documentation requirements that we are equipped to meet." },
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
              Specialty Concrete Mixes <span style={{ color: "#fe5f00" }}>Available in Whitby</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Every project has different demands. We offer a complete range of specialty mixes so contractors and homeowners always have exactly the right product for the job at hand.
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
            <strong style={{ color: "#fe5f00" }}>Highlight for Whitby contractors:</strong> For Whitby contractors working through Ontario winters, Cold-Crete is particularly important. Standard concrete mixes struggle to develop proper strength when temperatures drop below the threshold for normal hydration. Our <strong className="text-white">Cold-Crete</strong> formula is specifically engineered to handle those conditions — which means your pour schedule in Whitby does not have to stop in October and wait until April.
          </p>
        </section>

        {/* --- TWO COLUMNS: AREAS & WHY CHOOSE US --- */}
        <section className="bg-zinc-950 border-t border-orange-900/20">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Areas Served */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Areas We <span style={{ color: "#fe5f00" }}>Serve</span> in Whitby
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              <p className="text-white/80 mb-6">
                Our delivery fleet covers all of Whitby and the surrounding Durham Region communities on a daily basis.
              </p>
              
              <div className="overflow-hidden border border-orange-900/30 rounded-lg mb-6">
                <table className="w-full text-left">
                  <thead className="bg-zinc-900 border-b border-orange-900/30">
                    <tr>
                      <th className="p-3 md:p-4 text-[#fe5f00] font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Area</th>
                      <th className="p-3 md:p-4 text-[#fe5f00] font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Region</th>
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
                If your project is outside these areas, call us at <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We serve the entire GTA and will confirm delivery to your specific location directly.
              </p>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Why Whitby Contractors and Homeowners Choose <span style={{ color: "#fe5f00" }}>Wilches</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              
              <div className="space-y-6">
                <p className="text-white/80 text-lg">
                  The concrete supply market in Durham Region is competitive. What keeps contractors coming back to us and referring us to others is not complicated — it is consistency and honesty.
                </p>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    <strong className="text-white">Accountability:</strong> We are a family business, which means when you call us, you speak to someone who is actually accountable for your order. We do not overbook and then fail to show.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    <strong className="text-white">Experience:</strong> In over 20 years, we have worked in every kind of Ontario weather, on projects ranging from residential patio pours to large multi-trade commercial builds.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    <strong className="text-white">Quality Assurance:</strong> Our quality assurance runs on every single batch. 2,363 Google reviews from customers across the GTA reflect what two decades of consistent work looks like in practice.
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
              Common Questions About <span style={{ color: "#fe5f00" }}>Ready Mix Concrete in Whitby</span>
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
              Get a Free Quote for <br /> <span style={{ color: "#fe5f00" }}>Ready Mix Concrete in Whitby</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Wilches Ready Mix Concrete Inc. is ready for your next Whitby project. Call today for a free estimate and to schedule your concrete delivery.
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
