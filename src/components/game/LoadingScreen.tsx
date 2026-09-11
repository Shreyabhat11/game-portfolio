"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

interface LoadingScreenProps {
  onEnter: () => void;
}

/** Brief game-style loading screen shown once per visit. Auto-dismisses so
 * it never blocks a visitor who ignores it. */
export function LoadingScreen({ onEnter }: LoadingScreenProps) {
  const [hidden, setHidden] = useState(false);
  const [showEnter, setShowEnter] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const enterTimer = window.setTimeout(() => setShowEnter(true), reduceMotion ? 0 : 1500);
    const autoHide = window.setTimeout(() => dismiss(), reduceMotion ? 300 : 3200);
    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(autoHide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dismiss() {
    setHidden(true);
    onEnter();
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 transition-opacity duration-500"
      style={{
        background: "radial-gradient(circle at 50% 40%, #16324a 0%, #0c1e2d 70%)",
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible",
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      <div className="pixel text-gold-bright text-center text-sm sm:text-lg" style={{ textShadow: "0 3px 0 #000" }}>
        {profile.name.toUpperCase()}
      </div>
      <div className="pixel text-sky text-[9px] opacity-85">LOADING ADVENTURE...</div>
      <div className="w-[260px] h-4 border-[3px] border-gold-bright bg-[#0c1e2d] rounded overflow-hidden">
        <div className="loader-bar-fill h-full" />
      </div>
      {showEnter && (
        <button onClick={dismiss} className="wood-btn gold">
          [ ENTER WORLD ]
        </button>
      )}
    </div>
  );
}
