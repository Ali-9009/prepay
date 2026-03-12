// src/components/PopularServices.jsx
import { useState } from "react";
import {
    Smartphone,
    CreditCard,
    ShoppingBag,
    Tv,
    Gamepad2,
    Grid3X3,
} from "lucide-react";

// ── Filter Tabs Data ──
const filterTabs = [
    { id: "all", label: "All", icon: <Grid3X3 size={14} /> },
    { id: "topup", label: "Mobile Top-up", icon: <Smartphone size={14} /> },
    { id: "cards", label: "Payment Cards", icon: <CreditCard size={14} /> },
    { id: "shopping", label: "Shopping", icon: <ShoppingBag size={14} /> },
    { id: "entertainment", label: "Entertainment", icon: <Tv size={14} /> },
    { id: "gaming", label: "Gaming", icon: <Gamepad2 size={14} /> },
];

// ── Carrier Logos ──
const carriers = [
    { id: "att", name: "AT&T", bg: "#00A8E0", color: "#fff", logo: "/images/at&t.png", category: "topup" },
    { id: "verizon", name: "Verizon", bg: "#CD040B", color: "#fff", logo: "/images/verizon.png", category: "topup" },
    { id: "boost", name: "Boost Mobile", bg: "#F7941D", color: "#fff", logo: "/images/boost.png", category: "topup" },
    { id: "tmobile", name: "T-Mobile", bg: "#E20074", color: "#fff", logo: "/images/t-mobile.png", category: "topup" },
    { id: "metro", name: "MetroPCS", bg: "#003DA5", color: "#fff", logo: "/images/metro.png", category: "topup" },
    { id: "cricket", name: "Cricket Wireless", bg: "#00B140", color: "#fff", logo: "/images/cricket.png", category: "topup" },
    { id: "linkup", name: "LinkUp Mobile", bg: "#1a1a2e", color: "#fff", logo: "/images/link-up.png", category: "topup" },
    { id: "mobilex", name: "MobileX", bg: "#0f3460", color: "#fff", logo: "/images/mobileX.png", category: "topup" },
    { id: "light", name: "Light Mobile", bg: "#f8f8f0", color: "#333", logo: "/images/light-mobile.png", category: "topup" },
    { id: "uiic1", name: "UIIC Mobile", bg: "#fff", color: "#333", logo: "/images/uiic-mobile.png", category: "topup" },
    { id: "uiic2", name: "UIIC Mobile Plus", bg: "#e8f4fd", color: "#0078d4", logo: "/images/uiic-mobile-plus.png", category: "topup" },
];

export default function PopularServices() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredCarriers =
        activeFilter === "all"
            ? carriers
            : carriers.filter((c) => c.category === activeFilter);

    return (
        <section className="pt-12 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading + Filter Tabs */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <h2 className="secondary-heading">
                        Most Popular <span className="">Service's</span>
                    </h2>
                    <div className="flex flex-wrap gap-2">
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
                </div>

                {/* Carrier Grid */}
                <div className="flex items-center flex-wrap justify-center gap-3 gap-y-6">
                    {filteredCarriers.map((carrier) => (
                        <div
                            key={carrier.id}
                            className="cursor-pointer hover:scale-105 transition-transform"
                        >
                            <div className="flex items-center justify-center">
                                <img src={carrier.logo} alt={carrier.name} className="w-40" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}