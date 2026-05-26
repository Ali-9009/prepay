import { useState } from "react";
import { Info, ChevronDown, CheckCircle } from "lucide-react";
import PlanCard from "../components/PlanCard"
import Button from "../components/Gbtn";
import CheckoutProgress from "../components/CheckoutProgress";

export default function PrepaidIq() {
    const [imei, setImei] = useState("");
    const [error, setError] = useState("");
    const [isValid, setIsValid] = useState(false);

    const [carrier, setCarrier] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("Unlimited Talk & Text");
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
        <>
            <div className="px-4 py-12">

                <CheckoutProgress step={1} />

                {/* MAIN LAYOUT */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 my-12">

                    {/* LEFT SIDE PLAN CARD */}
                    <PlanCard
                        plan={{
                            carrier: "AT&T",
                            tag: "Best in America",
                            title: "Unlimited North America Plan",
                            price: 60,
                            popular: true,
                            features: [
                                "Unlimited talk, text & data across the US, Canada, and Mexico",
                                "AT&T 5G network coverage",
                                "10GB hotspot data per line per month",
                            ],
                        }}
                        simType={simType}
                    />

                    {/* RIGHT SIDE FORM */}
                    <div className="border border-gray-300 p-8 rounded-xl shadow-md flex flex-col gap-6 bg-white">

                        {/* DEVICE SECTION */}
                        <div className="flex flex-col gap-4">

                            <p className="font-bold sm:text-xl text-lg">
                                Check your Device Compatibility
                            </p>

                            <div className="flex flex-col gap-3">

                                <h4>Select SIM Type</h4>

                                <div className="flex gap-3 flex-col sm:flex-row">

                                    {/* eSIM */}
                                    <label
                                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition
                                        ${simType === "esim"
                                                ? "border-black bg-gray-50"
                                                : "border-gray-200"
                                            }`}
                                    >
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
                                    <label
                                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition
                                        ${simType === "physical"
                                                ? "border-black bg-gray-50"
                                                : "border-gray-200"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="simType"
                                            value="physical"
                                            checked={simType === "physical"}
                                            onChange={() => setSimType("physical")}
                                            className="accent-black"
                                        />

                                        <span className="font-medium">
                                            Physical SIM
                                        </span>
                                    </label>

                                </div>
                            </div>
                        </div>

                        {/* CONTACT INFO */}
                        <div className="flex flex-col gap-4">

                            <h2 className="font-bold sm:text-xl text-lg">
                                Contact Information
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <Input
                                    label="First Name"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                />

                                <Input
                                    label="Last Name"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                />

                                <Input
                                    label="Email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />

                                <Input
                                    label="Phone"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                />

                            </div>

                            {/* ACTIVATION DETAILS */}
                            <h2 className="font-bold sm:text-xl text-lg">
                                Activation Details
                            </h2>

                            <div className="flex flex-col gap-4">

                                <Input
                                    label="Address 1"
                                    name="address1"
                                    value={form.address1}
                                    onChange={handleChange}
                                />

                                <Input
                                    label="Address 2"
                                    name="address2"
                                    value={form.address2}
                                    onChange={handleChange}
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                    <Input
                                        label="City"
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                    />

                                    <Input
                                        label="Post Code"
                                        name="postcode"
                                        value={form.postcode}
                                        onChange={handleChange}
                                    />

                                    <Input
                                        label="Zip Code"
                                        name="zipcode"
                                        value={form.zipcode}
                                        onChange={handleChange}
                                    />

                                </div>
                            </div>

                            {/* BUTTON */}
                            <div className="flex justify-end mt-6">

                                <Button
                                    to="/checkout-2"
                                    text="Next"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


/* INPUT */
function Input({ label, name, value, onChange }) {
    return (
        <div className="flex flex-col gap-2 w-full">

            <label className="text-sm font-medium">
                {label}
            </label>

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