import { ChevronLeft, Phone, IdCard } from "lucide-react";
import { PhoneCall, PlusCircle } from "lucide-react";
import Button from "../../components/Gbtn";
import { Link } from "react-router-dom";

export default function Step4({ next, back }) {
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
          Choose your SIM type
        </h2>

        <p className="text-white text-sm mt-1 max-w-md">
          Which SIM type do you use?
        </p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        <div className="max-w-lg mx-auto">
          <h3 className="font-semibold">Do you have a Hello Prepay pSIM?</h3>
          <ul className="space-y-3 mt-2 text-sm">
            <li className="flex">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
              <div>
                <p className="font-medium">
                  Activation can be completed after your pSIM is delivered.{" "}
                  <br />
                  You can activate it after receiving the SIM card, or contact
                  support to arrange delivery.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => next(4, "hasSim")}
              text="I have my Prepay SIM"
            />

            <Button
              onClick={() => next(4, "noSim")}
              text="I haven't received my Prepay SIM"
            />
          </div>
        </div>
      </div>
    </>
  );
}
