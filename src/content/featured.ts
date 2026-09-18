import { Quest } from "@/types";
import { profile } from "./profile";

// The 3 projects shown immediately after the hero — the strongest,
// most representative work. Kept separate from the longer project list
// in projects.ts so this trio can get full problem/approach/result
// treatment without cluttering that grid.
//
// repoUrl/demoUrl default to the GitHub profile below as a safe fallback
// (so the buttons are never dead links) — swap in the exact repo/demo URL
// for each project as soon as you have it.
export const featuredProjects: Quest[] = [
  {
    id: "multimodal-financial-docs",
    domain: "Agentic AI · Document Intelligence",
    title: "Multimodal Financial Document Intelligence",
    stack: ["LLaVA", "Qwen-VL", "LangGraph", "CrewAI", "ReAct"],
    problem:
      "Financial institutions process large volumes of dense, multi-page documents (e.g. bank statements). Traditional OCR often struggles with complex layouts, tables and mixed content on the same page.",
    solution: [
      "Used open-source vision-language models (LLaVA, Qwen-VL) to jointly read text, tables, charts, signatures and layout directly from page images, instead of a separate OCR step.",
      "Orchestrated extraction → validation → structuring as a LangGraph pipeline with explicit stages and conditional branching.",
      "Added a CrewAI validation agent (ReAct pattern) that re-checks extracted transactions, totals and flagged anomalies before finalizing output.",
      "Structured the final output into machine-readable JSON (account holder, account number, transactions, credits/debits, anomalies) for downstream use.",
    ],
    outcome:
      "A working pipeline that handles complex financial-document layouts more robustly than a plain OCR + regex approach, with a validation step that catches extraction errors before they reach downstream systems.",
    repoUrl: profile.github,
    // demoUrl: "",
  },
  {
    id: "hallucination-detection",
    domain: "Enterprise AI · LLM Reliability",
    title: "AI Hallucination Detector",
    stack: ["FAISS", "Google Gemini API", "Sentence Transformers", "FastAPI", "Streamlit"],
    problem:
      "LLMs can produce fluent but factually incorrect output, which is a real adoption blocker in domains like healthcare, legal and finance where a wrong answer is costly.",
    solution: [
      "Claim extraction breaks an LLM response into discrete, checkable assertions.",
      "FAISS vector search retrieves the most semantically relevant evidence from a reference knowledge base for each claim.",
      "Cosine similarity between claim and evidence embeddings produces a per-claim trust score, aggregated into an overall response score.",
      "Deployed as a FastAPI service with a Streamlit dashboard for inspecting flagged claims and their supporting (or contradicting) evidence.",
    ],
    outcome:
      "Reached ~87% hallucination-detection accuracy on the evaluation set used, which is enough to usefully flag low-confidence claims for human review rather than blocking on manual fact-checking of every response.",
    repoUrl: profile.github,
    demoUrl: "https://frontend-coral-one-6cme2r1fvt.vercel.app/",
  },
  {
    id: "industrial-rag-anomaly",
    domain: "Industrial AI · CIPLA Ltd",
    title: "Industrial RAG + Anomaly Intelligence",
    stack: ["LangChain", "pgvector", "RAGAS", "SCADA/BMS Data"],
    problem:
      "Plant engineers were manually searching 1,000+ equipment logs and SOPs during troubleshooting, and root-cause analysis across 1,400+ sensors (SCADA + BMS) relied heavily on manual inspection.",
    solution: [
      "Built a RAG system (LangChain + pgvector) over equipment logs and SOPs so engineers could query institutional knowledge directly instead of searching documents manually.",
      "Built a companion anomaly-detection pipeline across 1,400+ sensors (15 SCADA, 47 BMS systems) and linked flagged anomalies to the same retrieval system for faster context lookup.",
      "Tuned retrieval and response quality with prompt engineering, and periodically evaluated the RAG pipeline against a 100-observation golden dataset using RAGAS (faithfulness, context recall, answer relevancy).",
    ],
    outcome:
      "Reduced monthly troubleshooting job cards from 120+ to ~40 (~67% reduction) and cut root-cause analysis time by 55–60%, as measured internally at CIPLA Ltd.",
    internalNote: "Internal deployment at CIPLA Ltd — not a public repository.",
  },
];
