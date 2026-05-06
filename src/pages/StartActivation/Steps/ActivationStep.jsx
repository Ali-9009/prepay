import { Phone, IdCard } from "lucide-react";
import Button from "../../../components/Gbtn";

function ActivationStep({ nextStep }) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Activation Needed */}
      <div>
        <div className="flex flex-col justify-center gap-2">
          <p className="text-sm bg-gray-200 w-34 text-center p-1 font-semibold rounded-2xl">
            Activation needed
          </p>

          <div className="flex flex-row items-center justify-between">
            <p className="text-sm font-semibold">Your Line</p>
            <button className="text-sm text-red-500 hover:underline">
              View details
            </button>
          </div>

          <div className="flex flex-col gap-1">
            <p className="flex items-center text-sm text-gray-500">
              <Phone size={18} className="mr-2" />
              Not yet activated
            </p>

            <p className="flex items-center text-sm text-red-500">
              <IdCard size={20} className="mr-2" />
              Unfulfilled Plus
            </p>
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Activate Service */}
      <div>
        <h3 className="font-semibold text-gray-800">Activate your service</h3>

        <p className="mt-2 text-sm text-gray-600">Before you start:</p>

        <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Make sure you have the device you want to connect</li>
          <li>It's connected to wifi</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <Button onClick={nextStep} text="Start activation" />
      </div>

      {/* Info Box */}
      <div className="bg-red-50 border w-90 mx-auto border-red-100 rounded-lg p-4 text-sm text-gray-700">
        <p className="font-semibold mb-2">
          Your device must be carrier-unlocked.
        </p>

        <p className="mb-2">
          <span className="font-semibold">What is a locked device</span>
          <br />
          Carriers often lock phones you buy through them so they only work on
          their network.
        </p>

        <p>
          <span className="font-semibold">How to unlock my device</span>
          <br />
          Contact your current carrier and ask about unlocking.
        </p>
      </div>
    </div>
  );
}

export default ActivationStep;
