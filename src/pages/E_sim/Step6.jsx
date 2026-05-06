import { ChevronLeft } from "lucide-react";
import Button from "../../components/Gbtn";

export default function Step6({ next, back, subFlow }) {
  return (
    <>
      {/* Header */}
      <div className="bg-(--primary-color) p-6 relative flex flex-col items-center text-center">
        <button
          onClick={back}
          className="absolute left-4 top-6 text-white cursor-pointer"
        >
          <ChevronLeft />
        </button>

        <h2 className="text-white text-xl font-semibold">
          {subFlow === "schedule"
            ? "Yayyy! Here is your new number"
            : "You Plan is scheduled to start on [Date]!"}
        </h2>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">

        {subFlow === "schedule" && (

          <div className="p-6 space-y-6">
            <div className="max-w-md flex flex-col items-center mx-auto">
              <ul className=" space-y-3 text-sm">
                <li className="flex">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <p className="font-semibold">You can immediately start using Hello Prepay service.</p>
                  </div>
                </li>
              </ul>

              <Button className="mt-4" text="Go to My account" to="/" />
            </div>
          </div>
        )}

 
        {subFlow === "instant" && (
          <div className="p-6 space-y-6">
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
          </div>
        )}
      </div>
    </>
  );
}