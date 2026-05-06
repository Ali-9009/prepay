import { ChevronLeft, Phone, IdCard } from "lucide-react";
import Button from "../../components/Gbtn";

export default function Step1({ next }) {
  return (
    <>
      {/* Header */}
      <div className="bg-(--primary-color) p-6 text-center relative">
        <h2 className="text-white text-xl font-semibold">
          Hooray! Now, Let’s activate your service!
        </h2>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        <div className="space-y-3">
          <p className="text-xs bg-gray-200 inline-block px-3 py-1 font-semibold rounded-full">
            Activation needed
          </p>

          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Your Line</p>
            <button className="text-sm text-red-500 hover:underline">
              View details
            </button>
          </div>

          <div className="space-y-1">
            <p className="flex items-center text-sm text-gray-500">
              <Phone size={18} className="mr-2" />
              Not yet activated
            </p>
            <p className="flex items-center text-sm text-red-500">
              <IdCard size={18} className="mr-2" />
              Unfulfilled Plus
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-300" />

        <div>
          <h3 className="font-semibold text-gray-800">Activate your service</h3>

          <p className="mt-2 text-sm text-gray-600">Before you start:</p>

          <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Make sure you have the device you want to connect</li>
            <li>It's connected to wifi</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <Button text="Start activation" onClick={() => next(1)} />
        </div>

        <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-sm text-gray-700">
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
    </>
  );
}
