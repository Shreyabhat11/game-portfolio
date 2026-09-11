"use client";

import { useState } from "react";
import { JourneyMilestone } from "@/types";

interface MapNodeProps {
  item: JourneyMilestone;
}

/** A single expandable marker on the treasure map — one journey milestone. */
export function MapNode({ item }: MapNodeProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative pl-14 sm:pl-[76px] mb-3.5">
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 w-10 h-10 sm:w-[54px] sm:h-[54px] rounded-full flex items-center justify-center text-base sm:text-2xl"
        style={{
          background: "radial-gradient(circle at 35% 30%, var(--gold-bright), var(--gold) 60%, #8a6512)",
          border: "3px solid var(--wood-dark)",
          boxShadow: "0 5px 0 rgba(0,0,0,.2)",
        }}
      >
        {item.icon}
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full text-left rounded-lg px-4 py-3.5 flex justify-between items-center gap-3"
        style={{ background: "rgba(255,255,255,.35)", border: "2px solid var(--wood-dark)" }}
      >
        <span>
          <span className="pixel text-[11px]" style={{ color: "var(--ink)" }}>{item.title}</span>
          <br />
          <span className="text-[13px]" style={{ color: "var(--ink-soft)" }}>{item.subtitle}</span>
        </span>
        <span
          className="pixel text-[10px] transition-transform duration-200"
          style={{ color: "var(--wood)", transform: open ? "rotate(90deg)" : "none" }}
        >
          ▶
        </span>
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-300"
        style={{
          maxHeight: open ? 420 : 0,
          background: "rgba(255,255,255,.5)",
          border: "2px dashed var(--wood)",
          borderTop: "none",
          borderRadius: "0 0 8px 8px",
          marginTop: -2,
        }}
      >
        <div className="px-[18px] py-4 text-[14.5px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
          <span className="pixel text-[9px] block mb-2" style={{ color: "var(--ocean-dark)" }}>{item.date}</span>
          <ul className="pl-5 mt-2.5 space-y-1.5">
            {item.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
