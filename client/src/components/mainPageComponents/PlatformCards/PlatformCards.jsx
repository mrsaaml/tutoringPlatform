import { PlatformCard } from "../PlatformCard/PlatformCard";
import styles from "./PlatformCards.module.css";

export const PlatformCards = () => {
  return (
    <div className="platformCards">
      <PlatformCard
        pathTo={"/lms"}
        className={styles.blueCard}
        image="./platformIcons/book.svg"
        titleKey="platforms.lmsTitle"
        desc1Key="platforms.lmsDesc1"
        desc2Key="platforms.lmsDesc2"
      />

      <PlatformCard
        pathTo={"/questionBank"}
        className={styles.greenCard}
        image="./platformIcons/done.svg"
        titleKey="platforms.satTitle"
        desc1Key="platforms.satDesc1"
        desc2Key="platforms.satDesc2"
      />

      {/* <PlatformCard
        pathTo={'/questionBank'}
        className={styles.yellowCard}
        image="./platformIcons/language.svg"
        titleKey="ielts"
        desc1Key="ieltsDesc1"
        desc2Key="ieltsDesc2"
      /> */}
    </div>
  );
};
