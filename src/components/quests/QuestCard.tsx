import { Quest } from "@/types";

interface QuestCardProps {
  quest: Quest;
  onOpen: () => void;
}

export function QuestCard({ quest, onOpen }: QuestCardProps) {
  const hasLinks = quest.repoUrl || quest.demoUrl;

  return (
    <div
      className="text-left w-full rounded p-[22px] border-[3px] transition-transform hover:-translate-y-1 flex flex-col"
      style={{
        borderColor: "var(--wood-dark)",
        background: "linear-gradient(180deg,var(--parchment) 0%, var(--parchment-dark) 100%)",
        boxShadow: "0 8px 0 rgba(0,0,0,.3)",
      }}
    >
      <span
        className="pixel text-[8px] inline-block w-fit mb-3 px-2 py-1.5 rounded"
        style={{ color: "var(--parchment)", background: "var(--ocean-dark)" }}
      >
        {quest.domain}
      </span>
      <h3 className="pixel text-[12px] leading-[1.7] mb-2.5" style={{ color: "var(--ink)" }}>{quest.title}</h3>
      <p className="text-sm leading-[1.6] mb-3.5" style={{ color: "var(--ink-soft)" }}>{quest.problem}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {quest.stack.map((s) => (
          <span key={s} className="text-[11px] rounded-full px-2 py-0.5" style={{ background: "rgba(255,255,255,.5)", border: "1px solid var(--wood)", color: "var(--ink-soft)" }}>
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 flex-wrap">
        <button onClick={onOpen} className="pixel text-[9px]" style={{ color: "var(--gold)" }}>
          VIEW DETAILS →
        </button>
        {hasLinks && (
          <div className="flex gap-2">
            {quest.repoUrl && (
              <a
                href={quest.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="pixel text-[8px] inline-flex items-center gap-1.5 px-2.5 py-2 rounded-md"
                style={{ color: "var(--parchment)", background: "var(--wood-dark)", border: "1px solid var(--gold)" }}
                aria-label={`Open the repository for ${quest.title}`}
              >
                🔗 REPO
              </a>
            )}
            {quest.demoUrl && (
              <a
                href={quest.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="pixel text-[8px] inline-flex items-center gap-1.5 px-2.5 py-2 rounded-md"
                style={{ color: "var(--ink)", background: "var(--gold-bright)", border: "1px solid var(--gold)" }}
                aria-label={`Open the live demo for ${quest.title}`}
              >
                🌐 DEMO
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
