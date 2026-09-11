import { Achievement } from "@/types";

// Purely client-side, for-fun tracking (localStorage only — nothing is
// sent anywhere). See src/hooks/useAchievements.ts.
export const achievements: Achievement[] = [
  { id: "explorer_start", icon: "🗺", name: "Explorer", desc: "Entered the world" },
  { id: "map_reader", icon: "📍", name: "Cartographer", desc: "Opened a journey marker" },
  { id: "first_quest", icon: "⚔", name: "Adventurer", desc: "Opened your first quest" },
  { id: "quest_master", icon: "🏅", name: "Quest Master", desc: "Opened every quest on the board" },
  { id: "archivist", icon: "📜", name: "Archivist", desc: "Viewed the resume scroll" },
  { id: "messenger", icon: "📬", name: "Messenger", desc: "Sent a message to the harbor" },
  { id: "treasure_hunter", icon: "💎", name: "Treasure Hunter", desc: "Found the hidden chest" },
];
