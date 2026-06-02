import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Smartphone, CreditCard, ShoppingBag, Tv, Gamepad2, Filter, X, LayoutGrid } from "lucide-react";
import { categories } from "../data/categories";

// Tabs
const filterTabs = [
    {
        id: "all",
        label: "All",
        icon: <LayoutGrid size={14} />,
    },
    // {
    //     id: "topup",
    //     label: "Mobile Top-up",
    //     icon: <Smartphone size={14} />,
    // },
    {
        id: "shopping",
        label: "Shopping",
        icon: <ShoppingBag size={14} />,
    },
    {
        id: "entertainment",
        label: "Entertainment",
        icon: <Tv size={14} />,
    },
    {
        id: "gaming",
        label: "Gaming",
        icon: <Gamepad2 size={14} />,
    },
    {
        id: "cards",
        label: "Payment Cards",
        icon: <CreditCard size={14} />,
    },
];

export default function PopularServices() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    const navigate = useNavigate();

    // All Categories
    const allData = {
        topup: categories.topup.brands,
        gaming: categories.gaming.brands,
        entertainment: categories.entertainment.brands,
        cards: categories.payment.brands,
        shopping: categories.shopping.brands,
    };

    const mergedAllData = [
        ...allData.topup,
        ...allData.shopping,
        ...allData.entertainment,
        ...allData.gaming,
        ...allData.cards,
    ];

    // Active Data
    const filteredData =
        activeFilter === "all"
            ? mergedAllData
            : allData[activeFilter] || [];

    return (
        <section className="pt-12 md:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-center mb-8 ">

                    {/* Tabs */}
                    <div className="flex lg:flex-wrap overflow-x-auto md:overflow-visible gap-2 w-full md:w-auto scrollbar-hide">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveFilter(tab.id)}
                                className={`shrink-0 flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all whitespace-nowrap cursor-pointer ${activeFilter === tab.id
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

                {/* Grid */}
                <div className="grid grid-cols-3 gap-2 md:flex flex-wrap items-center justify-center">
                    {filteredData.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() =>
                                navigate(
                                    activeFilter === "topup" ? "/ActivateStep" : "/virtual-card",
                                    {
                                        state: {
                                            brand: item,
                                            carrier: {
                                                logo: item,
                                                name: "Mobile Top-up",
                                                price: 10,
                                            },
                                            category: activeFilter,
                                        },
                                    }
                                )
                            }
                        >
                            <img
                                src={item}
                                alt=""
                                className="w-32 md:w-40 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}