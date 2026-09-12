import { Quest } from "@/types";

export const quests: Quest[] = [
  // ─────────────────────────────────────────────
  // 1. LLM ENGINEERING
  // ─────────────────────────────────────────────

  {
    id: "gpt-from-scratch",
    repoUrl: "https://github.com/Shreyabhat11/my-gpt",
    domain: "Deep Learning · LLM Engineering",
    title: "GPT from Scratch - PyTorch",
    stack: [
      "PyTorch",
      "Custom BPE Tokenizer",
      "Transformer",
      "Multi-Head Attention",
    ],
    problem:
      "Using pretrained models alone does not provide first-principles understanding of tokenization, attention, training dynamics, and autoregressive generation.",
    solution: [
      "Implemented a custom Byte-Pair Encoding tokenizer and subword vocabulary.",
      "Built causal multi-head self-attention, embeddings, Transformer blocks, and autoregressive next-token prediction.",
      "Built a structured training pipeline using AdamW, cosine learning-rate scheduling, warmup, checkpointing, and resumable training.",
      "Implemented evaluation and inference with temperature, top-k, top-p, and repetition-penalty controls.",
    ],
    outcome:
      "Built an 825K-parameter GPT-style model achieving 2.57 validation loss and 13.13 perplexity, with automated tests across tokenization, attention, training, evaluation, and inference.",
  },


  // ─────────────────────────────────────────────
  // 2. RAG / KNOWLEDGE SYSTEMS
  // ─────────────────────────────────────────────

  {
    id: "system-design-rag",
    repoUrl: "https://github.com/Shreyabhat11/rag-chatbot-navagurukul-submission",
    domain: "RAG · Developer Tools · Knowledge Systems",
    title: "System Design RAG Assistant",
    stack: [
      "Python",
      "Qdrant",
      "Sentence Transformers",
      "LLM",
      "PDF Processing",
    ],
    problem:
      "Large system-design and software-engineering books are difficult to search conversationally, while ungrounded LLM responses can introduce incorrect technical information.",
    solution: [
      "Processed system-design and software-engineering PDF documents into searchable chunks.",
      "Generated embeddings using open-source embedding models and indexed them in Qdrant.",
      "Retrieved relevant passages for each user query before generation.",
      "Designed the generation layer to ground responses in retrieved source passages.",
    ],
    outcome:
      "Built a self-hostable technical knowledge assistant capable of answering engineering questions with retrieved source context.",
  },


  // ─────────────────────────────────────────────
  // 3. AGENTIC AI
  // ────────────────────────────────────────────


  {
    id: "ai-mom",
    repoUrl: "https://github.com/Shreyabhat11/MOM_generator",
    domain: "Voice AI · NLP · Enterprise Productivity",
    title: "AI MOM - Meeting Minutes Generator",
    stack: [
      "Whisper",
      "Python",
      "FastAPI",
      "LLMs",
      "NLP",
    ],
    problem:
      "Manually transcribing meetings and creating structured minutes, decisions, and action items is repetitive and time-consuming.",
    solution: [
      "Built an audio-processing pipeline using speech-to-text.",
      "Processed meeting transcripts with NLP and LLM-based summarization.",
      "Extracted structured meeting information including decisions and action items.",
      "Designed output around practical meeting documentation rather than a generic summary.",
    ],
    outcome:
      "Automated the path from meeting recording to structured minutes, action items, and key decisions.",
  },

  // ─────────────────────────────────────────────
  // 4. NLP / DEVELOPER TOOLING
  // ─────────────────────────────────────────────

  {
    id: "askql",
    repoUrl: "https://github.com/Shreyabhat11/askql-level3",
    demoUrl: "https://effortless-taffy-18134a.netlify.app/",
    domain: "NLP · Developer Tooling · Database Intelligence",
    title: "AskQL - Natural Language to SQL",
    stack: [
      "Python",
      "spaCy",
      "FastAPI",
      "React",
      "LLM Integration",
      "SQL",
    ],
    problem:
      "Business users often understand the question they want answered but lack the SQL knowledge required to retrieve the data themselves.",
    solution: [
      "Built a multi-stage NLP pipeline for intent classification, entity extraction, conditions, and aggregation recognition.",
      "Mapped natural-language references to database tables and columns using schema metadata.",
      "Combined reliable rule-based handling with LLM-enhanced generation for more complex queries.",
      "Validated generated SQL against schema information before execution.",
    ],
    outcome:
      "Built a full-stack natural-language-to-SQL system designed to reduce the bottleneck between business questions and database analysis.",
  },

  {
    id: "asr-shootout",
    repoUrl: "https://github.com/Shreyabhat11/automatic-speech-recognition",
    domain: "Speech AI · NLP · Production Evaluation",
    title: "ASR Shootout - Indian Conversational Speech",
    stack: [
      "Whisper",
      "Google STT",
      "Deepgram",
      "JiWER",
      "Pandas",
    ],
    problem:
      "Traditional ASR benchmarks based only on WER do not always reveal how models behave on noisy, conversational, multilingual speech or important named entities.",
    solution: [
      "Benchmarked six ASR systems using real-world Hindi/Hinglish conversational speech.",
      "Evaluated WER and CER alongside Bangalore locality entity accuracy.",
      "Measured inference latency to expose accuracy-versus-speed trade-offs.",
      "Built an automated benchmark pipeline covering audio loading, inference, metrics, entity evaluation, and visualization.",
    ],
    outcome:
      "Produced production-oriented model-selection guidance showing that the best ASR system depends on accuracy, entity preservation, latency, and deployment constraints.",
  },

  // ─────────────────────────────────────────────
  // 5. MLOPS
  // ─────────────────────────────────────────────

  {
    id: "fraud-mlops",
    repoUrl: "https://github.com/Shreyabhat11/fraud-mlops-platform",
    domain: "MLOps · Fraud Detection · Production ML",
    title: "Fraud Detection MLOps Platform",
    stack: [
      "Python",
      "LightGBM",
      "XGBoost",
      "MLflow",
      "Docker",
      "FastAPI",
    ],
    problem:
      "Fraud models require more than model training: reproducibility, experiment tracking, deployment, monitoring, and reliable inference are essential for production use.",
    solution: [
      "Built an end-to-end fraud detection ML pipeline.",
      "Used MLflow for experiment tracking and model management.",
      "Containerized the application and exposed model inference through APIs.",
      "Designed the project around reproducible ML workflows and production deployment concerns.",
    ],
    outcome:
      "Demonstrated an end-to-end MLOps workflow for an imbalanced fraud-detection problem rather than treating model training as the complete system.",
  },

  {
    id: "fake-news-drift",
    repoUrl: "https://github.com/Shreyabhat11/fake-news-mlops",
    domain: "MLOps · Production AI · Model Monitoring",
    title: "Fake News Trend Drift Detector",
    stack: [
      "FastAPI",
      "MLflow",
      "DVC",
      "Evidently AI",
      "Prefect",
      "Grafana",
      "Docker",
    ],
    problem:
      "A deployed model can silently degrade when production data changes, without an automatic mechanism to detect drift or trigger retraining.",
    solution: [
      "Built a five-stage pipeline covering data, features, training, inference, and monitoring.",
      "Used DVC for data versioning and MLflow for experiment tracking and model management.",
      "Implemented data, concept, and confidence drift monitoring with Evidently AI.",
      "Added automated retraining through Prefect when the drift threshold is exceeded.",
      "Added canary deployment, shadow-mode inference, model rollback, and hot model reload.",
    ],
    outcome:
      "Built a production-oriented MLOps demonstration with automated drift detection, retraining, observability, and CI/CD.",
  },

  // ─────────────────────────────────────────────
  // 6. SYNTHETIC DATA / GENERATIVE ML
  // ─────────────────────────────────────────────

  {
    id: "synthetic-data",
    repoUrl: "https://github.com/Shreyabhat11/Synthetic_data_generation",
    domain: "Generative AI · Synthetic Data · Privacy",
    title: "Synthetic Data Generation Platform",
    stack: [
      "CTGAN",
      "SDV",
      "Pandas",
      "Scikit-learn",
      "FastAPI",
      "TypeScript",
    ],
    problem:
      "Real datasets can be difficult to share or use because of privacy constraints, while synthetic data must still preserve useful statistical relationships.",
    solution: [
      "Built a CTGAN-based pipeline for generating synthetic tabular datasets.",
      "Validated generated data against the original dataset using statistical tests.",
      "Used KS-test and TVD metrics to evaluate distribution similarity.",
      "Designed an API-oriented workflow for dataset upload, generation, validation, and export.",
    ],
    outcome:
      "Built a privacy-oriented synthetic data workflow that evaluates generated datasets quantitatively rather than relying only on visual inspection.",
  },

  // ─────────────────────────────────────────────
  // 7. FINTECH
  // ─────────────────────────────────────────────

  {
    id: "investment-platform",
    repoUrl: "https://github.com/Shreyabhat11/financial_portfolio",
    domain: "FinTech · Live Market Systems",
    title: "AI-Powered Investment Portfolio Platform",
    stack: [
      "Next.js",
      "PostgreSQL",
      "WebSockets",
      "Zerodha Kite Connect",
      "JWT",
    ],
    problem:
      "Retail investors often lack integrated tools for live portfolio tracking, market analysis, alerts, and portfolio-level insights.",
    solution: [
      "Integrated Zerodha Kite Connect for holdings synchronization.",
      "Used WebSockets for live portfolio value and P&L updates.",
      "Built technical-analysis signals using indicators including RSI, MACD, and moving averages.",
      "Added PostgreSQL persistence, Alembic migrations, JWT authentication, and role-based access control.",
      "Added portfolio analytics, AI insights, and configurable alerts.",
    ],
    outcome:
      "Built a production-oriented full-stack FinTech platform combining live market data, portfolio management, analytics, authentication, and AI-assisted investment insights.",
  },

  // ─────────────────────────────────────────────
  // 8. HEALTHCARE / DECISION SYSTEMS
  // ─────────────────────────────────────────────

  {
    id: "ai-symptom-checker",
    repoUrl: "https://github.com/Shreyabhat11/health_prediction_app",
    domain: "Healthcare AI · Clinical Decision Support",
    title: "AI Symptom Checker",
    stack: [
      "Python",
      "Scikit-learn",
      "NLP",
      "Random Forest",
      "Gradient Boosting",
    ],
    problem:
      "Users often have difficulty interpreting symptoms or deciding what level of medical attention may be appropriate before consulting a professional.",
    solution: [
      "Processed natural-language symptom inputs and normalized symptom terminology.",
      "Used ensemble ML models for multi-class disease prediction.",
      "Converted predictions into structured preventive and lifestyle recommendations.",
      "Added urgency-oriented guidance and red-flag information.",
    ],
    outcome:
      "Demonstrated a healthcare decision-support workflow that extends beyond prediction into actionable, structured guidance.",
  },

  {
    id: "health-insurance-fraud",
    repoUrl: "https://github.com/Shreyabhat11/Healthcare-Fraud-Detection",
    domain: "Healthcare · Fraud Detection · ML",
    title: "Health Insurance Fraud Detection System",
    stack: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "Machine Learning",
    ],
    problem:
      "Insurance fraud can involve subtle patterns across claims, providers, patients, and transaction attributes that are difficult to identify through simple rules.",
    solution: [
      "Prepared structured insurance data for machine-learning analysis.",
      "Applied classification techniques to identify suspicious claims.",
      "Focused evaluation on fraud-sensitive performance rather than accuracy alone.",
      "Used feature analysis to identify signals useful for risk investigation.",
    ],
    outcome:
      "Demonstrated how machine learning can support insurance-fraud screening and risk-analysis workflows.",
  },

  {
    id: "structural-defect",
    repoUrl: "https://github.com/Shreyabhat11/structural-defect",
    domain: "Computer Vision · Infrastructure Monitoring",
    title: "Structural Defect Analyzer",
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "CNN",
      "Transfer Learning",
    ],
    problem:
      "Manual infrastructure inspection is expensive and time-consuming, particularly when cracks and other visible defects must be identified across large structures.",
    solution: [
      "Built an image-based defect classification pipeline.",
      "Used CNN-based image classification for structural defect detection.",
      "Applied OpenCV for image preprocessing and analysis.",
      "Explored transfer-learning architectures for improved visual feature extraction.",
    ],
    outcome:
      "Demonstrated a computer-vision approach for automated infrastructure inspection and defect screening.",
  },

  // ─────────────────────────────────────────────
  // 9. CLASSICAL ML
  // ─────────────────────────────────────────────

  {
    id: "credit-card-fraud",
    repoUrl: "https://github.com/Shreyabhat11/Credit-card-fraud-detection",
    domain: "Financial Risk Analytics · ML · Anomaly Detection",
    title: "Credit Card Fraud Detection System",
    stack: [
      "XGBoost",
      "Scikit-learn",
      "SMOTE",
      "Pandas",
      "Matplotlib",
    ],
    problem:
      "Fraudulent transactions represent a very small percentage of transactions, making raw accuracy misleading for fraud detection.",
    solution: [
      "Used SMOTE and majority-class handling to address severe class imbalance.",
      "Selected XGBoost for its effectiveness on structured tabular data.",
      "Compared models using Precision-Recall AUC, F1, MCC, and ROC-AUC.",
      "Used feature importance to provide interpretable signals for risk analysis.",
    ],
    outcome:
      "Built an imbalanced-classification system designed around fraud-specific evaluation and real-time transaction-scoring considerations.",
  },

  {
    id: "resume-skill-matcher",
    repoUrl: "https://github.com/Shreyabhat11/resume-matcher",
    domain: "NLP · Recommendation · Recruitment AI",
    title: "Resume Skill Matcher",
    stack: [
      "Python",
      "NLP",
      "TF-IDF",
      "Sentence Transformers",
      "Similarity Scoring",
    ],
    problem:
      "Recruiters and applicants need a consistent way to compare resume skills with job requirements without relying only on keyword matching.",
    solution: [
      "Extracted relevant skills and concepts from resume and job-description text.",
      "Used NLP and semantic similarity techniques to compare candidate capabilities with requirements.",
      "Generated a structured skill-match view to highlight relevant and missing areas.",
      "Designed the workflow around explainable matching rather than a single opaque score.",
    ],
    outcome:
      "Built an NLP-based recruitment-assistance workflow for identifying alignment between resumes and job requirements.",
  },

  // ─────────────────────────────────────────────
  // 10. DATA ENGINEERING / MONITORING
  // ─────────────────────────────────────────────

  {
    id: "data-quality",
    repoUrl: "https://github.com/Shreyabhat11/Data_quality_pipeline",
    domain: "Data Engineering · Monitoring · Analytics",
    title: "Data Quality & Pipeline Monitoring Dashboard",
    stack: [
      "Python",
      "Pandas",
      "SQL",
      "Data Quality Checks",
      "Power BI",
    ],
    problem:
      "Data pipelines can produce incomplete, inconsistent, or structurally incorrect datasets without providing clear visibility into the health of incoming data.",
    solution: [
      "Implemented automated checks for missing values, distribution changes, and schema-related issues.",
      "Tracked data-quality signals across pipeline inputs.",
      "Converted quality measurements into interpretable health indicators.",
      "Built a Power BI dashboard for monitoring data-quality trends and anomalies.",
    ],
    outcome:
      "Built a monitoring workflow that makes data-quality degradation visible through measurable indicators and dashboard-based reporting.",
  },
];

  // ─────────────────────────────────────────────
  // 11. ANALYTICS
  // ─────────────────────────────────────────────

//   {
//     id: "telecom-churn",
//     repoUrl: "https://github.com/Shreyabhat11/Telecom-customer-churn-EDA",
//     domain: "Telecommunications · ML · Business Analytics",
//     title: "Telecom Customer Churn Analysis",
//     stack: [
//       "SQL",
//       "Pandas",
//       "Gradient Boosting",
//       "Power BI",
//     ],
//     problem:
//       "Understanding which customers are likely to churn can help organizations focus retention efforts on higher-risk segments.",
//     solution: [
//       "Combined customer usage, billing, and service-interaction data for analysis.",
//       "Engineered behavioral and customer-value features.",
//       "Built a Gradient Boosting churn model.",
//       "Created a Power BI dashboard to surface churn trends and at-risk customer segments.",
//     ],
//     outcome:
//       "Identified stronger churn concentration among month-to-month customers and during earlier stages of the customer lifecycle.",
//   },

//   {
//     id: "netflix-analysis",
//     domain: "Data Analytics · Business Intelligence",
//     title: "Netflix Data Analysis",
//     stack: [
//       "Python",
//       "Pandas",
//       "SQL",
//       "Matplotlib",
//       "Power BI",
//     ],
//     problem:
//       "Large entertainment catalogs contain patterns across genres, release years, countries, and content types that are difficult to interpret from raw records.",
//     solution: [
//       "Cleaned and explored Netflix catalog data.",
//       "Analyzed content distribution across genres, countries, and release periods.",
//       "Used visual analytics to identify trends and content patterns.",
//       "Presented findings through business-oriented visualizations.",
//     ],
//     outcome:
//       "Built an exploratory analytics project demonstrating data cleaning, SQL/Pandas analysis, visualization, and business insight generation.",
//   },

//   // ─────────────────────────────────────────────
//   // 12. RECOMMENDATION SYSTEMS
//   // ─────────────────────────────────────────────

//   {
//     id: "movie-recommender",
//     repoUrl: "https://github.com/Shreyabhat11/Movie_recommendation",
//     domain: "Recommendation Systems · NLP",
//     title: "Movie Recommendation System",
//     stack: [
//       "TF-IDF",
//       "Cosine Similarity",
//       "SVD",
//       "Scikit-learn",
//     ],
//     problem:
//       "Large movie catalogs make it difficult for users to discover content that matches their interests.",
//     solution: [
//       "Built content-based recommendations using TF-IDF and cosine similarity.",
//       "Used metadata such as genre, director, cast, and plot information.",
//       "Implemented collaborative filtering with SVD matrix factorization.",
//       "Combined content and collaborative approaches into a hybrid recommendation strategy.",
//     ],
//     outcome:
//       "Demonstrated both content-based and collaborative recommendation techniques, including cold-start considerations.",
//   },
// ];