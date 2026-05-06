import { Search, CircleQuestionMark, BookOpen, Bug, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import Sidebar from "./Sidebar";
import FAQ from "../Faq";
import Button from "../../components/Gbtn";


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
];

export default function HelpCenter() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Sidebar />

        {/* content */}
        <div className="flex-1 bg-[#fbfbfb] rounded-xl p-4">
          <div className="max-w-6xl mx-auto">

            {/* Title */}
            <div className="text-center bg-[url('/images/bg-support.png')] bg-no-repeat bg-top bg-contain mb-8 md:py-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Help Center
              </h2>

              <p className="mb-6 text-md">24/7 bilingual customer support in both Chinese and English.</p>

              {/* Search */}
              <div className="max-w-xl mx-auto relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="What can we help you with?"
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 shadow-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Top Cards */}
            <div className="bg-linear-to-b from-red-500 to-white p-4 md:p-6 mb-10 space-y-3">

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 cursor-pointer">
                <span className="text-xl"><CircleQuestionMark /></span>
                <div>
                  <p className="font-semibold text-md">Frequently asked questions</p>
                  <p className="text-sm">Most commonly asked questions</p>
                  <div className="flex flex-row items-center justify-center gap-2 mt-2">
                    <img src="/images/pro.png" alt="" />
                    <p className="text-xs ">By Roger and 2 others . 8 articles</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 cursor-pointer">
                <span className="text-xl"><BookOpen /></span>
                <div>
                  <p className="font-semibold text-md">How to Guides</p>
                  <p className="text-sm">Step-by-step instructions for managing your account</p>
                  <div className="flex flex-row items-center justify-center gap-2 mt-2">
                    <img src="/images/pro.png" alt="" />
                    <p className="text-xs ">By Roger and 2 others . 16 articles</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 cursor-pointer">
                <span className="text-xl"><Bug /></span>
                <div>
                  <p className="font-semibold text-md">Troubleshooting</p>
                  <p className="text-sm">What to do when you experience issues</p>
                  <div className="flex flex-row items-center justify-center gap-2 mt-2">
                    <img src="/images/pro.png" alt="" />
                    <p className="text-xs ">By Roger and 1 other . 2 articles</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Questions + Guide */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Questions */}
              <div>
                <p className="text-red-500 text-xs font-semibold mb-2">
                  FREQUENTLY ASKED QUESTIONS
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  Have Questions? We've Got Answers.
                </h3>

                <p className="text-gray-800 text-mb mb-6">
                  Get answers to commonly asked questions about our services.
                </p>

                <button className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100">
                  See more FAQs
                </button>
              </div>

              {/* Guide Accordion */}
              <div className="space-y-3">

                <div className="max-w-3xl mx-auto">
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
                          <span className="pr-3">{faq.question}</span>

                          <span className="shrink-0">
                            {openIndex === index ? (
                              <ChevronUp size={18} />
                            ) : (
                              <ChevronDown size={18} />
                            )}
                          </span>
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

              </div>
            </div>

            {/* Support */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold mb-2">Still Need Help?</h3>
              <p className="text-gray-800 text-md mb-6">
                Our support team typically responds within 24 hours.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                <div className="border border-gray-300 rounded-lg p-3">
                  <p className="text-md font-semibold">Social Media</p>
                  <p className="text-xs py-2">Stay in the loop  follow us on social media.</p>
                  <Button text="Contact Us" />
                </div>

                <div className="border border-gray-300 rounded-lg p-3">
                  <p className="text-md font-semibold">Live Chat</p>
                  <p className="text-xs py-2">Chat with us live we’re here to help!</p>
                  <Button text="Start Chat" />
                </div>

                <div className="border border-gray-300 rounded-lg p-3">
                  <p className="text-md font-semibold">Phone</p>
                  <p className="text-xs py-2">Speak directly with our support team.</p>
                  <Button text="Call Now" />
                </div>

                <div className="border border-gray-300 rounded-lg p-3">
                  <p className="text-md font-semibold">Email</p>
                  <p className="text-xs py-2">Fast email support for all your inquiries.</p>
                  <Button text="Eamil Now" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
