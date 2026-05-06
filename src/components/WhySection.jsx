import { useEffect, useState } from "react";

/* ================= COUNTER LOGIC ================= */

const stats = [
    { label: "Recharges in under 30 sec", value: 99, suffix: "%" },
    { label: "Happy Customers", value: 10, suffix: "K+" },
    { label: "Supported Carriers", value: 50, suffix: "+" },
];

function Counter({ target, suffix = "" }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const duration = 1500;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            const percentage = Math.min(progress / duration, 1);
            const value = Math.floor(percentage * target);

            setCount(value);

            if (percentage < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [target]);

    return (
        <span>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}

/* ================= WHY SECTION ================= */

const features = [
    {
        title: "Refills that take seconds, not minutes",
        desc: "Enter the number, pick the plan, pay. That’s it. No login, no verification loops, no waiting around.",
    },
    {
        title: "Your payment details stay private",
        desc: "We’re obsessed with data security. We never store or share your financial information with third parties.",
    },
    {
        title: "100% money-back guarantee",
        desc: "If something goes wrong on our end, we make it right. No questions, no back-and-forth. Simple as that.",
    },
    {
        title: "Top up anyone’s phone, anywhere",
        desc: "Sending credit to a family member abroad? You don’t need their account details — just their number.",
    },
    {
        title: "Pay however works for you",
        desc: "Apple Pay, Visa, Mastercard, or Amex. We support the ways people actually pay in 2025.",
    },
    {
        title: "Real support when you need it",
        desc: "Our team is available Monday through Friday. Live people who know the product and can actually help.",
    },
];

export default function WhySection() {
    return (
        <>
            <section className="bg-black text-white py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-2">
                        Built around how you actually use your phone
                    </h2>

                    {/* Subtext */}
                    <p className="text-gray-400 mb-10">
                        No gimmicks. Here’s what makes us different.
                    </p>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                        {features.map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#111] border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition"
                            >
                                <h3 className="text-sm font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Highlight Box */}
                    <div className="bg-red-600 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
                        <div>
                            <p className="font-semibold mb-2">
                                The most-used prepaid service in the US
                            </p>
                            <p className="text-sm text-red-100 max-w-xl">
                                300,000 people use Hello Prepay every single month to send over
                                $10 million in wireless credit.
                            </p>
                        </div>

                        <div className="bg-(--primary-color) px-6 py-4 rounded-lg text-center">
                            <p className="text-2xl font-bold">#1</p>
                            <p className="text-xs text-red-100">
                                Prepaid Refill Service
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-white max-w-6xl mx-auto text-black rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                    {stats.map((item, index) => (
                        <div key={index}
                            className="p-6 rounded-2xl border border-gray-200 hover:shadow-md transition">
                            <h3 className="text-3xl font-bold">
                                <Counter target={item.value} suffix={item.suffix} />
                            </h3>
                            <p className="text-sm text-gray-400 mt-1">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}