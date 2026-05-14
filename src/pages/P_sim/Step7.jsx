import { ArrowRight, Calendar, ChevronLeft } from "lucide-react";

export default function Step7({ next, back }) {
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
          Select your service start date
        </h2>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        <div className="flex flex-col sm:flex-row gap-6 w-full text-center">

          {/* Future Date */}
          <div
            onClick={() => next(7, "schedule")}
            className="flex-1 cursor-pointer"
          >
            <div className="flex flex-col items-center w-full">
              <div className="w-full border-2 border-gray-200 rounded-xl p-5 hover:border-red-500 hover:shadow-md transition-all duration-300 flex justify-center">
                <Calendar className="text-red-500" size={28} />
              </div>
              <h3 className="mt-3 font-semibold text-sm">
                Schedule Your Service for a Future Date
              </h3>
              <p className="mt-2 text-sm">Use this option to start service later.
                Billing begins on the date you select.</p>
            </div>
          </div> 

          {/* Start Now */}
          <div
            onClick={() => next(7, "instant")}
            className="flex-1 cursor-pointer"
          >
            <div className="flex flex-col items-center w-full">
              <div className="w-full border-2 border-gray-200 rounded-xl p-5 hover:border-red-500 hover:shadow-md transition-all duration-300 flex justify-center">
                <ArrowRight className="text-red-500" size={28} />
              </div>
              <h3 className="mt-3 font-semibold text-sm">
                Start Your Service Now
              </h3>
              <p className="mt-2 text-sm">Service activates immediately,
                and billing begins at once.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}