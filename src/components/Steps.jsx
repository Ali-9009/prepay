import React from "react";

const steps = [
    {
        num: "1",
        title: "Enter the phone number",
        desc: "Type in your number or the number you want to top up. We’ll pull up available plans automatically based on the carrier.",
    },
    {
        num: "2",
        title: "Pick your plan",
        desc: "Choose the refill amount or plan that fits. We show you exactly what you’re getting — no hidden fees, no surprise charges at checkout.",
    },
    {
        num: "3",
        title: "Pay and you're done",
        desc: "Use any major card, PayPal, or Apple Pay. The credit hits the account instantly. You’ll get a confirmation so you know it went through.",
    },
];

export default function Steps() {
    return (
        <section className="bg-white py-12 px-6">
            <div className="max-w-6xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold mb-3">
                    Three steps. Under a minute.
                </h2>

                {/* Subtext */}
                <p className="text-gray-500 mb-16">
                    We cut the unnecessary steps so you can get back to what matters.
                </p>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 relative">

                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="relative text-left group transition duration-300 hover:-translate-y-1"
                        >

                            {/* Circle Number */}
                            <div className="relative z-10 mb-5">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full 
                  bg-linear-to-r from-red-500 to-red-400 
                  text-white font-semibold shadow-md 
                  group-hover:scale-110 transition">
                                    {step.num}
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 w-12 h-12 rounded-full bg-red-400 opacity-20 blur-md group-hover:opacity-40 transition"></div>
                            </div>

                            {/* Content Card */}
                            <div className="p-5 rounded-xl border border-gray-100 bg-white shadow-sm group-hover:shadow-lg transition">

                                {/* Title */}
                                <h3 className="font-semibold mb-2 text-gray-900">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {step.desc}
                                </p>

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}