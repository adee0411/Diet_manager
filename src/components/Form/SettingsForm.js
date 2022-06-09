import styles from "./SettingsForm.module.scss";

import SettingCard from "./SettingCard";
import ResetBtn from "./ResetBtn";

import Icons from "../../img/Icons";

const SettingsForm = (props) => {
  const { period, lbm, weight, loss, calories } = props.dietData;

  return (
    <section className={styles["settings"]}>
      <form>
        <SettingCard
          title="Lean Body Mass (LBM)"
          desc="The mass of your body without any fat"
          image={Icons.bodyMassIcon}
          inputAttributes={{
            name: "lbm",
            min: 60,
            max: weight.value,
            step: 0.5,
            onChange: props.onHandleDietData,
            value: lbm.value,
            unit: lbm.unit,
          }}
        />
        <SettingCard
          title="Current Weight"
          desc="Your current weight"
          image={Icons.weightIcon}
          inputAttributes={{
            min: lbm.value,
            max: 140,
            step: 0.5,
            onChange: props.onHandleDietData,
            name: "weight",
            value: weight.value,
            unit: weight.unit,
          }}
        />
        <SettingCard
          title="Normal daily calories"
          desc="The amount of calories that your body burns a day without any
            activities"
          image={Icons.calorieIcon}
          inputAttributes={{
            min: 1000,
            max: 4000,
            step: 50,
            name: "calories",
            onChange: props.onHandleDietData,
            value: calories.value,
            unit: calories.unit,
          }}
        />
        <SettingCard
          title="Period"
          desc="The number of days to lose 1 kg fat"
          image={Icons.calendarIcon}
          inputAttributes={{
            min: 7,
            max: 14,
            step: 1,
            name: "period",
            onChange: props.onHandleDietData,
            value: period.value,
            unit: period.unit,
          }}
        />
        <SettingCard
          title="Weight to lose"
          desc="The amount of weight you want to lose"
          image={Icons.lossIcon}
          inputAttributes={{
            min: 1,
            max: 40,
            step: 0.5,
            onChange: props.onHandleDietData,
            name: "loss",
            value: loss.value,
            unit: loss.unit,
          }}
        />
        <ResetBtn text="Reset all values" onResetValues={props.onResetValues} />
      </form>
    </section>
  );
};

export default SettingsForm;
