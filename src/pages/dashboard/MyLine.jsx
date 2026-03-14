import Sidebar from "./Sidebar";

const controlButtons = [
  "View Usage",
  "Add more data",
  "Change Plan",
  "View Invoice",
  "Pause plan",
  "Cancel plan",
  "Pause plan",
  "Cancel plan",
  "Pause plan",
  "Cancel plan",
];

export default function MyLine() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Sidebar />

        {/* content */}
        <div className="flex-1 bg-[#fbfbfb] rounded-xl p-8">
          <h1 className="text-3xl font-bold mb-6">Hello, Carlos!</h1>

          <div className="flex flex-wrap gap-6 mb-6 justify-between items-start">
            <div className="flex flex-wrap gap-4 flex-1">
              <div className="bg-gray-100 p-3 rounded-xl flex flex-row justify-between gap-6 border border-gray-200 shadow-sm">
                <div className="flex flex-col">
                  <p className="text-lg font-medium text-gray-800">
                    Total Credits
                  </p>
                  <h2 className="text-xl font-semibold">$230</h2>
                </div>

                <div className="flex flex-col gap-2">
                  <button className="bg-black text-white rounded-full px-4 py-1 text-sm font-semibold hover:opacity-80 transition">
                    Redeem
                  </button>
                  <button className="bg-black text-white rounded-full px-4 py-1 text-sm font-semibold hover:opacity-80 transition">
                    Earn Credit
                  </button>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-lg font-medium text-gray-800">
                  Pending Credits
                </p>
                <h2 className="text-xl font-semibold">$230</h2>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-lg font-medium text-gray-800">
                  Monthly Earning
                </p>
                <h2 className="text-xl font-semibold">$230</h2>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-lg font-medium text-gray-800">
                  Lifetime Credit
                </p>
                <h2 className="text-xl font-semibold">$230</h2>
              </div>
            </div>

            <div className="bg-black text-white  flex flex-col items-center rounded-xl p-6 w-full max-w-70 shrink-0">
              <p className="font-semibold text-lg mb-2">Refer a Friend &</p>
              <p className="font-bold text-2xl mb-4">
                Get <span className="italic">$20</span> Credit
              </p>
              <button className="bg-white text-black rounded-full px-6 py-2 font-semibold hover:opacity-80 transition">
                Refer Now
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 sm:gap-0">
            <h2 className="font-semibold text-2xl">
              My Line <span className="text-gray-400 text-sm">Total: 03</span>
            </h2>

            <button className="bg-black text-white rounded-full px-6 py-2 text-sm font-semibold hover:opacity-80 transition self-start sm:self-auto">
              Request A New Sim Card
            </button>
          </div>

          {/* MY LINE SECTION */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-6">
              <div className="bg-gray-100 border border-gray-200 shadow-sm p-4 rounded-xl">
                <p className="font-semibold text-[20px] mb-1">Line 01</p>
                <p className="text-2xl font-semibold mb-2">00-0000-000</p>

                <div className="mb-4 space-y-3">
                  <div className="flex items-start justify-between bg-white p-3 rounded-lg">
                    <div>
                      <p className="text-md font-semibold">
                        International Calling
                      </p>
                      <p className="text-sm text-gray-500">
                        enable international calling to reach 299+ countries
                        worldwide
                      </p>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer mt-1">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-lime-400 transition-colors"></div>
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
                    </label>
                  </div>

                  <div className="flex items-start justify-between bg-white p-3 rounded-lg">
                    <div>
                      <p className="text-lg font-semibold">Autopay</p>
                      <p className="text-sm text-gray-400">
                        automatically renew your plan
                      </p>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer mt-1">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-lime-400 transition-colors"></div>
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
                    </label>
                  </div>
                </div>

                <p>
                  Status:{" "}
                  <span className="text-lime-400 font-semibold">Active</span>
                </p>
                <p>
                  Carrier: <span className="font-semibold">AT&T</span>
                </p>
                <p>
                  Plan Type: <span className="font-semibold">Unlimited</span>
                </p>
                <p>
                  Amount: <span className="font-semibold">$45.00</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-gray-100 border border-gray-200 shadow-sm p-4 rounded-xl">
                {controlButtons.map((label, index) => (
                  <button
                    key={index}
                    className="bg-white rounded-lg py-2 font-semibold hover:bg-gray-200 transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* line 2 */}
            <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-6">
              <div className="bg-gray-100 border border-gray-200 shadow-sm p-4 rounded-xl">
                <p className="font-semibold text-[20px] mb-1">Line 02</p>
                <p className="text-2xl font-semibold mb-2">00-0000-000</p>

                <hr className="text-gray-400 mb-2" />

                <p>
                  Status: <span className="text-gray-400">Need Activation</span>
                </p>
                <p>
                  Carrier: <span className="font-semibold">AT&T</span>
                </p>
                <p>
                  Plan Type: <span className="font-semibold">Unlimited</span>
                </p>
                <p>
                  Amount: <span className="font-semibold">$45.00</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-gray-100 border border-gray-200 shadow-sm p-4 rounded-xl">
                {controlButtons.slice(0, 1).map((label, index) => (
                  <button
                    key={index}
                    className="bg-white h-12 rounded-lg py-2 font-semibold hover:bg-gray-200 transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* line 3 */}
            <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-6">
              <div className="bg-gray-100 border border-gray-200 shadow-sm p-4 rounded-xl">
                <p className="font-semibold text-[20px] mb-1">Line 03</p>
                <p className="text-2xl font-semibold mb-2">00-0000-000</p>

                <hr className="text-gray-400 mb-2" />

                <p>
                  Status: <span className="text-gray-400">Activation Scheduled</span>
                </p>
                <p>
                  Carrier: <span className="font-semibold">AT&T</span>
                </p>
                <p>
                  Plan Type: <span className="font-semibold">Unlimited</span>
                </p>
                <p>
                  Amount: <span className="font-semibold">$45.00</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-gray-100 border border-gray-200 shadow-sm p-4 rounded-xl">
                <h1 className="text-[18px] font-semibold text-gray-400">Your plan is scheduled to start on: ......</h1>
                <h1></h1>
                {controlButtons.slice(0, 2).map((label, index) => (
                  <button
                    key={index}
                    className="bg-white h-12 rounded-lg py-2 font-semibold hover:bg-gray-200 transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
