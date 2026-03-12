import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  // ── Footer Links ──
  const quickLinks = [
    "Privacy Policy",
    "Refunds",
    "Terms / Conditions",
    "DMCA",
    "Unsubscribe Autopay",
  ];
  const resources = [
    { name: "Why Choose", path: "/" },
    { name: "How it work", path: "/how-its-work" },
    { name: "Home Internet", path: "/" },
    { name: "FAQ", path: "/faq" },
    { name: "Store Locater", path: "/StoreLocator" },
    { name: "Contact Us", path: "/Contact" },
  ];

  
  return (
    <footer className="bg-white border-t border-[#eee]  ">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pt-12 pb-6 px-6 md:px-20">
        {/* Col 1 - Logo + Description */}
        <div>
          {/* Logo */}
          <div className=" mb-4">
            <img src="/images/logo.png" alt="" />
          </div>
          <p className="text-[#111] text-xs leading-relaxed mb-5">
            Helloprepay offers the safest, simplest, fastest and most convenient
            mobile top up service for all major international wireless carriers.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-white p-1 rounded-sm bg-black hover:text-black hover:bg-white hover:shadow-sm transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="text-white p-1 rounded-sm bg-black hover:text-black hover:bg-white hover:shadow-sm transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-white p-1 rounded-sm bg-black hover:text-black hover:bg-white hover:shadow-sm transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Col 2 - Quick Links */}
        <div className="pl-10">
          <h4 className="text-(--primary-color) font-bold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-1">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#111] text-sm hover:text-(--primary-color) transition-colors no-underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 - Resources */}
        <div className="pl-10">
          <h4 className="text-(--primary-color) font-bold  mb-4">Resources</h4>
          <ul className="flex flex-col gap-1">
            {resources.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-[#111] text-sm hover:text-(--primary-color) transition-colors no-underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 - Contact Us */}
        <div>
          <h4 className="text-(--primary-color) font-bold  mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3">
            <a
              href="tel:7868842070"
              className="flex items-center gap-2 text-[#111] text-sm no-underline hover:text-(--primary-color) transition-colors"
            >
              <Phone size={16} className="text-(--primary-color) shrink-0" />
              (786) 884-2070
            </a>
            <a
              href="mailto:Support@helloprepay.com"
              className="flex items-center gap-2 text-[#111] text-sm no-underline hover:text-(--primary-color) transition-colors"
            >
              <Mail size={16} className="text-(--primary-color) shrink-0" />
              Support@helloprepay.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#eee] py-3 text-center bg-black">
        <p className="text-white text-xs ">
          © 2025 – Hello Prepay. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
