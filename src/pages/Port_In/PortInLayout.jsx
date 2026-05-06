import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import EStep2 from "./EStep2";
import EStep3 from "./EStep3";
import EStep4 from "./EStep4";
import PStep2 from "./PStep2";
import PStep3 from "./PStep3";
import PStep4 from "./PStep4";
import PStep5 from "./PStep5";
import ProgressBar from "./ProgressBar";

export default function PortInLayout() {
  const [step, setStep] = useState(0);
  const [flowType, setFlowType] = useState(null);

  const steps = [
    Step1,
    Step2,
    Step3,
    Step4,
    EStep2,
    EStep3,
    EStep4,
    PStep2,
    PStep3,
    PStep4,
    PStep5
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

  const back = () =>
    setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center px-4 py-12">

      <div className="w-full max-w-2xl mb-2 text-center">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">

          {step === 0 && ""}
          {step === 1 && "Confirm your service address"}
          {step === 2 && "Activate your number"}
          {step === 3 && "Activate your number"}
          {step === 4 && "Connect your device"}
          {step === 5 && "Connect your device"}
          {step === 6 && "Connect your device"}
          {step === 7 && "Connect your device"}
          {step === 8 && "Connect your device"}
          {step === 9 && "Connect your device"}
          {step === 10 && "Connect your device"}
          {step === 11 && "Success"}

        </h2>
      </div>

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
        />
      </div>

    </div>
  );
}