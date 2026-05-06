import { useState, useEffect, useRef } from "react";
import TypingInput from "../../components/TypingInput";
import Plans from "../../components/Plans";
import FAQ from "../Faq";


const carriers = [
    { logo: "/images/inter-01.png", name: "Chatr Mobile", link: "/" },
    { logo: "/images/inter-2.png", name: "My Natcom", link: "/ActivateStep" },
    { logo: "/images/inter-3.png", name: "Claro", link: "/ActivateStep" },
    { logo: "/images/inter-4.png", name: "Tigo", link: "/ActivateStep" },
    { logo: "/images/inter-5.png", name: "Flow", link: "/ActivateStep" },
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
    const base = {
        width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center"
    };
    if (status === "done") return (
        <div style={{
            ...base, background: "#000000", border: "2px solid #414141",
            boxShadow: "0 0 0 4px rgba(34,197,94,0.15)", animation: "popIn 0.4s ease"
        }}>
            <svg width="10" height="10" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </div>
    );
    if (status === "active") return (
        <div style={{
            ...base, background: "#ef4444", border: "2px solid #fca5a5",
            boxShadow: "0 0 0 5px rgba(239,68,68,0.18)"
        }} />
    );
    return <div style={{ ...base, background: "white", border: "2px solid #d1d5db" }} />;
}

/* ── Step Connector ── */
function StepConnector({ filled, height }) {
    return (
        <div style={{ position: "relative", width: 2, height, flexShrink: 0 }}>
            <div style={{ position: "absolute", inset: 0, background: "#e5e7eb", borderRadius: 2 }} />
            {filled && (
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, background: "#000000",
                    borderRadius: 2, animation: "growLine 0.6s ease forwards", height: "100%"
                }} />
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

    // sync index on scroll
    const onScroll = () => {
        if (!trackRef.current) return;
        const i = Math.round(trackRef.current.scrollLeft / (itemWidth + gap));
        setIndex(i);
    };

    return (
        <div style={{ position: "relative" }}>
            {/* Track */}
            <div
                ref={trackRef}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                onScroll={onScroll}
                style={{
                    display: "flex", gap, overflowX: "auto", scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch", scrollbarWidth: "none", paddingBottom: 4,
                    paddingRight: peek
                }}
            >
                <style>{`.carousel-track::-webkit-scrollbar{display:none}`}</style>
                {children.map((child, i) => (
                    <div key={i} style={{ flexShrink: 0, width: itemWidth, scrollSnapAlign: "start" }}>
                        {child}
                    </div>
                ))}
            </div>

            {/* Dot indicators */}
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 10 }}>
                {children.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)}
                        style={{
                            width: i === index ? 18 : 6, height: 6, borderRadius: 3, border: "none",
                            background: i === index ? "#ef4444" : "#d1d5db",
                            transition: "all 0.25s ease", cursor: "pointer", padding: 0
                        }} />
                ))}
            </div>

            {/* Prev / Next arrows — hidden on mobile via width check */}
            {index > 0 && (
                <button onClick={() => goTo(index - 1)}
                    style={{
                        position: "absolute", left: -14, top: "40%", transform: "translateY(-50%)",
                        width: 28, height: 28, borderRadius: "50%", background: "white", border: "1px solid #e5e7eb",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)", cursor: "pointer", display: "flex",
                        alignItems: "center", justifyContent: "center", zIndex: 2
                    }}>
                    <svg width="12" height="12" fill="none" stroke="#374151" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}
            {index < count - 1 && (
                <button onClick={() => goTo(index + 1)}
                    style={{
                        position: "absolute", right: -14, top: "40%", transform: "translateY(-50%)",
                        width: 28, height: 28, borderRadius: "50%", background: "white", border: "1px solid #e5e7eb",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)", cursor: "pointer", display: "flex",
                        alignItems: "center", justifyContent: "center", zIndex: 2
                    }}>
                    <svg width="12" height="12" fill="none" stroke="#374151" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
}

/* ── Main Component ── */
export default function ActivationFlow() {
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
                setStep(2);
            } else {
                setToast({ type: "error", message: `"${deviceInput}" may not be supported. Try another device or skip.` });
            }
        }, 1300);
    };

    const handleSkip = () => {
        setStep(2);
        setToast({ type: "success", message: "Skipped! You can now pick a carrier & plan." });
    };

    const handleCarrier = (i) => {
        if (locked(2)) return;
        setSelectedCarrier(i);
        if (step === 2) setTimeout(() => setStep(3), 350);
    };

    const handlePlan = (i) => {
        if (locked(3)) return;
        setSelectedPlan(i);
        setStep(4);
    };

    // connector heights — shorter on mobile since sections stack tighter
    const c1h = isMobile ? 265 : 275;
    const c2h = isMobile ? 445 : 210;

    return (
        <div className="bg-red-50 py-8" style={{ minHeight: "100vh" }}>
            <style>{`
        @keyframes toastIn{from{opacity:0;transform:translateY(-20px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes shrinkBar{from{width:100%}to{width:0%}}
        @keyframes popIn{0%{transform:scale(0);opacity:0}60%{transform:scale(1.3)}100%{transform:scale(1);opacity:1}}
        @keyframes growLine{from{height:0%}to{height:100%}}
        @keyframes spin{to{transform:rotate(360deg)}}
        .spinner{animation:spin 0.8s linear infinite}
        *{box-sizing:border-box}
        ::-webkit-scrollbar{display:none}
      `}</style>

            {toast && <Toast toast={toast} onClose={() => setToast(null)} />}



            {/* ── Body ── */}
            <div className="bg-white rounded-lg p-6 border-2 border-(--primary-color)" style={{ maxWidth: 960, margin: "0 auto", padding: isMobile ? "16px 12px" : "24px 16px" }}>
                <div style={{ display: "flex", gap: isMobile ? 12 : 20 }}>

                    {/* ── Left Stepper ── */}
                    <div style={{
                        display: "flex", flexDirection: "column", alignItems: "center",
                        paddingTop: 5, flexShrink: 0, width: 20
                    }}>
                        <StepDot status={dotStatus(1)} />
                        <StepConnector filled={step > 1} height={c1h} />
                        <StepDot status={dotStatus(2)} />
                        <StepConnector filled={step > 2} height={c2h} />
                        <StepDot status={dotStatus(3)} />
                    </div>

                    {/* ── Steps ── */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, minWidth: 0 }}>

                        {/* STEP 1 */}
                        <div>
                            {/* On mobile: stack card + map vertically; on desktop: side-by-side */}
                            <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-3`}>

                                <div className="flex-1 ">

                                    <h3 className="text-sm font-semibold bg-lime-400 p-1 mb-1 rounded-full w-20 text-center">Step 01</h3>

                                    <h2 className={`font-bold mb-3 ${isMobile ? "text-[18px]" : "text-2xl"} `}>
                                        Activate Your Device. <br />
                                        All Carrier’s & Plan.
                                    </h2>
                                    <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`font-bold ${isMobile ? "text-[13px]" : "text-[15px]"} text-gray-900`}>
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
                                                className="bg-gray-100 text-gray-600 rounded-[10px] px-3.5 py-2.25 text-[13px] font-semibold shrink-0 cursor-pointer"
                                            >
                                                Skip
                                            </button>
                                        </div>

                                        <p className="text-gray-400 text-[11px] leading-[1.6] m-0">
                                            Check compatibility and find the best network for your device.
                                            Checkout instantly — no contracts, no confusion.
                                        </p>
                                    </div>
                                </div>

                                {/* Map: hidden on mobile to save space, shown on desktop */}
                                {!isMobile && (
                                    <div className="flex items-center justify-center p-2">
                                        <img src="/images/con-1.png" alt="" />
                                    </div>
                                )}

                            </div>
                        </div>

                        {/* STEP 2 */}
                        <div
                            className={`${locked(2) ? "opacity-[0.38] pointer-events-none grayscale-[0.4]" : "opacity-100 pointer-events-auto"} transition-all duration-300`}
                        >
                            <div className="p-4">

                                {/* Header row — wraps on mobile */}
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">

                                    <div className="flex flex-col gap-1.5">

                                        <h3 className="text-sm font-semibold bg-lime-400 p-1 mb-1 rounded-full w-20 text-center">Step 02</h3>

                                        <span className={`font-bold ${isMobile ? "text-[18px]" : "text-2xl"} `}>
                                            Shop Carrier & Plan
                                        </span>
                                    </div>

                                    {/* Filter buttons */}
                                    <div className="flex gap-1.5 overflow-x-auto pb-0.5 shrink-0">
                                        {["Duration", "Network", "Sort"].map((label, i) => (
                                            <button
                                                key={i}
                                                className="flex items-center gap-1 border border-gray-300 rounded-full px-2.5 py-1 text-[10px] text-gray-600 bg-white whitespace-nowrap shrink-0 cursor-pointer"
                                            >
                                                {label}
                                                <svg width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Carrier carousel on mobile / flex row on desktop */}
                                {isMobile ? (
                                    <div className="relative grid grid-cols-2 gap-4 px-1">
                                        {carriers.map((carrier, index) => (
                                            <div
                                                key={index}
                                                onClick={() => handleCarrier(index)}
                                                className={`flex items-center justify-center cursor-pointer transition rounded-lg p-1 outline-none
      ${selectedCarrier === index
                                                        ? "border-2 border-lime-300"
                                                        : "border-2 border-transparent"}
    `}
                                            >
                                                <img
                                                    src={carrier.logo}
                                                    alt={carrier.name}
                                                    className="w-40 transition"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex gap-2.5 overflow-x-auto pb-0.5">
                                        <div className="flex gap-3 overflow-x-auto py-2">
                                                {carriers.map((carrier, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => handleCarrier(index)}
                                                        className={`flex items-center justify-center cursor-pointer transition rounded-lg p-1 outline-none
      ${selectedCarrier === index
                                                                ? "border-2 border-lime-300"
                                                                : "border-2 border-transparent"}
    `}
                                                    >
                                                        <img
                                                            src={carrier.logo}
                                                            alt={carrier.name}
                                                            className="w-40 transition"
                                                        />
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* STEP 3 */}
                        <div style={{
                            opacity: locked(3) ? 0.38 : 1, pointerEvents: locked(3) ? "none" : "auto",
                            filter: locked(3) ? "grayscale(0.4)" : "none", transition: "opacity 0.4s,filter 0.4s"
                        }}>
                            <div className="flex flex-col gap-1.5">

                                <h3 className="text-sm font-semibold bg-lime-400 p-1 mb-1 rounded-full w-20 text-center">Step 03</h3>
                                <span className={`font-bold mb-3 ${isMobile ? "text-[18px]" : "text-2xl"} `}>Select your Plan</span>
                            </div>

                            <Plans
                                selectedPlan={selectedPlan}
                                onSelectPlan={handlePlan}
                            />
                        </div>

                    </div>
                </div>
            </div>
            <FAQ start={5} end={10} />
        </div>
    );
}
