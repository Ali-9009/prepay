import { Lock, Torus } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/Gbtn";

export default function ActivateStep() {
  const location = useLocation();
  const carrier = location.state?.carrier;

  const [selectedPlan, setSelectedPlan] = useState(0);

  const plans = [
    { price: 10, name: "Cricket Refill", link: "/Checkout" },
    { price: 20, name: "Cricket Refill", link: "/Checkout" },
    { price: 30, name: "Cricket Refill", link: "/Checkout" },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[40%_60%] gap-10 items-start">
        {/* LEFT CARD */}
        <div className="border p-4 border-gray-300 shadow-lg rounded-xl">
          <img src={carrier?.logo} alt={carrier?.name} className="w-130" />
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 border border-gray-300 shadow-lg rounded-xl">
          <div className="max-w-full">
            <div className="border border-gray-300 rounded-xl p-2 mb-6 flex flex-row items-start gap-4">
              <img src={carrier?.logo} alt={carrier?.name} className="w-26" />
              <div className="flex flex-col items-start">
                <h1 className="text-md font-semibold">{carrier?.name}</h1>
                <p className="text-red-500 font-bold text-xl mb-3">
                  ${carrier?.price}
                  <span className="text-sm text-gray-600">/mo</span>
                </p>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-xs font-medium flex items-center gap-2 mb-2">
                Sender name
              </label>

              <input
                type="text"
                placeholder="Sender name"
                className="input"
              />
            </div>

            <div className="mb-6">
              <label className="text-xs font-medium flex items-center gap-2 mb-2">
                Receipent name
              </label>

              <input
                type="text"
                placeholder="Receipent name"
                className="input"
              />
            </div>

            {/* Phone input */}
            <div className="mb-6">
              <label className="text-xs font-medium flex items-center gap-2 mb-2">
                Let’s start with the mobile number you want to pay
              </label>

              <input
                type="text"
                placeholder="+1 201 555 0123"
                className="input"
              />
            </div>

            {/* Plans */}
            <div className="grid grid-cols-2 md:grid-cols-3 mb-4 gap-4">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPlan(index)}
                  className={`bg-white border rounded-xl p-4 text-center shadow-sm transition cursor-pointer
      ${
        selectedPlan === index
          ? "border-red-500 shadow-md ring-1 ring-red-300"
          : "border-red-300 hover:border-red-400 hover:shadow-md"
      }`}
                >
                  <p className="text-sm text-gray-700 mb-1">{carrier?.name}</p>

                  <p className="text-red-500 font-bold text-xl mb-3">
                    ${plan.price}{" "}
                    <span className="text-sm text-gray-600">/mo</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Amount input */}
            <div className="mb-6">
              <label className="text-xs font-medium flex items-center gap-2 mb-2">
                Please, tell us how much money you want to add to your phone
                number
              </label>

              <input
                type="text"
                placeholder="enter an amount 3-200"
                className="input"
              />
            </div>
            {/* Checkbox */}
            <div className="flex items-start gap-2 mt-6">
              <input
                type="checkbox"
                id="confirm"
                className="mt-1 w-4 h-4 accent-red-500"
              />

              <label htmlFor="confirm" className="text-sm text-gray-700">
                I confirm that I have entered the correct phone number and
                understand that this sale is final,as the funds cannot be refunded
                or canceled once loaded onto the phone number or account I have
                provided and chosen above. I understand that funds loaded into ANY
                prepaid account are non-refundable, but MAY be transferred to the
                next month if topped up twice or more.
              </label>
            </div>

            <div className="flex items-center justify-center mt-4">
              <Button
                className="w-full text-center"
                text="Continue"
                to="/Checkout"
                state={{
                  carrier,
                  selectedPlan: plans[selectedPlan],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
