import { ChevronLeft, Phone, IdCard } from "lucide-react";
import { PhoneCall, PlusCircle } from "lucide-react";
import Button from "../../components/Gbtn";
import { Link } from "react-router-dom";

export default function Step6({ next, back }) {
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
          Yayyy! Here is your new number
        </h2>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-bold text-2xl">(512) 743 - 6742</p>

          <Button
            onClick={() => next(6)}
            className="text-center mt-4"
            text="Select your service date"
          />
        </div>
      </div>
    </>
  );
}
