import React, { useEffect, useRef, useState } from "react";
import FullPageSpinner from "../components/FullPageSpinner";
import JobDetails from "../components/JobDetails";
import Joblist from "../components/Joblist";
import SearchBar from "../components/SearchBar";
import { useGetJobs } from "../hooks/useGetJobs";

function Home() {
  const { isLoading } = useGetJobs();

  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="md:space-y-8">
      {isLoading && <FullPageSpinner />}

      <div ref={headerRef}>
        <div className="flex items-center justify-center py-5 border-b-1 border-gray-400">
          <SearchBar />
        </div>
      </div>

      <div className="md:px-45 flex gap-x-10">
        <Joblist />

        <div className="sticky self-start" style={{ top: headerHeight + 2 }}>
          <JobDetails />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);
