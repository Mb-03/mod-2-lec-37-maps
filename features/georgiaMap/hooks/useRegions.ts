import { useQuery } from "@tanstack/react-query";
import { fetchRegions } from "../api/fetchRegion";
import { Region } from "../types/region.types";

export function useRegions() {
  return useQuery<Region[]>({
    queryKey: ["georgia-regions"],
    queryFn: fetchRegions,
  });
}
