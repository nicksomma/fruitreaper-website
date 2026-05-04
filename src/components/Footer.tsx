"use client";

const navLinks = [
  { label: "Work", href: "#case-study" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Book a Call", href: "#cta" },
];

function handleClick(href: string, e: React.MouseEvent) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer style={{ background: "#060606", borderTop: "1px solid rgba(240,236,228,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12 items-start">
          <div>
            <a href="#hero" onClick={(e) => handleClick("#hero", e)} className="font-display font-black text-xl tracking-widest block mb-3" style={{ color: "var(--fg)" }}>
              FRUIT REAPER
            </a>
            <p className="text-xs italic" style={{ color: "var(--muted)" }}>We sow the seeds. You reap the fruit.</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 md:justify-center">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={(e) => handleClick(link.href, e)} className="text-sm transition-colors duration-200" style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4 md:justify-end">
            <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center transition-colors duration-200" style={{ border: "1px solid rgba(240,236,228,0.1)", color: "var(--muted)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--fg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.1)"; e.currentTarget.style.color = "var(--muted)"; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center transition-colors duration-200" style={{ border: "1px solid rgba(240,236,228,0.1)", color: "var(--muted)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--fg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.1)"; e.currentTarget.style.color = "var(--muted)"; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(240,236,228,0.05)" }}>
          <p className="text-xs" style={{ color: "var(--muted)" }}>© 2026 Fruit Reaper. Premium Meta video ad editing for service businesses.</p>
        </div>
      </div>
    </footer>
  );
}
