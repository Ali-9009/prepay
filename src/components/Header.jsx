import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Smartphone, Mail, Menu, X, ChevronDown, Globe } from "lucide-react";

const navLinks = [
  { label: "eSim Activation's", to: "/NavPage" },
  { label: "Mobile Top-up", to: "/mobile-topup" },
  { label: "Entertainment", to: "/entertainment" },
  { label: "Gaming", to: "/gaming" },
  { label: "Payment Cards", to: "/payment-cards" },
  { label: "Shopping", to: "/shopping" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="bg-[#111111] text-white  px-10 py-2 text-[13px] font-medium md:block hidden">
        <div className="flex justify-end items-center gap-7 max-w-7xl mx-auto">
            <a
          href="tel:7868842070"
          className="flex items-center gap-2 text-white no-underline hover:opacity-75 transition-opacity"
        >
          <Smartphone size={15} />
          (786) 884-2070
        </a>
        <a
          href="mailto:Support@helloprepay.com"
          className="flex items-center gap-2 text-white no-underline hover:opacity-75 transition-opacity"
        >
          <Mail size={15} />
          Support@helloprepay.com
        </a>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <div className="bg-[#f5f5f5] border-b border-[#e0e0e0]">
      <nav className=" flex items-center justify-between px-6 h-18 gap-6 sticky top-0 z-50 max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="shrink-0  ">
          <img src="/images/logo.png" className="w-30" alt="" />
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 ">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold px-3 xl:px-4 py-2 rounded-md transition-all whitespace-nowrap no-underline ${
                  isActive
                    ? "text-(--primary-color)"
                    : "text-[#222] hover:bg-[#e8e8e8] hover:text-[#111]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Right Controls */}
        <div className="hidden lg:flex items-center gap-3 ">
          <NavLink
            to="/login"
            className="bg-[#111] text-white rounded-full px-4 py-2 text-sm no-underline hover:bg-[#333] transition-colors "
          >
            Login Here
          </NavLink>

          <button className="hidden items-center gap-2 border-2 border-(--primary-color) rounded-full px-4 py-2 bg-transparent cursor-pointer text-[13px] font-semibold text-[#222] hover:bg-[#ffeaea] transition-colors">
            <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="10" cy="10" r="10" fill="#B22234" />
                <rect y="7.5" width="20" height="2" fill="#fff" />
                <rect y="11.5" width="20" height="2" fill="#fff" />
                <rect y="3.5" width="20" height="2" fill="#fff" />
                <rect y="15.5" width="20" height="2" fill="#fff" />
                <rect x="0" y="0" width="8" height="11" fill="#3C3B6E" />
              </svg>
            </div>
            Eng
            <ChevronDown size={14} className="text-[#e02020]" />
          </button>
        </div>

        {/* Hamburger - Mobile/Tablet only */}
        <button
          className="lg:hidden ml-auto p-1.5 text-[#111] bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </nav>
      </div>

      {/* ── OVERLAY ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black z-1100 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-45 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── RIGHT SLIDE DRAWER ── */}
      <div
        className={`fixed top-0 right-0 h-full w-70 bg-white z-1200 flex flex-col shadow-2xl transition-transform duration-350 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#eee] bg-[#f5f5f5]">
          <div className="leading-none">
            <img src="/images/logo.png" alt="Hello Prepay Logo" className="w-22" />
          </div>
          <button
            className="bg-transparent border-none cursor-pointer text-[#333] p-1"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col flex-1 overflow-y-auto py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `no-underline text-[15px] font-semibold px-6 py-4 border-b border-[#f0f0f0] transition-colors ${
                  isActive
                    ? "text-[#e02020] bg-[#fff5f5]"
                    : "text-[#222] hover:bg-[#ffeaea] hover:text-[#e02020]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="px-6 py-5 border-t border-[#eee] flex flex-col gap-3">
          <NavLink
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-[#111] text-white rounded-full py-3 text-sm font-bold no-underline hover:bg-[#333] transition-colors"
          >
            Login Here
          </NavLink>
          <button className="flex items-center justify-center gap-2 border-2 border-[#e02020] rounded-full py-2.5 bg-transparent cursor-pointer text-[13px] font-semibold text-[#222] w-full hover:bg-[#ffeaea] transition-colors">
            <Globe size={16} className="text-[#e02020]" />
            Eng
            <ChevronDown size={14} className="text-[#e02020]" />
          </button>
        </div>
      </div>
    </>
  );
}