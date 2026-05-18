import { PlatformCard } from "../PlatformCard/PlatformCard";
import styles from "./PlatformCards.module.css";

export const PlatformCards = () => {
  return (
    <div className="platformCards">
      <PlatformCard
        className={styles.blueCard}
        image="/platformIcons/book.svg"
        title="LMS"
        desc1="Управление обучением"
        desc2="Учебные материалы, журнал оценок и общение в реальном времени."
      />
      <PlatformCard
        className={styles.greenCard}
        image="/platformIcons/done.svg"
        title="SAT"
        desc1="Тестирование"
        desc2="Праактические тесты с мгновенной оббратной связью и ИИ-рекомендациями."
      />
      <PlatformCard
        className={styles.yellowCard}
        image="/platformIcons/language.svg"
        title="IELTS"
        desc1="Подготовка"
        desc2="Аудирование, чтение, письмо и говорение с оценкой от ИИ."
      />
    </div>
  );
};
