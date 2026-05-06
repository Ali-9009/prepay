import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Smartphone,
    CreditCard,
    ShoppingBag,
    Tv,
    Gamepad2,
    Filter,
    X,
} from "lucide-react";

import { categories } from "../data/categories"; // adjust path

// Tabs
const filterTabs = [
    { id: "topup", label: "Mobile Top-up", icon: <Smartphone size={14} /> },
    { id: "shopping", label: "Shopping", icon: <ShoppingBag size={14} /> },
    { id: "entertainment", label: "Entertainment", icon: <Tv size={14} /> },
    { id: "gaming", label: "Gaming", icon: <Gamepad2 size={14} /> },
    { id: "cards", label: "Payment Cards", icon: <CreditCard size={14} /> },
];

export default function PopularServices() {
    const [activeFilter, setActiveFilter] = useState("topup");
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
    const navigate = useNavigate();

    // 🔥 Unified data source
    const allData = {
        topup: categories.topup.brands,
        gaming: categories.gaming.brands,
        entertainment: categories.entertainment.brands,
        cards: categories.payment.brands,
        shopping: categories.shopping.brands,
    };

    const filteredData = allData[activeFilter] || [];

    return (
        <section className="pt-12 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="secondary-heading text-lg md:text-2xl">
                        Most Popular <span>Service's</span>
                    </h2>

                    {/* Desktop Tabs */}
                    <div className="hidden md:flex flex-wrap gap-2">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveFilter(tab.id)}
                                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${activeFilter === tab.id
                                        ? "bg-[#111] text-white border-[#111]"
                                        : "bg-white text-[#444] border-[#ddd] hover:border-[#111] hover:text-[#111]"
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Filter */}
                    <div className="md:hidden relative">
                        <button
                            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                            className="flex items-center justify-center p-2 rounded-full border border-gray-300 bg-white"
                        >
                            {mobileFilterOpen ? <X size={18} /> : <Filter size={18} />}
                        </button>

                        {mobileFilterOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50 flex flex-col gap-2 p-2">
                                {filterTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveFilter(tab.id);
                                            setMobileFilterOpen(false);
                                        }}
                                        className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium ${activeFilter === tab.id
                                                ? "bg-[#111] text-white"
                                                : "bg-white text-[#444] hover:bg-gray-100"
                                            }`}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Grid */}
                <div className="flex flex-wrap gap-4 items-center justify-center max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-4 items-center justify-center max-w-6xl mx-auto">
                        {filteredData.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                                onClick={() =>
                                    navigate("/DetailPage", {
                                        state: {
                                            brand: item,
                                            category: activeFilter,
                                        },
                                    })
                                }
                            >
                                <img src={item} alt="" className="w-32 md:w-40" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}