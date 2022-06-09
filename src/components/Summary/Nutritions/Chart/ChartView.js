import styles from "./ChartView.module.scss";

import ChartViewTab from "./ChartViewTab";

const ChartView = ({ onHandleViewChange, activeView, icons }) => {
  return (
    <ul className={styles["chart-view"]}>
      <ChartViewTab
        onHandleViewChange={onHandleViewChange}
        dataName="stacked"
        isActive={activeView === "stacked"}
        icon={icons.chartStackedIcon}
      />
      <ChartViewTab
        onHandleViewChange={onHandleViewChange}
        dataName="pie"
        isActive={activeView === "pie"}
        icon={icons.chartPieIcon}
      />
      <ChartViewTab
        onHandleViewChange={onHandleViewChange}
        dataName="pyramid"
        isActive={activeView === "pyramid"}
        icon={icons.chartPyramidIcon}
      />
    </ul>
  );
};

export default ChartView;
