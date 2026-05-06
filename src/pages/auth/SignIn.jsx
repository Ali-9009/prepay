import { useState } from "react";
import Button from "../../components/Gbtn";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [method, setMethod] = useState("phone"); // phone or email
  const [inputValue, setInputValue] = useState("");

  const handleToggle = (type) => {
    setMethod(type);
    setInputValue(""); // reset input when switching
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Send OTP to ${inputValue} via ${method}`);
  };

  return (
    <div className="flex bg-red-50 justify-center items-center px-4 py-16">
      <div className="bg-white border border-(--primary-color) p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex items-center justify-center pb-8">
          <img src="/images/logo.png" alt="" />
        </div>

        <h1 className="text-2xl font-semibold">Sign In</h1>

        <p className="text-gray-500 mb-6 text-sm">
          Login using your {method === "phone" ? "phone number" : "email"}.
        </p>

        {/* Toggle */}
        <div className="flex max-w-lg px-2 py-2 gap-6 mx-auto justify-center mb-6 bg-gray-100 rounded-full shadow-inner overflow-hidden">
          {["phone", "email"].map((type) => (
            <button
              key={type}
              onClick={() => handleToggle(type)}
              className={`w-1/2 py-3 text-sm font-medium transition-colors rounded-full  duration-300 ${
                method === type
                  ? "bg-(--primary-color) text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex max-w-lg mx-auto flex-col gap-5"
        >
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              {method === "phone" ? "Phone Number" : "Email Address"}
            </label>

            <input
              type={method === "phone" ? "tel" : "email"}
              placeholder={method === "phone" ? "Phone Number" : "Email Address"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-black transition"
              required
            />
          </div>

          <Button
            text="Send OTP"
            to="/dashboard/myline"
            className="py-3 text-center"
          />
          <div className="flex border border-gray-300 rounded-xl flex-row items-center justify-center">
            <p className="text-center text-md font-medium">
               Continue With
            </p>
            <img className="w-12" src="/images/google-i.png" alt="" />
          </div>
        </form>

        <p className="text-center text-gray-400 text-xs mt-6">
          By continuing, you agree to our{" "}
          <Link className="cursor-pointer" to="/TermsConditions">
            <span className="text-black underline">
              Terms & Conditions
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
