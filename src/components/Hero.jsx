import {
  Smartphone,
  ShoppingBag,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Utensils,
  Plane,
  Zap,
  Globe,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { usCarriers } from "../data/carriers";
import { Link } from "react-router-dom";
import Button from "../components/Gbtn";

const categories = [
  { name: "Mobile", icon: Smartphone, color: "bg-rose-50 text-rose-500" },
  { name: "Streaming", icon: Clapperboard, color: "bg-purple-50 text-purple-500" },
  { name: "Gaming", icon: Gamepad2, color: "bg-blue-50 text-blue-500" },
  { name: "Shopping", icon: ShoppingBag, color: "bg-amber-50 text-amber-500" },
  { name: "Food", icon: Utensils, color: "bg-green-50 text-green-500" },
  { name: "Travel", icon: Plane, color: "bg-sky-50 text-sky-500" },
];

const streamingApps = [
  { name: "Hulu", img: "/icons/hulu.webp" },
  { name: "HBO", img: "/icons/hbo.webp" },
  { name: "Disney", img: "/icons/disney.webp" },
  { name: "Spotify", img: "/icons/spotify.webp" },
  { name: "YouTube", img: "/icons/youtube.webp" },
  { name: "Prime", img: "/icons/prime.webp" },
];

const gameCards = [
  { name: "PS", img: "/icons/ps5.webp" },
  { name: "Xbox", img: "/icons/xbox.webp" },
  { name: "Nintendo", img: "/icons/nintendo.webp" },
  { name: "Roblox", img: "/icons/roblox.webp" },
  { name: "Steam", img: "/icons/steam.webp" },
  { name: "Google", img: "/icons/google.webp" },
];

const paymentCards = [
  { name: "Visa", img: "/icons/visa.webp" },
  { name: "Mastercard", img: "/icons/mastercard.webp" },
  { name: "PayPal", img: "/icons/paypal.webp" },
  { name: "Apple Pay", img: "/icons/applepay.webp" },
  { name: "Amex", img: "/icons/amex.webp" },
  { name: "Gift Cards", img: "/icons/google.webp" },
];

const trendingGifts = [
  { name: "Target", img: "/icons/target.webp" },
  { name: "Walmart", img: "/icons/walmart.webp" },
  { name: "Netflix", img: "/icons/netflix.webp" },
  { name: "Uber", img: "/icons/uber.webp" },
  { name: "Starbucks", img: "/icons/starbucks.webp" },
  { name: "DoorDash", img: "/icons/doordash.webp" },
];

function SectionCard({ title, children }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
        <button className="text-xs font-medium text-(--primary-color) hover:underline flex items-center gap-1 group">
          View All
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
      {children}
    </div>
  );
}

function IconGrid({ items, renderItem }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
      {items.map((item) => renderItem(item))}
    </div>
  );
}

export default function Hero() {
  return (
    <div className="px-4 py-6 w-full max-w-7xl mx-auto space-y-5">

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-visible rounded-3xl bg-linear-to-br from-[#f16b6b] via-[#f88a6a] to-[#fdc97e] p-6 md:p-10 lg:mt-12">
        <div className="relative flex flex-col lg:flex-row items-center gap-8">

          {/* Left copy */}
          <div className="flex-1 text-white text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
              Stay Connected <br />
              <span className="text-white/80">Anywhere with</span> eSIM.
            </h1>

            <p className="text-sm text-white/70 mt-2 mb-5">
              Scan. Activate. Go no physical SIM needed.
            </p>

            <Button
              to="/ActivationFlow"
              text="Get Started"
              className="shadow-lg shadow-black/20"
            />
          </div>
        </div>

        {/* Character */}
        <img
          src="/images/hero-img.png"
          alt="eSIM banner"
          className="
      hidden lg:block
      absolute
      right-10
      bottom-0
      w-50
      drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]
    "
        />
      </div>

      {/* ── BRANDS + PROMO ── */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">

        {/* Brands slider */}
        <div className="lg:col-span-7 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Top Brands</h2>
            <div className="flex items-center gap-3">
              <button className="text-sm font-medium text-(--primary-color) hover:underline flex items-center gap-1 group">
                View All
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <div className="flex items-center gap-1.5">
                <button className="brands-prev w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition">
                  <ChevronLeft size={15} />
                </button>
                <button className="brands-next w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition">
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".brands-prev", nextEl: ".brands-next" }}
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
                <div className="flex flex-col items-center border border-gray-100 rounded-xl p-3 hover:border-[var(--primary-color)]/30 hover:shadow-md transition-all duration-200 group cursor-pointer">
                  <Link to={carrier.link} state={{ carrier }}>
                    <img
                      src={carrier.logo}
                      alt={carrier.name}
                      className="w-full max-w-[120px] h-auto object-contain group-hover:scale-105 transition-transform duration-200"
                    />
                  </Link>
                  <Link to={carrier.link} state={{ carrier }}>
                    <Button text="Shop Now" className="mt-2 py-1.5! text-xs!" />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Promo CTA */}
        <div className="lg:col-span-3 rounded-xl shadow-md border border-gray-200">
          <img src="images/hero-banner.png" alt="" />
        </div>
      </div>

      {/* ── ROW 1 ── Gift Cards · Categories · Streaming ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Gift Cards promo */}
        <div className="rounded-xl shadow-md border border-gray-200">
          <img src="images/hero-banner-2.png" alt="" />
        </div>

        {/* Popular Categories */}
        <SectionCard title="Popular Categories">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {categories.map(({ name, icon: Icon, color }) => (
              <button
                key={name}
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color} group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{name}</p>
              </button>
            ))}
          </div>
        </SectionCard>

        {/* Streaming */}
        <SectionCard title="Streaming & Entertainment">
          <IconGrid
            items={streamingApps}
            renderItem={(item) => (
              <div key={item.name} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-11 h-11 rounded-xl overflow-hidden bg-gray-50 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{item.name}</p>
              </div>
            )}
          />
        </SectionCard>
      </div>

      {/* ── ROW 2 ── Gaming · Payments · Trending ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <SectionCard title="Top Game Cards">
          <IconGrid
            items={gameCards}
            renderItem={(item) => (
              <div key={item.name} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-11 h-11 rounded-xl overflow-hidden bg-gray-50 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{item.name}</p>
              </div>
            )}
          />
        </SectionCard>

        <SectionCard title="Payment Cards">
          <IconGrid
            items={paymentCards}
            renderItem={(item) => (
              <div key={item.name} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-11 h-11 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm">
                  <img src={item.img} alt={item.name} className="w-full h-full object-contain p-1" />
                </div>
                <p className="text-[10px] font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{item.name}</p>
              </div>
            )}
          />
        </SectionCard>

        <SectionCard title="Trending Gifts">
          <IconGrid
            items={trendingGifts}
            renderItem={(item) => (
              <div key={item.name} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-11 h-11 rounded-xl overflow-hidden bg-gray-50 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{item.name}</p>
              </div>
            )}
          />
        </SectionCard>
      </div>

    </div>
  );
}
