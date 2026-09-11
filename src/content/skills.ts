import { SkillCategory } from "@/types";

// Trimmed to the skills that matter most for a GenAI Engineer role.
// Prioritized per resume + portfolio: Python, SQL, PyTorch, LLMs, RAG,
// LangChain, LangGraph, vector databases, FastAPI, Docker, AWS,
// MLflow/RAGAS. Everything else genuinely used but secondary lives in
// `additionalSkills` below as a single low-emphasis line rather than its
// own category.
export const skillCategories: SkillCategory[] = [
  { name: "Languages", icon: "💻", skills: ["Python", "SQL","C","Java"] },
  { name: "GenAI & LLM Engineering", icon: "✨", skills: ["LLMs", "RAG", "LangChain", "LangGraph", "Vector Databases (FAISS / pgvector)", "Hugging Face Transformers"] },
  { name: "Machine Learning", icon: "📈", skills: ["PyTorch", "Scikit-learn", "XGBoost"] },
  { name: "Deployment & MLOps", icon: "🛠️", skills: ["FastAPI", "Docker", "AWS", "MLflow", "RAGAS"] },
];

export const additionalSkills: string[] = [
  "PostgreSQL", "Git / GitHub", "Pandas / NumPy", "CrewAI", "ReAct", "Streamlit", "Power BI",
];
