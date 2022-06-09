import styles from "./Results.module.scss";

const Results = (props) => {
  return <div className={styles["results"]}>{props.children}</div>;
};

export default Results;
