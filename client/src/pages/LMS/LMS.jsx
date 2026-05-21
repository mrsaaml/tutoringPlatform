import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./LMS.module.css";

export const LMS = () => {
  return (
    <div className={styles.lmsPage}>
      <Navigation />
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className="title">OnePrep Predicted Test 1</h2>
          <p>Timed full-length predicted paper</p>
          <a href="#">
            View <span>⭢</span>
          </a>
        </div>
        <div className={styles.card}>
          <h2 className="title">OnePrep Predicted Test 2</h2>
          <p>Timed full-length predicted paper</p>
          <a href="#">
            View <span>⭢</span>
          </a>
        </div>
        <div className={styles.card}>
          <h2 className="title">OnePrep Predicted Test 3</h2>
          <p>Timed full-length predicted paper</p>
          <a href="#">
            View <span>⭢</span>
          </a>
        </div>
        <div className={styles.card}>
          <h2 className="title">OnePrep Predicted Test 4</h2>
          <p>Timed full-length predicted paper</p>
          <a href="#">
            View <span>⭢</span>
          </a>
        </div>
      </div>
    </div>
  );
};
