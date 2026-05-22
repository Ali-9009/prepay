import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Check } from "lucide-react";

import Button from "../components/Gbtn";

export default function VirtualCard() {
    const location = useLocation();
    const brand = location.state?.brand;

    const [selectedCard, setSelectedCard] = useState("single");
    const [selectedRule, setSelectedRule] = useState("Per Txn");

    if (!brand) {
        return <h1>No Brand Found</h1>;
    }

    const cardTypes = [
        {
            id: "single",
            title: "Single Use",
            desc: "Own After Use",
        },
        {
            id: "merchant",
            title: "Merchant Locked",
            desc: "Locked To Shop",
        },
        {
            id: "wallet",
            title: "Digital Wallet",
            desc: "Apple / Google Pay",
        },
    ];

    const spendingRules = [
        "Per Txn",
        "Monthly",
        "Annually",
        "Forever",
    ];

    return (
        <div className="w-full py-8 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6">

                {/* LEFT SIDE */}
                <div className="border border-gray-300 rounded-2xl p-6">

                    {/* HEADER */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-24 flex items-center justify-center shrink-0">
                            <img
                                src={brand}
                                alt=""
                                className="w-full object-contain"
                            />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[#111]">
                                Create Virtual Card
                            </h2>

                            <p className="text-sm text-[#777] leading-5 mt-1">
                                Configure Your Secure Digital
                                <br />
                                Payment Method
                            </p>
                        </div>
                    </div>

                    {/* BODY */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

                        {/* LEFT FORM */}
                        <div>

                            {/* CARD TYPES */}
                            <div>
                                <h3 className="text-sm text-[#666] mb-3">
                                    Select Card Type
                                </h3>

                                <div className="grid grid-cols-3 gap-3">

                                    {cardTypes.map((card) => (
                                        <button
                                            key={card.id}
                                            onClick={() =>
                                                setSelectedCard(card.id)
                                            }
                                            className={`relative rounded-xl p-4 text-left transition-all ${selectedCard === card.id
                                                ? "bg-[#ff4d4d] text-white"
                                                : "bg-[#dddddd] text-[#666]"
                                                }`}
                                        >
                                            {selectedCard === card.id && (
                                                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                                                    <Check
                                                        size={12}
                                                        className="text-[#26458d]"
                                                    />
                                                </div>
                                            )}

                                            <h4 className="text-sm font-semibold leading-5">
                                                {card.title}
                                            </h4>

                                            <p className="text-xs opacity-80 mt-2 leading-4">
                                                {card.desc}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* SPENDING RULE */}
                            <div className="mt-6">
                                <h3 className="text-sm text-[#666] mb-3">
                                    Spending Rule
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {spendingRules.map((rule) => (
                                        <button
                                            key={rule}
                                            onClick={() =>
                                                setSelectedRule(rule)
                                            }
                                            className={`px-5 h-10 rounded-full text-sm font-medium transition-all ${selectedRule === rule
                                                ? "bg-[#ff4d4d] text-white"
                                                : "bg-[#dddddd] text-[#666]"
                                                }`}
                                        >
                                            {rule}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* FORM */}
                            <div className="mt-6">
                                <h3 className="text-sm text-[#666] mb-3">
                                    Address Details
                                </h3>

                                <div className="space-y-3">

                                    <input
                                        type="text"
                                        placeholder="Card Holder Name"
                                        className="w-full h-11 border border-[#dddddd] bg-[#fafafa] rounded-lg px-4 text-sm outline-none"
                                    />

                                    <div className="grid grid-cols-2 gap-3">

                                        <input
                                            type="text"
                                            placeholder="Card Pin"
                                            className="w-full h-11 border border-[#dddddd] bg-[#fafafa] rounded-lg px-4 text-sm outline-none"
                                        />

                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            className="w-full h-11 border border-[#dddddd] bg-[#fafafa] rounded-lg px-4 text-sm outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CARD PREVIEW */}
                        <div className="flex flex-col">

                            {/* CARD */}
                            <div className="w-full h-[210px] rounded-2xl bg-gradient-to-r from-[#3559a6] to-[#1f3978] p-6 text-white relative overflow-hidden shadow-lg">

                                <div className="flex items-start justify-between">
                                    <span className="text-sm opacity-90">
                                        PayPal
                                    </span>

                                    <span className="text-sm font-semibold uppercase">
                                        {selectedCard === "single"
                                            ? "Single Use"
                                            : selectedCard === "merchant"
                                                ? "Merchant Locked"
                                                : "Digital Wallet"}
                                    </span>
                                </div>

                                <div className="mt-12 tracking-[4px] text-lg">
                                    •••• •••• •••• ••••
                                </div>

                                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">

                                    <div>
                                        <p className="text-xs opacity-70 mb-1">
                                            Card Holder
                                        </p>

                                        <p className="text-sm font-semibold uppercase">
                                            YOUR NAME
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xs opacity-70 mb-1">
                                            EXP
                                        </p>

                                        <p className="text-sm font-semibold uppercase">
                                            {selectedRule}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* NOTE */}
                            <div className="mt-4 bg-[#ececef] border border-[#dddddd] rounded-xl p-3 flex items-start gap-3">

                                <input
                                    type="checkbox"
                                    className="mt-1 accent-[#3559a6]"
                                />

                                <p className="text-xs text-[#777] leading-5">
                                    Single Use Cards Close After The First
                                    Transaction Or If Unused Within 24 Hours.
                                    Per Transaction Cards Limit Spending On
                                    Each Individual Transaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="border border-gray-300 rounded-2xl p-6 h-fit">

                    {/* TOP */}
                    <div className="flex items-start justify-between border-b border-[#dddddd] pb-5">

                        <div className="w-24">
                            <img
                                src={brand}
                                alt=""
                                className="w-full object-contain"
                            />
                        </div>

                        <div className="text-right">
                            <h3 className="text-sm font-semibold text-[#111]">
                                Paypal Refill
                            </h3>

                            <p className="text-sm text-[#777] mt-1">
                                1x $100.00
                            </p>
                        </div>
                    </div>

                    {/* SUMMARY */}
                    <div className="mt-6">

                        <h2 className="text-3xl font-medium text-[#111] mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-4 text-sm">

                            <div className="flex justify-between">
                                <span className="text-[#666]">
                                    Subtotal
                                </span>

                                <span>$100</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-[#666]">
                                    Discount/Spiff
                                </span>

                                <span>$0.00</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-[#666]">
                                    Processing Fee
                                </span>

                                <span>$0.00</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-[#666]">
                                    Custom Fee
                                </span>

                                <span>$0.00</span>
                            </div>

                            <div className="flex justify-between border-t border-[#dddddd] pt-4 mt-4 font-semibold">
                                <span>Total</span>

                                <span>$100</span>
                            </div>
                        </div>

                        <Button
                            to="/"
                            text="Pay Card"
                            className="mt-6 w-full text-center"
                        />

                        <p className="text-center text-xs text-[#888] mt-5">
                            Customer Will Be charged $100
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}