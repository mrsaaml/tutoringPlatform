import styles from "./PlatformCard.module.css";


export const PlatformCard = ({className, image, title, desc1, desc2 }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <img src={image} alt={title} className={styles.cardIcon} />

      <h3>{title}</h3>

      <p className={styles.desc1}>{desc1}</p>
      <p className={styles.desc2}>{desc2}</p>

      <button>Open <span>⭢</span></button>
    </div>
  );
};
