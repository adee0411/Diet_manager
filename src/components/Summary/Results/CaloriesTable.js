import styles from "./CaloriesTable.module.scss";

const CaloriesTable = (props) => {
  return (
    <ul className={styles["daily-calories"]}>
      <li className={styles["daily-calories__card"]}>
        <span className={styles["daily-calories__value"]}>
          {parseInt(props.calorieData.dailyCalorieDeficit)} kcal
        </span>{" "}
        deficit per day
      </li>
      <li className={styles["daily-calories__card"]}>
        <span className={styles["daily-calories__value"]}>
          {parseInt(props.calorieData.dailyCalories)} kcal
        </span>{" "}
        needed per day
      </li>
    </ul>
  );
};

export default CaloriesTable;
