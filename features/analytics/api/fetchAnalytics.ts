import { AnalyticItem } from "../types/stats.types";

export async function fetchAnalytics(): Promise<AnalyticItem[]> {
  const res = await fetch(
    "https://693c1cdbb762a4f15c3f7ceb.mockapi.io/newData",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to load analytics");

  return res.json();
}
