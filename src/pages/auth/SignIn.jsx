import { useState } from "react";

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
        <div className="flex justify-center items-center px-4 py-16">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-4xl">
                <h1 className="primary-heading">Sign In</h1>

                {/* Toggle */}
                <div className="flex max-w-lg px-2 py-2 gap-6 mx-auto justify-center mb-6 bg-gray-100 rounded-full shadow-inner overflow-hidden">
                    {["phone", "email"].map((type) => (
                        <button
                            key={type}
                            onClick={() => handleToggle(type)}
                            className={`w-1/2 py-3 text-sm font-medium transition-colors rounded-full  duration-300 ${method === type
                                    ? "bg-black text-white shadow-md"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>

                <p className="text-center text-gray-500 mb-6 text-sm">
                    Login using your {method === "phone" ? "phone number" : "email"}.
                </p>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="flex max-w-lg mx-auto flex-col gap-5">
                    <input
                        type={method === "phone" ? "tel" : "email"}
                        placeholder={method === "phone" ? "Phone Number" : "Email Address"}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-black text-white rounded-xl py-3 text-sm font-medium hover:bg-gray-900 transition"
                    >
                        Send OTP
                    </button>
                </form>

                <p className="text-center text-gray-400 text-xs mt-6">
                    By continuing, you agree to our{" "}
                    <span className="text-black underline cursor-pointer">Terms & Conditions</span>
                </p>
            </div>
        </div>
    );
}