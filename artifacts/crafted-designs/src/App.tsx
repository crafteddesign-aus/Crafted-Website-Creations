import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
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
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

const MARQUEE_ITEMS = [
  "WEB DESIGN",
  "MOBILE DESIGN",
  "DOMAIN SETUP",
  "WEBSITE HOSTING",
  "ENQUIRY FORMS",
  "ONGOING SUPPORT",
];

const SERVICES = [
  {
    title: "Custom Website Design",
    desc: "A tailored website built around your business, brand, services and customers.",
  },
  {
    title: "Website Refreshes",
    desc: "Modernise an existing website with clearer content, stronger presentation and improved mobile usability.",
  },
  {
    title: "Hosting & Ongoing Support",
    desc: "Reliable hosting and practical assistance after your website goes live.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Tell me about your business",
    desc: "We start with a straightforward conversation about your business, services, customers and what the website needs to achieve.",
  },
  {
    num: "02",
    title: "Your first design is created",
    desc: "I create an initial design using your real branding, content and business direction.",
  },
  {
    num: "03",
    title: "Refine the details",
    desc: "We review the design together and make the necessary adjustments before launch.",
  },
  {
    num: "04",
    title: "Launch and ongoing support",
    desc: "Once everything is approved, your website is connected, tested and launched. Hosting and support can continue afterwards.",
  },
];

const WHY_FEATURES = [
  { title: "Direct communication", desc: "Work with one person from the first conversation through to launch." },
  { title: "Case-by-case pricing", desc: "Your website is quoted around its actual scope, without confusing packages or unnecessary extras." },
  { title: "Plain-English guidance", desc: "Every step is explained clearly, without unnecessary technical language." },
  { title: "Ongoing support", desc: "Hosting and practical assistance remain available after the website goes live." },
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
function IconLayout() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}
function IconRefresh() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-2.64-6.36M21 3v5h-5" />
    </svg>
  );
}
function IconChat() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 9 9 0 0 1-4-1L3 20l1-4.5a8.5 8.5 0 0 1-1-4A8.38 8.38 0 0 1 11.5 3 8.38 8.38 0 0 1 21 11.5z" />
    </svg>
  );
}
function IconTag() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41 12 22 2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}
function IconBook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
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
function _DesktopMockup_removed() {
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
          style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "center 42%", maxHeight: 280, minHeight: 200 }}
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
            color: "#090909",
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
   Mobile mockup — true portrait smartphone
───────────────────────────────────────── */
function _PhoneMockup_removed() {
  return (
    <div
      className="phone-rise"
      style={{
        /* Outer device shell */
        position: "absolute",
        bottom: "-2rem",
        right: "2rem",
        width: "clamp(185px, 15vw, 215px)",
        aspectRatio: "9 / 19.5",
        zIndex: 3,
        /* Physical frame */
        background: "#0d0d0d",
        borderRadius: 40,
        border: "1.5px solid rgba(255,138,0,0.3)",
        boxShadow: [
          "0 0 55px rgba(255,138,0,0.10)",
          "0 44px 110px rgba(0,0,0,0.94)",
          "inset 0 1px 0 rgba(255,255,255,0.08)",
        ].join(", "),
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >

      {/* ── Top bezel — camera pill ──────────────────────── */}
      <div style={{
        flexShrink: 0,
        height: 24,
        background: "#0d0d0d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          width: 60,
          height: 13,
          borderRadius: 999,
          background: "#1a1a1a",
          border: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: 4,
        }}>
          <div style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#222",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "inset 0 0 3px rgba(0,0,0,0.9)",
          }} />
        </div>
      </div>

      {/* ── Screen — inset 9px left/right ────────────────── */}
      <div style={{
        flex: 1,
        marginLeft: 9,
        marginRight: 9,
        borderRadius: 31,
        overflow: "hidden",
        background: "#060d14",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}>

        {/* Status bar */}
        <div style={{
          flexShrink: 0,
          background: "#060d14",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 12px 3px",
        }}>
          <span style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: 9,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "-0.01em",
          }}>9:41</span>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 2.5 }}>
            {/* Signal bars */}
            {[3, 5, 7, 9].map((h, i) => (
              <div key={i} style={{
                width: 2.5,
                height: h,
                borderRadius: 1,
                background: i < 3 ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.28)",
              }} />
            ))}
            {/* WiFi arcs */}
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true" style={{ marginLeft: 3, marginBottom: 1 }}>
              <circle cx="6" cy="9" r="1.4" fill="rgba(255,255,255,0.85)"/>
              <path d="M3 6.5A4.2 4.2 0 0 1 9 6.5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
              <path d="M.5 4A7.5 7.5 0 0 1 11.5 4" stroke="rgba(255,255,255,0.38)" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
            </svg>
            {/* Battery */}
            <div style={{
              marginLeft: 2,
              width: 17,
              height: 8,
              border: "1px solid rgba(255,255,255,0.52)",
              borderRadius: 2.5,
              padding: "1.5px",
              display: "flex",
              position: "relative",
            }}>
              <div style={{ width: "76%", height: "100%", background: "rgba(255,255,255,0.78)", borderRadius: 1 }} />
              <div style={{
                position: "absolute",
                right: -4,
                top: "50%",
                transform: "translateY(-50%)",
                width: 3,
                height: 5,
                background: "rgba(255,255,255,0.38)",
                borderRadius: "0 2px 2px 0",
              }} />
            </div>
          </div>
        </div>

        {/* Mobile nav bar */}
        <div style={{
          flexShrink: 0,
          background: "rgba(4,10,16,0.98)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "9px 13px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{
              width: 19,
              height: 19,
              borderRadius: 6,
              background: "rgba(255,138,0,0.14)",
              border: "1px solid rgba(255,138,0,0.52)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", border: "1.5px solid #FF8A00" }} />
            </div>
            <span style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: 8.5,
              color: "var(--text)",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}>
              CORAL & SHORE CO.
            </span>
          </div>
          {/* Hamburger */}
          <div style={{ display: "flex", flexDirection: "column", gap: 3.5, cursor: "default" }}>
            <div style={{ width: 17, height: 2, background: "rgba(255,255,255,0.8)", borderRadius: 1 }} />
            <div style={{ width: 12, height: 2, background: "rgba(255,255,255,0.8)", borderRadius: 1 }} />
            <div style={{ width: 17, height: 2, background: "rgba(255,255,255,0.8)", borderRadius: 1 }} />
          </div>
        </div>

        {/* Hero image with text overlay */}
        <div style={{ flexShrink: 0, position: "relative" }}>
          <img
            src="/whitsundays-hero.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            style={{
              width: "100%",
              display: "block",
              objectFit: "cover",
              objectPosition: "center 35%",
              height: 175,
            }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(4,10,16,0.5) 0%, rgba(4,10,16,0.04) 28%, rgba(4,10,16,0.93) 100%)",
          }} />
          {/* Text content */}
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 13px 13px",
          }}>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: 7.5,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              color: "#FF8A00",
              marginBottom: 5,
            }}>
              IMAGINE YOUR BUSINESS HERE
            </p>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: 27,
              lineHeight: 1.08,
              color: "#fff",
              marginBottom: 7,
              letterSpacing: "-0.025em",
            }}>
              Your Website<br />Here
            </p>
            <p style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: 10,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.45,
              marginBottom: 12,
            }}>
              Showcase what makes your business<br />special in the Whitsundays.
            </p>
            <button style={{
              alignSelf: "flex-start",
              background: "#FF8A00",
              border: "none",
              borderRadius: 999,
              padding: "7px 17px",
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: 10,
              color: "#090909",
              cursor: "default",
              letterSpacing: "0.06em",
            }}>
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Feature strip — fills remaining screen height */}
        <div style={{
          flex: 1,
          background: "#06101a",
          display: "flex",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          alignItems: "center",
          padding: "10px 4px",
        }}>
          {[
            { label: "Local Expertise",  sub: "We know the islands" },
            { label: "Island Tours",     sub: "Unforgettable trips"  },
            { label: "Eco Travel",       sub: "Caring for paradise"  },
          ].map((item, i) => (
            <div key={i} style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0 4px",
              borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}>
              <div style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "rgba(255,138,0,0.1)",
                border: "1px solid rgba(255,138,0,0.32)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 5,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF8A00", opacity: 0.72 }} />
              </div>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                fontSize: 8,
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.2,
                marginBottom: 2,
              }}>{item.label}</p>
              <p style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: 7,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.3,
              }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bezel — home indicator ───────────────── */}
      <div style={{
        flexShrink: 0,
        height: 26,
        background: "#0d0d0d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          width: 82,
          height: 4,
          borderRadius: 999,
          background: "rgba(255,255,255,0.22)",
        }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main App
───────────────────────────────────────── */
function HeroDeviceShowcase() {
  return (
    <div className="hero-device-stage" aria-hidden="true">
      <div className="hero-device-shadow" />
      <img
        src="/website-hero-devices.png"
        alt=""
        loading="eager"
        width={1456}
        height={1104}
        className="hero-device-image"
      />
    </div>
  );
}

const HERO_BENEFITS = [
  {
    icon: <IconStar />,
    title: "Designed around your business",
    desc: "A tailored website that reflects your brand, services and customers.",
  },
  {
    icon: <IconMobile />,
    title: "Polished on every screen",
    desc: "A clear, easy-to-use experience across mobile, tablet and desktop.",
  },
  {
    icon: <IconHeadset />,
    title: "Personal support",
    desc: "Direct help from the first conversation through to launch and beyond.",
  },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > 600);
      // Detect active section
      const sections = ["contact", "about", "process", "work", "services", "top"];
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
        className="site-header"
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
          background: isScrolled ? "rgba(9,9,9,0.85)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled ? "1px solid var(--border-color)" : "1px solid transparent",
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
            <img
              src="/logo-mark.png"
              alt="Crafted Designs"
              style={{
                height: 34,
                width: "auto",
                display: "block",
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
                    if (!isActive) e.currentTarget.style.color = "var(--text)";
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
          className="hero-section"
          style={{
            position: "relative",
            minHeight: "clamp(720px, 88vh, 880px)",
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "clamp(6.5rem, 12vw, 10rem)",
            paddingBottom: "clamp(9rem, 13vw, 11.5rem)",
            background: "linear-gradient(135deg, #F8F4EA 0%, #F1EADF 54%, #F8F4EC 100%)",
          }}
        >
          {/* Decorative layer — clipped independently so mockups can overflow */}
          <div
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
          >
            {/* Hero background image — desktop / mobile */}
            <picture className="hero-bg-picture">
              <source media="(max-width: 767px)" srcSet="/images/hero/crafted-designs-hero-mobile.webp" />
              <img
                src="/images/hero/crafted-designs-hero-desktop.webp"
                alt=""
                aria-hidden="true"
                className="hero-bg-img"
              />
            </picture>
            {/* Responsive overlay — protects text on mobile/tablet */}
            <div className="hero-img-overlay" />
            {/* Subtle warm accent */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 35% 32% at 5% 96%, rgba(216,128,46,0.52), transparent 70%), radial-gradient(ellipse 44% 38% at 76% 34%, rgba(255,138,0,0.08), transparent 68%), radial-gradient(ellipse 36% 28% at 12% 18%, rgba(255,255,255,0.72), transparent 72%)",
              }}
            />
            <div className="hero-background-grid" />
            <div className="hero-curve-line" />
            <div className="hero-abstract hero-abstract--large" />
            <div className="hero-abstract hero-abstract--small" />
            {/* Decorative "CRAFT" background text */}
            <div
              style={{
                position: "absolute",
                left: "-2%",
                top: "50%",
                transform: "translateY(-50%)",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(10rem, 24vw, 21rem)",
                fontWeight: 800,
                color: "rgba(23,23,23,0.024)",
                userSelect: "none",
                whiteSpace: "nowrap",
                letterSpacing: "0",
                lineHeight: 1,
              }}
              className="hidden md:block"
            >
              CRAFT
            </div>
          </div>

          <div className="container-custom" style={{ position: "relative", width: "100%" }}>
            <div
              style={{
                display: "grid",
                gap: "clamp(2.5rem, 5vw, 4.5rem)",
                alignItems: "center",
              }}
              className="hero-grid lg:grid-cols-[43%_1fr]"
            >

              {/* ── LEFT COLUMN ── */}
              <div className="hero-copy-column">
                {/* Strapline */}
                <motion.div
                  className="hero-strapline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div
                    className="hero-strapline"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.42rem 0.95rem",
                      borderRadius: 999,
                      border: "1px solid rgba(255,138,0,0.38)",
                      background: "rgba(255,255,255,0.62)",
                      marginBottom: "1.75rem",
                      boxShadow: "0 10px 30px rgba(73,47,12,0.06)",
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
                      CUSTOM WEBSITE DESIGN
                    </span>
                  </div>
                </motion.div>

                {/* 2 — Heading (CSS order 2) */}
                <motion.h1
                  className="hero-h1"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(3.35rem, 7.4vw, 6.35rem)",
                    fontWeight: 800,
                    lineHeight: 0.92,
                    letterSpacing: "0",
                    color: "#171717",
                    marginBottom: "1.25rem",
                    maxWidth: 650,
                  }}
                >
                  Websites{" "}
                  <br className="hidden sm:block" />
                  <em
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#C9863C",
                    }}
                  >
                    crafted
                  </em>{" "}for
                  <br className="block sm:hidden" />
                  {" "}your business
                  <span style={{ color: "var(--primary)" }}>.</span>
                </motion.h1>

                {/* 3 — Supporting paragraph (CSS order 3) */}
                <motion.p
                  className="hero-para"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{
                    fontSize: "clamp(1.02rem, 1.25vw, 1.14rem)",
                    lineHeight: 1.72,
                    color: "#4A4641",
                    maxWidth: 520,
                    marginBottom: "1rem",
                  }}
                >
                  Premium, custom websites designed to help your business look professional, build trust and generate more enquiries.
                </motion.p>

                {/* 4 — Mobile-only: primary button solo (CSS order 4, hidden md+) */}
                <motion.div
                  className="hero-primary-solo"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <button onClick={() => scrollTo("contact")} className="btn-primary">
                    Start Your Website
                    <span className="btn-arrow">
                      <IconArrowRight />
                    </span>
                  </button>
                </motion.div>

                {/* 5 — Mobile artwork wrapper (CSS order 5, hidden md+) */}
                <div className="hero-mobile-art-wrap">
                  <img
                    src="/images/hero/crafted-designs-hero-mobile.webp"
                    alt="Custom websites for Australian businesses — laptop and phone preview"
                    className="hero-mobile-art"
                  />
                </div>

                {/* 6 — Location line (CSS order 6 mobile → order 4 desktop) */}
                <motion.p
                  className="hero-location"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.82rem",
                    color: "#7A7470",
                    marginBottom: "2.15rem",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)", flexShrink: 0, display: "inline-block" }} />
                  Based in the Whitsundays, creating websites for businesses across Australia.
                </motion.p>

                {/* 7 — Mobile-only: secondary text link (CSS order 7, hidden md+) */}
                <motion.div
                  className="hero-secondary-mobile"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.24, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <button onClick={() => scrollTo("work")} className="hero-view-work-link">
                    View Our Work
                    <span className="btn-arrow" style={{ display: "flex", alignItems: "center" }}>
                      <IconArrowRight />
                    </span>
                  </button>
                </motion.div>

                {/* 5d — Desktop-only: both buttons side by side (CSS order 5 desktop, hidden mobile) */}
                <motion.div
                  className="hero-btns"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.26, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "2.35rem" }}
                >
                  <button onClick={() => scrollTo("contact")} className="btn-primary">
                    Start Your Website
                    <span className="btn-arrow">
                      <IconArrowRight />
                    </span>
                  </button>
                  <button onClick={() => scrollTo("work")} className="btn-ghost" style={{ color: "#171717", borderColor: "rgba(23,23,23,0.28)", background: "transparent" }}>
                    View Our Work
                    <span className="btn-arrow">
                      <IconArrowRight />
                    </span>
                  </button>
                </motion.div>

              </div>

              {/* ── RIGHT COLUMN — Device mockups ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.14, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="hero-visual-column"
                style={{ position: "relative" }}
              >
                <HeroDeviceShowcase />
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
            CREDIBILITY STRIP — hero benefits
        ══════════════════════════════════════ */}
        <section style={{ borderBottom: "1px solid rgba(23,23,23,0.10)", background: "var(--light-bg)" }}>
          <div className="container-custom" style={{ padding: "3.25rem 1.25rem" }}>
            <FadeUp className="hero-benefit-panel">
              {HERO_BENEFITS.map((item, i) => (
                <div className="hero-benefit-item" key={item.title}>
                  <div className="hero-benefit-icon">{item.icon}</div>
                  <div>
                    <p className="hero-benefit-title">{item.title}</p>
                    <p className="hero-benefit-desc">{item.desc}</p>
                  </div>
                  {i < HERO_BENEFITS.length - 1 && <span className="hero-benefit-divider" />}
                </div>
              ))}
            </FadeUp>
          </div>
        </section>

        {/* ══════════════════════════════════════
            EDITORIAL STATEMENT
        ══════════════════════════════════════ */}
        <section className="section-pad">
          <div className="container-custom">
            <div className="editorial-grid">
              <FadeUp>
                <p className="eyebrow" style={{ marginBottom: 0 }}>Built differently</p>
              </FadeUp>
              <div style={{ maxWidth: 820 }}>
                <FadeUp>
                  <h2
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "clamp(2rem, 4.4vw, 3.4rem)",
                      fontWeight: 800,
                      lineHeight: 1.12,
                      letterSpacing: "-0.03em",
                      color: "var(--text)",
                    }}
                  >
                    A considered website should make your business feel{" "}
                    <em
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        color: "var(--primary)",
                      }}
                    >
                      established
                    </em>{" "}
                    before the first conversation begins.
                  </h2>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <p
                    style={{
                      marginTop: "1.75rem",
                      maxWidth: 600,
                      fontSize: "1.08rem",
                      lineHeight: 1.8,
                      color: "var(--muted)",
                    }}
                  >
                    Crafted Designs combines clear communication, tailored design and practical ongoing support — so the process stays straightforward and the finished site genuinely represents the people behind the business.
                  </p>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SERVICES
        ══════════════════════════════════════ */}
        <section
          id="services"
          className="section-pad"
          style={{
            background: "#F3F0E9",
            borderTop: "1px solid rgba(23,23,23,0.07)",
          }}
        >
          <div className="container-custom">
            <FadeUp style={{ marginBottom: "3.5rem", maxWidth: 640 }}>
              <p className="eyebrow">Services</p>
              <h2
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--light-text)",
                  lineHeight: 1.1,
                }}
              >
                Everything your business needs to get online — and stay there.
              </h2>
            </FadeUp>

            <div style={{ display: "grid", gap: "1.25rem" }} className="md:grid-cols-3">
              {SERVICES.map((s, i) => {
                const Icon = [IconLayout, IconRefresh, IconHeadset][i];
                return (
                  <FadeUp key={s.title} delay={i * 0.08}>
                    <div className="card-base service-card card-light">
                      <div className="service-icon">
                        <Icon />
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.25rem",
                          color: "var(--light-text)",
                          letterSpacing: "-0.01em",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p style={{ fontSize: "0.97rem", lineHeight: 1.7, color: "var(--light-muted)", margin: 0 }}>
                        {s.desc}
                      </p>
                      <button
                        type="button"
                        onClick={() => scrollTo("contact")}
                        className="service-learn"
                      >
                        Learn more
                        <span className="service-arrow"><IconArrowRight size={14} /></span>
                      </button>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SELECTED WORK
        ══════════════════════════════════════ */}
        <section id="work" className="section-pad">
          <div className="container-custom">
            <FadeUp style={{ marginBottom: "3.5rem" }}>
              <p className="eyebrow">Selected work</p>
              <h2
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: "1.25rem",
                }}
              >
                Real websites,{" "}
                <em
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    color: "var(--primary)",
                  }}
                >
                  built for real businesses.
                </em>
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.78, color: "var(--muted)", maxWidth: 680, margin: 0 }}>
                A selection of websites created to help real businesses present themselves more professionally and make it easier for customers to take the next step.
              </p>
            </FadeUp>

            {/* Project 1 — NQBG Sheds */}
            <FadeUp style={{ marginBottom: "2rem" }}>
              <div className="card-base lg:grid-cols-2" style={{ overflow: "hidden", display: "grid", borderRadius: 24 }}>
                <div style={{ background: "#0a0a0a", position: "relative", minHeight: 320, overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.7rem 1rem", borderBottom: "1px solid var(--border-color)", background: "#111111" }}>
                    <BrowserDots />
                    <div style={{ marginLeft: "0.75rem", flex: 1, borderRadius: 999, background: "var(--panel-alt)", border: "1px solid var(--border-color)", padding: "0.25rem 0.75rem", fontSize: "0.68rem", color: "var(--muted)" }}>
                      www.nqbgsheds.com.au
                    </div>
                  </div>
                  <img
                    src="/sheds-project.png"
                    alt="NQBG Sheds website design"
                    className="img-zoom"
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top", minHeight: 280 }}
                  />
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    {["Construction", "Whitsundays", "Web Design", "Hosting"].map((tag) => (
                      <span key={tag} style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.3rem 0.75rem", borderRadius: 999, border: "1px solid rgba(255,138,0,0.3)", color: "var(--primary)", background: "rgba(255,138,0,0.06)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: "1rem" }}>
                    NQBG Sheds
                  </h3>
                  <p style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "var(--muted)", marginBottom: "2rem" }}>
                    A modern website for a Whitsundays building business, designed to present its services clearly and make it straightforward for customers to get in touch.
                  </p>
                  <a href="https://www.nqbgsheds.com.au" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ width: "fit-content" }}>
                    View Project
                    <span className="btn-arrow"><IconArrowRight /></span>
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Project 2 — NQ Excavations */}
            <FadeUp>
              <div className="card-base lg:grid-cols-2" style={{ overflow: "hidden", display: "grid", borderRadius: 24 }}>
                <div className="p-8 sm:p-10 flex flex-col justify-center order-2 lg:order-1">
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    {["Earthworks", "North QLD", "Web Design", "Refresh"].map((tag) => (
                      <span key={tag} style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.3rem 0.75rem", borderRadius: 999, border: "1px solid rgba(255,138,0,0.3)", color: "var(--primary)", background: "rgba(255,138,0,0.06)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: "1rem" }}>
                    NQ Excavations
                  </h3>
                  <p style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "var(--muted)", marginBottom: "2rem" }}>
                    A clean, hard-working website for a North Queensland earthworks contractor — clear services, strong imagery and an easy way to get in touch.
                  </p>
                  <a href="https://www.nqexcavations.com.au" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ width: "fit-content" }}>
                    View Project
                    <span className="btn-arrow"><IconArrowRight /></span>
                  </a>
                </div>
                <div style={{ background: "#0a0a0a", position: "relative", minHeight: 320, overflow: "hidden" }} className="order-1 lg:order-2">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.7rem 1rem", borderBottom: "1px solid var(--border-color)", background: "#111111" }}>
                    <BrowserDots />
                    <div style={{ marginLeft: "0.75rem", flex: 1, borderRadius: 999, background: "var(--panel-alt)", border: "1px solid var(--border-color)", padding: "0.25rem 0.75rem", fontSize: "0.68rem", color: "var(--muted)" }}>
                      www.nqexcavations.com.au
                    </div>
                  </div>
                  <img
                    src="/excavation-project.png"
                    alt="NQ Excavations website design"
                    className="img-zoom"
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top", minHeight: 280 }}
                  />
                </div>
              </div>
            </FadeUp>
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
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <div className="container-custom">
            <FadeUp style={{ marginBottom: "3.5rem", maxWidth: 600 }}>
              <p className="eyebrow">Process</p>
              <h2
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                }}
              >
                Simple steps, proper results.
              </h2>
            </FadeUp>

            {/* Desktop — horizontal timeline */}
            <div className="process-desktop">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2.5rem" }}>
                {PROCESS_STEPS.map((step, i) => (
                  <FadeUp key={step.num} delay={i * 0.1}>
                    <div>
                      <div className="proc-num">{step.num}</div>
                      <div
                        className={`proc-track${
                          i < PROCESS_STEPS.length - 1 ? " proc-track--link" : ""
                        }`}
                      >
                        <span className="proc-dot" />
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          color: "var(--text)",
                          marginBottom: "0.6rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
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

            {/* Mobile — vertical timeline */}
            <div className="process-mobile">
              {PROCESS_STEPS.map((step, i) => (
                <FadeUp key={step.num} delay={i * 0.08}>
                  <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.25rem" }}>
                    <div className="proc-rail">
                      <span className="proc-badge">{step.num}</span>
                      {i < PROCESS_STEPS.length - 1 && <span className="proc-line" />}
                    </div>
                    <div style={{ paddingBottom: i < PROCESS_STEPS.length - 1 ? "3rem" : 0 }}>
                      <h3
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          color: "var(--text)",
                          marginTop: "0.5rem",
                          marginBottom: "0.5rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            WHY CRAFTED DESIGNS
        ══════════════════════════════════════ */}
        <section className="section-pad" style={{ background: "var(--light-bg)" }}>
          <div className="container-custom">
            <FadeUp style={{ marginBottom: "3.5rem", maxWidth: 620 }}>
              <p className="eyebrow">Why work with us</p>
              <h2
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--light-text)",
                  lineHeight: 1.1,
                  marginBottom: "1.4rem",
                }}
              >
                Agency-quality design. Personal service.
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--light-muted)", margin: 0 }}>
                You deal directly with the person designing and building your website — from the first conversation through to launch and ongoing support.
              </p>
            </FadeUp>

            <div className="feature-grid">
              {WHY_FEATURES.map((item, i) => {
                const Icon = [IconChat, IconTag, IconBook, IconHeadset][i];
                return (
                  <FadeUp key={item.title} delay={i * 0.08}>
                    <div>
                      <div className="feature-mark">
                        <Icon />
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.15rem",
                          color: "var(--light-text)",
                          marginBottom: "0.5rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ fontSize: "0.97rem", color: "var(--light-muted)", lineHeight: 1.7, margin: 0, maxWidth: 420 }}>
                        {item.desc}
                      </p>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            ABOUT — LIGHT SECTION
        ══════════════════════════════════════ */}
        <section id="about" style={{ background: "var(--light-bg)", padding: "clamp(5rem, 9vw, 7rem) 0" }}>
          <div className="container-custom">
            <div style={{ display: "grid", gap: "3rem", alignItems: "start" }} className="lg:grid-cols-2">
              <FadeUp>
                <p className="eyebrow">About</p>
                <h2
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "var(--light-text)",
                    lineHeight: 1.12,
                  }}
                >
                  A more personal way to build your website.
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p style={{ fontSize: "1.08rem", lineHeight: 1.8, color: "var(--light-muted)", marginTop: 0, marginBottom: "1.25rem" }}>
                  Crafted Designs was created to give business owners a straightforward alternative to large agencies and generic website templates.
                </p>
                <p style={{ fontSize: "1.08rem", lineHeight: 1.8, color: "var(--light-muted)", marginTop: 0, marginBottom: "1.25rem" }}>
                  You work directly with one person throughout the project, from the first conversation and initial design through to launch and ongoing support.
                </p>
                <p style={{ fontSize: "1.08rem", lineHeight: 1.8, color: "var(--light-muted)", marginTop: 0, marginBottom: "2.25rem" }}>
                  Based in the Whitsundays, I work with businesses across Australia and keep every stage clear, practical and easy to understand.
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
                <div style={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
                  <h2
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "#090909",
                      lineHeight: 1.1,
                      marginBottom: "1.25rem",
                    }}
                  >
                    Ready for a website that represents your business properly?
                  </h2>
                  <p
                    style={{
                      fontSize: "1.08rem",
                      color: "rgba(9,9,9,0.72)",
                      marginBottom: "2.5rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Tell me about your business, what you need and where your current website may be falling short.
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
                        background: "#090909",
                        color: "var(--text)",
                        borderRadius: 14,
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
                      Start Your Website
                    </button>
                    <a
                      href="tel:0421448692"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        height: 52,
                        padding: "0 28px",
                        background: "rgba(9,9,9,0.10)",
                        color: "#090909",
                        borderRadius: 14,
                        border: "1px solid rgba(9,9,9,0.22)",
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
                  <p style={{ fontSize: "0.83rem", color: "rgba(9,9,9,0.48)", marginTop: "1.5rem" }}>
                    Based in the Whitsundays. Available to businesses across Australia.
                  </p>
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
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <div className="container-custom">
            <div style={{ display: "grid", gap: "3rem", alignItems: "start" }} className="lg:grid-cols-2">
              <FadeUp>
                <p className="eyebrow">Contact</p>
                <h2
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "var(--text)",
                    marginBottom: "1rem",
                  }}
                >
                  Let's talk about your website.
                </h2>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "var(--muted)",
                    marginBottom: "2.5rem",
                  }}
                >
                  Send through a few details about your business and what you would like your website to achieve. I'll get back to you personally to discuss the next step.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { label: "Email", val: "info@crafteddesign.au", href: "mailto:info@crafteddesign.au" },
                    { label: "Phone", val: "0421 448 692", href: "tel:0421448692" },
                    { label: "Location", val: "Whitsundays based, Australia-wide.", href: null },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                        padding: "1rem 1.25rem",
                        background: "var(--elevated)",
                        border: "1px solid var(--border-color)",
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
                      {item.href ? (
                        <a href={item.href} style={{ color: "var(--muted)", fontSize: "0.95rem", textDecoration: "none" }}>
                          {item.val}
                        </a>
                      ) : (
                        <span style={{ color: "var(--muted)", fontSize: "0.95rem" }}>{item.val}</span>
                      )}
                    </div>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setFormStatus("submitting");
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    try {
                      const res = await fetch("https://formspree.io/f/xaqgkjpr", {
                        method: "POST",
                        body: data,
                        headers: { Accept: "application/json" },
                      });
                      if (res.ok) {
                        setFormStatus("success");
                        form.reset();
                      } else {
                        setFormStatus("error");
                      }
                    } catch {
                      setFormStatus("error");
                    }
                  }}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border-color)",
                    borderRadius: 22,
                    padding: "clamp(1.75rem, 4vw, 2.5rem)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name", autoComplete: "name" },
                    { id: "email", label: "Email", type: "email", placeholder: "Your email address", autoComplete: "email" },
                    { id: "phone", label: "Phone", type: "tel", placeholder: "Your phone number", autoComplete: "tel" },
                  ].map((f) => (
                    <label key={f.id} htmlFor={f.id} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <span
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          color: "var(--text)",
                        }}
                      >
                        {f.label}
                      </span>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        autoComplete={f.autoComplete}
                        style={{
                          background: "var(--panel-alt)",
                          border: "1px solid var(--border-color)",
                          borderRadius: 12,
                          padding: "0.875rem 1rem",
                          color: "var(--text)",
                          fontSize: "0.95rem",
                          fontFamily: "'Nunito Sans', sans-serif",
                          outline: "none",
                          transition: "border-color 0.2s",
                          minHeight: 48,
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                      />
                    </label>
                  ))}
                  <label htmlFor="message" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <span
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: "var(--text)",
                      }}
                    >
                      Message
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your business and what you need..."
                      rows={4}
                      style={{
                        background: "var(--panel-alt)",
                        border: "1px solid var(--border-color)",
                        borderRadius: 12,
                        padding: "0.875rem 1rem",
                        color: "var(--text)",
                        fontSize: "0.95rem",
                        fontFamily: "'Nunito Sans', sans-serif",
                        outline: "none",
                        resize: "vertical",
                        transition: "border-color 0.2s",
                        minHeight: 120,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                    />
                  </label>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={formStatus === "submitting"}
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      marginTop: "0.5rem",
                      opacity: formStatus === "submitting" ? 0.7 : 1,
                      cursor: formStatus === "submitting" ? "not-allowed" : "pointer",
                    }}
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                  {formStatus === "success" && (
                    <p style={{ color: "var(--primary)", fontSize: "0.9rem", fontWeight: 600, textAlign: "center", margin: 0 }}>
                      Thanks — your message has been sent. I'll be in touch soon.
                    </p>
                  )}
                  {formStatus === "error" && (
                    <p style={{ color: "#e05c4a", fontSize: "0.9rem", fontWeight: 600, textAlign: "center", margin: 0 }}>
                      Something went wrong sending your message. Please try again or email info@crafteddesign.au directly.
                    </p>
                  )}
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
                aria-label="Crafted Designs — scroll to top"
              >
                <img
                  src="/logo-mark.png"
                  alt="Crafted Designs"
                  style={{ height: 40, width: "auto", display: "block" }}
                />
              </button>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  maxWidth: 280,
                }}
              >
                Custom websites for businesses that want to look professional, communicate clearly and generate more enquiries.
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  maxWidth: 280,
                  marginTop: "0.5rem",
                  opacity: 0.7,
                }}
              >
                Whitsundays based. Working Australia-wide.
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
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
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
                  "info@crafteddesign.au",
                  "0421 448 692",
                  "Whitsundays based, Australia-wide",
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

      {/* Back to top */}
      {showBackToTop && !mobileMenuOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => scrollTo("top")}
          className="back-to-top"
          aria-label="Back to top"
        >
          <span style={{ display: "flex", transform: "rotate(-90deg)" }}>
            <IconArrowRight size={20} />
          </span>
        </motion.button>
      )}
    </div>
  );
}
