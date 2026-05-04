"use client";

import FadeUp from "./FadeUp";
import SectionWrapper from "./SectionWrapper";
import CountUp from "./CountUp";

const progression = [
  { value: "£30K", label: "Starting point" },
  { value: "£47K", label: "Month 1–2" },
  { value: "£68K", label: "Month 3–4" },
  { value: "£100K", label: "Month 5+" },
];

const changes = [
  "Rebuilt the editing to premium direct-response standard — branded, captioned, built for Meta",
  "Custom brand identity applied consistently across every ad",
  "20–30 fresh ads per month so creative never fatigued",
];

export default function CaseStudy() {
  return (
    <SectionWrapper id="case-study" number="04">
      <div className="relative py-28 lg:py-40 overflow-hidden" style={{ background: "#0d0d0d" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(139,26,26,0.06) 0%, transparent 70%)" }} aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
          <FadeUp><span className="section-label">Results</span></FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="font-display font-black mt-6 mb-6 leading-none" style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", letterSpacing: "-0.02em", color: "var(--fg)", maxWidth: "900px" }}>
              £30,000/month → £100,000/month.
              <br />
              <span style={{ color: "var(--accent)" }}>Same budget. Same business. Same area.</span>
              <br />
              The only thing that changed was the editing.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-lg max-w-2xl mb-16" style={{ color: "rgba(240,236,228,0.65)" }}>
              Conar runs a smoke alarm installation business in the UK. This is what happened when we fixed the one thing he&apos;d been ignoring.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
            <FadeUp delay={0.1}>
              <div>
                <h3 className="section-label mb-6" style={{ color: "var(--muted)" }}>The Before</h3>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: "rgba(240,236,228,0.7)" }}>
                  <p>Conar was doing £30K a month. Good business, reliable, good reviews. Running Meta ads — they were working, kind of. But he&apos;d hit a ceiling he couldn&apos;t break through. More budget didn&apos;t move it. Different targeting didn&apos;t move it.</p>
                  <p>His ads looked like everyone else&apos;s. Same talking head. Same shaky footage. Nothing that made someone stop scrolling and think <em style={{ color: "var(--fg)" }}>that&apos;s the company I&apos;m calling.</em></p>
                </div>
                <h3 className="section-label mt-10 mb-6" style={{ color: "var(--muted)" }}>What changed</h3>
                <ul className="space-y-4">
                  {changes.map((change, i) => (
                    <li key={i} className="flex gap-4 text-base" style={{ color: "rgba(240,236,228,0.7)" }}>
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div>
                <h3 className="section-label mb-8" style={{ color: "var(--muted)" }}>The result</h3>
                <div className="space-y-3">
                  {progression.map((step, i) => (
                    <div key={step.value} className="flex items-center gap-6 p-5" style={{ border: i === progression.length - 1 ? "1px solid rgba(139,26,26,0.5)" : "1px solid rgba(240,236,228,0.06)", background: i === progression.length - 1 ? "rgba(139,26,26,0.06)" : "rgba(240,236,228,0.01)" }}>
                      <span className="font-display font-black" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: i === progression.length - 1 ? "var(--fg)" : "var(--muted)", minWidth: "90px" }}>{step.value}</span>
                      <div className="flex-1"><div className="h-px" style={{ background: i === progression.length - 1 ? "var(--accent)" : "rgba(240,236,228,0.1)", width: `${25 + i * 25}%` }} /></div>
                      <span className="text-xs" style={{ color: "var(--muted)" }}>{step.label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed" style={{ color: "rgba(240,236,228,0.6)" }}>He hasn&apos;t dropped below £70K since. That&apos;s not a spike. That&apos;s a new floor.</p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(240,236,228,0.6)" }}>His competitors in the area are still running the same ads they were running when he was at £30K. He&apos;s dominated the market so completely that when someone in his area needs a smoke alarm installation, there&apos;s only one name they think of.</p>
                <p className="mt-3 text-sm" style={{ color: "rgba(240,236,228,0.6)" }}>Not because he outspent anyone. Because he <strong style={{ color: "var(--fg)" }}>outlooked</strong> everyone.</p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.25}>
            <blockquote className="border-l-2 pl-8 py-4" style={{ borderColor: "var(--accent)", maxWidth: "700px" }}>
              <p className="font-display font-bold italic mb-4" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", color: "var(--fg)", lineHeight: "1.35" }}>
                &ldquo;My ads started looking like they came from the dominant company in the area. Because that&apos;s what the editing was building me into.&rdquo;
              </p>
              <cite className="section-label not-italic" style={{ color: "var(--muted)" }}>— Conar, smoke alarm installation, UK</cite>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-20 pt-16 text-center" style={{ borderTop: "1px solid rgba(240,236,228,0.06)" }}>
              <div className="font-display font-black" style={{ fontSize: "clamp(4rem, 12vw, 9rem)", color: "var(--fg)", lineHeight: "1" }}>
                <CountUp end={3} suffix="." /><CountUp end={3} suffix="×" />
              </div>
              <p className="mt-4 text-base" style={{ color: "var(--muted)" }}>Revenue growth in the first operational month.</p>
            </div>
          </FadeUp>
        </div>
      </div>
      <hr style={{ borderColor: "rgba(240,236,228,0.06)", borderTopWidth: "1px", borderStyle: "solid" }} />
    </SectionWrapper>
  );
}
