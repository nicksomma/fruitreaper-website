"use client";

import FadeUp from "./FadeUp";
import SectionWrapper from "./SectionWrapper";

const rightFit = [
  "You run a service-based business — trades, home services, compliance, HVAC, pest control, realtors, or similar",
  "You're doing £10K–£150K/month in revenue",
  "You're already running Meta ads (or actively spending on paid social)",
  "You own the business — not a marketing manager, not a committee",
  "You have someone who can film footage on a phone, consistently — this is non-negotiable",
  "You want a long-term creative partner, not a one-off edit",
];

const wrongFit = [
  "You need someone to write your scripts or manage your campaigns",
  "You can't or won't supply footage on a regular schedule",
  "You want the cheapest editor on the market",
  "You need a landing page, funnel, or organic content",
];

const niches = [
  { icon: "🔥", label: "Fire Safety & Compliance" },
  { icon: "⚡", label: "Electrical Testing (EICR / PAT)" },
  { icon: "🔧", label: "Boiler Servicing & Gas Safety" },
  { icon: "💧", label: "Damp & Mould Remediation" },
  { icon: "🏠", label: "Roofing & Guttering" },
  { icon: "❄️", label: "HVAC" },
  { icon: "🐛", label: "Pest Control" },
  { icon: "🌳", label: "Tree Surgery & Arborists" },
  { icon: "🚿", label: "Plumbing & Drainage" },
  { icon: "🏡", label: "Realtors & Estate Agents" },
];

export default function WhoWeServe() {
  return (
    <SectionWrapper id="who-we-serve" number="05">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-36">
        <FadeUp><span className="section-label">Our clients</span></FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display font-black mt-6 mb-8 leading-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", letterSpacing: "-0.02em", color: "var(--fg)", maxWidth: "800px" }}>
            We work with owner-operated service businesses running Meta ads and ready to scale.
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-base lg:text-lg max-w-2xl mb-16 leading-relaxed" style={{ color: "rgba(240,236,228,0.65)" }}>
            You don&apos;t need convincing that ads work. You already know they do — they&apos;re just not working as well as they should. That&apos;s the business we&apos;re built for.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <FadeUp delay={0.1}>
            <div className="p-8 lg:p-10 h-full" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.02)" }}>
              <h3 className="font-display font-bold text-xl mb-6" style={{ color: "var(--gold)" }}>✅ The right fit</h3>
              <ul className="space-y-4">
                {rightFit.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "rgba(240,236,228,0.7)" }}>
                    <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: "var(--gold)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="p-8 lg:p-10 h-full" style={{ border: "1px solid rgba(240,236,228,0.06)", background: "rgba(240,236,228,0.01)" }}>
              <h3 className="font-display font-bold text-xl mb-6" style={{ color: "var(--muted)" }}>❌ The wrong fit</h3>
              <ul className="space-y-4">
                {wrongFit.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: "var(--muted)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}><h3 className="section-label mb-8">Industries we serve</h3></FadeUp>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {niches.map((niche, i) => (
            <FadeUp key={niche.label} delay={0.05 + i * 0.04}>
              <div
                className="p-4 text-center transition-all duration-200"
                style={{ border: "1px solid rgba(240,236,228,0.07)", background: "rgba(240,236,228,0.01)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(139,26,26,0.4)"; e.currentTarget.style.background = "rgba(139,26,26,0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.07)"; e.currentTarget.style.background = "rgba(240,236,228,0.01)"; }}
              >
                <div className="text-2xl mb-2">{niche.icon}</div>
                <div className="text-xs leading-tight" style={{ color: "var(--muted)" }}>{niche.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
      <hr style={{ borderColor: "rgba(240,236,228,0.06)", borderTopWidth: "1px", borderStyle: "solid", margin: "0 1.5rem" }} />
    </SectionWrapper>
  );
}
