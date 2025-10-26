import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export function StorageSync() {
  const queryClient = useQueryClient();

  useEffect(() => {
    function handleStorageChange(e) {
      if (e.key === "savedJobsChanged") {
        queryClient.invalidateQueries(["savedJobs"]);
      }
    }

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [queryClient]);

  return null;
}
