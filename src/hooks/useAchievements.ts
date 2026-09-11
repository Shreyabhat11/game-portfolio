"use client";

import { useCallback, useEffect, useState } from "react";
import { achievements } from "@/content/achievements";

const STORAGE_KEY = "sb_achievements";

export function useAchievements() {
  const [unlocked, setUnlocked] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setUnlocked(JSON.parse(raw));
    } catch {
      /* localStorage unavailable — achievements simply won't persist */
    }
  }, []);

  const unlock = useCallback(
    (id: string) => {
      setUnlocked((prev) => {
        if (prev[id]) return prev;
        const next = { ...prev, [id]: true };
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        const found = achievements.find((a) => a.id === id);
        if (found) {
          setToast(`🏆 ACHIEVEMENT UNLOCKED: ${found.name}`);
          window.setTimeout(() => setToast(null), 3600);
        }
        return next;
      });
    },
    []
  );

  return { unlocked, unlock, toast };
}
