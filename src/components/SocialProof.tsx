"use client";

import FadeUp from "./FadeUp";
import SectionWrapper from "./SectionWrapper";
import CountUp from "./CountUp";

export default function SocialProof() {
  return (
    <SectionWrapper id="results" number="06">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-36">
        <FadeUp><span className="section-label">What our clients say</span></FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-16 mb-20 max-w-4xl mx-auto text-center">
            <div className="font-display font-bold italic mb-8" style={{ fontSize: "clamp(1.3rem, 3vw, 2.1rem)", color: "var(--fg)", lineHeight: "1.4" }}>
              &ldquo;Within months I hit £100K. And here&apos;s the thing — I haven&apos;t dropped below £70K since. That&apos;s not a spike. That&apos;s a new floor. My competitors in the area are still running the same ads they were running when I was at £30K.&rdquo;
            </div>
            <div className="section-label" style={{ color: "var(--muted)" }}>— Conar, smoke alarm installation business, UK</div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <hr style={{ borderColor: "rgba(240,236,228,0.06)", borderTopWidth: "1px", borderStyle: "solid", margin: "0 0 5rem 0" }} />
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="text-center">
            <div className="font-display font-black mb-4" style={{ fontSize: "clamp(5rem, 16vw, 11rem)", color: "var(--fg)", lineHeight: "1" }}>
              <CountUp end={3} suffix="." duration={1500} /><CountUp end={3} suffix="×" duration={1500} />
            </div>
            <p className="text-base lg:text-lg" style={{ color: "var(--muted)" }}>Revenue growth in the first operational month.</p>
          </div>
        </FadeUp>
      </div>
      <hr style={{ borderColor: "rgba(240,236,228,0.06)", borderTopWidth: "1px", borderStyle: "solid", margin: "0 1.5rem" }} />
    </SectionWrapper>
  );
}
