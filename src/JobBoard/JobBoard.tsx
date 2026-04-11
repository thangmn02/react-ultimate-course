// src/components/jobboard/JobBoard.tsx
import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import type { Job } from "./type";
import styles from "./JobBoard.module.css";

const JOBS_PER_PAGE = 6;

export default function JobBoard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [allJobIds, setAllJobIds] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

const loadJobs = async (ids: number[]) => {
  setLoading(true);

  const jobList: Job[] = [];
  for (const id of ids) {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const job = await res.json();
    jobList.push(job);
  }

  setJobs((prev) => [...prev, ...jobList]);
  setLoading(false);
};

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then((res) => res.json())
      .then((ids: number[]) => {
        setAllJobIds(ids);
        loadJobs(ids.slice(0, JOBS_PER_PAGE));
      });
  }, []);

  const loadMore = () => {
    const nextStart = page * JOBS_PER_PAGE;
    const nextIds = allJobIds.slice(nextStart, nextStart + JOBS_PER_PAGE);

    if (nextIds.length > 0) {
      loadJobs(nextIds);
      setPage(page + 1);
    } else {
      setHasMore(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Jobs Board</h1>

      <div className={styles.jobList}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={loadMore}
          disabled={loading}
          className={styles.loadButton}
        >
          {loading ? "Đang tải..." : "Load more jobs"}
        </button>
      )}
    </div>
  );
}