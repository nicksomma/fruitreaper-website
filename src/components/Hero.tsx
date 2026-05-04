"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139,26,26,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 70%, rgba(201,168,76,0.04) 0%, transparent 60%), #0a0a0a",
          }}
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            width: "600px", height: "600px", top: "10%", left: "30%",
            transform: "translateX(-50%)",
            background: "radial-gradient(circle, rgba(139,26,26,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      <motion.div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-32 lg:py-0" style={{ opacity }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="section-label mb-8">
          Premium Meta Video Ad Editing
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black mb-8 leading-none"
          style={{ fontSize: "clamp(3rem, 8.5vw, 7.5rem)", letterSpacing: "-0.02em", color: "var(--fg)" }}
        >
          Your ads are running.
          <br />
          <span style={{ color: "var(--accent)" }}>Your creative isn&apos;t converting.</span>
          <br />
          We fix that.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg lg:text-xl max-w-2xl mb-4 leading-relaxed"
          style={{ color: "rgba(240,236,228,0.75)" }}
        >
          Fruit Reaper is a done-for-you Meta video ad editing studio for service business owners who are already spending on ads — and know the creative is the ceiling.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-base max-w-xl mb-12"
          style={{ color: "var(--muted)" }}
        >
          You film. We edit. Premium direct-response video ads delivered on a consistent monthly retainer.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}>
          <a
            href="#cta"
            onClick={(e) => { e.preventDefault(); document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-base transition-all duration-300 group"
            style={{ background: "var(--accent)", color: "var(--fg)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
          >
            Check if your market&apos;s available
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <p className="mt-5 text-xs italic" style={{ color: "var(--muted)" }}>
            We work with one business per market. If a competitor in your area has signed, we can&apos;t help you.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
        style={{ opacity }}
      >
        <span className="section-label">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, var(--muted), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
