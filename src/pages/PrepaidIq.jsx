import { useState } from "react";
import { Info, ChevronDown, CheckCircle } from "lucide-react";

import Button from "../components/Gbtn";

export default function PrepaidIq() {
    const [imei, setImei] = useState("");
    const [error, setError] = useState("");
    const [isValid, setIsValid] = useState(false);

    const [carrier, setCarrier] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("Select Plan");
    const [simType, setSimType] = useState("");

    
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        postcode: "",
        zipcode: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCheckIMEI = () => {
        if (!imei.trim()) {
            setError("Please enter IMEI number");
            return;
        }
        setError("");
        setIsValid(true);
    };

    return (
        <div className="max-w-3xl mx-auto flex flex-col gap-6 py-12 px-4">

            {/* ───────── DEVICE CHECK ───────── */}
            <div className="flex flex-col gap-4">

                <p className="font-bold sm:text-xl text-lg">
                    Check your Device Compatibility
                </p>

                <div className="flex flex-col gap-3">

                    <div className="flex items-center gap-1 text-sm">
                        Enter your IMEI number
                        <Info size={16} className="text-blue-500 cursor-pointer" />
                    </div>

                    <div className="flex sm:flex-row flex-col gap-2">

                        <input
                            type="text"
                            value={imei}
                            onChange={(e) => setImei(e.target.value)}
                            placeholder="Enter IMEI"
                            className="flex-1 rounded-md px-3 py-3 bg-gray-100 outline-none"
                        />

                        <div className="flex gap-2 max-sm:w-full">

                            <button
                                onClick={handleCheckIMEI}
                                className="bg-black text-white px-4 py-3 rounded-[10px] w-full hover:opacity-90"
                            >
                                Check
                            </button>

                            <button
                                onClick={() => {
                                    setError("");
                                    setIsValid(true);
                                }}
                                className="bg-gray-200 text-black px-4 py-3 rounded-[10px] w-full hover:bg-gray-300"
                            >
                                Skip
                            </button>

                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}
                </div>

                {/* SUCCESS */}
                {isValid && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                        <h2 className="text-green-600 text-xl font-bold flex items-center gap-2">
                            <CheckCircle className="text-green-500" size={20} />
                            Great News!
                        </h2>
                        <p className="text-sm text-gray-700 mt-1">
                            Your Device is eSIM Compatible{" "}
                            <span className="font-bold">{imei || "IMEI"}</span>.
                            You’ll receive your eSIM after checkout.
                        </p>
                    </div>
                )}

                {/* DROPDOWN */}
                <div className="relative">

                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg flex justify-between items-center"
                    >
                        <span>{selectedPlan}</span>
                        <ChevronDown
                            className={`transition ${dropdownOpen ? "rotate-180" : ""}`}
                            size={18}
                        />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">

                            {[
                                "1 Month best for trying it out",
                                "2 Month short term option",
                                "3 Month value plan",
                            ].map((plan) => (
                                <button
                                    key={plan}
                                    onClick={() => {
                                        setSelectedPlan(plan);
                                        setDropdownOpen(false);
                                    }}
                                    className="w-full px-4 py-3 text-left hover:bg-gray-100"
                                >
                                    {plan}
                                </button>
                            ))}

                        </div>
                    )}
                </div>


                <div className="flex flex-col gap-3">

                    <h4 className="">
                        Select SIM Type
                    </h4>

                    <div className="flex gap-3 flex-col sm:flex-row">

                        {/* eSIM */}
                        <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition
            ${simType === "esim" ? "border-black bg-gray-50" : "border-gray-200"}
        `}>
                            <input
                                type="radio"
                                name="simType"
                                value="esim"
                                checked={simType === "esim"}
                                onChange={() => setSimType("esim")}
                                className="accent-black"
                            />
                            <span className="font-medium">eSIM</span>
                        </label>

                        {/* Physical SIM */}
                        <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition
            ${simType === "physical" ? "border-black bg-gray-50" : "border-gray-200"}
        `}>
                            <input
                                type="radio"
                                name="simType"
                                value="physical"
                                checked={simType === "physical"}
                                onChange={() => setSimType("physical")}
                                className="accent-black"
                            />
                            <span className="font-medium">Physical SIM</span>
                        </label>

                    </div>
                </div>
               

            </div>

            {/* ───────── FORM ───────── */}
            <div className="flex flex-col gap-4">

                <h2 className="text-2xl font-bold">Create Your Account</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <Input label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
                    <Input label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
                    <Input label="Email" name="email" value={form.email} onChange={handleChange} />
                    <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} />

                </div>

                <h2 className="text-2xl font-bold mt-2">Activation Details</h2>

                <div className="flex flex-col gap-4">

                    <Input label="Address 1" name="address1" value={form.address1} onChange={handleChange} />
                    <Input label="Address 2" name="address2" value={form.address2} onChange={handleChange} />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Input label="City" name="city" value={form.city} onChange={handleChange} />
                        <Input label="Post Code" name="postcode" value={form.postcode} onChange={handleChange} />
                        <Input label="Zip Code" name="zipcode" value={form.zipcode} onChange={handleChange} />
                    </div>

                </div>

                {/* BUTTONS */}
                <div className="flex justify-end mt-6">

                    <Button to="/checkout-2" text="Next" />

                </div>

            </div>

        </div>
    );
}

/* ───────── INPUT COMPONENT ───────── */
function Input({ label, name, value, onChange }) {
    return (
        <div className="flex flex-col gap-2 w-full">

            <label className="text-sm font-medium">{label}</label>

            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={label}
                className="bg-gray-100 rounded-md px-3 py-3 w-full outline-none focus:ring-2 focus:ring-black/10"
            />

        </div>
    );
}