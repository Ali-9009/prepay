import { NavLink, Link } from "react-router-dom";
import {
  Smartphone,
  Mail,
  CardSim,
  CreditCard,
  CircleUserRound,
  Search,
  Menu,
  X,
  FileText,
  ShieldCheck,
  ScrollText,
} from "lucide-react";
import {
  LockKeyhole,
  FileSignature,
  WalletCards,
  Copyright,
  BellOff,
} from "lucide-react";
import { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import Button from "./Gbtn";

const navLinks = [
  { label: "Mobile Topup", to: "/TopUpMobile", icon: Smartphone },
  { label: "eSim Activation", to: "/ActivationFlow", icon: CardSim },
  { label: "Virtual Gift Cards", to: "/gift-cards", icon: CreditCard },
];

const policyLinks = [
  { label: "Privacy Policy", to: "/PrivacyPolicy", icon: LockKeyhole, },
  {
    label: "Terms & Conditions",
    to: "/TermsConditions",
    icon: FileSignature,
  },
  {
    label: "Refund Policy",
    to: "/RefundPolicy",
    icon: WalletCards,
  },
  {
    label: "DMCA",
    to: "/DMCA",
    icon: Copyright,
  },
  {
    label: "Unsubscribe",
    to: "/Unsubscribe",
    icon: BellOff,
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerGlass = scrolled
    ? "bg-white/75 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/40"
    : "bg-[#fcfbfb] border-b border-[#e0e0e0]";

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden bg-[#111111] text-white px-4 md:px-10 py-2 text-[13px] font-medium">
        <div className="flex justify-center md:justify-end items-center gap-5 md:gap-7 max-w-7xl mx-auto">
          <a
            href="tel:7868842070"
            className="flex items-center text-[11px] gap-2 text-white no-underline hover:opacity-75 transition-opacity"
          >
            <Smartphone size={15} />
            (786) 884-2070
          </a>

          <a
            href="mailto:Support@helloprepay.com"
            className="hidden sm:flex items-center gap-2 text-[11px] text-white no-underline hover:opacity-75 transition-opacity"
          >
            <Mail size={15} />
            Support@helloprepay.com
          </a>
        </div>
      </div>

      {/* Mobile Header */}
      <div
        className={`sticky top-0 z-30 md:hidden transition-all duration-300 ${headerGlass}`}
      >
        <div className="px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="shrink-0">
            <img src="/images/logo.png" className="w-25" alt="logo" />
          </NavLink>

          <div className="flex items-center justify-center gap-3">
            <LanguageSelector />

            <button
              onClick={() => setOpen(true)}
              className="w-10 h-10 rounded-full bg-white/80 border border-gray-200 shadow-sm flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        <div className="relative px-4 pb-3 w-full">


          <input
            type="search"
            placeholder="Search..."
            className="w-full bg-white/85 backdrop-blur-md border border-gray-200 rounded-full shadow-md shadow-gray-200/70 pl-4 pr-3 py-2 text-sm outline-none focus:border-(--primary-color)"
          />
        </div>

        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-3 px-4 min-w-max pb-4">
            {navLinks.map((link, idx) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={idx}
                  to={link.to}
                  className={({ isActive }) =>
                    `group flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 whitespace-nowrap ${isActive
                      ? "bg-(--primary-color) text-white border-transparent shadow-lg shadow-gray-200"
                      : "bg-white/90 text-gray-700 border-gray-200 shadow-md shadow-gray-200 hover:border-(--primary-color)"
                    }`
                  }
                >
                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm font-medium">{link.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div
        className={`sticky top-0 z-30 hidden lg:block transition-all duration-300 ${headerGlass}`}
      >
        <nav className="flex items-center justify-between px-6 h-16 max-w-7xl mx-auto">
          <NavLink to="/" className="shrink-0">
            <img src="/images/logo.png" className="w-28" alt="logo" />
          </NavLink>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={idx}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors ${isActive
                      ? "text-(--primary-color)"
                      : "text-gray-700 hover:text-(--primary-color)"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <LanguageSelector />
              {/* <Button to="SignIn" text="Login Here" /> */}

              <button
                onClick={() => setOpen(true)}
                className="w-10 h-10 rounded-full bg-white/80 border-2 border-red-600 shadow-sm flex items-center justify-center hover:shadow-md transition-all"
                aria-label="Open policies menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Tablet Header */}
      <div
        className={`sticky top-0 z-30 hidden md:flex lg:hidden items-center justify-between px-4 h-14 transition-all duration-300 ${headerGlass}`}
      >
        <NavLink to="/">
          <img src="/images/logo.png" className="w-24" alt="logo" />
        </NavLink>

        <div className="flex items-center gap-3">
          <LanguageSelector />

          <button
            onClick={() => setOpen(true)}
            className="w-10 h-10 rounded-full bg-white/80 border border-gray-200 shadow-sm flex items-center justify-center"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />

      {/* Hamburger Sidebar - Policies Only + Login */}
      <aside
        className={`fixed top-0 right-0 h-full w-[82%] max-w-[330px] bg-white/85 backdrop-blur-2xl shadow-2xl shadow-black/20 border-l border-white/50 transform transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-200/70">
          <img src="/images/logo.png" className="w-24" alt="logo" />

          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-5 py-6">
          <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-4">
            Policies
          </p>

          <div className="flex flex-col gap-3">
            {policyLinks.map((link, idx) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={idx}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${isActive
                      ? "bg-(--primary-color) text-white shadow-lg shadow-gray-300"
                      : "bg-white/80 text-gray-700 border border-gray-100 hover:border-(--primary-color) hover:text-(--primary-color)"
                    }`
                  }
                >
                  <Icon size={18} />
                  {link.label}
                </NavLink>
              );
            })}
          </div>

          <div className="mt-7 pt-6 border-t border-gray-200/70">
            <Link
              to="/SignIn"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#111] text-white rounded-full px-5 py-3 text-sm font-semibold hover:bg-[#333] transition"
            >
              <CircleUserRound size={20} />
              Login Here
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}