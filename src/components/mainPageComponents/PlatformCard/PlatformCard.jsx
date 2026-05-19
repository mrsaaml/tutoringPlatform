import { useNavigate } from "react-router"
import styles from "./PlatformCard.module.css"
import { useTranslation } from "react-i18next"

export const PlatformCard = ({
  pathTo,
  className,
  image,
  titleKey,
  desc1Key,
  desc2Key,
}) => {
  const nav = useNavigate()

  const { t } = useTranslation()

  return (
    <div className={`${styles.card} ${className}`}>
      <img src={image} alt="" className={styles.cardIcon} />

      <h3>{t(`platforms.${titleKey}`)}</h3>

      <p className={styles.desc1}>
        {t(`platforms.${desc1Key}`)}
      </p>

      <p className={styles.desc2}>
        {t(`platforms.${desc2Key}`)}
      </p>

      <button onClick={()=>nav(pathTo)}>
        Open <span>⭢</span>
      </button>
    </div>
  )
}