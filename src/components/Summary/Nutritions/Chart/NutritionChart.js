import { useState } from "react";

import ChartView from "./ChartView";
import Chart from "./Chart";

import styles from "./NutritionChart.module.scss";
import Icons from "../../../../img/Icons";

const NutritionChart = ({ ratios }) => {
  const [activeView, setActiveView] = useState("stacked");

  const handleViewChange = (e) => {
    const listElement = e.target.closest("li");

    setActiveView(() => {
      const newData = listElement.dataset.name;

      return newData;
    });
  };

  return (
    <div className={styles["chart-cont"]}>
      <ChartView
        onHandleViewChange={handleViewChange}
        activeView={activeView}
        icons={Icons}
      />
      <Chart activeView={activeView} ratios={ratios} />
    </div>
  );
};

export default NutritionChart;
