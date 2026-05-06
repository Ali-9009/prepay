import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Button from "../../components/Gbtn"

const controlButtons = [
  { label: "View Usage", to: "/dashboard/myline/invoice" },
  { label: "Add more data", to: "/dashboard/myline/adddata" },
  { label: "Change Plan", to: "/dashboard/myline/changeplan" },
  { label: "View Invoice", to: "/dashboard/myline/invoice" },
  { label: "Resume Activation", to: "/purchasePsim" },
  { label: "Cancel plan", to: "#" },
  { label: "Cancel plan", to: "#" },
  { label: "Cancel plan", to: "#" },
  { label: "Cancel plan", to: "#" },
  { label: "Cancel plan", to: "#" },
];

export default function MyLine() {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto flex gap-6">
        
        {/* content */}
        <div className="flex-1 bg-[#fbfbfb] rounded-xl p-4 md:p-6 lg:p-8">
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 items-stretch">

            {/* LEFT SIDE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <h1 className="col-span-1 sm:col-span-2 text-3xl font-bold mb-2">
                Hello, Carlos!
              </h1>              {/* Total Credits (big card) */}
              <div className="col-span-1 sm:col-span-2 bg-gray-100 p-4 rounded-xl flex justify-between items-center border border-gray-200 shadow-sm">
                <div>
                  <p className="text-lg font-medium text-gray-800">Total Credits</p>
                  <h2 className="text-2xl font-semibold">$230</h2>
                </div>

                <div className="flex flex-col gap-2">
                  <button className="bg-black text-white rounded-full px-4 py-1 text-sm font-semibold">
                    Redeem
                  </button>
                  <button className="bg-black text-white rounded-full px-4 py-1 text-sm font-semibold">
                    Earn Credit
                  </button>
                </div>
              </div>

              {/* Small cards */}
              <div className="bg-gray-100 p-2 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500">Pending credits</p>
                <h2 className="text-xl font-semibold">$15</h2>
              </div>

              <div className="bg-gray-100 p-2 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500">Lifetime credits</p>
                <h2 className="text-xl font-semibold">$0</h2>
              </div>

              <div className="bg-gray-100 p-2 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500">Monthly earning</p>
                <h2 className="text-xl font-semibold">$0</h2>
              </div>

            </div>

            <div className="bg-black text-white flex flex-col items-center justify-center rounded-xl p-6 w-full shrink-0">
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
              My Line <span className="text-gray-400 text-sm">Total: 02</span>
            </h2>

            <button className="bg-black text-white rounded-full px-6 py-2 text-sm font-semibold hover:opacity-80 transition self-start sm:self-auto">
              Request A New Sim Card
            </button>
          </div>

          {/* MY LINE SECTION */}
          <div className="space-y-4">

            {/* line 1 */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6">
              <div className="bg-gray-100 border border-gray-200 shadow-sm p-4 rounded-xl">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-[20px]">Line 01</p>

                  <span className="w-5 h-5 rounded-full bg-gray-400"></span>
                </div>
                <p className="text-2xl font-semibold mb-2">Number not generated</p>

                <hr className="text-gray-400 mb-2" />

                <p>
                  Plan Type: <span className="font-semibold">Starter</span>
                </p>
                <p>
                  Status: <span className="text-gray-400">Need Activation</span>
                </p>
                <p>
                  Amount: <span className="font-semibold">$00.00</span>
                </p>
              </div>

              <div className="bg-gray-100 border border-gray-200 shadow-sm p-4 rounded-xl">
                <Link
                  to="/purchasePsim"
                  className="bg-white rounded-lg py-2 md:py-4 px-6 font-semibold hover:bg-gray-200 transition w-55 inline-block"
                >
                  Start Activation
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6">
              <div className="bg-gray-100 border border-gray-200 shadow-sm p-4 rounded-xl">
                <p className="font-semibold text-[20px] mb-1">Line 02</p>
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
                {controlButtons.map((button, index) => (
                  <Link key={index} to={button.to}>
                    <button className="bg-white rounded-lg py-2 md:py-4 font-semibold hover:bg-gray-200 transition w-full">
                      {button.label}{" "}
                    </button>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
