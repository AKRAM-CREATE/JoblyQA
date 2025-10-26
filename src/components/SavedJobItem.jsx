import { useEffect, useState } from "react";
import { getJobPostedTime } from "../helper";

import EasyApplyBtn from "./Easyapplybtn";
import { useJobProvider } from "../hooks/useJobProvider";

const cityMap = {
  الدوحة: "Doha",
  الريان: "Al Rayyan",
  الخور: "Al Khor",
  الوكرة: "Al Wakra",
};

function SavedJobItem({ item }) {
  const { setSelectedSavedJob } = useJobProvider();
  const cityInEnglish = cityMap[item.job_city] || item.job_city;

  const [postedTime, setPostedTime] = useState("");

  function handleClick() {
    setSelectedSavedJob(item);
    localStorage.setItem("selectedSavedJob", JSON.stringify(item));
    window.open("/savedjobdetail", "_blank", "noopener,noreferrer");
  }

  useEffect(() => {
    async function fetchTime() {
      const time = await getJobPostedTime(
        item.job_posted_at_datetime_utc || item.job_posted_at
      );
      setPostedTime(time);
    }
    fetchTime();
  }, [item]);

  return (
    <li
      className={`w-full grid grid-rows-[auto_1fr_auto] gap-y-2 p-2 py-4 cursor-pointer  hover:bg-gray-100`}
      onClick={handleClick}
    >
      <div className="flex gap-x-3 items-center">
        {item.employer_logo && (
          <img
            src={item.employer_logo}
            alt={item.employer_name + " logo"}
            className="w-6 h-6 object-contain rounded shadow-lg"
          />
        )}
        <span className="text-[12px] text-gray-600 font-semibold">
          {item.employer_name}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-gray-800 text-[15px] font-bold">{item.job_title}</p>
        <p className="text-[12px] text-gray-700 font-semibold">
          {cityInEnglish ? `${cityInEnglish}, ` : ""}
          {item.job_country}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <EasyApplyBtn url={item.job_apply_link} />
        <span className="text-[13px] text-gray-400 font-mono">
          {postedTime || ""}
        </span>
      </div>
    </li>
  );
}

export default SavedJobItem;
