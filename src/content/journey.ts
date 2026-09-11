import { JourneyMilestone } from "@/types";

// Trimmed to the milestones that are genuinely distinct on a timeline —
// full detail on the CIPLA work lives in the Experience section, and
// project-level detail lives in Featured Projects / More Projects, so
// this stays a short chronology rather than repeating either.
export const journey: JourneyMilestone[] = [
  {
    id: "origin",
    icon: "🎓",
    title: "Origin - Education",
    subtitle: "B.E. Electronics & Instrumentation · Bangalore Institute of Technology",
    date: "Nov 2020 - May 2024",
    details: [
      "B.E. in Electronics and Instrumentation Engineering, CGPA 8.5/10.0, Bangalore Institute of Technology, Bengaluru.",
      "Core subjects: Signal Processing, Control Systems, Embedded Systems, Data Structures, Engineering Mathematics.",
    ],
  },
  {
    id: "forge",
    icon: "🏭",
    title: "The Forge - Industrial AI Work @ CIPLA Ltd",
    subtitle: "Trainee – Data Scientist, Manufacturing & Formulation",
    date: "July 2024 - June 2025",
    details: [
      "Official role: Trainee – Manufacturing & Formulation. Alongside that role, worked on RAG and anomaly-detection systems applied to plant operations.",
      "Full breakdown - architecture, metrics, scope - is in the Experience section above.",
    ],
  },
  {
    id: "skill-development",
    icon: "🧠",
    title: "Skill Development - PGP in Data Science, GenAI Specialization",
    subtitle: "Great Learning · In Progress",
    date: "June 2025 - May 2026",
    details: [
      "Coursework: Python, SQL, Deep Learning, NLP, MLOps, LLM Fine-tuning, Prompt Engineering, Model Deployment, Cloud Platforms.",
    ],
  },
  {
    id: "achievements",
    icon: "🏆",
    title: "Recognition",
    subtitle: "Noted along the way",
    date: "2024 - 2025",
    details: [
      '"Performer of the Month" - CIPLA Ltd, three consecutive times, for consistent delivery on the RAG and anomaly-detection work described above.',
    ],
  },
];
