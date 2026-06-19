const education = [
  { degree: "Diplôme national d'Ingénieur en Génie Informatique", school: "École Polytechnique Centrale, Tunis", period: "2014 – 2017" },
  { degree: "Licence Fondamentale en Informatique de Gestion", school: "ISG Gabès, Tunisie", period: "2011 – 2014" },
];

const languages = [
  { lang: "Français", level: "C2", label: "Courant", pct: 98 },
  { lang: "Anglais", level: "B2", label: "Professionnel", pct: 72 },
  { lang: "Arabe", level: "C2", label: "Langue maternelle", pct: 100 },
];

export default function Education() {
  return (
    <section id="education" className="section-pad" style={{ padding: "100px 40px", background: "var(--bg-surface)" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div className="gold-divider" style={{ marginBottom: "60px" }} />
        <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Formation &amp; Langues</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "52px" }}>
          Académique
        </h2>

        <div className="grid-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>
          {/* Diplômes */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "24px" }}>Diplômes</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {education.map((e) => (
                <div key={e.degree} className="cv-card" style={{ padding: "20px 24px" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--accent-gold)", fontWeight: 600, letterSpacing: "0.06em", marginBottom: "8px" }}>{e.period}</div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9rem", color: "var(--text-primary)", marginBottom: "6px", lineHeight: 1.4 }}>{e.degree}</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{e.school}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Langues */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "24px" }}>Langues</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {languages.map((l) => (
                <div key={l.lang}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                    <div>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)" }}>{l.lang}</span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginLeft: "8px" }}>{l.label}</span>
                    </div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-gold)", background: "var(--accent-gold-dim)", padding: "2px 8px", borderRadius: "4px" }}>{l.level}</span>
                  </div>
                  <div style={{ height: "3px", background: "var(--border)", borderRadius: "2px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${l.pct}%`, background: "linear-gradient(90deg, var(--accent-gold), #f0d080)", borderRadius: "2px" }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "36px" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px" }}>Points forts</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Veille IA / MCP", "Autonomie", "Force de proposition", "Esprit qualité"].map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
