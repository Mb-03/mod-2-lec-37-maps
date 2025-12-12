import { Region } from "../types/region.types";

export async function fetchRegions(): Promise<Region[]> {
  const res = await fetch(
    `https://693c1fecb762a4f15c3f88c1.mockapi.io/regions`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to load regions");

  return res.json();
}
