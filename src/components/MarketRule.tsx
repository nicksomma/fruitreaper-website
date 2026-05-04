"use client";

import FadeUp from "./FadeUp";
import SectionWrapper from "./SectionWrapper";

export default function MarketRule() {
  return (
    <SectionWrapper id="market-rule" number="07">
      <div className="relative py-28 lg:py-40 overflow-hidden" style={{ background: "#0d0d0d" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,26,26,0.05) 0%, transparent 70%)" }} aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-16 text-center">
          <FadeUp><span className="section-label">One business per market</span></FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="font-display font-black mt-6 mb-8 leading-none" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", letterSpacing: "-0.02em", color: "var(--fg)" }}>
              We don&apos;t work with <span style={{ color: "var(--accent)" }}>your competitors.</span> Ever.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="max-w-2xl mx-auto space-y-5 text-base lg:text-lg leading-relaxed mb-12" style={{ color: "rgba(240,236,228,0.68)" }}>
              <p>When we take on a client in a market, that market belongs to them.</p>
              <p>Our editing is built to make one business the dominant brand in their area — not two, not three. If we&apos;re building that creative machine for a roofer in Brighton, we&apos;re not building it for another roofer in Brighton. Or Hove. Or anywhere within 100km.</p>
              <p>This isn&apos;t a sales line. It&apos;s the model. The ads we build blow the competition out of the water — and that only works if we&apos;re only building them for you.</p>
              <p>Which means if someone in your market signs before you, we can&apos;t help you. That&apos;s not urgency for urgency&apos;s sake. That&apos;s just how this works.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <a
              href="#cta"
              onClick={(e) => { e.preventDefault(); document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-base transition-all duration-300 group"
              style={{ border: "1px solid var(--accent)", color: "var(--fg)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              Check if your market&apos;s still available
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </FadeUp>
        </div>
      </div>
      <hr style={{ borderColor: "rgba(240,236,228,0.06)", borderTopWidth: "1px", borderStyle: "solid" }} />
    </SectionWrapper>
  );
}
