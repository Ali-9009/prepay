import { NavLink } from "react-router-dom";
import {
  Smartphone,
  User,
  CreditCard,
  Headphones,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

  const menuItems = [
    { name: "My Line", icon: <Smartphone size={20} />, path: "/dashboard/myline" },
    { name: "My Profile", icon: <User size={20} />, path: "/dashboard/profile" },
    { name: "Billing", icon: <CreditCard size={20} />, path: "/dashboard/billing" },
    { name: "Customer Service", icon: <Headphones size={20} />, path: "/dashboard/helpcenter" },
    { name: "My Referrals", icon: <Users size={20} />, path: "/dashboard/referral" },
  ];

  const linkClass =
    "w-full py-2 px-3 rounded-full flex items-center gap-2 text-sm";

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      {/* Hamburger (mobile + tablet only) */}
      <div className="lg:hidden fixed md:top-48 top-55 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white p-2 rounded-full shadow-md"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/30 z-40 lg:hidden"></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`
    fixed top-0 left-0 h-full bg-[#fbfbfb] rounded-xl p-6 shadow-md
    w-64 transform transition-transform duration-300 z-50
    ${open ? "translate-x-0" : "-translate-x-full"}
    
    /* Desktop FIX */
    lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:translate-x-0 lg:block lg:shadow-none
    
    overflow-auto
  `}
      >
        {/* PROFILE */}
        <div className="flex items-center gap-3 mb-6 border border-red-500 rounded-full p-1">
          <div className="w-12 h-12 text-3xl rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
            C
          </div>
          <div>
            <p className="text-sm font-semibold">Carlos Fonte</p>
            <p className="text-xs text-gray-500">example@gmail.com</p>
          </div>
        </div>

        {/* MENU */}
        <div className="space-y-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${linkClass} ${isActive
                  ? "bg-red-500 text-white"
                  : "hover:bg-gray-100 text-gray-700"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}

          <button className="flex items-center gap-2 text-red-500 pt-4">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}