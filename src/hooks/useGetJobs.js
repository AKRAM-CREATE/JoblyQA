import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "../services/Firebase";

export function useGetJobs(query = "developer jobs in qatar", page = 1) {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["jobs", query, page],
    queryFn: () => fetchAllJobs(query, page),

    refetchOnWindowFocus: false,
    staleTime: Infinity,
    refetchOnMount: false,
  });

  return { data, isLoading, isError, error, isFetching };
}
