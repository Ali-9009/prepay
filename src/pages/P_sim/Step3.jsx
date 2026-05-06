import { ChevronLeft, Phone, IdCard } from "lucide-react";
import { PhoneCall, PlusCircle } from "lucide-react";
import Button from "../../components/Gbtn";
import { Link } from "react-router-dom";

export default function Step3({ next, back }) {
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
          Choose your number option
        </h2>

        <p className="text-white text-sm mt-1 max-w-md">
          Keep your current number or get a new one its up to you
        </p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
          <Link onClick={() => next(3)} className="flex-1">
            <div className="h-full cursor-pointer border-2 border-gray-200 rounded-xl p-5 flex flex-col items-center text-center transition hover:border-red-500 hover:shadow-md">
              <PhoneCall className="mb-3 text-red-500" size={28} />
              <h3 className="font-semibold text-sm">
                I want to transfer my number to Panda
              </h3>
            </div>
          </Link>

          <Link onClick={() => next(3)} className="flex-1">
            <div className="h-full cursor-pointer border-2 border-gray-200 rounded-xl p-5 flex flex-col items-center text-center transition hover:border-red-500 hover:shadow-md">
              <PlusCircle className="mb-3 text-red-500" size={28} />
              <h3 className="font-semibold text-sm">I’d like a new number</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
