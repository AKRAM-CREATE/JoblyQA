import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useSaveJobs } from "../hooks/useSaveJobs";

function SaveJobBtn({ job }) {
  const { mutate: saveJob } = useSaveJobs();

  function handleSaveJob() {
    saveJob(job);
  }

  return (
    <button className="h-fit cursor-pointer w-fit" onClick={handleSaveJob}>
      <FaRegBookmark
        size={24}
        color="gray"
        className="hidden md:inline-block"
      />
    </button>
  );
}

export default SaveJobBtn;
