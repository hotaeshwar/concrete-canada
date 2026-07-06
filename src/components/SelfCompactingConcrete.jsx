import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./Seo";

export default function SelfCompactingConcrete() {
  const sccVsStandard = [
    { factor: "Consolidation method", standard: "Mechanical vibration required to eliminate air pockets", scc: "Self-flowing, consolidates under its own weight with no vibration" },
    { factor: "Best for", standard: "Open slabs, standard driveways, simple footings, patios", scc: "Dense rebar cages, complex architectural formwork, tight access" },
    { factor: "Cost per yard", standard: "Lower initial material cost", scc: "Higher material cost (offset by reduced labor & equipment on site)" },
    { factor: "Finish consistency", standard: "Highly dependent on operator vibration quality", scc: "Highly consistent, minimizes risk of voids and honeycombing" },
    { factor: "Noise on site", standard: "Higher noise levels from mechanical vibrator equipment", scc: "Lower noise levels, ideal for urban or noise-restricted zones" },
  ];

  const curingTimes = [
    { temp: "Above 20°C", initial: "4–6 hours", full: "28 days", notes: "Summer ideal" },
    { temp: "10–20°C", initial: "6–10 hours", full: "28–35 days", notes: "Spring and fall" },
    { temp: "5–10°C", initial: "10–16 hours", full: "35–45 days", notes: "Cold-Crete recommended" },
    { temp: "Below 5°C", initial: "16+ hours", full: "45+ days", notes: "Cold-Crete required" },
  ];

  const faqs = [
    {
      q: "Is self compacting concrete more expensive than regular concrete?",
      a: "Yes, typically. The specialized superplasticizer admixtures required for self-consolidation add to the cost per cubic yard. However, because it eliminates the need for manual vibration and speeds up the pour, the savings in labor and equipment hire can offset the material cost on complex projects."
    },
    {
      q: "Do I need self compacting concrete for a residential driveway?",
      a: "No. Standard ready mix is sufficient and more cost-effective for open, flat, and simple applications like driveways and patios where placing and vibration are not major structural challenges."
    },
    {
      q: "Can self compacting concrete be pumped?",
      a: "Yes. Due to its high flowability and cohesiveness, SCC is exceptionally well-suited for pumping. It flows smoothly through lines and is a preferred choice for high-rise, multi-storey, or remote pour sites."
    },
    {
      q: "Does self compacting concrete need any finishing?",
      a: "It still requires standard surface finishing techniques (screeding, floating, trowelling) for top surfaces, but it requires little to no consolidation work (vibration), which is where the main labor savings are realized."
    },
    {
      q: "How is self compacting concrete tested for quality?",
      a: "SCC is tested using a slump flow test rather than the standard slump cone test. The slump flow test measures the horizontal spread (diameter) of the concrete under its own weight, confirming the mix's flowability and resistance to segregation before it is placed."
    },
    {
      q: "Can self compacting concrete be used in cold weather?",
      a: "Yes. SCC can be combined with Cold-Crete admixtures for temperature-sensitive pours. It follows the same curing precautions, heating, and insulation requirements as standard cold-weather concrete."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Self Compacting Concrete (SCC): Complete GTA Guide"
        description="Learn what self compacting concrete is, when to use it, and why GTA contractors choose SCC for complex formwork projects."
        canonical="https://wilchesreadymix.com/self-compacting-concrete-gta/"
        keywords="self compacting concrete, SCC concrete, self consolidating concrete, flowable concrete mix, SCC Ontario, concrete for dense rebar"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Blog Article Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Self Compacting Concrete: What It Is and When You Actually Need It",
          "description": "Learn what self compacting concrete is, when to use it, and why GTA contractors choose SCC for complex formwork projects.",
          "author": {
            "@type": "Organization",
            "name": "Wilches Ready Mix Concrete Inc",
            "url": "https://wilchesreadymix.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Wilches Ready Mix Concrete Inc",
            "logo": {
              "@type": "ImageObject",
              "url": "https://wilchesreadymix.com/media/logo.png"
            }
          },
          "datePublished": "2026-07-06",
          "mainEntityOfPage": "https://wilchesreadymix.com/self-compacting-concrete-gta/"
        })}
      </script>

      <div className="bg-black text-white font-['Barlow',sans-serif] w-full min-h-screen pt-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative px-6 py-20 md:py-28 border-b border-orange-900/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(254,95,0,0.12), transparent 70%)" }} />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            
            {/* Category Tag */}
            <span className="inline-block text-sm uppercase tracking-widest text-[#fe5f00] font-bold mb-4 px-3 py-1 bg-orange-950/40 rounded-full border border-orange-900/30">
              Ready Mix Tech Guide
            </span>
            
            <h1 className="font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Self Compacting Concrete: <span style={{ color: "#fe5f00" }}>What It Is and When You Actually Need It</span>
            </h1>
            
            <div className="w-20 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-white/50 mb-8 font-medium">
              <span>Published by Wilches Ready Mix</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>July 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>5 Min Read</span>
            </div>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light italic">
              "Most concrete needs mechanical vibration to settle properly into formwork and eliminate air pockets. Self compacting concrete skips that step entirely, flowing into place under its own weight while filling even the tightest reinforcement cages without voids or honeycombing."
            </p>
          </div>
        </section>

        {/* --- ARTICLE INTRO --- */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              At Wilches Ready Mix, contractors ask us about self compacting concrete most often when a project has dense rebar, awkward access, or architectural formwork where vibration equipment simply can't do its job properly. This guide covers what SCC actually is, how it differs from standard concrete, and when it's worth the extra cost.
            </p>
          </div>
        </section>

        {/* --- WHAT MAKES IT DIFFERENT --- */}
        <section className="px-6 py-12 bg-zinc-950 border-y border-orange-900/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-6 tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              What Makes <span className="text-[#fe5f00]">Self Compacting Concrete</span> Different
            </h2>
            <div className="w-12 h-1 rounded-full mb-6" style={{ background: "#fe5f00" }} />
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                Standard concrete relies on mechanical vibration to remove trapped air and settle the mix evenly around reinforcement. Self compacting concrete achieves the same result through its own formulation, using specialized superplasticizer admixtures that increase flowability without adding excess water that would weaken the mix.
              </p>
              <p>
                This flowability means SCC can pass through congested rebar, fill complex formwork shapes, and self-level without a vibrator operator working the mix by hand. The result is a denser, more consistent finish, particularly valuable on projects where poor consolidation would otherwise be difficult to spot until it's too late, sometimes not until formwork is stripped and a void is already visible in the finished surface.
              </p>
            </div>
          </div>
        </section>

        {/* --- WHEN SCC MAKES SENSE --- */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              When Self Compacting Concrete <span className="text-[#fe5f00]">Makes Sense</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              SCC isn't the right choice for every pour. It costs more per cubic yard than standard ready mix, and for simple, open slabs like driveways or patios, that extra cost doesn't buy you much benefit. The value shows up specifically in situations where standard concrete and vibration struggle.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-900/40 rounded-lg flex items-center justify-center mb-6 text-[#fe5f00]">
                {/* SVG for Rebar / Grid */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16M6 4v16M12 4v16M18 4v16" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Dense Reinforcement Cages
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Structural elements like columns, beams, and shear walls often have tightly packed rebar. Standard concrete can bridge over dense reinforcement without fully consolidating, leaving voids that weaken the structure. SCC flows around and through the cage, reaching every corner without manual vibration.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-900/40 rounded-lg flex items-center justify-center mb-6 text-[#fe5f00]">
                {/* SVG for Geometric Formwork */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Complex or Architectural Formwork
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Curved walls, decorative elements, and unusual geometric formwork are difficult to vibrate evenly. SCC's self-leveling property produces a smooth, consistent finish in these applications, which matters both structurally and visually for exposed architectural concrete.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-900/40 rounded-lg flex items-center justify-center mb-6 text-[#fe5f00]">
                {/* SVG for Access / Lock */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Tight or Restricted Access
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Some pours happen in locations where a vibrator operator can't physically reach the formwork, such as narrow foundation walls or confined underground spaces. SCC removes the need for that access entirely, since it consolidates itself as it's placed.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-zinc-900/60 border border-orange-900/20 p-8 rounded-xl hover:border-[#fe5f00]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-900/40 rounded-lg flex items-center justify-center mb-6 text-[#fe5f00]">
                {/* SVG for Volume Off */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl uppercase mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Noise-Sensitive Job Sites
              </h3>
              <p className="text-white/70 leading-relaxed text-[0.95rem]">
                Vibration equipment is loud, which matters on projects near hospitals, schools, or residential areas with noise restrictions. SCC allows crews to pour without the vibration noise, which can be a meaningful advantage for urban GTA projects with tight neighbourhood constraints.
              </p>
            </div>

          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                SCC vs Standard Concrete <span className="text-[#fe5f00]">at a Glance</span>
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            </div>

            <div className="overflow-x-auto border border-orange-900/30 rounded-xl shadow-lg shadow-orange-900/5">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-zinc-900 border-b border-orange-900/30">
                    <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Factor</th>
                    <th className="p-5 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Standard Concrete</th>
                    <th className="p-5 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Self Compacting Concrete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-900/20 bg-zinc-950/40">
                  {sccVsStandard.map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-900/35 transition-colors">
                      <td className="p-5 font-semibold text-white text-[0.95rem]">{row.factor}</td>
                      <td className="p-5 text-white/70 text-[0.9rem]">{row.standard}</td>
                      <td className="p-5 text-white/80 font-medium text-[0.9rem]">{row.scc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- CURING TIME TABLE --- */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Curing Time <span className="text-[#fe5f00]">for SCC</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
            <p className="text-white/70 text-base max-w-xl mx-auto mb-8">
              SCC follows the same general curing principles as standard concrete, with temperature remaining the primary factor in how quickly it gains strength.
            </p>
          </div>

          <div className="border border-orange-900/30 rounded-xl overflow-hidden shadow-lg shadow-orange-900/5">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-zinc-900 border-b border-orange-900/30">
                  <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Temperature</th>
                  <th className="p-4 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Initial Set</th>
                  <th className="p-4 text-[#fe5f00] font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Full Cure</th>
                  <th className="p-4 text-white/90 font-bold uppercase tracking-wider text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-900/20 bg-zinc-950/50">
                {curingTimes.map((c, i) => (
                  <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-4 text-white font-semibold text-[0.95rem]">{c.temp}</td>
                    <td className="p-4 text-white/75 text-[0.9rem]">{c.initial}</td>
                    <td className="p-4 text-white/75 text-[0.9rem]">{c.full}</td>
                    <td className="p-4 text-white/50 text-[0.85rem]">{c.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- CASE STUDY (REAL EXAMPLE) --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-6 text-center" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              A Real Example <span className="text-[#fe5f00]">From the GTA</span>
            </h2>
            <div className="w-12 h-1 mx-auto mb-10" style={{ background: "#fe5f00" }} />
            
            <div className="relative bg-zinc-900/50 border border-orange-900/30 p-8 rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#fe5f00]" />
              <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                <p>
                  For a recent project requiring <Link to="/ready-mix-concrete-vaughan/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete in Vaughan</Link>, a contractor building a residential foundation wall had a heavily reinforced section around a window opening where a vibrator couldn't get proper access without risking damage to the formwork.
                </p>
                <p>
                  We supplied SCC for that section of the pour, which flowed fully into the reinforcement without the honeycombing that showed up on a similar section poured with standard mix on a previous project. The difference was visible immediately after formwork removal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              What GTA <span className="text-[#fe5f00]">Customers Say</span>
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "#fe5f00" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
              <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                "I've personally had a great experience with Wilches Ready Mix. They've consistently done an amazing job. It's clear they take pride in their work, and it shows in the quality and reliability of their offerings."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">T.C.</span>
                <span className="text-white/40 text-xs">GTA Contractor</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
              <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                "Perfect concrete on time and exactly what I ordered. No cracks and perfect customer service."
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">Tristan Braga</span>
                <span className="text-white/40 text-xs">Local Homebuilder</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-orange-900/20 p-6 rounded-xl flex flex-col justify-between hover:border-[#fe5f00]/30 transition-all">
              <p className="text-white/70 italic text-[0.95rem] leading-relaxed">
                "Very good, very friendly, very affordable compared to others, quick response, same day delivery!"
              </p>
              <div className="mt-6 border-t border-orange-900/20 pt-4">
                <span className="text-[#fe5f00] font-bold block">Gursharan Marwaha</span>
                <span className="text-white/40 text-xs">Vaughan Client</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQS --- */}
        <section className="bg-zinc-950 px-6 py-16 md:py-24 border-y border-orange-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Frequently Asked <span className="text-[#fe5f00]">Questions</span>
              </h2>
              <div className="w-12 h-1 mx-auto mb-6" style={{ background: "#fe5f00" }} />
            </div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-zinc-900 border border-orange-900/20 p-6 md:p-8 rounded-xl">
                  <h3 className="font-bold text-xl mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {faq.q}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-[0.95rem]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="bg-zinc-900 border-t-4 border-[#fe5f00] py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-black uppercase leading-none mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              Talk to Us About <span style={{ color: "#fe5f00" }}>Self Compacting Concrete</span>
            </h2>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-left md:text-center">
              <p>
                Self compacting concrete solves a specific set of problems: dense reinforcement, complex formwork, and restricted access. If your project has any of those challenges, it's worth a conversation before you default to standard mix.
              </p>
              <p>
                Whether you need a high-flow SCC mix in Vaughan or Mississauga, or standard <Link to="/ready-mix-concrete-delivery-oakville/" className="text-[#fe5f00] font-bold hover:underline">Ready Mix Concrete Delivery in Oakville</Link>, Wilches Ready Mix has supplied specialty concrete mixes across the GTA for over 20 years, backed by more than 1,500 completed projects and a 4.5-star rating across 2,363 Google reviews.
              </p>
              <p>
                Getting the mix design right on the first order matters more with SCC than with standard concrete, since adjusting flowability after batching isn't practical once the truck is already on site. That's why we walk through the specific reinforcement layout and access constraints with contractors before confirming an SCC order, rather than treating it as an interchangeable upgrade from standard mix.
              </p>
            </div>

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
              Call 647-891-4740
            </a>
          </div>
        </section>

        {/* --- INTERNAL LINKS FOOTER --- */}
        <section className="bg-black border-t border-orange-900/10 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-white/40 text-xs uppercase tracking-widest block mb-4">Internal Links</span>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-base font-medium">
              <Link to="/ready-mix-concrete-delivery-ajax/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Ajax Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-whitby/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Whitby Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-pickering/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Pickering Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-scarborough/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Scarborough Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-barrie/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Barrie Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-oshawa/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Oshawa Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-oakville/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Oakville Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-delivery-king-city/" className="text-white/60 hover:text-[#fe5f00] transition-colors">King City Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-newmarket/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Newmarket Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-vaughan/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Vaughan Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-stoney-creek/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Stoney Creek Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-brampton/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Brampton Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-mississauga/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Mississauga Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-etobicoke/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Etobicoke Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-malton/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Malton Concrete Delivery</Link>
              <Link to="/ready-mix-concrete-in-hamilton/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Hamilton Concrete Delivery</Link>
              <Link to="/contact/" className="text-white/60 hover:text-[#fe5f00] transition-colors">Contact Us</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
