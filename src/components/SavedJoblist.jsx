import { useGetSavedJobs } from "../hooks/useGetSavedJobs";
import Jobitem from "./Jobitem";
import SavedJobItem from "./SavedJobItem";

function SavedJoblist() {
  const { data: savedJobs, isLoading, isError } = useGetSavedJobs();

  if (isLoading) return <div>Loading saved jobs...</div>;
  if (isError) return <div>Failed to load saved jobs</div>;

  return (
    <ul>
      {!savedJobs.length && <p>There is not saved jobs...</p>}
      {savedJobs.map((job, index) => (
        <SavedJobItem item={job} key={`${job.job_id + index}`} />
      ))}
    </ul>
  );
}

export default SavedJoblist;
