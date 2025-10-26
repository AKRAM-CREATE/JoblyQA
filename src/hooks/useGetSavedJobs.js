import { useQuery } from "@tanstack/react-query";
import { getSavedJobs } from "../services/apiAuth";

export function useGetSavedJobs() {
  return useQuery({
    queryKey: ["savedJobs"],
    queryFn: getSavedJobs,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: true,
    onError: (error) => {
      console.error("Failed to fetch saved jobs:", error);
    },
  });
}
