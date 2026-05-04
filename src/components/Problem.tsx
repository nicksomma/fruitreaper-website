"use client";

import FadeUp from "./FadeUp";
import SectionWrapper from "./SectionWrapper";

const painPoints = [
  { title: "Stuck at the same number", body: "Month after month, the revenue ceiling doesn't move no matter what you put in." },
  { title: "No system", body: "Every ad batch feels like starting from scratch. Nothing compounds." },
  { title: "Invisible in your market", body: "Your ads look identical to every competitor. There's no reason to choose you over them." },
];

export default function Problem() {
  return (
    <SectionWrapper id="problem" number="01">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-36">
        <FadeUp><span className="section-label">Sound familiar?</span></FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display font-black mt-6 mb-10 leading-none" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)", letterSpacing: "-0.02em", color: "var(--fg)", maxWidth: "820px" }}>
            You&apos;re not losing because of your budget.
            <br />
            <span style={{ color: "var(--accent)" }}>You&apos;re losing because of your creative.</span>
          </h2>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <FadeUp delay={0.15}>
            <div className="space-y-5 text-base lg:text-lg leading-relaxed" style={{ color: "rgba(240,236,228,0.72)" }}>
              <p>You&apos;re running Meta ads. They&apos;re doing something — enough to keep the business moving. But every month the number is roughly the same.</p>
              <p>You&apos;ve tried more budget. Different targeting. A new media buyer. Nothing shifts.</p>
              <p>The ads look fine. Same talking head, same shaky footage, same music everyone else is using. Nothing that makes someone stop scrolling and think: <em style={{ color: "var(--fg)" }}>that&apos;s the company I&apos;m calling.</em></p>
              <p>That&apos;s not a budget problem. That&apos;s not a targeting problem. That&apos;s a <strong style={{ color: "var(--fg)" }}>creative problem</strong> — and it&apos;s the one thing most service business owners keep ignoring.</p>
            </div>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <FadeUp key={point.title} delay={0.1 + i * 0.1}>
              <div
                className="p-8 h-full transition-all duration-300"
                style={{ border: "1px solid rgba(240,236,228,0.08)", background: "rgba(240,236,228,0.02)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(139,26,26,0.5)"; e.currentTarget.style.background = "rgba(139,26,26,0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.08)"; e.currentTarget.style.background = "rgba(240,236,228,0.02)"; }}
              >
                <div className="text-2xl font-black mb-1" style={{ color: "var(--accent)" }}>0{i + 1}</div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: "var(--fg)" }}>{point.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{point.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
      <hr style={{ borderColor: "rgba(240,236,228,0.06)", borderTopWidth: "1px", borderStyle: "solid", margin: "0 1.5rem" }} />
    </SectionWrapper>
  );
}
