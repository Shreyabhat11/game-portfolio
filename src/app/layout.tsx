import type { Metadata } from "next";
import { Press_Start_2P, Lora } from "next/font/google";
import "./globals.css";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const bodyFont = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreya Bhat - GenAI Engineer",
  description:
    "Shreya Bhat - GenAI Engineer building reliable LLM systems, RAG pipelines and agentic AI applications. Portfolio with a treasure-map visual theme.",
  openGraph: {
    title: "Shreya Bhat - GenAI Engineer",
    description:
      "Building reliable LLM systems, RAG pipelines and agentic AI applications.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pixelFont.variable} ${bodyFont.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
