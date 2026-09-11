interface AchievementToastProps {
  message: string | null;
}

export function AchievementToast({ message }: AchievementToastProps) {
  if (!message) return null;
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[700]" aria-live="polite">
      <div
        className="toast-in pixel text-[10px] rounded-lg px-[18px] py-3 flex items-center gap-2.5"
        style={{
          color: "var(--ink)",
          background: "linear-gradient(160deg,#fff7de,var(--parchment))",
          border: "3px solid var(--gold)",
          boxShadow: "0 8px 20px rgba(0,0,0,.3)",
        }}
      >
        {message}
      </div>
    </div>
  );
}
