import {
  Smartphone,
  ShoppingBag,
  Tv,
  Gamepad2,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { usCarriers } from "../data/carriers";
import { Link } from "react-router-dom";
import Button from "../components/Gbtn"

export default function Hero() {
  return (
    <div className="p-4 rounded-[28px] w-full max-w-7xl mx-auto">
      {/* Top */}
      <div className="bg-linear-to-r from-[#f16b6b] to-[#f7f7ff] rounded-xl p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="w-full text-white lg:w-auto text-center lg:text-left">
            <h1 className="font-bold text-2xl leading-tight">
              Top-Up. Shop. Stream.
              <br />
              All in one place.
            </h1>

            <p className="text-xs mt-2">
              Fast. Secure. Reliable.
            </p>
            <Button text="Top-up Now" className="mt-4" />
          </div>

          {/* Center */}
          <div className="flex-1 w-full max-w-4xl">
            <input
              placeholder="Search for carriers or brands..."
              className="w-full h-12 rounded-full px-5 text-sm bg-white border border-gray-200 outline-none"
            />

            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap lg:flex-nowrap">
              {[
                "All",
                "Mobile Top-up",
                "Shopping",
                "Entertainment",
                "Gaming",
                "Payment Cards",
              ].map((item) => (
                <button
                  key={item}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap ${
                    item === "All"
                      ? "bg-(--primary-color) text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {item === "Mobile Top-up" && <Smartphone size={14} />}
                  {item === "Shopping" && <ShoppingBag size={14} />}
                  {item === "Entertainment" && <Tv size={14} />}
                  {item === "Gaming" && <Gamepad2 size={14} />}
                  {item === "Payment Cards" && <CreditCard size={14} />}
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="shrink-0">
            <img src="/images/banner.png" alt="" className="w-50 h-auto" />
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 mt-4">
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Top Brands</h2>

            <div className="flex items-center gap-2">
              <button className="brands-prev w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <ChevronLeft size={16} />
              </button>

              <button className="brands-next w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".brands-prev",
              nextEl: ".brands-next",
            }}
            spaceBetween={12}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {usCarriers.map((carrier) => (
              <SwiperSlide key={carrier.name}>
                <Link to={carrier.link} state={{ carrier }}>
                  <img
                    src={carrier.logo}
                    alt={carrier.name}
                    className="w-40 hover:scale-105 transition"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="lg:col-span-3">
          <div className="h-full rounded-xl bg-linear-to-r from-[#ede7ff] to-[#f7f7ff] p-5 flex flex-col justify-center">
            <div>
              <h3 className="text-2xl font-bold mt-2">Amazon</h3>

              <p className="text-sm text-gray-600 mt-2">
                Shop millions of products with Amazon Gift Cards.
              </p>
            </div>

            <Button className="mt-4" text="Buy Now"/>
          </div>
        </div>
      </div>

      {/* Lower Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {/* Trending Gifts */}
        <div className="border border-gray-200 shadow rounded-xl p-4">
          <h3 className="font-semibold mb-4">Trending Gifts</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              "Target",
              "Walmart",
              "Netflix",
              "Uber",
              "Starbucks",
              "DoorDash",
            ].map((item) => (
              <div key={item} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl mx-auto " />
                <p className="text-[10px] sm:text-[11px] mt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Categories */}
        <div className="border border-gray-200 shadow rounded-xl p-4">
          <h3 className="font-semibold mb-4">Popular Categories</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              "Mobile",
              "Streaming",
              "Gaming",
              "Shopping",
              "Food",
              "Travel",
            ].map((item) => (
              <div key={item} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl mx-auto" />
                <p className="text-[10px] sm:text-[11px] mt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Streaming */}
        <div className="border border-gray-200 shadow rounded-xl p-4">
          <h3 className="font-semibold mb-4">Streaming & Entertainment</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {["Hulu", "HBO", "Disney", "Spotify", "YouTube", "Prime"].map(
              (item) => (
                <div key={item} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl mx-auto" />
                  <p className="text-[10px] sm:text-[11px] mt-1">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {/* Top Game Cards */}
        <div className="border border-gray-200 shadow rounded-xl p-4">
          <h3 className="font-semibold mb-4">Top Game Cards</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {["PS", "Xbox", "Nintendo", "Roblox", "Steam", "Google"].map(
              (item) => (
                <div
                  key={item}
                  className="text-center flex flex-col items-center"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl" />
                  <p className="text-[10px] sm:text-[11px] mt-1">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Payments Cards */}
        <div className="border border-gray-200 shadow rounded-xl p-4">
          <h3 className="font-semibold mb-4">Payments Cards</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {[
              "Visa",
              "Mastercard",
              "PayPal",
              "Apple Pay",
              "Amex",
              "Gift Cards",
            ].map((item) => (
              <div
                key={item}
                className="text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl" />
                <p className="text-[10px] sm:text-[11px] mt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Card */}
        <div className="bg-(--primary-color) text-white rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold">Give more. Get more.</h2>

            <p className="text-sm opacity-80 mt-2">
              Explore eGift cards for every celebration.
            </p>
            <Button text="Explore Now" className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
