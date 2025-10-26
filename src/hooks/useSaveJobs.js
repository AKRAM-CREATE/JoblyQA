import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveJob as saveJobApi } from "../services/apiAuth";
import { toast } from "react-toastify";

export function useSaveJobs() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (job) => saveJobApi(job),
    onSuccess: (data) => {
      toast.success("Job Saved Successfully");

      if (!data) return;

      queryClient.setQueryData(["savedJobs"], (oldData = []) => {
        return [...oldData, data.data];
      });

      localStorage.setItem("savedJobsChanged", Date.now());
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });

  return mutation;
}
