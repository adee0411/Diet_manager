import styles from "./DietGoals.module.scss";
import DietGoalsCard from "./DietGoalsCard";

import Icons from "../../../img/Icons";

const DietGoals = ({ dietData, activeInput }) => {
  return (
    <ul className={styles["diet-goals"]}>
      <DietGoalsCard
        title="LBM"
        name="lbm"
        icon={Icons.bodyMassIcon}
        value={dietData.lbm.value}
        unit={dietData.lbm.unit}
        isActive={activeInput === "lbm"}
      />
      <DietGoalsCard
        title="Current weight"
        name="weight"
        icon={Icons.weightIcon}
        value={dietData.weight.value}
        unit={dietData.weight.unit}
        isActive={activeInput === "weight"}
      />
      <DietGoalsCard
        title="Normal daily cal."
        name="calories"
        icon={Icons.calorieIcon}
        value={dietData.calories.value}
        unit={dietData.calories.unit}
        isActive={activeInput === "calories"}
      />
      <DietGoalsCard
        title="Period"
        name="period"
        icon={Icons.calendarIcon}
        value={dietData.period.value}
        unit={dietData.period.unit}
        isActive={activeInput === "period"}
      />
      <DietGoalsCard
        title="Weight to lose"
        name="loss"
        icon={Icons.lossIcon}
        value={dietData.loss.value}
        unit={dietData.loss.unit}
        isActive={activeInput === "loss"}
      />
    </ul>
  );
};

export default DietGoals;
