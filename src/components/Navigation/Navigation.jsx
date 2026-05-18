import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoFlex}>
        <img src="./logoIcon.png" alt="" className={styles.logoIcon} />
        <div className={styles.logoTitle}>Tutoring Platform</div>
      </div>
      <div className={styles.navElements}>
        <div className={styles.navLinks}>
          <a href="#platforms" className="link">
            Платформы
          </a>
          <a href="#statistics" className="link">
            Статистика
          </a>
          <a href="#opportunities" className="link">
            Возможности
          </a>
          <a href="#contact" className="link">
            Контакты
          </a>
        </div>

        <div className={styles.langChanger}>
          <div className={styles.ru}>Ру</div>
          <div className={styles.eng}>Eng</div>
        </div>
      </div>
    </nav>
  );
};
