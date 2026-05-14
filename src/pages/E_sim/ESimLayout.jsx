import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
// after MDN
import Step7 from "./Step7";
import Step8 from "./Step8";
import ProgressBar from "./ProgressBar";
import Step9 from "./Step9";

export default function ESimLayout() {
  const [step, setStep] = useState(0);
  const [flowType, setFlowType] = useState(null);
  const [subFlow, setSubFlow] = useState(null);

  const steps = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9];
  const CurrentStep = steps[step];

  const next = (goToStep, type = null) => {
    if (goToStep !== undefined) {
      setStep(goToStep);
    } else {
      setStep((s) => Math.min(s + 1, steps.length - 1));
    }

    if (type === "transfer" || type === "new") {
      setFlowType(type);
    }

    if (type === "schedule" || type === "instant") {
      setSubFlow(type);
    }
  };

  const back = () =>
    setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center px-4 py-12">

      <div className="w-full max-w-2xl mb-2 text-center">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">

          {step === 0 && ""}
          {step === 1 && "Confirm your service address"}
          {step === 2 && "Activate your number"}
          {step === 3 && "Your new number"}
          {step === 4 && "Connect your device"}
          {step === 5 && "Success"}
          {step === 6 && "Select Your Date"}
          {step === 7 && "Connect your device"}
          {step === 7 && "You are all set"}

        </h2>
      </div>

      {/* Progress */}
      <div className="w-full max-w-2xl mb-6">
        <ProgressBar step={step} totalSteps={steps.length} />
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md overflow-hidden">
        <CurrentStep
          next={next}
          back={back}
          step={step}
          flowType={flowType}
          subFlow={subFlow}
        />
      </div>

    </div>
  );
}