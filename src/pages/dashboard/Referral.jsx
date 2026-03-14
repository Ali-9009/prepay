import Sidebar from "./Sidebar";

export default function Referral() {
  const referrals = [
    { name: "Lily", amount: "$5.75" },
    { name: "Lily", amount: "$5.75" },
    { name: "Lily", amount: "$5.75" },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Sidebar />

        {/* content */}
        <div className="flex-1 bg-[#fbfbfb] rounded-xl p-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
              <h2 className="text-2xl font-semibold md:mb-6 mb-2">
                My Referrals
              </h2>

              <div className="text-left md:text-right">
                <p className="text-sm text-gray-600">
                  Total Referral Credits:{" "}
                  <span className="font-semibold text-black">$34.50</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-3 md:justify-end">
                  <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-full">
                    Activate Virtual credit card
                  </button>

                  <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-full">
                    Transfer Credits
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {referrals.map((ref, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-3 flex items-start justify-between"
                >
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />

                    <div>
                      <p className="font-medium">{ref.name}</p>
                      <p className="text-sm text-gray-600">{ref.amount}</p>
                    </div>
                  </div>

                  <span className="bg-lime-400 text-black text-xs px-2 py-1 rounded">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
