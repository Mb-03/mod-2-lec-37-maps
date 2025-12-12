import { useQuery } from "@tanstack/react-query";
import { fetchAnalytics } from "../api/fetchAnalytics";

export function useAnalytics() {
  return useQuery({
    queryKey: ["analytics"],
    queryFn: fetchAnalytics,
  });
}
