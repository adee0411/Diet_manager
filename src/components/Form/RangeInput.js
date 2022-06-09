import styles from "./RangeInput.module.scss";

const RangeInput = ({ inputAttributes }) => {
  const { value, onChange, min, max, step, name, unit } = inputAttributes;

  return (
    <div className={styles["range"]}>
      <input
        className={styles["range__input"]}
        type="range"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        name={name}
      />

      <div className={styles["range__label"]}>
        <span className={styles["range-label__endpoint"]}>
          {min} {unit}
        </span>
        <span className={styles["range-label__endpoint"]}>
          {max} {unit}
        </span>
      </div>
    </div>
  );
};

export default RangeInput;
