import { featuredProjects } from "@/content/featured";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { PixelHeading } from "@/components/game/PixelHeading";

/** The 3 strongest projects, shown immediately after the hero — always
 * expanded, full case-study detail, no click required to see the work. */
export function FeaturedProjects() {
  return (
    <section id="featured-work" style={{ background: "linear-gradient(180deg,#1c2b1d,#22331f)" }}>
      <div className="container mx-auto max-w-[1180px] px-6">
        <PixelHeading eyebrow="FEATURED WORK" subtitle="Three projects that best represent how I build — from problem framing to shipped result.">
          FEATURED PROJECTS
        </PixelHeading>

        <div className="flex flex-col gap-8">
          {featuredProjects.map((p) => (
            <FeaturedProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
