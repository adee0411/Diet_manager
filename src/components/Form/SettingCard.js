import styles from "./SettingCard.module.scss";

import RangeInput from "./RangeInput";

const SettingCard = ({ title, desc, image, inputAttributes }) => {
  return (
    <div className={`${styles["setting-card"]}`}>
      <h2 className={`${styles["setting-card__title"]}`}>
        <span className={styles["text"]}>{title}</span>
        <div className={`${styles["setting-card__icon"]}`}>
          <img src={image} alt={name}></img>
        </div>
      </h2>
      <p className={`${styles["setting-card__desc"]}`}>{desc}</p>

      <RangeInput inputAttributes={inputAttributes} />

      <span className={`${styles["setting-card__range-value"]}`}>
        {inputAttributes.value} {inputAttributes.unit}
      </span>
    </div>
  );
};

export default SettingCard;
