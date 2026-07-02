"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Profil", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expériences", href: "#experience" },
  { label: "Formation", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 40px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(13,13,15,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "var(--accent-gold)",
            letterSpacing: "0.05em",
          }}
        >
          YG
        </span>
        <div className="nav-links" style={{ display: "flex", gap: "32px" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section
        className="hero-pad"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 40px 80px",
          maxWidth: "960px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "-10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, #C9A84C10 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <p className="section-eyebrow animate-fade-in-up" style={{ marginBottom: "20px", opacity: 0 }}>
          Disponible — Île-de-France &amp; Remote
        </p>

        <h1
          className="animate-fade-in-up delay-100"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
            opacity: 0,
          }}
        >
          Youssef
          <br />
          <span className="text-gold-shimmer">Ghiloufi</span>
        </h1>

        <p
          className="animate-fade-in-up delay-200"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontWeight: 500,
            color: "var(--text-muted)",
            marginBottom: "40px",
            opacity: 0,
          }}
        >
          Ingénieur QA Senior &amp; Automatisation des Tests
        </p>

        <p
          className="animate-fade-in-up delay-300"
          style={{
            maxWidth: "560px",
            fontSize: "1rem",
            color: "var(--text-muted)",
            lineHeight: 1.75,
            marginBottom: "52px",
            opacity: 0,
          }}
        >
          8 ans d&apos;expérience sur des applications web et mobiles complexes en
          environnement Agile. Spécialisé Playwright, WebdriverIO, Cucumber BDD
          et pipelines CI/CD GitLab.
        </p>

        <div
          className="animate-fade-in-up delay-400"
          style={{ display: "flex", gap: "16px", flexWrap: "wrap", opacity: 0 }}
        >
          <a href="#contact" className="btn-gold">Me contacter</a>
          <a
            href="https://www.linkedin.com/in/youssef-ghiloufi-131aa7114/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-in delay-600"
          style={{
            position: "absolute",
            bottom: "40px",
            left: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            opacity: 0,
          }}
        >
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, var(--accent-gold), transparent)" }} />
          <span style={{ fontSize: "0.7rem", color: "var(--text-subtle)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
        </div>
      </section>
    </>
  );
}
