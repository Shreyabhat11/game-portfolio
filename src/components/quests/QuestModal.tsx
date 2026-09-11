"use client";

import { useEffect, useRef } from "react";
import { Quest } from "@/types";
import { ParchmentPanel } from "@/components/game/ParchmentPanel";

interface QuestModalProps {
  quest: Quest | null;
  onClose: () => void;
}

export function QuestModal({ quest, onClose }: QuestModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!quest) return;
    closeBtnRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [quest, onClose]);

  if (!quest) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[600] flex items-center justify-center p-6"
      style={{ background: "rgba(10,20,25,.65)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <ParchmentPanel className="max-w-[640px] w-full max-h-[85vh] overflow-y-auto relative">
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close quest details"
          className="pixel text-xs absolute top-3.5 right-3.5 w-[34px] h-[34px] rounded-full"
          style={{ background: "var(--wood-dark)", color: "var(--parchment)", border: "2px solid var(--gold)" }}
        >
          ✕
        </button>

        <span className="pixel text-[9px] block mb-4" style={{ color: "var(--ocean-dark)" }}>{quest.domain}</span>
        <h3 id="modal-title" className="pixel text-sm leading-[1.8] mb-1.5 pr-9" style={{ color: "var(--ink)" }}>
          {quest.title}
        </h3>
        <div className="flex flex-wrap gap-1.5 mt-1.5">
          {quest.stack.map((s) => (
            <span key={s} className="text-[11px] rounded-full px-2 py-0.5" style={{ background: "rgba(255,255,255,.6)", border: "1px solid var(--wood)" }}>
              {s}
            </span>
          ))}
        </div>
        {(quest.repoUrl || quest.demoUrl) && (
          <div className="flex flex-wrap gap-2 mt-4">
            {quest.repoUrl && (
              <a
                href={quest.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel text-[9px] inline-flex items-center gap-2 px-3 py-2.5 rounded-md"
                style={{ color: "var(--parchment)", background: "var(--wood-dark)", border: "1px solid var(--gold)" }}
              >
                🔗 VIEW REPO
              </a>
            )}
            {quest.demoUrl && (
              <a
                href={quest.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel text-[9px] inline-flex items-center gap-2 px-3 py-2.5 rounded-md"
                style={{ color: "var(--ink)", background: "var(--gold-bright)", border: "1px solid var(--gold)" }}
              >
                🌐 LIVE DEMO
              </a>
            )}
          </div>
        )}

        <h4 className="pixel text-[10px] mt-[18px] mb-2" style={{ color: "var(--wood-dark)" }}>THE PROBLEM</h4>
        <p className="text-[14.5px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>{quest.problem}</p>

        <h4 className="pixel text-[10px] mt-[18px] mb-2" style={{ color: "var(--wood-dark)" }}>THE SOLUTION</h4>
        <ul className="pl-5 space-y-1.5 text-[14.5px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
          {quest.solution.map((s, i) => <li key={i}>{s}</li>)}
        </ul>

        <h4 className="pixel text-[10px] mt-[18px] mb-2" style={{ color: "var(--wood-dark)" }}>OUTCOME</h4>
        <p className="text-[14.5px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>{quest.outcome}</p>
      </ParchmentPanel>
    </div>
  );
}
