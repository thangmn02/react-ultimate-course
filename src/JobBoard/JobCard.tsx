// src/components/jobboard/JobCard.tsx
import type { Job } from "./type";
import styles from "./JobBoard.module.css";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString("vi-VN");
  };

  return (
    <div className={styles.jobCard}>
      <h3 className={styles.jobTitle}>{job.title}</h3>
      <p className={styles.jobInfo}>
        By <strong>{job.by}</strong> • {formatDate(job.time)}
      </p>
      {job.url && (
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Xem chi tiết →
        </a>
      )}
    </div>
  );
}