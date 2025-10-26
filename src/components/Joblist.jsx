import { useEffect, useState, useRef } from "react";
import { useGetJobs } from "../hooks/useGetJobs";
import Jobitem from "./Jobitem";
import Spinner from "./Spinner";
import { useJobProvider } from "../hooks/useJobProvider";

function Joblist() {
  const { searchQuery } = useJobProvider();
  const [page, setPage] = useState(1);
  const [allJobs, setAllJobs] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);

  const prevQueryRef = useRef("");

  const query = searchQuery?.trim()
    ? `${searchQuery} jobs in qatar`
    : "jobs in qatar";

  const { data, error, isLoading } = useGetJobs(query, page);

  useEffect(() => {
    if (data) {
      if (prevQueryRef.current === query) {
        setAllJobs((prev) => (page === 1 ? data : [...prev, ...data]));
      } else {
        setAllJobs(data);
      }
      prevQueryRef.current = query;
      setLoadingMore(false);
    }
  }, [data, page, query]);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPoint = document.documentElement.scrollHeight - 100;

      if (scrollPosition >= bottomPoint && !loadingMore) {
        setLoadingMore(true);
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadingMore]);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className="min-w-[25rem]">
      {allJobs.length === 0 && isLoading ? (
        <Spinner />
      ) : (
        allJobs?.map((job, index) => (
          <Jobitem
            item={job}
            key={`${job.job_id}-${index}`}
            index={index}
            total={allJobs.length}
          />
        ))
      )}
      {loadingMore && <Spinner />}
    </ul>
  );
}

export default Joblist;
