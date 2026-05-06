import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Popup from "../components/Popup"; // make sure this exists
import Breadcrumbs from "../components/Breadcrumbs"; // <-- import
import ChatWidget from "../components/ChatWidget";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const hideLayoutPaths = [
    "/purchasePsim",
    "/psimLayout",
    "/eSimLayout",
    "/purchaseEsim",
    "/purchasePort",
    "/portInLayout",

    "/purchasePortIn",
    "/portInPSimLayout",

  ];

  const hideLayout = hideLayoutPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  useEffect(() => {
    if (import.meta.env.DEV) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // List of paths where breadcrumbs should appear
  const breadcrumbPaths = [
    "/StartActivation/purchase",
    "/StartActivation/stepperform",
    "/:category",
    "/ActivateStep",
    "/TopUpMobile",
    "/InternationalTopUp",
    "/Checkout",
    "/dashboard/myline",
    "/dashboard/profile",
    "/dashboard/billing",
    "/dashboard/referral",
    "/dashboard/helpcenter",
  ];

  // Only show breadcrumbs for paths listed explicitly
  const showBreadcrumbs = breadcrumbPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!hideLayout && <Header />}
      <ScrollRestoration />

      {/* Popup */}
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <main className="">
        {/* Show breadcrumbs only on selected pages */}
        {showBreadcrumbs && <Breadcrumbs />}

        <Outlet />
        <ChatWidget />
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}