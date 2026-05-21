import React, { useEffect } from "react";
import SEO from "./Seo";

export default function BarrieConcreteDelivery() {
  const specialtyMixes = [
    { type: "Standard Ready Mix", application: "Driveways, patios, general slabs", feature: "Reliable 25–30 MPa, broadly applicable" },
    { type: "High-Strength Mix", application: "Industrial floors, structural foundations", feature: "35–40+ MPa for heavy load applications" },
    { type: "SCC Mix (Self-Compacting)", application: "Complex formwork, confined access", feature: "Flows without vibration, excellent finish" },
    { type: "Cold-Crete (Winter Formula)", application: "Cold weather and late-season pours", feature: "Engineered for strength gain in low temperatures" },
    { type: "Custom Strength Mixes", application: "Commercial and industrial builds", feature: "PSI specified to engineer requirements" },
  ];

  const areasServed = [
    { area: "South Barrie", location: "South Barrie" },
    { area: "Allandale", location: "Southwest Barrie" },
    { area: "Bayfield Street Corridor", location: "Central Barrie" },
    { area: "Essa Road Area", location: "East Barrie" },
    { area: "Holly", location: "Southeast Barrie" },
    { area: "Painswick", location: "Southeast Barrie" },
    { area: "Innisfil", location: "South of Barrie" },
    { area: "Angus / Essa Township", location: "West of Barrie" },
  ];

  const faqs = [
    {
      q: "How far in advance do I need to book concrete delivery in Barrie?",
      a: "Given the distance from our Etobicoke plant, we recommend at least 48 hours notice for residential orders. Commercial and industrial pours benefit from more lead time. Call us as early as possible."
    },
    {
      q: "Do you deliver ready mix concrete in Barrie during winter?",
      a: "Yes. Our Cold-Crete formula is engineered for low-temperature pours. We deliver to Barrie year-round and will advise on the right mix and curing approach for your cold-weather project."
    },
    {
      q: "What concrete strength is recommended for a driveway in Barrie?",
      a: "For a residential driveway in Ontario — especially in Barrie's climate — a 32 MPa air-entrained mix is the standard recommendation. We will confirm the right spec for your specific job when you call."
    },
    {
      q: "Do you serve areas around Barrie like Innisfil and Angus?",
      a: "Yes. We cover Barrie and surrounding Simcoe County communities. Call to confirm delivery for your specific address."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Best Ready Mix Concrete Delivery in Barrie"
        description="Need ready mix concrete delivery in Barrie? Wilches Ready Mix serves Barrie contractors and homeowners with residential, commercial & industrial concrete. 20+ years GTA experience. Call 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-delivery-barrie/"
        keywords="Concrete delivery Barrie, Concrete supplier Barrie, Concrete Barrie Ontario, Ready mix concrete Barrie Ontario, Concrete delivery Simcoe County, Residential concrete Barrie, Commercial concrete Barrie, Industrial concrete Barrie, Concrete near me Barrie, Concrete company Barrie, On-site concrete Barrie, Concrete pouring Barrie, Concrete contractor Barrie, Best concrete supplier Barrie, Affordable concrete delivery Barrie"
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
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>Delivery in Barrie</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                Barrie is growing fast. The city sits at the southern tip of Georgian Bay, and its construction market reflects that — new residential communities in the south end, commercial expansion along Bayfield Street and Essa Road, and industrial development near the 400 corridor.
              </p>
              <p>
                Contractors working in Barrie need a supplier who can cover the distance without cutting corners on quality. At <strong className="text-white">Wilches Ready Mix Concrete Inc.</strong>, we deliver ready mix concrete to Barrie and surrounding Simcoe County from our Etobicoke plant. Over 20 years in this business. Over 1,500 projects across the GTA and beyond. Every load batched to spec, quality-checked, and delivered ready to pour.
              </p>
            </div>
          </div>
        </section>

        {/* --- WHY QUALITY MATTERS --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black uppercase leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Why Concrete Quality <span style={{ color: "#fe5f00" }}>Matters More</span> in Barrie
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg">
              Barrie gets hit hard by Ontario winters. Sitting close to Georgian Bay means more moisture, more freeze-thaw stress, and more damage to concrete that was not mixed right.
            </p>
            <p className="text-white/80 text-lg">
              Surface scaling, cracking, spalling — these are not accidents. They happen when air entrainment is skipped, or when the mix design does not account for the local climate.
            </p>
            <p className="text-white/80 text-lg">
              Every load we deliver to Barrie is produced with certified aggregates, a controlled water-to-cement ratio, and proper air entrainment on all exterior applications. Quality is checked at the plant before the truck leaves — not on site after something goes wrong.
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
                Concrete Services We <span style={{ color: "#fe5f00" }}>Deliver in Barrie</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                From small residential pours to large commercial foundations, we have the mix and the delivery capacity to serve Barrie projects of any size.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Residential Concrete Barrie
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Barrie homeowners come to us for driveways, garage floors, walkways, patios, and basement slabs. These jobs happen once, and the mix quality determines how long the work actually holds up through Barrie winters. We supply the right mix in the right volume. No overselling. We tell you exactly what strength your project needs, and we show up when scheduled — not whenever the truck is free.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Commercial Concrete Barrie
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Retail developments, office buildings, mixed-use projects — Barrie's commercial sector keeps growing, and every project needs concrete that meets engineer specs and arrives on a schedule that works around other trades. We supply commercial-grade ready mix to the exact PSI required and coordinate delivery directly with your site supervisor. We have done enough of this work to know how to fit into a busy site without causing problems.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Industrial Concrete Barrie
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Industrial builds near Highway 400 and Barrie's south end require high-strength mixes with consistent PSI across multiple pours. Equipment pads, warehouse floors, loading areas — we supply industrial-grade ready mix with full quality documentation on every pour.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Municipal Projects
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Sidewalk programs, road base, and municipal building projects in Simcoe County come with specific mix design and documentation requirements. We have met those requirements on public-sector projects across the GTA and can do the same for Barrie area work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SPECIALTY MIXES TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Specialty Concrete Mixes <span style={{ color: "#fe5f00" }}>Available for Barrie Delivery</span>
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
            <strong style={{ color: "#fe5f00" }}>Cold-Crete</strong> is especially relevant for Barrie. The city's winters are longer and colder than most of the GTA, and standard concrete mixes lose reliable performance once temperatures drop below a certain point. Cold-Crete is built for exactly those conditions — Barrie contractors do not need to shut down pours in late October and wait until spring.
          </p>
        </section>

        {/* --- TWO COLUMNS: AREAS & WHY CHOOSE US --- */}
        <section className="bg-zinc-950 border-t border-orange-900/20">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Areas Served */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Areas We <span style={{ color: "#fe5f00" }}>Serve in Barrie</span>
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
                Not on this list? Call <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We confirm delivery to all Barrie area addresses directly.
              </p>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Why Barrie Contractors Choose <span style={{ color: "#fe5f00" }}>Wilches Ready Mix</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              
              <div className="space-y-6">
                <p className="text-white/80 text-lg">
                  We are not the closest plant to Barrie — and we are upfront about that. What we offer is quality and reliability that a lot of local suppliers do not consistently deliver.
                </p>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    We have been in this business for over 20 years. Our team has poured in every Ontario condition imaginable, on every type of project.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    We are a family operation — the people you speak to are the people responsible for your order.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    We do not overbook. We do not confirm deliveries we cannot make. Every batch is checked before it leaves our plant. Over 2,363 Google reviews from GTA customers speak to what that standard looks like.
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
              Common Questions About <span style={{ color: "#fe5f00" }}>Ready Mix Concrete Delivery in Barrie</span>
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
            <h2 className="font-black uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Get a Free Quote for <br /> <span style={{ color: "#fe5f00" }}>Concrete Delivery in Barrie</span>
            </h2>
            
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
