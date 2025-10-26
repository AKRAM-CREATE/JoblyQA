import { FaBookmark } from "react-icons/fa";
import { useUnsaveJob } from "../hooks/useUnsaveJob";

function UnSaveJobBtn({ job }) {
  const { mutate: unsaveJob } = useUnsaveJob();

  function handleUnSaveJob() {
    unsaveJob(job.job_id);
  }
  return (
    <button className="h-fit cursor-pointer w-fit" onClick={handleUnSaveJob}>
      <FaBookmark size={24} color="gray" className="hidden  md:inline-block" />
    </button>
  );
}

export default UnSaveJobBtn;
