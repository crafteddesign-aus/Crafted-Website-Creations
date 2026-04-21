export interface Palette {
  bg: string;
  panel: string;
  border: string;
  borderCard: string;
  text: string;
  muted: string;
  primary: string;
  heroBg: string;
  pillBg: string;
  pillBorder: string;
  innerPanel: string;
  innerPanelBorder: string;
  statBg: string;
  statBorder: string;
  mockBodyBg: string;
  skeletonBg: string;
}

export function HeroTemplate({ p }: { p: Palette }) {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif", background: p.bg, color: p.text, minHeight: "100vh", overflow: "hidden" }}>

      {/* NAV */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: p.bg + "dd",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${p.border}`,
        padding: "0 2rem",
      }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", minHeight: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.55rem", letterSpacing: "0.08em", textTransform: "uppercase", color: p.text, fontWeight: 700 }}>
            Craft<span style={{ color: p.primary }}>ed</span> Designs
          </span>
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {["Services", "Process", "Work", "Pricing"].map(l => (
              <span key={l} style={{ color: p.muted, fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }}>{l}</span>
            ))}
            <span style={{
              background: p.primary, color: "#0D0D0D", borderRadius: 999,
              padding: "0.65rem 1.35rem", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer",
              boxShadow: `0 8px 24px rgba(255,140,0,0.22)`,
            }}>
              Get a Quote
            </span>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        position: "relative", overflow: "hidden",
        background: p.heroBg,
        padding: "7rem 2rem 5.5rem",
      }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "3rem", alignItems: "center" }}>

          {/* LEFT */}
          <div style={{ maxWidth: 760 }}>
            <p style={{ color: p.primary, textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "0.78rem", fontWeight: 700, marginBottom: "1.1rem" }}>
              Boutique web design for local business
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 7vw, 5.8rem)",
              lineHeight: 1.02,
              letterSpacing: "0.01em",
              fontWeight: 700,
              color: p.text,
              margin: "0 0 1.2rem",
            }}>
              Digital presence,{" "}
              <span style={{ color: p.primary, textShadow: `0 0 28px rgba(255,140,0,0.28)` }}>crafted</span>
              {" "}with intent.
            </h1>
            <p style={{ color: p.muted, fontSize: "1.12rem", lineHeight: 1.8, maxWidth: 660, margin: "0 0 2rem" }}>
              Crafted Designs builds refined websites for trades, service businesses, and owner-operated brands that want to look polished, professional, and properly represented online.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <span style={{
                background: p.primary, color: "#0D0D0D", borderRadius: 999,
                padding: "0.9rem 1.8rem", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer",
                boxShadow: `0 10px 28px rgba(255,140,0,0.28)`,
              }}>Request a Quote</span>
              <span style={{
                background: "transparent", color: p.text, borderRadius: 999,
                border: `1px solid ${p.border}`,
                padding: "0.9rem 1.8rem", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer",
              }}>View My Work</span>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {["Tailored one-on-one service", "Premium dark editorial style", "Built for trades and local business"].map(t => (
                <span key={t} style={{
                  border: `1px solid ${p.pillBorder}`,
                  background: p.pillBg,
                  color: p.muted,
                  padding: "0.65rem 1rem",
                  borderRadius: 999,
                  fontSize: "0.88rem",
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — hero card */}
          <div style={{
            borderRadius: 28, padding: "1.5rem",
            background: p.panel,
            border: `1px solid ${p.borderCard}`,
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          }}>
            {/* Panel 1 */}
            <div style={{ borderRadius: 22, padding: "1.25rem", marginBottom: "1rem", background: p.innerPanel, border: `1px solid ${p.innerPanelBorder}` }}>
              <span style={{ display: "block", color: p.primary, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.65rem" }}>
                Featured concept
              </span>
              <div style={{ borderRadius: 18, overflow: "hidden", border: `1px solid ${p.border}`, background: "#101010" }}>
                <div style={{ display: "flex", gap: "0.4rem", padding: "0.75rem 1rem", borderBottom: `1px solid ${p.border}`, background: "#171717" }}>
                  {[0,1,2].map(i => <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: "#404040", display: "block" }} />)}
                </div>
                <div style={{ padding: "1.5rem", minHeight: 200, background: p.mockBodyBg }}>
                  <span style={{ display: "inline-block", border: `1px solid rgba(255,140,0,0.25)`, color: p.primary, padding: "0.4rem 0.75rem", borderRadius: 999, fontSize: "0.78rem", marginBottom: "0.9rem" }}>
                    Crafted project preview
                  </span>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: p.text, marginBottom: "0.6rem" }}>Crafted for clarity</h4>
                  <p style={{ color: p.muted, fontSize: "0.88rem" }}>Thoughtful layouts, strong typography, sharp contrast, and clean enquiry pathways.</p>
                  <div style={{ display: "grid", gap: "0.55rem", marginTop: "1rem" }}>
                    {[88, 72, 58].map((w, i) => <span key={i} style={{ display: "block", height: 9, borderRadius: 999, background: p.skeletonBg, width: `${w}%` }} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2 */}
            <div style={{ borderRadius: 22, padding: "1.25rem", background: p.innerPanel, border: `1px solid ${p.innerPanelBorder}` }}>
              <span style={{ display: "block", color: p.primary, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.65rem" }}>
                Studio approach
              </span>
              <p style={{ color: p.text, fontSize: "0.98rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                A simple process, premium presentation, and a website built around the way your business actually works.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.75rem" }}>
                {[
                  { stat: "Premium", text: "Dark, polished visual identity" },
                  { stat: "Tailored", text: "Built around your actual business" },
                  { stat: "Direct", text: "One point of contact throughout" },
                ].map(s => (
                  <div key={s.stat} style={{ borderRadius: 16, padding: "0.9rem", background: p.statBg, border: `1px solid ${p.statBorder}` }}>
                    <strong style={{ display: "block", color: p.text, fontSize: "1.2rem", marginBottom: "0.25rem" }}>{s.stat}</strong>
                    <p style={{ color: p.muted, fontSize: "0.75rem", lineHeight: 1.4 }}>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
