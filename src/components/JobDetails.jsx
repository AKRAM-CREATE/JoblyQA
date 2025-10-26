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

function JobDetails() {
  const { selectedJob } = useJobProvider();
  const { data: savedJobs = [] } = useGetSavedJobs();

  if (!selectedJob) return null;

  const isSaved = savedJobs.some((job) => job.job_id === selectedJob.job_id);
  const cityInEnglish = cityMap[selectedJob.job_city] || selectedJob.job_city;

  return (
    <div className="border-2 border-gray-200 rounded-xl px-8 py-4 space-y-4 h-[80vh] overflow-y-auto w-[45rem] ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-3">
          <div className="flex  gap-x-4">
            {selectedJob.employer_logo && (
              <img
                src={selectedJob.employer_logo}
                alt={selectedJob.employer_name + " logo"}
                className="w-6 h-6 object-contain rounded shadow-lg"
              />
            )}
            <p className="text-[17px]  font-semibold ">
              {selectedJob.employer_name}
            </p>
          </div>

          <p className="text-2xl font-sans font-semibold ">
            {selectedJob.job_title}
          </p>
          <div className="flex">
            {selectedJob.job_is_remote ? (
              <p className="text-gray-600 font-sans">Remote</p>
            ) : (
              <p className=" text-gray-500 text-sm font-sans font-medium">
                {cityInEnglish ? `${cityInEnglish}, ` : ""}
                {selectedJob.job_country}
              </p>
            )}

            {selectedJob?.job_min_salary && (
              <p className="text-sm text-gray-600">
                ${selectedJob.job_min_salary} - ${selectedJob.job_max_salary}
              </p>
            )}
          </div>
        </div>

        <div className="flex   space-x-2   ml-auto">
          {isSaved ? (
            <UnSaveJobBtn job={selectedJob} />
          ) : (
            <SaveJobBtn job={selectedJob} />
          )}
          <EasyApplyBtn url={selectedJob.job_apply_link} />
        </div>
      </div>

      <div className="border-y-2 py-4 border-gray-200">
        <JobDescriptionRenderer job={selectedJob} />
      </div>

      <div className="flex flex-row items-center gap-x-6 justify-end h-[5rem]">
        <p className="text-lg font-semibold text-gray-700">
          Ready to apply for this job?
        </p>
        <EasyApplyBtn url={selectedJob.job_apply_link} />
      </div>
    </div>
  );
}

export default JobDetails;
