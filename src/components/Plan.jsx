import React from "react";
import Button from "./Gbtn";

const plans = [
  {
    title: "Unlimited North America Plan",
    price: "$60",
    features: [
      "Unlimited talk, text & data in the U.S., Canada, and Mexico",
      "AT&T's 5G Network",
      "10GB hotspot data per line per month",
    ],
  },
  {
    title: "Unlimited Monthly",
    price: "$50",
    subtitle: "Plus taxes and fees",
    highlight: true,
    features: [
      "Unlimited 5G with 50GB of premium data",
      "Unlimited talk and text",
      "Unlimited mobile hotspot with 3G speed",
      "Canada and Mexico Add-On Available",
    ],
  },
  {
    title: "Starter Monthly",
    price: "$45",
    subtitle: "Plus taxes and fees",
    features: [
      "15GB of premium data with unlimited 2G after",
      "Unlimited talk and text",
      "Canada and Mexico Add-On Available",
    ],
  },
];

export default function Plan() {
  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md p-6 flex flex-col justify-between ${
              plan.highlight ? "border border-gray-200" : ""
            }`}
          >
            <div>
              <h3 className="text-lg font-bold text-center mb-2">
                {plan.title}
              </h3>

              <div className="text-center mb-4">
                <span className="text-red-500 text-3xl font-bold">
                  {plan.price}
                </span>
                <span className=""> /mo</span>
                <p className="text-xs text-gray-900 mt-1">
                  Plus taxes and fees
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start font-medium text-sm text-gray-900">
                    <span className="text-gray-800 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button text="Select Plan" />
          </div>
        ))}
      </div>
    </div>
  );
}