export function SiteFooter() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--parchment)", textAlign: "center", padding: "34px 20px", fontSize: 13 }}>
      <div className="pixel text-[9px] mb-2.5" style={{ color: "var(--gold-bright)" }}>
        THE END... OR THE START OF SOMETHING NEW?
      </div>
      <div>© {new Date().getFullYear()} Shreya Bhat - built as a hand-crafted 2D adventure portfolio.</div>
    </footer>
  );
}
