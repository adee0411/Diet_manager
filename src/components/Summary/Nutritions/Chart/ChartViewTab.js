import styles from "./ChartViewTab.module.scss";

const ChartView = (props) => {
  return (
    <li
      className={`${styles["chart-view__tab"]} ${
        props.isActive ? styles["chart-view__tab--active"] : ""
      }`}
      onClick={props.onHandleViewChange}
      data-name={props.dataName}
    >
      <img src={props.icon} title={props.title}></img>
    </li>
  );
};

export default ChartView;
