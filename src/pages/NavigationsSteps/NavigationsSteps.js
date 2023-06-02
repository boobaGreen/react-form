import { useContext } from "react";
import { activeStepContext } from "../../components/Layout";

export default function NavigationsSteps() {
  const { activeStep, setActiveStep } = useContext(activeStepContext);
  const nextStep = () => {
    if (activeStep < 4) setActiveStep(activeStep + 1);
  };
  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };
  if (activeStep > 1 && activeStep < 4)
    return (
      <div className="flex-btn">
        <button className="btn btn-white" onClick={prevStep}>
          Go Back
        </button>
        <button className="btn btn-blue" onClick={nextStep}>
          Next Step
        </button>
      </div>
    );
  if (activeStep === 1)
    return (
      <div className="flex-btn">
        <button className="invisible" onClick={prevStep}>
          Go Back
        </button>
        <button className="btn btn-blue" onClick={nextStep}>
          Next Step
        </button>
      </div>
    );
  if (activeStep === 4)
    return (
      <div className="flex-btn">
        <button className="btn btn-white" onClick={prevStep}>
          Go Back
        </button>
        <button className="btn btn-blue" onClick={nextStep}>
          Confirm
        </button>
      </div>
    );
}
