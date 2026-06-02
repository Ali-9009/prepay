import { useNavigate, Link } from "react-router-dom";
import { Shield, Zap, Globe } from "lucide-react";
import {
  RadioTower,
  ShieldCheck,
  Headphones,
  ThumbsUp,
  ChevronRight,
} from "lucide-react";
import { MapPin, ChevronDown } from "lucide-react";
import CountrySelect from "../../components/CountrySelect";

export default function TopUpLayout({
  image,
  carriers,
  extraComponent,
}) {
  const navigate = useNavigate();
  

  return (
    <>
      {/* DESKTOP */}
      <section className="py-16 hidden md:flex">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-bold tracking-tight">
              Mobile <span className="text-red-500">top-up</span>
            </h1>

            <p className="text-gray-500 text-lg mt-4">
              Keep them close, no matter the distance
            </p>

            {/* Red line */}
            <div className="w-14 h-1 bg-red-500 rounded-full mt-6"></div>

            {/* Card */}
            <div className="mt-8 bg-white rounded-[28px] shadow-lg border border-gray-100 p-6 max-w-xl">
              {/* Label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>

                <span className="font-semibold text-xl text-gray-800">
                  Country of use
                </span>
              </div>

              {/* Custom Select */}
              <div className="relative">
                <CountrySelect />
              </div>

              {/* Features */}
              <div className="mt-6 bg-red-50 rounded-2xl px-3 py-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={22}
                      className="text-red-500 shrink-0 mt-1"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">Secure</h4>
                      <p className="text-xs text-gray-500">Safe transactions</p>
                    </div>
                  </div>

                  <div className="border-x border-red-200 px-1 flex items-start gap-2">
                    <Zap size={22} className="text-red-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Instant</h4>
                      <p className="text-xs text-gray-500">Top up in seconds</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe size={22} className="text-red-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Global</h4>
                      <p className="text-xs text-gray-500">200+ countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end">
            <img src={image} alt="hero" className="max-w-md drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <div className="max-w-sm mx-auto px-4 py-8 block md:hidden">

        <h1 className="text-2xl font-semibold pb-6 text-center">US and international</h1>

        <div className="flex justify-center gap-10 mb-6">
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
              Refill
            </h2>
          </div>
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
