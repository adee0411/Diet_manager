import styles from "./NutritionCard.module.scss";

const NutritionCard = ({
  icon,
  title,
  name,
  nutritionData,
  calorieData,
  ratio,
}) => {
  return (
    <li className={styles["nutrition"]}>
      <div
        className={`${styles["nutrition__icon"]} ${
          styles[`nutrition__icon--${name}`]
        }`}
      >
        <img src={icon} alt={title}></img>
      </div>
      <h4 className={styles["nutrition__title"]}>{title}</h4>
      <p className={styles["nutrition__amount"]}>
        {parseInt(nutritionData[name])} gramm
      </p>
      <p className={styles["nutrition__calories"]}>
        {parseInt(calorieData[name])} kcal
      </p>
      <p className={styles["nutrition__ratio"]}>{ratio.toFixed(2)} %</p>
    </li>
  );
};

export default NutritionCard;
