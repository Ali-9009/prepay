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
        <section className="overflow-hidden bg-black py-16 px-6 text-white">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-14 text-center">
                    <h2 className="mb-3 text-3xl font-semibold lg:text-4xl">
                        Three steps. Under a minute.
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-400">
                        We cut the unnecessary steps so you can get back to what matters.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative grid gap-6 md:grid-cols-3">

                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="group relative transition duration-300 hover:-translate-y-1"
                        >

                            {/* line connector desktop */}
                            {i !== steps.length - 1 && (
                                <div className="absolute left-[60px] top-6 hidden h-[1px] w-[calc(100%-20px)] bg-gradient-to-r from-red-500/70 to-transparent md:block" />
                            )}

                            {/* card */}
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 group-hover:border-red-500/30 group-hover:bg-white/[0.07] group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

                                <p className="text-sm leading-7 text-gray-400">
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