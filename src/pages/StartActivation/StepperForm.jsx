import { useState } from "react";
import StepLayout from "../StartActivation/StepLayout";
import ActivationStep from "../StartActivation/Steps/ActivationStep";
import AddressStep from "../StartActivation/Steps/AddressStep";
import NumberStep from "../StartActivation/Steps/NumberStep";
import SimTypeStep from "./Steps/SimTypeStep";
import Connect from "./Steps/Connect";
import Button from "../../components/Gbtn";


function FutureStep1({ nextStep }) {
  return <Connect nextStep={nextStep} />;
}

function FutureStep2({ nextStep }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p>(512) 743 - 6742</p>

      <Button onClick={nextStep} text="Select your service date" />
    </div>
  );
}

function FutureStep3({ nextStep }) {
  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <ul className=" space-y-3 text-sm">
        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">You can immediately start using Hello Prepay service.</p>
          </div>
        </li>
      </ul>

      <Button className="mt-2" text="Go to My account" onClick={nextStep} />
    </div>
  );
}

function FutureStep4({ nextStep }) {
  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <ul className=" space-y-3 text-sm">
        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">Your service will begin on your scheduled activation date.</p>
          </div>
        </li>
        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">Billing will start on that date.</p>
          </div>
        </li>
        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">To change your scheduled activation time, please update it in your account.</p>
          </div>
        </li>
      </ul>

      <Button className="mt-2" text="Go to My account" to="/" />
    </div>
  );
}

function NowStep1({ nextStep }) {
  return (
    <div className="max-w-md mx-auto ">

      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-800">
          Your physical SIM details
        </h2>
      </div>

      <div className="mb-4 text-sm text-gray-600">
        <p className="flex items-start gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
          Enter the 18–19 digit ICCID on your SIM card to activate.
        </p>
      </div>

      <div className="max-w-sm mx-auto mb-4">

        <label className="block text-sm font-medium text-gray-700 mb-1">
          ICCID
        </label>

        <input
          type="text"
          placeholder="ICCID"
          className="w-full border border-red-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
        />

        <Button text="Submit" onClick={nextStep} className="mt-3 w-full" />

      </div>

      <div>
        <h3 className="font-semibold text-sm text-gray-800 mb-2">
          Example:
        </h3>

        <ul className=" space-y-3 text-sm">
          <li className="flex">
            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
            <div>
              <p className="font-semibold">Check the 18–19 digit ICCID printed on the back of your <br /> physical SIM (pSIM)
                as shown in Picture 2.</p>
            </div>
          </li>
          <li className="flex">
            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
            <div>
              <p className="font-semibold">Enter that exact same ICCID in the box above, as illustrated in Picture 3.</p>
            </div>
          </li>
          <li className="flex">
            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
            <div>
              <p className="font-semibold">Double-check the ICCID for accuracy before you hit Submit.</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
}

function NowStep2({ nextStep }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p>(512) 743 - 6742</p>

      <Button onClick={nextStep} text="Select your service date" />
    </div>
  );
}

function NowStep3({ nextStep }) {
  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <ul className=" space-y-3 text-sm">
        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">You can immediately start using Hello Prepay service.</p>
          </div>
        </li>
      </ul>

      <Button className="mt-2" text="Go to My account" onClick={nextStep} />
    </div>
  );
}

function NowStep4({ nextStep }) {
  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <ul className=" space-y-3 text-sm">
        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">Your service will begin on your scheduled activation date.</p>
          </div>
        </li>
        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">Billing will start on that date.</p>
          </div>
        </li>
        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">To change your scheduled activation time, please update it in your account.</p>
          </div>
        </li>
      </ul>

      <Button className="mt-2" text="Go to My account" to="/" />
    </div>
  );
}

function StepperForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [serviceType, setServiceType] = useState(null); // 'now' or 'future'

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // Common steps before SimTypeStep
  const commonSteps = [ActivationStep, AddressStep, SimTypeStep];

  const futureSteps = [FutureStep1, FutureStep2, FutureStep3, FutureStep4];
  const nowSteps = [NowStep1, NowStep2, NowStep3, NowStep4];

  let steps;
  if (serviceType === "future") {
    steps = [...commonSteps, ...futureSteps];
  } else if (serviceType === "now") {
    steps = [...commonSteps, ...nowSteps];
  } else {
    steps = commonSteps;
  }

  const StepComponent = steps[currentStep];

  return (
    <StepLayout step={currentStep} prevStep={prevStep}>
      <StepComponent
        nextStep={nextStep}
        prevStep={prevStep}
        setServiceType={
          StepComponent === SimTypeStep ? setServiceType : undefined
        }
      />
    </StepLayout>
  );
}

export default StepperForm;
