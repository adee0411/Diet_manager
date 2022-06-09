import styles from "./DietDuration.module.scss";

import Icons from "../../../img/Icons";

const DietDuration = ({ duration }) => {
  return (
    <div className={styles["duration"]}>
      <img src={Icons.durationIcon}></img>
      <p className={styles["duration__text"]}>
        Your diet will last <span>{duration} days</span>.
      </p>
    </div>
  );
};

export default DietDuration;
