import { useEffect } from "react";
import { useGetSavedJobs } from "../hooks/useGetSavedJobs";
import { useJobProvider } from "../hooks/useJobProvider";
import EasyApplyBtn from "./Easyapplybtn";
import JobDescriptionRenderer from "./JobDescriptionRenderer";
import SaveJob from "./SaveJob";
import SaveJobBtn from "./SaveJobBtn";
import UnSaveJobBtn from "./UnSaveJobBtn";

const cityMap = {
  الدوحة: "Doha",
  الريان: "Al Rayyan",
  الخور: "Al Khor",
  الوكرة: "Al wakra",
};

function SavedJobDetail() {
  const { selectedSavedJob, setSelectedSavedJob } = useJobProvider();
  const { data: savedJobs = [] } = useGetSavedJobs();

  useEffect(() => {
    if (!selectedSavedJob) {
      const storedJob = localStorage.getItem("selectedSavedJob");
      if (storedJob) {
        setSelectedSavedJob(JSON.parse(storedJob));
      }
    }
  }, [selectedSavedJob, setSelectedSavedJob]);

  if (!selectedSavedJob) return null;

  const isSaved = savedJobs.some(
    (job) => job.job_id === selectedSavedJob.job_id
  );
  const cityInEnglish =
    cityMap[selectedSavedJob.job_city] || selectedSavedJob.job_city;

  return (
    <div className="border-2 border-gray-200 rounded-xl px-8 py-4 space-y-4   w-[60rem] ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-3">
          <div className="flex  gap-x-4">
            {selectedSavedJob.employer_logo && (
              <img
                src={selectedSavedJob.employer_logo}
                alt={selectedSavedJob.employer_name + " logo"}
                className="w-6 h-6 object-contain rounded shadow-lg"
              />
            )}
            <p className="text-[17px]  font-semibold ">
              {selectedSavedJob.employer_name}
            </p>
          </div>

          <p className="text-2xl font-sans font-semibold ">
            {selectedSavedJob.job_title}
          </p>
          <div className="flex">
            {selectedSavedJob.job_is_remote ? (
              <p className="text-gray-600 font-sans">Remote</p>
            ) : (
              <p className=" text-gray-500 text-sm font-sans font-medium">
                {cityInEnglish ? `${cityInEnglish}, ` : ""}
                {selectedSavedJob.job_country}
              </p>
            )}

            {selectedSavedJob?.job_min_salary && (
              <p className="text-sm text-gray-600">
                ${selectedSavedJob.job_min_salary} - $
                {selectedSavedJob.job_max_salary}
              </p>
            )}
          </div>
        </div>

        <div className="flex   space-x-2   ml-auto">
          {isSaved ? (
            <UnSaveJobBtn job={selectedSavedJob} />
          ) : (
            <SaveJobBtn job={selectedSavedJob} />
          )}
          <EasyApplyBtn url={selectedSavedJob.job_apply_link} />
        </div>
      </div>

      <div className="border-y-2 py-4 border-gray-200">
        <JobDescriptionRenderer job={selectedSavedJob} />
      </div>

      <div className="flex flex-row items-center gap-x-6 justify-end h-[5rem]">
        <p className="text-lg font-semibold text-gray-700">
          Ready to apply for this job?
        </p>
        <EasyApplyBtn url={selectedSavedJob.job_apply_link} />
      </div>
    </div>
  );
}

export default SavedJobDetail;
