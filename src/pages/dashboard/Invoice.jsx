import {
  Download,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Flag,
} from "lucide-react";

import Sidebar from "./Sidebar";

export default function Invoice() {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* content */}
        <div className="flex-1 bg-[#fbfbfb] rounded-xl p-4 md:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <h2 className="text-2xl font-semibold mb-2 md:mb-6">Invoices </h2>

              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm w-fit">
                <Download size={18} />
                Download Invoice
              </button>
            </div>

            {/* table */}
            <div className="rounded-lg overflow-x-auto">
              <table className="w-full text-sm min-w-175">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="text-left p-3">Invoice ID</th>
                    <th className="text-left p-3">Date</th>
                    <th className="text-left p-3">Customer</th>
                    <th className="text-left p-3">Plan</th>
                    <th className="text-left p-3">Region</th>
                    <th className="text-left p-3">Payment Method</th>
                    <th className="text-left p-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {[1, 2, 3].map((item) => (
                    <tr key={item}>
                      <td className="p-3">INV-1001</td>
                      <td className="p-3">Mar 10, 2026</td>

                      <td className="p-3">Ali Khan</td>

                      <td className="p-3"> 
                        eSIM Basic
                      </td>

                      <td className="p-3 text-gray-500">USA</td>

                      <td className="p-3 text-gray-500">Credit Card</td>

                      <td className="p-3">
                        <span className="bg-lime-400 text-black text-xs px-2 py-1 rounded">
                          Paid
                        </span>
                      </td>
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
