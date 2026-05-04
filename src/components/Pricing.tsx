"use client";

import FadeUp from "./FadeUp";
import SectionWrapper from "./SectionWrapper";

const plans = [
  {
    icon: "🌱", name: "Starter",
    tagline: "For service businesses doing £10K–£20K/month who are ready to take their creative seriously.",
    price: "$1,000–$1,500", period: "/ month",
    features: ["5–10 edited ads per month", "Premium direct-response editing — same standard as every client", "Custom branded, captioned, animated", "Frame.io delivery", "2 rounds of revisions per batch", "Fortnightly check-in"],
    highlight: false,
  },
  {
    icon: "🍇", name: "Reaper",
    tagline: "For service businesses doing £30K–£150K/month who want to dominate their market.",
    price: "$3,500–$5,000", period: "/ month",
    features: ["20–30+ edited ads per month", "Everything in Starter, plus priority turnaround", "Fortnightly check-in"],
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" number="08">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-36">
        <FadeUp><span className="section-label">Investment</span></FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display font-black mt-6 mb-6 leading-none" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.02em", color: "var(--fg)" }}>
            Two options. <span style={{ color: "var(--accent)" }}>One standard of work.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-base lg:text-lg max-w-xl mb-16 leading-relaxed" style={{ color: "rgba(240,236,228,0.65)" }}>
            Whether you&apos;re producing 5 ads a month or 30, the editing quality doesn&apos;t change. Pick the volume that fits where your business is right now.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-4xl">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={0.1 + i * 0.1}>
              <div className="p-8 lg:p-10 h-full flex flex-col transition-all duration-300" style={{ border: plan.highlight ? "1px solid rgba(139,26,26,0.5)" : "1px solid rgba(240,236,228,0.08)", background: plan.highlight ? "rgba(139,26,26,0.05)" : "rgba(240,236,228,0.02)" }}>
                <div className="text-3xl mb-4">{plan.icon}</div>
                <h3 className="font-display font-bold text-2xl mb-2" style={{ color: "var(--fg)" }}>{plan.name}</h3>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--muted)" }}>{plan.tagline}</p>
                <div className="mb-8">
                  <span className="font-display font-black" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "var(--fg)" }}>{plan.price}</span>
                  <span className="text-sm ml-1" style={{ color: "var(--muted)" }}>{plan.period}</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "rgba(240,236,228,0.72)" }}>
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: plan.highlight ? "var(--accent)" : "var(--gold)" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="block text-center py-4 font-semibold text-sm transition-all duration-200"
                  style={{ background: plan.highlight ? "var(--accent)" : "transparent", border: `1px solid ${plan.highlight ? "var(--accent)" : "rgba(240,236,228,0.2)"}`, color: "var(--fg)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = plan.highlight ? "var(--accent-light)" : "rgba(240,236,228,0.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = plan.highlight ? "var(--accent)" : "transparent"; }}
                >
                  Book a discovery call →
                </a>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.25}>
          <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>Both include a <strong style={{ color: "var(--fg)" }}>$750 one-time onboarding fee.</strong></p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="max-w-2xl p-6 text-sm leading-relaxed" style={{ border: "1px solid rgba(240,236,228,0.06)", background: "rgba(240,236,228,0.01)", color: "var(--muted)" }}>
            The hard minimum is $1,000/month — no exceptions. There&apos;s no cheaper version of this. But the ROI math works at both levels: Conar&apos;s editing cost him roughly 3.5% of his monthly revenue gain. Owners doing that math don&apos;t haggle.
          </div>
        </FadeUp>
      </div>
      <hr style={{ borderColor: "rgba(240,236,228,0.06)", borderTopWidth: "1px", borderStyle: "solid", margin: "0 1.5rem" }} />
    </SectionWrapper>
  );
}
