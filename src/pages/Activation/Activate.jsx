import { CreditCard, Eye, EyeOff, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/Gbtn";
import PersonalInfo from "../../components/PersonalInfo";


export default function Activation() {
  const [simType, setSimType] = useState("physical");
  const [selected, setSelected] = useState("Physical SIM");
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState("phone"); // phone or email
  const [inputValue, setInputValue] = useState("");
  const [authType, setAuthType] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = (type) => {
    setMethod(type);
    setInputValue(""); // reset input when switching
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Send OTP to ${inputValue} via ${method}`);
  };

  return (
    <>
      <div className="max-w-full mx-auto bg-red-50 px-4 py-12 space-y-8">

        <div className="max-w-150 mx-auto">
          <h1 className="text-lg font-semibold mb-4">1. Your account</h1>
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl w-full">
            <img src="/images/logo.png" className="w-32 mb-6 mx-auto" alt="" />

            <div className="flex max-w-xs mx-auto mb-6 p-1 bg-gray-100 rounded-full shadow-inner">
              {["signin", "signup"].map((type) => (
                <button
                  key={type}
                  onClick={() => setAuthType(type)}
                  className={`w-1/2 py-2 text-sm font-medium rounded-full transition-all duration-300 ${authType === type
                    ? "bg-(--primary-color) text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {type === "signin" ? "Sign In" : "Sign Up"}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex max-w-md mx-auto flex-col gap-5 items-center"
            >

              <div className="w-full flex flex-col md:flex-row gap-4">

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />

                {/* Password */}
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

              </div>

              <Button
                text={authType === "signin" ? "Sign In" : "Sign Up"}
                to="#"
                className="text-center w-full"
              />

              {/* Social */}
              <div className="flex items-center justify-center border border-gray-300 rounded-lg gap-2 px-4 w-full">
                <p className="text-sm font-semibold">Continue With</p>
                <img className="w-12" src="/images/google-i.png" alt="" />
              </div>

            </form>

          </div>
        </div>

        <div className="max-w-150 mx-auto">
          {/* Title */}
          <h1 className="text-lg font-semibold mb-4">1. Your account</h1>

          {/* Card */}
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl w-full flex flex-col items-center">

            {/* Logo */}
            <img src="/images/logo.png" className="w-32 mb-6" alt="" />

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-150 flex-col gap-5 items-center"
            >

              <div className="w-full text-right">
                <input
                  placeholder="example@gmail.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-left focus:outline-none focus:ring-1 focus:ring-black"
                />

                <p className="text-xs text-gray-500 mt-2 text-right">
                  Not you? <span className="underline text-(--primary-color) cursor-pointer">Switch account</span>
                </p>
              </div>

              <Button
                text="My Account"
                onClick={() => setOpen(true)}
                className="w-full text-center"
              />
              <PersonalInfo open={open} onClose={() => setOpen(false)} />
            </form>
          </div>
        </div>

        <div className="max-w-150 mx-auto hidden">

          <h1 className="text-lg font-semibold mb-4">1. Your account</h1>

          <div className="flex justify-between items-start sm:items-center bg-(--primary-color) text-white rounded-t-2xl px-4 sm:px-6 py-3 sm:py-4 gap-2">
            <h2 className="text-base sm:text-lg font-semibold">Verification</h2>
          </div>

          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-b-2xl shadow-xl flex flex-col items-center text-center">


            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
              Verify your email
            </h1>


            <p className="text-sm text-gray-500 mb-6">
              We sent a 6-digit verification code to <br />
              <span className="font-medium text-gray-700">
                example@email.com
              </span>
            </p>

            <div className="flex gap-3 mb-6">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-lg text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black transition"
                />
              ))}
            </div>


            <p className="text-sm text-gray-400 mb-4">
              Resend code in <span className="text-gray-600 font-medium">00:34</span>
            </p>


            <Button
              text="Verify Code"
              className=""
            />

            <p className="mt-4 text-sm text-gray-500">
              Didn’t receive the code?{" "}
              <button className="text-black font-medium hover:underline">
                Resend
              </button>
            </p>

          </div>
        </div>

        <div className="max-w-150 mx-auto">
          <h1 className="text-lg font-semibold mb-4">2. Plan summary</h1>
          {/* Header */}
          <div className="flex flex-row justify-between items-start sm:items-center bg-(--primary-color) text-white rounded-t-2xl px-4 sm:px-6 py-3 sm:py-4 gap-2">
            <h2 className="text-base sm:text-lg font-semibold">Plan Summary</h2>


            <Link to="/TwoStepForm">
              <button className="bg-white text-black text-sm sm:text-md px-3 py-1 rounded-full font-semibold">
                Change Plan
              </button>
            </Link>
          </div>

          {/* Card */}
          <div className="bg-white rounded-b-2xl shadow-xl w-full p-4 sm:p-6">

            {/* Plan + Price */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-base">Unlimited Plus</h3>
              </div>

              <div className="text-right">
                <p className="font-semibold">$45.00/month</p>
                <p className="text-xs text-gray-500 italic">
                  taxes & fees incl.
                </p>
              </div>
            </div>

            {/* Data */}
            <p className="text-sm mt-3 text-gray-700">
              30GB of high speed data
            </p>

            <hr className="my-4 border-gray-300" />

            {/* Features */}
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500">✔</span>
                Free calls to China (+200 other countries)
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-500">✔</span>
                5GB of free data roaming in China
              </li>
            </ul>

            {/* SIM Type */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-5">

              {/* Left */}
              <div className="flex flex-col sm:flex-row sm:items-center">

                <span className="text-sm font-semibold mb-1 sm:mb-0 sm:mr-3">
                  SIM Type:
                </span>

                <div className="flex bg-(--primary-color) rounded-full p-1 text-sm w-full sm:w-auto">

                  {/* Physical SIM */}
                  <button
                    onClick={() => setSimType("physical")}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-1 rounded-full font-medium transition-all duration-200 ${simType === "physical"
                        ? "bg-white text-black shadow"
                        : "text-gray-200"
                      }`}
                  >
                    Physical SIM
                  </button>

                  {/* eSIM */}
                  <button
                    onClick={() => setSimType("esim")}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-1 rounded-full font-medium transition-all duration-200 ${simType === "esim"
                        ? "bg-white text-black shadow"
                        : "text-gray-200"
                      }`}
                  >
                    eSIM
                  </button>

                </div>
              </div>

              {/* Right */}
              {/* <a href="#" className="text-red-500 text-sm underline mt-2 sm:ml-3">
                View more details
              </a> */}
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-red-500"
              />

              <div>
                <p className="font-medium text-sm">
                  Already have a Panda Mobile SIM
                </p>
                <p className="text-xs text-gray-500">
                  Choose this if you have a Panda Mobile SIM card in hand – e.g. from an event or store.
                </p>
              </div>
            </label>
          </div>
        </div>

        <div className="max-w-150 mx-auto">
          <h1 className="text-lg font-semibold mb-4">3. Order Summary</h1>
          {/* Header */}
          <div className="flex flex-row justify-between items-start sm:items-center bg-(--primary-color) text-white rounded-t-2xl px-4 sm:px-6 py-3 sm:py-4 gap-2">
            <h2 className="text-base sm:text-lg font-semibold">
              Order Details
            </h2>

            <Link to="/TwoStepForm">
              <button className="bg-white text-black text-sm sm:text-md px-3 py-1 rounded-full font-semibold">
                Change Plan
              </button>
            </Link>
          </div>

          {/* Card */}
          <section className="bg-white rounded-b-2xl shadow-xl w-full">
            <div className="p-4 sm:p-6">
              <hr className="border border-gray-300 my-4" />
              {/* Top Info */}
              <div className="flex flex-row sm:items-center sm:justify-between gap-4">
                {/* Left */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src="/images/at-t.png"
                    alt="AT&T"
                    className="w-20 sm:w-32 object-contain"
                  />

                  <h3 className="text-sm sm:text-lg font-semibold leading-[1.4]">
                    Unlimited North <br className="hidden sm:block" />
                    America Plan
                  </h3>
                </div>

                {/* Price */}
                <div className="text-left sm:text-center">
                  <div className="text-red-600 text-center font-bold text-xl sm:text-[26px]">
                    $60
                    <span className="text-sm text-black font-medium">/mo</span>
                  </div>
                  <p className="text-xs text-center sm:text-sm">
                    Plus taxes and fees
                  </p>
                </div>
              </div>

              <hr className="border border-gray-300 my-4" />

              <div className="space-y-4">
                {/* Coupon & Referral */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="input"
                    />
                    <Button text="Apply" />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Referral code"
                      className="input"
                    />
                    <Button text="Apply" />
                  </div>
                </div>

                {/* Fees */}
                <div className="border-t border-gray-300 pt-4 space-y-2">
                  <div className="flex justify-between text-md font-medium">
                    <span>Shipping Fee</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-md font-medium">
                    <span>Tax & Fees</span>
                    <span>Free</span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
                  <span className="font-semibold text-red-600">Total</span>
                  <span className="font-bold text-[26px]">$60</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="max-w-150 mx-auto">
          <h1 className="text-lg font-semibold mb-4">
            4. Shipping and Payment Information
          </h1>

          <div className="flex flex-row justify-between items-start sm:items-center bg-(--primary-color) text-white rounded-t-2xl px-4 sm:px-6 py-3 sm:py-4 gap-2">
            <h2 className="text-base sm:text-lg font-semibold">
              Payment information
            </h2>
          </div>

          <div className="p-4 bg-white rounded-b-2xl shadow-xl w-full space-y-4">
            {/* Payment Options */}
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              {/* Debit / Credit cards */}
              <label className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-gray-300 cursor-pointer">
                <div className="flex items-center gap-3">
                  {/* Radio (FIXED SIZE) */}
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio h-5 w-5 text-red-600 shrink-0"
                  />

                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 shrink-0" />
                    <span className="font-medium">Debit / Credit cards</span>
                  </div>
                </div>

                {/* Right Logos */}
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-0 sm:gap-1">
                  <img src="/images/visa.png" alt="Visa" className="h-5 w-auto shrink-0" />
                  <img src="/images/master.png" alt="MasterCard" className="h-5 w-auto shrink-0" />
                  <img src="/images/american.png" alt="Amex" className="h-5 w-auto shrink-0" />
                  <img src="/images/discover.png" alt="Discover" className="h-5 w-auto shrink-0" />
                </div>
              </label>

              {/* Bank */}
              <label className="flex items-center gap-3 p-4 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio h-5 w-5 text-red-600 shrink-0"
                />
                <Landmark className="h-5 w-5 shrink-0" />
                <span className="font-medium">Bank</span>
              </label>
            </div>

            {/* Save info checkbox */}
            <label className="flex items-start gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-red-600 mt-1"
              />
              <div className="text-sm">
                <p className="font-medium">
                  Save my information for faster checkout
                </p>
                <p className="text-gray-600">
                  Pay securely at Hello Prepay and everywhere Link is accepted
                </p>
              </div>
            </label>

            {/* Stripe Footer */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="font-bold text-blue-700">stripe</span>
              <div className="flex gap-4">
                <span>Legal</span>
                <span>Contact</span>
              </div>
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <span>
                I agree to the{" "}
                <span className="underline">terms of service</span>*
              </span>
            </label>

            {/* Checkout Button */}
            <Button
              className="w-full text-center"
              text="Checkout and proceed to activation"
              to="/StartActivation/purchase"
            />

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 text-center">
              By placing your order, you agree to out{" "}
              <span className="underline">Terms of Service</span> and{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
