import { useEffect, useState } from "react";
import { JobContext } from "./JobContext";
import { useGetJobs } from "../hooks/useGetJobs";

export const JobProvider = ({ children }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedSavedJob, setSelectedSavedJob] = useState(null);
  const { data, isLoading } = useGetJobs();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedJob(data[0]);
    }
  }, [data]);

  return (
    <JobContext.Provider
      value={{
        selectedJob,
        setSelectedJob,
        isLoading,
        setSearchQuery,
        searchQuery,
        setSelectedSavedJob,
        selectedSavedJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
