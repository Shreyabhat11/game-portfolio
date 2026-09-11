import { Profile } from "@/types";

// Source of truth: ShreyaBhat.pdf (resume) + Shreya_Bhat_Portfolio_v4.docx
// Update this file to change the Home section — no component edits needed.
export const profile: Profile = {
  name: "Shreya Bhat",
  role: "GenAI Engineer",
  // Exact hero subtitle, shown large and prominent under the name/role.
  tagline: "Building reliable LLM systems, RAG pipelines and agentic AI applications.",
  summary:
    "Hands-on experience building LLM-powered pipelines, agentic workflows, and multimodal document-processing systems — with a focus on RAG, evaluation (RAGAS), and applying GenAI to real operational problems.",
  location: "Bangalore, India",
  email: "shreyabhat545@gmail.com",
  phone: "+91 9380040180",
  github: "https://github.com/Shreyabhat11",
  // Checked the resume PDF's embedded hyperlinks directly — it has links
  // for email, GitHub, and the portfolio site, but no LinkedIn URL at all
  // (the "LinkedIn" text in the header isn't a live link in the PDF).
  // Left unset rather than guessing — set this once you have the real URL.
  linkedin: "https://www.linkedin.com/in/shreyabhat11/",
  // Add a photo at public/assets/profile.jpg (or point this at another
  // URL/CDN) to show your portrait on the Home section. Left unset here —
  // no photo was provided in the source materials.
  photoUrl: "/assets/profile.jpg",
};
