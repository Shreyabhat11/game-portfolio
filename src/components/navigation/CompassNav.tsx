"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#home", label: "🏠 HOME" },
  { href: "#featured-work", label: "⭐ FEATURED WORK" },
  { href: "#experience", label: "🏭 EXPERIENCE" },
  { href: "#journey", label: "🗺 JOURNEY" },
  { href: "#skills", label: "🛠 SKILLS" },
  { href: "#quests", label: "📁 MORE PROJECTS" },
  { href: "#resume", label: "📜 RESUME" },
  { href: "#contact", label: "📬 CONTACT" },
];

/** Persistent compass-button navigation, replacing a conventional navbar.
 * Opens a wooden menu of anchor links; closes on outside click or selection. */
export function CompassNav() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div ref={rootRef}>
      <nav
        aria-label="Site navigation"
        className={`fixed z-[499] bottom-24 right-[22px] flex flex-col gap-1.5 p-2.5 rounded-lg border-[3px] transition-all duration-200 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(180deg,var(--wood-light),var(--wood) 40%, var(--wood-dark))",
          borderColor: "var(--gold)",
          minWidth: 220,
          boxShadow: "0 10px 24px rgba(0,0,0,.4)",
        }}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="pixel text-[10px] text-parchment no-underline px-3 py-2.5 rounded-md flex items-center gap-2.5"
            style={{ background: "rgba(0,0,0,.12)", border: "1px solid rgba(0,0,0,.25)" }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Open navigation menu"
        className="fixed z-[500] bottom-[22px] right-[22px] w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          background: "radial-gradient(circle at 35% 30%, var(--wood-light), var(--wood) 55%, var(--wood-dark) 100%)",
          border: "3px solid var(--gold)",
          boxShadow: "0 6px 0 rgba(0,0,0,.35), 0 8px 14px rgba(0,0,0,.35)",
        }}
      >
        <svg viewBox="0 0 100 100" width="34" height="34" aria-hidden="true">
          <circle cx="50" cy="50" r="44" fill="none" stroke="#e7b93a" strokeWidth="5" />
          <g className="compass-needle">
            <polygon points="50,14 58,50 50,86 42,50" fill="#e7b93a" />
          </g>
          <circle cx="50" cy="50" r="4" fill="#2a1a0f" />
        </svg>
      </button>
    </div>
  );
}
