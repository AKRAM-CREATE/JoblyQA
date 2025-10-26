import SavedJoblist from "../components/SavedJoblist";

function MyJobs() {
  return (
    <div className="flex flex-col items-center w-full px-4">
      <h3 className="text-xl font-semibold mb-4 mt-4">Saved Jobs</h3>
      <div className="overflow-y-auto h-[70vh] w-[40rem]">
        <SavedJoblist />
      </div>
    </div>
  );
}

export default MyJobs;
