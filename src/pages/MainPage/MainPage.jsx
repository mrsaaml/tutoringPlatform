import {Navigation} from '../../components/Navigation/Navigation.jsx'
import {PlatformCards} from '../../components/mainPageComponents/PlatformCards/PlatformCards.jsx'
import {OpportGrid} from '../../components/mainPageComponents/OpportGrid/OpportGrid.jsx'
import './MainPage.css'

import { useTranslation } from "react-i18next";

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />

      {/* HERO */}
      <section className="heroSection" id="heroPage">
        <h1>
          {t("hero.title1")} <br />
          <span>{t("hero.title2")}</span>
        </h1>

        <p>{t("hero.desc")}</p>
      </section>

      {/* PROBLEM */}
      <section className="problemSection">
        <p className="error">{t("problem.label")}</p>

        <h2>{t("problem.title")}</h2>

        <p>{t("problem.desc")}</p>
      </section>

      {/* PLATFORMS */}
      <section className="platformSection" id="platforms">
        <p className="title">{t("platforms.label")}</p>

        <h2>{t("platforms.title")}</h2>

        <PlatformCards />
      </section>

      {/* OPPORTUNITIES */}
      <section className="opportSection" id="opportunities">
        <p className="title">{t("opportunities.label")}</p>

        <h2>{t("opportunities.title")}</h2>

        <OpportGrid />
      </section>

      {/* STATS */}
      <section className="achievSection" id="statistics">
        <p className="title">{t("achievements.label")}</p>

        <h2>{t("stats.title")}</h2>

        <div className="flexBox">
          <div className="card">
            <h3>1500+</h3>
            <p>{t("stats.students")}</p>
          </div>

          <div className="card">
            <h3>1500+</h3>
            <p>{t("stats.groups")}</p>
          </div>

          <div className="card">
            <h3>95%</h3>
            <p>{t("stats.success")}</p>
          </div>

          <div className="card">
            <h3>10000+</h3>
            <p>{t("stats.tests")}</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contactSection" id="contact">
        <h2>{t("contact.title")}</h2>

        <p>{t("contact.desc")}</p>

        <div className="buttonsFlex">
          <button>
            <img src="./whatsapp.svg" />
            {t("contact.btn1")}
          </button>

          <button>
            {t("contact.btn2")} <span>⭢</span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footerTop">
          <div className="footerAbout">
            <div className="footerLogo">
              <img src="./logoIcon.png" alt="" />
            </div>

            <p>{t("footer.desc")}</p>

            <div className="socials">
              <a href="#">
                <img src="./footer/instagram.svg" />
              </a>
              <a href="#">
                <img src="./footer/telegram.svg" />
              </a>
              <a href="#">
                <img src="./whatsapp.svg" />
              </a>
              <a href="#">
                <img src="./footer/tiktok.svg" />
              </a>
            </div>
          </div>

          <div className="footerLinks">
            <h4>{t("footer.platforms")}</h4>
            <a href="#">LMS</a>
            <a href="#">SAT</a>
            <a href="#">IELTS</a>
          </div>

          <div className="footerLinks">
            <h4>{t("footer.resources")}</h4>
            <a href="#opportunities">{t("footer.opportunities")}</a>
            <a href="#statistics">{t("footer.statistics")}</a>
          </div>

          <div className="footerLinks">
            <h4>{t("footer.contacts")}</h4>
            <a href="tel:+77007380691">+7 (700) 738-06-91</a>
          </div>
        </div>

        <div className="footerBottom">
          <p>© 2026 Master Education</p>

          <div className="footerPolicy">
            <a href="#">{t("footer.privacy")}</a>
            <a href="#">{t("footer.terms")}</a>
          </div>
        </div>
      </footer>
    </>
  );
};
