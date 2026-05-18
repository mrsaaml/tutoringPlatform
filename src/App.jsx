import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { OpportGrid } from "./components/OpportGrid/OpportGrid";
import { PlatformCards } from "./components/PlatformCards/PlatformCards";
import './adaptive.css'

function App() {
  return (
    <>
      <Navigation />

      {/* ГЕРОЙ СЕКЦИЯ */}
      <section className="heroSection">
        <h1>
          Your future starts <br /> <span>here.</span>
        </h1>
        <p>
          Комплексная платформа подготовки к SAT и IELTS с персонализированным
          обучением, еженедельными тестами и обратной связью на основе ИИ.
        </p>
      </section>

      {/* ПРОБЛЕМА */}
      <section className="problemSection">
        <p className="error">ПРОБЛЕМА</p>
        <h2>Подготовка к экзаменам не должна быть хаосом</h2>
        <p>
          Разрозненные материалы. Отсутствие аналитики. Нет обратной связи.
          Студенты тратят время впустую вместо того, чтобы достигать
          результатов.
        </p>
      </section>

      {/* ПЛАТФОРМЫ */}
      <section className="platformSection">
        <p className="title" id="platforms">
          ПЛАТФОРМЫ
        </p>
        <h2>
          Три платформы. <br /> Одна экосистема.
        </h2>
        <PlatformCards />
      </section>
      <section className="opportSection">
        <p className="title" id="opportunities">
          ВОЗМОЖНОСТИ
        </p>
        <h2>Создано для результатов</h2>
        <OpportGrid />
      </section>

      {/* ДОСТИЖЕНИЯ */}
      <section className="achievSection" id="statistics">
        <p className="title" id="achievunities">
          ДОСТИЖЕНИЯ
        </p>
        <h2>Цифры говорят сами за себя</h2>
        <div className="flexBox">
          <div className="card">
            <h3>1500+</h3>
            <p>Активных студентов</p>
          </div>
          <div className="card">
            <h3>1500+</h3>
            <p>Учебных групп</p>
          </div>
          <div className="card">
            <h3>95%</h3>
            <p>Успеха</p>
          </div>
          <div className="card">
            <h3>10000+</h3>
            <p>Пройденных тестов</p>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section className="contactSection" id="contact">
        <h2>Готовы изменить свои результаты?</h2>
        <p>
          Присоединяйтесь к тысячам студентов, которые уже достигли своих целей.
        </p>
        <div className="buttonsFlex">
          <button>
            <img src="./whatsapp.svg" alt="" />
            Написать в WhatsApp
          </button>
          <button>
            Войти в LMS <span>⭢</span>
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

      <p>
        Ваш надежный партнер в подготовке к SAT и IELTS.
        Комплексные платформы с ИИ.
      </p>

      <div className="socials">
        <a href="#">
          <img src="/footer/instagram.svg" alt="" />
        </a>

        <a href="#">
          <img src="/footer/telegram.svg" alt="" />
        </a>

        <a href="#">
          <img src="/whatsapp.svg" alt="" />
        </a>

        <a href="#">
          <img src="/footer/tiktok.svg" alt="" />
        </a>
      </div>
    </div>

    <div className="footerLinks">
      <h4>Платформы</h4>

      <a href="#">Система управления обучением</a>
      <a href="#">SAT Платформа</a>
      <a href="#">IELTS Платформа</a>
    </div>

    <div className="footerLinks">
      <h4>Ресурсы</h4>

      <a href="#opportunities">Возможности</a>
      <a href="#statistics">Статистика</a>
    </div>

    <div className="footerLinks">
      <h4>Контакты</h4>

      <a href="tel:+77007380691">+7 (700) 738-06-91</a>
    </div>
  </div>

  <div className="footerBottom">
    <p>© 2026 Master Education. Все права защищены.</p>

    <div className="footerPolicy">
      <a href="#">Политика конфиденциальности</a>
      <a href="#">Условия использования</a>
    </div>
  </div>
</footer>
    </>
  );
}

export default App;
