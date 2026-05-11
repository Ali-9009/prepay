import { useState } from "react";
import Button from "../../components/Gbtn";
export default function NewSimCard() {
  const [activeTab, setActiveTab] = useState("6 months");

  const plansData = {
    "1 month": [
      {
        title: "Unlimited Plus",
        oldPrice: "$45.00",
        price: "$41.40",
        badge: "8% OFF • Save $3.60",
        features: [
          "*Unlimited Data",
          "30GB premium 5G data",
          "OnePool-AI Data can be used in both U.S. and China",
          "Unlimited US calls & texts",
          "Free international calls and texts to 229+ countries",
          "WiFi-Calling",
        ],
      },
      {
        title: "Unlimited",
        oldPrice: "$35.00",
        price: "$32.20",
        badge: "8% OFF • Save $2.80",
        popular: true,
        features: [
          "*Unlimited Data",
          "15GB premium 5G data",
          "OnePool-AI Data can be used in both U.S. and China",
          "Unlimited US calls & texts",
          "Free international calls and texts to 229+ countries",
          "WiFi-Calling",
        ],
      },
      {
        title: "Starter",
        oldPrice: "$25.00",
        price: "$23.00",
        badge: "8% OFF • Save $2.00",
        features: [
          "6GB of 5G data",
          "Unlimited US talk & text",
          "Free Unlimited calls and texts to China and 229+ countries",
        ],
      },
      {
        title: "Lite",
        price: "$15.00",
        features: [
          "3GB of 5G data",
          "Unlimited US talk & text",
        ],
      },
    ],

    "3 months": [
      {
        title: "Unlimited Plus",
        oldPrice: "$120.00",
        price: "$109.99",
        badge: "Best Value",
        features: [
          "*Unlimited Data",
          "30GB premium 5G data",
          "Unlimited US calls & texts",
          "International calling included",
        ],
      },
      {
        title: "Unlimited",
        oldPrice: "$99.00",
        price: "$89.00",
        popular: true,
        badge: "Most Popular",
        features: [
          "*Unlimited Data",
          "15GB premium 5G data",
          "Unlimited US calls & texts",
          "WiFi Calling",
        ],
      },
    ],

    "6 months": [
      {
        title: "Unlimited Plus",
        oldPrice: "$45.00",
        price: "$41.40",
        badge: "8% OFF • Save $3.60",
        features: [
          "*Unlimited Data",
          "30GB premium 5G data",
          "OnePool-AI Data can be used in both U.S. and China",
          "Unlimited US calls & texts",
          "Free international calls and texts to 229+ countries",
          "WiFi-Calling",
        ],
      },
      {
        title: "Unlimited",
        oldPrice: "$35.00",
        price: "$32.20",
        badge: "8% OFF • Save $2.80",
        popular: true,
        features: [
          "*Unlimited Data",
          "15GB premium 5G data",
          "OnePool-AI Data can be used in both U.S. and China",
          "Unlimited US calls & texts",
          "Free international calls and texts to 229+ countries",
          "WiFi-Calling",
        ],
      },
      {
        title: "Starter",
        oldPrice: "$25.00",
        price: "$23.00",
        badge: "8% OFF • Save $2.00",
        features: [
          "6GB of 5G data",
          "Unlimited US talk & text",
          "Free Unlimited calls and texts to China and 229+ countries",
        ],
      },
      {
        title: "Lite",
        price: "$15.00",
        features: [
          "3GB of 5G data",
          "Unlimited US talk & text",
        ],
      },
    ],

    "12 months": [
      {
        title: "Unlimited Plus",
        oldPrice: "$450.00",
        price: "$399.00",
        badge: "Biggest Savings",
        features: [
          "*Unlimited Data",
          "30GB premium 5G data",
          "Unlimited calls & texts",
          "International benefits",
        ],
      },
    ],
  };

  const tabs = ["1 month", "3 months", "6 months", "12 months"];

  return (
    <div className="bg-[#f5f3f2] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3">
            Prepay Mobile Plans
          </h2>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Lowest Price Online Ever 3-Month Flash Sale
          </p>

          {/* TABS */}
          <div className="mt-6 flex justify-center">
            <div className="bg-(--primary-color) text-white rounded-full p-1 flex flex-wrap justify-center md:gap-4 gap-2 w-full max-w-132">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 md:px-7 py-2 rounded-full text-sm font-semibold transition-all duration-300
                    ${activeTab === tab
                      ? "bg-white text-black shadow-md"
                      : "text-white hover:bg-white/40"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PLANS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plansData[activeTab]?.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl border border-gray-200 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* BADGE */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-(--primary-color) text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              {/* TITLE */}
              <h3 className="text-center text-[#ff5e3a] text-2xl font-semibold mt-4">
                {plan.title}
              </h3>

              {/* PRICE */}
              <div className="text-center mt-4">
                {plan.oldPrice && (
                  <div className="flex items-center justify-center gap-1 text-gray-500 line-through font-bold">
                    <span className="text-2xl">{plan.oldPrice}</span>
                    <span className="text-sm">/mo</span>
                  </div>
                )}

                <div className="text-black font-extrabold text-4xl mt-1">
                  {plan.price}
                  <span className="text-xl font-bold">/mo</span>
                </div>
              </div>

              {/* BUTTON */}
              <button className="mt-5 bg-(--primary-color) text-white font-semibold py-3 rounded-xl w-full">
                Get the Plan
              </button>


              <div className="border-t border-gray-200 my-5"></div>

              {/* FEATURES */}
              <div className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#00a6a6] text-lg mt-0.5">
                      ✓
                    </span>

                    <p className="text-sm text-black font-medium leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* FOOTER BUTTON */}
              <button className="mt-6 border border-black rounded-full px-4 py-2 text-xs font-semibold hover:bg-black hover:text-white transition-all duration-300 mx-auto">
                Broadband Facts
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}