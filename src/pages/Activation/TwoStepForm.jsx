import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import TypingInput from "../../components/TypingInput";
import Plans from "../../components/Plans";
import Button from "../../components/Gbtn";

const COMPATIBLE = ["iphone", "samsung"];

const carriers = [
  { logo: "/images/inter-01.png", name: "Chatr Mobile", link: "/" },
  { logo: "/images/inter-2.png", name: "My Natcom", link: "/ActivateStep" },
  { logo: "/images/inter-3.png", name: "Claro", link: "/ActivateStep" },
  { logo: "/images/inter-4.png", name: "Tigo", link: "/ActivateStep" },
  { logo: "/images/inter-5.png", name: "Flow", link: "/ActivateStep" },
];

/* ── Toast ── */
function Toast({ toast, onClose, isMobile }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4500);
    return () => clearTimeout(t);
  });
  const ok = toast.type === "success";
  return (
    <div
      className={`fixed top-25 z-9999 w-[calc(100%-32px)] max-w-90 mx-auto animate-[toastIn_0.4s_cubic-bezier(.22,.68,0,1.2)_forwards] ${isMobile ? "left-1/2 -translate-x-1/2" : "right-4"}`}
    >
      <div
        className={`rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.15)] border ${ok ? "border-green-200" : "border-red-200"} bg-white`}
      >
        <div className={`h-1 ${ok ? "bg-green-500" : "bg-red-500"}`} />
        <div className="p-3 pl-3.5 pr-3.5 flex items-start gap-2.5">
          <div
            className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center ${ok ? "bg-green-100" : "bg-red-100"}`}
          >
            {ok ? (
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#dc2626"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <div
              className={`font-bold text-[13px] ${ok ? "text-green-800" : "text-red-800"} mb-0.5`}
            >
              {ok ? "Device Compatible ✓" : "Not Compatible ✗"}
            </div>
            <div className="text-[11px] text-gray-500 leading-relaxed">
              {toast.message}
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-transparent border-none cursor-pointer text-gray-400 p-0.5"
          >
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className={`h-0.5 ${ok ? "bg-green-100" : "bg-red-100"}`}>
          <div
            className={`h-full ${ok ? "bg-green-500" : "bg-red-500"} animate-[shrinkBar_4.5s_linear_forwards] w-full`}
          />
        </div>
      </div>
    </div>
  );
}

export default function ActivationFlow3() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [deviceInput, setDeviceInput] = useState("");
  const [toast, setToast] = useState(null);
  const [checking, setChecking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [deviceChecked, setDeviceChecked] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const TOTAL_STEPS = 3;

  const nextStep = () => {
    if (step === 1) {
      // Step 1: Device Check
      if (!deviceChecked) {
        setToast({
          type: "error",
          message:
            "Please check your device compatibility first, or click Skip.",
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Step 2: Carrier selection
      if (selectedCarrier === null) {
        setToast({
          type: "error",
          message: "Please select a carrier before proceeding.",
        });
        return;
      }
      setStep(3);
    } else if (step === 3) {
      // Step 3: Plan selection → submit
      if (!selectedPlan) {
        setToast({
          type: "error",
          message: "Please select a plan before submitting.",
        });
        return;
      }
      setShowPopup(true);
    }
  };

  const prevStep = () => step > 1 && setStep(step - 1);

  const handleCheck = () => {
    if (!deviceInput.trim()) {
      setToast({
        type: "error",
        message: "Please enter a device name (e.g. iPhone 15, Samsung S24).",
      });
      return;
    }
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      const ok = COMPATIBLE.some((d) => deviceInput.toLowerCase().includes(d));
      if (ok) {
        setToast({
          type: "success",
          message: `"${deviceInput}" is fully compatible!`,
        });
        setDeviceChecked(true);
      } else {
        setToast({
          type: "error",
          message: `"${deviceInput}" may not be supported. You can still proceed.`,
        });
        setDeviceChecked(true);
      }
    }, 1300);
  };

  const handleSkip = () => {
    setDeviceChecked(true);
    setToast({
      type: "success",
      message: "Skipped! You can now proceed to the next step.",
    });
  };

  return (
    <>
      <style>{`
        @keyframes toastIn{from{opacity:0;transform:translateY(-20px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes shrinkBar{from{width:100%}to{width:0%}}
        @keyframes spin{to{transform:rotate(360deg)}}
        .spinner{animation:spin 0.8s linear infinite}
      `}</style>

      {toast && (
        <Toast
          toast={toast}
          onClose={() => setToast(null)}
          isMobile={isMobile}
        />
      )}

      <div className="bg-red-50 py-10 sm:py-12 px-4">
        {/* Top Banner */}
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-12 rounded-2xl h-70 bg-linear-to-r from-[#EB4041] to-[#FF6B6B] text-center shadow-lg text-white">
          <h1 className="text-[22px] sm:text-[28px] md:text-[35px] font-bold mb-3 leading-tight">
            Go Live with eSIM in Under a Minute
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium mb-2">
            No waiting. No store visits. Just check your device, choose a plan,
            and enjoy instant connectivity anywhere in the world.
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full bg-white -mt-24 sm:-mt-14 md:-mt-24 shadow-md max-w-4xl rounded-xl border border-(--primary-color) mx-auto p-4 sm:p-6 md:p-8">
          {/* Step Bar */}
          <div className="mb-6 max-w-lg mx-auto">
            {/* Counter */}
            <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-2">
              <span className="font-semibold">
                Step {step} of {TOTAL_STEPS}
              </span>
            </div>

            {/* 3 Segment Progress Bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-(--primary-color) h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${(step / TOTAL_STEPS) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Form Steps */}
          <div className="mt-6 sm:mt-8">
            {step === 1 && (
              <StepOne
                deviceInput={deviceInput}
                setDeviceInput={setDeviceInput}
                handleCheck={handleCheck}
                handleSkip={handleSkip}
                checking={checking}
                deviceChecked={deviceChecked}
              />
            )}
            {step === 2 && (
              <StepTwo
                selectedCarrier={selectedCarrier}
                setSelectedCarrier={setSelectedCarrier}
              />
            )}
            {step === 3 && (
              <StepThree
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
            {step > 1 ? (
              <Button
                className="flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={prevStep}
                text={
                  <span className="flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </span>
                }
              />
            ) : (
              <div></div>
            )}

            <Button
              className="flex items-center justify-center gap-2 w-full sm:w-auto"
              onClick={nextStep}
              text={
                <span className="flex items-center gap-2">
                  {step === 3 ? "Submit" : "Next"}
                  <ArrowRight className="w-5 h-5" />
                </span>
              }
            />
          </div>

          {/* Popup */}
          {showPopup && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
              <div className="bg-white p-6 sm:p-8 rounded-lg text-center max-w-md w-full">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-red-600">
                  Thank You!
                </h2>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Your plan selection has been submitted successfully.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowPopup(false);
                    window.location.href = "/Checkout";
                  }}
                  className="w-full sm:w-auto px-6 py-2 bg-(--primary-color) text-white rounded font-semibold"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* ================= STEP 1: Device Check ================= */
function StepOne({
  deviceInput,
  setDeviceInput,
  handleCheck,
  handleSkip,
  checking,
  deviceChecked,
}) {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-center">
          Check Device Compatibility
        </h1>
        <p className="text-md max-w-lg mx-auto font-medium mt-1 text-center text-[#202D4D]">
          Enter your device name or IMEI to ensure it supports eSIM technology
          before proceeding.
        </p>
      </div>

      <div className="pb-6">
        <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold text-[15px] text-gray-900">
              Check your Device Compatibility
            </span>
            {deviceChecked && (
              <span className="ml-auto text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                ✓ Done
              </span>
            )}
          </div>

          <div className="flex gap-2 mb-2.5">
            <TypingInput
              value={deviceInput}
              onChange={(e) => setDeviceInput(e.target.value)}
            />

            <button
              onClick={handleCheck}
              disabled={checking}
              className={`bg-gray-800 text-white rounded-[10px] px-3.5 py-2.5 text-[13px] font-semibold flex items-center gap-1.5 shrink-0 cursor-pointer ${checking ? "opacity-70" : "opacity-100"}`}
            >
              {checking && (
                <svg
                  className="spinner"
                  width="12"
                  height="12"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M12 4a8 8 0 018 8" />
                </svg>
              )}
              {checking ? "…" : "Check"}
            </button>

            <button
              onClick={handleSkip}
              className="bg-gray-100 text-gray-600 rounded-[10px] px-3.5 py-2.5 text-[13px] font-semibold shrink-0 cursor-pointer"
            >
              Skip
            </button>
          </div>

          <p className="text-gray-400 text-[11px] leading-relaxed m-0">
            Check compatibility and find the best network for your device.
            Checkout instantly — no contracts, no confusion.
          </p>
        </div>
      </div>
    </>
  );
}

/* ================= STEP 2: Choose Carrier ================= */
function StepTwo({ selectedCarrier, setSelectedCarrier }) {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-center">Choose Your Carrier</h1>
        <p className="text-md font-medium mt-1 text-center text-[#202D4D]">
          Select the network provider that fits your needs — fast, reliable, and
          flexible.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {carriers.map((carrier, index) => (
          <div
            key={index}
            onClick={() => setSelectedCarrier(index)}
            className={`flex flex-col items-center justify-center cursor-pointer transition rounded-lg p-2 outline-none
                            ${
                              selectedCarrier === index
                                ? "border-2 border-lime-300"
                                : "border-2 border-transparent"
                            }`}
          >
            <img src={carrier.logo} alt={carrier.name} className="" />
          </div>
        ))}
      </div>
    </>
  );
}

/* ================= STEP 3: Select Plan ================= */
function StepThree({ selectedPlan, setSelectedPlan }) {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-center">Select Your Plan</h1>
        <p className="text-md max-w-lg mx-auto font-medium mt-1 text-center text-[#202D4D]">
          Choose the data plan that best suits your travel and connectivity
          needs.
        </p>
      </div>

      <Plans selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />
    </>
  );
}
