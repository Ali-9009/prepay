import { ChevronLeft } from "lucide-react";

function StepLayout2({ step, children, prevStep }) {
  const steps = [
    {
      label: "Start Activation",
      title: "Choose your SIM type",
      subtitle: "Which SIM type do you use?",
    },
    {
      label: "Confirm service address",
      title: "Choose your SIM type",
      subtitle: " Which SIM type do you use?. The address must be a valid U.S. address.",
    },
    {
      label: "Activate number",
      title: "Transfer your number",
      subtitle: "To initiate the transfer, we need a few details",
    },
    {
      label: "Activate your device",
      title: "Transfer your number",
      subtitle: "To initiate the transfer, we need a few details",
    },
    {
      label: "Success",
      title: "Connect your device",
      subtitle: "",
    },
    {
      label: "Success",
      title: "Yayyy! Your are all set!",
      subtitle: "",
    },
  ];

  return (
    <main className="bg-red-50">
      <div className="max-w-3xl px-4 mx-auto py-10">
        {/* Step Progress */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((s, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative"
            >
              {/* line */}
              {index !== 0 && (
                <div
                  className={`absolute top-3 -left-1/2 w-full h-0.5
                ${index <= step ? "bg-black" : "bg-gray-300"}`}
                />
              )}
              {/* circle */}
              <div
                className={`z-10 w-6 h-6 rounded-full flex items-center justify-center text-xs
              ${index <= step ? "bg-black text-white" : "bg-gray-300"}`}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-(--primary-color) rounded-t-2xl p-8 text-center relative">

          {/* PREVIOUS BUTTON */}
          {step > 0 && (
            <button
              onClick={prevStep}
              className="absolute left-4 top-7 text-white cursor-pointer"
            >
              <ChevronLeft />
            </button>
          )}

          <h2 className="text-white text-xl font-semibold">
            {steps[step].title}
          </h2>

          {steps[step].subtitle && (
            <p className="text-white text-sm mt-2">
              {steps[step].subtitle}
            </p>
          )}
        </div>

        {/* Card */}
        <div className="bg-white px-4 rounded-b-xl shadow p-6">{children}</div>
      </div>
    </main>
    
  );
}

export default StepLayout2;
