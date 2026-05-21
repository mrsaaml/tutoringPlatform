import { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const [loginVisible, setLoginVisible] = useState(true);
  const { t, i18n } = useTranslation();

  return (
    <div>
      <nav className={styles.loginNav}>
        <Link to="/#heroPage" className={styles.logoFlex}>
          <img src="./logoIcon.png" alt="" className={styles.logoIcon} />
          <div className={styles.logoTitle}>{t("nav.title")}</div>
        </Link>
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
      </nav>

      {loginVisible ? (
        <div className={styles.loginPage}>
          <h1 className={styles.cardTitle}>{t("auth.login")}</h1>
          <input type="text" placeholder={t("auth.email")} />
          <input type="password" placeholder={t("auth.password")} />
          <button>{t("auth.enter")}</button>
          <p>
            {t("auth.noAccount")}{" "}
            <button onClick={() => setLoginVisible(false)}>
              {t("auth.registerBtn")}
            </button>
          </p>
        </div>
      ) : (
        <div className={styles.regisPage}>
          <h1 className={styles.cardTitle}>{t("auth.register")}</h1>
          <input type="text" placeholder={t("auth.email")} />
          <input type="password" placeholder={t("auth.password")} />
          <button>{t("auth.done")}</button>
          <p>
            {t("auth.hasAccount")}{" "}
            <button onClick={() => setLoginVisible(true)}>
              {t("auth.enter")}
            </button>
          </p>
        </div>
      )}
    </div>
  );
};
