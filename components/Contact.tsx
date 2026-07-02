const contacts = [
  { icon: "✉", label: "Email", value: "youssefghiloufi@gmail.com", href: "mailto:youssefghiloufi@gmail.com" },
  { icon: "☎", label: "Téléphone", value: "07 63 87 08 87", href: "tel:+33763870887" },
  { icon: "⌂", label: "Localisation", value: "Île-de-France, France", href: null },
  { icon: "in", label: "LinkedIn", value: "youssef-ghiloufi", href: "https://www.linkedin.com/in/youssef-ghiloufi-131aa7114/" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ padding: "100px 40px", maxWidth: "960px", margin: "0 auto" }}>
      <div className="gold-divider" style={{ marginBottom: "60px" }} />
      <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Contact</p>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "16px" }}>
        Travaillons ensemble
      </h2>
      <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "52px", maxWidth: "480px" }}>
        Disponible pour des missions en Île-de-France ou en remote. N&apos;hésitez pas à me contacter pour discuter de votre projet.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px", marginBottom: "64px" }}>
        {contacts.map((c) => {
          const inner = (
            <div className="cv-card" style={{ padding: "20px 24px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", marginBottom: "12px", color: "var(--accent-gold)" }}>{c.icon}</div>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "4px" }}>{c.label}</p>
              <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-primary)", wordBreak: "break-all" }}>{c.value}</p>
            </div>
          );
          return c.href ? (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              {inner}
            </a>
          ) : (
            <div key={c.label}>{inner}</div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ paddingTop: "40px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--accent-gold)", fontSize: "1.1rem" }}>Youssef Ghiloufi</span>
        <span style={{ fontSize: "0.78rem", color: "var(--text-subtle)" }}>Ingénieur QA Senior — Automatisation des Tests</span>
        <span style={{ fontSize: "0.75rem", color: "var(--text-subtle)" }}>© {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
