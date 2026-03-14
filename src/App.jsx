import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import "./App.css";
import How_its_work from "./pages/How-its-work";
import StoreLocations from "./pages/StoreLocator";
import FAQ from "./pages/Faq";
import Contact from "./pages/Contact";
import NavPage from "./pages/NavPage";
import DetailPage from "./pages/DetailPage";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import RefundPolicy from "./pages/policies/RefundPolicy";
import TermsConditions from "./pages/policies/TermsConditions";
import DMCA from "./pages/policies/DMCA";
import SignIn from "./pages/auth/SignIn";
import ActivateFlow from "./pages/Activation/ActivationFlow";
import TopUpMobile from "./pages/TopUp/TopUpMobile";
import ActivateStep from "./pages/TopUp/ActivateStep";
import MyLine from "./pages/dashboard/MyLine";
import Profile from "./pages/dashboard/Profile";
import Billing from "./pages/dashboard/Billing";
import Referral from "./pages/dashboard/Referral";
import HelpCenter from "./pages/dashboard/HelpCenter";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/How-its-work", element: <How_its_work /> },
      { path: "/StoreLocator", element: <StoreLocations /> },
      { path: "/Faq", element: <FAQ /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/:category", element: <NavPage /> },
      { path: "/DetailPage", element: <DetailPage /> },
      { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
      { path: "/RefundPolicy", element: <RefundPolicy /> },
      { path: "/TermsConditions", element: <TermsConditions /> },
      { path: "/DMCA", element: <DMCA /> },
      { path: "/SignIn", element: <SignIn /> },
      { path: "/ActivateFlow", element: <ActivateFlow /> },
      { path: "/TopUpMobile", element: <TopUpMobile /> },
      { path: "/ActivateStep", element: <ActivateStep /> },
      {
        path: "/dashboard/myline",
        element: <MyLine />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/billing",
        element: <Billing />,
      },
      {
        path: "/dashboard/referral",
        element: <Referral />,
      },
      {
        path: "/dashboard/helpcenter",
        element: <HelpCenter />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
}
