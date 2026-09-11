import { profile } from "@/content/profile";

function usernameFromGithubUrl(url: string): string {
  return url.replace(/\/$/, "").split("/").pop() ?? "";
}

/** A small "adventurer status" panel showing live GitHub activity.
 * Uses the public github-readme-stats image service — no API key, no
 * client-side fetch, and it fails gracefully to a broken-image icon if
 * the service is ever down (no backend dependency). */
export function GitHubStatusCard() {
  const username = usernameFromGithubUrl(profile.github);
  if (!username) return null;

  return (
    <div
      className="rounded-xl border-2 p-4 mt-8 max-w-[480px]"
      style={{ borderColor: "var(--wood)", background: "rgba(0,0,0,.28)" }}
    >
      <div className="pixel text-[9px] mb-3 flex items-center gap-2" style={{ color: "var(--gold-bright)" }}>
        🐙 GITHUB STATUS
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_title=true&theme=transparent&text_color=e6d19e&icon_color=dba732&title_color=f1e2b8&border_color=5a3820&hide_border=false`}
        alt={`${username}'s GitHub stats`}
        width={420}
        height={140}
        loading="lazy"
        className="w-full h-auto rounded-md"
      />
    </div>
  );
}
