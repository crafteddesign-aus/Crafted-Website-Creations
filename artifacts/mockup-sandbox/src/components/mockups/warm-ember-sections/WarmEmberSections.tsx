const E = {
  bg: "#100D09",
  bgSoft: "#140F0B",
  panel: "#1A1510",
  panelInner: "#120E0A",
  border: "rgba(110,80,40,0.28)",
  borderSoft: "rgba(110,80,40,0.15)",
  text: "#F0EBE3",
  muted: "#BDA98A",
  accent: "#FF8C00",
  accentDim: "rgba(255,140,0,0.12)",
  accentGlow: "rgba(255,140,0,0.18)",
};

const fonts = `
  font-family: 'Nunito Sans', sans-serif;
`;
const serifFonts = `
  font-family: 'Cormorant Garamond', serif;
`;

function Eyebrow({ children }: { children: string }) {
  return (
    <p style={{ color: E.accent, textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "0.8rem", fontWeight: 700, marginBottom: 10, fontFamily: "'Nunito Sans', sans-serif" }}>
      {children}
    </p>
  );
}

function H2({ children }: { children: string }) {
  return (
    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: E.text, lineHeight: 1.05, marginBottom: 14 }}>
      {children}
    </h2>
  );
}

function Copy({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ color: E.muted, fontSize: "1.05rem", lineHeight: 1.75, fontFamily: "'Nunito Sans', sans-serif", ...style }}>
      {children}
    </p>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: E.panel,
      border: `1px solid ${E.border}`,
      borderRadius: 18,
      padding: "2rem",
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function WarmEmberSections() {
  return (
    <div style={{
      background: E.bg,
      color: E.text,
      fontFamily: "'Nunito Sans', sans-serif",
      minHeight: "100vh",
      fontSize: 15,
    }}>

      {/* ── SERVICES ── */}
      <section style={{ background: `linear-gradient(180deg, ${E.bgSoft} 0%, ${E.bg} 100%)`, padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ maxWidth: 680, marginBottom: "3rem" }}>
            <Eyebrow>Services</Eyebrow>
            <H2>What I offer</H2>
            <Copy>Simple, effective websites built around your business needs — designed to present your work properly and make it easy for customers to get in touch.</Copy>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[
              {
                title: "Website Design",
                desc: "Custom landing pages and small business websites with a clean, premium look.",
                bullets: ["Single-page and brochure-style websites", "Tailored layout and copy structure", "Modern mobile-friendly design"],
              },
              {
                title: "Business Content Setup",
                desc: "Clear presentation of services, galleries, reviews, and business information.",
                bullets: ["Service sections and visual hierarchy", "Image and gallery presentation", "Google reviews integration"],
              },
              {
                title: "Launch & Support",
                desc: "Help with the practical side of getting your site live and keeping it updated.",
                bullets: ["Contact forms and enquiry setup", "Basic updates and refinements", "Guidance on domains and launch"],
              },
            ].map((s, i) => (
              <Card key={i}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: E.text, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: E.muted, fontSize: "0.95rem", marginBottom: "1.2rem", lineHeight: 1.65 }}>{s.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, color: E.muted, fontSize: "0.875rem" }}>
                      <span style={{ color: E.accent }}>•</span>{b}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <Eyebrow>No templates. No shortcuts.</Eyebrow>
            <H2>Who We Work With</H2>
            <Copy style={{ maxWidth: 680, margin: "0 auto" }}>We build websites for businesses that are ready to grow, stand out, and win more work.</Copy>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[
              { title: "Service-Based Businesses", desc: "Tradies, contractors, and local services looking for a clean, professional online presence." },
              { title: "Growing Brands", desc: "Businesses ready to move past DIY websites and step into something more polished." },
              { title: "Local Companies", desc: "Owner-operated businesses that want to be found, trusted, and chosen online." },
            ].map((c, i) => (
              <Card key={i}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 700, color: E.text, marginBottom: 10 }}>{c.title}</h3>
                <Copy>{c.desc}</Copy>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: `linear-gradient(180deg, ${E.bgSoft} 0%, ${E.bg} 100%)`, padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ maxWidth: 680, marginBottom: "3rem" }}>
            <Eyebrow>Process</Eyebrow>
            <H2>How it works</H2>
            <Copy>The goal is to keep the process easy: gather what is needed, build the site properly, refine it together, and launch with confidence.</Copy>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }}>
            {[
              { title: "Initial chat", text: "You tell me about your business, what you offer, and the type of website you want." },
              { title: "Content & setup", text: "You send through your photos, services, contact details, and anything else the site needs." },
              { title: "Build phase", text: "I design and build a clean, tailored layout around your business and branding." },
              { title: "Review & refine", text: "You review the site, request any changes, and approve the final direction." },
              { title: "Launch", text: "The site goes live and begins working for your business." },
            ].map((step, i) => (
              <Card key={i} style={{ padding: "1.5rem" }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: E.accentDim,
                  border: `1px solid rgba(255,140,0,0.28)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: E.accent, fontWeight: 700, fontSize: "0.95rem",
                  marginBottom: "1.1rem",
                }}>
                  {i + 1}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 700, color: E.text, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ color: E.muted, fontSize: "0.84rem", lineHeight: 1.6 }}>{step.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ padding: "4rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{
            background: `linear-gradient(180deg, ${E.bgSoft} 0%, ${E.bg} 100%)`,
            border: `1px solid ${E.border}`,
            borderRadius: 24,
            padding: "3rem 4rem",
            maxWidth: 760, margin: "0 auto",
            textAlign: "center",
            boxShadow: `0 20px 60px rgba(0,0,0,0.4)`,
          }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", color: E.text, lineHeight: 1.55, marginBottom: 20 }}>
              "Super easy to work with and nailed exactly what I was after. The site looks clean, professional, and actually represents the business properly."
            </p>
            <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: E.muted }}>Client testimonial placeholder</p>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ background: `linear-gradient(180deg, ${E.bg} 0%, ${E.bgSoft} 100%)`, padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <Eyebrow>Pricing</Eyebrow>
            <H2>Simple pricing guidance</H2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: 760, margin: "0 auto" }}>
            <Card>
              <p style={{ color: E.muted, fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>Landing pages</p>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 700, color: E.text, marginBottom: 16 }}>From $500+</div>
              <Copy style={{ marginBottom: "1.5rem" }}>One-page sites with clear messaging, visuals, and contact details.</Copy>
              <button style={{
                width: "100%", borderRadius: 999, border: `1px solid ${E.border}`,
                background: "transparent", color: E.text, padding: "0.75rem",
                fontWeight: 700, cursor: "pointer", fontSize: "0.95rem",
              }}>Get a Quote</button>
            </Card>
            <Card>
              <p style={{ color: E.muted, fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>Small business websites</p>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 700, color: E.text, marginBottom: 16 }}>Quoted to suit</div>
              <Copy style={{ marginBottom: "1.5rem" }}>Pricing depends on content, pages, galleries, reviews, and forms.</Copy>
              <button style={{
                width: "100%", borderRadius: 999, border: "none",
                background: E.accent, color: "#100D09", padding: "0.75rem",
                fontWeight: 700, cursor: "pointer", fontSize: "0.95rem",
              }}>Discuss Your Needs</button>
            </Card>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: "2rem" }}>
            <Card style={{ borderRadius: 24, padding: "2.5rem" }}>
              <Eyebrow>Contact</Eyebrow>
              <H2>Let's build your website</H2>
              <Copy style={{ marginBottom: "2rem" }}>Send through a few details about your business and what you're looking for, and I'll get back to you with the next steps.</Copy>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Name: Placeholder", "Email: placeholder@example.com", "Phone: 0400 000 000"].map((info, i) => (
                  <div key={i} style={{
                    padding: "0.85rem 1rem",
                    border: `1px solid ${E.borderSoft}`,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.02)",
                    color: E.muted,
                    fontSize: "0.9rem",
                  }}>{info}</div>
                ))}
              </div>
            </Card>
            <Card style={{ borderRadius: 24, padding: "2.5rem", display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                { label: "Name", placeholder: "Your name", type: "text" },
                { label: "Email", placeholder: "Your email address", type: "email" },
                { label: "Phone", placeholder: "Your phone number", type: "tel" },
              ].map((f, i) => (
                <label key={i} style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: "0.875rem", fontWeight: 700, color: E.text }}>
                  {f.label}
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    readOnly
                    style={{
                      background: E.panelInner,
                      border: `1px solid ${E.border}`,
                      borderRadius: 14,
                      padding: "0.75rem 1rem",
                      color: E.muted,
                      fontSize: "0.9rem",
                      fontWeight: 400,
                    }}
                  />
                </label>
              ))}
              <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: "0.875rem", fontWeight: 700, color: E.text }}>
                Message
                <textarea
                  placeholder="Tell me about your business and what you need..."
                  readOnly
                  style={{
                    background: E.panelInner,
                    border: `1px solid ${E.border}`,
                    borderRadius: 14,
                    padding: "0.75rem 1rem",
                    color: E.muted,
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    minHeight: 100,
                    resize: "none",
                  }}
                />
              </label>
              <button style={{
                borderRadius: 999,
                background: E.accent,
                color: "#100D09",
                padding: "0.9rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                fontSize: "0.95rem",
                boxShadow: `0 8px 24px rgba(255,140,0,0.25)`,
              }}>Request a Quote</button>
            </Card>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${E.border}`, padding: "2rem 0", background: E.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 700, color: E.text, marginBottom: 4 }}>Crafted Designs</div>
            <p style={{ color: E.muted, fontSize: "0.85rem" }}>Custom websites for local business.</p>
          </div>
          <a href="#top" style={{ color: E.muted, fontSize: "0.9rem", textDecoration: "none" }}>Back to top</a>
        </div>
      </footer>

    </div>
  );
}
