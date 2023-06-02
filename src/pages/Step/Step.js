import { activeStepContext } from "../../components/Layout";
import { useContext } from "react";
import stepStyle from "./Step.module.css";

export default function Step({ step, stepExplained }) {
  const activeState = {
    background: "#b0e0e6",
    color: "black",
  };

  const { activeStep, setActiveStep } = useContext(activeStepContext);
  return (
    <div className="flex-center row">
      <div
        className={stepStyle.step}
        style={step === activeStep ? activeState : null}
      >
        <p className="bold">{step}</p>
      </div>
      <div className={stepStyle["step-description"]}>
        <p style={{ marginBottom: "0px" }} className="regular gray">
          STEP {step}
        </p>
        <p style={{ marginTop: "0px" }} className="bold">
          {stepExplained}
        </p>
      </div>
    </div>
  );
}
