import styles from "./Nutritions.module.scss";

const Nutritions = (props) => {
  return <div className={styles["nutritions"]}>{props.children}</div>;
};

export default Nutritions;
