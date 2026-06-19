export default function About() {
  const stats = [
    { value: "8", unit: "ans", label: "d'expérience" },
    { value: "5+", unit: "", label: "frameworks testés" },
    { value: "4", unit: "", label: "secteurs couverts" },
    { value: "C2", unit: "", label: "Français courant" },
  ];

  return (
    <section id="about" className="section-pad" style={{ padding: "100px 40px", maxWidth: "960px", margin: "0 auto" }}>
      <div className="gold-divider" style={{ marginBottom: "60px" }} />
      <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Profil</p>

      <div className="grid-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "24px" }}>
            Qualité, précision,{" "}
            <span style={{ color: "var(--accent-gold)" }}>impact.</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.975rem", lineHeight: 1.8, marginBottom: "16px" }}>
            Ingénieur QA Senior avec 8 ans d&apos;expérience en automatisation des tests et validation qualité.
            J&apos;interviens sur des applications web et mobiles complexes en environnement Agile/Scrum.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.975rem", lineHeight: 1.8 }}>
            Maîtrise de Playwright, Cucumber (BDD/Gherkin), WebdriverIO et Karate, avec expertise CI/CD GitLab
            et rapports Allure. Veille active sur les pratiques IA / MCP appliquées au test.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {stats.map((s) => (
            <div key={s.label} className="cv-card" style={{ padding: "24px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 700, color: "var(--accent-gold)", lineHeight: 1, marginBottom: "4px" }}>
                {s.value}{s.unit && <span style={{ fontSize: "1rem", marginLeft: "4px" }}>{s.unit}</span>}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "48px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {["Agile / Scrum", "BDD", "TDD", "E2E Testing", "CI/CD", "MCP / IA"].map((m) => (
          <span key={m} className="skill-tag">{m}</span>
        ))}
      </div>
    </section>
  );
}
