import {
  Download,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Flag,
} from "lucide-react";

import Sidebar from "./Sidebar";

export default function Billing() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        <Sidebar />

        {/* content */}
        <div className="flex-1 bg-[#fbfbfb] rounded-xl p-4 md:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <h2 className="text-2xl font-semibold mb-2 md:mb-6">
                Payments Overview
              </h2>

              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm w-fit">
                <Download size={18} />
                Download Invoice
              </button>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div className="flex gap-4 md:gap-6 text-sm overflow-x-auto">
                <button className="font-medium border-b-2 border-black pb-1 whitespace-nowrap">
                  All Payments
                </button>
                <button className="text-gray-500 whitespace-nowrap">
                  Succeeded
                </button>
                <button className="text-gray-500 whitespace-nowrap">
                  Refunded
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm">
                Autopay
                <span className="text-green-600 font-medium">On</span>
                <label className="relative inline-flex items-center cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-checked:bg-lime-400 transition-colors"></div>
                  <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 bg-black px-3 py-2 rounded-full text-white text-sm">
                  <Calendar size={18} />
                  Date Range
                  <ChevronDown size={18} />
                </button>

                <button className="flex items-center gap-2 bg-black px-3 py-2 rounded-full text-white text-sm">
                  <Flag size={18} />
                  Status
                  <ChevronDown size={18} />
                </button>
              </div>

              <button className="bg-black text-white px-4 py-2 rounded-full text-sm w-fit">
                Update payment methods
              </button>
            </div>

            {/* table */}
            <div className="rounded-lg overflow-x-auto">
              <table className="w-full text-sm min-w-175">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="text-left p-3">Product</th>
                    <th className="text-left p-3">Plan Details</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Amount</th>
                    <th className="text-left p-3">Payment Method</th>
                    <th className="text-left p-3">Creation Date</th>
                  </tr>
                </thead>

                <tbody>
                  {[1, 2, 3].map((item) => (
                    <tr key={item}>
                      <td className="p-3">AT&T</td>
                      <td className="p-3">Unlimited Plus</td>

                      <td className="p-3">
                        <span className="bg-lime-400 text-black text-xs px-2 py-1 rounded">
                          Succeeded
                        </span>
                      </td>

                      <td className="p-3">$50.00</td>

                      <td className="p-3 flex items-center gap-2">
                        <span className="text-blue-600 text-xs font-bold">
                          VISA
                        </span>
                        **** 4242
                      </td>

                      <td className="p-3 text-gray-500">Activated Plan</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* pagination */}
            <div className="flex justify-center md:justify-end items-center gap-2 mt-6 text-sm flex-wrap">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
                <ChevronLeft size={16} />
              </button>

              <button className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full">
                1
              </button>

              <span className="px-2 text-gray-400">...</span>

              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
                3
              </button>

              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
