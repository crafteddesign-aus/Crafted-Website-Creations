import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────
   Shared animation helper
───────────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Constants
───────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home", id: "top" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
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

/* ─────────────────────────────────────────
   Inline SVG icons
───────────────────────────────────────── */
function IconStar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function IconMobile() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}
function IconHeadset() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}
function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7.5l3 3 6-6" />
    </svg>
  );
}
function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <line x1="2" y1="7" x2="20" y2="7" /><line x1="2" y1="15" x2="20" y2="15" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <line x1="17" y1="5" x2="5" y2="17" /><line x1="5" y1="5" x2="17" y2="17" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   Browser dot row (shared)
───────────────────────────────────────── */
function BrowserDots() {
  return (
    <div style={{ display: "flex", gap: "0.35rem" }}>
      {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
        <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.75 }} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   Whitsundays Escapes desktop mockup
───────────────────────────────────────── */
function DesktopMockup() {
  return (
    <div
      style={{
        background: "#0e1a1f",
        borderRadius: 24,
        overflow: "hidden",
        border: "1.5px solid rgba(255,138,0,0.35)",
        boxShadow: "0 36px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.06)",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Browser top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.6rem 1rem",
          background: "#121c21",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <BrowserDots />
        <div
          style={{
            flex: 1,
            background: "#0a1317",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 999,
            padding: "0.22rem 0.75rem",
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.4)",
            fontFamily: "'Nunito Sans', sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/><path d="M6 3v3l2 1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round"/></svg>
          coralandshore.com.au
        </div>
      </div>

      {/* Fictional website body */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Hero image */}
        <img
          src="/whitsundays-hero.jpg"
          alt="Aerial view of Whitehaven Beach and Hill Inlet, Whitsundays"
          loading="eager"
          width={900}
          height={506}
          style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "center", maxHeight: 280, minHeight: 200 }}
        />

        {/* Dark overlay for text legibility */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(8,20,28,0.62) 0%, rgba(8,20,28,0.35) 50%, rgba(8,20,28,0.72) 100%)",
          pointerEvents: "none",
        }} />

        {/* Fictional nav */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.55rem 0.85rem",
            background: "rgba(8,20,28,0.55)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            color: "#fff",
            textTransform: "uppercase",
          }}>
            🌊 Coral & Shore Co.
          </span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {["Home", "Experiences", "Stay", "Plan Your Trip", "About"].map((t) => (
              <span key={t} style={{ fontSize: "0.48rem", color: "rgba(255,255,255,0.7)", fontFamily: "'Nunito Sans', sans-serif" }}>{t}</span>
            ))}
          </div>
          <span style={{
            fontSize: "0.48rem",
            background: "#FF8A00",
            color: "#080808",
            fontWeight: 700,
            padding: "0.2rem 0.5rem",
            borderRadius: 999,
            fontFamily: "'Manrope', sans-serif",
          }}>
            Book Now
          </span>
        </div>

        {/* Hero text overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            transform: "translateY(-48%)",
            padding: "0 1rem",
          }}
        >
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: "0.5rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--primary)",
            marginBottom: "0.35rem",
          }}>
            IMAGINE YOUR BUSINESS HERE
          </p>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 3vw, 1.55rem)",
            lineHeight: 1.1,
            color: "#fff",
            marginBottom: "0.4rem",
            letterSpacing: "-0.01em",
          }}>
            Your Website Here
          </p>
          <p style={{
            fontSize: "0.54rem",
            color: "rgba(255,255,255,0.75)",
            marginBottom: "0.55rem",
            maxWidth: "55%",
            fontFamily: "'Nunito Sans', sans-serif",
            lineHeight: 1.5,
          }}>
            Showcase what makes your business special in the Whitsundays.
          </p>
          <button
            style={{
              fontSize: "0.52rem",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              borderRadius: 999,
              padding: "0.25rem 0.65rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 600,
              cursor: "default",
            }}
          >
            Explore More →
          </button>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          background: "#0b1a20",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          padding: "0.55rem 0.85rem",
          gap: "1rem",
        }}
      >
        {[
          { icon: "🌊", title: "Local Expertise", sub: "We know the islands." },
          { icon: "✨", title: "Unforgettable Experiences", sub: "Create lasting memories." },
          { icon: "🌿", title: "Sustainable Tourism", sub: "Caring for our paradise." },
        ].map((item) => (
          <div key={item.title} style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: "0.65rem", marginBottom: "0.15rem" }}>{item.icon}</div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "0.46rem", color: "rgba(255,255,255,0.85)", marginBottom: "0.1rem" }}>{item.title}</div>
            <div style={{ fontSize: "0.42rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Mobile mockup
───────────────────────────────────────── */
function PhoneMockup() {
  return (
    <div
      className="phone-rise"
      style={{
        position: "absolute",
        bottom: "-2rem",
        right: "-1.5rem",
        width: "32%",
        zIndex: 2,
        background: "#0e1a1f",
        borderRadius: 20,
        overflow: "hidden",
        border: "1.5px solid rgba(255,138,0,0.38)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      {/* Phone notch strip */}
      <div
        style={{
          height: 10,
          background: "#0b1318",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 0.5rem",
        }}
      >
        <div style={{ width: 20, height: 3, borderRadius: 999, background: "rgba(255,255,255,0.1)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
          <span style={{ fontSize: "0.36rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Manrope', sans-serif" }}>☰</span>
        </div>
      </div>
      {/* Shared image */}
      <div style={{ position: "relative" }}>
        <img
          src="/whitsundays-hero.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={300}
          height={200}
          style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "center top", maxHeight: 160 }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(8,20,28,0.6) 0%, rgba(8,20,28,0.3) 50%, rgba(8,20,28,0.75) 100%)",
        }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.5rem 0.6rem" }}>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: "0.7rem",
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "0.25rem",
          }}>
            Your Website Here
          </p>
          <p style={{ fontSize: "0.4rem", color: "rgba(255,255,255,0.65)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Experience the Whitsundays
          </p>
          <p style={{
            fontSize: "0.38rem",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "'Nunito Sans', sans-serif",
            marginTop: "0.15rem",
            lineHeight: 1.4,
          }}>
            Turquoise waters, white sand and unforgettable island adventures.
          </p>
          <button style={{
            marginTop: "0.3rem",
            fontSize: "0.4rem",
            background: "#FF8A00",
            border: "none",
            color: "#080808",
            borderRadius: 999,
            padding: "0.2rem 0.5rem",
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            cursor: "default",
          }}>
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main App
───────────────────────────────────────── */
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      // Detect active section
      const sections = ["contact", "about", "process", "services", "work", "top"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-[100dvh] overflow-x-hidden"
      style={{ background: "var(--background)", color: "var(--text)" }}
    >
      {/* ══════════════════════════════════════
          HEADER
      ══════════════════════════════════════ */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: isScrolled ? 72 : 88,
          display: "flex",
          alignItems: "center",
          transition: "height 0.3s ease, background 0.3s ease, border-color 0.3s ease",
          background: isScrolled ? "rgba(8,8,8,0.88)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        }}
      >
        <div
          className="container-custom"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("top")}
            aria-label="Crafted Designs — scroll to top"
            style={{
              flexShrink: 0,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <div
              style={{
                width: 148,
                height: 50,
                backgroundImage: "url('/logo-brand-v2.png')",
                backgroundSize: "768px auto",
                backgroundPosition: "-18px -355px",
                backgroundRepeat: "no-repeat",
              }}
            />
          </button>

          {/* Desktop nav */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            style={{ alignItems: "center", gap: "0.25rem" }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((l) => {
              const isActive = activeSection === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  style={{
                    position: "relative",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: isActive ? "var(--primary)" : "var(--muted)",
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    padding: "0.4rem 0.75rem",
                    transition: "color 0.2s",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.2rem",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#F7F7F5";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--muted)";
                  }}
                >
                  {l.label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: -2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "var(--primary)",
                      }}
                    />
                  )}
                </button>
              );
            })}
            <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)", margin: "0 0.5rem" }} />
            <button onClick={() => scrollTo("contact")} className="btn-quote">
              Request a Quote
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text)",
              padding: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile menu panel */}
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
              padding: "1.25rem 1.5rem 1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.125rem",
            }}
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: activeSection === l.id ? "var(--primary)" : "var(--muted)",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "0.875rem 0",
                  textAlign: "left",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="btn-primary"
              style={{ marginTop: "1rem", justifyContent: "center" }}
            >
              Request a Quote
            </button>
          </motion.div>
        )}
      </header>

      <main id="top">
        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "clamp(760px, 90vh, 900px)",
            display: "flex",
            alignItems: "center",
            paddingTop: "clamp(7rem, 12vw, 10rem)",
            paddingBottom: "clamp(4rem, 8vw, 6rem)",
          }}
        >
          {/* Background orange glow — restrained */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse 48% 55% at 72% 38%, rgba(255,138,0,0.13), transparent 70%)," +
                "radial-gradient(ellipse 30% 40% at 65% 80%, rgba(255,138,0,0.06), transparent 70%)",
            }}
          />

          {/* Decorative "CRAFT" background text — left side only */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-2%",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "'Manrope', sans-serif",
              fontSize: "clamp(10rem, 24vw, 22rem)",
              fontWeight: 800,
              color: "rgba(255,255,255,0.016)",
              userSelect: "none",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
            className="hidden md:block"
          >
            CRAFT
          </div>

          <div className="container-custom" style={{ position: "relative", width: "100%" }}>
            <div
              style={{
                display: "grid",
                gap: "3rem",
                alignItems: "center",
              }}
              className="lg:grid-cols-[42%_1fr]"
            >

              {/* ── LEFT COLUMN ── */}
              <div>
                {/* Strapline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.35rem 0.9rem",
                      borderRadius: 999,
                      border: "1px solid rgba(255,138,0,0.45)",
                      background: "rgba(255,138,0,0.07)",
                      marginBottom: "1.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.73rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--primary)",
                      }}
                    >
                      BOUTIQUE WEB DESIGN · WHITSUNDAYS
                    </span>
                  </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(3.6rem, 6.5vw, 6rem)",
                    fontWeight: 800,
                    lineHeight: 0.98,
                    letterSpacing: "-0.03em",
                    color: "#F7F7F5",
                    marginBottom: "1.5rem",
                  }}
                >
                  Websites{" "}
                  <br className="hidden sm:block" />
                  <em
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "var(--primary)",
                    }}
                  >
                    crafted
                  </em>{" "}
                  to grow
                  <br />
                  your business
                  <span style={{ color: "var(--primary)" }}>.</span>
                </motion.h1>

                {/* Supporting paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.72,
                    color: "var(--muted)",
                    maxWidth: 500,
                    marginBottom: "2.25rem",
                  }}
                >
                  Premium, custom websites for Whitsundays businesses that want to look professional, build trust and generate more enquiries.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "2.5rem" }}
                >
                  <button onClick={() => scrollTo("contact")} className="btn-primary">
                    Start Your Website
                    <span className="btn-arrow">
                      <IconArrowRight />
                    </span>
                  </button>
                  <button onClick={() => scrollTo("work")} className="btn-ghost">
                    View Our Work
                    <span className="btn-arrow">
                      <IconArrowRight />
                    </span>
                  </button>
                </motion.div>

                {/* Benefit list */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
                >
                  {[
                    {
                      icon: <IconStar />,
                      title: "Custom-designed for your business",
                      desc: "Unique designs tailored to your brand and goals.",
                    },
                    {
                      icon: <IconMobile />,
                      title: "Mobile-friendly and easy to use",
                      desc: "A seamless experience across every screen size.",
                    },
                    {
                      icon: <IconHeadset />,
                      title: "Personal, local support",
                      desc: "Direct help from design through to launch.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.875rem",
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          border: "1px solid rgba(255,138,0,0.45)",
                          background: "rgba(255,138,0,0.06)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          color: "var(--primary)",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            color: "#F7F7F5",
                            margin: 0,
                            marginBottom: "0.15rem",
                          }}
                        >
                          {item.title}
                        </p>
                        <p
                          style={{
                            fontSize: "0.82rem",
                            color: "var(--muted)",
                            margin: 0,
                            lineHeight: 1.5,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ── RIGHT COLUMN — Device mockups ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.14, ease: [0.21, 0.47, 0.32, 0.98] }}
                style={{ position: "relative" }}
              >
                {/* Orange glow behind mockups */}
                <div className="mockup-glow" aria-hidden="true" />

                {/* Floating wrapper */}
                <div
                  className="float-gentle"
                  style={{ position: "relative", paddingBottom: "2.5rem", paddingRight: "2rem" }}
                >
                  <DesktopMockup />
                  <PhoneMockup />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            MARQUEE STRIP
        ══════════════════════════════════════ */}
        <div
          aria-hidden="true"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            background: "#0D0D0D",
            padding: "1rem 0",
            overflow: "hidden",
          }}
        >
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  letterSpacing: "0.18em",
                  color: "var(--primary)",
                  paddingRight: "3rem",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
                <span style={{ marginLeft: "3rem", opacity: 0.3, color: "var(--muted)" }}>—</span>
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            INTRODUCTION
        ══════════════════════════════════════ */}
        <section style={{ background: "var(--light-bg)", padding: "6rem 0" }}>
          <div className="container-custom">
            <div
              style={{ display: "grid", gap: "4rem", alignItems: "center" }}
              className="lg:grid-cols-2"
            >
              <FadeUp>
                <p className="eyebrow" style={{ color: "#FF8A00" }}>What we do</p>
                <h2
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: "var(--light-text)",
                    marginBottom: "1.4rem",
                    letterSpacing: "-0.03em",
                  }}
                >
                  More than a good-looking website.
                </h2>
                <p
                  style={{
                    fontSize: "1.08rem",
                    lineHeight: 1.8,
                    color: "#555",
                    maxWidth: 480,
                  }}
                >
                  Your website should make your business look credible, explain what you do clearly and make it easy for customers to contact you. Crafted Designs builds professional websites with a clear purpose — not templates filled with unnecessary clutter.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div
                  style={{
                    background: "var(--light-text)",
                    borderRadius: 24,
                    padding: "3rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -20,
                      right: -20,
                      width: 120,
                      height: 120,
                      background: "var(--primary)",
                      borderRadius: "50%",
                      opacity: 0.12,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                      lineHeight: 1.2,
                      color: "#FAFAFA",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Built to turn visitors into{" "}
                    <em
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        color: "var(--primary)",
                      }}
                    >
                      enquiries.
                    </em>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "2rem",
                      marginTop: "2.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {[
                      ["100%", "Tailored design"],
                      ["Local", "Whitsundays based"],
                      ["Direct", "One person throughout"],
                    ].map(([stat, label]) => (
                      <div key={label}>
                        <div
                          style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 800,
                            fontSize: "1.5rem",
                            color: "var(--primary)",
                          }}
                        >
                          {stat}
                        </div>
                        <div
                          style={{
                            fontSize: "0.82rem",
                            color: "rgba(250,250,250,0.55)",
                            marginTop: "0.2rem",
                          }}
                        >
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FEATURED WORK
        ══════════════════════════════════════ */}
        <section id="work" className="section-pad">
          <div className="container-custom">
            <FadeUp style={{ marginBottom: "4rem" }}>
              <p className="eyebrow">Portfolio</p>
              <h2
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#F7F7F5",
                }}
              >
                Recent websites,{" "}
                <em
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    color: "var(--primary)",
                  }}
                >
                  carefully crafted.
                </em>
              </h2>
            </FadeUp>

            {/* Project 1 — NQBG Sheds */}
            <FadeUp style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  background: "var(--panel)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 28,
                  overflow: "hidden",
                  display: "grid",
                }}
                className="lg:grid-cols-2"
              >
                <div
                  style={{
                    background: "#0a0a0a",
                    position: "relative",
                    minHeight: 340,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.7rem 1rem",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      background: "#111",
                    }}
                  >
                    <BrowserDots />
                    <div
                      style={{
                        marginLeft: "0.75rem",
                        flex: 1,
                        borderRadius: 999,
                        background: "#0D0D0D",
                        border: "1px solid rgba(255,255,255,0.07)",
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.68rem",
                        color: "var(--muted)",
                      }}
                    >
                      www.nqbgsheds.com.au
                    </div>
                  </div>
                  <img
                    src="/sheds-project.png"
                    alt="NQBG Sheds website design"
                    className="img-zoom"
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "cover",
                      objectPosition: "top",
                      minHeight: 300,
                    }}
                  />
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {["Construction", "Whitsundays", "Web Design", "Hosting"].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "0.3rem 0.75rem",
                          borderRadius: 999,
                          border: "1px solid rgba(255,138,0,0.3)",
                          color: "var(--primary)",
                          background: "rgba(255,138,0,0.06)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "#F7F7F5",
                      marginBottom: "1rem",
                    }}
                  >
                    NQBG Sheds
                  </h3>
                  <p
                    style={{
                      fontSize: "1.02rem",
                      lineHeight: 1.75,
                      color: "var(--muted)",
                      marginBottom: "2rem",
                    }}
                  >
                    A bold, professional website for a Whitsundays shed builder — designed to showcase projects, services and coverage areas.
                  </p>
                  <a
                    href="https://www.nqbgsheds.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ width: "fit-content" }}
                  >
                    View Project
                    <span className="btn-arrow"><IconArrowRight /></span>
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Project 2 — NQ Excavations */}
            <FadeUp>
              <div
                style={{
                  background: "var(--panel)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 28,
                  overflow: "hidden",
                  display: "grid",
                }}
                className="lg:grid-cols-2"
              >
                <div className="p-10 flex flex-col justify-center order-2 lg:order-1">
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {["Excavation", "North Queensland", "Web Design", "Hosting"].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "0.3rem 0.75rem",
                          borderRadius: 999,
                          border: "1px solid rgba(255,138,0,0.3)",
                          color: "var(--primary)",
                          background: "rgba(255,138,0,0.06)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "#F7F7F5",
                      marginBottom: "1rem",
                    }}
                  >
                    NQ Excavations
                  </h3>
                  <p
                    style={{
                      fontSize: "1.02rem",
                      lineHeight: 1.75,
                      color: "var(--muted)",
                      marginBottom: "2rem",
                    }}
                  >
                    A clean, confident website for a North Queensland excavation specialist — strong first impressions, clear service sections, and simple pathways to enquire.
                  </p>
                  <a
                    href="https://nqexcavations.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ width: "fit-content" }}
                  >
                    View Project
                    <span className="btn-arrow"><IconArrowRight /></span>
                  </a>
                </div>
                <div
                  style={{
                    background: "#0a0a0a",
                    position: "relative",
                    minHeight: 340,
                    overflow: "hidden",
                  }}
                  className="order-1 lg:order-2"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.7rem 1rem",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      background: "#111",
                    }}
                  >
                    <BrowserDots />
                    <div
                      style={{
                        marginLeft: "0.75rem",
                        flex: 1,
                        borderRadius: 999,
                        background: "#0D0D0D",
                        border: "1px solid rgba(255,255,255,0.07)",
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.68rem",
                        color: "var(--muted)",
                      }}
                    >
                      nqexcavations.com.au
                    </div>
                  </div>
                  <img
                    src="/excavation-project.png"
                    alt="NQ Excavations website design"
                    className="img-zoom"
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "cover",
                      objectPosition: "top",
                      minHeight: 300,
                    }}
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SERVICES
        ══════════════════════════════════════ */}
        <section
          id="services"
          className="section-pad"
          style={{
            background: "var(--panel)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container-custom">
            <FadeUp style={{ marginBottom: "4rem", maxWidth: 640 }}>
              <p className="eyebrow">Services</p>
              <h2
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#F7F7F5",
                  lineHeight: 1.1,
                }}
              >
                Everything needed to build a stronger online presence.
              </h2>
            </FadeUp>

            <div style={{ display: "grid", gap: "1.25rem" }} className="md:grid-cols-2">
              {SERVICES.map((s, i) => (
                <FadeUp key={s.num} delay={i * 0.08}>
                  <div
                    className="card-base"
                    style={{
                      padding: "2.2rem 2.4rem",
                      height: "100%",
                      background: "#0D0D0D",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 800,
                        fontSize: "0.78rem",
                        letterSpacing: "0.12em",
                        color: "var(--primary)",
                        marginBottom: "1rem",
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "0.875rem",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.25rem",
                          color: "#F7F7F5",
                          flex: 1,
                          marginRight: "1rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {s.title}
                      </h3>
                      <div
                        className="service-arrow"
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          border: "1px solid rgba(255,255,255,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          color: "var(--primary)",
                        }}
                      >
                        <IconArrowRight />
                      </div>
                    </div>
                    <p style={{ fontSize: "0.97rem", lineHeight: 1.7, color: "var(--muted)" }}>
                      {s.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            WHY CRAFTED DESIGNS
        ══════════════════════════════════════ */}
        <section className="section-pad">
          <div className="container-custom">
            <div
              style={{ display: "grid", gap: "4rem", alignItems: "start" }}
              className="lg:grid-cols-2"
            >
              <FadeUp>
                <p className="eyebrow">Why us</p>
                <h2
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "#F7F7F5",
                    lineHeight: 1.1,
                    marginBottom: "1.4rem",
                  }}
                >
                  Agency-quality design. Personal local service.
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--muted)" }}>
                  You will not be passed between salespeople, designers and account managers. You deal directly with the person designing and building your website — from the first conversation to launch and ongoing support.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { n: "01", title: "Direct communication", desc: "One person, one conversation. No handoffs, no confusion." },
                    { n: "02", title: "Clear case-by-case pricing", desc: "Quoted to suit your project — no locked-in packages or hidden fees." },
                    { n: "03", title: "No confusing technical language", desc: "Everything explained in plain English, every step of the way." },
                    { n: "04", title: "Continued hosting and support", desc: "Your site stays looked after long after it goes live." },
                  ].map((item, i) => (
                    <div
                      key={item.n}
                      style={{
                        display: "flex",
                        gap: "1.5rem",
                        alignItems: "flex-start",
                        padding: "1.75rem 0",
                        borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 800,
                          fontSize: "0.78rem",
                          letterSpacing: "0.1em",
                          color: "var(--primary)",
                          flexShrink: 0,
                          paddingTop: 2,
                        }}
                      >
                        {item.n}
                      </span>
                      <div>
                        <div
                          style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            color: "#F7F7F5",
                            marginBottom: "0.35rem",
                          }}
                        >
                          {item.title}
                        </div>
                        <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PROCESS
        ══════════════════════════════════════ */}
        <section
          id="process"
          className="section-pad"
          style={{
            background: "var(--panel)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container-custom">
            <FadeUp style={{ marginBottom: "4rem", maxWidth: 600 }}>
              <p className="eyebrow">Process</p>
              <h2
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#F7F7F5",
                }}
              >
                Simple steps, proper results.
              </h2>
            </FadeUp>

            <div style={{ display: "grid", gap: 0 }} className="md:grid-cols-4">
              {PROCESS_STEPS.map((step, i) => (
                <FadeUp key={step.num} delay={i * 0.1}>
                  <div
                    style={{
                      padding: "2rem 1.75rem",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}
                    className={i > 0 ? "md:border-t-0 md:border-l" : "md:border-t"}
                  >
                    <div
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                        color: "rgba(255,138,0,0.15)",
                        lineHeight: 1,
                        marginBottom: "1rem",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {step.num}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "#F7F7F5",
                        marginBottom: "0.75rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--muted)",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            ABOUT
        ══════════════════════════════════════ */}
        <section id="about" style={{ background: "var(--light-bg)", padding: "6rem 0" }}>
          <div className="container-custom">
            <div
              style={{ display: "grid", gap: "4rem", alignItems: "center" }}
              className="lg:grid-cols-2"
            >
              <FadeUp>
                <div
                  style={{
                    aspectRatio: "4/5",
                    background: "linear-gradient(135deg, #e8e4de, #d4cec6)",
                    borderRadius: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
                  }}
                >
                  <div style={{ textAlign: "center", color: "#999" }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        marginTop: "0.5rem",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      Owner photo
                    </p>
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="eyebrow">About</p>
                <h2
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "var(--light-text)",
                    lineHeight: 1.1,
                    marginBottom: "1.4rem",
                  }}
                >
                  Web design without the agency runaround.
                </h2>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    color: "#555",
                    marginBottom: "1.25rem",
                  }}
                >
                  Crafted Designs was created to help local businesses get professional websites without confusing processes, inflated agency costs or being left to work everything out themselves.
                </p>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    color: "#555",
                    marginBottom: "2.5rem",
                  }}
                >
                  I work directly with each client to understand the business, organise the content and create a website that feels right for the people it represents.
                </p>
                <button onClick={() => scrollTo("contact")} className="btn-primary">
                  Start a Conversation
                </button>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA BANNER
        ══════════════════════════════════════ */}
        <section className="section-pad">
          <div className="container-custom">
            <FadeUp>
              <div
                style={{
                  background: "var(--primary)",
                  borderRadius: 28,
                  padding: "clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -60,
                    right: -60,
                    width: 280,
                    height: 280,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: -80,
                    left: "30%",
                    width: 200,
                    height: 200,
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />
                <div style={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
                  <h2
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "#080808",
                      lineHeight: 1.1,
                      marginBottom: "1.25rem",
                    }}
                  >
                    Ready for a website that properly represents your business?
                  </h2>
                  <p
                    style={{
                      fontSize: "1.08rem",
                      color: "rgba(8,8,8,0.7)",
                      marginBottom: "2.5rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Tell me about your business and what you would like your new website to achieve.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <button
                      onClick={() => scrollTo("contact")}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        height: 52,
                        padding: "0 28px",
                        background: "#080808",
                        color: "#F7F7F5",
                        borderRadius: 999,
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        transition: "transform 0.2s",
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
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        height: 52,
                        padding: "0 28px",
                        background: "rgba(8,8,8,0.12)",
                        color: "#080808",
                        borderRadius: 999,
                        border: "1px solid rgba(8,8,8,0.2)",
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        textDecoration: "none",
                        transition: "transform 0.2s",
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

        {/* ══════════════════════════════════════
            CONTACT
        ══════════════════════════════════════ */}
        <section
          id="contact"
          className="section-pad"
          style={{
            background: "var(--panel)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container-custom">
            <div
              style={{ display: "grid", gap: "3rem", alignItems: "start" }}
              className="lg:grid-cols-2"
            >
              <FadeUp>
                <p className="eyebrow">Contact</p>
                <h2
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "#F7F7F5",
                    marginBottom: "1rem",
                  }}
                >
                  Let's build your website
                </h2>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "var(--muted)",
                    marginBottom: "2.5rem",
                  }}
                >
                  Send through a few details about your business and what you're looking for, and I'll get back to you with next steps.
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
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                        padding: "1rem 1.25rem",
                        background: "#0D0D0D",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 14,
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--primary)",
                          minWidth: 44,
                        }}
                      >
                        {item.label}
                      </span>
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
                      <span
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          color: "#F7F7F5",
                        }}
                      >
                        {f.label}
                      </span>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        autoComplete={f.id}
                        style={{
                          background: "#151515",
                          border: "1px solid rgba(255,255,255,0.09)",
                          borderRadius: 12,
                          padding: "0.875rem 1rem",
                          color: "#F7F7F5",
                          fontSize: "0.95rem",
                          fontFamily: "'Nunito Sans', sans-serif",
                          outline: "none",
                          transition: "border-color 0.2s",
                          minHeight: 48,
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "var(--primary)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)")
                        }
                      />
                    </label>
                  ))}
                  <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <span
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: "#F7F7F5",
                      }}
                    >
                      Message
                    </span>
                    <textarea
                      placeholder="Tell me about your business and what you need..."
                      rows={4}
                      style={{
                        background: "#151515",
                        border: "1px solid rgba(255,255,255,0.09)",
                        borderRadius: 12,
                        padding: "0.875rem 1rem",
                        color: "#F7F7F5",
                        fontSize: "0.95rem",
                        fontFamily: "'Nunito Sans', sans-serif",
                        outline: "none",
                        resize: "vertical",
                        transition: "border-color 0.2s",
                        minHeight: 120,
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "var(--primary)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)")
                      }
                    />
                  </label>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ justifyContent: "center", width: "100%", marginTop: "0.5rem" }}
                  >
                    Send Message
                  </button>
                </form>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer
        style={{
          background: "#050505",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "4rem 0 2.5rem",
        }}
      >
        <div className="container-custom">
          <div
            style={{ display: "grid", gap: "3rem", marginBottom: "3rem" }}
            className="md:grid-cols-3"
          >
            <div>
              <button
                onClick={() => scrollTo("top")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: "1rem",
                  display: "block",
                }}
                aria-label="Back to top"
              >
                <div
                  style={{
                    width: 130,
                    height: 44,
                    backgroundImage: "url('/logo-brand-v2.png')",
                    backgroundSize: "768px auto",
                    backgroundPosition: "-18px -355px",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </button>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  maxWidth: 260,
                }}
              >
                Premium websites for Whitsundays businesses. Designed with care. Backed by local support.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  marginBottom: "1.25rem",
                }}
              >
                Navigation
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {NAV_LINKS.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => scrollTo(l.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--muted)",
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: "0.92rem",
                      padding: 0,
                      textAlign: "left",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F7F7F5")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  marginBottom: "1.25rem",
                }}
              >
                Get in touch
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {[
                  "hello@crafteddesigns.com.au",
                  "0421 448 692",
                  "Whitsundays & North Queensland",
                ].map((item) => (
                  <p key={item} style={{ fontSize: "0.92rem", color: "var(--muted)", margin: 0 }}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p style={{ fontSize: "0.82rem", color: "rgba(169,169,164,0.5)", margin: 0 }}>
              © {new Date().getFullYear()} Crafted Designs. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {["Privacy Policy", "Terms"].map((item) => (
                <button
                  key={item}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.82rem",
                    color: "rgba(169,169,164,0.5)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(169,169,164,0.5)")}
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
