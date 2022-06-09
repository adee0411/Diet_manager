import NutritionCard from "./NutritionCard";
import styles from "./NutritionTable.module.scss";

import Icons from "../../../../img/Icons";

const NutritionTable = ({ nutritionData, calorieData, ratios }) => {
  return (
    <ul className={styles["nutritions"]}>
      <NutritionCard
        name="protein"
        title="Protein"
        icon={Icons.proteinIcon}
        nutritionData={nutritionData}
        calorieData={calorieData}
        ratio={ratios.protein}
      />
      <NutritionCard
        name="fat"
        title="Fat"
        icon={Icons.fatIcon}
        nutritionData={nutritionData}
        calorieData={calorieData}
        ratio={ratios.fat}
      />
      <NutritionCard
        name="ch"
        title="Carbohydrate"
        icon={Icons.chIcon}
        nutritionData={nutritionData}
        calorieData={calorieData}
        ratio={ratios.ch}
      />
    </ul>
  );
};

export default NutritionTable;
