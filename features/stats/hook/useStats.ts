import { useQuery } from "@tanstack/react-query";
import { fetchStats } from "../api/fetchStats";

export function useStats() {
    return useQuery({
        queryKey: ["stats"],
        queryFn: fetchStats
    })
}