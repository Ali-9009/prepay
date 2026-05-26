export default function PlanCard({ plan, simType }) {
    const selectedPlan = plan || {
        carrier: "AT&T",
        tag: "Best in America",
        title: "Unlimited North America Plan",
        price: 60,
        popular: true,
        features: [
            "Unlimited talk, text & data across the US, Canada, and Mexico",
            "AT&T 5G network coverage",
            "10GB hotspot data per line per month",
        ],
    };

    return (
        <div className="relative rounded-xl border border-gray-300 bg-white p-6 shadow-md h-fit lg:sticky lg:top-18">
            {selectedPlan.popular && (
                <div className="absolute right-5 top-0 rounded-b-xl bg-red-500 px-3 py-1 text-xs font-bold text-white">
                    MOST POPULAR
                </div>
            )}

            <p className="mb-5 text-xs font-semibold text-gray-400">
                SELECTED PLAN
            </p>

            <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                        <span className="font-bold text-gray-500">
                            {selectedPlan.carrier}
                        </span>

                        {selectedPlan.tag && (
                            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">
                                {selectedPlan.tag}
                            </span>
                        )}
                    </div>

                    <h3 className="text-lg font-bold leading-tight">
                        {selectedPlan.title}
                    </h3>
                </div>

                <div className="text-right shrink-0">
                    <p className="text-4xl font-bold">
                        <span className="align-top text-xl font-semibold">$</span>
                        {selectedPlan.price}
                    </p>
                    <p className="text-xs font-bold text-gray-500">/month</p>
                </div>
            </div>

            <div className="mb-5 rounded-lg bg-gray-50 p-3">
                <p className="text-xs font-bold text-gray-500 mb-1">
                    SIM TYPE
                </p>

                <p className="font-semibold capitalize">
                    {simType || "Not selected"}
                </p>
            </div>

            <ul className="space-y-2 text-sm font-semibold text-gray-600">
                {selectedPlan.features.map((feature, index) => (
                    <li key={index} className="flex gap-2">
                        <span className="text-green-500">✔</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}