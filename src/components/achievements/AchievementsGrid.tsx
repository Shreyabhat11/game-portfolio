import { achievements } from "@/content/achievements";
import { PixelHeading } from "@/components/game/PixelHeading";

interface AchievementsGridProps {
  unlocked: Record<string, boolean>;
}

export function AchievementsGrid({ unlocked }: AchievementsGridProps) {
  return (
    <section id="achievements" style={{ background: "linear-gradient(180deg,#2c2214,#241c12)" }}>
      <div className="container mx-auto max-w-[1180px] px-6">
        <PixelHeading eyebrow="TROPHY ROOM" subtitle="Unlocked automatically as you explore. Purely for fun — nothing is tracked or sent anywhere.">
          🏆 ACHIEVEMENTS
        </PixelHeading>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 18 }}>
          {achievements.map((a) => {
            const isUnlocked = !!unlocked[a.id];
            return (
              <div
                key={a.id}
                className="rounded-[10px] border-2 p-4 text-center transition-all duration-300"
                style={{
                  borderColor: "var(--wood)",
                  opacity: isUnlocked ? 1 : 0.5,
                  filter: isUnlocked ? "none" : "grayscale(1)",
                  background: isUnlocked ? "linear-gradient(160deg,#fff7de,var(--parchment))" : "rgba(255,255,255,.4)",
                  boxShadow: isUnlocked ? "0 5px 0 rgba(0,0,0,.12)" : "none",
                }}
              >
                <div className="text-2xl">{a.icon}</div>
                <div className="pixel text-[9.5px] mt-2" style={{ color: "var(--ink)" }}>{a.name}</div>
                <div className="text-xs mt-1.5" style={{ color: "var(--ink-soft)" }}>{a.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
