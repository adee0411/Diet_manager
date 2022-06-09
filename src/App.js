import { useState } from "react";

import "./App.scss";
import NutritionSummary from "./components/Summary/NutritionSummary";
import SettingsForm from "./components/Form/SettingsForm";

const App = () => {
  const initialState = {
    period: { value: 7, unit: "day" },
    lbm: { value: 60, unit: "kg" },
    calories: { value: 2000, unit: "kcal" },
    weight: { value: 80, unit: "kg" },
    loss: { value: 1, unit: "kg" },
  };

  /* GLOBAL STATE */
  const [dietData, setDietData] = useState({
    ...initialState,
  });

  const [activeInput, setActiveInput] = useState(""); // Accepts the name of the currently changed input

  const handleDietDataChange = (e) => {
    setDietData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: {
          value: e.target.value,
          unit: prevData[e.target.name].unit,
        },
      };
    });
    setActiveInput(e.target.name);
  };

  const resetValues = () => {
    setDietData(initialState);
    setActiveInput("");
  };

  return (
    <div className="App">
      <main className="App__body">
        <SettingsForm
          onHandleDietData={handleDietDataChange}
          dietData={dietData}
          activeInput={activeInput}
          onResetValues={resetValues}
        />
        <NutritionSummary dietData={dietData} activeInput={activeInput} />
      </main>
    </div>
  );
};

export default App;
