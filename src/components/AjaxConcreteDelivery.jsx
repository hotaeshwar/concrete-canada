import React, { useEffect } from "react";
import SEO from "./Seo";

export default function AjaxConcreteDelivery() {
  const specialtyMixes = [
    { type: "Standard Ready Mix", application: "Driveways, patios, general slabs", feature: "Reliable 25–30 MPa, broadly applicable" },
    { type: "High-Strength Mix", application: "Industrial floors, structural foundations", feature: "35–40+ MPa for heavy load applications" },
    { type: "SCC Mix (Self-Compacting)", application: "Complex formwork, confined access", feature: "Flows without vibration, excellent finish" },
    { type: "Cold-Crete (Winter Formula)", application: "Cold weather and late-season pours", feature: "Engineered for strength gain in low temperatures" },
    { type: "Custom Strength Mixes", application: "Commercial and industrial builds", feature: "PSI specified to engineer requirements" },
  ];

  const areasServed = [
    { area: "Pickering Village", location: "West Ajax" },
    { area: "Central Ajax", location: "Central Ajax" },
    { area: "South Ajax", location: "South Ajax" },
    { area: "Riverside", location: "East Ajax" },
    { area: "Nottingham", location: "North Ajax" },
    { area: "Manor Park", location: "North Ajax" },
    { area: "Harwood", location: "Central Ajax" },
    { area: "Westney Heights", location: "North Ajax" },
  ];

  const faqs = [
    {
      q: "How much notice do I need to book a delivery in Ajax?",
      a: "For residential orders, 24 to 48 hours is usually enough. Larger pours need more lead time. Call us as early as possible to lock in your window."
    },
    {
      q: "Do you deliver in winter in Ajax?",
      a: "Yes. Our Cold-Crete formula is built for low-temperature pours. We deliver year-round and will advise on the right mix for your cold-weather project."
    },
    {
      q: "What strength concrete do I need for a driveway in Ajax?",
      a: "A 32 MPa air-entrained mix is the standard for residential driveways in Ontario. We will confirm the right spec for your job when you call."
    },
    {
      q: "Do you serve Pickering and Whitby as well?",
      a: "Yes. We cover all of Durham Region — Pickering, Whitby, Oshawa, and surrounding areas. Call to confirm your address."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Ready Mix Concrete Delivery in Ajax | Wilches Ready Mix Concrete Inc"
        description="Looking for ready mix concrete delivery in Ajax? Wilches Ready Mix serves Ajax contractors and homeowners with residential, commercial & industrial concrete. 20+ years GTA experience. Call 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-delivery-ajax/"
        keywords="Concrete delivery Ajax, Concrete supplier Ajax, Concrete Ajax Ontario, Ready mix concrete Ajax Ontario, Residential concrete Ajax, Commercial concrete Ajax, Industrial concrete Ajax, Concrete near me Ajax, Concrete pouring Ajax"
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
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>Delivery in Ajax</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                Ajax is one of the busiest construction markets in Durham Region. Residential builds, commercial projects along Kingston Road, and industrial work near Highway 401 all keep contractors moving year-round.
              </p>
              <p>
                Every one of those projects needs concrete that shows up on time and performs as expected. At <strong className="text-white">Wilches Ready Mix Concrete Inc.</strong>, that is what we have been delivering in Ajax and across the GTA for over 20 years.
              </p>
              <p>
                We are a family-owned company based in Etobicoke. Over 1,500 completed projects across the region. Every load is batched at our plant, quality-checked, and delivered ready to pour.
              </p>
            </div>
          </div>
        </section>

        {/* --- WHY QUALITY MATTERS --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Why Concrete Mix <span style={{ color: "#fe5f00" }}>Quality Matters</span> in Ajax
            </h2>
            <div className="w-16 h-1 mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg mb-4">
              Ajax sits along Lake Ontario and goes through Ontario's full freeze-thaw cycle every winter. Exterior concrete that was not mixed correctly will crack and scale within a few seasons — that is just what happens when air entrainment is skipped or the mix design is wrong.
            </p>
            <p className="text-white/80 text-lg">
              Every batch we deliver to Ajax is produced to specification. Certified aggregates, controlled water-to-cement ratio, and proper air entrainment on all exterior mixes. Quality is checked before the truck leaves the plant — not after it arrives on site.
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
                Concrete Services We <span style={{ color: "#fe5f00" }}>Deliver in Ajax</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Whether you need concrete for a home project, a commercial build, or a large industrial application, we have the right mix and the delivery capacity to get it to your Ajax site on time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Residential Concrete Ajax", text: "Homeowners in Ajax come to us for driveways, garage floors, walkways, patios, and basement slabs. These pours happen once — and the right mix determines whether the work lasts two decades or starts failing in five years. We supply the correct mix in the right volume. We tell you upfront what strength your project needs. And we show up when we say we will." },
                { title: "Commercial Concrete Ajax", text: "Commercial projects need concrete delivered on a schedule that works around other trades on site. We supply to the exact PSI your engineer specifies and coordinate directly with your site supervisor. We have done enough GTA commercial work to know how to fit into a busy job site without disrupting it." },
                { title: "Industrial Concrete Ajax", text: "The industrial corridor along Highway 401 in Ajax demands high-strength concrete with consistent PSI across multiple pours. Equipment pads, warehouse floors, loading dock aprons — we supply industrial-grade ready mix with full quality documentation on every pour." },
                { title: "Municipal Projects", text: "We have supplied concrete for sidewalk programs, road base, and municipal building projects throughout Durham Region. Public-sector work has specific requirements — we have met them before and can meet them for your project." },
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
              Specialty Concrete Mixes <span style={{ color: "#fe5f00" }}>Available in Ajax</span>
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
            <strong style={{ color: "#fe5f00" }}>Highlight for Ajax contractors:</strong> Standard concrete stops performing reliably once temperatures drop. Our <strong className="text-white">Cold-Crete</strong> is engineered for Ontario winters — your pour schedule does not have to stop in November.
          </p>
        </section>

        {/* --- TWO COLUMNS: AREAS & WHY CHOOSE US --- */}
        <section className="bg-zinc-950 border-t border-orange-900/20">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Areas Served */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Areas We <span style={{ color: "#fe5f00" }}>Serve</span> in Ajax
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
                Not on this list? Call <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We deliver across the full GTA and Durham Region.
              </p>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Why Contractors in Ajax Choose <span style={{ color: "#fe5f00" }}>Wilches Ready Mix</span>
              </h2>
              <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "#fe5f00" }} />
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    <strong className="text-white">Experience:</strong> We have been doing this for over 20 years. Our team has poured in every kind of Ontario weather, on every kind of project.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    <strong className="text-white">Personal Touch:</strong> We are a family business. When you call us, you speak to someone who is personally responsible for your order — not a booking system.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ background: "rgba(254,95,0,0.1)", border: "1px solid #fe5f00" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fe5f00" }} />
                  </div>
                  <p className="text-white/80 text-lg">
                    <strong className="text-white">Reliability:</strong> We do not overbook. We do not confirm deliveries we cannot make. Every batch is checked before it leaves our plant. 2,363 Google reviews from GTA customers back that up.
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
              Common Questions About <span style={{ color: "#fe5f00" }}>Ready Mix Concrete Delivery in Ajax</span>
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
              Get a Free Quote for <br /> <span style={{ color: "#fe5f00" }}>Concrete Delivery in Ajax</span>
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
