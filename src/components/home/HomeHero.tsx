import Image from "next/image";
import { profile } from "@/content/profile";
import { WoodenLink } from "@/components/game/WoodenButton";

/**
 * Home hero — professional content first, adventure aesthetic second.
 * The right-side scene is a square 1:1 visual anchor.
 */
export function HomeHero() {
  return (
    <section
      id="home"
      className="!pt-[95px] md:!pt-[105px] min-h-[92vh] flex items-center"
    >
      <div className="container mx-auto max-w-[1180px] px-6 grid md:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-14 items-center relative z-[1]">
        {/* LEFT — professional identity */}
        <div>
          <h1
            className="pixel leading-[1.25]"
            style={{
              fontSize: "clamp(30px, 5vw, 48px)",
              color: "var(--heading)",
              textShadow: "3px 3px 0 rgba(0,0,0,.55)",
            }}
          >
            {profile.name.toUpperCase()}
          </h1>

          <div
            className="pixel text-[12px] mt-4 tracking-wide"
            style={{ color: "var(--gold-bright)" }}
          >
            {profile.role.toUpperCase()}
          </div>

          <p
            className="mt-6 font-semibold"
            style={{
              fontSize: "clamp(17px, 2.1vw, 21px)",
              color: "var(--heading)",
              maxWidth: 520,
              lineHeight: 1.5,
            }}
          >
            {profile.tagline}
          </p>

          <p
            className="mt-3"
            style={{
              color: "var(--heading-soft)",
              fontSize: 15.5,
              maxWidth: 500,
              lineHeight: 1.7,
            }}
          >
            {profile.summary}
          </p>

          <div className="flex gap-3.5 flex-wrap mt-7">
            <WoodenLink href="#featured-work" variant="gold">
              ⭐ VIEW FEATURED WORK
            </WoodenLink>

            <WoodenLink href="#resume">
              📜 RESUME
            </WoodenLink>

            <WoodenLink
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              🐙 GITHUB
            </WoodenLink>
          </div>
        </div>

        {/* RIGHT — 1:1 adventure scene */}
        <div
          className="relative w-full max-w-[500px] mx-auto aspect-square rounded-2xl overflow-hidden border-[3px]"
          style={{
            borderColor: "var(--wood-dark)",
            boxShadow:
              "0 10px 0 rgba(0,0,0,.35), 0 18px 35px rgba(0,0,0,.22)",
            background: "#10232b",
          }}
        >
          <Image
            src="/assets/hero-scene.png"
            alt="Pixel-art adventure landscape representing a journey from curiosity to AI solutions"
            fill
            priority
            sizes="(max-width: 768px) 92vw, 500px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}