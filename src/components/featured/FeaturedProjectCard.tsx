import { Quest } from "@/types";

interface FeaturedProjectCardProps {
  project: Quest;
}

/** A full case-study card for one of the top 3 featured projects — always
 * expanded (no click-to-reveal), so a recruiter sees problem → approach →
 * stack → result without an extra click. */
export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article
      className="rounded-2xl border-[3px] p-7 sm:p-9"
      style={{
        borderColor: "var(--wood-dark)",
        background: "linear-gradient(175deg, var(--parchment) 0%, var(--parchment-2) 55%, var(--parchment-dark) 100%)",
        boxShadow: "0 10px 0 rgba(0,0,0,.3), 0 20px 40px rgba(0,0,0,.35)",
      }}
    >
      <span
        className="pixel text-[8px] inline-block w-fit mb-3 px-2.5 py-1.5 rounded"
        style={{ color: "var(--parchment)", background: "var(--ocean-dark)" }}
      >
        {project.domain}
      </span>
      <h3 className="pixel text-[14px] sm:text-[16px] leading-[1.8] mb-5" style={{ color: "var(--ink)" }}>
        {project.title}
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="pixel text-[10px] mb-2" style={{ color: "var(--wood-dark)" }}>PROBLEM</h4>
          <p className="text-[14.5px] leading-[1.7] mb-5" style={{ color: "var(--ink-soft)" }}>{project.problem}</p>

          <h4 className="pixel text-[10px] mb-2" style={{ color: "var(--wood-dark)" }}>APPROACH</h4>
          <ul className="pl-5 space-y-1.5 text-[14.5px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
            {project.solution.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="pixel text-[10px] mb-2" style={{ color: "var(--wood-dark)" }}>TECHNOLOGIES</h4>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-[12px] rounded-full px-3 py-1 border-2"
                style={{ borderColor: "var(--wood)", background: "rgba(255,255,255,.55)", color: "var(--ink-soft)" }}
              >
                {s}
              </span>
            ))}
          </div>

          <h4 className="pixel text-[10px] mb-2" style={{ color: "var(--wood-dark)" }}>RESULT</h4>
          <p className="text-[14.5px] leading-[1.7] mb-6" style={{ color: "var(--ink-soft)" }}>{project.outcome}</p>

          <div className="mt-auto flex flex-wrap gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wood-btn"
              >
                🔗 GITHUB
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="wood-btn gold">
                🌐 LIVE DEMO
              </a>
            )}
            {project.internalNote && (
              <span
                className="pixel text-[9px] inline-flex items-center gap-2 px-3.5 py-3 rounded-md"
                style={{ color: "var(--heading-soft)", background: "rgba(0,0,0,.15)", border: "1px dashed var(--wood)" }}
              >
                🔒 {project.internalNote}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
