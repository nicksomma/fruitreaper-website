"use client";

import FadeUp from "./FadeUp";
import SectionWrapper from "./SectionWrapper";

const steps = [
  { number: "01", title: "Onboarding", body: "We learn your brand, your market, your visual identity, and what good looks like for your business. Editor briefed, Frame.io folder set up, first batch scope confirmed." },
  { number: "02", title: "You Film", body: "You film the footage — phone camera is fine. We tell you exactly what we need each month so nothing gets wasted." },
  { number: "03", title: "We Edit", body: "We edit everything to a premium direct-response standard. Custom branded, captioned, animated, built for Meta. Delivered in your Frame.io folder." },
  { number: "04", title: "You Review", body: "You review the batch. 2 rounds of revisions included. We turn around feedback fast so your ad testing momentum never stops." },
  { number: "05", title: "Repeat", body: "Fresh batch every month. Creative rotates, output stays consistent, your ads machine keeps running." },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" number="03">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-36">
        <FadeUp><span className="section-label">The system</span></FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display font-black mt-6 mb-16 leading-none" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.02em", color: "var(--fg)" }}>
            Simple. <span style={{ color: "var(--accent)" }}>You film.</span> We deliver.
          </h2>
        </FadeUp>

        <div className="relative">
          <div className="hidden lg:block absolute left-16 top-0 bottom-0 w-px" style={{ background: "rgba(240,236,228,0.06)" }} aria-hidden="true" />
          <div className="space-y-0">
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={0.05 + i * 0.1}>
                <div className="relative lg:pl-44 pb-12 lg:pb-16">
                  <div className="hidden lg:flex absolute left-0 top-0 w-32 h-16 items-center justify-end pr-8">
                    <span className="font-display font-black" style={{ fontSize: "1.1rem", color: "var(--accent)", letterSpacing: "0.05em" }}>{step.number}</span>
                  </div>
                  <div className="hidden lg:block absolute w-3 h-3 rounded-full top-4 border-2" style={{ left: "calc(4rem - 6px)", background: "var(--bg)", borderColor: "var(--accent)" }} aria-hidden="true" />
                  <div
                    className="p-8 lg:p-10 transition-all duration-300"
                    style={{ border: "1px solid rgba(240,236,228,0.07)", background: "rgba(240,236,228,0.015)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(139,26,26,0.35)"; e.currentTarget.style.background = "rgba(139,26,26,0.03)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.07)"; e.currentTarget.style.background = "rgba(240,236,228,0.015)"; }}
                  >
                    <span className="lg:hidden section-label block mb-3" style={{ color: "var(--accent)" }}>{step.number}</span>
                    <h3 className="font-display font-bold mb-3" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "var(--fg)" }}>{step.title}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>{step.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
      <hr style={{ borderColor: "rgba(240,236,228,0.06)", borderTopWidth: "1px", borderStyle: "solid", margin: "0 1.5rem" }} />
    </SectionWrapper>
  );
}
