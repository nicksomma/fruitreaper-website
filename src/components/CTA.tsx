"use client";

import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

export default function CTA() {
  return (
    <section id="cta" className="relative py-36 lg:py-48 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,26,26,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-16 text-center">
        <FadeUp><span className="section-label">Ready?</span></FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display font-black mt-6 mb-8 leading-none" style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)", letterSpacing: "-0.02em", color: "var(--fg)" }}>
            Check if your market&apos;s <span style={{ color: "var(--accent)" }}>available.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-base lg:text-xl max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: "rgba(240,236,228,0.65)" }}>
            If it is, let&apos;s talk this week. Discovery calls are 30 minutes — we&apos;ll audit your current ad creative, tell you exactly what&apos;s broken, and be direct about whether we&apos;re the right fit.
            <br /><br />
            If it&apos;s not, we&apos;ll tell you that too.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <a
            href="#book"
            className="inline-flex items-center gap-4 px-10 py-5 font-bold text-lg transition-all duration-300 group"
            style={{ background: "var(--accent)", color: "var(--fg)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-light)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Book your discovery call
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <p className="mt-6 text-xs italic" style={{ color: "var(--muted)" }}>
            No pitch decks. No fluff. Just an honest conversation about whether this works for your business.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
