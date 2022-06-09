import styles from "./Chart.module.scss";
import Icons from "../../../../img/Icons";

import StackedChart from "./StackedChart";
import PyramidChart from "./PyramidChart";

const Chart = ({ ratios, activeView }) => {
  switch (activeView) {
    case "stacked":
      return <StackedChart ratios={ratios} icons={Icons}></StackedChart>;
    case "pyramid":
      return <PyramidChart ratios={ratios} icons={Icons}></PyramidChart>;
  }
};

export default Chart;
