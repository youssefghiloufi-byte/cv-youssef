const skillGroups = [
  { category: "Test Automation", icon: "⚡", skills: ["Playwright", "WebdriverIO", "Selenium", "RobotFramework", "Karate"] },
  { category: "BDD / Frameworks", icon: "🧩", skills: ["Cucumber", "Gherkin", "Mocha.js"] },
  { category: "Langages", icon: "💻", skills: ["TypeScript", "JavaScript", "Java", "Python"] },
  { category: "CI/CD & DevOps", icon: "🔁", skills: ["GitLab CI/CD", "GitHub Actions", "Docker"] },
  { category: "Reporting", icon: "📊", skills: ["Allure", "JUnit", "HTML Reporter"] },
  { category: "Test Management", icon: "📋", skills: ["Jira", "Xray", "Confluence", "Zeplin", "Figma"] },
  { category: "Types de tests", icon: "🔍", skills: ["E2E", "API REST", "TNR", "Mobile Android / iOS", "Régression"] },
  { category: "MCP / IA", icon: "🤖", skills: ["Model Context Protocol", "Claude API", "Playwright MCP"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ padding: "100px 40px", background: "var(--bg-surface)" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div className="gold-divider" style={{ marginBottom: "60px" }} />
        <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Compétences techniques</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "52px" }}>
          Stack &amp; expertise
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
          {skillGroups.map((group) => (
            <div key={group.category} className="cv-card" style={{ padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span style={{ fontSize: "1.2rem" }}>{group.icon}</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.85rem", color: "var(--text-primary)" }}>
                  {group.category}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
