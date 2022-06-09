import styles from "./PyramidChart.module.scss";

const PyramidChart = ({ ratios, icons }) => {
  return (
    <div className={styles["pyramid-chart"]}>
      <div
        className={`${styles["pyramid-chart__item"]} ${styles["pyramid-chart__protein"]}`}
        style={{ height: `${ratios.protein}%` }}
      >
        <div className={styles["pyramid-chart__icon"]}>
          <img src={icons.proteinIcon}></img>
        </div>
      </div>
      <div
        className={`${styles["pyramid-chart__item"]} ${styles["pyramid-chart__fat"]}`}
        style={{ height: `${ratios.fat}%` }}
      >
        <div className={styles["pyramid-chart__icon"]}>
          <img src={icons.fatIcon}></img>
        </div>
      </div>
      <div
        className={`${styles["pyramid-chart__item"]} ${styles["pyramid-chart__ch"]}`}
        style={{ height: `${ratios.ch}%` }}
      >
        <div className={styles["pyramid-chart__icon"]}>
          <img src={icons.chIcon}></img>
        </div>
      </div>
    </div>
  );
};

export default PyramidChart;
