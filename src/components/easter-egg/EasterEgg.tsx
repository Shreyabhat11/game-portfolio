"use client";

import { useEffect, useState } from "react";

/** One subtle, low-key easter egg: a small chest icon tucked in the
 * corner. Clicking it shows a brief, self-contained message — no
 * persistent tracking, no unlock system, nothing else on the page reacts
 * to it. */
export function EasterEgg() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!revealed) return;
    const t = window.setTimeout(() => setRevealed(false), 4000);
    return () => window.clearTimeout(t);
  }, [revealed]);

  return (
    <div className="fixed z-[400] left-4 bottom-4">
      {revealed && (
        <div
          role="status"
          className="pixel text-[9px] mb-2 px-3 py-2.5 rounded-md max-w-[220px]"
          style={{ color: "var(--heading)", background: "var(--wood-dark)", border: "1px solid var(--gold)" }}
        >
          🗺️ You found the hidden chest. Thanks for looking closely.
        </div>
      )}
      <button
        onClick={() => setRevealed(true)}
        title="A curious chest..."
        aria-label="Hidden treasure chest — click to reveal a small message"
        className="w-[38px] h-7 opacity-40 hover:opacity-90 transition-opacity"
        style={{ background: "linear-gradient(180deg,var(--wood-light),var(--wood))", border: "2px solid var(--wood-dark)", borderRadius: "4px 4px 0 0" }}
      />
    </div>
  );
}
