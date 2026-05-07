import { useEffect, useRef, useState } from "react";
import { X, ArrowLeft, Copy, CreditCard, KeyRound } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

/* -------------------- USAGE RING -------------------- */
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

/* -------------------- USAGE CARD -------------------- */
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

/* -------------------- MESSAGES CARD -------------------- */
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

/* -------------------- QR CODE MODAL -------------------- */
export function QrCode({ open, onClose, onReload }) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (!open) return;

        const handleKey = (e) => {
            if (e.key === "Escape") onClose?.();
        };

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
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
            className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-4"
        >
            <div
                ref={modalRef}
                onMouseDown={(e) => e.stopPropagation()}
                className="relative w-full max-w-md rounded-3xl bg-[#f8f4ee] px-5 sm:px-6 py-7 shadow-2xl"
            >
                {/* CLOSE BUTTON FIXED */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition"
                >
                    <X size={18} />
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

/* -------------------- DATA USAGE MODAL -------------------- */
export function DataUsage({ open, onClose, onReload }) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (!open) return;

        const handleKey = (e) => {
            if (e.key === "Escape") onClose?.();
        };

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
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
            className="fixed inset-0 z-50 bg-black/30 flex items-end sm:items-center justify-center px-3 sm:px-4"
        >
            <div
                ref={modalRef}
                onMouseDown={(e) => e.stopPropagation()}
                className="relative w-full max-w-md bg-[#f8f4ee] rounded-3xl shadow-2xl max-h-[92vh] overflow-hidden"
            >
                {/* CLOSE BUTTON FIXED */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition"
                >
                    <X size={18} />
                </button>

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

                    {/* FOOTER BUTTON */}
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






export function VerificationModal({ open, onClose }) {

    const [step, setStep] = useState(1);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const modalRef = useRef(null);

    /* ---------------- CLOSE ON ESC ---------------- */
    useEffect(() => {
        if (!open) return;

        const handleKey = (e) => {
            if (e.key === "Escape") onClose?.();
        };

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open, onClose]);

    if (!open) return null;

    /* ---------------- OUTSIDE CLICK ---------------- */
    const handleOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose?.();
        }
    };

    const handleOtp = (value, index) => {
        const copy = [...otp];
        copy[index] = value.slice(-1);
        setOtp(copy);

        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }
    };

    const steps = ["Verify", "Transfer Number", "Account Details"];

    return (
        <div
            onMouseDown={handleOutside}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3"
        >
            <div
                ref={modalRef}
                onMouseDown={(e) => e.stopPropagation()}
                className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl relative p-2"
            >

                {/* HEADER */}
                <div className="p-2 border-b border-gray-300 flex items-center justify-between">

                    {/* BACK BUTTON */}
                    {step > 1 ? (
                        <button
                            onClick={() => setStep(step - 1)}
                            className="flex items-center gap-1 text-gray-600"
                        >
                            <ArrowLeft size={18} />
                            Back
                        </button>
                    ) : (
                        <div />
                    )}

                    {/* CLOSE */}
                    <button onClick={onClose}>
                        <X size={18} />
                    </button>
                </div>

                {/* STEP PROGRESS */}
                <div className="px-5 py-5">
                    <div className="relative">
                        {/* base line */}
                        <div className="absolute left-0 right-0 top-2.75 h-0.5 bg-gray-400" />

                        <div className="relative flex justify-between">
                            {steps.map((label, i) => {
                                const stepNumber = i + 1;
                                const active = step === stepNumber;
                                const completed = step > stepNumber;

                                return (
                                    <div
                                        key={label}
                                        className="flex flex-col items-center min-w-14"
                                    >
                                        <div
                                            className={`relative z-10 w-[22px] h-[22px] rounded-full border flex items-center justify-center
                ${active
                                                    ? "bg-white border-gray-500"
                                                    : completed
                                                        ? "bg-[#2f2f2f] border-[#2f2f2f]"
                                                        : "bg-white border-gray-300"
                                                }`}
                                        >
                                            {(active || completed) && (
                                                <div
                                                    className={`w-[6px] h-[6px] rounded-full ${completed ? "bg-[#f6c400]" : "bg-[#2f2f2f]"
                                                        }`}
                                                />
                                            )}
                                        </div>

                                        <span
                                            className={`mt-1 text-[12px] leading-none font-medium ${active || completed ? "text-gray-900" : "text-gray-400"
                                                }`}
                                        >
                                            {label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* ---------------- STEP 1: VERIFY ---------------- */}
                {step === 1 && (
                    <div className="px-5 pb-6 text-center">
                        <h2 className="text-lg font-semibold">Verify Account</h2>
                        <p className="text-sm text-gray-500 mb-4">
                            Enter the OTP sent to your registered number
                        </p>

                        <div className="flex justify-center gap-2 mb-3">
                            {otp.map((d, i) => (
                                <input
                                    key={i}
                                    id={`otp-${i}`}
                                    value={d}
                                    maxLength={1}
                                    onChange={(e) =>
                                        handleOtp(e.target.value, i)
                                    }
                                    className="w-10 h-10 text-center border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-400"
                                />
                            ))}
                        </div>

                        <p className="text-sm text-gray-500">Didn't receive the code?</p>
                        <p className="text-xs underline mb-4">Resend OTP</p>

                        <button
                            onClick={() => setStep(2)}
                            className="w-full bg-(--primary-color) text-white py-2.5 rounded-lg"
                        >
                            Verify & Continue
                        </button>
                    </div>
                )}

                {/* ---------------- STEP 2: TRANSFER ---------------- */}
                {step === 2 && (
                    <div className="px-5 pb-6 text-start">
                        <h2 className="text-lg font-semibold">
                            Transfer Number
                        </h2>

                        <p className="text-sm text-gray-500 mb-4">
                            We're sorry to see you go. You need your account number and PIN to transfer to another carrier
                        </p>

                        <div className="bg-gray-100 p-4 rounded-lg text-left text-sm mb-4">
                            <p>
                                For you security, we'll verify  your identity with a one time password before showing your account details.
                            </p>
                        </div>

                        <button
                            onClick={() => setStep(3)}
                            className="w-full bg-(--primary-color) text-white py-2.5 rounded-lg"
                        >
                            Send Verification Code
                        </button>
                    </div>
                )}

                {/* ---------------- STEP 3: ACCOUNT ---------------- */}
                {step === 3 && (
                    <div className="px-5 pb-6 text-start ">
                        <h2 className="text-lg font-semibold">
                            Account Details
                        </h2>
                        <p className="text-sm text-gray-500 mb-4">
                            Use these details to transfer your number  to another carrier.
                        </p>

                        <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl space-y-3 mb-4">

                            <button
                                type="button"
                                onClick={() => navigator.clipboard.writeText("12345678")}
                                className="w-full text-left"
                            >
                                <label className="text-xs font-medium text-gray-500 mb-1 block">
                                    Account Number
                                </label>

                                <div className="flex items-center gap-3 px-3 h-11 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition">
                                    <CreditCard size={16} className="text-gray-500" />

                                    <input
                                        readOnly
                                        value="12345678"
                                        className="flex-1 bg-transparent text-sm font-medium text-gray-900 outline-none cursor-pointer"
                                    />

                                    <Copy size={15} className="text-gray-400" />
                                </div>
                            </button>

                            <button
                                type="button"
                                onClick={() => navigator.clipboard.writeText("874521")}
                                className="w-full text-left"
                            >
                                <label className="text-xs font-medium text-gray-500 mb-1 block">
                                    Transfer PIN
                                </label>

                                <div className="flex items-center gap-3 px-3 h-11 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition">
                                    <KeyRound size={16} className="text-gray-500" />

                                    <input
                                        readOnly
                                        value="874521"
                                        className="flex-1 bg-transparent text-sm font-medium text-gray-900 outline-none cursor-pointer"
                                    />

                                    <Copy size={15} className="text-gray-400" />
                                </div>
                            </button>
                        </div>

                        <button
                            onClick={onClose}
                            className="w-full bg-black text-white py-2.5 rounded-lg"
                        >
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}