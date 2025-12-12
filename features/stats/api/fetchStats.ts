import { StatItem } from "../types/stats.types";

export async function fetchStats(): Promise<StatItem[]> {
  const res = await fetch(
    "https://693c1cdbb762a4f15c3f7ceb.mockapi.io/charts",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to load stats");

  return res.json();
}
