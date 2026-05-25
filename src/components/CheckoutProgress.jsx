export default function CheckoutProgress({ step }) {
    const steps = [
        { id: 1, label: "Device & Plan" },
        { id: 2, label: "Checkout" },
    ];

    const progress = (step / steps.length) * 100;

    return (
        <div className="max-w-xl mx-auto mb-8 px-2">

            {/* TOP INFO */}
            <div className="flex justify-between items-center mb-2">

                <h2 className="font-bold text-lg">
                    {steps[step - 1]?.label}
                </h2>

                <span className="text-sm text-gray-500">
                    Step {step} of {steps.length}
                </span>

            </div>

            {/* PROGRESS BAR */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

                <div
                    className="h-2 bg-(--primary-color) rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                />

            </div>
        </div>
    );
}