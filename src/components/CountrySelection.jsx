
import Countries from "./Countries"

export default function CountrySelection() {

    return (
        <div className="max-w-sm mx-auto space-y-8 py-8 px-3 block md:hidden">
                {/* Country Selection */}
                <div className="flex justify-center gap-10">
                  {/* United States */}
                  <div
                    onClick={() => navigate("/TopUpMobile")}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="bg-black/70 p-1 rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                      <img
                        src="/images/us-coun.png"
                        alt="United States"
                        className="w-24 h-24 object-contain rounded-lg"
                      />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-gray-600 group-hover:text-black">
                      United States
                    </p>
                  </div>
        
                  {/* International */}
                  <div
                    onClick={() => navigate("/InternationalTopUp")}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="bg-black/70 p-1 rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                      <img
                        src="/images/all-coun.png"
                        alt="International"
                        className="w-24 h-24 object-contain rounded-lg"
                      />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-gray-600 group-hover:text-black">
                      International
                    </p>
                  </div>
                </div>
        
                <Countries />
              </div>
    );
}