import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import { lazy, Suspense } from "react";
import "./App.css";

// Pages
import Home from "./pages/Home";
import How_its_work from "./pages/How-its-work";
import StoreLocations from "./pages/StoreLocator";
import FAQ from "./pages/Faq";
import Contact from "./pages/Contact";
import NavPage from "./pages/NavPage";
import DetailPage from "./pages/DetailPage";

// Lazy-load Policies
const PrivacyPolicy = lazy(() => import("./pages/policies/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("./pages/policies/RefundPolicy"));
const TermsConditions = lazy(() => import("./pages/policies/TermsConditions"));
const DMCA = lazy(() => import("./pages/policies/DMCA"));

// Auth
import SignIn from "./pages/auth/SignIn";

// Activation
import ActivationFlow from "./pages/Activation/ActivationFlow";
import ActivationFlow2 from "./pages/Activation/ActivationFlow2";
import Activation from "./pages/Activation/Activate";

// Top-Up
import TopUpMobile from "./pages/TopUp/TopUpMobile";
import ActivateStep from "./pages/TopUp/ActivateStep";
import InternationalTopUp from "./pages/TopUp/InternationalTopUp";
import Checkout from "./pages/TopUp/Checkout";

// Lazy-load Dashboard pages
const MyLine = lazy(() => import("./pages/dashboard/MyLine"));
const Profile = lazy(() => import("./pages/dashboard/Profile"));
const Billing = lazy(() => import("./pages/dashboard/Billing"));
const Referral = lazy(() => import("./pages/dashboard/Referral"));
const HelpCenter = lazy(() => import("./pages/dashboard/HelpCenter"));
const Invoice = lazy(() => import("./pages/dashboard/Invoice"));
const ChangePlan = lazy(() => import("./pages/dashboard/ChangePlan"));
const AddData = lazy(() => import("./pages/dashboard/AddData"));

// Start Activation
import Purchase from "./pages/StartActivation/Purchase";
import StepperForm from "./pages/StartActivation/StepperForm";

// Port-In
import StepperForm2 from "./pages/PortIn/StepperForm2";

// New Sim
import StepperForm3 from "./pages/NewSim/StepperForm3";

// Other
import PrepayGift from "./pages/PrepayGift";
import Unsubscribe from "./pages/Unsubscribe";
import TwoStepForm from "./pages/Activation/TwoStepForm";
import WhySection from "./components/WhySection";

import PurchasePsim from "./pages/P_sim/PurchasePsim";
import PSimLayout from "./pages/P_sim/PSimLayout";
// import Step1 from "./pages/P_sim/Step1";
// import Step2 from "./pages/P_sim/Step2";
// import Step3 from "./pages/P_sim/Step3";
// import Step4 from "./pages/P_sim/Step4";
// import Step5 from "./pages/P_sim/Step5";
// import Step6 from "./pages/P_sim/Step6";
// import Step7 from "./pages/P_sim/Step7";
// import Step8 from "./pages/P_sim/Step8";


import PurchaseEsim from "./pages/E_sim/PurchaseEsim";
// import EStep1 from "./pages/E_sim/EStep1";
// import EStep2 from "./pages/E_sim/EStep2";
// import EStep3 from "./pages/E_sim/EStep3";
// import EStep4 from "./pages/E_sim/EStep4";
// import EStep5 from "./pages/E_sim/EStep5";
// import EStep6 from "./pages/E_sim/EStep6";
// import EStep6_1 from "./pages/E_sim/EStep6_1";
import ESimLayout from "./pages/E_sim/ESimLayout";
import PurchasePort from "./pages/Port_In/PurchasePort";
import PortInLayout from "./pages/Port_In/PortInLayout";
import PurchasePortInPSim from "./pages/Port_In_PSim/PurchasePortInPsim";
import PortInPSimLayout from "./pages/Port_In_PSim/PortInPSimLayout";




const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      // Main Pages
      { path: "/", element: <Home /> },
      { path: "/How-its-work", element: <How_its_work /> },
      { path: "/StoreLocator", element: <StoreLocations /> },
      { path: "/Faq", element: <FAQ /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/:category", element: <NavPage /> },
      { path: "/DetailPage", element: <DetailPage /> },

      // Policies
      { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
      { path: "/RefundPolicy", element: <RefundPolicy /> },
      { path: "/TermsConditions", element: <TermsConditions /> },
      { path: "/DMCA", element: <DMCA /> },

      // Auth
      { path: "/SignIn", element: <SignIn /> },

      // Activation
      { path: "/ActivationFlow", element: <ActivationFlow /> },
      { path: "/ActivationFlow2", element: <ActivationFlow2 /> },
      { path: "/Activation", element: <Activation /> },

      // Top-Up
      { path: "/TopUpMobile", element: <TopUpMobile /> },
      { path: "/ActivateStep", element: <ActivateStep /> },
      { path: "/InternationalTopUp", element: <InternationalTopUp /> },
      { path: "/Checkout", element: <Checkout /> },

      // Dashboard
      { path: "/dashboard/myline", element: <MyLine /> },
      { path: "/dashboard/profile", element: <Profile /> },
      { path: "/dashboard/billing", element: <Billing /> },
      { path: "/dashboard/referral", element: <Referral /> },
      { path: "/dashboard/helpcenter", element: <HelpCenter /> },
      { path: "/dashboard/myline/invoice", element: <Invoice /> },
      { path: "/dashboard/myline/changeplan", element: <ChangePlan /> },
      { path: "/dashboard/myline/adddata", element: <AddData /> },

      // Start Activation
      { path: "/startactivation/purchase", element: <Purchase /> },
      { path: "/startactivation/stepperform", element: <StepperForm /> },

      // Port-In
      { path: "/PortIn/Stepperform2", element: <StepperForm2 /> },

      // New Sim
      { path: "/NewSim/Stepperform3", element: <StepperForm3 /> },

      // Other
      { path: "/PrepayGift", element: <PrepayGift /> },
      { path: "/Unsubscribe", element: <Unsubscribe /> },
      { path: "/TwoStepForm", element: <TwoStepForm /> },
      { path: "/WhySection", element: <WhySection /> },

      // P_Sim
      { path: "/purchasePsim", element: <PurchasePsim /> },
      { path: "/psimLayout", element: <PSimLayout /> },
      // { path: "/step1", element: <Step1 /> },
      // { path: "/step2", element: <Step2 /> },
      // { path: "/step3", element: <Step3 /> },
      // { path: "/step4", element: <Step4 /> },
      // { path: "/step5", element: <Step5 /> },
      // { path: "/step6", element: <Step6 /> },
      // { path: "/step7", element: <Step7 /> },
      // { path: "/step8", element: <Step8 /> },


      // E_Sim
      { path: "/purchaseEsim", element: <PurchaseEsim /> },
      { path: "/eSimLayout", element: <ESimLayout /> },
      // { path: "/eSim/step1", element: <EStep1 /> },
      // { path: "/eSim/step2", element: <EStep2 /> },
      // { path: "/eSim/step3", element: <EStep3 /> },
      // { path: "/eSim/step4", element: <EStep4 /> },
      // { path: "/eSim/step5", element: <EStep5 /> },
      // { path: "/eSim/step6", element: <EStep6 /> },
      // { path: "/eSim/step6_1", element: <EStep6_1 /> },


      // Port_In
      { path: "/purchasePort", element: <PurchasePort /> },
      { path: "/portInLayout", element: <PortInLayout /> },
      
      // Port-In-PSim
      { path: "/purchasePortIn", element: <PurchasePortInPSim /> },
      { path: "/portInPSimLayout", element: <PortInPSimLayout /> },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}