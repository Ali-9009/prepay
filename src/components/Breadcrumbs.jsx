// src/components/Breadcrumbs.jsx
import { Link, useLocation } from "react-router-dom";

// Optional: map routes to nicer display names
const routeNameMap = {
    "How-its-work": "How It Works",
    StoreLocator: "Store Locations",
    Faq: "FAQ",
    Contact: "Contact",
    PrivacyPolicy: "Privacy Policy",
    RefundPolicy: "Refund Policy",
    TermsConditions: "Terms & Conditions",
    DMCA: "DMCA",
    SignIn: "Sign In",
    ActivationFlow: "Activation Flow",
    ActivationFlow2: "Activation Flow 2",
    Activation: "Activation",
    TopUpMobile: "Top-Up Mobile",
    ActivateStep: "Activate Step",
    InternationalTopUp: "International Top-Up",
    Checkout: "Checkout",
    myline: "My Line",
    profile: "Profile",
    billing: "Billing",
    referral: "Referral",
    helpcenter: "Help Center",
    invoice: "Invoice",
    changeplan: "Change Plan",
    adddata: "Add Data",
    purchase: "Purchase",
    stepperform: "Step Form",
    Stepperform2: "Step Form 2",
    Stepperform3: "Step Form 3",
    PrepayGift: "Prepay Gift",
    Unsubscribe: "Unsubscribe",
    TwoStepForm: "Two Step Form",
};

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <div className="bg-red-50 pt-4">
            <nav className="text-sm font-semibold max-w-5xl md:px-0 px-4 mx-auto text-gray-500 pb-4">
                <Link to="/" className="hover:text-gray-700">
                    Home
                </Link>
                {pathnames.map((segment, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    const displayName = routeNameMap[segment] || segment;

                    return isLast ? (
                        <span key={routeTo} className="ml-1">
                            {" > "} {displayName}
                        </span>
                    ) : (
                        <Link key={routeTo} to={routeTo} className="ml-1 hover:text-gray-700">
                            {" > "} {displayName}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default Breadcrumbs;