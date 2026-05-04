"use client";

interface SectionWrapperProps {
  id: string;
  number?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, number, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      {number && (
        <span
          className="hidden lg:block absolute section-label"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
            top: "3rem",
            left: "1.5rem",
          }}
          aria-hidden="true"
        >
          {number}
        </span>
      )}
      {children}
    </section>
  );
}
