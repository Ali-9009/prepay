import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TypingInput from "../../components/TypingInput";

const plans = [
    {
        title: "Unlimited North America Plan",
        price: "$60",
        link: "/Activation",
        features: [
            "Unlimited talk, text & data in the U.S., Canada, and Mexico",
            "AT&T's 5G Network",
            "10GB data per line per month",
        ],
    },
    {
        title: "Unlimited Monthly",
        price: "$50",
        link: "/Activation",
        features: [
            "Unlimited 5G with 50GB of premium data",
            "Unlimited talk and text",
            "Unlimited mobile with 3G speed",
            "Canada and Mexico Add-On Available",
        ],
    },
    {
        title: "Starter Monthly",
        price: "$45",
        link: "/Activation",
        features: [
            "15GB of premium data with unlimited 2G after",
            "Unlimited talk and text",
            "Canada and Mexico Add-On Available",
        ],
    },
];

const COMPATIBLE = ["iphone", "samsung", "pixel", "motorola", "lg", "sony", "nokia"];


/* ── Toast ── */
function Toast({ toast, onClose, isMobile }) {
    useEffect(() => { const t = setTimeout(onClose, 4500); return () => clearTimeout(t); });
    const ok = toast.type === "success";
    return (
        <div className={`fixed top-25 z-9999 w-[calc(100%-32px)] max-w-90 mx-auto animate-[toastIn_0.4s_cubic-bezier(.22,.68,0,1.2)_forwards] ${isMobile ? "left-1/2 -translate-x-1/2" : "right-4"}`}>
            <div className={`rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.15)] border ${ok ? "border-green-200" : "border-red-200"} bg-white`}>
                <div className={`h-1 ${ok ? "bg-green-500" : "bg-red-500"}`} />
                <div className="p-3 pl-3.5 pr-3.5 flex items-start gap-2.5">
                    <div className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center ${ok ? "bg-green-100" : "bg-red-100"}`}>
                        {ok
                            ? <svg width="16" height="16" fill="none" stroke="#16a34a" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            : <svg width="16" height="16" fill="none" stroke="#dc2626" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        }
                    </div>
                    <div className="flex-1">
                        <div className={`font-bold text-[13px] ${ok ? "text-green-800" : "text-red-800"} mb-0.5`}>
                            {ok ? "Device Compatible ✓" : "Not Compatible ✗"}
                        </div>
                        <div className="text-[11px] text-gray-500 leading-relaxed">{toast.message}</div>
                    </div>
                    <button onClick={onClose} className="bg-transparent border-none cursor-pointer text-gray-400 p-0.5">
                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <div className={`h-0.5 ${ok ? "bg-green-100" : "bg-red-100"}`}>
                    <div className={`h-full ${ok ? "bg-green-500" : "bg-red-500"} animate-[shrinkBar_4.5s_linear_forwards] w-full`} />
                </div>
            </div>
        </div>
    );
}

/* ── Step Dot ── */
function StepDot({ status }) {
    const baseClass = "w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center";
    if (status === "done") return (
        <div className={`${baseClass} bg-black border-2 border-gray-700 shadow-[0_0_0_4px_rgba(34,197,94,0.15)] animate-[popIn_0.4s_ease]`}>
            <svg width="10" height="10" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </div>
    );
    if (status === "active") return (
        <div className={`${baseClass} bg-red-500 border-2 border-red-300 shadow-[0_0_0_5px_rgba(239,68,68,0.18)]`} />
    );
    return <div className={`${baseClass} bg-white border-2 border-gray-300`} />;
}

/* ── Horizontal Step Connector ── */
function HorizontalStepConnector({ filled, width }) {
    return (
        <div className="relative h-0.5 flex-1">
            <div className="absolute inset-0 bg-gray-200 rounded-sm" />
            {filled && (
                <div className="absolute top-0 left-0 bottom-0 bg-black rounded-sm animate-[growLineHorizontal_0.6s_ease_forwards] w-full" />
            )}
        </div>
    );
}

/* ── Vertical Step Connector (for desktop) ── */
function VerticalStepConnector({ filled, height }) {
    return (
        <div className="relative w-0.5 shrink-0" style={{ height }}>
            <div className="absolute inset-0 bg-gray-200 rounded-sm" />
            {filled && (
                <div className="absolute top-0 left-0 right-0 bg-black rounded-sm animate-[growLine_0.6s_ease_forwards] h-full" />
            )}
        </div>
    );
}

/* ── Carousel (touch + arrow) ── */
function Carousel({ children, itemWidth, gap = 12, peek = 20 }) {
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);
    const count = children.length;
    const touchStart = useRef(null);

    const goTo = (i) => {
        const clamped = Math.max(0, Math.min(i, count - 1));
        setIndex(clamped);
        if (trackRef.current) {
            trackRef.current.scrollTo({ left: clamped * (itemWidth + gap), behavior: "smooth" });
        }
    };

    const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchStart.current === null) return;
        const diff = touchStart.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) goTo(diff > 0 ? index + 1 : index - 1);
        touchStart.current = null;
    };

    const onScroll = () => {
        if (!trackRef.current) return;
        const i = Math.round(trackRef.current.scrollLeft / (itemWidth + gap));
        setIndex(i);
    };

    return (
        <div className="relative">
            <div
                ref={trackRef}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                onScroll={onScroll}
                className="flex overflow-x-auto snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] pb-1"
                style={{ gap, paddingRight: peek }}
            >
                <style>{`.carousel-track::-webkit-scrollbar{display:none}`}</style>
                {children.map((child, i) => (
                    <div key={i} className="shrink-0 snap-start" style={{ width: itemWidth }}>
                        {child}
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-1.5 mt-2.5">
                {children.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-1.5 rounded-full border-none transition-all duration-200 cursor-pointer p-0 ${i === index
                            ? "w-4.5 bg-red-500"
                            : "w-1.5 bg-gray-300"
                            }`}
                    />
                ))}
            </div>

            {index > 0 && (
                <button
                    onClick={() => goTo(index - 1)}
                    className="absolute -left-3.5 top-[40%] -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.1)] cursor-pointer flex items-center justify-center z-2"
                >
                    <svg width="12" height="12" fill="none" stroke="#374151" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}
            {index < count - 1 && (
                <button
                    onClick={() => goTo(index + 1)}
                    className="absolute -right-3.5 top-[40%] -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.1)] cursor-pointer flex items-center justify-center z-2"
                >
                    <svg width="12" height="12" fill="none" stroke="#374151" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
}

/* ── Main Component ── */
export default function ActivationFlow2() {
    const [deviceInput, setDeviceInput] = useState("");
    const [step, setStep] = useState(1);
    const [selectedCarrier, setSelectedCarrier] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [toast, setToast] = useState(null);
    const [checking, setChecking] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const dotStatus = (s) => step > s ? "done" : step === s ? "active" : "locked";
    const locked = (s) => step < s;

    const handleCheck = () => {
        if (!deviceInput.trim()) {
            setToast({ type: "error", message: "Please enter a device name (e.g. iPhone 15, Samsung S24)." });
            return;
        }
        setChecking(true);
        setTimeout(() => {
            setChecking(false);
            const ok = COMPATIBLE.some(d => deviceInput.toLowerCase().includes(d));
            if (ok) {
                setToast({ type: "success", message: `"${deviceInput}" is fully compatible. Select your carrier!` });
                setStep(3);
            } else {
                setToast({ type: "error", message: `"${deviceInput}" may not be supported. Try another device or skip.` });
            }
        }, 1300);
    };

    const handleSkip = () => {
        setStep(3);
        setToast({ type: "success", message: "Skipped! You can now pick a carrier & plan." });
    };

    const handlePlan = (i) => {
        if (locked(3)) return;
        setSelectedPlan(i);
        setStep(4);
    };

    const c1h = isMobile ? 120 : 230;

    return (
        <div className="min-h-screen">
            <style>{`
        @keyframes toastIn{from{opacity:0;transform:translateY(-20px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes shrinkBar{from{width:100%}to{width:0%}}
        @keyframes popIn{0%{transform:scale(0);opacity:0}60%{transform:scale(1.3)}100%{transform:scale(1);opacity:1}}
        @keyframes growLine{from{height:0%}to{height:100%}}
        @keyframes growLineHorizontal{from{width:0%}to{width:100%}}
        @keyframes spin{to{transform:rotate(360deg)}}
        .spinner{animation:spin 0.8s linear infinite}
        *{box-sizing:border-box}
        ::-webkit-scrollbar{display:none}
      `}</style>

            {toast && <Toast toast={toast} onClose={() => setToast(null)} isMobile={isMobile} />}

            <div className={`max-w-240 mx-auto ${isMobile ? "px-3 py-4" : "p-6 px-4"}`}>

                {/* Mobile: Horizontal Steps at the top */}
                {isMobile ? (
                    <div className="mb-8">
                        <div className="flex items-center justify-between px-6 gap-2">
                            <StepDot status={dotStatus(1)} />
                            <HorizontalStepConnector filled={step > 1} />
                            <StepDot status={dotStatus(2)} />
                        </div>
                        <div className="flex justify-between mt-2 px-1">
                            <span className={`text-xs font-medium ${step === 1 ? "text-red-500" : step > 1 ? "text-black" : "text-gray-400"}`}>
                                Device Check
                            </span>
                            <span className={`text-xs font-medium ${step === 3 ? "text-red-500" : step > 3 ? "text-black" : "text-gray-400"}`}>
                                Select Plan
                            </span>
                        </div>
                    </div>
                ) : (
                    /* Desktop: Vertical Steps on the side */
                    <div className="flex gap-5">
                        <div className="flex flex-col items-center pt-2 shrink-0 w-5">
                            <StepDot status={dotStatus(1)} />
                            <VerticalStepConnector filled={step > 1} height={c1h} />
                            <StepDot status={dotStatus(2)} />
                        </div>

                        <div className="flex-1 flex flex-col gap-4 min-w-0">
                            {/* Content for desktop */}
                            <div>
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold bg-lime-400 p-1 mb-1 rounded-full w-20 text-center">Step 01</h3>
                                        <h2 className="font-bold text-2xl pb-4">
                                            Upgrade Your Plan.
                                        </h2>
                                        <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="font-bold text-[15px] text-gray-900">
                                                    Check your Device Compatibility
                                                </span>
                                            </div>

                                            <div className="flex gap-2 mb-2.5">
                                                <TypingInput />

                                                <button
                                                    onClick={handleCheck}
                                                    disabled={checking}
                                                    className={`bg-gray-800 text-white rounded-[10px] px-3.5 py-2.5 text-[13px] font-semibold flex items-center gap-1.5 shrink-0 cursor-pointer ${checking ? "opacity-70" : "opacity-100"}`}
                                                >
                                                    {checking && (
                                                        <svg className="spinner" width="12" height="12" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" d="M12 4a8 8 0 018 8" />
                                                        </svg>
                                                    )}
                                                    {checking ? "…" : "Check"}
                                                </button>

                                                <button
                                                    onClick={handleSkip}
                                                    className="bg-gray-100 text-gray-600 rounded-[10px] px-3.5 py-2.5 text-[13px] font-semibold shrink-0 cursor-pointer"
                                                >
                                                    Skip
                                                </button>
                                            </div>

                                            <p className="text-gray-400 text-[11px] leading-relaxed m-0">
                                                Check compatibility and find the best network for your device.
                                                Checkout instantly — no contracts, no confusion.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{
                                opacity: locked(3) ? 0.38 : 1,
                                pointerEvents: locked(3) ? "none" : "auto",
                                filter: locked(3) ? "grayscale(0.4)" : "none",
                                transition: "opacity 0.4s,filter 0.4s"
                            }}>
                                <h3 className="text-sm font-semibold bg-lime-400 p-1 mb-1 rounded-full w-20 text-center">Step 02</h3>
                                <div className="flex items-center gap-1.5 mb-2.5">
                                    <span className="font-bold text-2xl">Select your Plan</span>
                                </div>

                                <div className="grid grid-cols-3 gap-3.5">
                                    {plans.map((plan, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handlePlan(index)} // only select the card
                                            className={`rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300
                                          ${selectedPlan === index
                                                    ? "border-t-4 border-(--primary-color) bg-red-50 shadow-md"
                                                    : "border-t-4 border-(--primary-color) shadow-sm"
                                                }`}
                                        >
                                            <div>
                                                <div className="flex flex-col items-start justify-center">
                                                    <p className="text-sm font-semibold mb-3">Plus taxes and fees</p>

                                                    <h3 className="text-[20px] font-bold text-gray-900 mb-2 leading-[1.4]">
                                                        {plan.title}
                                                    </h3>

                                                    <div className="mb-2">
                                                        <span className="text-red-500 text-[38px] font-semibold">{plan.price}</span>
                                                        <span className="text-red-500 text-[12px] font-semibold"> /mo</span>
                                                    </div>
                                                </div>

                                                <hr className="border-t border-gray-300 mb-2" />

                                                <ul className="flex flex-col gap-1.5 mb-4">
                                                    {plan.features.map((feat, i) => (
                                                        <li key={i} className="flex items-start gap-1.5">
                                                            <img src="/images/round.png" className="w-2 pt-2" alt="" />
                                                            <span className="text-[16px] leading-normal">{feat}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Button navigates to checkout */}
                                            <Link
                                                to={plan.link} // <-- your checkout link here
                                                state={{ plan }} // pass plan data to checkout page
                                                className={`w-full rounded-full py-2.5 text-[13px] font-semibold text-center transition
                                        ${selectedPlan === index ? "bg-black text-white" : "bg-black text-white"}`}
                                            >
                                                {selectedPlan === index ? "✓ Selected" : "Select Plan"}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Content */}
                {isMobile && (
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold bg-lime-400 p-1 mb-1 rounded-full w-20 text-center">Step 01</h3>
                                    <h2 className="font-bold text-[18px]">
                                        Upgrade Your Plan.
                                    </h2>
                                    <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm mt-3">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="font-bold text-[13px] text-gray-900">
                                                Check your Device Compatibility
                                            </span>
                                        </div>

                                        <div className="flex gap-2 mb-2.5">
                                            <input
                                                value={deviceInput}
                                                onChange={e => setDeviceInput(e.target.value)}
                                                onKeyDown={e => e.key === "Enter" && handleCheck()}
                                                placeholder="e.g. iPhone 15, Samsung S24..."
                                                className="flex-1 border border-gray-300 rounded-[10px] px-3 py-2.25 text-[13px] text-gray-700 outline-none min-w-0"
                                            />

                                            <button
                                                onClick={handleCheck}
                                                disabled={checking}
                                                className={`bg-gray-800 text-white rounded-[10px] px-3.5 py-2.5 text-[13px] font-semibold flex items-center gap-1.5 shrink-0 cursor-pointer ${checking ? "opacity-70" : "opacity-100"}`}
                                            >
                                                {checking && (
                                                    <svg className="spinner" width="12" height="12" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" d="M12 4a8 8 0 018 8" />
                                                    </svg>
                                                )}
                                                {checking ? "…" : "Check"}
                                            </button>

                                            <button
                                                onClick={handleSkip}
                                                className="bg-gray-100 text-gray-600 rounded-[10px] px-3.5 py-2.5 text-[13px] font-semibold shrink-0 cursor-pointer"
                                            >
                                                Skip
                                            </button>
                                        </div>

                                        <p className="text-gray-400 text-[11px] leading-relaxed m-0">
                                            Check compatibility and find the best network for your device.
                                            Checkout instantly — no contracts, no confusion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            opacity: locked(3) ? 0.38 : 1,
                            pointerEvents: locked(3) ? "none" : "auto",
                            filter: locked(3) ? "grayscale(0.4)" : "none",
                            transition: "opacity 0.4s,filter 0.4s"
                        }}>
                            <h3 className="text-sm font-semibold bg-lime-400 p-1 mb-1 rounded-full w-20 text-center">Step 02</h3>
                            <div className="flex items-center gap-1.5 mb-2.5">
                                <span className="font-bold text-[18px]">Select your Plan</span>
                            </div>

                            <div className="relative px-1">
                                <Carousel itemWidth={260} gap={12} peek={24}>
                                    {plans.map((plan, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handlePlan(index)} // only select the card
                                            className={`rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300
                                          ${selectedPlan === index
                                                    ? "border-t-4 border-(--primary-color) bg-red-50 shadow-md"
                                                    : "border-t-4 border-(--primary-color) shadow-sm"
                                                }`}
                                        >
                                            <div>
                                                <div className="flex flex-col items-start justify-center">
                                                    <p className="text-sm font-semibold mb-3">Plus taxes and fees</p>

                                                    <h3 className="text-[20px] font-bold text-gray-900 mb-2 leading-[1.4]">
                                                        {plan.title}
                                                    </h3>

                                                    <div className="mb-2">
                                                        <span className="text-red-500 text-[38px] font-semibold">{plan.price}</span>
                                                        <span className="text-red-500 text-[12px] font-semibold"> /mo</span>
                                                    </div>
                                                </div>

                                                <hr className="border-t border-gray-300 mb-2" />

                                                <ul className="flex flex-col gap-1.5 mb-4">
                                                    {plan.features.map((feat, i) => (
                                                        <li key={i} className="flex items-start gap-1.5">
                                                            <img src="/images/round.png" className="w-2 pt-2" alt="" />
                                                            <span className="text-[16px] leading-normal">{feat}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Button navigates to checkout */}
                                            <Link
                                                to={plan.link} // <-- your checkout link here
                                                state={{ plan }} // pass plan data to checkout page
                                                className={`w-full rounded-full py-2.5 text-[13px] font-semibold text-center transition
                                        ${selectedPlan === index ? "bg-black text-white" : "bg-black text-white"}`}
                                            >
                                                {selectedPlan === index ? "✓ Selected" : "Select Plan"}
                                            </Link>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}