import styles from "./DietGoalsCard.module.scss";

const DietGoalsCard = ({ title, name, icon, value, unit, isActive }) => {
  return (
    <li
      className={
        isActive
          ? `${styles["diet-goals__card"]} ${styles["diet-goals__card--active"]}`
          : `${styles["diet-goals__card"]}`
      }
    >
      <div className={styles["goal__image"]}>
        <img src={icon} alt={name}></img>
      </div>
      {/*<h3 className={styles["goal__title"]}>{title}</h3>*/}

      <span className={styles["goal__value"]}>
        {value} {unit}
      </span>
    </li>
  );
};

export default DietGoalsCard;
