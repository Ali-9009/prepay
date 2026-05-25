import { useState } from "react";
import Button from "../components/Gbtn";
import CheckoutProgress from "../components/CheckoutProgress";

export default function Checkout2() {
    const [simType, setSimType] = useState("esim");

    return (
        <div className="px-4 py-12">
            <CheckoutProgress  step={2} />
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* ───────── LEFT SIDE ───────── */}
                <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">

                    {/* Card Info */}
                    <h2 className="font-bold text-lg mb-3">Card Information</h2>

                    <input
                        placeholder="Card number"
                        className="w-full bg-gray-100 rounded-md px-4 py-3 mb-6 outline-none"
                    />

                    {/* Billing */}
                    <h2 className="font-bold text-lg mb-3">Billing Information</h2>

                    <label className="flex items-center gap-2 text-sm mb-4">
                        <input type="checkbox" defaultChecked />
                        Use activation details as billing data
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input className="bg-gray-100 p-3 rounded-md" placeholder="First Name" />
                        <input className="bg-gray-100 p-3 rounded-md" placeholder="Last Name" />
                        <input className="bg-gray-100 p-3 rounded-md sm:col-span-2" placeholder="Email" />
                        <input className="bg-gray-100 p-3 rounded-md sm:col-span-2" placeholder="Phone" />
                    </div>

                    {/* Address */}
                    <div className="mt-6">
                        <input className="bg-gray-100 p-3 rounded-md w-full mb-3" placeholder="Street Address" />

                        <div className="grid grid-cols-2 gap-4">
                            <input className="bg-gray-100 p-3 rounded-md" placeholder="City" />
                            <input className="bg-gray-100 p-3 rounded-md" placeholder="State" />
                        </div>

                        <input className="bg-gray-100 p-3 rounded-md w-full mt-3" placeholder="Zip Code" />
                    </div>
                </div>

                {/* ───────── RIGHT SIDE ───────── */}
                <div className="bg-red-50 rounded-xl p-6 shadow-sm h-fit">

                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-white rounded-md" />
                        <div>
                            <p className="font-semibold">Essential</p>
                        </div>
                    </div>

                    <hr className="border-t border-gray-300 my-4" />

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Plan Price</span>
                            <span>$10</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Validity</span>
                            <span>1 month</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Total Tax</span>
                            <span>$2.01</span>
                        </div>
                    </div>

                    <hr className="border-t border-gray-300 my-4" />

                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-red-500">$12.01</span>
                    </div>

                    <hr className="border-t border-gray-300 my-4" />

                    <h3 className="font-semibold mb-2">Terms & Conditions</h3>
                    <p className="text-xs text-gray-600 mb-4">
                        Thereby authorize charges for total of 12.01...
                    </p>

                    <label className="flex items-start gap-2 text-xs mb-2">
                        <input type="checkbox" />
                        Agree to Service Agreement
                    </label>

                    <label className="flex items-start gap-2 text-xs mb-4">
                        <input type="checkbox" />
                        Subscribe to AutoPay
                    </label>

                    <Button className="w-full text-center" text="Confirm Purchase & Activate SIM" to="/" />
                </div>
            </div>
        </div>
    );
}