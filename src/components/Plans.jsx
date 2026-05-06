import { useState } from "react";
import { Link } from "react-router-dom";

const plans = [
    {
        id: 1,
        carrier: "AT&T",
        tag: "Best in America",
        title: "Unlimited North America Plan",
        price: 60,
        popular: true,
        features: [
            "Unlimited talk, text & data across the US, Canada, and Mexico",
            "Unlimited talk, text & data in the US, Canada, and Mexico",
            "AT&T 5G network coverage",
            "10GB hotspot data per line per month",
        ],
    },
    {
        id: 2,
        carrier: "T-Mobile",
        title: "Unlimited Monthly",
        price: 50,
        features: [
            "Unlimited talk, text & data",
            "Unlimited 5G with 50GB of premium data before slowing",
            "Unlimited talk and text",
            "Unlimited mobile hotspot at 3G speed",
            "Canada & Mexico add-on available",
        ],
    },
    {
        id: 3,
        carrier: "T-Mobile",
        title: "Starter Monthly",
        price: 45,
        features: [
            "10GB of premium data, then unlimited at 2G speed",
            "Unlimited talk and text",
            "Canada & Mexico add-on available",
        ],
    },
];

export default function Plans({ selectedPlan: externalSelectedPlan, onSelectPlan }) {
    const [internalSelectedPlan, setInternalSelectedPlan] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Use external selectedPlan if provided, otherwise use internal
    const selectedPlan = externalSelectedPlan !== undefined ? externalSelectedPlan : internalSelectedPlan;

    const handleSelectPlan = (planId) => {
        if (externalSelectedPlan !== undefined) {
            // Parent controls selection
            onSelectPlan?.(planId);
        } else {
            // Internal state
            setInternalSelectedPlan(planId);
        }
    };

    return (
        <div className="">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* OVERLAY */}
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    />
                )}

                {/* ================= LEFT FILTER ================= */}
                <div
                    className={`fixed md:static bg-white top-0 left-0 h-full md:h-fit w-70 md:w-auto border border-gray-300 shadow-md rounded-xl p-5 z-50 transition-transform duration-300 overflow-y-auto
                    ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
                >

                    {/* HEADER */}
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-xs font-semibold text-gray-400">
                            FILTER PLANS
                        </p>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="md:hidden text-lg text-gray-500"
                        >
                            ✕
                        </button>
                    </div>

                    <FilterSection
                        title="Duration"
                        options={["All plans", "Monthly", "Annual"]}
                    />

                    <FilterSection
                        title="Network"
                        options={["All networks", "AT&T", "T-Mobile", "Verizon"]}
                    />

                    <FilterSection
                        title="Data"
                        options={["Any amount", "Unlimited", "5GB+", "15GB+", "30GB+"]}
                    />

                    {/* FEATURES */}
                    <div className="mb-5">
                        <p className="text-sm font-medium mb-2">Features</p>
                        <div className="space-y-2 text-sm text-gray-600">
                            <label className="flex gap-2 items-center">
                                <input type="checkbox" className="accent-red-500" /> Canada & Mexico
                            </label>
                            <label className="flex gap-2 items-center">
                                <input type="checkbox" className="accent-red-500" /> Hotspot included
                            </label>
                            <label className="flex gap-2 items-center">
                                <input type="checkbox" className="accent-red-500" /> 5G only
                            </label>
                        </div>
                    </div>

                    <div className="mt-4 space-y-2">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full bg-red-500 text-white rounded-lg py-2 text-sm font-medium hover:bg-red-600"
                        >
                            Apply
                        </button>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full border rounded-lg py-2 text-sm hover:bg-gray-50"
                        >
                            Reset all filters
                        </button>
                    </div>

                </div>

                {/* ================= RIGHT ================= */}
                <div className="md:col-span-3">

                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-4">

                        {/* LEFT SIDE */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="md:hidden text-xl"
                            >
                                ☰
                            </button>

                            <p className="text-sm text-gray-500">
                                {plans.length} plans available
                            </p>
                        </div>

                        {/* RIGHT */}
                        <select className="text-sm border border-gray-300 rounded-md px-3 py-1 bg-white">
                            <option>Sort: Featured</option>
                        </select>
                    </div>

                    {/* PLANS */}
                    <div className="space-y-4">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                onClick={() => handleSelectPlan(plan.id)}
                                className={`relative bg-white border border-gray-300 shadow-md rounded-xl p-8 transition cursor-pointer
                                ${selectedPlan === plan.id ? "ring-1 ring-red-500" : ""}`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-5 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-b-xl">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <div className="flex items-center gap-2 text-xs mb-3">
                                            <span className="text-gray-500 font-bold text-xs">
                                                {plan.carrier}
                                            </span>
                                            {plan.tag && (
                                                <span className="bg-blue-100 font-bold text-blue-600 px-2 py-1 rounded-full text-xs">
                                                    {plan.tag}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="font-bold text-lg leading-tight">
                                            {plan.title}
                                        </h3>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-4xl font-bold">
                                            <span className="text-xl font-semibold align-top">$</span>{plan.price}
                                        </p>
                                        <p className="text-xs font-bold text-gray-500">/month</p>
                                    </div>
                                </div>

                                <div className="flex md:flex-row flex-col items-start justify-between">
                                    <ul className="text-sm font-semibold text-gray-600 space-y-1 mb-4">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="text-green-500">✔</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex justify-end">
                                        <Link
                                            to="/Activation"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleSelectPlan(plan.id);
                                            }}
                                            className={`inline-block px-5 py-2 rounded-lg text-sm font-medium ${selectedPlan === plan.id
                                                    ? "bg-green-600 text-white"
                                                    : plan.popular
                                                        ? "bg-red-500 text-white"
                                                        : "bg-black text-white"
                                                }`}
                                        >
                                            {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ================= FILTER ================= */
function FilterSection({ title, options }) {
    const [selected, setSelected] = useState(0);

    return (
        <div className="mb-6">

            <p className="text-sm font-semibold mb-3">{title}</p>

            <div className="space-y-2">
                {options.map((opt, i) => {
                    const isActive = selected === i;

                    return (
                        <label
                            key={i}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg border cursor-pointer transition
                            ${isActive
                                    ? "border-red-200 shadow-sm bg-red-50"
                                    : "border-transparent hover:bg-gray-50"}`}
                        >
                            <div className="flex items-center gap-2">
                                <span
                                    className={`w-4 h-4 rounded-full border flex items-center justify-center
                                    ${isActive ? "border-red-500" : "border-gray-300"}`}
                                >
                                    {isActive && (
                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                    )}
                                </span>

                                <input
                                    type="radio"
                                    name={title}
                                    className="hidden"
                                    checked={isActive}
                                    onChange={() => setSelected(i)}
                                />

                                <span
                                    className={`text-sm ${isActive ? "text-red-600 font-medium" : "text-gray-700"
                                        }`}
                                >
                                    {opt}
                                </span>
                            </div>

                            {title === "Duration" && i === 2 && (
                                <span className="text-xs font-semibold bg-red-200 px-2 py-1 rounded-full">
                                    2
                                </span>
                            )}
                        </label>
                    );
                })}
            </div>
        </div>
    );
}