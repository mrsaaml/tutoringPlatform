import { PlatformCard } from "../PlatformCard/PlatformCard"
import styles from "./PlatformCards.module.css"

export const PlatformCards = () => {
  return (
    <div className="platformCards">
      <PlatformCard
        className={styles.blueCard}
        image="./platformIcons/book.svg"
        titleKey="lms"
        desc1Key="lmsDesc1"
        desc2Key="lmsDesc2"
      />

      <PlatformCard
        className={styles.greenCard}
        image="./platformIcons/done.svg"
        titleKey="sat"
        desc1Key="satDesc1"
        desc2Key="satDesc2"
      />

      <PlatformCard
        className={styles.yellowCard}
        image="./platformIcons/language.svg"
        titleKey="ielts"
        desc1Key="ieltsDesc1"
        desc2Key="ieltsDesc2"
      />
    </div>
  )
}