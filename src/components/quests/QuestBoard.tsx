"use client";

import { useState } from "react";
import { quests } from "@/content/projects";
import { QuestCard } from "./QuestCard";
import { QuestModal } from "./QuestModal";
import { PixelHeading } from "@/components/game/PixelHeading";

export function QuestBoard() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = quests.find((q) => q.id === activeId) ?? null;

  return (
    <section
      id="quests"
      style={{
        background: "linear-gradient(180deg,#332c1c,#332c1c)",
      }}
    >
      <div className="container mx-auto max-w-[1240px] px-6">
        <PixelHeading
          eyebrow="MORE PROJECTS"
          subtitle="A selection of additional AI/ML projects — open one for the full breakdown."
        >
          ADDITIONAL PROJECTS
        </PixelHeading>

        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          }}
        >
          {quests.map((q) => (
            <QuestCard
              key={q.id}
              quest={q}
              onOpen={() => setActiveId(q.id)}
            />
          ))}
        </div>
      </div>

      <QuestModal
        quest={active}
        onClose={() => setActiveId(null)}
      />
    </section>
  );
}