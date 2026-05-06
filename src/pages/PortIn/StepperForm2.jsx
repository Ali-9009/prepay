import { useState } from "react";
import { Cpu, CardSim } from "lucide-react";

import StepLayout2 from "../PortIn/StepLayout2";
import ChooseSimStep from "../PortIn/Steps2/ChooseSimStep";
import ServiceAddressStep from "../PortIn/Steps2/ServiceAddressStep";
import DeviceUnlockedStep from "../PortIn/Steps2/DeviceUnlockedStep";
import Button from "../../components/Gbtn";
import Connect from "../StartActivation/Steps/Connect";

// ---------------- BRANCH STEPS ----------------
function FutureStep1({ nextStep }) {
  return (
    <div>
      <div className="max-w-xl mx-auto grid grid-cols-2 gap-6 mb-6">
        <div className="cursor-pointer border-2 rounded-lg p-4 flex flex-col items-center text-center border-red-500 hover:border-red-500">
          <div className="mb-4 text-red-500"><Cpu /></div>
          <h3 className="font-semibold mb-2 text-sm">eSim</h3>
        </div>
        <div className="cursor-pointer border-2 rounded-lg p-4 flex flex-col items-center text-center border-red-500 hover:border-red-500">
          <div className="mb-4 text-red-500"><CardSim /></div>
          <h3 className="font-semibold mb-2 text-sm">Physical SIM</h3>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h3 className="font-semibold">Do you have a Hello Prepay eSIM?</h3>
        <ul className="space-y-3 mt-2 text-sm">
          <li className="flex">
            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
            <div>
              <p className="font-medium">Activation can be completed after your pSIM is delivered. <br />
                You can activate it after receiving the SIM card, or contact support  to arrange delivery.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-2 gap-2">
        <Button className="mt-2" text="I have my Hello Prepay SIM" onClick={nextStep} />
        <Button className="mt-2" text="I haven’t received my Hello Prepay SIM" onClick={nextStep} />
      </div>
    </div>
  );
}

function NowStep1({ nextStep }) {
  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <ul className="space-y-3 text-sm">
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

// ---------------- SECOND BRANCH (after DeviceUnlockedStep) ----------------
function FutureStep2({ nextStep }) {
  return <Connect nextStep={nextStep} />;
}

function FutureStep3() {
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

      <Button className="mt-2" text="Go to My account" to="/" />
    </div>
  );
}

function NowStep2({ nextStep }) {
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

function NowStep3() {
  return (
    <div className="max-w-md flex flex-col items-center mx-auto">
      <ul className=" space-y-3 text-sm">
        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">Insert your SIM card and start your Hello Prepay service immediately.</p>
          </div>
        </li>
      </ul>

      <Button className="mt-2" text="Go to My account" to="/" />
    </div>
  );
}

// ---------------- STEPPER ----------------
function StepperForm2() {
  const [currentStep, setCurrentStep] = useState(0);
  const [serviceType, setServiceType] = useState(null); // first branch type
  const [postBranch, setPostBranch] = useState(null);   // branch after DeviceUnlockedStep

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // ---------------- STEP ARRAYS ----------------
  const commonSteps = [ChooseSimStep];
  const futureSteps = [FutureStep1];
  const nowSteps = [NowStep1];
  const postSteps = [ServiceAddressStep, DeviceUnlockedStep];

  const futurePostSteps = [FutureStep2, FutureStep3];
  const nowPostSteps = [NowStep2, NowStep3];

  // ---------------- BUILD STEPS ----------------
  let steps = [];

  if (!serviceType) {
    steps = commonSteps;
  } else {
    steps = [
      ...commonSteps,
      ...(serviceType === "future" ? futureSteps : nowSteps),
      ...postSteps
    ];

    // If user clicked a button in DeviceUnlockedStep, inject postBranch dynamically
    if (postBranch) {
      steps.push(...(postBranch === "future" ? futurePostSteps : nowPostSteps));
    }
  }

  const StepComponent = steps[currentStep];

  return (
    <StepLayout2 step={currentStep} prevStep={prevStep}>
      <StepComponent
        nextStep={nextStep}
        prevStep={prevStep}
        setServiceType={setServiceType}
        setNextBranch={setPostBranch} // pass this to DeviceUnlockedStep
      />
    </StepLayout2>
  );
}

export default StepperForm2;