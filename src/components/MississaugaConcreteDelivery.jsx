import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function MississaugaConcreteDelivery() {
  const specialtyMixes = [
    { type: "32 MPa Air-Entrained", application: "All exterior residential — driveways, patios", feature: "Freeze-thaw protection, lake moisture exposure" },
    { type: "High-Strength 35–40 MPa", application: "Industrial floors, heavy commercial foundations", feature: "Load bearing under industrial use conditions" },
    { type: "SCC Mix", application: "Decorative work, complex formwork", feature: "Clean finish, no vibration marks" },
    { type: "Cold-Crete", application: "October through April pours", feature: "Strength development below 5°C" },
    { type: "Custom PSI", application: "Engineer-specified projects", feature: "Matched to structural requirements" },
  ];

  const neighbourhoods = [
    { name: "Port Credit", location: "South Mississauga" },
    { name: "Lakeview", location: "Southeast Mississauga" },
    { name: "Cooksville", location: "Central Mississauga" },
    { name: "Streetsville", location: "West Mississauga" },
    { name: "Erin Mills", location: "West Mississauga" },
    { name: "Churchill Meadows", location: "West Mississauga" },
    { name: "Meadowvale", location: "Northwest Mississauga" },
    { name: "Hurontario", location: "Central Mississauga" },
    { name: "Malton", location: "North Mississauga" },
    { name: "East Credit", location: "Northeast Mississauga" },
  ];

  const faqs = [
    {
      q: "How much notice do I need to book ready mix concrete in Mississauga?",
      a: "For residential orders, 24 hours is usually enough. Larger commercial or multi-truck pours benefit from 48 hours notice. Call as early as possible to lock in your window."
    },
    {
      q: "What concrete strength do I need for a driveway in Mississauga?",
      a: "32 MPa air-entrained. Given Mississauga's lake exposure and freeze-thaw cycling, this is the minimum we recommend for any exterior residential application. Some suppliers quote 25 MPa to win on price — it is not the right call for Mississauga's climate."
    },
    {
      q: "How much concrete do I need for a standard Mississauga driveway?",
      a: "A typical two-car driveway — 6 metres wide by 6 metres long at 100mm depth — requires approximately 3.6 cubic metres. Call us with your exact dimensions and we will calculate the precise volume including waste allowance."
    },
    {
      q: "Do you deliver concrete in Mississauga during winter?",
      a: "Yes. Cold-Crete is available year-round. We deliver through Ontario winters and will advise on mix, placement temperature requirements, and curing based on your specific pour date and forecast."
    },
    {
      q: "What is the best time of year to pour concrete in Mississauga?",
      a: "Late May through early September is ideal — consistently above 15°C, stable curing conditions. That said, April, October, and November pours are completely manageable with the right mix. Call us with your date and we tell you exactly what the job needs."
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
        title="Ready Mix Concrete Delivery and Commercial Concrete in Mississauga"
        description="Need ready mix concrete in Mississauga? Wilches Ready Mix delivers plant-batched, quality-checked concrete across Mississauga. Family-owned, 20+ years GTA. Free quote: 647-891-4740."
        canonical="https://wilchesreadymix.com/ready-mix-concrete-in-mississauga/"
        keywords="Ready Mix Concrete Mississauga, Concrete Delivery Mississauga, Concrete Supplier Mississauga, Concrete Mississauga Ontario, Ready Mix Concrete Mississauga Ontario, Residential Concrete Mississauga, Commercial Concrete Mississauga, Industrial Concrete Mississauga, Concrete Near Me Mississauga"
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
          "areaServed": "Mississauga, ON",
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
              Ready Mix Concrete <span style={{ color: "#fe5f00" }}>in Mississauga</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              <p>
                Mississauga is the GTA's second-largest city, and its construction market reflects that. Port Credit renovations, Streetsville residential builds, Erin Mills commercial developments, and the dense industrial corridor along Highway 401 and Dixie Road — concrete demand here runs at a pace that exposes weak suppliers fast.
              </p>
              <p>
                At <strong className="text-white font-bold">Wilches Ready Mix Concrete Inc.</strong>, we have been delivering ready mix concrete in Mississauga since 2004. Family-owned, Etobicoke-based — which puts us minutes from Mississauga's eastern boundary. Every load is plant-batched under controlled conditions, quality-checked before the truck leaves, and delivered to your site on the schedule we commit to.
              </p>
              <p className="font-semibold text-white">
                Honestly, the difference between a good concrete pour and a bad one usually comes down to one thing — the supplier. We take that seriously.
              </p>
            </div>
          </div>
        </section>

        {/* --- WHY PROJECTS DEMAND RELIABILITY --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-black uppercase leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Why Mississauga Projects <span style={{ color: "#fe5f00" }}>Demand a Reliable Concrete Supplier</span>
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg">
              Mississauga's construction scene is competitive. Contractors are running tight timelines, residential homeowners are investing significant money in permanent work, and industrial clients cannot afford inconsistency across multiple pours.
            </p>
            <p className="text-white/80 text-lg">
              The problem contractors tell us about most is not pricing. It is reliability. A supplier who confirms a 7am delivery and shows up at 9am has just cost the site manager two hours of crew time and potentially pushed an inspection. A batch that was mixed too wet or skipped air entrainment looks fine in August and starts scaling by March.
            </p>
            <p className="text-white/85 text-lg font-medium">
              We do not cut corners at the plant. Every batch is checked before it loads. That is the whole system.
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
                How Your Concrete Gets <span style={{ color: "#fe5f00" }}>From Our Plant to Your Site</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Most suppliers skip this explanation. We do not — because this is where quality actually happens.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="bg-zinc-900/40 border border-orange-900/10 p-6 rounded-lg hover:border-[#fe5f00]/40 transition-all duration-300">
                <span className="text-[#fe5f00] font-black text-3xl block mb-2">01</span>
                <h3 className="font-bold text-xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>You Call Us</h3>
                <p className="text-white/60 text-sm">We confirm mix requirement, volume, delivery address, and pour window on the same call. Stephen O'Keeffe, one of our customers, ordered concrete on a Saturday evening and we answered. That is not an accident — it is how we operate.</p>
              </div>
              <div className="bg-zinc-900/40 border border-orange-900/10 p-6 rounded-lg hover:border-[#fe5f00]/40 transition-all duration-300">
                <span className="text-[#fe5f00] font-black text-3xl block mb-2">02</span>
                <h3 className="font-bold text-xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Mix Confirmed</h3>
                <p className="text-white/60 text-sm">Based on your application, we confirm the right mix. For exterior Mississauga work — driveways, patios, walkways — 32 MPa air-entrained is standard. We tell you if your project needs something different.</p>
              </div>
              <div className="bg-zinc-900/40 border border-orange-900/10 p-6 rounded-lg hover:border-[#fe5f00]/40 transition-all duration-300">
                <span className="text-[#fe5f00] font-black text-3xl block mb-2">03</span>
                <h3 className="font-bold text-xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Plant Batching & QC</h3>
                <p className="text-white/60 text-sm">Batched at our Etobicoke plant. Certified aggregates, controlled water-to-cement ratio, admixtures matched to season and application. Quality-checked before loading.</p>
              </div>
              <div className="bg-zinc-900/40 border border-orange-900/10 p-6 rounded-lg hover:border-[#fe5f00]/40 transition-all duration-300">
                <span className="text-[#fe5f00] font-black text-3xl block mb-2">04</span>
                <h3 className="font-bold text-xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Dispatch</h3>
                <p className="text-white/60 text-sm">We account for GTA traffic and travel time in our dispatch schedule. The concrete arrives within its workability window — not at the edge of it.</p>
              </div>
              <div className="bg-zinc-900/40 border border-orange-900/10 p-6 rounded-lg hover:border-[#fe5f00]/40 transition-all duration-300">
                <span className="text-[#fe5f00] font-black text-3xl block mb-2">05</span>
                <h3 className="font-bold text-xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Ready to Pour</h3>
                <p className="text-white/60 text-sm">When our driver pulls up to your Mississauga site, he confirms details with whoever is running the job. The mix is right, the timing is right, and your crew can work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS WE HANDLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Mississauga Projects <span style={{ color: "#fe5f00" }}>We Handle</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We deliver concrete engineered specifically for Mississauga's varying residential, commercial, and industrial sites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
              <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                Driveway and Residential Slab Pours
              </h3>
              <p className="text-white/70 leading-relaxed">
                Mississauga homeowners come to us for driveways, garage floors, front and rear walkways, exposed aggregate patios, and basement slabs. In established neighbourhoods like Lakeview, Mineola, and Cooksville, where properties are older and driveways are being replaced, getting the mix right the first time matters.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                32 MPa air-entrained is our standard for all exterior residential applications in Mississauga. Mississauga's Lake Ontario proximity means higher moisture exposure and more aggressive freeze-thaw cycling than inland GTA locations — a mix that skips air entrainment will show it within two winters.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
              <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                New Build Foundation Pours
              </h3>
              <p className="text-white/70 leading-relaxed">
                Residential subdivisions in Erin Mills, Churchill Meadows, and East Credit require foundation and basement slab pours that meet engineer specifications and fit around forming crews and inspection windows. We supply to the exact PSI specified, coordinate delivery with your site supervisor, and arrive when the pour window opens.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
              <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                Commercial and Institutional Concrete
              </h3>
              <p className="text-white/70 leading-relaxed">
                Retail developments along Hurontario Street, office buildings near Square One, mixed-use projects, and institutional construction across Mississauga require commercial-grade concrete with documented batch consistency. We supply to engineer specification with full batch documentation available on request.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300">
              <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                Industrial Concrete Mississauga
              </h3>
              <p className="text-white/70 leading-relaxed">
                The industrial corridor along Highway 401, Dixie Road, and Matheson Boulevard demands high-strength concrete with consistent PSI across multiple pours. Equipment pads, warehouse floors, loading dock aprons, mezzanine supports — we supply industrial-grade ready mix with full quality documentation on every pour.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-orange-900/20 p-8 rounded-lg hover:border-[#fe5f00]/50 transition-colors duration-300 md:col-span-2">
              <h3 className="font-bold text-2xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fe5f00" }}>
                Decorative and Specialty Pours
              </h3>
              <p className="text-white/70 leading-relaxed">
                Port Credit, Streetsville, and Lakeview have a significant luxury residential and commercial renovation market. Exposed aggregate finishes, stamped concrete, pool surrounds, and decorative patios require mixes that perform structurally and finish cleanly. Our SCC mixes are specifically suited to these applications where visual precision matches structural durability.
              </p>
            </div>
          </div>
        </section>

        {/* --- CLIMATE & MIXES --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Getting the Mix Right for <span style={{ color: "#fe5f00" }}>Mississauga's Climate</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
              <p className="text-white/80 text-lg max-w-3xl mx-auto mb-10">
                Mississauga sits directly on Lake Ontario, and that geography matters for concrete. Higher humidity, more dramatic temperature swings in shoulder seasons, and consistent freeze-thaw cycling make mix design more critical here than in inland GTA locations.
              </p>
            </div>
            
            <div className="overflow-x-auto border border-orange-900/30 rounded-xl mb-8 shadow-lg shadow-orange-900/5">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-zinc-900 border-b border-orange-900/30">
                    <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Mix Type</th>
                    <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Right For</th>
                    <th className="p-4 md:p-6 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Why It Matters in Mississauga</th>
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
              Mississauga's last frost typically falls around mid-April and the first hard frost arrives in mid-October. Any pour outside that window needs <strong style={{ color: "#fe5f00" }}>Cold-Crete</strong> consideration — call us with your pour date and we will tell you straight what the job requires.
            </p>
          </div>
        </section>

        {/* --- CURING TIMES --- */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Concrete Curing Times in <span style={{ color: "#fe5f00" }}>Mississauga Weather</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
              How long your concrete takes to reach working strength depends directly on temperature. Here is what to plan for across Mississauga's seasons.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto border border-orange-900/30 rounded-xl overflow-hidden mb-8 shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Temperature</th>
                  <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Initial Set</th>
                  <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Full Cure</th>
                  <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-900/20 bg-zinc-950/50">
                {curingTimes.map((c, i) => (
                  <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-4 text-white font-semibold">{c.temp}</td>
                    <td className="p-4 text-white/70">{c.initial}</td>
                    <td className="p-4 text-white/70">{c.full}</td>
                    <td className="p-4 text-white/50">{c.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-white/80 italic text-lg mt-6 max-w-3xl mx-auto">
            For Mississauga's lake-adjacent climate, lean toward the longer end of these ranges in spring and fall. Temperature near the lake is more variable than inland, and curing in those shoulder months benefits from extra protection.
          </p>
        </section>

        {/* --- REVIEWS --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                What Our <span style={{ color: "#fe5f00" }}>Customers Say</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 border border-orange-900/30 p-8 rounded-xl flex flex-col justify-between">
                <p className="text-white/70 italic text-lg leading-relaxed">
                  "Very good, very friendly, very affordable compared to others, quick response, same day delivery!"
                </p>
                <div className="mt-6 border-t border-orange-900/20 pt-4">
                  <span className="text-[#fe5f00] font-bold block">Gursharan Marwaha</span>
                  <span className="text-white/40 text-sm">5-star Google Review</span>
                </div>
              </div>

              <div className="bg-zinc-900 border border-orange-900/30 p-8 rounded-xl flex flex-col justify-between">
                <p className="text-white/70 italic text-lg leading-relaxed">
                  "I ordered concrete on a Saturday evening. They answered the phone when no one else did. Brought me the concrete on time, fair pricing and the driver was very patient."
                </p>
                <div className="mt-6 border-t border-orange-900/20 pt-4">
                  <span className="text-[#fe5f00] font-bold block">Stephen O'Keeffe</span>
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
              Over 2,363 five-star reviews on Google. The pattern across all of them is the same — on time, right mix, responsive team.
            </p>
          </div>
        </section>

        {/* --- CASE STUDY / EXAMPLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
          <div className="border border-orange-900/30 rounded-2xl bg-zinc-900/40 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-orange-900/5 to-transparent" />
            <h2 className="font-black uppercase leading-tight mb-4 text-3xl md:text-4xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              A Real Example From a <span style={{ color: "#fe5f00" }}>Mississauga Job Site</span>
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
            <div className="space-y-4 text-white/80 text-lg">
              <p>
                A homeowner in Cooksville had scheduled a driveway pour with another supplier who cancelled the morning of the job. Contractor on site, forms already set, no concrete. She called us at 8am.
              </p>
              <p>
                We confirmed the mix, volume, and address on the call. Truck was on site by 11am. The pour ran the same day. The driveway is still there — no cracks, no scaling, two winters later.
              </p>
              <p className="font-semibold text-white">
                That turnaround is not exceptional for us. It is standard.
              </p>
            </div>
          </div>
        </section>

        {/* --- NEIGHBOURHOODS --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Mississauga Neighbourhoods <span style={{ color: "#fe5f00" }}>We Deliver To</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Our trucks cover all of Mississauga daily — from the lakeshore communities in the south to the newer developments in the north.
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
              Not listed? Call <a href="tel:647-891-4740" className="text-[#fe5f00] font-bold hover:underline">647-891-4740</a>. We confirm delivery to every Mississauga address directly.
            </p>
          </div>
        </section>

        {/* --- FAQS --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Questions Mississauga <span style={{ color: "#fe5f00" }}>Customers Ask Us</span>
            </h2>
            <p className="text-white/80 text-lg">Real questions from Mississauga homeowners and contractors — answered straight, no filler.</p>
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
          </div>
        </section>

        {/* --- BOOK / CTA SECTION --- */}
        <section className="bg-zinc-900 border-t-4 border-[#fe5f00] py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Book Ready Mix <span style={{ color: "#fe5f00" }}>Concrete Delivery in Mississauga</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Call today. Pricing, mix, volume, and delivery window confirmed on the same call.
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
              <Link to="/ready-mix-concrete-in-brampton/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Brampton Concrete Delivery</Link>
              <Link to="/contact/" className="text-white/60 hover:text-[#fe5f00] transition-colors font-medium">Contact Us</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
