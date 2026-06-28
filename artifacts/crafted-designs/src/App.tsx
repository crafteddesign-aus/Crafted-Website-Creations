import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const NAV_LINKS = [
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const MARQUEE_ITEMS = [
  "WEB DESIGN",
  "MOBILE DESIGN",
  "DOMAIN SETUP",
  "WEBSITE HOSTING",
  "ENQUIRY FORMS",
  "LOCAL SUPPORT",
];

const SERVICES = [
  {
    num: "01",
    title: "Custom Website Design",
    desc: "A fully tailored website built around your business — your services, your tone, your customers. No templates, no guesswork.",
  },
  {
    num: "02",
    title: "Website Refreshes",
    desc: "Already have a site that just isn't doing the job? I'll modernise the look, sharpen the content, and get it working properly.",
  },
  {
    num: "03",
    title: "Hosting & Ongoing Support",
    desc: "Fast, reliable hosting with ongoing support so your site stays live, current, and backed up — with one person to call.",
  },
  {
    num: "04",
    title: "Domain & Technical Setup",
    desc: "Domain registration, DNS, email setup and everything technical handled for you — no jargon, no confusion.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Tell me about your business",
    desc: "We have a straightforward conversation about what you do, who your customers are, and what you want your website to achieve.",
  },
  {
    num: "02",
    title: "Your first design is created",
    desc: "I design a tailored layout built around your business — real content, real branding, nothing generic.",
  },
  {
    num: "03",
    title: "We refine the website",
    desc: "You review everything and request changes. We go back and forth until it's exactly right.",
  },
  {
    num: "04",
    title: "Your website goes live",
    desc: "Once approved, your site launches. I handle all the technical setup so you don't have to.",
  },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-[100dvh] overflow-x-hidden" style={{ background: "var(--background)", color: "var(--text)" }}>

      {/* ── HEADER ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          padding: isScrolled ? "0.85rem 0" : "1.4rem 0",
          background: isScrolled ? "rgba(13,13,13,0.85)" : "transparent",
          backdropFilter: isScrolled ? "blur(14px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            onClick={() => scrollTo("top")}
            aria-label="Crafted Designs — home"
            style={{ flexShrink: 0, background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <div
              style={{
                width: 140,
                height: 48,
                backgroundImage: "url('/logo-brand-v2.png')",
                backgroundSize: "768px auto",
                backgroundPosition: "-18px -355px",
                backgroundRepeat: "no-repeat",
              }}
            />
          </button>

          <nav style={{ display: "none", alignItems: "center", gap: "2rem" }} className="md:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--muted)",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                  padding: "0.25rem 0",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAFA")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} className="btn-primary" style={{ marginLeft: "0.5rem" }}>
              Start a Project
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", padding: "0.5rem" }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "#0D0D0D",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "1.5rem 1.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "var(--muted)", fontFamily: "'Manrope', sans-serif",
                  fontWeight: 600, fontSize: "1.05rem", padding: "0.75rem 0",
                  textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="btn-primary"
              style={{ marginTop: "1rem", width: "100%", justifyContent: "center" }}
            >
              Start a Project
            </button>
          </motion.div>
        )}
      </header>

      <main id="top">

        {/* ── HERO ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            paddingTop: "clamp(8rem, 15vw, 11rem)",
            paddingBottom: "clamp(5rem, 10vw, 8rem)",
          }}
        >
          {/* Glow bg */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 55% 55% at 80% 20%, rgba(255,140,0,0.13), transparent), radial-gradient(ellipse 40% 60% at 10% 70%, rgba(255,140,0,0.07), transparent)",
          }} />
          {/* Faint CRAFTED word */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(8rem, 22vw, 20rem)",
            fontWeight: 800,
            color: "rgba(255,255,255,0.018)",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            letterSpacing: "-0.04em",
          }}>
            CRAFTED
          </div>

          <div className="container-custom" style={{ position: "relative" }}>
            <div style={{ display: "grid", gap: "3rem", alignItems: "center" }} className="lg:grid-cols-2">

              {/* Left copy */}
              <FadeUp>
                <p className="eyebrow">Boutique web design · Whitsundays</p>
                <h1 style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  fontWeight: 800,
                  lineHeight: 1.04,
                  letterSpacing: "-0.03em",
                  marginBottom: "1.4rem",
                  color: "#FAFAFA",
                }}>
                  Websites{" "}
                  <em style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: "var(--primary)",
                  }}>crafted</em>{" "}
                  to grow your business.
                </h1>
                <p style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--muted)", maxWidth: 540, marginBottom: "2.2rem" }}>
                  Premium, easy-to-use websites for Whitsundays businesses that want to look professional, build trust and generate more enquiries.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "2.5rem" }}>
                  <button onClick={() => scrollTo("contact")} className="btn-primary">Start Your Website</button>
                  <button onClick={() => scrollTo("work")} className="btn-ghost">View Our Work</button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    "Custom-designed for your business",
                    "Mobile-friendly and easy to use",
                    "Personal, local support",
                  ].map((t, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--muted)", fontSize: "0.92rem" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="var(--primary)" strokeWidth="1.5" />
                        <path d="M5 8l2 2 4-4" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {t}
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* Right — floating mockup */}
              <FadeUp delay={0.18}>
                <div className="float-anim" style={{ position: "relative" }}>
                  {/* Orange glow behind */}
                  <div style={{
                    position: "absolute", top: "10%", right: "5%",
                    width: "60%", height: "60%",
                    background: "radial-gradient(ellipse, rgba(255,140,0,0.22), transparent 70%)",
                    pointerEvents: "none", zIndex: 0,
                  }} />
                  {/* Desktop mockup */}
                  <div style={{
                    position: "relative", zIndex: 1,
                    background: "#151515",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
                  }}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: "0.4rem",
                      padding: "0.7rem 1rem",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      background: "#1a1a1a",
                    }}>
                      {["#ff5f57","#ffbd2e","#28c840"].map((c, i) => (
                        <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />
                      ))}
                      <div style={{
                        marginLeft: "0.75rem", flex: 1, borderRadius: 999,
                        background: "#0D0D0D", border: "1px solid rgba(255,255,255,0.08)",
                        padding: "0.25rem 0.75rem", fontSize: "0.68rem", color: "var(--muted)",
                      }}>
                        www.nqbgsheds.com.au
                      </div>
                    </div>
                    <div style={{ overflow: "hidden", maxHeight: 300 }}>
                      <img
                        src="/sheds-project.png"
                        alt="NQBG Sheds website preview"
                        style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top" }}
                      />
                    </div>
                  </div>
                  {/* Mobile mockup overlay */}
                  <div style={{
                    position: "absolute", bottom: "-1.5rem", right: "-1rem", zIndex: 2,
                    width: "35%",
                    background: "#151515",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,140,0,0.12)",
                  }}>
                    <div style={{
                      height: 8, background: "#1a1a1a",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      display: "flex", justifyContent: "center", alignItems: "center",
                    }}>
                      <div style={{ width: 24, height: 3, borderRadius: 999, background: "rgba(255,255,255,0.12)" }} />
                    </div>
                    <img
                      src="/sheds-project.png"
                      alt="Mobile preview"
                      style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top", maxHeight: 180 }}
                    />
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "#0D0D0D",
          padding: "1rem 0",
          overflow: "hidden",
        }}>
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.18em",
                color: "var(--primary)",
                paddingRight: "3rem",
                whiteSpace: "nowrap",
              }}>
                {item}
                <span style={{ marginLeft: "3rem", opacity: 0.35, color: "var(--muted)" }}>—</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── INTRODUCTION ── */}
        <section style={{ background: "var(--light-bg)", padding: "6rem 0" }}>
          <div className="container-custom">
            <div style={{ display: "grid", gap: "4rem", alignItems: "center" }} className="lg:grid-cols-2">
              <FadeUp>
                <p className="eyebrow" style={{ color: "#FF8C00" }}>What we do</p>
                <h2 style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: "var(--light-text)",
                  marginBottom: "1.4rem",
                  letterSpacing: "-0.03em",
                }}>
                  More than a good-looking website.
                </h2>
                <p style={{ fontSize: "1.08rem", lineHeight: 1.8, color: "#555", maxWidth: 480 }}>
                  Your website should make your business look credible, explain what you do clearly and make it easy for customers to contact you. Crafted Designs builds professional websites with a clear purpose—not templates filled with unnecessary clutter.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div style={{
                  background: "var(--light-text)",
                  borderRadius: 24,
                  padding: "3rem",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", top: -20, right: -20,
                    width: 120, height: 120,
                    background: "var(--primary)",
                    borderRadius: "50%",
                    opacity: 0.12,
                  }} />
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                    lineHeight: 1.2,
                    color: "#FAFAFA",
                    letterSpacing: "-0.02em",
                  }}>
                    Built to turn visitors into{" "}
                    <em style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      color: "var(--primary)",
                    }}>enquiries.</em>
                  </p>
                  <div style={{ display: "flex", gap: "2rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
                    {[["100%", "Tailored design"], ["Local", "Whitsundays based"], ["Direct", "One person throughout"]].map(([stat, label]) => (
                      <div key={label}>
                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--primary)" }}>{stat}</div>
                        <div style={{ fontSize: "0.82rem", color: "rgba(250,250,250,0.55)", marginTop: "0.2rem" }}>{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── FEATURED WORK ── */}
        <section id="work" className="section-pad">
          <div className="container-custom">
            <FadeUp style={{ marginBottom: "4rem" }}>
              <p className="eyebrow">Portfolio</p>
              <h2 style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#FAFAFA",
              }}>
                Recent websites,{" "}
                <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--primary)" }}>carefully crafted.</em>
              </h2>
            </FadeUp>

            {/* Project 1 — NQBG Sheds */}
            <FadeUp style={{ marginBottom: "4rem" }}>
              <div style={{
                background: "var(--panel)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 28,
                overflow: "hidden",
                display: "grid",
              }} className="lg:grid-cols-2">
                {/* Screenshot */}
                <div style={{ background: "#0a0a0a", position: "relative", minHeight: 340, overflow: "hidden" }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "0.4rem",
                    padding: "0.7rem 1rem",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    background: "#111",
                  }}>
                    {["#ff5f57","#ffbd2e","#28c840"].map((c, i) => (
                      <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.6 }} />
                    ))}
                    <div style={{
                      marginLeft: "0.75rem", flex: 1, borderRadius: 999,
                      background: "#0D0D0D", border: "1px solid rgba(255,255,255,0.07)",
                      padding: "0.25rem 0.75rem", fontSize: "0.68rem", color: "var(--muted)",
                    }}>
                      www.nqbgsheds.com.au
                    </div>
                  </div>
                  <div style={{ overflow: "hidden", flex: 1 }}>
                    <img
                      src="/sheds-project.png"
                      alt="NQBG Sheds website"
                      className="img-zoom"
                      style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top", minHeight: 300 }}
                    />
                  </div>
                </div>
                {/* Copy */}
                <div style={{ padding: "clamp(2rem, 4vw, 3.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center')" }} className="p-10 flex flex-col justify-center">
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    {["Construction", "Whitsundays", "Website Design", "Domain Connection", "Hosting"].map((tag) => (
                      <span key={tag} style={{
                        fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.3rem 0.75rem", borderRadius: 999,
                        border: "1px solid rgba(255,140,0,0.3)",
                        color: "var(--primary)",
                        background: "rgba(255,140,0,0.06)",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    fontWeight: 800, letterSpacing: "-0.02em",
                    color: "#FAFAFA", marginBottom: "1rem",
                  }}>
                    NQBG Sheds
                  </h3>
                  <p style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "var(--muted)", marginBottom: "2rem" }}>
                    A bold, professional website created for a Whitsundays shed builder, designed to showcase their projects, services and service areas.
                  </p>
                  <a
                    href="https://www.nqbgsheds.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ width: "fit-content" }}
                  >
                    View Project
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Project 2 — NQ Excavations (reversed) */}
            <FadeUp>
              <div style={{
                background: "var(--panel)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 28,
                overflow: "hidden",
                display: "grid",
              }} className="lg:grid-cols-2">
                {/* Copy first on desktop reversed */}
                <div className="p-10 flex flex-col justify-center order-2 lg:order-1">
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    {["Excavation", "North Queensland", "Website Design", "Domain Connection", "Hosting"].map((tag) => (
                      <span key={tag} style={{
                        fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.3rem 0.75rem", borderRadius: 999,
                        border: "1px solid rgba(255,140,0,0.3)",
                        color: "var(--primary)",
                        background: "rgba(255,140,0,0.06)",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    fontWeight: 800, letterSpacing: "-0.02em",
                    color: "#FAFAFA", marginBottom: "1rem",
                  }}>
                    NQ Excavations
                  </h3>
                  <p style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "var(--muted)", marginBottom: "2rem" }}>
                    A clean, confident website built for a North Queensland excavation specialist — designed for strong first impressions, clear service sections, and simple pathways to enquire.
                  </p>
                  <a
                    href="https://nqexcavations.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ width: "fit-content" }}
                  >
                    View Project
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
                {/* Screenshot */}
                <div style={{ background: "#0a0a0a", position: "relative", minHeight: 340, overflow: "hidden" }} className="order-1 lg:order-2">
                  <div style={{
                    display: "flex", alignItems: "center", gap: "0.4rem",
                    padding: "0.7rem 1rem",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    background: "#111",
                  }}>
                    {["#ff5f57","#ffbd2e","#28c840"].map((c, i) => (
                      <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.6 }} />
                    ))}
                    <div style={{
                      marginLeft: "0.75rem", flex: 1, borderRadius: 999,
                      background: "#0D0D0D", border: "1px solid rgba(255,255,255,0.07)",
                      padding: "0.25rem 0.75rem", fontSize: "0.68rem", color: "var(--muted)",
                    }}>
                      nqexcavations.com.au
                    </div>
                  </div>
                  <img
                    src="/excavation-project.png"
                    alt="NQ Excavations website"
                    className="img-zoom"
                    style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top", minHeight: 300 }}
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="section-pad" style={{ background: "var(--panel)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container-custom">
            <FadeUp style={{ marginBottom: "4rem", maxWidth: 640 }}>
              <p className="eyebrow">Services</p>
              <h2 style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 800, letterSpacing: "-0.03em",
                color: "#FAFAFA", lineHeight: 1.1,
              }}>
                Everything needed to build a stronger online presence.
              </h2>
            </FadeUp>

            <div style={{ display: "grid", gap: "1.25rem" }} className="md:grid-cols-2">
              {SERVICES.map((s, i) => (
                <FadeUp key={s.num} delay={i * 0.08}>
                  <div className="card-base" style={{ padding: "2.2rem 2.4rem", height: "100%", background: "#0D0D0D" }}>
                    <div style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 800, fontSize: "0.78rem",
                      letterSpacing: "0.12em", color: "var(--primary)",
                      marginBottom: "1rem",
                    }}>
                      {s.num}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.875rem" }}>
                      <h3 style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 700, fontSize: "1.25rem",
                        color: "#FAFAFA", flex: 1, marginRight: "1rem",
                        letterSpacing: "-0.01em",
                      }}>
                        {s.title}
                      </h3>
                      <div className="service-arrow" style={{
                        width: 36, height: 36, borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--primary)",
                      }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </div>
                    </div>
                    <p style={{ fontSize: "0.97rem", lineHeight: 1.7, color: "var(--muted)" }}>{s.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CRAFTED DESIGNS ── */}
        <section className="section-pad">
          <div className="container-custom">
            <div style={{ display: "grid", gap: "4rem", alignItems: "start" }} className="lg:grid-cols-2">
              <FadeUp>
                <p className="eyebrow">Why us</p>
                <h2 style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800, letterSpacing: "-0.03em",
                  color: "#FAFAFA", lineHeight: 1.1,
                  marginBottom: "1.4rem",
                }}>
                  Agency-quality design. Personal local service.
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--muted)" }}>
                  You will not be passed between salespeople, designers and account managers. You deal directly with the person designing and building your website — from the first conversation to launch and ongoing support.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {[
                    { n: "01", title: "Direct communication", desc: "One person, one conversation. No handoffs, no confusion." },
                    { n: "02", title: "Clear case-by-case pricing", desc: "Quoted to suit your project — no locked-in packages or hidden fees." },
                    { n: "03", title: "No confusing technical language", desc: "I'll explain everything in plain English, every step of the way." },
                    { n: "04", title: "Continued hosting and support", desc: "Your site stays looked after long after it goes live." },
                  ].map((item, i) => (
                    <div
                      key={item.n}
                      style={{
                        display: "flex", gap: "1.5rem", alignItems: "flex-start",
                        padding: "1.75rem 0",
                        borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      }}
                    >
                      <span style={{
                        fontFamily: "'Manrope', sans-serif", fontWeight: 800,
                        fontSize: "0.78rem", letterSpacing: "0.1em",
                        color: "var(--primary)", flexShrink: 0, paddingTop: 2,
                      }}>
                        {item.n}
                      </span>
                      <div>
                        <div style={{
                          fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                          fontSize: "1rem", color: "#FAFAFA", marginBottom: "0.35rem",
                        }}>
                          {item.title}
                        </div>
                        <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section id="process" className="section-pad" style={{ background: "var(--panel)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container-custom">
            <FadeUp style={{ marginBottom: "4rem", maxWidth: 600 }}>
              <p className="eyebrow">Process</p>
              <h2 style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 800, letterSpacing: "-0.03em",
                color: "#FAFAFA",
              }}>
                Simple steps, proper results.
              </h2>
            </FadeUp>

            <div style={{ display: "grid", gap: "0" }} className="md:grid-cols-4">
              {PROCESS_STEPS.map((step, i) => (
                <FadeUp key={step.num} delay={i * 0.1}>
                  <div style={{
                    padding: "2rem 1.75rem",
                    borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }} className={i > 0 ? "md:border-l md:border-t-0" : "border-t"}>
                    <div style={{
                      fontFamily: "'Manrope', sans-serif", fontWeight: 800,
                      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                      color: "rgba(255,140,0,0.18)",
                      lineHeight: 1, marginBottom: "1rem",
                      letterSpacing: "-0.04em",
                    }}>
                      {step.num}
                    </div>
                    <h3 style={{
                      fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                      fontSize: "1.05rem", color: "#FAFAFA",
                      marginBottom: "0.75rem", letterSpacing: "-0.01em",
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ background: "var(--light-bg)", padding: "6rem 0" }}>
          <div className="container-custom">
            <div style={{ display: "grid", gap: "4rem", alignItems: "center" }} className="lg:grid-cols-2">
              <FadeUp>
                {/* Photo placeholder */}
                <div style={{
                  aspectRatio: "4/5",
                  background: "linear-gradient(135deg, #e8e4de, #d4cec6)",
                  borderRadius: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
                }}>
                  <div style={{ textAlign: "center", color: "#999" }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                    <p style={{ fontSize: "0.85rem", marginTop: "0.5rem", fontFamily: "'Nunito Sans', sans-serif" }}>Owner photo</p>
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="eyebrow">About</p>
                <h2 style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800, letterSpacing: "-0.03em",
                  color: "var(--light-text)", lineHeight: 1.1,
                  marginBottom: "1.4rem",
                }}>
                  Web design without the agency runaround.
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#555", marginBottom: "1.25rem" }}>
                  Crafted Designs was created to help local businesses get professional websites without confusing processes, inflated agency costs or being left to work everything out themselves.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#555", marginBottom: "2.5rem" }}>
                  I work directly with each client to understand the business, organise the content and create a website that feels right for the people it represents.
                </p>
                <button onClick={() => scrollTo("contact")} className="btn-primary">
                  Start a Conversation
                </button>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-pad">
          <div className="container-custom">
            <FadeUp>
              <div style={{
                background: "var(--primary)",
                borderRadius: 28,
                padding: "clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: -60, right: -60,
                  width: 280, height: 280,
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute", bottom: -80, left: "30%",
                  width: 200, height: 200,
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }} />
                <div style={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
                  <h2 style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                    fontWeight: 800, letterSpacing: "-0.03em",
                    color: "#0D0D0D", lineHeight: 1.1,
                    marginBottom: "1.25rem",
                  }}>
                    Ready for a website that properly represents your business?
                  </h2>
                  <p style={{ fontSize: "1.08rem", color: "rgba(13,13,13,0.7)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
                    Tell me about your business and what you would like your new website to achieve.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <button
                      onClick={() => scrollTo("contact")}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        height: 52, padding: "0 28px",
                        background: "#0D0D0D", color: "#FAFAFA",
                        borderRadius: 999, border: "none", cursor: "pointer",
                        fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "0.95rem",
                        transition: "transform 0.2s, background 0.2s",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
                    >
                      Start a Project
                    </button>
                    <a
                      href="tel:0421448692"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        height: 52, padding: "0 28px",
                        background: "rgba(13,13,13,0.12)", color: "#0D0D0D",
                        borderRadius: 999, border: "1px solid rgba(13,13,13,0.2)",
                        fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "0.95rem",
                        textDecoration: "none",
                        transition: "transform 0.2s, background 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
                    >
                      Call 0421 448 692
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="section-pad" style={{ background: "var(--panel)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container-custom">
            <div style={{ display: "grid", gap: "3rem", alignItems: "start" }} className="lg:grid-cols-2">
              <FadeUp>
                <p className="eyebrow">Contact</p>
                <h2 style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800, letterSpacing: "-0.03em",
                  color: "#FAFAFA", marginBottom: "1rem",
                }}>
                  Let's build your website
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--muted)", marginBottom: "2.5rem" }}>
                  Send through a few details about your business and what you're looking for, and I'll get back to you with the next steps.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { label: "Email", val: "hello@crafteddesigns.com.au" },
                    { label: "Phone", val: "0421 448 692" },
                    { label: "Area", val: "Whitsundays & North Queensland" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex", gap: "1rem", alignItems: "center",
                        padding: "1rem 1.25rem",
                        background: "#0D0D0D",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 14,
                      }}
                    >
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--primary)", minWidth: 44 }}>{item.label}</span>
                      <span style={{ color: "var(--muted)", fontSize: "0.95rem" }}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  style={{
                    background: "#0D0D0D",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 24,
                    padding: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email", type: "email", placeholder: "Your email address" },
                    { id: "phone", label: "Phone", type: "tel", placeholder: "Your phone number" },
                  ].map((f) => (
                    <label key={f.id} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#FAFAFA" }}>{f.label}</span>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        style={{
                          background: "#151515",
                          border: "1px solid rgba(255,255,255,0.09)",
                          borderRadius: 12, padding: "0.875rem 1rem",
                          color: "#FAFAFA", fontSize: "0.95rem",
                          fontFamily: "'Nunito Sans', sans-serif",
                          outline: "none", transition: "border-color 0.2s",
                          minHeight: 44,
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)")}
                      />
                    </label>
                  ))}
                  <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#FAFAFA" }}>Message</span>
                    <textarea
                      placeholder="Tell me about your business and what you need..."
                      rows={4}
                      style={{
                        background: "#151515",
                        border: "1px solid rgba(255,255,255,0.09)",
                        borderRadius: 12, padding: "0.875rem 1rem",
                        color: "#FAFAFA", fontSize: "0.95rem",
                        fontFamily: "'Nunito Sans', sans-serif",
                        outline: "none", resize: "vertical",
                        transition: "border-color 0.2s",
                        minHeight: 120,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)")}
                    />
                  </label>
                  <button type="submit" className="btn-primary" style={{ justifyContent: "center", width: "100%", marginTop: "0.5rem" }}>
                    Send Message
                  </button>
                </form>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "4rem 0 2.5rem",
      }}>
        <div className="container-custom">
          <div style={{ display: "grid", gap: "3rem", marginBottom: "3rem" }} className="md:grid-cols-3">
            {/* Brand */}
            <div>
              <button
                onClick={() => scrollTo("top")}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: "1rem", display: "block" }}
              >
                <div
                  style={{
                    width: 130, height: 44,
                    backgroundImage: "url('/logo-brand-v2.png')",
                    backgroundSize: "768px auto",
                    backgroundPosition: "-18px -355px",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </button>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: 260 }}>
                Premium websites for Whitsundays businesses. Designed with care. Backed by local support.
              </p>
            </div>
            {/* Nav */}
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "1.25rem" }}>Navigation</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {NAV_LINKS.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => scrollTo(l.id)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      color: "var(--muted)", fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.92rem", padding: 0, textAlign: "left",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAFA")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Contact */}
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "1.25rem" }}>Get in touch</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {[
                  "hello@crafteddesigns.com.au",
                  "0421 448 692",
                  "Whitsundays & North Queensland",
                ].map((item) => (
                  <p key={item} style={{ fontSize: "0.92rem", color: "var(--muted)", margin: 0 }}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <p style={{ fontSize: "0.82rem", color: "rgba(166,166,166,0.55)", margin: 0 }}>
              © {new Date().getFullYear()} Crafted Designs. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {["Privacy Policy", "Terms"].map((item) => (
                <button
                  key={item}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: "0.82rem", color: "rgba(166,166,166,0.55)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(166,166,166,0.55)")}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
