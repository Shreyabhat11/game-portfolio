import { PixelHeading } from "@/components/game/PixelHeading";

const FLOW_STAGES = [
  { icon: "📡", label: "SCADA / BMS Data" },
  { icon: "🚨", label: "Anomaly Detection" },
  { icon: "📚", label: "RAG / SOP Knowledge" },
  { icon: "🔎", label: "Root-Cause Support" },
  { icon: "📈", label: "Operational Impact" },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        background: "linear-gradient(180deg,#22331f,#1c2b1d)",
      }}
    >
      <div className="container mx-auto max-w-[1180px] px-6">
        <PixelHeading
          eyebrow="INDUSTRIAL AI EXPERIENCE"
          subtitle="Applying GenAI, retrieval, and anomaly detection to real plant operations."
        >
          INDUSTRIAL AI WORK @ CIPLA LTD
        </PixelHeading>

        <div
          className="rounded-2xl border-[3px] p-7 sm:p-9"
          style={{
            borderColor: "var(--wood-dark)",
            background:
              "linear-gradient(175deg, var(--parchment) 0%, var(--parchment-2) 55%, var(--parchment-dark) 100%)",
            boxShadow:
              "0 10px 0 rgba(0,0,0,.3), 0 20px 40px rgba(0,0,0,.35)",
          }}
        >
          {/* Role header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div
              className="pixel text-[11px]"
              style={{ color: "var(--ink)" }}
            >
              Trainee – Manufacturing &amp; Formulation · July 2024 – June 2025
            </div>

            <span
              className="pixel text-[8px] px-2.5 py-1.5 rounded"
              style={{
                color: "var(--parchment)",
                background: "var(--ocean-dark)",
              }}
            >
              Internal Industrial Deployment
            </span>
          </div>

          <p
            className="text-[13px] leading-[1.7] mb-8"
            style={{ color: "var(--ink-soft)", opacity: 0.85 }}
          >
            My official role was in Manufacturing &amp; Formulation. The
            GenAI/RAG and anomaly-detection work below was developed as part of
            that role, supporting plant operations.
          </p>

          {/* System flow */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
            role="img"
            aria-label="Industrial AI workflow from plant data through anomaly detection and RAG knowledge to root-cause support and operational impact"
          >
            {FLOW_STAGES.map((stage, i) => (
              <div
                key={stage.label}
                className="flex items-center gap-2"
              >
                <div
                  className="flex flex-col items-center justify-center text-center rounded-xl border-2 px-3.5 py-4 w-[128px]"
                  style={{
                    borderColor: "var(--wood)",
                    background: "rgba(255,255,255,.5)",
                  }}
                >
                  <span
                    className="text-xl mb-1.5"
                    aria-hidden="true"
                  >
                    {stage.icon}
                  </span>

                  <span
                    className="pixel text-[8px] leading-[1.6]"
                    style={{ color: "var(--ink)" }}
                  >
                    {stage.label}
                  </span>
                </div>

                {i < FLOW_STAGES.length - 1 && (
                  <span
                    className="pixel text-base"
                    style={{ color: "var(--wood)" }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* What I built */}
          <h4
            className="pixel text-[10px] mb-4"
            style={{ color: "var(--wood-dark)" }}
          >
            WHAT I BUILT
          </h4>

          <div className="space-y-6">
            {/* RAG */}
            <div>
              <h5
                className="font-semibold text-[16px] mb-1.5"
                style={{ color: "var(--ink)" }}
              >
                📚 Knowledge Retrieval for Equipment Troubleshooting
              </h5>

              <p
                className="text-[14px] leading-[1.7]"
                style={{ color: "var(--ink-soft)" }}
              >
                Built a RAG-based document processing system using LangChain
                and pgvector to index and retrieve information from 1,000+
                equipment logs and SOPs.
              </p>

              <p
                className="text-[13px] leading-[1.6] mt-2 font-semibold"
                style={{ color: "var(--ocean-dark)" }}
              >
                Impact: Monthly troubleshooting job cards dropped from 120+
                to ~40 — approximately a 67% reduction.
              </p>
            </div>

            {/* Anomaly detection */}
            <div>
              <h5
                className="font-semibold text-[16px] mb-1.5"
                style={{ color: "var(--ink)" }}
              >
                🚨 Sensor Anomaly Detection + Root-Cause Analysis
              </h5>

              <p
                className="text-[14px] leading-[1.7]"
                style={{ color: "var(--ink-soft)" }}
              >
                Worked with time-series data from 1,400+ sensors across 15
                SCADA and 47 BMS systems to identify abnormal equipment
                behaviour. Connected anomaly findings with the knowledge
                retrieval layer to support root-cause investigation using
                relevant SOPs and historical records.
              </p>

              <p
                className="text-[13px] leading-[1.6] mt-2 font-semibold"
                style={{ color: "var(--ocean-dark)" }}
              >
                Impact: Root-cause analysis time reduced by 55–60%.
              </p>
            </div>

            {/* Evaluation */}
            <div>
              <h5
                className="font-semibold text-[16px] mb-1.5"
                style={{ color: "var(--ink)" }}
              >
                🧪 LLM Evaluation &amp; Reliability
              </h5>

              <p
                className="text-[14px] leading-[1.7]"
                style={{ color: "var(--ink-soft)" }}
              >
                Evaluated RAG outputs against a 100-observation golden
                dataset using RAGAS metrics including faithfulness, context
                recall, and answer relevancy. Used evaluation results to
                identify weaknesses in retrieval and response quality and
                iterate on the LLM workflows.
              </p>
            </div>
          </div>

          {/* Recognition */}
          <div
            className="mt-8 pt-6 border-t"
            style={{ borderColor: "rgba(80,60,30,.2)" }}
          >
            <h4
              className="pixel text-[10px] mb-2"
              style={{ color: "var(--wood-dark)" }}
            >
              RECOGNITION
            </h4>

            <p
              className="text-[14px] leading-[1.7]"
              style={{ color: "var(--ink-soft)" }}
            >
              🏆 Recognized as{" "}
              <strong>&ldquo;Performer of the Month&rdquo;</strong> three
              consecutive times for project delivery.
            </p>
          </div>

          {/* Internal deployment note */}
          <p
            className="text-[12px] leading-[1.7] italic mt-6"
            style={{ color: "var(--ink-soft)", opacity: 0.75 }}
          >
            This was an internal deployment supporting plant operations at
            CIPLA Ltd. The reported metrics are internal measurements rather
            than public product benchmarks.
          </p>
        </div>
      </div>
    </section>
  );
}