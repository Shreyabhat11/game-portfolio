"use client";

import { useRef } from "react";
import { WoodenButton, WoodenLink } from "@/components/game/WoodenButton";
import { PixelHeading } from "@/components/game/PixelHeading";

const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || "/assets/resume.pdf";

/** Résumé preview + download. The PDF location is configurable via
 * NEXT_PUBLIC_RESUME_URL so swapping the file (or pointing it at cloud
 * storage later) never requires touching this component. */
export function ResumeViewer() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  function goFullscreen() {
    if (frameRef.current?.requestFullscreen) {
      frameRef.current.requestFullscreen();
    } else {
      window.open(RESUME_URL, "_blank");
    }
  }

  return (
    <section id="resume" style={{ background: "linear-gradient(180deg,#332c1c,#2c2214)" }}>
      <div className="container mx-auto max-w-[1180px] px-6">
        <PixelHeading eyebrow="RESUME" subtitle="My full experience and project history, in one document.">
          📜 RESUME
        </PixelHeading>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-stretch">
          <div
            className="rounded-2xl border-4 p-6 flex flex-col items-center justify-center gap-4 text-center"
            style={{ borderColor: "var(--gold)", background: "linear-gradient(160deg,#3c2412,#1f1309)", boxShadow: "0 10px 0 rgba(0,0,0,.25)" }}
          >
            <div className="text-5xl">📜</div>
            <h3 className="pixel text-[13px]" style={{ color: "var(--gold-bright)" }}>SHREYA BHAT</h3>
            <p className="text-[13.5px] opacity-85 max-w-[280px]" style={{ color: "var(--parchment)" }}>
              An ATS-friendly, one-page resume — always kept current. Replace{" "}
              <code>public/assets/resume.pdf</code> to update it everywhere on the site automatically.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <WoodenButton variant="gold" size="small" onClick={goFullscreen}>🔍 FULL SCREEN</WoodenButton>
              <WoodenLink href={RESUME_URL} size="small" download>⬇ DOWNLOAD PDF</WoodenLink>
            </div>
          </div>

          <div className="rounded-xl border-4 overflow-hidden bg-white h-[560px]" style={{ borderColor: "var(--wood-dark)", boxShadow: "0 10px 0 rgba(0,0,0,.15)" }}>
            <iframe
              ref={frameRef}
              src={`${RESUME_URL}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
              title="Shreya Bhat's résumé, PDF preview"
              className="w-full h-full block border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
