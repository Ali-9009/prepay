import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import { Globe, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const resources = [
    { name: "Why Choose", path: "/WhySection" },
    { name: "How it work", path: "/how-its-work" },
    { name: "Store Locator", path: "/StoreLocator" },
    // { name: "Start Activation journey", path: "/StartActivation/purchase" },
    { name: "P-SIM", path: "/purchasePsim" },
    { name: "E-SIM", path: "/purchaseEsim" },
    { name: "Port-In", path: "/purchasePort" },
    { name: "Port-In-PSim", path: "/purchasePortIn" },
    { name: "FAQ", path: "/Faq" },
    { name: "Contact Us", path: "/Contact" },
  ];

  const Terms = [
    { name: "Privacy Policy", path: "/PrivacyPolicy" },
    { name: "Refunds", path: "/RefundPolicy" },
    { name: "Terms / Conditions", path: "/TermsConditions" },
    { name: "DMCA", path: "/DMCA" },
    { name: "Unsubscribe Autopay", path: "/Unsubscribe" },
  ];

  return (
    <footer className="relative bg-linear-to-b from-white via-gray-50 to-white border-t border-gray-200 mt-8">
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Hello Prepay"
                className="h-12 w-auto mb-6"
              />
            </Link>

            <p className="text-gray-500 text-sm leading-7">
              Send airtime to loved ones in seconds. Secure payments, instant
              delivery, and global coverage make Hello Prepay the smarter way to
              stay connected worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="
                w-11 h-11
                rounded-xl
                bg-white
                border border-gray-200
                shadow-sm
                flex items-center justify-center
                text-gray-600
                hover:bg-(--primary-color)
                hover:text-white
                hover:border-(--primary-color)
                hover:-translate-y-1
                transition-all duration-300
              "
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 relative inline-block">
              About
              <span className="absolute left-0 -bottom-2 w-10 h-1 bg-(--primary-color) rounded-full"></span>
            </h4>

            <ul className="space-y-4 mt-6">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="
                  text-gray-500
                  text-sm
                  no-underline
                  hover:text-gray-900
                  hover:translate-x-1
                  inline-flex
                  items-center
                  gap-1
                  transition-all
                "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 relative inline-block">
              Terms & Policies
              <span className="absolute left-0 -bottom-2 w-10 h-1 bg-(--primary-color) rounded-full"></span>
            </h4>

            <ul className="space-y-4 mt-6">
              {Terms.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="
                  text-gray-500
                  text-sm
                  no-underline
                  hover:text-gray-900
                  hover:translate-x-1
                  inline-flex
                  items-center
                  gap-1
                  transition-all
                "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 relative inline-block">
              Contact Us
              <span className="absolute left-0 -bottom-2 w-10 h-1 bg-(--primary-color) rounded-full"></span>
            </h4>

            <div className="space-y-4 mt-6">
              {/* Phone Card */}
              <a
                href="tel:7868842070"
                className="
      flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-(--primary-color)/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-(--primary-color)" />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <p className="text-sm text-gray-900 font-medium">
                    (786) 884-2070
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:Support@helloprepay.com"
                className="
      flex items-center gap-4
      "
              >
                <div className="w-10 h-10 rounded-full bg-(--primary-color)/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-(--primary-color)" />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Email Support</p>
                  <p className="text-sm text-gray-900 font-medium">
                    Support@helloprepay.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 bg-white/70 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Hello Prepay. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Globe size={14} className="text-(--primary-color)" />
                Worldwide Service
              </span>

              <span className="flex items-center gap-1">
                <Zap size={14} className="text-(--primary-color)" />
                Instant Delivery
              </span>

              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-(--primary-color)" />
                Secure Payments
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
