import { useState, useEffect, useRef } from "react";
import TypingInput from "../../components/TypingInput";
import Plans from "../../components/Plans";
import { Check, X } from "lucide-react";


const carriers = [
    { logo: "/images/inter-01.png", name: "Chatr Mobile", link: "/" },
    { logo: "/images/inter-2.png", name: "My Natcom", link: "/ActivateStep" },
    { logo: "/images/inter-3.png", name: "Claro", link: "/ActivateStep" },
    { logo: "/images/inter-4.png", name: "Tigo", link: "/ActivateStep" },
    { logo: "/images/inter-5.png", name: "Flow", link: "/ActivateStep" },
];

const COMPATIBLE = ["iphone", "samsung"];

/* ── Toast ── */
function Toast({ toast, onClose, isMobile }) {
    useEffect(() => {
        const t = setTimeout(onClose, 4500);
        return () => clearTimeout(t);
    }, [onClose]);

    const ok = toast.type === "success";

    return (
        <div className={`fixed top-4 z-11 w-[calc(100%-32px)] max-w-90 animate-[toastIn_0.4s_cubic-bezier(.22,.68,0,1.2)_forwards] ${isMobile ? "left-1/2 -translate-x-1/2" : "right-4"}`}>

            <div className={`overflow-hidden rounded-xl border bg-white shadow-2xl ${ok ? "border-green-200" : "border-red-200"}`}>
                <div className={`h-1 ${ok ? "bg-green-500" : "bg-red-500"}`} />
                <div className="flex items-start gap-2.5 p-3">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${ok ? "bg-green-100" : "bg-red-100"}`}>
                        {ok ? (
                            <Check className="h-4 w-4 text-green-600" strokeWidth={2.5} />
                        ) : (
                            <X className="h-4 w-4 text-red-600" strokeWidth={2.5} />
                        )}
                    </div>
                    <div className="flex-1">
                        <div className={`mb-0.5 text-[13px] font-bold ${ok ? "text-green-800" : "text-red-800"}`}>
                            {ok ? "Device Compatible" : "Not Compatible"}
                        </div>

                        <div className="text-[11px] leading-relaxed text-gray-500">
                            {toast.message}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="bg-transparent p-0.5 text-gray-400 transition hover:text-gray-600"
                    >
                        <X className="h-3 w-3" strokeWidth={2} />
                    </button>
                </div>

                <div className={`h-0.5 ${ok ? "bg-green-100" : "bg-red-100"}`}>
                    <div className={`h-full w-full animate-[shrinkBar_4.5s_linear_forwards] ${ok ? "bg-green-500" : "bg-red-500"}`} />
                </div>
            </div>
        </div>
    );
}

/* ── Step Dot ── */
function StepDot({ status }) {
    const base =
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full";

    if (status === "done") {
        return (
            <div
                className={`${base} border-2 border-[#414141] bg-black shadow-[0_0_0_4px_rgba(34,197,94,0.15)] animate-[popIn_0.4s_ease]`}
            >
                <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </div>
        );
    }

    if (status === "active") {
        return (
            <div
                className={`${base} border-2 border-red-300 bg-red-500 shadow-[0_0_0_5px_rgba(239,68,68,0.18)]`}
            />
        );
    }

    return (
        <div
            className={`${base} border-2 border-gray-300 bg-white`}
        />
    );
}

/* ── Step Connector ── */
function StepConnector({ filled, height }) {
    return (
        <div className="relative w-0.5 shrink-0" style={{ height }}>
            <div className="absolute inset-0 rounded-full bg-gray-200" />
            {filled && (
                <div className="absolute inset-x-0 top-0 h-full rounded-full bg-black animate-[growLine_0.6s_ease_forwards]" />
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
    const c1h = isMobile ? 265 : 260;
    const c2h = isMobile ? 445 : 200;

    return (
        <div className="py-8" style={{ minHeight: "100vh" }}>
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
            <div className="bg-white rounded-lg p-6" style={{ maxWidth: 960, margin: "0 auto", padding: isMobile ? "16px 12px" : "24px 16px" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        gap: isMobile ? 12 : 20
                    }}
                >

                    {/* ── Left Stepper (Desktop) / Top Stepper (Mobile) ── */}
                    {isMobile ? (
                        <div className="mb-6">
                            <div className="flex items-center justify-between px-6">
                                <StepDot status={dotStatus(1)} />

                                <div className="flex-1 h-0.5 mx-2 relative">
                                    <div className="absolute inset-0 bg-gray-200" />
                                    {step > 1 && (
                                        <div className="absolute inset-0 bg-black animate-[growLineHorizontal_0.5s_ease]" />
                                    )}
                                </div>

                                <StepDot status={dotStatus(2)} />

                                <div className="flex-1 h-0.5 mx-1 relative">
                                    <div className="absolute inset-0 bg-gray-200" />
                                    {step > 2 && (
                                        <div className="absolute inset-0 bg-black animate-[growLineHorizontal_0.5s_ease]" />
                                    )}
                                </div>

                                <StepDot status={dotStatus(3)} />
                            </div>

                            {/* labels */}
                            <div className="flex justify-between mt-2 px-5">
                                <span className={`text-xs ${step >= 1 ? "text-black" : "text-gray-400"}`}>
                                    Device
                                </span>
                                <span className={`text-xs ${step >= 2 ? "text-black" : "text-gray-400"}`}>
                                    Carrier
                                </span>
                                <span className={`text-xs ${step >= 3 ? "text-black" : "text-gray-400"}`}>
                                    Plan
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingTop: 5,
                            flexShrink: 0,
                            width: 20
                        }}>
                            <StepDot status={dotStatus(1)} />
                            <StepConnector filled={step > 1} height={c1h} />
                            <StepDot status={dotStatus(2)} />
                            <StepConnector filled={step > 2} height={c2h} />
                            <StepDot status={dotStatus(3)} />
                        </div>
                    )}

                    {/* steps */}
                    <div className="flex min-w-0 flex-1 flex-col gap-4">

                    {/* step-1 */}
                        <div className="w-full">

                            <h3 className="text-sm font-semibold bg-(--primary-color) text-white p-1 mb-1 rounded-full w-20 text-center">
                                Step 01
                            </h3>
                            <h2 className="text-xl font-bold md:text-2xl mb-3">
                                Activate Your Device. <br />
                                All Carrier’s & Plan.
                            </h2>

                            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">

                                <div className="flex items-center gap-2 mb-3">
                                    <span className="font-semibold">
                                        Check your Device Compatibility
                                    </span>
                                </div>

                                <div className="mb-2.5 flex flex-wrap gap-2">
                                    <TypingInput />

                                    <div className="flex w-full gap-2 sm:w-auto">
                                        <button
                                            onClick={handleCheck}
                                            disabled={checking}
                                            className={`flex flex-1 items-center justify-center gap-1.5 rounded-[10px] bg-gray-800 px-3.5 py-2.5 text-[13px] font-semibold text-white transition ${checking ? "opacity-70" : "opacity-100"
                                                }`}
                                        >
                                            {checking && (<Check />)}
                                            {checking ? "…" : "Check"}
                                        </button>

                                        <button
                                            onClick={handleSkip}
                                            className="flex-1 rounded-[10px] bg-gray-100 px-3.5 py-2.25 text-[13px] font-semibold text-gray-600 transition hover:bg-gray-200"
                                        >
                                            Skip
                                        </button>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-[11px] leading-[1.6] m-0">
                                    Check compatibility and find the best network for your device.
                                    Checkout instantly — no contracts, no confusion.
                                </p>

                            </div>
                        </div>

                        {/* step-2 */}
                        <div
                            className={`transition-all duration-300 ${locked(2)
                                ? "pointer-events-none opacity-40 grayscale"
                                : ""
                                }`} >

                            <div className="mt-4">

                                <div className="mb-3">
                                    <h3 className="mb-2 w-20 rounded-full bg-(--primary-color) p-1 text-center text-sm font-semibold text-white">
                                        Step 02
                                    </h3>
                                    <h2 className="text-xl font-bold md:text-2xl">
                                        Shop Carrier & Plan
                                    </h2>
                                </div>

                                <div className="grid grid-cols-3 gap-2 md:flex md:gap-3 md:overflow-x-auto md:py-2">
                                    {carriers.map((carrier, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleCarrier(index)}
                                            className={`flex items-center justify-center rounded-lg border-2 p-1 transition ${selectedCarrier === index
                                                ? "border-lime-300"
                                                : "border-transparent"
                                                }`}
                                        >
                                            <img
                                                src={carrier.logo}
                                                alt={carrier.name}
                                                className="w-40"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* step-3 */}
                        <div
                            className={`transition-all duration-300 ${locked(3)
                                ? "pointer-events-none opacity-40 grayscale"
                                : ""}`} >

                            <div className="mb-3">
                                <h3 className="mb-2 w-20 rounded-full bg-(--primary-color) p-1 text-center text-sm font-semibold text-white">
                                    Step 03
                                </h3>
                                <h2 className="text-xl font-bold md:text-2xl">
                                    Select your Plan
                                </h2>
                            </div>

                            <Plans
                                selectedPlan={selectedPlan}
                                onSelectPlan={handlePlan}
                            />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
