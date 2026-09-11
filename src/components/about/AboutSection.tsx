import { PixelHeading } from "@/components/game/PixelHeading";

/** A short, factual paragraph connecting the Electronics & Instrumentation
 * background, the pharmaceutical-manufacturing role, and the AI/GenAI
 * work — reuses existing heading/typography patterns, no new visual
 * language introduced. */
export function AboutSection() {
  return (
    <section id="about" style={{ background: "#1c2b1d" }} className="!py-20">
      <div className="container mx-auto max-w-[820px] px-6">
        <PixelHeading eyebrow="ABOUT">ABOUT ME</PixelHeading>
        <p className="text-center" style={{ color: "var(--heading-soft)", fontSize: 16, lineHeight: 1.8 }}>
          My background sits at the intersection of hardware and software: a B.E. in Electronics &amp;
          Instrumentation gave me a grounding in the sensors, control systems and industrial data (like SCADA/BMS)
          that pharmaceutical manufacturing runs on. Working as a Trainee in Manufacturing &amp; Formulation at
          CIPLA Ltd put me close to that operational data day-to-day, which is what pulled me toward applying GenAI
          and machine learning to real industrial problems — from anomaly detection to RAG-based knowledge
          retrieval. I&apos;m now focused on building reliable LLM systems, RAG pipelines and agentic AI
          applications, informed by that hands-on instrumentation and manufacturing background.
        </p>
      </div>
    </section>
  );
}
