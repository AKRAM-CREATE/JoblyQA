import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unsaveJob as unsaveJobApi } from "../services/apiAuth";
import { toast } from "react-toastify";

export function useUnsaveJob() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (job_id) => unsaveJobApi(job_id),
    onSuccess: (_, job_id) => {
      toast.success("Job removed from saved jobs");

      queryClient.setQueryData(["savedJobs"], (oldData = []) =>
        oldData.filter((job) => job.job_id !== job_id)
      );

      localStorage.setItem("savedJobsChanged", Date.now());
    },
    onError: (error) => {
      toast.error(`Failed to remove job: ${error.message}`);
    },
  });

  return mutation;
}
