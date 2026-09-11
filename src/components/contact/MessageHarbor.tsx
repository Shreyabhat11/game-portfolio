"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/content/profile";
import { ParchmentPanel } from "@/components/game/ParchmentPanel";
import { PixelHeading } from "@/components/game/PixelHeading";

export function MessageHarbor() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);

    const body = encodeURIComponent(
      `${message}\n\n— ${name} (${email})`
    );

    window.location.href =
      `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSent(true);
  }

  return (
    <section
      id="contact"
      style={{
        background:
          "linear-gradient(180deg,#241c12 0%, var(--ocean-dark) 100%)",
      }}
    >
      <div className="container mx-auto max-w-[1180px] px-6">

        {/* Harbor illustration */}
        <div
          className="relative h-[120px] mb-2.5"
          aria-hidden="true"
        >
          <span
            className="ship-sail absolute text-3xl"
            style={{
              left: "14%",
              bottom: 14,
            }}
          >
            ⛵
          </span>

          <div
            className="absolute text-center"
            style={{
              right: "10%",
              bottom: 20,
              width: 20,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                background: "var(--gold-bright)",
                margin: "0 auto",
                borderRadius: "3px 3px 0 0",
                border: "2px solid var(--ink)",
              }}
            />

            <div
              style={{
                width: 20,
                height: 44,
                background:
                  "repeating-linear-gradient(0deg,#fff 0 8px,#c0342b 8px 16px)",
                border: "2px solid var(--ink)",
                marginTop: -2,
              }}
            />
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-10 opacity-50"
            style={{
              background:
                "repeating-radial-gradient(circle at 10px -5px, transparent 0 6px, var(--ocean) 6px 8px)",
            }}
          />
        </div>

        <PixelHeading
          eyebrow="MESSAGE HARBOR"
          subtitle="Have a project, opportunity, or idea in mind? I'd love to hear from you."
        >
          📬 SEND A MESSAGE
        </PixelHeading>

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-10">

          {/* Contact information */}
          <div>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 mb-4 text-[15px]"
              style={{
                color: "var(--parchment)",
                textDecoration: "none",
              }}
            >
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center flex-none"
                style={{ background: "var(--gold)" }}
              >
                ✉
              </span>

              {profile.email}
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 mb-4 text-[15px]"
              style={{
                color: "var(--parchment)",
                textDecoration: "none",
              }}
            >
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center flex-none"
                style={{ background: "var(--gold)" }}
              >
                ☎
              </span>

              {profile.phone}
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mb-4 text-[15px]"
              style={{
                color: "var(--parchment)",
                textDecoration: "none",
              }}
            >
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center flex-none"
                style={{ background: "var(--gold)" }}
              >
                🐙
              </span>

              {profile.github.replace("https://", "")}
            </a>

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-4 text-[15px]"
                style={{
                  color: "var(--parchment)",
                  textDecoration: "none",
                }}
              >
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-none"
                  style={{ background: "var(--gold)" }}
                >
                  💼
                </span>

                LinkedIn
              </a>
            )}

            <div
              className="flex items-center gap-3 mb-4 text-[15px]"
              style={{ color: "var(--parchment)" }}
            >
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center flex-none"
                style={{ background: "var(--gold)" }}
              >
                📍
              </span>

              {profile.location}
            </div>
          </div>

          {/* Message form */}
          <ParchmentPanel>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3.5"
            >
              <div>
                <label
                  htmlFor="f-name"
                  className="pixel text-[9px] block mb-1.5"
                  style={{ color: "var(--ink)" }}
                >
                  NAME
                </label>

                <input
                  id="f-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full px-3.5 py-3 rounded-md border-2"
                  style={{
                    borderColor: "var(--wood-dark)",
                    background: "var(--parchment)",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="f-email"
                  className="pixel text-[9px] block mb-1.5"
                  style={{ color: "var(--ink)" }}
                >
                  EMAIL
                </label>

                <input
                  id="f-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full px-3.5 py-3 rounded-md border-2"
                  style={{
                    borderColor: "var(--wood-dark)",
                    background: "var(--parchment)",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="f-msg"
                  className="pixel text-[9px] block mb-1.5"
                  style={{ color: "var(--ink)" }}
                >
                  MESSAGE
                </label>

                <textarea
                  id="f-msg"
                  name="message"
                  required
                  className="w-full px-3.5 py-3 rounded-md border-2 min-h-[120px]"
                  style={{
                    borderColor: "var(--wood-dark)",
                    background: "var(--parchment)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="wood-btn gold"
              >
                ✉ SEND MESSAGE
              </button>

              {sent && (
                <p
                  className="pixel text-[10px] leading-[1.8]"
                  style={{ color: "var(--gold-bright)" }}
                >
                  ⚓ Your email draft is ready — just hit send.
                </p>
              )}

              <p
                className="text-xs opacity-80 leading-relaxed"
                style={{ color: "var(--heading-soft)" }}
              >
                Your email app will open with the message pre-filled.
                Prefer to reach out directly?{" "}
                <a
                  href={`mailto:${profile.email}`}
                  style={{
                    color: "var(--gold-bright)",
                    textDecoration: "underline",
                  }}
                >
                  Email me
                </a>
                .
              </p>
            </form>
          </ParchmentPanel>
        </div>
      </div>
    </section>
  );
}