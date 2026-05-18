import styles from "./OpportGrid.module.css";

export const OpportGrid = () => {
  return (
    <div className={styles.cardsGrid}>
      <div className={styles.opportCard}>
        <img src="./opportIcons/graph.svg" alt="" className={styles.cardIcon} />
        <h3>Аналитика в реальном времени</h3>
        <p className={styles.desc}>Детальная статистика вашего прогресса</p>
      </div>
      <div className={styles.opportCard}>
        <img src="./opportIcons/stars.svg" alt="" className={styles.cardIcon}/>
        <h3>ИИ обратная связь</h3>
        <p className={styles.desc}>
          Персонализированные рекомендации после каждого теста
        </p>
      </div>
      <div className={styles.opportCard}>
        <img src="./opportIcons/leader.svg" alt="" className={styles.cardIcon}/>
        <h3>Таблицы лидеров</h3>
        <p className={styles.desc}>Соревнуйтесь с другими студентами</p>
      </div>
      <div className={styles.opportCard}>
        <img src="./opportIcons/phone.svg" alt="" className={styles.cardIcon}/>
        <h3>Любое устройство</h3>
        <p className={styles.desc}>Учитесь на компьютере, планшете или телефоне</p>
      </div>
      <div className={styles.opportCard}>
        <img src="./opportIcons/people.svg" alt="" className={styles.cardIcon}/>
        <h3>Опытный преподаватель</h3>
        <p className={styles.desc}>Специалист по SAT и IELTS</p>
      </div>
      <div className={styles.opportCard}>
        <img src="./opportIcons/graduate.svg" alt="" className={styles.cardIcon}/>
        <h3>Проверенные результаты</h3>
        <p className={styles.desc}>1500+ студентов достигли своих целей</p>
      </div>
    </div>
  );
};
