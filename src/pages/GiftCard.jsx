
import { CheckCircle, Zap, ShieldCheck, BadgePercent, ChevronRight, Search } from "lucide-react";

import { useState } from "react";
import CountryDropdown from "../components/Countries";
import PopularServices from "../components/PopularServices";

const categories = [
    "All Categories",
    "Entertainment",
    "Gaming",
    "Shopping",
    "Food & Dining",
    "Travel",
    "Tech",
    "Lifestyle",
];

const cards = [
    { name: "Amazon", tag: "Shopping", color: "bg-black", img: "/amazon.png" },
    { name: "Netflix", tag: "Entertainment", color: "bg-red-600", img: "/netflix.png" },
    { name: "Spotify", tag: "Entertainment", color: "bg-green-600", img: "/spotify.png" },
    { name: "PlayStation", tag: "Gaming", color: "bg-blue-600", img: "/ps.png" },
    { name: "Apple", tag: "Tech", color: "bg-gray-900", img: "/apple.png" },
    { name: "Uber", tag: "Travel", color: "bg-black", img: "/uber.png" },
];

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

export default function GiftCards() {
    const [active, setActive] = useState("All Categories");

    return (
        <>
            <div className="w-full bg-white px-4 lg:px-8 pt-16 pb-10">
                {/* HERO */}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center ">

                    <div>
                        <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                            <BadgePercent size={16} />
                            Millions of happy users
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-5">
                            The perfect gift, <br />
                            for <span className="text-red-500">every moment.</span>
                        </h1>

                        <p className="text-gray-500 mt-4 max-w-md">
                            Gift cards for shopping, entertainment, gaming and more.
                            Fast, easy, and always appreciated.
                        </p>

                        {/* SEARCH / SELECT BAR */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <CountryDropdown />

                            <button className="bg-red-500 hover:bg-red-600 px-3 py-2 text-white rounded-xl flex items-center justify-center gap-2">
                                Gift Cards <ChevronRight size={18} />
                            </button>
                        </div>

                        {/* FEATURES */}
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 mt-6 border border-gray-200 rounded-2xl p-4 bg-white shadow-sm">

                            {/* ITEM */}
                            <div className="flex items-start gap-3">
                                <div className="w-11 h-11 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                    <Zap size={18} className="text-red-500" />
                                </div>

                                <div>
                                    <p className="font-semibold text-sm text-gray-900">
                                        Instant Delivery
                                    </p>

                                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                                        Email in second.
                                    </p>
                                </div>
                            </div>

                            {/* ITEM */}
                            <div className="flex items-start gap-3">
                                <div className="w-11 h-11 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                    <ShieldCheck size={18} className="text-red-500" />
                                </div>

                                <div>
                                    <p className="font-semibold text-sm text-gray-900">
                                        Secure Payment
                                    </p>

                                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                                        Safe and trusted.
                                    </p>
                                </div>
                            </div>

                            {/* ITEM */}
                            <div className="flex items-start gap-3">
                                <div className="w-11 h-11 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                    <CheckCircle size={18} className="text-red-500" />
                                </div>

                                <div>
                                    <p className="font-semibold text-sm text-gray-900">
                                        Top Brands
                                    </p>

                                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                                        Wide selection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img src="/images/gift-cards.png" alt="" />
                    </div>
                </div>

                <PopularServices />
            </div>

            <section className="bg-black text-white py-16 mt-6 px-6">
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
                </div>
            </section>

        </>
    );
}