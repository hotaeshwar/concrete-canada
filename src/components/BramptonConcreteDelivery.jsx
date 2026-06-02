import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function BramptonConcreteDelivery() {
  const specialtyMixes = [
    { type: "32 MPa Air-Entrained", application: "All exterior residential — driveways, patios, walkways", feature: "Freeze-thaw protection, Ontario Building Code standard" },
    { type: "High-Strength 35–40 MPa", application: "Industrial floors, heavy commercial foundations", feature: "Load bearing under Brampton's industrial use conditions" },
    { type: "SCC Mix", application: "Decorative work, complex formwork, tight access", feature: "Clean finish, no vibration marks on visible surfaces" },
    { type: "Cold-Crete", application: "October through April pours", feature: "Maintains strength development below 5°C" },
    { type: "Custom PSI", application: "Engineer-specified commercial and industrial", feature: "Matched to project structural requirements" },
  ];

  const neighbourhoods = [
    { name: "Downtown Brampton", location: "Central Brampton" },
    { name: "Bramalea", location: "East Brampton" },
    { name: "Springdale", location: "North Brampton" },
    { name: "Credit Valley", location: "West Brampton" },
    { name: "Heart Lake", location: "Northwest Brampton" },
    { name: "Castlemore", location: "Northeast Brampton" },
    { name: "Gore", location: "Far Northeast Brampton" },
    { name: "Fletcher's Creek", location: "Southwest Brampton" },
    { name: "Madoc", location: "Central-East Brampton" },
    { name: "Goreway Corridor", location: "East Industrial Brampton" },
  ];

  const faqs = [
    {
      q: "How much notice do I need to book ready mix concrete in Brampton?",
      a: "For residential orders, 24 hours is usually enough. If your pour needs multiple trucks or has a fixed window around other trades, call 48 hours out. The earlier you call, the more flexibility we have on timing."
    },
    {
      q: "What concrete strength do I need for a driveway in Brampton?",
      a: "32 MPa air-entrained. This is the Ontario standard for residential driveways in freeze-thaw climates. Some suppliers quote 25 MPa to win on price — it saves nothing if the surface is scaling by year three."
    },
    {
      q: "Can you deliver concrete to a tight lot in a Brampton subdivision?",
      a: "Yes. We deal with subdivision access restrictions regularly across the GTA. Tell us the site conditions when you book and we will confirm the right truck size and approach."
    },
    {
      q: "Do you deliver concrete in Brampton during winter?",
      a: "Yes. Cold-Crete is available year-round. We will advise on mix, minimum placement temperature, and curing protection based on your specific pour date and forecast."
    },
    {
      q: "How much concrete do I need for a standard Brampton driveway?",
      a: "A typical two-car driveway in Brampton — roughly 6 metres wide by 6 metres long at 100mm depth — requires approximately 3.6 cubic metres of concrete. Call us with your dimensions and we will calculate the exact volume, including waste allowance."
    },
    {
      q: "Do you supply concrete for large subdivision pours in Brampton?",
      a: "Yes. Multi-truck coordination for subdivision and commercial pours is something we handle regularly across the GTA. Call to discuss volumes and scheduling."
    }
  ];

  const curingTimes = [
    { temp: "Above 20°C", initial: "4–6 hours", full: "28 days", notes: "Ideal summer conditions" },
    { temp: "10–20°C", initial: "6–10 hours", full: "28–35 days", notes: "Spring and fall standard" },
    { temp: "5–10°C", initial: "10–16 hours", full: "35–45 days", notes: "Cold-Crete recommended" },
    { temp: "Below 5°C", initial: "16+ hours", full: "45+ days", notes: "Cold-Crete required, insulated curing" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Best Ready Mix Concrete in Brampton in 2026"
        description="Need ready mix concrete in Brampton? Wilches Ready Mix delivers plant-batched, quality-checked concrete across Brampton. Family-owned, 20+ years GTA. Free quote: 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-in-brampton/"
        keywords="Ready Mix Concrete in Brampton, Concrete Delivery Brampton, Concrete Supplier Brampton, Concrete Brampton Ontario, Ready Mix Concrete Brampton Ontario, Residential Concrete Brampton, Commercial Concrete Brampton, Industrial Concrete Brampton, concrete contractor Brampton"
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
          "areaServed": "Brampton, ON",
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
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>in Brampton</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                Most concrete problems on Brampton job sites do not start on the day of the pour. They start when the wrong supplier is booked — one who confirms the job and then shows up an hour late, or worse, delivers a mix that was not batched correctly for Ontario's freeze-thaw conditions.
              </p>
              <p>
                At <strong className="text-white font-bold">Wilches Ready Mix Concrete Inc.</strong>, we have been supplying ready mix concrete in Brampton since 2004. Family-owned, Etobicoke-based, 1,500+ completed projects across the GTA. Every load is plant-batched under controlled conditions, quality-checked before dispatch, and delivered to your Brampton site ready to pour — on the time we agree on, not whenever the route works for us.
              </p>
            </div>
          </div>
        </section>

        {/* --- CONTRACTOR PROBLEMS --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black uppercase leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              The Concrete Problem Most <span style={{ color: "#fe5f00" }}>Brampton Contractors Face</span>
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg">
              Brampton's construction pace is relentless. Credit Valley subdivisions, Goreway Drive industrial builds, Highway 410 commercial corridors — multiple projects running simultaneously, tight pour windows, finishing crews billing by the hour.
            </p>
            <p className="text-white/80 text-lg">
              The problem contractors tell us about most is not pricing. It is reliability. A supplier who confirms a 7am delivery and shows up at 9am has just cost the site manager two hours of crew time and potentially pushed an inspection. A batch that was mixed too wet or skipped air entrainment looks fine in August and starts scaling by March.
            </p>
            <p className="text-white/85 text-lg font-medium">
              We built our business around solving exactly those two problems. Twenty years later, it is still what keeps Brampton contractors calling us back.
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

        {/* --- STEP BY STEP PROCESS --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                How Your Concrete Goes <span style={{ color: "#fe5f00" }}>From Order to Pour</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Most suppliers do not explain this. We do — because it is where the quality difference actually happens.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="bg-zinc-900/40 border border-orange-900/10 p-6 rounded-lg hover:border-[#fe5f00]/40 transition-all duration-300">
                <span className="text-[#fe5f00] font-black text-3xl block mb-2">01</span>
                <h3 className="font-bold text-xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>You Call Us</h3>
                <p className="text-white/60 text-sm">We confirm your mix requirement, volume, delivery address, and pour window on the same call. No callbacks, no quote forms that sit unanswered.</p>
              </div>
              <div className="bg-zinc-900/40 border border-orange-900/10 p-6 rounded-lg hover:border-[#fe5f00]/40 transition-all duration-300">
                <span className="text-[#fe5f00] font-black text-3xl block mb-2">02</span>
                <h3 className="font-bold text-xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Mix Confirmed</h3>
                <p className="text-white/60 text-sm">Based on your application — driveway, foundation, industrial slab, or specialty pour — we confirm the right mix design. For exterior Brampton applications, that means 32 MPa air-entrained as standard.</p>
              </div>
              <div className="bg-zinc-900/40 border border-orange-900/10 p-6 rounded-lg hover:border-[#fe5f00]/40 transition-all duration-300">
                <span className="text-[#fe5f00] font-black text-3xl block mb-2">03</span>
                <h3 className="font-bold text-xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Plant Batching & QC</h3>
                <p className="text-white/60 text-sm">Your concrete is batched at our Etobicoke plant under controlled conditions. Certified aggregates, precise water-to-cement ratio, admixtures matched to the season. Checked before loading.</p>
              </div>
              <div className="bg-zinc-900/40 border border-orange-900/10 p-6 rounded-lg hover:border-[#fe5f00]/40 transition-all duration-300">
                <span className="text-[#fe5f00] font-black text-3xl block mb-2">04</span>
                <h3 className="font-bold text-xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Dispatch & Delivery</h3>
                <p className="text-white/60 text-sm">The truck leaves on a schedule that accounts for GTA traffic and travel time to your Brampton site. The concrete arrives within its workability window — not at the edge of it.</p>
              </div>
              <div className="bg-zinc-900/40 border border-orange-900/10 p-6 rounded-lg hover:border-[#fe5f00]/40 transition-all duration-300">
                <span className="text-[#fe5f00] font-black text-3xl block mb-2">05</span>
                <h3 className="font-bold text-xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Ready to Pour</h3>
                <p className="text-white/60 text-sm">When our driver pulls up, he confirms delivery details with whoever is running the job. The concrete is right, the timing is right, and your crew can work immediately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS WE HANDLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Brampton Projects <span style={{ color: "#fe5f00" }}>We Handle</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We do not sort jobs into generic categories. Here is the actual work we do across Brampton.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
              <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                New Build Driveway and Garage Floor Pours
              </h3>
              <p className="text-white/70 leading-relaxed">
                New subdivision builds in Springdale, Castlemore, and Northwest Brampton generate a steady volume of residential driveway and garage floor pours. These are volume jobs with tight scheduling — multiple lots, sequential pours, contractors who need reliability above everything else.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                We supply 32 MPa air-entrained for all exterior residential applications in Brampton. Brampton's clay-heavy soil and Ontario's freeze-thaw cycle make proper air entrainment non-negotiable — surface scaling on a two-year-old driveway is a call back to the concrete supplier, and it should not happen.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
              <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                Foundation and Basement Slab Pours
              </h3>
              <p className="text-white/70 leading-relaxed">
                Foundation pours for new residential and commercial builds require concrete that meets engineer specifications and arrives on a schedule coordinated with forming crews and inspection windows. We supply to the exact PSI specified, coordinate with your site supervisor, and deliver when the pour window opens — not before, not after.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
              <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                Commercial Floor and Structural Pours
              </h3>
              <p className="text-white/70 leading-relaxed">
                Retail developments along Steeles Avenue, office buildings near Bramalea City Centre, and institutional construction across Brampton require commercial-grade concrete with documented batch consistency. We supply to engineer specification, provide batch documentation on request, and schedule deliveries around your site's pour sequence.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
              <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                Industrial Slab and Equipment Pad Pours
              </h3>
              <p className="text-white/70 leading-relaxed">
                Brampton's warehouse and industrial corridor — Highway 407 distribution centres, Airport Road manufacturing facilities, Goreway Drive logistics operations — demands high-strength concrete with consistent PSI across multiple pours. Equipment pads, warehouse floors, loading dock aprons, and mezzanine supports all require mixes engineered for continuous load stress. We supply industrial-grade ready mix with full quality documentation on every pour.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300 md:col-span-2">
              <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                Decorative and Exposed Aggregate Work
              </h3>
              <p className="text-white/70 leading-relaxed">
                Upscale residential projects in Brampton — exposed aggregate driveways, stamped patios, pool surrounds — require concrete that performs structurally and finishes cleanly. Our SCC mixes are specifically suited to decorative applications where surface quality matters as much as strength.
              </p>
            </div>
          </div>
        </section>

        {/* --- CLIMATE & MIXES --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Getting the Mix Right for <span style={{ color: "#fe5f00" }}>Brampton's Climate</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
              <p className="text-white/80 text-lg max-w-3xl mx-auto mb-10">
                Brampton sits in Ontario's full freeze-thaw zone. The city typically sees its last frost around mid-April and its first hard frost in mid-October — that is roughly a six-month exterior concrete season, with shoulder periods on both ends where the right mix choice becomes critical.
              </p>
            </div>
            
            <div className="overflow-x-auto border border-orange-900/30 rounded-xl mb-8 shadow-lg shadow-orange-900/5">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-zinc-900 border-b border-orange-900/30">
                    <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Mix Type</th>
                    <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Right For</th>
                    <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Why It Matters in Brampton</th>
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
            <p className="text-white/80 text-lg max-w-3xl mx-auto text-center mt-6">
              For Brampton contractors — the <strong style={{ color: "#fe5f00" }}>Cold-Crete</strong> window is earlier than most people expect. Once daytime temperatures are consistently below 10°C, standard mixes start losing reliable strength development. If your pour date is in late October or November, call us before booking a standard mix.
            </p>
          </div>
        </section>

        {/* --- NEIGHBOURHOODS --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Brampton Neighbourhoods <span style={{ color: "#fe5f00" }}>We Deliver To</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Our trucks cover all of Brampton daily — north to south, east to west.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto border border-orange-900/30 rounded-xl overflow-hidden mb-8 shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Neighbourhood</th>
                  <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-900/20 bg-zinc-950/50">
                {neighbourhoods.map((n, i) => (
                  <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-4 text-white font-semibold">{n.name}</td>
                    <td className="p-4 text-white/70">{n.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-white/80 italic text-lg mt-6">
            Not listed? Call <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We confirm delivery to every Brampton address directly.
          </p>
        </section>

        {/* --- REVIEWS --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                What Our Customers Say <span style={{ color: "#fe5f00" }}>About Wilches Ready Mix</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
              <p className="text-white/80 text-lg">
                Don't take our word for it. Here is what real GTA customers have said about working with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 border border-orange-900/30 p-8 rounded-xl flex flex-col justify-between">
                <p className="text-white/70 italic text-lg leading-relaxed">
                  "This is the second time in a few years that I use their service. Each time they were on time and the drivers were very responsible and zero issue. I will highly recommend their services."
                </p>
                <div className="mt-6 border-t border-orange-900/20 pt-4">
                  <span className="text-[#fe5f00] font-bold block">radiomen123</span>
                  <span className="text-white/40 text-sm">5-star Google Review</span>
                </div>
              </div>

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
                  "They've consistently done an amazing job. It's clear they take pride in their work, and it shows in the quality and reliability of their offerings."
                </p>
                <div className="mt-6 border-t border-orange-900/20 pt-4">
                  <span className="text-[#fe5f00] font-bold block">T.C.</span>
                  <span className="text-white/40 text-sm">5-star Google Review</span>
                </div>
              </div>
            </div>
            
            <p className="text-center text-white/60 text-sm mt-10">
              These are three reviews from over 2,363 five-star ratings on Google. The pattern is consistent — on time, right mix, no issues.
            </p>
          </div>
        </section>

        {/* --- CASE STUDY / EXAMPLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
          <div className="border border-orange-900/30 rounded-2xl bg-zinc-900/40 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-orange-900/5 to-transparent" />
            <h2 className="font-black uppercase leading-tight mb-4 text-3xl md:text-4xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              A Real Example of <span style={{ color: "#fe5f00" }}>How We Work</span>
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-white/80 text-lg">
              <p>
                A contractor running a foundation pour in a Brampton subdivision called us at 6:30am on a Monday. His scheduled supplier had cancelled the night before. He needed two trucks by 9am or his forming crew would be standing idle.
              </p>
              <p>
                We confirmed the order, batched to his engineer's specification, and had both trucks on site by 8:45am. The pour ran on schedule. His crew did not lose a day.
              </p>
              <p className="font-semibold text-white">
                That is not an unusual story for us. It is the kind of call we get regularly — and handle the same way every time.
              </p>
            </div>
          </div>
        </section>

        {/* --- FAQS & CURING SECTION --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Questions Brampton <span style={{ color: "#fe5f00" }}>Customers Actually Ask Us</span>
              </h2>
              <p className="text-white/80 text-lg">Real questions from Brampton homeowners and contractors — answered straight, no filler.</p>
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

              {/* Dynamic Curing Table FAQ */}
              <div className="bg-zinc-900 border border-orange-900/20 p-6 md:p-8 rounded-xl">
                <h3 className="font-bold text-xl md:text-2xl mb-4 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  How long does concrete take to cure in Brampton weather?
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Concrete curing time in Brampton depends directly on temperature. Here is what to expect across Ontario's seasons.
                </p>
                
                <div className="overflow-x-auto border border-orange-900/20 rounded-lg">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-zinc-950 border-b border-orange-900/20">
                        <th className="p-3 text-[#fe5f00] font-bold">Temperature</th>
                        <th className="p-3 text-[#fe5f00] font-bold">Initial Set</th>
                        <th className="p-3 text-[#fe5f00] font-bold">Full Cure</th>
                        <th className="p-3 text-[#fe5f00] font-bold">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-orange-900/10">
                      {curingTimes.map((c, i) => (
                        <tr key={i} className="hover:bg-zinc-950/40">
                          <td className="p-3 font-semibold text-white">{c.temp}</td>
                          <td className="p-3 text-white/70">{c.initial}</td>
                          <td className="p-3 text-white/70">{c.full}</td>
                          <td className="p-3 text-white/50">{c.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-white/70 text-base italic mt-4">
                  For Brampton specifically — spring pours in April and October pours both fall into the 10–20°C range where curing slows noticeably. Plan your finishing and load schedule accordingly.
                </p>
              </div>

              {/* Best time FAQ */}
              <div className="bg-zinc-900 border border-orange-900/20 p-6 md:p-8 rounded-xl">
                <h3 className="font-bold text-xl md:text-2xl mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  What is the best time of year to pour concrete in Brampton?
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Late May through early September is the ideal window — temperatures are consistently above 15°C, curing is predictable, and finishing conditions are stable. That said, we pour year-round in Brampton. April, October, and November pours are completely manageable with the right mix and curing approach. Call us with your pour date and we will tell you exactly what the job needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- BOOK / CTA SECTION --- */}
        <section className="bg-zinc-900 border-t-4 border-[#fe5f00] py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Book Ready Mix <br /> <span style={{ color: "#fe5f00" }}>Concrete Delivery in Brampton</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Call today. Pricing, mix confirmation, volume, and delivery window — all confirmed on the same call.
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
              <Link to="/contact/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Contact Us</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
