import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "How does a prepaid eSIM work?",
        answer:
            "A prepaid eSIM (embedded SIM) is a digital version of a physical SIM card. It's embedded directly into your phone, virtually identifying your device to secure a network connection. This technology allows for instant service activation without waiting for a physical SIM card. Prepaid eSIM plans often have a specified expiry date, with most expiring within a month, though some can last for 365 days or even indefinitely. You'll be informed of the expiry date before purchasing.",
    },
    {
        question: "How to activate an eSIM on a Smartphone (Apple & Android)?",
        answer:
            "To activate an eSIM, you'll typically need to follow the instructions provided by the eSIM provider. For HelloPrepay, once you choose to go with an eSIM, you can visit our Activation Page for assistance. If your phone is eSIM-enabled, the technology will be embedded inside the device, allowing you to activate your service almost instantly, either manually or using a QR code received via email.",
    },
    {
        question: "Where can I buy an eSIM?",
        answer:
            "You can purchase eSIMs from HelloPrepay. We offer specific regions like Canada, Mexico, USA, etc. We offer different Mobile eSIM services including T-Mobile, AT&T, Cricket Wireless and many more.",
    },
    {
        question: "What phones can I use with an eSIM?",
        answer:
            "Phones that are eSIM-compatible can use this technology. Many modern devices offer Dual SIM capabilities, meaning they include both a physical SIM slot and an eSIM. You can check with your phone manufacturer or service provider to determine if your device supports eSIM.",
    },
    {
        question: "Which carriers offer eSIM options?",
        answer:
            "Many carriers now offer eSIM options. HelloPrepay provides eSIM plans with various features, including unlimited data and international calling options. We also carry major carriers like AT&T, and T-Mobile eSIMs.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="max-w-3xl mx-auto py-12">
            <h2 className="primary-heading">
                Frequently Asked Questions
            </h2>

            <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg overflow-hidden bg-white"
                    >
                        {/* Question */}
                        <button
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                            className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-900 font-medium hover:bg-gray-50 transition"
                        >
                            <span>{faq.question}</span>
                            {openIndex === index ? (
                                <ChevronUp size={18} />
                            ) : (
                                <ChevronDown size={18} />
                            )}
                        </button>

                        {/* Answer */}
                        {openIndex === index && (
                            <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}