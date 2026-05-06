import { useState } from "react";
import { useLocation } from "react-router-dom";

import Button from "../../components/Gbtn";

export default function Checkout() {

  const location = useLocation();

  const carrier = location.state?.carrier;
  const plan = location.state?.selectedPlan;

  const [paymentType, setPaymentType] = useState("card");

  return (
    <div className="py-12 bg-red-50 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* ───── LEFT: FORM ───── */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">Recharge & Pay</h2>

          {/* Payment Method */}
          <p className="text-md font-semibold mb-2">Select Payment Method</p>
          <div className="flex gap-3 mb-5">
            <button
              onClick={() => setPaymentType("card")}
              className={`flex-1 py-2 rounded-lg border text-sm ${
                paymentType === "card"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              Card Payment
            </button>

            <button
              onClick={() => setPaymentType("crypto")}
              className={`flex-1 py-2 rounded-lg border text-sm ${
                paymentType === "crypto"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              Crypto Payment
            </button>
          </div>

          {/* Card Info */}
          <p className="text-md font-semibold mb-2">Card Information</p>

          <div className="pb-4">
            <p className="font-medium text-gray-600 text-sm mb-2">
              Accecpted ATM/debit and credit cards
            </p>
            <div className="flex items-center gap-1">
              <img src="/images/visa.png" alt="Visa" className="" />
              <img src="/images/master.png" alt="MasterCard" className="" />
              <img src="/images/american.png" alt="Amex" className="" />
              <img src="/images/discover.png" alt="Discover" className="" />
            </div>
          </div>

          <input type="text" placeholder="Card Number" className="input mb-3" />

          <div className="grid grid-cols-2 gap-3 mb-4">
            <input type="text" placeholder="MM/YY" className="input" />
            <input type="text" placeholder="CVV" className="input" />
          </div>

          {/* Contact Info */}
          <p className="text-md font-semibold mb-2">Contact Information</p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <input type="text" placeholder="Phone" className="input" />
            <input type="email" placeholder="Email" className="input" />
          </div>

          {/* Billing */}
          <p className="text-md font-semibold mb-2">Billing Address</p>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
          </div>

          <input
            type="text"
            placeholder="Street Address"
            className="input mb-3"
          />

          <input type="text" placeholder="Apt / Suite" className="input mb-3" />

          <div className="grid grid-cols-3 gap-3">
            <input type="text" placeholder="City" className="input" />
            <input type="text" placeholder="State" className="input" />
            <input type="text" placeholder="Zip" className="input" />
          </div>
        </div>

        {/* ───── RIGHT: SUMMARY ───── */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit">
          
          <div className="flex items-center justify-center">
            <img src={carrier?.logo} alt={carrier?.name} className="w-26" />
          </div>

          <h2 className="text-lg font-bold mb-4">Order Summary</h2>

          <div className="text-sm space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Carrier</span>
              <span>{carrier?.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Plan</span>
              <span>{carrier?.name} ${plan?.price}</span>
            </div>
            <div className="flex justify-between">
              <span>Phone Number</span>
              <span>(555) 542-2522</span>
            </div>
            <div className="flex justify-between">
              <span>Amount</span>
              <span>$4.00</span>
            </div>
            <div className="flex justify-between">
              <span>Service Charge</span>
              <span>$1.00</span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total Due</span>
            <span>$5.00</span>
          </div>

          {/* Terms */}
          <div className="text-xs text-gray-500 space-y-2 mb-4">
            <p>
              By authorizing charges through your card, you agree to terms and
              conditions.
            </p>
            <label className="flex items-center gap-2">
              <input type="checkbox" />I agree to Terms and Conditions
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Subscribe to Auto Pay
            </label>
          </div>

          <Button className="w-full text-center" text="Submit" to="/" />
        </div>
      </div>
    </div>
  );
}
