import { Link } from "react-router";
import styles from "./Navigation.module.css";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className={styles.nav}>
      <Link to="/#heroPage" className={styles.logoFlex}>
        <img src="./logoIcon.png" alt="" className={styles.logoIcon} />
        <div className={styles.logoTitle}>{t("nav.title")}</div>
      </Link>

      <div className={styles.navElements}>
        <div className={styles.navLinks}>
          <Link to="/#platforms">{t("nav.platforms")}</Link>

          <Link to="/#statistics">{t("nav.stats")}</Link>

          <Link to="/#opportunities">{t("nav.opportunities")}</Link>

          <Link to="/#contact">{t("nav.contact")}</Link>
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
  );
};
