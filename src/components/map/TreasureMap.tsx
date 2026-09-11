import { journey } from "@/content/journey";
import { MapNode } from "./MapNode";
import { PixelHeading } from "@/components/game/PixelHeading";

/** The Journey section: an illustrated parchment "map" containing a dotted
 * path of expandable milestones — the timeline view, complementing the
 * standalone Featured Projects and Experience sections above. */
export function TreasureMap() {
  return (
    <section id="journey" style={{ background: "linear-gradient(180deg,rgba(255,255,255,.05),transparent 55%), linear-gradient(180deg,#1c2b1d,#22331f)" }}>
      <div className="container mx-auto max-w-[1180px] px-6">
        <PixelHeading eyebrow="MY JOURNEY" subtitle="From the classroom to applied AI work — tap a marker for the details.">
          THE TREASURE MAP
        </PixelHeading>

        <div
          className="relative px-6 py-14 sm:px-9 sm:py-16 rounded-2xl border-4"
          style={{
            borderColor: "var(--wood-dark)",
            background: "radial-gradient(ellipse at 20% 20%, rgba(255,255,255,.3), transparent 50%), linear-gradient(160deg, var(--parchment) 0%, var(--parchment-dark) 100%)",
            boxShadow: "0 12px 0 rgba(0,0,0,.15), inset 0 0 60px rgba(120,80,30,.25)",
          }}
        >
          <div className="relative max-w-[760px] mx-auto">
            <div
              aria-hidden="true"
              className="absolute left-[18px] sm:left-[26px] top-2.5 bottom-2.5 w-1 opacity-55"
              style={{
                backgroundImage: "linear-gradient(var(--ink-soft) 60%, transparent 40%)",
                backgroundSize: "4px 16px",
                backgroundRepeat: "repeat-y",
              }}
            />
            {journey.map((item) => (
              <MapNode key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
