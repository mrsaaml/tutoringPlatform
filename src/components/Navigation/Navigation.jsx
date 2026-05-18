import styles from "./Navigation.module.css"
import { useTranslation } from "react-i18next"

export const Navigation = () => {
  const { t, i18n } = useTranslation()

  return (
    <nav className={styles.nav}>
      <div className={styles.logoFlex}>
        <img src="./logoIcon.png" alt="" className={styles.logoIcon} />
        <div className={styles.logoTitle}>
          {t("nav.title")}
        </div>
      </div>

      <div className={styles.navElements}>
        <div className={styles.navLinks}>
          <a href="#platforms">{t("nav.platforms")}</a>
          <a href="#statistics">{t("nav.stats")}</a>
          <a href="#opportunities">{t("nav.opportunities")}</a>
          <a href="#contact">{t("nav.contact")}</a>
        </div>

        <div className={styles.langChanger}>
          <div
            className={`${styles.lang} ${
              i18n.language === "ru" ? styles.active : ""
            }`}
            onClick={() => i18n.changeLanguage("ru")}
          >
            RU
          </div>

          <div
            className={`${styles.lang} ${
              i18n.language === "en" ? styles.active : ""
            }`}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </div>
        </div>
      </div>
    </nav>
  )
}