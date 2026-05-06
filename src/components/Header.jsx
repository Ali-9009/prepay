import { NavLink, Link } from "react-router-dom";
import {
  Smartphone,
  Mail,
  CardSim,
  Gamepad2,
  ShoppingBag,
  Music,
  CreditCard,
  CircleUserRound,
  Search,
} from "lucide-react";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import Button from "./Gbtn";

const navLinks = [
  { label: "Mobile Topup", to: "/TopUpMobile", icon: Smartphone },
  { label: "eSim Activation", to: "/TwoStepForm", icon: CardSim },
  { label: "Shopping", to: "/shopping", icon: ShoppingBag },
  { label: "Entertainment", to: "/entertainment", icon: Music },
  { label: "Gaming", to: "/gaming", icon: Gamepad2 },
  { label: "Payment Cards", to: "/payment", icon: CreditCard },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* top bar */}
      <div className="bg-[#111111] text-white  px-10 py-2 text-[13px] font-medium">
        <div className="flex justify-end items-center gap-7 max-w-7xl mx-auto">
          <a
            href="tel:7868842070"
            className="flex items-center text-[11px] gap-2 text-white no-underline hover:opacity-75 transition-opacity"
          >
            <Smartphone size={15} />
            (786) 884-2070
          </a>
          <a
            href="mailto:Support@helloprepay.com"
            className="flex items-center gap-2 text-[11px] text-white no-underline hover:opacity-75 transition-opacity"
          >
            <Mail size={15} />
            Support@helloprepay.com
          </a>
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden">
        <div className="px-4 py-2 flex items-center justify-between ">
          <NavLink to="/" className="shrink-0  ">
            <img src="/images/logo.png" className="w-25" alt="" />
          </NavLink>
          <div className="flex items-center justify-center gap-4">
            <LanguageSelector />
            <Link to="/SignIn">
              <CircleUserRound size={30} />
            </Link>
          </div>
        </div>

        <div className="relative px-4 py-2 w-full">
          <Search
            className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="search"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>

        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 px-4 min-w-max">
            {navLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={idx}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex flex-col items-center py-3 border-b-2 ${isActive ? "border-red-500" : "border-transparent"
                    }`
                  }
                >
                  {/* Render icon only if it exists */}
                  {Icon && <Icon className="w-5 h-5" />}
                  <span className="text-xs mt-1 whitespace-nowrap">
                    {link.label}
                  </span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="bg-[#fcfbfb] border-b border-[#e0e0e0] hidden lg:block">
        <nav className="flex items-center justify-between px-6 h-16 max-w-7xl mx-auto">

          {/* Logo */}
          <NavLink to="/" className="shrink-0">
            <img src="/images/logo.png" className="w-28" alt="logo" />
          </NavLink>

          {/* Right Side */}
          <div className="flex items-center gap-8">

            {/* Menu */}
            <div className="flex items-center gap-6">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={idx}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-semibold ${isActive
                      ? "text-(--primary-color)"
                      : "text-gray-700 hover:text-(--primary-color)"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">

              <LanguageSelector />

              <div className="hidden md:flex items-center gap-3">
                <Button to="SignIn" text="Login Here" />
              </div>
            </div>

          </div>
        </nav>
      </div>

      {/* tab */}
      <div className="hidden md:flex lg:hidden items-center justify-between px-4 h-14 bg-[#fcfbfb] border-b border-[#e0e0e0]">

        {/* Logo */}
        <img src="/images/logo.png" className="w-24" />

        {/* Hamburger */}
        <button onClick={() => setOpen(true)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4 px-6">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-gray-700 text-base font-medium"
            >
              {link.label}
            </NavLink>
          ))}

          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/SignIn"
              className="bg-[#111] text-white rounded-full px-4 py-2 text-sm hover:bg-[#333]"
            >
              Login Here
            </NavLink>

            <LanguageSelector />
          </div>

        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </>
  );
}
