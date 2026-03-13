import { Lock, Mail, Torus } from "lucide-react";
import { useState } from "react";

export default function ActivateStep() {
    const plans = [1, 2, 3, 4, 5, 6];

    const countries = [
        { name: "United States", code: "us", flag: "https://flagcdn.com/us.svg" },
        { name: "United Kingdom", code: "gb", flag: "https://flagcdn.com/gb.svg" },
        { name: "Canada", code: "ca", flag: "https://flagcdn.com/ca.svg" },
        { name: "Pakistan", code: "pk", flag: "https://flagcdn.com/pk.svg" }
    ];

    const [country, setCountry] = useState(countries[0]);

    const handleChange = (e) => {
        const selected = countries.find(c => c.code === e.target.value);
        setCountry(selected);
    };

    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">

                {/* LEFT CARD */}
                <div className="bg-gray-100 flex flex-col items-center justify-center  rounded-xl p-4 shadow-md">
                    <img
                        src="/images/c.png"
                        alt="cricket"
                        className="w-130 mb-2"
                    />

                    <div className="flex gap-6 text-md">
                        <div className="flex items-center justify-center gap-2">
                            <Torus />
                            Instant digital delivery
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock /> Safe & secure payment
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>

                    <h2 className="text-xl font-semibold mb-4">
                        Cricket Prepaid Plans USA
                    </h2>

                    {/* Country */}
                    <div className="mb-4">
                        <label className="text-sm text-gray-500 block mb-1">
                            Country of use
                        </label>

                        <div className="relative w-45">

                            {/* Visible UI */}
                            <div className="flex items-center justify-between border rounded-lg px-3 py-2 bg-white">

                                <div className="flex items-center gap-2">
                                    <img
                                        src={country.flag}
                                        className="w-5"
                                        alt={country.name}
                                    />
                                    <span className="text-sm text-blue-600">
                                        {country.name}
                                    </span>
                                </div>

                                <i className="ri-arrow-down-s-line text-gray-500 text-lg"></i>
                            </div>

                            {/* Real dropdown */}
                            <select
                                value={country.code}
                                onChange={handleChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            >
                                {countries.map((c) => (
                                    <option key={c.code} value={c.code}>
                                        {c.name}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>

                    {/* Phone input */}
                    <div className="mb-6">
                        <label className="text-sm font-medium flex items-center gap-2 mb-2">
                            📱 Top up a phone number directly
                        </label>

                        <input
                            type="text"
                            placeholder="+1 201 555 0123"
                            className="border-2 border-red-400 rounded-lg px-3 py-2 w-72 outline-none"
                        />
                    </div>

                    {/* Plans */}
                    <div className="grid grid-cols-2 gap-4">

                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className="bg-white border rounded-xl p-4 text-center shadow-sm"
                            >
                                <p className="text-sm text-gray-700 mb-1">
                                    Cricket Refill
                                </p>

                                <p className="text-red-500 font-bold text-xl mb-3">
                                    $10 <span className="text-sm text-gray-600">/mo</span>
                                </p>

                                <button className="bg-black text-white text-sm px-4 py-2 rounded-full w-full">
                                    Buy Now
                                </button>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
}