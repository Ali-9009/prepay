import { useMemo, useState, useEffect, useRef } from "react";
import {
    Download,
    ChevronDown,
    Check,
    ChevronUp,
    ChevronRight,
} from "lucide-react";

export default function PaymentsOverview() {
    const [activeTab, setActiveTab] = useState("All Payments");
    const [selectedRows, setSelectedRows] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);

    // 👇 NEW
    const [expandedRow, setExpandedRow] = useState(null);

    const [selectedFilters, setSelectedFilters] = useState({
        "Date Range": "",
        Status: "",
        "Payment Methods": "",
    });

    const payments = [
        {
            id: 1,
            line: "4692389769",
            plan: "Unlimited Plus",
            status: "Paid",
            amount: "$29.10",
            method: "VISA **** 5556",
            date: "05-02-2026",

            // 👇 EXTRA DETAILS
            upcomingRefills: [
                {
                    refillId: 263,
                    status: "Queued",
                    month: "30 - may",
                    refillDate: "2026-05-30",
                    amount: "$9.7",
                },
                {
                    refillId: 264,
                    status: "Queued",
                    month: "27 - jun",
                    refillDate: "2026-06-27",
                    amount: "$9.7",
                },
            ],
        },

        {
            id: 2,
            line: "4692389770",
            plan: "Premium Max",
            status: "Pending",
            amount: "$80.00",
            method: "MasterCard **** 8745",
            date: "16-01-2026",

            upcomingRefills: [
                {
                    refillId: 301,
                    status: "Queued",
                    month: "15 - jul",
                    refillDate: "2026-07-15",
                    amount: "$12.5",
                },
            ],
        },

        {
            id: 3,
            line: "4692389771",
            plan: "Starter Plan",
            status: "Failed",
            amount: "$20.00",
            method: "VISA **** 9988",
            date: "20-01-2026",

            upcomingRefills: [],
        },
    ];

    const tabs = [
        "All Payments",
        "Paid",
        "Pending",
        "Failed",
        "Refund",
    ];

    const filteredPayments = useMemo(() => {
        let filtered = payments;

        if (activeTab !== "All Payments") {
            filtered = filtered.filter(
                (item) =>
                    item.status.toLowerCase() ===
                    activeTab.toLowerCase()
            );
        }

        if (selectedFilters.Status) {
            filtered = filtered.filter(
                (item) =>
                    item.status === selectedFilters.Status
            );
        }

        if (selectedFilters["Payment Methods"]) {
            filtered = filtered.filter((item) =>
                item.method
                    .toLowerCase()
                    .includes(
                        selectedFilters[
                            "Payment Methods"
                        ].toLowerCase()
                    )
            );
        }

        return filtered;
    }, [activeTab, selectedFilters]);

    const toggleRow = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const toggleAll = () => {
        if (
            selectedRows.length === filteredPayments.length
        ) {
            setSelectedRows([]);
        } else {
            setSelectedRows(
                filteredPayments.map((item) => item.id)
            );
        }
    };

    const toggleExpand = (id) => {
        setExpandedRow((prev) =>
            prev === id ? null : id
        );
    };

    const downloadSelected = () => {
        const selectedData = payments.filter((item) =>
            selectedRows.includes(item.id)
        );

        if (!selectedData.length) return;

        const content = selectedData
            .map(
                (item) => `
Line No: ${item.line}
Plan: ${item.plan}
Status: ${item.status}
Amount: ${item.amount}
Payment Method: ${item.method}
Date: ${item.date}
-----------------------------------
`
            )
            .join("");

        const blob = new Blob([content], {
            type: "text/plain",
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "payments.txt";
        link.click();

        URL.revokeObjectURL(url);
    };

    const Dropdown = ({ title, options }) => {
        const isOpen = openDropdown === title;

        const dropdownRef = useRef(null);

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (
                    dropdownRef.current &&
                    !dropdownRef.current.contains(
                        event.target
                    )
                ) {
                    setOpenDropdown(null);
                }
            };

            document.addEventListener(
                "mousedown",
                handleClickOutside
            );

            return () => {
                document.removeEventListener(
                    "mousedown",
                    handleClickOutside
                );
            };
        }, []);

        const handleSelect = (option) => {
            setSelectedFilters((prev) => ({
                ...prev,
                [title]: option,
            }));

            setOpenDropdown(null);
        };

        return (
            <div
                className="relative"
                ref={dropdownRef}
            >
                <button
                    onClick={() =>
                        setOpenDropdown(
                            isOpen ? null : title
                        )
                    }
                    className="flex items-center gap-2 bg-black px-4 py-2 rounded-full text-white text-sm whitespace-nowrap"
                >
                    {selectedFilters[title] || title}

                    <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${isOpen
                                ? "rotate-180"
                                : ""
                            }`}
                    />
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-2xl shadow-lg z-20 overflow-hidden">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() =>
                                    handleSelect(option)
                                }
                                className={`w-full text-left px-4 py-3 text-sm transition hover:bg-gray-100 ${selectedFilters[
                                        title
                                    ] === option
                                        ? "bg-gray-100 font-medium"
                                        : ""
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100 w-full overflow-hidden">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <h2 className="text-2xl font-semibold">
                    Payments Overview
                </h2>

                <button
                    onClick={downloadSelected}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm w-fit disabled:opacity-50"
                    disabled={!selectedRows.length}
                >
                    <Download size={18} />
                    Download Invoice
                </button>
            </div>

            {/* TABS */}
            <div className="flex gap-6 text-sm mb-6 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => {
                            setActiveTab(tab);
                            setSelectedRows([]);
                        }}
                        className={`pb-1 whitespace-nowrap transition ${activeTab === tab
                                ? "font-medium border-b-2 border-black text-black"
                                : "text-gray-500"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap gap-3 mb-6">
                <Dropdown
                    title="Date Range"
                    options={[
                        "Today",
                        "Last 7 Days",
                        "Last Month",
                    ]}
                />

                <Dropdown
                    title="Status"
                    options={[
                        "Paid",
                        "Pending",
                        "Failed",
                        "Refund",
                    ]}
                />

                <Dropdown
                    title="Payment Methods"
                    options={[
                        "Visa",
                        "MasterCard",
                        "PayPal",
                    ]}
                />
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100 text-gray-600">
                        <tr>
                            {/* <th className="p-3 w-10"></th> */}

                            <th className="text-left p-3 w-12">
                                <button
                                    onClick={toggleAll}
                                    className={`w-5 h-5 rounded border flex items-center justify-center transition ${selectedRows.length ===
                                            filteredPayments.length &&
                                            filteredPayments.length
                                            ? "bg-black border-black text-white"
                                            : "border-gray-300"
                                        }`}
                                >
                                    {selectedRows.length ===
                                        filteredPayments.length &&
                                        filteredPayments.length >
                                        0 && (
                                            <Check
                                                size={14}
                                            />
                                        )}
                                </button>
                            </th>

                            <th className="text-left p-3">
                                Line Number
                            </th>

                            <th className="text-left p-3">
                                Plan Details
                            </th>

                            <th className="text-left p-3">
                                Status
                            </th>

                            <th className="text-left p-3">
                                Amount
                            </th>

                            <th className="text-left p-3">
                                Payment Method
                            </th>

                            <th className="text-left p-3">
                                Creation Date
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredPayments.map((item) => (
                            <>
                                {/* MAIN ROW */}
                                <tr
                                    key={item.id}
                                    className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                                    onClick={() =>
                                        toggleExpand(
                                            item.id
                                        )
                                    }
                                >
                                    {/* EXPAND ICON */}
                                    {/* <td className="hidden p-3">
                                        {expandedRow ===
                                            item.id ? (
                                            <ChevronUp
                                                size={18}
                                            />
                                        ) : (
                                            <ChevronRight
                                                size={18}
                                            />
                                        )}
                                    </td> */}

                                    {/* CHECKBOX */}
                                    <td
                                        className="p-3"
                                        onClick={(e) =>
                                            e.stopPropagation()
                                        }
                                    >
                                        <button
                                            onClick={() =>
                                                toggleRow(
                                                    item.id
                                                )
                                            }
                                            className={`w-5 h-5 rounded border flex items-center justify-center transition ${selectedRows.includes(
                                                item.id
                                            )
                                                    ? "bg-black border-black text-white"
                                                    : "border-gray-300"
                                                }`}
                                        >
                                            {selectedRows.includes(
                                                item.id
                                            ) && (
                                                    <Check
                                                        size={14}
                                                    />
                                                )}
                                        </button>
                                    </td>

                                    <td className="p-3">
                                        {item.line}
                                    </td>

                                    <td className="p-3">
                                        {item.plan}
                                    </td>

                                    <td className="p-3">
                                        <span
                                            className={`text-xs px-3 py-1 rounded-full ${item.status ===
                                                    "Paid"
                                                    ? "bg-green-100 text-green-700"
                                                    : item.status ===
                                                        "Pending"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : item.status ===
                                                            "Failed"
                                                            ? "bg-red-100 text-red-700"
                                                            : "bg-blue-100 text-blue-700"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>

                                    <td className="p-3">
                                        {item.amount}
                                    </td>

                                    <td className="p-3">
                                        {item.method}
                                    </td>

                                    <td className="p-3 text-gray-500">
                                        {item.date}
                                    </td>
                                </tr>

                                {/* SLIDE DOWN ROW */}
                                <tr>
                                    <td
                                        colSpan={8}
                                        className="p-0"
                                    >
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedRow ===
                                                    item.id
                                                    ? "max-h-[500px]"
                                                    : "max-h-0"
                                                }`}
                                        >
                                            <div className="bg-[#faf7ef] px-8 py-6 border-b border-gray-200">
                                                {/* UPCOMING REFILLS */}
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-4">
                                                        Upcoming
                                                        Refills
                                                    </h3>

                                                    {item
                                                        .upcomingRefills
                                                        .length >
                                                        0 ? (
                                                        <div className="overflow-x-auto">
                                                            <table className="w-full text-sm">
                                                                <thead>
                                                                    <tr className="text-gray-500">
                                                                        <th className="text-left py-2">
                                                                            Refill
                                                                            ID
                                                                        </th>

                                                                        <th className="text-left py-2">
                                                                            Status
                                                                        </th>

                                                                        <th className="text-left py-2">
                                                                            Month
                                                                        </th>

                                                                        <th className="text-left py-2">
                                                                            Refill
                                                                            Date
                                                                        </th>

                                                                        <th className="text-left py-2">
                                                                            Amount
                                                                        </th>
                                                                    </tr>
                                                                </thead>

                                                                <tbody>
                                                                    {item.upcomingRefills.map(
                                                                        (
                                                                            refill
                                                                        ) => (
                                                                            <tr
                                                                                key={
                                                                                    refill.refillId
                                                                                }
                                                                                className="border-t border-gray-200"
                                                                            >
                                                                                <td className="py-3">
                                                                                    {
                                                                                        refill.refillId
                                                                                    }
                                                                                </td>

                                                                                <td className="py-3">
                                                                                    <span className="inline-flex items-center gap-2 text-yellow-700">
                                                                                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>

                                                                                        {
                                                                                            refill.status
                                                                                        }
                                                                                    </span>
                                                                                </td>

                                                                                <td className="py-3">
                                                                                    {
                                                                                        refill.month
                                                                                    }
                                                                                </td>

                                                                                <td className="py-3">
                                                                                    {
                                                                                        refill.refillDate
                                                                                    }
                                                                                </td>

                                                                                <td className="py-3">
                                                                                    {
                                                                                        refill.amount
                                                                                    }
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    ) : (
                                                        <p className="text-gray-400">
                                                            No
                                                            upcoming
                                                            refills
                                                            available
                                                        </p>
                                                    )}
                                                </div>

                                                {/* AUTO PAY */}
                                                <div className="mt-8">
                                                    <h3 className="font-semibold text-lg mb-3">
                                                        Auto Pay
                                                        Transactions
                                                    </h3>

                                                    <p className="text-gray-400 text-sm">
                                                        No auto pay
                                                        transactions
                                                        available
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}