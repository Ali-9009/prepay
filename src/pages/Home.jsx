import { NavLink } from "react-router-dom";
import PopularServices from "../components/PopularServices";


const serviceCards = [
  {
    icon: "/images/esim.png",
    title: "eSIM Activation's",
    desc: "Check your device compatibility across all major networks to find the plan that fits you.",
    btn: "Activate Now",
    to: "/esim-activations",
  },
  {
    icon: "/images/topup.png",
    title: "Mobile Refills & Topups",
    desc: "Renew your prepaid plan instantly no login required.",
    btn: "Refill Now",
    to: "/mobile-topup",
  },
  {
    icon: "/images/cards.png",
    title: "Payment Cards",
    desc: "Add minutes, text or data whenever you need it.",
    btn: "Top-UP Now",
    to: "/payment-cards",
  },
  {
    icon: "/images/entertainment.png",
    title: "Entertainment",
    desc: "Get fast, unlimited home internet. Easy setup no contracts.",
    btn: "Learn More",
    to: "/entertainment",
  },
];


const leftFeatures = [
  "We offer a wide range of carriers.",
  "You can also refill a loved one's phone.",
  "Our website is available 24/7.",
  "Customer service reps are available Monday through Friday.",
  "We accept PayPal, Apple Pay, and major credit/debit cards (Visa, Mastercard, American Express).",
];
const rightFeatures = [
  "Refilling a phone or paying a bill takes just seconds.",
  "We offer a 100 percent, money-back guarantee.",
  "We are trusted by more than 1 million customers.",
  "Our website is SSL-protected we never share your details with third parties.",
  "We've delivered 500 million+ recharges since 2016.",
];


export default function Home() {

  return (
    
    <>

      <section className="pt-12 px-6 md:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-0">
          {/* Left Text */}
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#111] leading-tight mb-3">
              Activate. Top-up & More <span className="text-(--primary-color)">Worldwide Prepaid Store</span>
            </h1>
            <p className="text-[#111] text-base leading-relaxed mb-8 max-w-md">
              Hello Prepay makes prepaid wireless simple. Activation your device,
              refill your plan, or top up minutes instantly no contracts, no
              confusion
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <NavLink
                to="/esim-activations"
                className="bg-[#111] text-white rounded-full px-7 py-3 text-sm  no-underline hover:bg-[#333] transition-colors"
              >
                Activate a Device
              </NavLink>
              <NavLink
                to="/mobile-topup"
                className="bg-[#111] text-white rounded-full px-7 py-3 text-sm  no-underline hover:bg-[#333] transition-colors"
              >
                Refill / Top-Up
              </NavLink>
            </div>
          </div>

          {/* Right Character Image */}
          <div className="pt-8">
            <img
              src="/images/hero-character.png"
              alt="Hello Prepay mascot"
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      <PopularServices />

      <section className="pt-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow h-full"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-30"
              />
              <h3 className="text-[15px] font-semibold  text-[#111] mb-2 mt-4">
                {card.title}
              </h3>
              <p className="text-[13px] text-[#666] leading-relaxed mb-5 flex-1">
                {card.desc}
              </p>
              <NavLink
                to={card.to}
                className="bg-[#111] text-white rounded-full px-5 py-2 text-xs no-underline hover:bg-(--primary-color) transition-colors"
              >
                {card.btn}
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-12 px-6 md:px-8 ">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="secondary-heading">
              Why choose{" "}
              <span className="">Hello Prepay?</span>
            </h2>
            <p className="text-[#111] text-sm max-w-xl mx-auto">
              Fast, secure, and trusted by millions. Discover what makes Hello
              Prepay your best choice.
            </p>
          </div>

          {/* 3-col layout: features | image | features */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Features */}
            <div className="flex-1 flex flex-col gap-3">
              {leftFeatures.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-[#fafafa] rounded-xl px-4 py-3 border border-[#f0f0f0] shadow-xl"
                >
                  <img src="/images/circle-vector.png" className="text-(--primary-color) shrink-0 mt-1 w-2" />
                  <span className="text-[13px] text-[#111] leading-snug">{f}</span>
                </div>
              ))}
            </div>

            {/* Center Character */}
            <div className="shrink-0">
              <img
                src="/images/why-choose-character.png"
                alt="Why choose mascot"
                className="w-48 md:w-55 drop-shadow-lg"
              />
            </div>

            {/* Right Features */}
            <div className="flex-1 flex flex-col gap-3">
              {rightFeatures.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-[#fafafa] rounded-xl px-4 py-3 border border-[#f0f0f0] shadow-xl"
                >
                  <img src="/images/circle-vector.png" className="text-(--primary-color) shrink-0 mt-1 w-2" />
                  <span className="text-[13px] text-[#111] leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 mt-16 px-6 md:px-8 bg-[#fafafa] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="secondary-heading">
            HelloPrepay keeps the{" "}
            <span className="">world connected</span>
          </h2>
          <p className="text-[#111] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Around 300,000 people worldwide send more than $10 million in retail
            credit with helloprepay every month, making us the No.1 service for
            refilling phones.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 md:px-8  ">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Text */}
          <div className="flex-1">
            <h2 className="secondary-heading">
              Features that{" "}
              <span className="">power growth</span>
            </h2>
            <p className="text-[#111] leading-relaxed mb-4">
              Refilling a cell phone through helloprepay is easier than ever. You
              can recharge your or someone else's wireless phone without wasting
              time on other websites that slow down the refilling process. You can
              also make payments for other services with a few clicks of a button
              or a swipe of a finger. We are always here for you!
            </p>
            <p className="text-[#111] text-sm leading-relaxed">
              helloprepay looks after your financial details and never shares
              sensitive information with third parties.
            </p>
          </div>

          {/* Right Character */}
          <div className="shrink-0">
            <img
              src="/images/features-show-character.png"
              alt="Features show mascot"
              className="w-76 md:w-72 drop-shadow-xl"
            />
          </div>
        </div>
      </section>  

    </>
  );
}