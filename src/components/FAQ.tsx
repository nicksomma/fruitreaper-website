"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "./FadeUp";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  { q: "Do you write the scripts too?", a: "Not currently — scripting isn't part of the offer. You supply the footage and we handle everything in post. If you need help with scripts, we're happy to point you toward resources, but it's not something we take on." },
  { q: "Do you manage the ad campaigns?", a: "No — campaign setup and media buying aren't included. We deliver finished, Meta-ready ad creative. What you do with it in Ads Manager is up to you (or your media buyer)." },
  { q: "What if my footage isn't great quality?", a: "Phone camera footage is absolutely fine — most of our best-performing ads are shot on a phone. What matters is that it's clear, well-lit, and filmed to our brief. We'll tell you exactly what we need." },
  { q: "Do you work with businesses outside the UK?", a: "Yes. The system is built for Meta — it works in any market. We're currently focused on UK-based service businesses but work with qualified businesses elsewhere on a case-by-case basis." },
  { q: "What does the onboarding fee cover?", a: "The $750 onboarding fee covers your account audit, editor briefing, brand identity setup, Frame.io configuration, and full client onboarding. It reflects real work and ensures both sides are serious about getting started." },
  { q: "What if my market is already taken?", a: "We'll tell you honestly. If a competitor within 100km of your primary service area is already a Fruit Reaper client, we can't take you on. We'd rather tell you that upfront than waste your time." },
  { q: "How many ads do you produce per month?", a: "5–10 on the Starter plan, 20–30+ on the Reaper plan — depending on your footage supply. The more footage you film to brief, the more creative variety we can test." },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={0.05 + index * 0.05}>
      <div style={{ borderBottom: "1px solid rgba(240,236,228,0.07)" }}>
        <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-6 py-6 text-left transition-colors duration-200" style={{ color: open ? "var(--fg)" : "rgba(240,236,228,0.8)" }} aria-expanded={open}>
          <span className="font-display font-semibold text-lg leading-snug">{q}</span>
          <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center" style={{ color: "var(--accent)" }} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <line x1="8" y1="0" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
              <p className="pb-6 text-base leading-relaxed" style={{ color: "var(--muted)" }}>{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

export default function FAQ() {
  return (
    <SectionWrapper id="faq" number="09">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-36">
        <FadeUp><span className="section-label">FAQ</span></FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display font-black mt-6 mb-14 leading-none" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.02em", color: "var(--fg)" }}>
            Common questions.
          </h2>
        </FadeUp>
        <div className="max-w-3xl" style={{ borderTop: "1px solid rgba(240,236,228,0.07)" }}>
          {faqs.map((faq, i) => <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />)}
        </div>
      </div>
      <hr style={{ borderColor: "rgba(240,236,228,0.06)", borderTopWidth: "1px", borderStyle: "solid", margin: "0 1.5rem" }} />
    </SectionWrapper>
  );
}
