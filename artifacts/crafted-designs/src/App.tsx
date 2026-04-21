import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Reusable animated section component
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* HEADER */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0D0D0D]/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <button
            onClick={() => scrollTo("top")}
            className="hover:opacity-90 transition-opacity flex-shrink-0"
            aria-label="Crafted Designs — home"
          >
            <div
              style={{
                width: 147,
                height: 50,
                overflow: "hidden",
                backgroundImage: "url('/logo-brand-v2.png')",
                backgroundSize: "768px auto",
                backgroundPosition: "-18px -355px",
                backgroundRepeat: "no-repeat",
              }}
            />
          </button>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
            <button onClick={() => scrollTo("services")} className="hover:text-foreground transition-colors">Services</button>
            <button onClick={() => scrollTo("process")} className="hover:text-foreground transition-colors">Process</button>
            <button onClick={() => scrollTo("work")} className="hover:text-foreground transition-colors">Work</button>
            <button onClick={() => scrollTo("pricing")} className="hover:text-foreground transition-colors">Pricing</button>
            <button 
              onClick={() => scrollTo("contact")}
              className="ml-4 rounded-full bg-primary text-[#0D0D0D] px-6 py-2.5 font-bold hover:bg-primary/90 transition-colors shadow-[0_4px_14px_rgba(255,140,0,0.2)]"
            >
              Get a Quote
            </button>
          </nav>

          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#141414] border-b border-border py-4 px-6 flex flex-col gap-4 shadow-xl">
            <button onClick={() => scrollTo("services")} className="text-left text-muted hover:text-foreground py-2">Services</button>
            <button onClick={() => scrollTo("process")} className="text-left text-muted hover:text-foreground py-2">Process</button>
            <button onClick={() => scrollTo("work")} className="text-left text-muted hover:text-foreground py-2">Work</button>
            <button onClick={() => scrollTo("pricing")} className="text-left text-muted hover:text-foreground py-2">Pricing</button>
            <button 
              onClick={() => scrollTo("contact")}
              className="w-full text-center rounded-full bg-primary text-[#0D0D0D] px-6 py-3 font-bold mt-2"
            >
              Get a Quote
            </button>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section
          className="section-shell relative overflow-hidden"
          style={{
            padding: "calc(8.5rem + 78px) 0 6.5rem",
            background: `
              radial-gradient(circle at 85% 12%, rgba(255,140,0,0.20), transparent 22%),
              radial-gradient(circle at 15% 55%, rgba(82,50,0,0.32), transparent 28%),
              linear-gradient(180deg, rgba(13,13,13,1) 0%, rgba(10,10,10,1) 100%)
            `,
          }}
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-12">

              {/* LEFT — copy */}
              <FadeIn className="max-w-[760px]">
                <p className="section-eyebrow">Boutique web design for local business</p>
                <h1
                  className="font-serif"
                  style={{ fontSize: "clamp(3.2rem, 8vw, 6.8rem)", lineHeight: 1.02, letterSpacing: "0.01em", fontWeight: 700, marginBottom: "1.2rem", color: "#fff" }}
                >
                  Digital presence,{" "}
                  <span style={{ color: "var(--accent)", textShadow: "0 0 24px rgba(255,140,0,0.22)" }}>crafted</span>{" "}
                  with intent.
                </h1>
                <p className="section-copy" style={{ maxWidth: 680, fontSize: "1.15rem" }}>
                  Crafted Designs builds refined websites for trades, service businesses, and owner-operated brands that want to look polished, professional, and properly represented online.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <button onClick={() => scrollTo("contact")} className="btn-primary cursor-pointer">Request a Quote</button>
                  <button onClick={() => scrollTo("work")} className="btn-secondary cursor-pointer">View My Work</button>
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                  {["Tailored one-on-one service", "Premium dark editorial style", "Built for trades and local business"].map((pill, i) => (
                    <span
                      key={i}
                      className="rounded-full text-muted text-[0.92rem]"
                      style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(20,20,20,0.9)", padding: "0.75rem 1rem", boxShadow: "0 8px 24px rgba(0,0,0,0.18)" }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </FadeIn>

              {/* RIGHT — hero card */}
              <FadeIn delay={0.2}>
                <div
                  className="rounded-[28px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                  style={{ background: "linear-gradient(180deg, rgba(20,20,20,0.96) 0%, rgba(15,15,15,0.98) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {/* Panel 1 — mock window */}
                  <div
                    className="rounded-[22px] p-5 mb-4"
                    style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.015) 100%)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span className="block text-primary text-[0.78rem] tracking-[0.12em] uppercase font-bold mb-[0.65rem]">Featured concept</span>
                    <div className="rounded-[18px] overflow-hidden border border-border bg-[#101010]">
                      <div className="flex gap-[0.4rem] px-4 py-3 border-b border-border bg-[#171717]">
                        <span className="block w-[10px] h-[10px] rounded-full bg-[#404040]" />
                        <span className="block w-[10px] h-[10px] rounded-full bg-[#404040]" />
                        <span className="block w-[10px] h-[10px] rounded-full bg-[#404040]" />
                      </div>
                      <div
                        className="p-6 min-h-[220px]"
                        style={{ background: "linear-gradient(160deg, rgba(255,140,0,0.14), transparent 30%), linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(14,14,14,1) 100%)" }}
                      >
                        <span className="inline-block border border-primary/25 text-primary px-3 py-[0.45rem] rounded-full text-[0.8rem] mb-4">Crafted project preview</span>
                        <h4 className="font-serif text-[2.2rem] text-foreground mb-3">Crafted for clarity</h4>
                        <p className="text-sm text-muted">Thoughtful layouts, strong typography, sharp contrast, and clean enquiry pathways.</p>
                        <div className="grid gap-[0.6rem] mt-4">
                          <span className="block h-[10px] rounded-full bg-[#252525] w-[88%]" />
                          <span className="block h-[10px] rounded-full bg-[#252525] w-[76%]" />
                          <span className="block h-[10px] rounded-full bg-[#252525] w-[64%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Panel 2 — studio approach */}
                  <div
                    className="rounded-[22px] p-5"
                    style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.015) 100%)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span className="block text-primary text-[0.78rem] tracking-[0.12em] uppercase font-bold mb-[0.65rem]">Studio approach</span>
                    <p className="text-foreground mb-4" style={{ fontSize: "1.02rem" }}>
                      A simple process, premium presentation, and a website built around the way your business actually works.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { stat: "Premium", text: "Dark, polished visual identity" },
                        { stat: "Tailored", text: "Built around your actual business" },
                        { stat: "Direct",  text: "One point of contact throughout" },
                      ].map((s, i) => (
                        <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-[18px] p-4">
                          <strong className="block text-foreground text-[1.4rem] mb-1">{s.stat}</strong>
                          <p className="text-xs text-muted leading-tight">{s.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-padding bg-gradient-to-b from-[#141414] to-[#0D0D0D]">
          <div className="container-custom">
            <FadeIn className="max-w-[760px] mb-12">
              <p className="text-primary uppercase tracking-[0.16em] text-xs font-bold mb-3">Services</p>
              <h2 className="text-4xl md:text-5xl mb-4 font-semibold">What I offer</h2>
              <p className="text-lg text-muted">
                Simple, effective websites built around your business needs — designed to present your work properly and make it easy for customers to get in touch.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              <FadeIn delay={0.1}>
                <div className="bg-[#141414] border border-border p-8 rounded-[18px] card-hover h-full">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Website Design</h3>
                  <p className="mb-5 text-muted">Custom landing pages and small business websites with a clean, premium look.</p>
                  <ul className="space-y-3">
                    {["Single-page and brochure-style websites", "Tailored layout and copy structure", "Modern mobile-friendly design"].map((li, i) => (
                      <li key={i} className="flex gap-3 text-muted text-sm"><span className="text-primary">•</span>{li}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-[#141414] border border-border p-8 rounded-[18px] card-hover h-full">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Business Content Setup</h3>
                  <p className="mb-5 text-muted">Clear presentation of services, galleries, reviews, and business information.</p>
                  <ul className="space-y-3">
                    {["Service sections and visual hierarchy", "Image and gallery presentation", "Google reviews integration"].map((li, i) => (
                      <li key={i} className="flex gap-3 text-muted text-sm"><span className="text-primary">•</span>{li}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-[#141414] border border-border p-8 rounded-[18px] card-hover h-full">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Launch & Support</h3>
                  <p className="mb-5 text-muted">Help with the practical side of getting your site live and keeping it updated.</p>
                  <ul className="space-y-3">
                    {["Contact forms and enquiry setup", "Basic updates and refinements", "Guidance on domains and launch"].map((li, i) => (
                      <li key={i} className="flex gap-3 text-muted text-sm"><span className="text-primary">•</span>{li}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* WHO WE WORK WITH */}
        <section className="section-padding">
          <div className="container-custom">
            <FadeIn className="text-center mb-12">
              <p className="text-primary uppercase tracking-[0.16em] text-xs font-bold mb-3">No templates. No shortcuts.</p>
              <h2 className="text-4xl md:text-5xl mb-5 font-semibold">Who We Work With</h2>
              <p className="text-lg text-muted max-w-[760px] mx-auto leading-relaxed">
                We build websites for businesses that are ready to grow, stand out, and win more work.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Service-Based Businesses",
                  desc: "Tradies, contractors, and local services looking for a clean, professional online presence.",
                },
                {
                  title: "Growing Brands",
                  desc: "Businesses ready to move past DIY websites and step into something more polished.",
                },
                {
                  title: "Local Companies",
                  desc: "Owner-operated businesses that want to be found, trusted, and chosen online.",
                },
              ].map((card, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-[#141414] border border-border rounded-[20px] p-8 card-hover h-full">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{card.title}</h3>
                    <p className="text-muted text-base leading-relaxed">{card.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section-padding bg-gradient-to-b from-[#141414] to-[#0D0D0D]">
          <div className="container-custom">
            <FadeIn className="max-w-[760px] mb-12">
              <p className="text-primary uppercase tracking-[0.16em] text-xs font-bold mb-3">Process</p>
              <h2 className="text-4xl md:text-5xl mb-4 font-semibold">How it works</h2>
              <p className="text-lg text-muted">
                The goal is to keep the process easy: gather what is needed, build the site properly, refine it together, and launch with confidence.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "Initial chat", text: "You tell me about your business, what you offer, and the type of website you want." },
                { title: "Content & setup", text: "You send through your photos, services, contact details, and anything else the site needs." },
                { title: "Build phase", text: "I design and build a clean, tailored layout around your business and branding." },
                { title: "Review & refine", text: "You review the site, request any changes, and approve the final direction." },
                { title: "Launch", text: "The site goes live and begins working for your business." }
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-[#141414] border border-border p-6 rounded-[18px] h-full relative group card-hover">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold mb-5">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted">{step.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* WORK / PORTFOLIO */}
        <section id="work" className="section-padding">
          <div className="container-custom">
            <FadeIn className="mb-12">
              <p className="text-primary uppercase tracking-[0.16em] text-xs font-bold mb-3">Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-semibold">Current project</h2>
            </FadeIn>

            <FadeIn>
              <div className="grid md:grid-cols-2 rounded-[24px] overflow-hidden border border-border bg-[#141414]">
                <div className="bg-gradient-to-br from-primary/20 via-[#191919] to-[#111111] p-8 md:p-12 border-b md:border-b-0 md:border-r border-border flex items-end min-h-[320px] md:min-h-[400px]">
                   <div className="w-full max-w-[300px]">
                      <div className="bg-[#101010] border border-border rounded-xl overflow-hidden shadow-2xl">
                         <div className="flex gap-1.5 p-3 border-b border-border bg-[#171717]">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#404040]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#404040]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#404040]" />
                          </div>
                          <div className="p-6 bg-[#0a0a0a]">
                             <div className="h-8 w-2/3 bg-[#202020] rounded-md mb-4"></div>
                             <div className="h-4 w-full bg-[#1a1a1a] rounded-sm mb-2"></div>
                             <div className="h-4 w-4/5 bg-[#1a1a1a] rounded-sm mb-6"></div>
                             <div className="h-24 w-full bg-[#202020] rounded-lg"></div>
                          </div>
                      </div>
                   </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-semibold mb-4 text-foreground">Designed around a real local business</h3>
                  <p className="text-muted mb-8 leading-relaxed">
                    This recent project required a clean, professional website for an excavation business. 
                    The focus was on strong visuals, clear service sections, and simple contact pathways 
                    to ensure potential clients could understand the offering and get in touch quickly.
                  </p>
                  <div>
                    <button onClick={() => scrollTo("contact")} className="rounded-full border border-border bg-transparent text-foreground px-6 py-3 font-bold hover:border-primary hover:text-primary transition-all">
                      Ask About Your Project
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-12 md:py-20">
          <div className="container-custom">
            <FadeIn>
              <div className="bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-border rounded-[24px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-w-4xl mx-auto text-center">
                <p className="text-xl md:text-3xl font-serif text-foreground leading-relaxed mb-6">
                  "Super easy to work with and nailed exactly what I was after. The site looks clean, professional, and actually represents the business properly."
                </p>
                <p className="text-sm font-bold uppercase tracking-widest text-muted">
                  Client testimonial placeholder
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="section-padding bg-gradient-to-b from-[#0D0D0D] to-[#141414]">
          <div className="container-custom">
            <FadeIn className="text-center mb-12">
              <p className="text-primary uppercase tracking-[0.16em] text-xs font-bold mb-3">Pricing</p>
              <h2 className="text-4xl md:text-5xl font-semibold">Simple pricing guidance</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <FadeIn delay={0.1}>
                <div className="bg-[#141414] border border-border rounded-[24px] p-8 md:p-10 card-hover h-full">
                  <h3 className="text-xl font-sans font-semibold text-muted mb-2">Landing pages</h3>
                  <div className="font-serif text-5xl text-foreground mb-6">From $500+</div>
                  <p className="text-muted mb-6">One-page sites with clear messaging, visuals, and contact details.</p>
                  <button onClick={() => scrollTo("contact")} className="w-full rounded-full border border-border py-3 font-bold hover:border-primary hover:text-primary transition-all">Get a Quote</button>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-[#141414] border border-border rounded-[24px] p-8 md:p-10 card-hover h-full">
                  <h3 className="text-xl font-sans font-semibold text-muted mb-2">Small business websites</h3>
                  <div className="font-serif text-5xl text-foreground mb-6">Quoted to suit</div>
                  <p className="text-muted mb-6">Pricing depends on content, pages, galleries, reviews, and forms.</p>
                  <button onClick={() => scrollTo("contact")} className="w-full rounded-full bg-primary text-[#0D0D0D] py-3 font-bold hover:bg-primary/90 transition-all">Discuss Your Needs</button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-padding relative">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,140,0,0.05),transparent_40%)] pointer-events-none" />
          <div className="container-custom">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 relative z-10">
              <FadeIn>
                <div className="bg-[#141414] border border-border rounded-[24px] p-8 md:p-10 h-full">
                  <p className="text-primary uppercase tracking-[0.16em] text-xs font-bold mb-3">Contact</p>
                  <h2 className="text-4xl md:text-5xl font-semibold mb-4">Let's build your website</h2>
                  <p className="text-muted text-lg mb-8">
                    Send through a few details about your business and what you're looking for, and I'll get back to you with the next steps.
                  </p>

                  <div className="space-y-4">
                    {["Name: Placeholder", "Email: placeholder@example.com", "Phone: 0400 000 000"].map((info, i) => (
                      <div key={i} className="p-4 border border-white/5 rounded-2xl bg-white/5 text-muted">
                        {info}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <form className="bg-[#141414] border border-border rounded-[24px] p-8 md:p-10 flex flex-col gap-5 h-full" onSubmit={(e) => e.preventDefault()}>
                  <label className="flex flex-col gap-2 text-sm font-bold text-foreground">
                    Name
                    <input type="text" className="bg-[#101010] border border-border rounded-[14px] px-4 py-3 font-normal text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Your name" />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-bold text-foreground">
                    Email
                    <input type="email" className="bg-[#101010] border border-border rounded-[14px] px-4 py-3 font-normal text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Your email address" />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-bold text-foreground">
                    Phone
                    <input type="tel" className="bg-[#101010] border border-border rounded-[14px] px-4 py-3 font-normal text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Your phone number" />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-bold text-foreground">
                    Message
                    <textarea className="bg-[#101010] border border-border rounded-[14px] px-4 py-3 font-normal text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all min-h-[160px] resize-y" placeholder="Tell me about your business and what you need..."></textarea>
                  </label>
                  <button type="submit" className="rounded-full bg-primary text-[#0D0D0D] px-6 py-4 font-bold hover:bg-primary/90 transition-all mt-2">
                    Request a Quote
                  </button>
                </form>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 text-muted text-sm bg-background">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-2">
            <div
              style={{
                width: 118,
                height: 40,
                overflow: "hidden",
                backgroundImage: "url('/logo-brand-v2.png')",
                backgroundSize: "614px auto",
                backgroundPosition: "-14px -284px",
                backgroundRepeat: "no-repeat",
              }}
            />
            <span className="text-muted">Custom websites for local business.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo("top"); }} className="hover:text-foreground transition-colors">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
