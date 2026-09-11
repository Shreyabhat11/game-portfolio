"use client";

import { useState } from "react";
import { skillCategories, additionalSkills } from "@/content/skills";
import { PixelHeading } from "@/components/game/PixelHeading";

/** Skills organized as a tabbed "ability tree": pick a category, see its
 * abilities. Keeps the section scannable instead of stacking every
 * category's full grid on the page at once. */
export function SkillArena() {
  const [active, setActive] = useState(0);
  const category = skillCategories[active];

  return (
    <section id="skills" style={{ background: "linear-gradient(180deg,#22331f,#332c1c)" }}>
      <div className="container mx-auto max-w-[1180px] px-6">
        <PixelHeading eyebrow="SKILL ARENA" subtitle="Core stack first — everything here has been used in the CIPLA role or one of the projects below.">
          ABILITIES &amp; EQUIPMENT
        </PixelHeading>

        <div
          className="rounded-2xl border-[3px] overflow-hidden"
          style={{ borderColor: "var(--wood-dark)", background: "rgba(0,0,0,.22)" }}
        >
          {/* Tab rail */}
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex gap-1.5 overflow-x-auto p-3"
            style={{ background: "rgba(0,0,0,.25)", borderBottom: "2px solid var(--wood-dark)" }}
          >
            {skillCategories.map((cat, i) => (
              <button
                key={cat.name}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className="pixel text-[9px] whitespace-nowrap px-3.5 py-3 rounded-md flex items-center gap-2 transition-colors"
                style={{
                  color: i === active ? "var(--ink)" : "var(--heading-soft)",
                  background: i === active ? "var(--gold-bright)" : "transparent",
                  border: i === active ? "1px solid var(--gold)" : "1px solid transparent",
                }}
              >
                <span aria-hidden="true">{cat.icon}</span> {cat.name}
              </button>
            ))}
          </div>

          {/* Active category panel */}
          <div role="tabpanel" className="p-6 sm:p-8">
            <h3 className="pixel text-[12px] mb-5 flex items-center gap-2.5" style={{ color: "var(--heading)" }}>
              <span aria-hidden="true">{category.icon}</span> {category.name}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[13px] rounded-lg px-3.5 py-2.5 border-2"
                  style={{
                    borderColor: "var(--wood-dark)",
                    background: "linear-gradient(160deg,#fbf1d8 0%, var(--parchment) 85%)",
                    color: "var(--ink)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-[13px]" style={{ color: "var(--heading-soft)", opacity: 0.85 }}>
          Also worked with: {additionalSkills.join(" · ")}
        </p>
      </div>
    </section>
  );
}
