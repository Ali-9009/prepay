import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import ProgressBar from "./ProgressBar";
// import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";

export default function PortInPSimLayout() {
  const [step, setStep] = useState(0);
  const [flowType, setFlowType] = useState(null);

  const steps = [
    Step1,
    Step2,
    Step3,
    // Step4,
    Step5,
    Step6,
    Step8,
    Step7,
    Step9,
  ];

  const stepTitles = [
    "",
    "Confirm your service address",
    "Choose your number",
    "Choose your SIM type",
    "Transfer your number",
    "Transfer your number",
    "Activate Your Line",
    
    "Success",
 ];

  const CurrentStep = steps[step];

  const next = (goToStep, type = null) => {
    if (goToStep !== undefined) {
      setStep(goToStep);
    } else {
      setStep((s) => Math.min(s + 1, steps.length - 1));
    }

    if (type) setFlowType(type);
  };

  const back = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center px-3 sm:px-4 py-12">

      <div className="w-full max-w-2xl mb-2 text-center">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          {stepTitles[step]}
        </h2>
      </div>
      
      {/* Progress */}
      <div className="w-full max-w-2xl mb-4 sm:mb-6">
        <ProgressBar step={step} totalSteps={steps.length} />
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md overflow-hidden">
        <CurrentStep
          next={next}
          back={back}
          step={step}
          flowType={flowType}
        />
      </div>

    </div>
  );
}