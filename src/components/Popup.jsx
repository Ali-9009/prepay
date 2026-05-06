import React, { useState } from "react";
import Button from "../components/Gbtn";

const Popup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else onClose(); // close popup on finish or reset if you want
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div onClick={(e) => e.stopPropagation()} className="relative max-w-5xl w-full bg-[url('/images/popup-bg.png')] bg-cover bg-center rounded-2xl overflow-hidden">
        {/* Back button on steps 2 & 3 */}
        {step > 1 && (
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 text-white underline"
          >
            &larr; Back
          </button>
        )}

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Step content */}
        {step === 1 && (
          <section className="pt-12 pb-8 px-6 md:px-8 overflow-hidden flex flex-col md:flex-row items-center justify-center gap-0">
            {/* Left Text */}
            <div className="text-white md:flex-1">
              <h1 className="text-4xl font-semibold leading-tight mb-3">
                Get your free eSIM <br /> in 60 seconds
              </h1>
              <p className="text-base leading-relaxed mb-6 max-w-md">
                No physical SIM needed. No in-store visit. Instantly activate.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <img src="/images/point.png" alt="" />
                  <span>Worked with iPhone and Android</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/images/point.png" alt="" />
                  <span>Instant QR code delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/images/point.png" alt="" />
                  <span>100% free, no credit card required</span>
                </li>
              </ul>
              <div className="flex w-full gap-2 mt-6">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email or mobile number..."
                  className="input bg-white text-gray-500 flex-1 px-4 py-2 rounded"
                />
                <Button onClick={handleNext} text="Submit" />
              </div>
            </div>

            {/* Right Character Image */}
            <div className="md:flex md:flex-1 md:justify-center hidden">
              <img
                src="/images/popup-1.png"
                alt="Hello Prepay mascot"
                className="drop-shadow-xl w-70"
              />
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="pt-12 pb-8 px-6 md:px-8 overflow-hidden flex flex-col md:flex-row items-center justify-center gap-0">
            {/* Left Text */}
            <div className="text-white md:flex-1">
              <h1 className="text-4xl font-semibold leading-tight mb-3">
                Verify Your Email
              </h1>
              <p className="text-base leading-relaxed mb-6 max-w-md">
                We sent a 6-digit code to {email}
              </p>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  maxLength="1"
                  className="w-10 p-2 text-center border border-white text-white"
                  onChange={(e) => setCode(e.target.value)}
                />
                <input
                  type="text"
                  maxLength="1"
                  className="w-10 p-2 text-center border border-white text-white"
                  onChange={(e) => setCode(e.target.value)}
                />
                <input
                  type="text"
                  maxLength="1"
                  className="w-10 p-2 text-center border border-white text-white"
                  onChange={(e) => setCode(e.target.value)}
                />
                <input
                  type="text"
                  maxLength="1"
                  className="w-10 p-2 text-center border border-white text-white"
                  onChange={(e) => setCode(e.target.value)}
                />
                <input
                  type="text"
                  maxLength="1"
                  className="w-10 p-2 text-center border border-white text-white"
                  onChange={(e) => setCode(e.target.value)}
                />
                <input
                  type="text"
                  maxLength="1"
                  className="w-10 p-2 text-center border border-white text-white"
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <p className="text-base leading-relaxed mb-6 max-w-md">
                Resend in 00:34
              </p>
              <Button
                onClick={handleNext}
                disabled={code.length < 6}
                text="Verify"
              />
              <p className="mt-4 text-sm">
                Didn't receive it?{" "}
                <button className="underline">Resend Code</button>
              </p>
            </div>

            {/* Right Character Image */}
            <div className="md:flex md:flex-1 md:justify-center hidden">
              <img
                src="/images/popup-2.png"
                alt="Hello Prepay mascot"
                className="drop-shadow-xl w-70"
              />
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="pt-12 pb-8 px-6 md:px-8 overflow-hidden flex flex-col md:flex-row items-center justify-center gap-0">
            <div className="flex flex-col gap-4 md:flex-row items-center justify-center bg-black/60 p-12 rounded-2xl border border-white">
              {/* Left Text */}
              <div className="text-white md:flex-1 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-lg text-center font-semibold leading-tight mb-3">
                    Your Free eSIM is Ready!
                  </h1>
                  <img src="/images/qr-code.png" alt="" />
                  <p className="text-base leading-relaxed mt-2 max-w-md">
                    Scan Me
                  </p>
                  <p className="text-base leading-relaxed mb-6 max-w-md">
                    QR Code Install on Device
                  </p>
                </div>
              </div>

              {/* Right Character Image */}
              <div className="text-white md:flex md:flex-1 md:justify-center">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="text-lg font-semibold">Install Your eSIM</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <img src="/images/point.png" alt="" />
                      <span>Worked with iPhone and Android</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="/images/point.png" alt="" />
                      <span>Instant QR code delivery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="/images/point.png" alt="" />
                      <span>100% free, no credit card required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Popup;
