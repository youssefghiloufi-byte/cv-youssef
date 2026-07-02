const experiences = [
  {
    title: "Ingénieur QA — Test Auto & Validation",
    company: "Sully Group",
    period: "Mars 2026 – Juin 2026",
    location: "Île-de-France, France",
    context: "POC d'automatisation de tests E2E — Playwright, Cucumber (BDD) & CI/CD. Développement d'un framework de tests sur des parcours web réels avec approche BDD et intégration IA via MCP.",
    missions: [
      "Développement d'un framework de tests E2E en Playwright / TypeScript sur des parcours web réels",
      "Mise en place d'une approche BDD avec Cucumber.js et scénarios Gherkin lisibles par les non-techniciens",
      "Intégration du reporting Allure (étapes, captures, historique des exécutions)",
      "Automatisation de la chaîne CI/CD GitHub Actions avec publication du rapport sur GitHub Pages",
      "Intégration de l'IA via le protocole MCP pour le pilotage navigateur et l'analyse des rapports",
    ],
    tools: ["Playwright", "TypeScript", "Cucumber", "Gherkin", "GitHub Actions", "Allure", "MCP / IA"],
  },
  {
    title: "Senior Ingénieur QA — Test Auto & Validation",
    company: "Conseil national de l'Ordre des médecins (CNOM)",
    period: "Avr. 2025 – Avr. 2026",
    location: "Paris 17, France",
    context: "Suite logicielle pour professionnels et étudiants en médecine : inscriptions, remplacements, gardes, entraides et parcours des docteurs juniors.",
    missions: [
      "Conception, développement et maintenance des tests automatisés",
      "Scénarios Cucumber / WebdriverIO avec focus qualité et maintenabilité",
      "Intégration CI/CD GitLab avec génération de rapports Allure",
      "Tests E2E couvrant les interactions entre application étudiante et gestionnaires",
      "Méthodologie Agile (sprints 3 semaines) — suivi JIRA",
    ],
    tools: ["Cucumber", "WebdriverIO", "GitLab CI/CD", "Allure", "JIRA", "TypeScript", "Scrum"],
  },
  {
    title: "Senior Ingénieur QA & Automatisation",
    company: "RTE — Réseau de Transport d'Électricité",
    period: "Jan. 2024 – Avr. 2025",
    location: "Île-de-France, France",
    context: "Projet SEA : plateforme de vérification de la stabilité du réseau électrique en temps réel, anticipation des contraintes N-1 et gestion des aléas météorologiques.",
    missions: [
      "Préparation du plan de test et rédaction des rapports / PV de recette",
      "Rédaction des cas de tests et qualification des anomalies (JIRA/Xray)",
      "Exécution, automatisation des TNR et tests E2E",
    ],
    tools: ["Karate", "Cucumber", "Gherkin", "Playwright", "JavaScript", "TypeScript", "JIRA", "Xray", "Confluence", "Scrum"],
  },
  {
    title: "Ingénieur QA & Automatisation des Tests",
    company: "Kalisoft",
    period: "Oct. 2022 – Mars 2024",
    location: "Montpellier, France",
    context: "Mission FDJ : application front compte (parcours signup/signin) et suivi de tracking des développeurs front.",
    missions: [
      "Participation à la stratégie de test et rédaction des cas de tests",
      "Tests des applications mobiles Android et iOS",
      "Automatisation des TNR et maintenance des tests automatisés",
    ],
    tools: ["RobotFramework", "JIRA", "Confluence", "Zeplin", "Figma", "SQL", "Scrum"],
  },
  {
    title: "Ingénieur QA & Automatisation des Tests",
    company: "Target Energy Solutions",
    period: "Jan. 2018 – Sept. 2022",
    location: "Tunis, Tunisie",
    context: "Projets variés : solution pétrolière Pulse (Oman), application CSR Web & Mobile, POC automatisation UI, projet Configurateur (gestion des accès).",
    missions: [
      "Rédaction des cas de tests et suivi des anomalies (JIRA)",
      "Exécution et automatisation des TNR, génération de rapports TSR",
      "Préparation de la structure de projets d'automatisation",
      "Envoi automatique de rapports via Slack et email",
    ],
    tools: ["Selenium", "Mocha.js", "JavaScript", "Cucumber", "JIRA", "Confluence", "Postman", "Scrum"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ padding: "100px 40px", maxWidth: "960px", margin: "0 auto" }}>
      <div className="gold-divider" style={{ marginBottom: "60px" }} />
      <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Expériences professionnelles</p>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "64px" }}>
        Parcours
      </h2>

      <div style={{ position: "relative", paddingLeft: "32px" }}>
        {/* Timeline line */}
        <div style={{ position: "absolute", left: 0, top: "8px", bottom: 0, width: "1px", background: "linear-gradient(to bottom, var(--accent-gold), var(--accent-gold-dim) 80%, transparent)" }} />

        {experiences.map((exp, i) => (
          <div key={i} style={{ position: "relative", marginBottom: i < experiences.length - 1 ? "56px" : 0 }}>
            {/* Dot */}
            <div className="timeline-dot" style={{ position: "absolute", left: "-36px", top: "4px" }} />

            {/* Header */}
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                  {exp.title}
                </h3>
                <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: 500, whiteSpace: "nowrap", background: "var(--accent-gold-dim)", padding: "3px 10px", borderRadius: "4px" }}>
                  {exp.period}
                </span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--accent-gold)", fontWeight: 600, marginBottom: "2px" }}>{exp.company}</p>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{exp.location}</p>
            </div>

            <div className="cv-card" style={{ padding: "20px 24px" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic", marginBottom: "16px", lineHeight: 1.6, borderLeft: "2px solid var(--accent-gold-mid)", paddingLeft: "12px" }}>
                {exp.context}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {exp.missions.map((m, j) => (
                  <li key={j} style={{ fontSize: "0.875rem", color: "var(--text-muted)", paddingLeft: "16px", position: "relative", lineHeight: 1.6 }}>
                    <span style={{ position: "absolute", left: 0, top: "8px", width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent-gold)" }} />
                    {m}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {exp.tools.map((t) => (
                  <span key={t} style={{ fontSize: "0.72rem", padding: "2px 8px", background: "var(--bg-primary)", border: "1px solid var(--text-subtle)", borderRadius: "4px", color: "var(--text-muted)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
