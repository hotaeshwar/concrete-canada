import React, { useEffect } from "react";
import SEO from "./Seo";

export default function NewmarketConcreteDelivery() {
  const specialtyMixes = [
    { type: "Standard Ready Mix", application: "Driveways, patios, general slabs", feature: "Reliable 25–30 MPa, broadly applicable" },
    { type: "High-Strength Mix", application: "Commercial slabs, industrial pads, foundations", feature: "35–40+ MPa for heavy load applications" },
    { type: "SCC Mix (Self-Compacting)", application: "Complex formwork, tight access residential pours", feature: "Flows without vibration, excellent surface finish" },
    { type: "Cold-Crete (Winter Formula)", application: "Cold weather and late-season pours", feature: "Engineered for strength gain in low temperatures" },
    { type: "Custom Strength Mixes", application: "Commercial and engineered builds", feature: "PSI specified to engineer requirements" },
  ];

  const areasServed = [
    { area: "Woodland Hills", location: "Northwest Newmarket" },
    { area: "Glenway Estates", location: "West Newmarket" },
    { area: "Summerhill Estates", location: "Southwest Newmarket" },
    { area: "Stonehaven-Wyndham", location: "Southeast Newmarket" },
    { area: "College Manor", location: "East Newmarket" },
    { area: "Bristol-London", location: "Central/North Newmarket" },
    { area: "Historic Main Street", location: "Downtown Newmarket" },
    { area: "Adjacent to Aurora", location: "South Boundary" },
    { area: "Adjacent to East Gwillimbury", location: "North Boundary" },
  ];

  const faqs = [
    {
      q: "How early do I need to call to book a delivery in Newmarket?",
      a: "For most residential jobs, 24 to 48 hours is enough. If your pour is larger or the timing is tight, call earlier — we will work with you on the schedule."
    },
    {
      q: "Can you pour concrete in Newmarket in winter?",
      a: "Yes. Cold-Crete is our answer to Ontario winters and we deliver it year-round. Tell us the expected temperature on your pour day and we will advise on mix and curing."
    },
    {
      q: "What strength concrete do I need for a driveway in Newmarket?",
      a: "32 MPa air-entrained is the standard for residential driveways in Ontario. We confirm the right spec for your specific job when you call — it takes two minutes."
    },
    {
      q: "Do you also cover Aurora and East Gwillimbury?",
      a: "Yes. We serve all of York Region including Aurora, Newmarket, East Gwillimbury, and surrounding areas."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Top Rated Ready Mix Concrete Supplier in Newmarket"
        description="Wilches Ready Mix delivers ready mix concrete Supplier in Newmarket and York Region. Residential, commercial & industrial. On-time delivery, quality-checked batches. Call 647-891-4740 for a free quote."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-in-newmarket/"
        keywords="Concrete delivery Newmarket, Concrete supplier Newmarket, Concrete Newmarket Ontario, Ready mix concrete Newmarket Ontario, Concrete delivery York Region, Residential concrete Newmarket, Commercial concrete Newmarket, Industrial concrete Newmarket, Concrete near me Newmarket, Concrete company Newmarket, Concrete contractor Newmarket, Affordable concrete Newmarket, On-site concrete Newmarket"
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
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>in Newmarket</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                Newmarket sits at the northern edge of York Region, and its construction scene reflects both worlds — established residential neighbourhoods in the south end, active development near the GO station corridor, and newer builds pushing north toward Green Lane.
              </p>
              <p>
                If you are trying to find ready mix concrete in Newmarket, you have probably already noticed that your options are either large corporate plants that treat small orders as an afterthought, or volumetric trucks that charge premium rates. Wilches Ready Mix sits in the middle — a family-owned company with 20 years of experience, plant-batched concrete, and a straightforward approach to delivery.
              </p>
              <p>
                We have completed over 1,500 projects across the GTA and York Region. We batch at our Etobicoke plant, quality-check every load, and deliver to Newmarket ready to pour.
              </p>
            </div>
          </div>
        </section>

        {/* --- WHAT YOU ARE ACTUALLY GETTING --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black uppercase leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              What You Are <span style={{ color: "#fe5f00" }}>Actually Getting</span> When You Order From Us
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg">
              A lot of concrete suppliers say the same things. Here is what we commit to when you work with us:
            </p>
            <ul className="space-y-4 text-white/70 text-lg list-disc pl-5">
              <li>
                <strong className="text-white">No Overbooking:</strong> We respect your schedule. When we confirm your delivery slot, that truck is dedicated to your project.
              </li>
              <li>
                <strong className="text-white">Accurate Strength Mixes:</strong> We mix to the exact strength ratings required for your project. No shortcuts, no default low-cost substitutes.
              </li>
              <li>
                <strong className="text-white">GTA & York Region Expertise:</strong> Over two decades of local operation means our drivers navigate the Newmarket area with total efficiency.
              </li>
              <li>
                <strong className="text-white">Direct Accountability:</strong> We are a family operation. You deal directly with our experienced team, avoiding corporate delays or call center queues.
              </li>
            </ul>
            <p className="text-white/80 text-lg">
              This straightforward commitment is why contractors and homeowners in Newmarket call us back because the truck showed up when we said it would, the concrete was what we said it would be, and when something needed sorting we sorted it without drama.
            </p>
            <p className="text-white/85 text-lg font-medium">
              We are a family operation. There is no corporate layer between you and the people responsible for your order. 2,363 Google reviews from customers across the GTA say the same thing in different words.
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
                Concrete Services We <span style={{ color: "#fe5f00" }}>Deliver in Newmarket</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Whether you need concrete for a residential driveway, a commercial project, or an industrial floor, Wilches Ready Mix has the right mix for your Newmarket project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Residential Concrete Newmarket
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Homeowners in Newmarket contact us for driveways, garage floors, front and rear walkways, patios, pool surrounds, and basement slabs. These are permanent features, and a residential concrete job done to the wrong specification will fail well before its time. We supply the right mix for the application and the right volume for the job. We will tell you upfront what strength rating your driveway or slab actually needs for Ontario conditions rather than just quoting whatever is on the standard price sheet. We deliver in the window we agree on, which matters when you have a finishing crew waiting on site.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Commercial Concrete Newmarket
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Newmarket's commercial development near the GO station and major arteries requires concrete supplied to engineer specifications and delivered on schedule. Our commercial-grade ready mix is supplied to the exact PSI your engineer requires, coordinated with your site supervisor to ensure smooth scheduling on active multi-trade job sites.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  Industrial Concrete Newmarket
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Industrial facilities, warehouse floors, loading docks, and heavy equipment pads require concrete engineered for continuous load stress. We supply high-strength ready mix for industrial projects in Newmarket with full quality documentation for every single pour.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
                <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                  On-Site Pouring & Scheduling
                </h3>
                <p className="text-white/70 leading-relaxed">
                  No matter the scale of your pour, we coordinate delivery timing directly with your team. We ensure consistent rotation of trucks to keep your finishers moving efficiently, minimizing any cold joints and maintaining excellent structural integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SPECIALTY MIXES TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Specialty Concrete Mixes <span style={{ color: "#fe5f00" }}>Available for Newmarket Delivery</span>
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
            For Newmarket renovation and custom estate projects where access is tight, our <strong style={{ color: "#fe5f00" }}>SCC (Self-Compacting) Mixes</strong> flow effortlessly into complex forms without structural voids. Our <strong style={{ color: "#fe5f00" }}>Cold-Crete</strong> winter formula ensures you can keep pouring through the coldest Ontario months safely.
          </p>
        </section>

        {/* --- TWO COLUMNS: AREAS & WHY CHOOSE US --- */}
        <section className="bg-zinc-950 border-t border-orange-900/20">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Areas Served */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Areas We <span style={{ color: "#fe5f00" }}>Serve in Newmarket</span>
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
                Don't see your specific neighbourhood listed? Call <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We serve all of York Region and can confirm delivery directly to your site.
              </p>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Why Newmarket Contractors Choose <span style={{ color: "#fe5f00" }}>Wilches Ready Mix</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              
              <div className="space-y-6">
                <p className="text-white/80 text-lg">
                  Newmarket is a demanding construction market. Between active transit corridors and sprawling estates, you need a supplier that handles transport logistics perfectly.
                </p>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    We bring over 20 years of dedicated ready mix concrete experience to Newmarket and the surrounding York Region.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    We batch every load in our state-of-the-art facility to guarantee the strength, slump, and quality are exactly right before leaving the plant.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    No automated phone loops. Call us and get instant answers from a family business that values your business.
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
              Questions We Get Asked About <span style={{ color: "#fe5f00" }}>Concrete Delivery in Newmarket</span>
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
              Get a Free Quote for <br /> <span style={{ color: "#fe5f00" }}>Concrete Delivery in Newmarket</span>
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
