import {
  Download,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Flag,
  MoreVertical,
  CreditCard,
  Smartphone,
} from "lucide-react";


import { useState } from "react";
import { PaymentMethod } from "./modules";
import PaymentsOverview from "./PaymentsOverview";

export default function Billing() {
  const [tab, setTab] = useState("update");
  const [activePaymentId, setActivePaymentId] = useState(2);
  const [openModal, setOpenModal] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, last4: "5556", expires: "12/2031", line: "7863279017" },
    { id: 2, last4: "4242", expires: "11/2026", line: "3052190288" },
    { id: 3, last4: "4242", expires: "11/2028", line: "6453318869" },
  ]);

  const openMethodModal = (id) => {
    setActiveCardId(id);
    setOpenModal(true);
  };

  const updatePaymentMethod = (newMethod) => {
    setPaymentMethods((prev) =>
      prev.map((item) =>
        item.id === activeCardId
          ? {
            ...item,
            last4: newMethod.last4,
            expires: newMethod.expires,
          }
          : item
      )
    );

    setActivePaymentId(activeCardId);
  };

  return (
    <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-4">
      <div className="flex-1 bg-[#fbfbfb] rounded-xl p-4 md:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto w-full">

          {/* TABS */}
          <div className="bg-gray-100 p-1 rounded-xl flex flex-wrap gap-2 mb-6 w-full">
            {[
              { key: "update", label: "Update Payment Method" },
              { key: "upcoming", label: "Upcoming Billing" },
              { key: "history", label: "Billing History" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${tab === t.key
                  ? "bg-white text-black shadow-sm font-medium"
                  : "text-gray-500 hover:text-black"
                  }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          {tab === "update" && (
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-2">
                Saved Payment Methods
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 mb-5">
                These are the payment methods linked to your account.
              </p>

              <div className="space-y-4">
                {paymentMethods.map((card) => {
                  const isActive = activePaymentId === card.id;

                  return (
                    <div
                      key={card.id}
                      className={`flex items-start sm:items-center justify-between gap-3 border rounded-xl px-3 sm:px-4 py-3 transition ${isActive
                        ? "border-red-400 bg-gray-50"
                        : "border-gray-200 bg-white"
                        }`}
                    >
                      {/* LEFT */}
                      <div className="flex items-start sm:items-center gap-3 min-w-0">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold break-words">
                            Visa Ending in {card.last4}
                          </p>

                          <p className="text-xs text-gray-500">
                            Expires {card.expires}
                          </p>

                          {/* ACTIVE BADGE */}
                          {isActive && (
                            <span className="inline-block mt-1 text-[11px] px-2 py-0.5 bg-(--primary-color) text-white rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                      </div>

                      {/* RIGHT */}
                      <button
                        onClick={() => openMethodModal(card.id)}
                        className="text-gray-500 hover:text-black flex-shrink-0"
                      >
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  );
                })}

                <PaymentMethod
                  open={openModal}
                  onClose={() => setOpenModal(false)}
                  onSave={updatePaymentMethod}
                />
              </div>
            </div>
          )}

          {tab === "upcoming" && (
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-2">
                Saved Payment Methods
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 mb-5">
                These are the payment methods linked to your account.
              </p>

              <div className="space-y-4">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-200 overflow-hidden"
                  >
                    {/* YELLOW HEADER */}
                    <div className="bg-(--primary-color) px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                          <span className="text-xs font-bold"><Smartphone className="text-red-600" /></span>
                        </div>
                        <p className="text-sm font-semibold text-white">
                          Line 7863279017
                        </p>
                      </div>
                    </div>

                    {/* BODY */}
                    <div className="p-4 sm:p-5 space-y-4">
                      {/* PLAN */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <p className="text-xs text-gray-400 uppercase">
                            Active Plan
                          </p>
                          <p className="text-sm font-semibold">Lite Plan</p>
                        </div>

                        {/* PAYMENT METHOD */}
                        <div className="flex items-center gap-2">
                          <img src="/images/visa.png" alt="" />
                          <div className="text-sm text-gray-600">
                            ending in 5556
                          </div>
                        </div>
                      </div>

                      {/* NEXT BILLING */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2 border-t border-gray-100">
                        <p className="text-xs text-gray-500">
                          Next billing June 3, 2026
                        </p>

                        <p className="text-sm font-semibold text-black">
                          $15.00
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "history" && <PaymentsOverview />}

        </div>
      </div>
    </div>
  );
}