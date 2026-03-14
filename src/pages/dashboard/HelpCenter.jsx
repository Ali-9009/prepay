import { Search, CircleQuestionMark, BookOpen, Bug } from "lucide-react";

import Sidebar from "./Sidebar";
import FAQ from "../Faq";
import Button from "../../components/Gbtn";

export default function HelpCenter() {

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Sidebar />

        {/* content */}
        <div className="flex-1 bg-[#fbfbfb] rounded-xl p-8">
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

            <FAQ />

          </div>
        </div>

        {/* Support */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-2">Still Need Help?</h3>
          <p className="text-gray-800 text-md mb-6">
            Our support team typically responds within 24 hours.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="border border-gray-300 rounded-lg p-4">
              <p className="text-md font-semibold">Social Media</p>
              <p className="text-xs py-2">Stay in the loop  follow us on social media.</p>
              <Button text="Contact Us" />
            </div>

             <div className="border border-gray-300 rounded-lg p-4">
              <p className="text-md font-semibold">Live Chat</p>
              <p className="text-xs py-2">Chat with us live we’re here to help!</p>
              <Button text="Start Chat" />
            </div>

             <div className="border border-gray-300 rounded-lg p-4">
              <p className="text-md font-semibold">Phone</p>
              <p className="text-xs py-2">Speak directly with our support team.</p>
              <Button text="Call Now" />
            </div>

             <div className="border border-gray-300 rounded-lg p-4">
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
