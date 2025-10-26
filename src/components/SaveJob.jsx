import SaveJobBtn from "./SaveJobBtn";
import UnSaveJobBtn from "./UnSaveJobBtn";

function SaveJob({ job, isSaved }) {
  return <>{isSaved ? <SaveJobBtn job={job} /> : <UnSaveJobBtn job={job} />}</>;
}

export default SaveJob;
