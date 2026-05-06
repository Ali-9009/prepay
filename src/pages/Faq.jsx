import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Do I need to create an account to make a purchase?",
        answer:
            "No — and that's intentional. You can top up a phone, activate an eSIM, or buy a gift card without registering. Just enter the number or details, pay, and you're done. If you want to track your order history, creating an account takes under a minute, but it's never required. ",
    },
    {
        question: "I paid but never got a confirmation email. Did my transaction actually go through?",
        answer:
            "Check your spam or promotions folder first — confirmation emails sometimes land there. If it's not there either, log in or use the order lookup with the email you used at checkout. Most transactions process instantly, but if more than 15 minutes have passed with no sign of your order, contact support with the last 4 digits of the card you used and we'll track it down.",
    },
    {
        question: "Can I top up someone else's phone without knowing their account password or carrier details?",
        answer:
            "Yes. You only need their phone number — we handle the rest. Hello Prepay sends the credit directly to the number through the carrier's system. The recipient doesn't need to do anything on their end. This works for numbers in the U.S. and across dozens of international carriers.",
    },
    {
        question: "What happens if I top up the wrong number by mistake?",
        answer:
            "Act fast. Once a top-up is successfully delivered to a number, the carrier marks it as fulfilled and it can't be reversed from our end. That's why we show a review screen before every payment. If the delivery failed — meaning the credit never actually reached anyone — we'll refund you in full. Contact support within 48 hours with your order ID.",
    },
    {
        question: "Which payment methods do you accept, and is it safe to enter my card here?",
        answer:
            "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay. The site is SSL-encrypted end to end, and we never store your card details after a transaction is complete. Your financial information is never shared with third parties — including the carriers we work with.",
    },
    {
        question: "My phone says 'eSIM not supported' — does that mean I can't activate one?",
        answer:
            "It usually means one of two things: the device predates eSIM support (most models before 2019 don't have it), or the phone is carrier-locked from your previous provider. A locked phone won't accept a new eSIM even if the hardware supports it. Contact your previous carrier to request an unlock — it's free if you've completed your contract. You can check your specific model's eSIM support in your phone settings under 'About' or 'SIM Status'.",
    },
    {
        question: "Q2  I already have a physical SIM card. Can I add an eSIM without losing my current number?",
        answer:
            "Yes, on most dual-SIM phones (including iPhone XS and later, and most flagship Android devices). Your physical SIM stays active on your existing number while the eSIM runs a separate line. This is useful if you want a data-only plan on the eSIM or a second number without carrying two phones. Just make sure your device supports Dual SIM Dual Standby (DSDS) before buying.",
    },
    {
        question: "How do I know which carrier's plan will actually have good coverage where I live before I commit?",
        answer:
            "Use our compatibility checker on this page — enter your IMEI to see which networks your device supports. From there, check each carrier's official coverage map for your specific zip code before choosing. As a general rule: AT&T and T-Mobile have the strongest 5G footprint in cities; Verizon tends to perform better in rural and suburban areas. If you're near a state border or in a coverage gap, check more than one map",
    },
    {
        question: "I activated my eSIM but I have no signal at all. What do I check first?",
        answer:
            "Start with the basics: go to Settings > Mobile/Cellular and confirm the eSIM line is turned on and set as active. If it shows as active but there's still no signal, try toggling Airplane Mode on and off to force the phone to reconnect to the network. If that doesn't work, restart the device. Still nothing? The eSIM profile may not have downloaded fully — contact support and we can re-send the QR code or provisioning link.",
    },
    {
        question: "Can I transfer my eSIM to a new phone if I upgrade my device?",
        answer:
            "It depends on the carrier. Some carriers allow eSIM transfers to a new device through their app or by contacting support. Others issue a new eSIM profile and deactivate the old one. You can't physically move an eSIM like a SIM card — the profile lives in the device. If you're planning to switch phones, contact the carrier before you factory reset your old device, because the eSIM profile may not be recoverable once the device is wiped.",
    },
];

export default function FAQ({ start = 0, end = faqs.length }) {
    const [openIndex, setOpenIndex] = useState(null);

    const visibleFaqs = faqs.slice(start, end);

    return (
        <div className="max-w-3xl mx-auto px-4 py-16">

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
                Frequently Asked <span className="text-black">Questions</span>
            </h2>

            <div className="space-y-4">
                {visibleFaqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className="group border border-gray-200 rounded-2xl bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            {/* Question */}
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="w-full flex justify-between items-center px-5 py-4 text-left"
                            >
                                <span className="font-medium text-gray-900 group-hover:text-black transition">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer with animation */}
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}