import styles from "./ResetBtn.module.scss";

import resetIcon from "../../img/reset_64.png";

const ResetBtn = (props) => {
  return (
    <div className={styles["btn-cont"]}>
      <button
        type="button"
        className={styles["btn--reset"]}
        onClick={props.onResetValues}
      >
        <img src={resetIcon}></img>
        {props.text}
      </button>
    </div>
  );
};

export default ResetBtn;
