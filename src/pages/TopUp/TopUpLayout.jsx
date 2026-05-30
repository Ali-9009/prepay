import { useLocation, useNavigate, Link } from "react-router-dom";
import { Shield, Zap, Globe } from "lucide-react";
import {
  RadioTower,
  ShieldCheck,
  Headphones,
  ThumbsUp,
  ChevronRight,
} from "lucide-react";
export default function TopUpLayout({
  title,
  image,
  carriers,
  extraComponent,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* DESKTOP */}
      <section className="py-12 hidden md:flex">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold mb-3">{title}</h1>

            <p className="text-gray-600 text-lg">
              Keep them close, no matter the distance
            </p>

            {/* Country box */}
            <div className="mt-6 bg-gray-50 rounded-xl p-5 w-85 border border-gray-300 shadow-md">
              <label className="text-sm text-gray-700 block mb-2">
                Country of use
              </label>

              <select
                value={location.pathname}
                onChange={(e) => navigate(e.target.value)}
                className="w-full bg-white rounded-lg border border-gray-200 px-3 py-2"
              >
                <option value="/TopUpMobile">United States</option>
                <option value="/InternationalTopUp">International</option>
              </select>

              {/* feature row */}
              <div className="bg-red-100 p-4 rounded flex items-center justify-between mt-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <Shield size={16} /> Secure
                </div>
                <div className="flex items-center gap-1">
                  <Zap size={16} /> Instant
                </div>
                <div className="flex items-center gap-1">
                  <Globe size={16} /> Global
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-end">
            <img src={image} alt="hero" className="drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <div className="max-w-sm mx-auto py-8 block md:hidden">
        <div className="flex justify-center gap-10">
          <div
            onClick={() => navigate("/TopUpMobile")}
            className="cursor-pointer text-center"
          >
            <img src="/images/us-coun.png" className="w-24 h-24 rounded-lg" />
            <p className="mt-2 text-sm">United States</p>
          </div>

          <div
            onClick={() => navigate("/InternationalTopUp")}
            className="cursor-pointer text-center"
          >
            <img src="/images/all-coun.png" className="w-24 h-24 rounded-lg" />
            <p className="mt-2 text-sm">International</p>
          </div>
        </div>

        {extraComponent}
      </div>

      {/* CARRIERS */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm lg:border border-gray-100 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
              <RadioTower className="w-4 h-4 text-red-500" />
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              Top up for popular carriers
            </h2>
          </div>

          <button className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
            View all carriers
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carriers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {carriers.map((carrier) => (
            <Link
              key={carrier.name}
              to={carrier.link}
              state={{ carrier }}
              className="h-24 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <img
                src={carrier.logo}
                alt={carrier.name}
                className="max-h-16 max-w-30 object-contain"
              />
            </Link>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
              <Zap className="w-5 h-5 text-red-500" />
            </div>

            <div>
              <p className="font-medium text-sm text-gray-900">
                Instant top-up
              </p>
              <p className="text-xs text-gray-500">Top up in seconds</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-green-500" />
            </div>

            <div>
              <p className="font-medium text-sm text-gray-900">
                Secure payments
              </p>
              <p className="text-xs text-gray-500">Your data is always safe</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
              <Headphones className="w-5 h-5 text-purple-500" />
            </div>

            <div>
              <p className="font-medium text-sm text-gray-900">24/7 Support</p>
              <p className="text-xs text-gray-500">We're here to help</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <ThumbsUp className="w-5 h-5 text-blue-500" />
            </div>

            <div>
              <p className="font-medium text-sm text-gray-900">
                Trusted by millions
              </p>
              <p className="text-xs text-gray-500">Fast, reliable & loved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
