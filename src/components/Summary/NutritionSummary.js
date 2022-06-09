import styles from "./NutritionSummary.module.scss";

import DietGoals from "./Goals/DietGoals";
import Results from "./Results/Results";

import DietDuration from "./Results/DietDuration";
import CaloriesTable from "./Results/CaloriesTable";
import Nutritions from "./Nutritions/Nutritions";
import NutritionTable from "./Nutritions/Table/NutritionTable";
import NutritionChart from "./Nutritions/Chart/NutritionChart";

const NutritionSummary = ({ dietData, activeInput }) => {
  const dailyCalorieDeficit = 7000 / +dietData.period.value;

  const dailyCalories = +dietData.calories.value - dailyCalorieDeficit;

  const caloriesFromFatAndProtein = +dietData.lbm.value * (8 + 0.4 * 9);

  const isCriticalCh = () => {
    return dailyCalories - caloriesFromFatAndProtein <= 0;
  };

  const nutritionsPerDay = {
    protein: +dietData.lbm.value * 2,
    fat: +dietData.lbm.value * 0.4,
    ch: isCriticalCh() ? 0 : (dailyCalories - caloriesFromFatAndProtein) / 4,
  };

  const nutritionCalories = {
    protein: nutritionsPerDay.protein * 4,
    fat: nutritionsPerDay.fat * 9,
    ch: nutritionsPerDay.ch * 4,
  };

  const dietDuration = dietData.loss.value * dietData.period.value;

  const ratios = {
    protein: (nutritionCalories.protein / dailyCalories) * 100,
    fat: (nutritionCalories.fat / dailyCalories) * 100,
    ch: (nutritionCalories.ch / dailyCalories) * 100,
  };

  return (
    <section className={styles["nutrition-summary"]}>
      <DietGoals dietData={dietData} activeInput={activeInput} />

      <Results
        duration={dietDuration}
        calorieData={{ dailyCalorieDeficit, dailyCalories }}
      >
        <DietDuration duration={dietDuration} />
        <CaloriesTable calorieData={{ dailyCalorieDeficit, dailyCalories }} />
      </Results>

      <Nutritions>
        <NutritionTable
          nutritionData={nutritionsPerDay}
          calorieData={nutritionCalories}
          ratios={ratios}
        />

        <NutritionChart
          calorieData={nutritionCalories}
          dailyCalories={dailyCalories}
          ratios={ratios}
        />
      </Nutritions>
    </section>
  );
};

export default NutritionSummary;
