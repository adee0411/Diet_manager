import styles from "./StackedChart.module.scss";

const StackedChart = ({ ratios, icons }) => {
  return (
    <div className={styles["stacked-chart"]}>
      <div
        className={`${styles["stacked-chart__item"]} ${styles["stacked-chart__protein"]}`}
        style={{ width: `${ratios.protein}%` }}
      >
        <div className={styles["stacked-chart__icon"]}>
          <img src={icons.proteinIcon}></img>
        </div>
      </div>
      <div
        className={`${styles["stacked-chart__item"]} ${styles["stacked-chart__fat"]}`}
        style={{ width: `${ratios.fat}%` }}
      >
        <div className={styles["stacked-chart__icon"]}>
          <img src={icons.fatIcon}></img>
        </div>
      </div>
      <div
        className={`${styles["stacked-chart__item"]} ${styles["stacked-chart__ch"]}`}
        style={{ width: `${ratios.ch}%` }}
      >
        <div className={styles["stacked-chart__icon"]}>
          <img src={icons.chIcon}></img>
        </div>
      </div>
    </div>
  );
};

export default StackedChart;
