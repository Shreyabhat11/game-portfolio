export interface JourneyMilestone {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  date: string;
  details: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Quest {
  id: string;
  domain: string;
  title: string;
  stack: string[];
  problem: string;
  solution: string[];
  outcome: string;
  /** Link to the project's repository. Optional — the "View Repo" button
   * only renders when this is set. */
  repoUrl?: string;
  /** Link to a live/deployed demo, if one exists. Optional — the "Live
   * Demo" button only renders when this is set. */
  demoUrl?: string;
  /** For work with no public repo/demo (e.g. an internal company system).
   * Shown as a small badge instead of link buttons when set. */
  internalNote?: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin?: string;
  /** Path or URL to a portrait photo shown on the Home section, inside a
   * faded circular frame. Add a real image at public/assets/profile.jpg
   * (or point this at another URL) — omitted gracefully if not set. */
  photoUrl?: string;
}

export interface Achievement {
  id: string;
  icon: string;
  name: string;
  desc: string;
}