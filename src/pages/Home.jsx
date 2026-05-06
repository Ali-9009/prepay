import { NavLink } from "react-router-dom";
import PopularServices from "../components/PopularServices";
import Button from "../components/Gbtn"
import WhySection from "../components/WhySection";
import Steps from "../components/Steps";
import FAQ from "./Faq"

const serviceCards = [
  {
    icon: "/images/esim.png",
    title: "eSIM Activation's",
    desc: "Got a new device? Check compatibility across every major network and get set up right — no physical SIM card needed.",
    btn: "Activate Now",
    to: "/esim-activations",
  },
  {
    icon: "/images/topup.png",
    title: "Mobile Refills & Topups",
    desc: "Running low on minutes or data? Renew your plan in seconds.Works for your number or someone else's no account required.",
    btn: "Refill Now",
    to: "/mobile-topup",
  },
  {
    icon: "/images/cards.png",
    title: "Payment Cards",
    desc: "Add minutes, texts, or data whenever you need them. Great for keeping backup credit on hand without any commitment.",
    btn: "Top-UP Now",
    to: "/payment-cards",
  },
  {
    icon: "/images/entertainment.png",
    title: "Entertainment & Gaming",
    desc: "Stream, game, and shop without the hassle.Pay for your favorite services and subscriptions from one single place.",
    btn: "Learn More",
    to: "/entertainment",
  },
];

export default function Home() {
  return (
    <>
      <section className="pt-12 px-6 md:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 grid-row-2 items-center justify-center">
          {/* Left Text */}
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#111] leading-tight mb-3">
              Your phone.
              <br />
              <span className="text-(--primary-color)">
                Always ready.
              </span>
            </h1>
            <p className="text-[#111] text-base leading-relaxed mb-8 max-w-md">
              Activate a new device, top up your minutes, or pay
              someone else's bill done in seconds. No account
              required, no waiting on hold.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Button to="/ActivationFlow" text="Activate a Device" />
              <Button to="/mobile-topup" text="Refill / Top-Up" />
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

      <section className="py-12 px-6 md:px-8">
        <div className="text-center mb-10">
          <h2 className="secondary-heading">
            One place for everything prepaid
          </h2>
          <p className="text-[#111] text-sm max-w-xl mx-auto">
            Whether you need a quick refill or a brand-new line, we've got you
            covered no login, no fuss.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow h-full"
            >
              <img src={card.icon} alt={card.title} className="w-30" />
              <h3 className="text-[15px] font-semibold  text-[#111] mb-2 mt-4">
                {card.title}
              </h3>
              <p className="text-[13px] text-[#666] leading-relaxed mb-5 flex-1">
                {card.desc}
              </p>
              <Button to={card.to} text={card.btn} />
            </div>
          ))}
        </div>
      </section>

      <WhySection />

      <section className="py-12 px-6 md:px-8  ">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Text */}
          <div className="flex-1">
            <h2 className="secondary-heading">
              A track record built one
              refill at a time
            </h2>
            <p className="text-[#111] leading-relaxed mb-4">
              Since 2016, we've processed over 500 million recharges for
              customers across the globe. Every month, roughly 300,000 people
              trust us to keep their phones connected — and the phones of the
              people they care about.
            </p>
            <p className="text-[#111] text-sm leading-relaxed">
              We've been doing this long enough to know what matters: speed,
              reliability, and not making things complicated. That's what we've
              focused on from day one.
            </p>

            <Button text="Get Started its free" className="mt-3" />
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

      <Steps />

      <FAQ start={0} end={5} />
    </>
  );
}
