"use client";

import FadeUp from "./FadeUp";
import SectionWrapper from "./SectionWrapper";

const pillars = [
  { icon: "🎬", title: "Premium Direct-Response Editing", body: "Every ad is edited for Meta performance — custom branded, captioned, animated, and paced to hold attention and drive action. Built for your business, not copied from a template." },
  { icon: "📦", title: "Volume & Consistency", body: "20–30+ ads per month depending on your footage supply. The machine keeps running — no gaps, no dropped batches, no starting from scratch every month." },
  { icon: "🔄", title: "Revisions & Quality Control", body: "2 rounds of revisions per batch included. Every ad signed off before delivery. You review via Frame.io." },
];

export default function Offer() {
  return (
    <SectionWrapper id="offer" number="02">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-36">
        <FadeUp><span className="section-label">What we do</span></FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display font-black mt-6 mb-10 leading-none" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.02em", color: "var(--fg)", maxWidth: "900px" }}>
            One retainer. Premium video ad editing —{" "}
            <span style={{ color: "var(--accent)" }}>done for you, every month.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="max-w-2xl mb-16 space-y-4 text-base lg:text-lg leading-relaxed" style={{ color: "rgba(240,236,228,0.72)" }}>
            <p>Most editors hand you a cut and disappear. We build a consistent creative output machine for your business.</p>
            <p>You film the footage. We handle everything after that — branded, captioned, animated, and paced specifically for Meta. 20–30+ ads per month, delivered reliably, to a standard that makes you look like the dominant business in your market.</p>
            <p>Not a basic cut. Not a template. Direct-response editing built to stop the scroll and make someone pick up the phone.</p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, i) => (
            <FadeUp key={pillar.title} delay={0.1 + i * 0.1}>
              <div
                className="p-8 lg:p-10 h-full transition-all duration-300"
                style={{ border: "1px solid rgba(240,236,228,0.08)", background: "rgba(240,236,228,0.02)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.background = "rgba(201,168,76,0.02)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.08)"; e.currentTarget.style.background = "rgba(240,236,228,0.02)"; }}
              >
                <div className="text-4xl mb-6">{pillar.icon}</div>
                <h3 className="font-display font-bold text-xl lg:text-2xl mb-4" style={{ color: "var(--fg)" }}>{pillar.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{pillar.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p className="text-sm italic max-w-2xl" style={{ color: "var(--muted)", borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem" }}>
            Scripting, campaign management, media buying, UGC sourcing, landing pages, and organic content are not included. We edit. We do it exceptionally well. That&apos;s the offer.
          </p>
        </FadeUp>
      </div>
      <hr style={{ borderColor: "rgba(240,236,228,0.06)", borderTopWidth: "1px", borderStyle: "solid", margin: "0 1.5rem" }} />
    </SectionWrapper>
  );
}
