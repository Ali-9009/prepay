import Button from "../../../components/Gbtn";

export default function Connect({ nextStep }) {
  return (
    <div className="max-w-md mx-auto">
      
      {/* STEP 1 */}
      <h3 className="text-sm font-bold uppercase text-gray-700 mb-3">
        STEP 1 - Check your device
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Before you start, make sure you
      </p>

      <ul className="space-y-3 text-sm">
        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">Connect to wifi</p>
            <p className="text-gray-500">
              Ensure the phone you plan to use is connected to wifi
            </p>
          </div>
        </li>

        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">Update your phone</p>
            <p className="text-gray-500">
              Verify that your phone is running the latest OS and has a working camera
            </p>
          </div>
        </li>
      </ul>

      <hr className="my-6" />

      {/* STEP 2 */}
      <h3 className="text-sm font-bold uppercase text-gray-700 mb-3">
        STEP 2 - Install your eSIM
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Before you start, make sure you
      </p>

      <ul className="space-y-3 text-sm">
        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">iOS</p>
            <p className="text-gray-500">
              Go to Settings &gt; Cellular &gt; Add Cellular Plan
            </p>

            <p className="font-semibold mt-2">Android</p>
            <p className="text-gray-500">
              Go to Settings &gt; Network & Internet &gt; SIMs &gt; Add SIM
            </p>
          </div>
        </li>

        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <div>
            <p className="font-semibold">
              Scan the QR Code below using your phone’s camera
            </p>
          </div>
        </li>
      </ul>

      {/* QR */}
      <div className="flex justify-center my-4">
        <img src="/images/qrcode.png" alt="QR Code" />
      </div>

      <ul className="text-sm">
        <li className="flex">
          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          <p className="text-gray-600">
            Follow the instruction on-screen to install
          </p>
        </li>
      </ul>

      {/* Button */}
      <div className="flex justify-center mt-6">
        {/* Call nextStep when clicked */}
        <Button text="Done" onClick={nextStep} />
      </div>
    </div>
  );
}