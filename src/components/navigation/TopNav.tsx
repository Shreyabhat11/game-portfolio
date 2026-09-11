"use client";

import { profile } from "@/content/profile";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#featured-work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function TopNav() {
  return (
    <nav
      aria-label="Primary site navigation"
      className="hidden md:flex fixed top-5 inset-x-0 z-[480] items-center justify-center"
      style={{
        height: 78,
        background:
          "linear-gradient(180deg, #21150d 0%, #160d08 100%)",
        borderBottom: "2px solid var(--wood-dark)",
        boxShadow: "0 5px 12px rgba(0,0,0,.35)",
      }}
    >
      {/* Large circular profile badge */}
      <div
        className="absolute left-7 top-1/2 -translate-y-1/2 z-[10] rounded-full p-[5px]"
        style={{
          width: 94,
          height: 94,
          background:
            "linear-gradient(145deg, var(--gold-bright), var(--wood-dark))",
          boxShadow:
            "0 0 0 2px rgba(201,151,42,.45), 0 7px 16px rgba(0,0,0,.5)",
        }}
      >
        <div
          className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
          style={{
            border: "3px solid #2b1a0d",
            background: "#24150b",
          }}
        >
          {profile.photoUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="w-full h-full object-cover"
              style={{
                transform: "scale(1.22)",
                objectPosition: "center 35%",
              }}
            />
          ) : (
            <span
              className="pixel text-center leading-tight"
              style={{
                color: "var(--gold-bright)",
                fontSize: 13,
              }}
            >
              SHREYA
              <br />
              BHAT
            </span>
          )}
        </div>
      </div>

      {/* Wooden inner navigation bar */}
      <div
        className="w-[calc(100%-64px)] max-w-[1500px] h-[58px] flex items-center justify-center"
        style={{
          background:
            "linear-gradient(180deg, #2a1a0e 0%, #1a0f09 100%)",
          border: "2px solid #4a2c14",
          boxShadow:
            "inset 0 0 0 1px rgba(212,168,69,.12), 0 3px 0 rgba(0,0,0,.4)",
        }}
      >
        <div className="flex items-center gap-1 lg:gap-3">
          {LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="pixel no-underline px-4 lg:px-6 py-3 transition-all duration-150"
              style={{
                color: "var(--heading)",
                fontSize: 10,
                position: "relative",
              }}
            >
              {link.label}

              {index === 0 && (
                <span
                  className="absolute left-3 right-3 -bottom-[1px] h-[3px]"
                  style={{
                    background: "var(--gold-bright)",
                    boxShadow: "0 2px 0 rgba(0,0,0,.35)",
                  }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}