import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function UsageRing({ value = 0 }) {
    const data = [
        { name: "used", value },
        { name: "remaining", value: 100 - value },
    ];

    return (
        <div className="w-20 h-20 mx-auto relative">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={28}
                        outerRadius={36}
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                        stroke="none"
                    >
                        <Cell fill="#111827" />
                        <Cell fill="#e5e7eb" />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-900">
                {value}%
            </div>
        </div>
    );
}

function UsageCard({ title, value, subtitle }) {
    return (
        <div className="bg-white border border-orange-200 rounded-2xl px-4 py-5 shadow-sm">
            <UsageRing value={value} />
            <div className="text-center mt-3">
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            </div>
        </div>
    );
}

function MessagesCard() {
    return (
        <div className="bg-white border border-orange-200 rounded-2xl px-4 py-5 shadow-sm">
            <p className="text-xs text-gray-500 mb-2">Messages</p>

            <h3 className="text-2xl font-bold text-gray-900 leading-none">
                Unlimited
            </h3>

            <p className="text-xs text-gray-500 mt-2">
                Send messages without limits
            </p>

            <div className="mt-5 flex items-center justify-between">
                <span className="text-[11px] px-3 py-1 rounded-full border border-orange-200 text-orange-500 bg-orange-50 font-medium">
                    Always Included
                </span>

                
            </div>
        </div>
    );
}

export function QrCode({
    open,
    onClose,
    onReload,
}) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (!open) return;

        const handleKey = (e) => {
            if (e.key === "Escape") onClose?.();
        };

        document.addEventListener("keydown", handleKey);

        return () => {
            document.removeEventListener("keydown", handleKey);
        };
    }, [open, onClose]);

    if (!open) return null;

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose?.();
        }
    };

    return (
        <div
            onMouseDown={handleBackdropClick}
            className="fixed inset-0 z-60 bg-black/30 flex items-center justify-center px-4"
        >
            <div
                ref={modalRef}
                onMouseDown={(e) => e.stopPropagation()}
                className="relative w-full max-w-md rounded-3xl bg-[#f8f4ee] px-5 sm:px-6 py-7 shadow-2xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center"
                >
                    <X size={16} />
                </button>

                <h2 className="text-2xl font-bold text-center text-gray-900">
                    Scan QR Code
                </h2>

                <p className="text-sm text-gray-500 text-center mt-2">
                    Scan this QR code from your device to activate your eSIM.
                </p>

                <button
                    onClick={onReload}
                    className="mt-4 text-sm font-medium text-gray-800 flex items-center justify-center mx-auto"
                >
                    Reload QR Code
                </button>

                <div className="mt-6 bg-white rounded-2xl p-2 shadow-sm w-fit mx-auto">
                    <img
                        src="/images/qr-code.png"
                        className="w-44 h-44 object-contain"
                        alt="QR code"
                    />
                </div>
            </div>
        </div>
    );
}

export function DataUsage({
    open,
    onClose,
    onReload,
}) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (!open) return;

        const handleKey = (e) => {
            if (e.key === "Escape") onClose?.();
        };

        document.addEventListener("keydown", handleKey);

        return () => {
            document.removeEventListener("keydown", handleKey);
        };
    }, [open, onClose]);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose?.();
        }
    };

    return (
        <div
            onMouseDown={handleBackdropClick}
            className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-3 sm:px-4"
        >
            <div
                ref={modalRef}
                onMouseDown={(e) => e.stopPropagation()}
                className="w-full max-w-md bg-[#f8f4ee] rounded-3xl shadow-2xl max-h-[92vh] overflow-hidden"
            >
                <div className="overflow-y-auto max-h-[92vh]">
                    <div className="px-5 sm:px-6 pt-6 pb-4">
                        
                        <h2 className="text-2xl font-bold text-center text-gray-900">
                            Usage Details
                        </h2>

                        <p className="text-sm text-gray-500 text-center mt-1">
                            Review your usage information.
                        </p>

                        <div className="grid grid-cols-2 gap-3 mt-6">
                            <UsageCard
                                title="Data"
                                value={0}
                                subtitle="1.496 GB remaining"
                            />

                            <UsageCard
                                title="Voice"
                                value={0}
                                subtitle="100 MIN remaining"
                            />

                            <div className="col-span-2 sm:col-span-1">
                                <MessagesCard />
                            </div>
                        </div>
                    </div>

                    <div className="sticky bottom-0 px-5 sm:px-6 pb-5 pt-3 bg-[#f8f4ee]">
                        <button
                            onClick={onReload}
                            className="w-full h-12 rounded-xl bg-black text-white text-sm font-medium hover:opacity-95 transition"
                        >
                            Reload Usage
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}