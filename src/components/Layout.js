import React, { createContext, useState } from "react";
import DisplaySteps from "../pages/DisplaySteps/DisplaySteps";
import MultiStepFormContainer from "../pages/MultiStepFormContainer/MultiStepFormContainer";
import layoutStyle from "./Layout.module.css";

export const activeStepContext = createContext();

export default function Layout({ className, children }) {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className={layoutStyle.layoutContainer}>
      <activeStepContext.Provider value={{ activeStep, setActiveStep }}>
        <DisplaySteps />
        <MultiStepFormContainer />
      </activeStepContext.Provider>
    </div>
  );
}
